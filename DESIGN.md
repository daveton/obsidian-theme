# Dave Themes Design Document

基于 Minimal 主题的设计理念和实践，总结 Dave Themes 的设计原则和实现模式。

## 设计理念

### 极简主义 (Minimalism)

- **无干扰设计**：移除不必要的视觉元素，专注于内容
- **舒适的阅读体验**：优化的行高、段落间距和标题层级
- **统一的视觉语言**：一致的配色、字体和间距系统

### 可定制性 (Customizability)

- **CSS 变量系统**：使用 CSS 变量实现主题化
- **@settings 块**：提供 Obsidian 原生的设置界面
- **插件兼容性**：支持主流 Obsidian 插件的样式适配

## 文件结构

```
obsidian-theme/
├── DESIGN.md                  # 设计文档
├── README.md                  # 用户文档
├── manifest.json              # 插件清单
├── main.js                    # 插件主逻辑
├── Graphite/                  # Graphite 主题
│   ├── manifest.json
│   └── theme.css
├── Duotone/                   # Duotone 主题
│   ├── manifest.json
│   └── theme.css
├── Solarized/                 # Solarized 主题
│   ├── manifest.json
│   └── theme.css
├── Toothpaste/                # Toothpaste 主题
│   ├── manifest.json
│   └── theme.css
└── dave-themes/               # 插件包
    ├── manifest.json
    ├── main.js
    └── themes/
        ├── graphite.css
        ├── duotone.css
        ├── solarized.css
        └── toothpaste.css
```

## Manifest 规范

### 主题 Manifest

主题的 `manifest.json` 必须遵循以下规范：

```json
{
  "name": "Theme Name",
  "version": "1.0.0",
  "minAppVersion": "1.9.0",
  "author": "Author Name",
  "authorUrl": "https://github.com/username",
  "fundingUrl": "https://github.com/username"
}
```

**重要注意事项：**
- **不要包含 `id` 字段**：Obsidian 主题不需要 id 字段
- **不要包含 `modes` 字段**：主题通过 CSS 的 `.theme-light` 和 `.theme-dark` 类来支持双模式
- **必须包含 `authorUrl` 和 `fundingUrl`**：符合 Obsidian 社区标准
- **`minAppVersion` 应设置为 "1.9.0"**：确保兼容最新版 Obsidian

### 插件 Manifest

插件的 `manifest.json` 包含：

```json
{
  "id": "dave-themes",
  "name": "Dave Themes",
  "version": "1.1.0",
  "minAppVersion": "0.15.0",
  "description": "A collection of 4 beautifully crafted Obsidian themes",
  "author": "Dave",
  "authorUrl": "https://github.com/daveton",
  "isDesktopOnly": false,
  "fundingUrl": "https://github.com/daveton"
}
```

## CSS 结构规范

### 文件头部

每个主题 CSS 文件必须包含 MIT License 头部：

```css
/* ---------------------------------------------------------------------------

Dave Theme Name by Dave

Theme description

Sponsor my work:
https://github.com/daveton

Readme:
https://github.com/daveton/obsidian-theme

-----------------------------------------------------------------------------

MIT License

Copyright (c) 2024 Dave

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
```

### CSS 变量系统

#### 共享变量 (`:root`)

```css
:root {
  /* 字体家族 */
  --font-interface: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-editor: -apple-system, "SF Pro Text", "Segoe UI", sans-serif;
  --font-mono: "SF Mono", Monaco, Consolas, monospace;

  /* 字体大小 */
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;

  /* 行高 */
  --line-height-tight: 1.3;
  --line-height-normal: 1.65;
  --line-height-relaxed: 1.8;

  /* 间距 */
  --p-spacing: 1.2em;
  --heading-spacing: 1.5em;
  --list-spacing: 0.5em;

  /* 编辑器宽度 */
  --file-line-width: 720px;
  --editor-max-width: 720px;

  /* 边框圆角 */
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;

  /* 过渡动画 */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

#### 主题特定变量 (`.theme-light` / `.theme-dark`)

```css
.theme-light {
  /* 背景色 */
  --background-primary: #FFFFFF;
  --background-primary-alt: #F5F5F5;
  --background-secondary: #FAFAFA;
  --background-secondary-alt: #F0F0F0;
  --background-modifier-border: #E5E5E5;

  /* 文本色 */
  --text-normal: #2C2C2C;
  --text-muted: #8E8E8E;
  --text-faint: #B4B4B4;
  --text-accent: #A03530;
  --text-accent-hover: #8B2D28;

  /* 交互元素 */
  --interactive-normal: #FFFFFF;
  --interactive-hover: #F5F5F5;
  --interactive-accent: #A03530;
  --interactive-accent-hover: #8B2D28;

  /* 主题色 */
  --dave-red: #A03530;
  --dave-gray: #8E8E8E;
  --dave-border: #E5E5E5;
}

