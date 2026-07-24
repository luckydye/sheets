#!/usr/bin/env bash
# Rebuilds the vendored IronCalc packages (vendor/ironcalc-wasm, vendor/ironcalc-workbook)
# from source at a pinned git tag.
#
# Why vendored + built from source:
#   IronCalc's native ".ic" workbook format is bitcode-serialized and is only
#   compatible between a WASM build and the Rust `ironcalc` crate when BOTH come
#   from the exact same commit. The published npm packages (@ironcalc/wasm 0.5.4,
#   @ironcalc/workbook 0.5.7) do NOT match any released crate, so the .ic bytes the
#   browser produces cannot be read by the Rust xlsx exporter. Building both the
#   WASM bindings and the React UI here from tag $IRONCALC_TAG guarantees the
#   frontend WASM and the Tauri backend's `ironcalc = "0.7.1"` crate agree on .ic.
#
# Requirements: rust + wasm32-unknown-unknown target, wasm-pack, bun (or npm), python3.
set -euo pipefail

IRONCALC_TAG="${IRONCALC_TAG:-v0.7.1}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo ">> Cloning ironcalc @ $IRONCALC_TAG"
git clone --depth 1 --branch "$IRONCALC_TAG" https://github.com/ironcalc/ironcalc "$WORK/ironcalc"

echo ">> Building WASM bindings (wasm-pack --target web)"
( cd "$WORK/ironcalc/bindings/wasm" && wasm-pack build --target web --scope ironcalc --release )

echo ">> Building workbook UI library (vite)"
( cd "$WORK/ironcalc/webapp/IronCalc" && bun install && bunx vite build )

echo ">> Vendoring artifacts into $REPO_ROOT/vendor"
WASM_SRC="$WORK/ironcalc/bindings/wasm/pkg"
cp "$WASM_SRC"/wasm.js "$WASM_SRC"/wasm_bg.wasm "$WASM_SRC"/wasm.d.ts \
   "$WASM_SRC"/wasm_bg.wasm.d.ts "$REPO_ROOT/vendor/ironcalc-wasm/"
cp "$WORK/ironcalc/webapp/IronCalc/dist/ironcalc.js" "$REPO_ROOT/vendor/ironcalc-workbook/dist/"

echo ">> Done. vendor/ironcalc-wasm and vendor/ironcalc-workbook updated from $IRONCALC_TAG."
echo "   (package.json / index.d.ts in those dirs are maintained by hand — leave them.)"
