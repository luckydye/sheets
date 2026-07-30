# Sheets

<img width="1936" height="1118" alt="image" src="https://github.com/user-attachments/assets/c68f37c2-988a-4b81-856f-54448a9fba7c" />

A minimal, **offline** desktop table editor. It embeds the [IronCalc](https://github.com/ironcalc/ironcalc) spreadsheet UI (WebAssembly engine + React grid) inside a [Tauri](https://tauri.app) shell, and reads/writes real `.xlsx` files. Single file at a time — no accounts, no cloud, no sharing.

## Features

- Open / edit / save `.xlsx` workbooks (and IronCalc's native `.ic` format).
- Formulas, formatting, multiple sheets — the full IronCalc grid.
- Native menu bar — **File ▸ New / Open… / Save / Save As…** with `⌘N / ⌘O / ⌘S / ⌘⇧S`.
- **File ▸ Export ▸** Excel Workbook (`.xlsx`) or CSV (`.csv`, active sheet) — a copy, without changing the file you're editing.
- Open files by dragging them onto the window, or by double-clicking an `.xlsx` / `.ic` in Finder (see [Install on macOS](#install-on-macos)).
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

## Install on macOS

```sh
task install    # build, copy to /Applications, sign, register file associations
```

Sheets then appears under **Open With** for `.xlsx` and `.ic`, and double-clicking
one opens it (`Get Info ▸ Open with ▸ Change All…` to make it the default).

### Why signing matters here

`tauri build` leaves the bundle *linker-signed* only — `codesign -dvvv` reports
`Info.plist=not bound` and `Sealed Resources=none`. Gatekeeper can't assess a
bundle in that state, so handing it a **quarantined** document (any `.xlsx` that
arrived via a browser, Mail or Slack) fails with:

> Apple could not verify "…​.xlsx" is free of malware that may harm your Mac.

`scripts/sign-macos.sh` re-signs the whole bundle, which binds `Info.plist` and
seals resources. `task build` and `task install` run it automatically; `task sign`
re-runs it on its own.

Without `APPLE_SIGNING_IDENTITY` the signature is **ad-hoc**: valid on the Mac
that built it, which is all a local install needs. Note that in this case the
`.dmg` is assembled *before* the re-signing step, so it still contains the
unsigned app — it's for local use, not distribution.

To ship to other Macs, export a Developer ID Application certificate and set

```sh
export APPLE_SIGNING_IDENTITY="Developer ID Application: Your Name (TEAMID)"
```

before `task build`. Tauri then signs the app itself, before the `.dmg` is built.
Distribution also requires notarizing the result (`xcrun notarytool submit`) and
stapling the ticket.

## License

IronCalc is dual-licensed MIT OR Apache-2.0.
