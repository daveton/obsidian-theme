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

本系列目前包含 4 个精心设计的主题，全部支持浅色/深色模式切换：

| 主题 / Theme | Light | Dark | 描述 / Description |
|-------------|-------|------|-------------------|
| **Dave Graphite** | ✅ | ✅ | 经典红黑配色（推荐）|
| **Dave Solarized** | ✅ | ✅ | Solarized 配色方案 |
| **Dave Duotone** | ✅ | ✅ | 双色调主题（紫色 + 暖橙色）|
| **Dave Toothpaste** | ✅ | ✅ | 清新的薄荷色调 |

## ✨ 特性 / Features

- **统一格式 / Unified Format**: 每个主题使用 Obsidian 标准的 `.theme-light` / `.theme-dark` CSS 结构
- **精致排版 / Refined Typography**:
  - 行高：1.65（舒适的阅读节奏）
  - 段落间距：1.2em
  - 编辑器最大宽度：720px
  - 底部留白：30vh padding
- **SVG 图标 / SVG Icons**: 精心设计的 checkbox 和 UI 元素，以 data URI 嵌入
- **字体支持 / Font Support**: 使用系统字体回退（SF Pro、Segoe UI 等）

## 📦 安装方式 / Installation Options

你可以选择以下 **3 种方式**安装使用 Dave 主题：

### 方式 1：Obsidian 主题商店（推荐）
> 下载 Dave Graphite 推荐主题

1. 打开 Obsidian 设置 → **外观** → **主题**
2. 点击 **管理** → 搜索 "Dave Graphite"
3. 安装并选择 **Dave Graphite**

### 方式 2：手动下载安装（所有主题）
> 下载任意主题，手动安装到 Obsidian

1. 前往 [GitHub Releases](https://github.com/daveton/obsidian-theme/releases)
2. 下载所需主题的 `.zip` 文件（如 `dave-dracula-v1.0.0.zip`）
3. 解压到 `[Vault]/.obsidian/themes/[theme-name]/`
   - 示例：`.obsidian/themes/dave-dracula/`
4. 重启 Obsidian，在设置 → 外观 → 主题 中选择启用

### 方式 3：Dave Themes 插件（一键切换）
> 安装插件，在插件内轻松切换 4 个主题

1. 前往 [GitHub Releases](https://github.com/daveton/obsidian-theme/releases)
2. 下载 `dave-themes-v{版本}.zip`
3. 解压到 `[Vault]/.obsidian/plugins/dave-themes/`
4. 重启 Obsidian
5. 在设置 → 社区插件 中启用 **Dave Themes**
6. 在 Dave Themes 设置面板中选择喜欢的主题

**插件文件结构：**
```
dave-themes/
├── manifest.json      # 插件清单
├── main.js           # 主题切换功能
└── themes/           # 4个主题CSS文件
    ├── graphite.css
    ├── solarized.css
    ├── duotone.css
    └── toothpaste.css
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

### Dave Duotone
双色调主题，紫色与暖橙色的完美融合。

### Dave Toothpaste
清新的薄荷色调，带来愉悦的写作体验。

## 📝 文件结构 / File Structure

```
obsidian-theme/
├── README.md                   # 项目文档
├── manifest.json               # 插件配置
├── main.js                     # 插件代码（主题切换功能）
├── dave-themes-plugin/         # 插件分发文件夹
│   ├── manifest.json
│   ├── main.js
│   └── themes/                 # 4个主题CSS文件
│       ├── graphite.css
│       ├── solarized.css
│       ├── duotone.css
│       └── toothpaste.css
├── dave-graphite/              # ⭐ 推荐主题源码
├── dave-solarized/             # 主题源码
├── dave-duotone/               # 主题源码
├── dave-toothpaste/            # 主题源码
└── themes/                     # 构建输出的主题文件
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
