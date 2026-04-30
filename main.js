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
    
    // Add commands for quick theme switching
    this.addCommands();
    
    // Apply active theme (no animation on initial load)
    await this.applyTheme(this.settings.activeTheme, false);
    
    console.log('Dave Themes plugin loaded');
  }

  addCommands() {
    const plugin = this;
    
    // Add command: Next theme
    if (app.commands) {
      app.commands.addCommand({
        id: 'dave-themes-next',
        name: '切换到下一个主题',
        hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'T' }],
        callback: () => {
          plugin.switchToNextTheme();
        }
      });
      
      // Add command: Previous theme
      app.commands.addCommand({
        id: 'dave-themes-previous',
        name: '切换到上一个主题',
        hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'R' }],
        callback: () => {
          plugin.switchToPreviousTheme();
        }
      });
      
      // Add command: Random theme
      app.commands.addCommand({
        id: 'dave-themes-random',
        name: '随机切换主题',
        callback: () => {
          plugin.switchToRandomTheme();
        }
      });
      
      // Add command for each theme
      Object.keys(THEMES).forEach(themeId => {
        app.commands.addCommand({
          id: `dave-themes-${themeId}`,
          name: `切换主题: ${THEMES[themeId].name}`,
          callback: () => {
            plugin.settings.activeTheme = themeId;
            plugin.saveSettings();
            plugin.applyTheme(themeId);
          }
        });
      });
    }
  }

  switchToNextTheme() {
    const themeIds = Object.keys(THEMES);
    const currentIndex = themeIds.indexOf(this.settings.activeTheme);
    const nextIndex = (currentIndex + 1) % themeIds.length;
    const nextTheme = themeIds[nextIndex];
    
    this.settings.activeTheme = nextTheme;
    this.saveSettings();
    this.applyTheme(nextTheme);
  }

  switchToPreviousTheme() {
    const themeIds = Object.keys(THEMES);
    const currentIndex = themeIds.indexOf(this.settings.activeTheme);
    const prevIndex = (currentIndex - 1 + themeIds.length) % themeIds.length;
    const prevTheme = themeIds[prevIndex];
    
    this.settings.activeTheme = prevTheme;
    this.saveSettings();
    this.applyTheme(prevTheme);
  }

  switchToRandomTheme() {
    const themeIds = Object.keys(THEMES);
    const randomIndex = Math.floor(Math.random() * themeIds.length);
    const randomTheme = themeIds[randomIndex];
    
    this.settings.activeTheme = randomTheme;
    this.saveSettings();
    this.applyTheme(randomTheme);
  }

  async loadSettings() {
    const data = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...data };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async applyTheme(themeId, animate = true) {
    if (!THEMES[themeId]) {
      console.error(`Theme "${themeId}" not found`);
      return;
    }

    // Add transition animation
    if (animate) {
      this.addTransitionStyles();
    }

    // Remove previous theme styles
    this.removeThemeStyles();

    // Load and apply new theme CSS
    try {
      const cssContent = await this.loadThemeCSS(themeId);
      if (cssContent) {
        this.injectThemeStyles(cssContent);
        document.body.setAttribute('data-dave-theme', themeId);
        
        // Show notice
        if (typeof Notice !== 'undefined') {
          new Notice(`已切换到主题：${THEMES[themeId].name}`, 2000);
        }
        
        console.log(`Applied theme: ${THEMES[themeId].name}`);
      }
    } catch (error) {
      console.error(`Failed to load theme "${themeId}":`, error);
      new Notice(`切换主题失败：${error.message}`, 3000);
    }
  }

  addTransitionStyles() {
    // Add CSS transition for smooth theme switching
    const transitionEl = document.getElementById('dave-themes-transition');
    if (!transitionEl) {
      const style = document.createElement('style');
      style.id = 'dave-themes-transition';
      style.textContent = `
        body {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .markdown-preview-view {
          transition: background-color 0.3s ease;
        }
      `;
      document.head.appendChild(style);
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
