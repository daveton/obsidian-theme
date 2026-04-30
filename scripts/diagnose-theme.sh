#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <vault_path> <theme_name> [reference_theme_dir]"
  echo "Example: $0 ~/Documents/MyVault Duotone test"
  exit 1
fi

VAULT_PATH="$1"
THEME_NAME="$2"
REFERENCE_DIR="${3:-test}"

TARGET_DIR="$VAULT_PATH/.obsidian/themes/$THEME_NAME"
TARGET_MANIFEST="$TARGET_DIR/manifest.json"
TARGET_CSS="$TARGET_DIR/theme.css"

REF_MANIFEST="$REFERENCE_DIR/manifest.json"
REF_CSS="$REFERENCE_DIR/theme.css"

fail=0

check_file() {
  local file="$1"
  if [[ -f "$file" ]]; then
    echo "[OK] $file"
  else
    echo "[MISSING] $file"
    fail=1
  fi
}

echo "== Obsidian theme diagnostics =="
echo "Vault: $VAULT_PATH"
echo "Theme: $THEME_NAME"
echo "Target dir: $TARGET_DIR"
echo

check_file "$TARGET_MANIFEST"
check_file "$TARGET_CSS"

if [[ -d "$TARGET_DIR/$THEME_NAME" ]]; then
  echo "[WARN] Nested folder detected: $TARGET_DIR/$THEME_NAME"
  echo "       Expected files should be directly under: $TARGET_DIR"
fi

echo
if [[ -f "$TARGET_MANIFEST" ]]; then
  echo "== Validate manifest.json =="
  if command -v jq >/dev/null 2>&1; then
    jq -e . "$TARGET_MANIFEST" >/dev/null && echo "[OK] JSON valid" || { echo "[FAIL] JSON invalid"; fail=1; }
  else
    python3 -m json.tool "$TARGET_MANIFEST" >/dev/null && echo "[OK] JSON valid (python)" || { echo "[FAIL] JSON invalid"; fail=1; }
  fi
fi

echo
if [[ -f "$REF_MANIFEST" && -f "$TARGET_MANIFEST" ]]; then
  echo "== Compare manifest keys with reference: $REFERENCE_DIR =="
  python3 - "$REF_MANIFEST" "$TARGET_MANIFEST" <<'PY'
import json, sys
ref = json.load(open(sys.argv[1], encoding='utf-8'))
tgt = json.load(open(sys.argv[2], encoding='utf-8'))
ref_keys, tgt_keys = set(ref), set(tgt)
print("Reference keys:", sorted(ref_keys))
print("Target keys:", sorted(tgt_keys))
print("Missing vs reference:", sorted(ref_keys - tgt_keys))
print("Extra vs reference:", sorted(tgt_keys - ref_keys))
PY
fi

echo
if [[ -f "$REF_CSS" && -f "$TARGET_CSS" ]]; then
  echo "== CSS size check =="
  ref_size=$(wc -c < "$REF_CSS")
  tgt_size=$(wc -c < "$TARGET_CSS")
  echo "Reference bytes: $ref_size"
  echo "Target bytes:    $tgt_size"
fi

if [[ $fail -ne 0 ]]; then
  echo
  echo "Diagnostics found blocking issues."
  exit 2
fi

echo
echo "Diagnostics finished. If theme still not visible, confirm Obsidian is opened on this Vault path and restart Obsidian."
