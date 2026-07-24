import { useCallback, useEffect, useRef, useState } from "react";
import { IronCalc, init, Model } from "@ironcalc/workbook";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { getCurrentWebview } from "@tauri-apps/api/webview";
import { listen } from "@tauri-apps/api/event";
import { openFile, openPath, saveFile, saveFileAs } from "./fileApi";

const SUPPORTED = /\.(xlsx|ic)$/i;
// Let Vite own the wasm asset URL (correct in both dev and production builds).
// This avoids wasm-bindgen's `new URL('wasm_bg.wasm', import.meta.url)` guess,
// which resolves to the wrong path once the package is pre-bundled by Vite.
import wasmUrl from "@ironcalc/wasm/wasm_bg.wasm?url";

const DEFAULT_NAME = "Untitled.xlsx";

export default function App() {
  const [model, setModel] = useState<Model | null>(null);
  // Bumped whenever we swap in a different Model, to force IronCalc to remount.
  const [modelId, setModelId] = useState(0);
  const [path, setPath] = useState<string | null>(null);
  const [name, setName] = useState(DEFAULT_NAME);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const modelRef = useRef<Model | null>(null);
  modelRef.current = model;

  const install = useCallback(
    (m: Model, p: string | null, n: string) => {
      setModel(m);
      setModelId((id) => id + 1);
      setPath(p);
      setName(n);
      setDirty(false);
      setError(null);
    },
    [],
  );

  // Boot the WASM engine and open a blank workbook.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await init(wasmUrl);
        if (cancelled) return;
        install(new Model("Untitled", "en", "UTC", "en"), null, DEFAULT_NAME);
      } catch (e) {
        if (!cancelled) setError(`Engine failed to load: ${String(e)}`);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [install]);

  // Reflect file + dirty state in the window title.
  useEffect(() => {
    getCurrentWindow()
      .setTitle(`${dirty ? "• " : ""}${name} — Sheets`)
      .catch(() => {});
  }, [name, dirty]);

  // Mark the document dirty on a content-editing keystroke inside the grid.
  // (IronCalc's send-queue mixes in view/selection changes, so we key off
  // actual edits instead — a fresh, untouched file stays clean.)
  const markDirty = useCallback(() => setDirty(true), []);
  const onHostKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      const edits =
        e.key === "Enter" ||
        e.key === "Backspace" ||
        e.key === "Delete" ||
        (!mod && e.key.length === 1) || // a typed character
        (mod && ["v", "x", "z", "y"].includes(e.key.toLowerCase())); // paste/cut/undo/redo
      if (edits) setDirty(true);
    },
    [],
  );

  const newFile = useCallback(() => {
    install(new Model("Untitled", "en", "UTC", "en"), null, DEFAULT_NAME);
  }, [install]);

  const open = useCallback(async () => {
    setBusy(true);
    try {
      const res = await openFile();
      if (res) install(Model.from_bytes(res.bytes, "en"), res.path, res.name);
    } catch (e) {
      setError(String(e));
    } finally {
      setBusy(false);
    }
  }, [install]);

  const openDroppedPath = useCallback(
    async (filePath: string) => {
      if (!SUPPORTED.test(filePath)) {
        setError("Unsupported file — drop a .xlsx or .ic file.");
        return;
      }
      setBusy(true);
      try {
        const res = await openPath(filePath);
        install(Model.from_bytes(res.bytes, "en"), res.path, res.name);
      } catch (e) {
        setError(String(e));
      } finally {
        setBusy(false);
      }
    },
    [install],
  );

  const saveAs = useCallback(async () => {
    const m = modelRef.current;
    if (!m) return;
    setBusy(true);
    try {
      const savedPath = await saveFileAs(m.toBytes(), name);
      if (savedPath) {
        setPath(savedPath);
        setName(savedPath.split(/[/\\]/).pop() || name);
        setDirty(false);
      }
    } catch (e) {
      setError(String(e));
    } finally {
      setBusy(false);
    }
  }, [name]);

  const save = useCallback(async () => {
    const m = modelRef.current;
    if (!m) return;
    if (!path) return saveAs();
    setBusy(true);
    try {
      await saveFile(path, m.toBytes());
      setDirty(false);
    } catch (e) {
      setError(String(e));
    } finally {
      setBusy(false);
    }
  }, [path, saveAs]);

  // Dispatch native menu-bar actions (New / Open / Save / Save As). The menu
  // and its Cmd+N/O/S accelerators live in Rust; it emits a `menu` event here.
  // A ref keeps the latest handlers so we subscribe only once.
  const actions = useRef({ newFile, open, save, saveAs });
  actions.current = { newFile, open, save, saveAs };
  useEffect(() => {
    const unlisten = listen<string>("menu", ({ payload }) => {
      const a = actions.current;
      if (payload === "new") a.newFile();
      else if (payload === "open") a.open();
      else if (payload === "save") a.save();
      else if (payload === "save_as") a.saveAs();
    });
    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  // Open workbooks dropped onto the window. Tauri intercepts OS file drops and
  // emits tauri://drag-drop with real filesystem paths.
  const dropHandler = useRef(openDroppedPath);
  dropHandler.current = openDroppedPath;
  useEffect(() => {
    const unlisten = getCurrentWebview().onDragDropEvent((event) => {
      const p = event.payload;
      if (p.type === "enter" || p.type === "over") {
        setDragging(true);
      } else if (p.type === "leave") {
        setDragging(false);
      } else if (p.type === "drop") {
        setDragging(false);
        const first = p.paths?.[0];
        if (first) dropHandler.current(first);
      }
    });
    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  if (!model) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-center text-sm text-gray-500">
        {error ? (
          <pre className="max-w-full whitespace-pre-wrap text-left text-red-600">
            {error}
          </pre>
        ) : (
          "Loading engine…"
        )}
      </div>
    );
  }

  return (
    <div
      className="ironcalc-host h-full"
      onKeyDownCapture={onHostKeyDown}
      onPasteCapture={markDirty}
      onCutCapture={markDirty}
    >
      <IronCalc key={modelId} model={model} />
      {dragging && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-blue-500/10 ring-4 ring-inset ring-blue-500/60">
          <div className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
            Drop a .xlsx or .ic file to open
          </div>
        </div>
      )}
      {error && (
        <button
          type="button"
          onClick={() => setError(null)}
          title="Click to dismiss"
          className="absolute bottom-4 left-4 z-50 max-w-[70%] truncate rounded bg-red-600 px-3 py-1.5 text-left text-sm text-white shadow-lg"
        >
          {error}
        </button>
      )}
    </div>
  );
}
