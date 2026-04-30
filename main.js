/**
 * Dave Themes Plugin
 * A collection of 12 beautifully crafted Obsidian themes with easy switching
 */

const DEFAULT_SETTINGS = {
  activeTheme: 'graphite'
};

const THEMES = {
  'graphite': {
    name: 'Dave Graphite',
    description: 'Classic red accents on light/dark backgrounds',
    modes: ['light', 'dark']
  },
  'solarized': {
    name: 'Dave Solarized',
    description: 'Solarized Light + Solarized Dark',
    modes: ['light', 'dark']
  },
  'duotone': {
    name: 'Dave Duotone',
    description: 'Duotone Light (purple) + Duotone Heat (warm orange)',
    modes: ['light', 'dark']
  },
  'toothpaste': {
    name: 'Dave Toothpaste',
    description: 'Fresh mint colors',
    modes: ['light', 'dark']
  },
  'charcoal': {
    name: 'Dave Charcoal',
    description: 'Near-black dark theme',
    modes: ['dark']
  },
  'dracula': {
    name: 'Dave Dracula',
    description: 'Popular Dracula color scheme',
    modes: ['dark']
  },
  'gotham': {
    name: 'Dave Gotham',
    description: 'Deep blue theme',
    modes: ['dark']
  },
  'high-contrast': {
    name: 'Dave High Contrast',
    description: 'Maximum accessibility',
    modes: ['dark']
  },
  'panic-mode': {
    name: 'Dave Panic Mode',
    description: 'Vibrant pink/dark red',
    modes: ['dark']
  },
  'cobalt': {
    name: 'Dave Cobalt',
    description: 'Deep blue palette',
    modes: ['dark']
  },
  'dieci': {
    name: 'Dave Dieci',
    description: 'Warm amber-brown',
    modes: ['dark']
  },
  'ayu': {
    name: 'Dave Ayu',
    description: 'Ayu Mirage colors',
    modes: ['dark']
  }
};

class DaveThemesPlugin {
  constructor() {
    this.settings = { ...DEFAULT_SETTINGS };
    this.styleEl = null;
  }

  async init() {
    await this.loadSettings();
    
    // Add settings tab
    this.addSettingTab();
    
    // Apply active theme
    await this.applyTheme(this.settings.activeTheme);
    
    console.log('Dave Themes plugin loaded');
  }

  async loadSettings() {
    const data = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...data };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async applyTheme(themeId) {
    if (!THEMES[themeId]) {
      console.error(`Theme "${themeId}" not found`);
      return;
    }

    // Remove previous theme styles
    this.removeThemeStyles();

    // Load and apply new theme CSS
    try {
      const cssContent = await this.loadThemeCSS(themeId);
      if (cssContent) {
        this.injectThemeStyles(cssContent);
        document.body.setAttribute('data-dave-theme', themeId);
        console.log(`Applied theme: ${THEMES[themeId].name}`);
      }
    } catch (error) {
      console.error(`Failed to load theme "${themeId}":`, error);
    }
  }

  async loadThemeCSS(themeId) {
    try {
      // Get plugin directory
      const pluginDir = this.manifest.dir;
      const cssPath = `${pluginDir}/themes/${themeId}.css`;
      
      // Try to read the CSS file
      return await app.vault.adapter.read(cssPath);
    } catch (error) {
      console.error('Error loading CSS:', error);
      return null;
    }
  }

  injectThemeStyles(css) {
    this.styleEl = document.createElement('style');
    this.styleEl.id = 'dave-themes-styles';
    this.styleEl.textContent = css;
    document.head.appendChild(this.styleEl);
  }

  removeThemeStyles() {
    if (this.styleEl) {
      this.styleEl.remove();
      this.styleEl = null;
    }
    document.body.removeAttribute('data-dave-theme');
  }

