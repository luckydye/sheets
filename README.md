# Sheets

<img width="1936" height="1118" alt="image" src="https://github.com/user-attachments/assets/c68f37c2-988a-4b81-856f-54448a9fba7c" />

A minimal, **offline** desktop table editor. It embeds the [IronCalc](https://github.com/ironcalc/ironcalc) spreadsheet UI (WebAssembly engine + React grid) inside a [Tauri](https://tauri.app) shell, and reads/writes real `.xlsx` files. Single file at a time — no accounts, no cloud, no sharing.

## Features

- Open / edit / save `.xlsx` workbooks (and IronCalc's native `.ic` format).
- Formulas, formatting, multiple sheets — the full IronCalc grid.
- Native menu bar — **File ▸ New / Open… / Save / Save As…** with `⌘N / ⌘O / ⌘S / ⌘⇧S`.
- **File ▸ Export ▸** Excel Workbook (`.xlsx`) or CSV (`.csv`, active sheet) — a copy, without changing the file you're editing.
- Open files by dragging them onto the window.
- Fully offline; nothing leaves your machine.

## How it works

IronCalc splits across the JS/Rust boundary:

- **Frontend** (`src/`) — React + Vite. The IronCalc WASM engine edits the workbook in memory. It only understands IronCalc's native **`.ic`** byte format.
- **Backend** (`src-tauri/`) — Rust. All `.xlsx` ⇄ `.ic` conversion happens here via the `ironcalc` crate, exposed through three commands (`open_file`, `save_file`, `save_file_as`) that also drive the native file dialogs.

### The vendored IronCalc packages

IronCalc's `.ic` format is `bitcode`-serialized and is only compatible between a WASM build and the Rust crate when **both come from the same commit**. The published npm packages don't line up with any released crate, so this repo vendors WASM + UI built from source at tag **`v0.7.1`** (matching `ironcalc = "0.7.1"` in `src-tauri/Cargo.toml`):

- `vendor/ironcalc-wasm/` — `@ironcalc/wasm`, `wasm-pack --target web`
- `vendor/ironcalc-workbook/` — `@ironcalc/workbook`, the React UI (`vite build`)

The UI is built with the local patches in `patches/` applied on top of the tag: the grid scrolls smoothly by the pixel instead of jumping a whole row/column, and it no longer re-wraps every visible cell's text on every frame. See `patches/README.md`.

To rebuild them (e.g. to bump the pinned version), run `task vendor` (see `scripts/build-ironcalc.sh`) then `bun install` to refresh the copies under `node_modules`.

## Prerequisites

- [Bun](https://bun.sh) and [Rust](https://rustup.rs) (Tauri needs a native toolchain).
- `mise install` provides Bun + Task; Rust is expected system-wide.
- To rebuild the vendored packages you also need `wasm-pack`, the `wasm32-unknown-unknown` target, and `python3`.

## Develop

```sh
task dev        # or: bun run tauri dev
```

First run compiles the Rust backend (a few minutes); afterwards the frontend hot-reloads.

## Build

```sh
task build      # or: bun run tauri build  -> native bundle in src-tauri/target/release/bundle
```

`task web` runs just the Vite frontend in a browser, but file open/save need the Tauri shell.

## License

IronCalc is dual-licensed MIT OR Apache-2.0.
