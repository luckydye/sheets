import { invoke } from "@tauri-apps/api/core";

// Mirrors the Rust `OpenedFile` struct returned by the `open_file` command.
interface OpenedFile {
  path: string;
  name: string;
  data: number[];
}

export interface OpenResult {
  path: string;
  name: string;
  bytes: Uint8Array;
}

/**
 * Shows an open dialog and returns the workbook as IronCalc `.ic` bytes
 * (the Rust side converts `.xlsx` on the way in). Returns null if cancelled.
 */
export async function openFile(): Promise<OpenResult | null> {
  const res = await invoke<OpenedFile | null>("open_file");
  if (!res) return null;
  return { path: res.path, name: res.name, bytes: new Uint8Array(res.data) };
}

/**
 * Opens a workbook from a known path (e.g. a drag-and-dropped file),
 * returning it as IronCalc `.ic` bytes.
 */
export async function openPath(path: string): Promise<OpenResult> {
  const res = await invoke<OpenedFile>("open_path", { path });
  return { path: res.path, name: res.name, bytes: new Uint8Array(res.data) };
}

/**
 * Writes `.ic` bytes (from `model.toBytes()`) to an existing path.
 * The Rust side converts to `.xlsx` when the path ends in `.xlsx`.
 */
export async function saveFile(path: string, bytes: Uint8Array): Promise<void> {
  await invoke("save_file", { path, data: Array.from(bytes) });
}

/**
 * Shows a save dialog (defaulting to `.xlsx`) and writes the workbook.
 * Returns the chosen path, or null if cancelled.
 */
export async function saveFileAs(
  bytes: Uint8Array,
  defaultName: string,
): Promise<string | null> {
  return invoke<string | null>("save_file_as", {
    data: Array.from(bytes),
    defaultName,
  });
}
