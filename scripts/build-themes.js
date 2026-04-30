#!/usr/bin/env node

/**
 * Build script to package all theme CSS files into the themes/ directory
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const themesDir = path.join(rootDir, 'themes');

// Ensure themes directory exists
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// Theme mappings: directory name -> theme ID
const themeMappings = {
  'dave-graphite': 'graphite',
  'dave-solarized': 'solarized',
  'dave-duotone': 'duotone',
  'dave-toothpaste': 'toothpaste',
  'dave-charcoal': 'charcoal',
  'dave-dracula': 'dracula',
  'dave-gotham': 'gotham',
  'dave-high-contrast': 'high-contrast',
  'dave-panic-mode': 'panic-mode',
  'dave-cobalt': 'cobalt',
  'dave-dieci': 'dieci',
  'dave-ayu': 'ayu'
};

console.log('Building theme CSS files...\n');

Object.entries(themeMappings).forEach(([dirName, themeId]) => {
  const sourcePath = path.join(rootDir, dirName, 'theme.css');
  const targetPath = path.join(themesDir, `${themeId}.css`);
  
  if (fs.existsSync(sourcePath)) {
    // Read and process CSS
    let cssContent = fs.readFileSync(sourcePath, 'utf-8');
    
    // Add theme identifier comment
    cssContent = `/* Dave Theme: ${themeId} */\n${cssContent}`;
    
    // Write to themes directory
    fs.writeFileSync(targetPath, cssContent);
    console.log(`✓ ${themeId}: ${dirName}/theme.css -> themes/${themeId}.css`);
  } else {
    console.warn(`✗ ${themeId}: Source file not found: ${sourcePath}`);
  }
});

console.log('\nBuild complete!');
console.log(`Output directory: ${themesDir}`);
console.log(`Themes: ${fs.readdirSync(themesDir).length} files`);