.theme-dark {
  /* 深色模式变量 */
  --background-primary: #2C2C2C;
  --text-normal: #E0E0E0;
  /* ... 其他深色变量 */
}
```

### @settings 块

参考 Minimal 主题的 @settings 块结构，提供可自定义的选项：

```css
/* @settings
name: Theme Name
id: theme-style
settings:
	-
		id: interface
		title: Interface colors
		type: heading
		level: 2
		collapsed: true
	-
		id: base
		title: Base color
		description: Defines all background and border colors
		type: variable-themed-color
		format: hex
		default-light: '#'
		default-dark: '#'
	-
		id: accent-color
		title: Accent color
		type: variable-themed-color
		format: hex
		default-light: '#'
		default-dark: '#'
*/
```

### @plugins 块

声明支持的插件列表：

```css
/* @plugins
core:
- backlink
- command-palette
- daily-notes
- file-explorer
- graph
- outline
- page-preview
community:
- dataview
- calendar
- kanban
- outliner
- excalidraw
- tags
*/
```

## 排版系统

### 标题层级

```css
.markdown-preview-view h1 { 
  font-size: var(--font-size-3xl); 
  font-weight: 700; 
}

.markdown-preview-view h2 { 
  font-size: var(--font-size-2xl); 
  font-weight: 600; 
}

.markdown-preview-view h3 { 
  font-size: var(--font-size-xl); 
  font-weight: 600; 
}

.markdown-preview-view h4 { 
  font-size: var(--font-size-lg); 
  font-weight: 600; 
}

.markdown-preview-view h5 { 
  font-size: var(--font-size-base); 
  font-weight: 600; 
}

.markdown-preview-view h6 { 
  font-size: var(--font-size-sm); 
  font-weight: 600; 
}
```

### 段落和间距

```css
.markdown-preview-view p {
  margin-bottom: var(--p-spacing);
  line-height: var(--line-height-normal);
}
```

### 列表样式

```css
.markdown-preview-view ul,
.markdown-preview-view ol {
  padding-left: 1.8em;
  margin-bottom: var(--p-spacing);
}

.markdown-preview-view li {
  margin-bottom: var(--list-spacing);
}
```

## 组件样式

### 复选框

```css
input[type="checkbox"].task-list-item-checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--dave-red);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  position: relative;
  margin-right: 8px;
}

input[type="checkbox"].task-list-item-checkbox:checked {
  background: var(--dave-red);
}

input[type="checkbox"].task-list-item-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
```

### 引用块

```css
.markdown-preview-view blockquote {
  border-left: 3px solid var(--dave-red);
  padding-left: 1em;
  margin-left: 0;
  color: var(--text-muted);
  font-style: italic;
}
```

### 代码块

```css
code {
  background: var(--background-primary-alt);
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
  font-size: 0.9em;
}

pre[class*="language-"] {
  background: var(--background-primary-alt);
  border-radius: var(--border-radius-md);
  padding: 1em;
}
```

### 表格

```css
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
}

th, td {
  padding: 8px 12px;
  border: 1px solid var(--dave-border);
}