  addSettingTab() {
    const plugin = this;
    
    class DaveThemesSettingTab extends obsidian.PluginSettingTab {
      constructor() {
        super(app, plugin);
      }

      display() {
        const { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: 'Dave Themes 设置' });
        
        // Theme selector
        new obsidian.Setting(containerEl)
          .setName('当前主题')
          .setDesc('选择要应用的主题')
          .addDropdown(dropdown => {
            dropdown.addOption('', '选择一个主题...');
            
            // Group by modes
            const lightDarkThemes = [];
            const darkOnlyThemes = [];
            
            Object.entries(THEMES).forEach(([id, theme]) => {
              if (theme.modes.includes('light') && theme.modes.includes('dark')) {
                lightDarkThemes.push(id);
              } else {
                darkOnlyThemes.push(id);
              }
            });
            
            if (lightDarkThemes.length > 0) {
              dropdown.addOption('__light_dark_header__', '━━ 浅色 + 深色 ━━');
              lightDarkThemes.forEach(id => {
                const theme = THEMES[id];
                dropdown.addOption(id, theme.name);
              });
            }
            
            if (darkOnlyThemes.length > 0) {
              dropdown.addOption('__dark_header__', '━━ 仅深色 ━━');
              darkOnlyThemes.forEach(id => {
                const theme = THEMES[id];
                dropdown.addOption(id, theme.name);
              });
            }
            
            dropdown.setValue(plugin.settings.activeTheme);
            dropdown.onChange(async (value) => {
              if (value && !value.startsWith('__')) {
                plugin.settings.activeTheme = value;
                await plugin.saveSettings();
                await plugin.applyTheme(value);
                this.display();
              }
            });
          });

        // Current theme info
        const activeTheme = THEMES[plugin.settings.activeTheme];
        if (activeTheme) {
          containerEl.createEl('h3', { text: '当前主题信息', cls: 'dave-theme-section-title' });
          
          const infoDiv = containerEl.createDiv('dave-theme-info');
          infoDiv.createEl('strong', { text: activeTheme.name });
          infoDiv.createEl('p', { text: activeTheme.description });
          
          const modesText = activeTheme.modes.includes('light') && activeTheme.modes.includes('dark')
            ? '支持浅色和深色模式'
            : '仅深色模式';
          infoDiv.createEl('small', { text: modesText, cls: 'dave-theme-modes' });
        }

        // All themes list
        containerEl.createEl('h3', { text: '所有主题', cls: 'dave-theme-section-title' });
        
        const themeList = containerEl.createDiv('dave-theme-list');
        Object.entries(THEMES).forEach(([id, theme]) => {
          const themeItem = themeList.createDiv('dave-theme-item');
          themeItem.style.marginBottom = '12px';
          themeItem.style.padding = '8px';
          themeItem.style.borderRadius = '4px';
          themeItem.style.background = 'var(--background-modifier-form-field)';
          
          const header = themeItem.createDiv();
          header.createEl('strong', { text: theme.name });
          header.createEl('small', { text: ` [${theme.modes.join('/')}]` });
          
          themeItem.createEl('p', { 
            text: theme.description, 
            cls: 'theme-desc',
            attr: { style: 'margin: 4px 0; font-size: 0.9em; opacity: 0.8;' }
          });
          
          const applyBtn = themeItem.createEl('button', { 
            text: '应用此主题',
            cls: 'mod-cta'
          });
          applyBtn.style.marginTop = '4px';
          applyBtn.addEventListener('click', async () => {
            plugin.settings.activeTheme = id;
            await plugin.saveSettings();
            await plugin.applyTheme(id);
            this.display();
          });
        });
      }
    }
    
    app.setting.registerSettingTab(DaveThemesSettingTab);
  }

  // Required Obsidian plugin methods
  loadData() {
    return app.vault.adapter.read(`${this.manifest.dir}/data.json`).catch(() => ({}));
  }

  saveData(data) {
    return app.vault.adapter.write(`${this.manifest.dir}/data.json`, JSON.stringify(data, null, 2));
  }
}

// Export for Obsidian
module.exports = DaveThemesPlugin;
