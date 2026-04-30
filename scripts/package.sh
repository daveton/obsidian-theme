#!/bin/bash

# 手动打包主题脚本
# Usage: ./scripts/package.sh [version]

VERSION=${1:-"1.0.0"}
mkdir -p releases

echo "Packaging themes for version $VERSION..."

for theme_dir in dave-*/; do
    theme_name=$(basename "$theme_dir")
    zip_file="releases/${theme_name}-v${VERSION}.zip"
    
    # Check if required files exist
    if [ -f "${theme_dir}theme.css" ] && [ -f "${theme_dir}manifest.json" ]; then
        zip -j "$zip_file" "${theme_dir}theme.css" "${theme_dir}manifest.json"
        echo "✓ Packaged: $theme_name"
    else
        echo "✗ Skipped $theme_name: missing theme.css or manifest.json"
    fi
done

echo ""
echo "All packages created in releases/"
ls -lh releases/