th {
  background: var(--background-secondary);
  font-weight: 600;
}
```

### 链接

```css
.markdown-preview-view a {
  color: var(--text-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.markdown-preview-view a:hover {
  border-bottom-color: var(--text-accent);
}

.external-link {
  background-image: url("data:image/svg+xml,...");
  background-size: 14px;
  background-position: right 2px center;
  padding-right: 18px;
}
```

### 标签

```css
.tag {
  background: rgba(var(--interactive-accent-rgb), 0.15);
  color: var(--interactive-accent);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: var(--font-size-xs);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.tag:hover {
  background: rgba(var(--interactive-accent-rgb), 0.25);
}
```

## UI 元素

### 侧边栏

```css
.nav-folder-title,
.nav-file-title {
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
}

.nav-file-title.is-active {
  background: rgba(var(--interactive-accent-rgb), 0.15);
  color: var(--interactive-accent);
}
```

### 滚动条

```css
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background: var(--scrollbar-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
```

### 状态栏

```css
.status-bar {
  background: var(--background-secondary-alt);
  border-top: 1px solid var(--dave-border);
  font-size: var(--font-size-xs);
}
```

### 模态框

```css
.modal-container .modal {
  background: var(--background-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
}
```

### 开关

```css
.checkbox-container {
  background: var(--dave-border);
  border-radius: 12px;
  width: 40px;
  height: 22px;
}

.checkbox-container.is-enabled {
  background: var(--dave-red);
}
```

## 响应式设计

### 移动端适配

```css
@media screen and (max-width: 768px) {
  .markdown-source-view .cm-content,
  .markdown-preview-view .markdown-preview-sizer {
    max-width: 100%;
    padding: 0 16px;
  }

  .markdown-preview-view h1 {
    font-size: 1.6em;
  }

  .markdown-preview-view h2 {
    font-size: 1.4em;
  }
}
```

### 打印样式

```css
@media print {
  .side-dock-ribbon,
  .status-bar,
  .view-header {
    display: none;
  }

  body {
    font-size: 12pt;
    line-height: 1.5;
  }
}
```

## 插件兼容性

### 核心插件

- backlink
- command-palette
- daily-notes
- file-explorer
- graph
- outline
- page-preview

### 社区插件

- dataview
- calendar
- kanban
- outliner
- excalidraw
- tags
- tasks

## 构建流程

### 构建脚本

```bash
# 构建主题 CSS
node scripts/build-themes.js

# 归一化主题
node scripts/normalize-themes.js
```

### 发布流程

```bash
# 创建标签（触发自动发布）
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 最佳实践

### 1. 保持简洁

- 避免过度设计
- 专注于内容可读性
- 使用一致的间距和字体大小

### 2. 使用 CSS 变量

- 所有颜色使用 CSS 变量
- 所有间距使用 CSS 变量
- 便于主题切换和自定义

### 3. 支持双模式

- 每个主题必须包含 `.theme-light` 和 `.theme-dark`
- 确保深色模式的对比度足够
- 测试两种模式下的可读性

### 4. 插件兼容性

- 为主流插件提供样式适配
- 在 @plugins 块中声明支持的插件
- 测试常用插件的显示效果

### 5. 性能优化

- 避免使用复杂的 CSS 选择器
- 减少 CSS 文件大小
- 使用高效的动画和过渡

### 6. 可访问性

- 确保足够的颜色对比度
- 支持键盘导航
- 提供清晰的视觉反馈

## 测试清单

- [ ] 浅色模式显示正常
- [ ] 深色模式显示正常
- [ ] 标题层级正确
- [ ] 段落间距合适
- [ ] 列表样式正确
- [ ] 复选框样式正确
- [ ] 引用块样式正确
- [ ] 代码块样式正确
- [ ] 表格样式正确
- [ ] 链接样式正确
- [ ] 标签样式正确
- [ ] 侧边栏显示正常
- [ ] 滚动条样式正确
- [ ] 状态栏显示正常
- [ ] 移动端适配正常
- [ ] 主流插件兼容

## 参考资源

- [Minimal Theme](https://github.com/kepano/obsidian-minimal)
- [Obsidian Theme Documentation](https://help.obsidian.md/Extending+Obsidian/Theme+css+variables)
- [Obsidian Plugin Documentation](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin)
