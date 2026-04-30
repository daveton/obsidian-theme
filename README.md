# Dave Graphite for Obsidian

> 一款精心设计的 Obsidian 主题系列，以 **Dave Graphite** 为主打主题，提供优雅的浅色和深色双模式体验。

## � Dave Graphite（推荐主题）

Dave Graphite 是一个极简主义、电影感的 Obsidian 主题，提供专业的写作体验。

> A minimalist, cinematic writing experience for Obsidian. Crafted by a senior UI/UX designer with 9 years of experience.

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
| 强调色 / Accent | `#A03530` |
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

## 🎨 其他主题 / Other Themes

本系列还包含更多精心设计的主题：

| 主题 / Theme | Light | Dark | 描述 / Description |
|-------------|-------|------|-------------------|
| **Dave Solarized** | ✅ | ✅ | Solarized 配色方案 |
| **Dave Duotone** | ✅ | ✅ | 双色调主题（紫色 + 暖橙色）|
| **Dave Toothpaste** | ✅ | ✅ | 清新的薄荷色调 |
| **Dave Charcoal** | - | ✅ | 深炭黑色暗色主题 |
| **Dave Dracula** | - | ✅ | 流行的 Dracula 配色 |
| **Dave Gotham** | - | ✅ | 深蓝色主题 |
| **Dave High Contrast** | - | ✅ | 高对比度无障碍主题 |
| **Dave Panic Mode** | - | ✅ | 鲜艳的粉色/深红色 |
| **Dave Cobalt** | - | ✅ | 深蓝钴色调 |
| **Dave Dieci** | - | ✅ | 温暖的琥珀棕色调 |
| **Dave Ayu** | - | ✅ | Ayu Mirage 配色 |

## ✨ 特性 / Features

- **统一格式 / Unified Format**: 每个主题使用 Obsidian 标准的 `.theme-light` / `.theme-dark` CSS 结构
- **精致排版 / Refined Typography**:
  - 行高：1.65（舒适的阅读节奏）
  - 段落间距：1.2em
  - 编辑器最大宽度：720px
  - 底部留白：30vh padding
- **SVG 图标 / SVG Icons**: 精心设计的 checkbox 和 UI 元素，以 data URI 嵌入
- **字体支持 / Font Support**: 使用系统字体回退（SF Pro、Segoe UI 等）

## 📦 安装 / Installation

### 方法 1：社区主题（Obsidian Store）
> ⚠️ **注意**: 目前 `Dave Graphite` 已提交到 Obsidian 社区主题浏览器。

1. 打开 Obsidian 设置 → **外观** → **主题**
2. 点击 **管理** → 搜索 "Dave Graphite"
3. 安装并选择 **Dave Graphite**

### 方法 2：GitHub Releases（所有主题）

1. 前往 [Releases](https://github.com/daveton/obsidian-theme/releases)
2. 下载所需主题的 `.zip` 文件（如 `dave-dracula-v1.0.0.zip`）
3. 解压到 `[Vault]/.obsidian/themes/[theme-name]/`
   - 示例：`.obsidian/themes/dave-dracula/`
4. 在 Obsidian 设置 → **外观** → **主题** 中启用

### 方法 3：Git Clone（所有主题）

```bash
cd [Vault]/.obsidian/themes/
git clone https://github.com/daveton/obsidian-theme.git daveton-themes
# 然后复制单个主题文件夹：
cp -r daveton-themes/obsidian-theme/dave-dracula .
```

## 🔤 字体说明 / Font Notes

本主题使用系统字体回退：
- **macOS**: SF Pro, SF Mono
- **Windows**: Segoe UI, Cascadia Code
- **Linux**: 系统默认 sans-serif 和 monospace 字体

## 🎯 主题预览 / Theme Previews

### Dave Graphite（Light + Dark）
经典的红黑配色，提供浅色和深色双模式。

### Dave Solarized
Solarized 配色方案，护眼舒适。

### Dave Dracula
流行的 Dracula 配色，紫色/青色强调。

### Dave Charcoal
接近纯黑的背景，适合 OLED 显示器和暗光环境。

## 📝 文件结构 / File Structure

```
obsidian-theme/
├── README.md
├── dave-graphite/          # ⭐ 推荐主题
│   ├── theme.css
│   └── manifest.json
├── dave-solarized/
├── dave-duotone/
├── dave-charcoal/
├── dave-dracula/
├── dave-gotham/
├── dave-high-contrast/
├── dave-panic-mode/
├── dave-cobalt/
├── dave-toothpaste/
├── dave-dieci/
└── dave-ayu/
```

## 🏷️ Release Tags

Each theme can be released independently using Git tags:
- `v1.0.0-graphite` - Dave Graphite updates
- `v1.0.0-dracula` - Dave Dracula updates
- `v1.0.0-all` - All themes updated

## 🤝 贡献 / Contributing

欢迎贡献！改进方向：
- 颜色方案优化
- 移动端适配
- 插件兼容性修复

## 📄 许可 / License

MIT License - 可自由使用、修改和分发。

## 👤 作者 / Author

- **作者**: Dave
- **许可**: MIT License
