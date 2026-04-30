# Dave's Bear Themes for Obsidian

> 本主题系列包含 16 个 Bear App 风格的 Obsidian 主题，以及一个极简电影感的 Obsidian Style 主题。

## 🎬 Dave's Obsidian Style（核心主题）

A minimalist, cinematic writing experience for Obsidian. Crafted by a senior UI/UX designer with 9 years of experience.

> 一款极简主义、电影感的 Obsidian 写作体验。由拥有 9 年经验的高级 UI/UX 设计师精心打造。

### 特性 / Features

- **双主题模式 / Dual Themes**
  - **Light** - 干净的白色背景配以标志性的红色强调色
  - **Dark** - 深炭灰色背景配以亮红色强调色

- **精致排版 / Refined Typography**
  - 系统字体栈，优化字间距和行高
  - System font stack with optimized letter spacing and line height

- **SVG 图标 / SVG Icons**
  - 内嵌精心设计的 checkbox 和外链箭头图标
  - Embedded custom checkbox and external link arrow icons

- **语法高亮 / Syntax Highlighting**
  - 优雅的代码块和内联代码样式
  - Elegant code block and inline code styling

- **Graph 视图配色 / Graph View Colors**
  - 精心调校的节点和连线配色
  - Carefully tuned node and line colors

### 颜色方案 / Color Schemes

#### Light Theme

| 元素 / Element | 色值 / Color |
|---------------|-------------|
| 背景 / Background | `#FFFFFF` |
| 主文本 / Primary Text | `#2C2C2C` |
| 强调色 / Accent | `#E04E4E` |
| 次要文本 / Secondary | `#8E8E8E` |
| 代码背景 / Code BG | `#F5F5F5` |

#### Dark Theme

| 元素 / Element | 色值 / Color |
|---------------|-------------|
| 背景 / Background | `#2C2C2C` |
| 主文本 / Primary Text | `#E0E0E0` |
| 强调色 / Accent | `#FF6B6B` |
| 次要文本 / Secondary | `#999999` |
| 代码背景 / Code BG | `#1E1E1E` |

---

## 🎨 16 Bear Themes Converted

A pixel-perfect conversion of all 16 [Bear App](https://bear.app) themes to Obsidian. Each theme faithfully recreates Bear's iconic color palettes, typography, and spacing.

| Theme | Light | Dark | Description |
|-------|-------|------|-------------|
| **Dave Graphite** | ✅ | ✅ | Classic Red Graphite (light) + Dark Graphite (dark) - The iconic Bear look |
| **Dave Solarized** | ✅ | ✅ | Solarized Light + Solarized Dark |
| **Dave Duotone** | ✅ | ✅ | Duotone Light (purple) + Duotone Heat (warm orange) |
| **Dave Charcoal** | - | ✅ | Near-black dark theme |
| **Dave Dracula** | - | ✅ | Popular Dracula color scheme |
| **Dave Gotham** | - | ✅ | Deep blue theme |
| **Dave High Contrast** | - | ✅ | Maximum accessibility |
| **Dave Panic Mode** | - | ✅ | Vibrant pink/dark red |
| **Dave Cobalt** | - | ✅ | Deep blue palette |
| **Dave Toothpaste** | ✅ | ✅ | Fresh mint colors |
| **Dave Dieci** | - | ✅ | Warm amber-brown |
| **Dave Ayu** | - | ✅ | Ayu Mirage colors |

## ✨ Features

- **Unified Format**: Each theme uses Obsidian's standard `.theme-light` / `.theme-dark` CSS structure
- **Bear Typography**: 
  - Line height: 1.65 (Bear's comfortable reading rhythm)
  - Paragraph spacing: 1.2em
  - Editor max-width: 720px
  - Bottom breathing room: 30vh padding
- **SVG Icons**: Bear-style checkboxes and UI elements embedded as data URIs
- **Font Support**: References "Bear Sans UI" with system fallbacks (SF Pro, Segoe UI, etc.)

## 📦 Installation

### Method 1: Community Themes (Obsidian Store)
> ⚠️ **Note**: Only `Dave's Bear - Graphite` is submitted to Obsidian's community theme browser.
> For other themes, use Method 2 below.

1. Open Obsidian Settings → **Appearance** → **Themes**
2. Click **Manage** → Search for "Dave's Bear"
3. Install and select **Dave's Bear - Graphite**

### Method 2: GitHub Releases (All 16 Themes)

1. Go to [Releases](https://github.com/daveton/obsidian-theme/releases)
2. Download the `.zip` for your desired theme (e.g., `dave-dracula-v1.0.0.zip`)
3. Extract to `[Vault]/.obsidian/themes/[theme-name]/`
   - Example: `.obsidian/themes/dave-dracula/`
4. Enable in Obsidian: Settings → **Appearance** → **Themes**

### Method 3: Git Clone (All Themes)

```bash
cd [Vault]/.obsidian/themes/
git clone https://github.com/daveton/obsidian-theme.git daveton-themes
# Then copy individual theme folders:
cp -r daveton-themes/obsidian-theme/dave-dracula .
```

## 🔤 Font Notes

These themes reference **"Bear Sans UI"** font. If you have Bear.app installed, the font should be available system-wide. Otherwise, themes gracefully fall back to:
- **macOS**: SF Pro, SF Mono
- **Windows**: Segoe UI, Cascadia Code
- **Linux**: System default sans-serif and monospace fonts

## 🎯 Theme Previews

### Dave Graphite (Light + Dark)
The classic Bear look with signature red accents on light/dark backgrounds.

### Dave Solarized
Ethan Schoonover's Solarized palette adapted for Obsidian.

### Dave Dracula
Popular Dracula color scheme with purple/cyan accents.

### Dave Charcoal
Near-black background for OLED displays and dark room writing.

## 📝 File Structure

```
obsidian-theme/
├── dave-graphite/          # ⭐ Main theme (submitted to Obsidian Store)
│   ├── theme.css
│   └── manifest.json
├── dave-solarized/
├── dave-duotone/
├── dave-charcoal/
├── dave-dracula/
└── ... (12 more themes)
```

## 🏷️ Release Tags

Each theme can be released independently using Git tags:
- `v1.0.0-graphite` - Dave Graphite updates
- `v1.0.0-dracula` - Dave Dracula updates
- `v1.0.0-all` - All themes updated

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional color refinements from Bear's actual values
- Mobile-specific optimizations
- Plugin compatibility fixes

## 📄 License

MIT License - Free to use, modify, and distribute.

## 🙏 Credits

- Original design by [Bear](https://bear.app) by Shiny Frog
- Converted and maintained by Dave

---

*This is an unofficial theme collection and is not affiliated with or endorsed by Shiny Frog or Bear App.*

## 🔤 Typography

The theme uses a carefully selected font stack:

- **界面 / Interface**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`
- **编辑 / Editor**: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display"`
- **代码 / Monospace**: `"SF Mono", Monaco, "Cascadia Code", "Fira Code"`

## 🖥️ Compatibility

- **Obsidian Version**: 0.16.0+
- **Platforms**: macOS, Windows, Linux, iOS, Android
- **Plugins**: Compatible with all community plugins

## 👤 Author

- **作者 / Author**: Dave
- **许可 / License**: MIT License
