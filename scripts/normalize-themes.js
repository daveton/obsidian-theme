#!/usr/bin/env node

/**
 * Normalize all theme CSS files to use consistent syntax
 * based on the template structure. Preserves color schemes.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'templates', 'theme-template.css');

// Theme definitions with their metadata
const themes = [
  { dir: 'dave-dracula', name: 'Dracula', desc: 'Dracula color palette', colors: {} },
  { dir: 'dave-ayu', name: 'Ayu', desc: 'Ayu Mirage color palette', colors: {} },
  { dir: 'dave-toothpaste', name: 'Toothpaste', desc: 'Fresh minty color palette', colors: {} },
  { dir: 'dave-cobalt', name: 'Cobalt', desc: 'Deep blue color palette', colors: {} },
  { dir: 'dave-duotone', name: 'Duotone', desc: 'Unified duotone with purple and warm variants', colors: {} },
  { dir: 'dave-gotham', name: 'Gotham', desc: 'Dark blue-based theme', colors: {} },
  { dir: 'dave-high-contrast', name: 'High Contrast', desc: 'High contrast dark theme', colors: {} },
  { dir: 'dave-panic-mode', name: 'Panic Mode', desc: 'Vibrant, eye-catching color palette', colors: {} },
  { dir: 'dave-solarized', name: 'Solarized', desc: 'Solarized color palette', colors: {} },
  { dir: 'dave-graphite', name: 'Graphite', desc: 'Neutral gray color palette', colors: {} },
  { dir: 'dave-charcoal', name: 'Charcoal', desc: 'Warm charcoal gray palette', colors: {} },
  { dir: 'dave-dieci', name: 'Dieci', desc: 'Minimal gray palette', colors: {} }
];

// Extract color variables from existing theme
function extractColors(cssContent) {
  const colors = {};
  const regex = /--([\w-]+):\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    colors[match[1]] = match[2].trim();
  }
  return colors;
}

// Generate theme CSS from template
function generateThemeCSS(theme, template, colors) {
  let css = template;
  
  // Replace metadata
  css = css.replace(/{ThemeName}/g, theme.name);
  css = css.replace(/{Description}/g, theme.desc);
  
  // Replace color variables with actual values
  Object.entries(colors).forEach(([key, value]) => {
    // Escape special regex characters in key
    const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const pattern = new RegExp(`(--${escapedKey}:)[^;]*;`, 'g');
    css = css.replace(pattern, `$1 ${value};`);
  });
  
  return css;
}

// Process each theme
console.log('Normalizing theme CSS files...\n');

themes.forEach(theme => {
  const sourcePath = path.join(rootDir, theme.dir, 'theme.css');
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  Skipping ${theme.name}: Source file not found`);
    return;
  }
  
  try {
    // Read existing theme and template
    const existingCSS = fs.readFileSync(sourcePath, 'utf-8');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Extract colors from existing theme
    const colors = extractColors(existingCSS);
    
    // Generate normalized CSS
    const normalizedCSS = generateThemeCSS(theme, template, colors);
    
    // Backup original
    const backupPath = sourcePath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.writeFileSync(backupPath, existingCSS);
    }
    
    // Write normalized CSS
    fs.writeFileSync(sourcePath, normalizedCSS);
    
    console.log(`✓ ${theme.name}: Normalized (${Object.keys(colors).length} variables extracted)`);
  } catch (err) {
    console.error(`✗ ${theme.name}: Error - ${err.message}`);
  }
});

console.log('\n✅ Theme normalization complete!');
console.log('Backups saved as .backup files');
