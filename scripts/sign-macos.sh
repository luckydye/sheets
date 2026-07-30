#!/usr/bin/env bash
# Properly code-signs the built macOS bundle.
#
# `tauri build` leaves the binary *linker-signed* only: `codesign -dvvv` reports
# `Info.plist=not bound` and `Sealed Resources=none`. Gatekeeper cannot assess
# such a bundle, so when Finder routes a quarantined document to it (e.g. an
# .xlsx downloaded from Mail or a browser) macOS refuses with
# "Apple could not verify <file> is free of malware".
#
# Re-signing the whole bundle binds Info.plist and seals resources, which is
# what makes Sheets a trustworthy document handler on this machine.
#
#   APPLE_SIGNING_IDENTITY unset -> ad-hoc signature (valid on THIS Mac only)
#   APPLE_SIGNING_IDENTITY set   -> real Developer ID; also required to notarize
#                                   for distribution to other Macs.
set -euo pipefail

APP="${1:-src-tauri/target/release/bundle/macos/Sheets.app}"
[ -d "$APP" ] || { echo "No bundle at $APP — run 'task build' first." >&2; exit 1; }

IDENTITY="${APPLE_SIGNING_IDENTITY:--}"
ENTITLEMENTS="$(cd "$(dirname "$0")/.." && pwd)/src-tauri/entitlements.plist"

# A secure timestamp needs a real identity (and network); ad-hoc can't have one.
if [ "$IDENTITY" = "-" ]; then TS=(--timestamp=none); else TS=(--timestamp); fi

echo "Signing $APP with identity: $IDENTITY"
codesign --force --deep \
  --sign "$IDENTITY" \
  --entitlements "$ENTITLEMENTS" \
  --options runtime \
  "${TS[@]}" \
  "$APP"

# A locally built app shouldn't carry quarantine, but a bundle that was zipped
# or copied through a download path will.
xattr -dr com.apple.quarantine "$APP" 2>/dev/null || true

# Make LaunchServices pick up the .xlsx / .ic associations immediately instead
# of waiting for a rescan, so "Open With > Sheets" appears right away.
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister \
  -f "$APP"

echo
codesign -dvvv "$APP" 2>&1 | grep -E 'Signature|Info.plist|Sealed Resources|TeamIdentifier'
echo
if [ "$IDENTITY" = "-" ]; then
  echo "Ad-hoc signed: opens fine on this Mac. To ship to other Macs you need a"
  echo "Developer ID identity plus notarization (see README)."
fi
