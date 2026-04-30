# Dave Themes for Obsidian

> 一款精心设计的 Obsidian 主题系列，提供 4 个优雅的主题，全部支持浅色和深色双模式体验。

适用于桌面、手机和平板电脑。荣获极简主义设计理念，提供舒适的写作体验。

## 关于 Dave Themes

Dave Themes 是一款无干扰且高度可定制的 Obsidian 主题系列，提供 4 个精心设计的配色方案：

- **Dave Graphite** - 经典红黑配色，专业电影感
- **Dave Solarized** - Solarized 配色方案，护眼舒适
- **Dave Duotone** - 双色调主题，紫色与暖橙色融合
- **Dave Toothpaste** - 清新薄荷色调，愉悦写作体验

## 屏幕截图

### Dave Graphite

经典的红黑配色，提供浅色和深色双模式体验。

### Dave Solarized

Solarized Light + Solarized Dark，护眼配色方案。

### Dave Duotone

Duotone Light（紫色）+ Duotone Heat（暖橙色）。

### Dave Toothpaste

Fresh mint colors，清新的薄荷色调。

## 安装

### 安装主题

1. 打开 Obsidian 设置
2. 前往 **外观** 并点击 **管理**
3. 在社区主题下搜索 "Dave Graphite"、"Dave Solarized"、"Dave Duotone" 或 "Dave Toothpaste"
4. 点击 **使用**

### 安装插件

1. 前往 **社区插件** 并关闭 **受限模式**
2. 在社区插件中搜索 "Dave Themes"
3. 点击 **安装**，然后点击 **启用**

有问题吗？请访问 [GitHub Issues](https://github.com/daveton/obsidian-theme/issues)。

## 特性

### 兼容性

- **主题（Graphite / Solarized / Duotone / Toothpaste）**：`minAppVersion` 为 **1.9.0**
- **Dave Themes 插件**：`minAppVersion` 为 **0.15.0**

说明：主题与插件独立发布，版本要求以各自 `manifest.json` 为准。

### 界面颜色和字体

- **双主题模式** - 每个主题支持浅色和深色模式
- **精致排版** - 优化的行高、段落间距和标题层级
- **系统字体** - 使用系统字体回退（SF Pro、Segoe UI 等）
- **编辑器宽度** - 舒适的 720px 阅读宽度

### 配色方案

每个主题提供精心调校的配色方案：

| 主题 | Light 模式 | Dark 模式 |
|------|-----------|-----------|
| Graphite | 白色背景 + 红色强调色 | 深灰背景 + 亮红色强调色 |
| Solarized | Solarized Light 配色 | Solarized Dark 配色 |
| Duotone | 紫色调 | 暖橙色调 |
| Toothpaste | 薄荷绿调 | 深青色调 |

## 插件支持

Dave Themes 与大多数 Obsidian 插件兼容，特别优化了以下插件：

- Calendar
- Dataview
- Kanban
- Outliner
- Excalidraw
- Tags
- Tasks

## CSS 辅助类

您可以使用 `cssClasses` YAML front matter 键在每个文件的基础上添加 CSS 辅助类。这些类是可组合的，因此您可以包含多个来组合效果。

例如，在文件顶部使用以下代码来启用卡片布局：

```yaml
---
cssClasses: cards
---
```

## 复选框样式

Dave Themes 支持多种复选框样式：

| 语法 | 描述 |
|------|------|
| `- [ ]` | 待办事项 |
| `- [x]` | 已完成 |
| `- [-]` | 已取消 |

## 快捷键

Dave Themes 插件提供以下快捷键：

- `Ctrl+Shift+T` - 切换主题
- `Ctrl+Shift+R` - 重置主题

## 贡献

如果您想添加对插件的支持，或者发现了一个您想帮助修复的 bug，请随时提交 Pull Request。有问题？请在 [GitHub Issues](https://github.com/daveton/obsidian-theme/issues) 中提出。

## 开发者

### 文件结构

```
obsidian-theme/
├── README.md
├── manifest.json
├── main.js
├── Graphite/
│   ├── manifest.json
│   └── theme.css
├── Duotone/
│   ├── manifest.json
│   └── theme.css
├── Solarized/
│   ├── manifest.json
│   └── theme.css
├── Toothpaste/
│   ├── manifest.json
│   └── theme.css
└── dave-themes/
    ├── manifest.json
    ├── main.js
    └── themes/
        ├── graphite.css
        ├── duotone.css
        ├── solarized.css
        └── toothpaste.css
```

### 构建主题

```bash
# 构建主题 CSS
node scripts/build-themes.js

# 归一化主题
node scripts/normalize-themes.js
```

### 发布

使用 GitHub Actions 自动打包插件并发布到 Releases。

```bash
# 创建标签（触发自动发布）
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 许可证

适用于桌面和移动设备的极简设计

Dave Themes for Obsidian 采用 MIT 许可证，允许您修改和重新分发代码，但您必须在 CSS 文件中保留版权和许可声明。

如果您想分发 Dave Themes 的一个分支或其部分代码，请在您的 Readme 文件中保留我的 GitHub 链接。

Dave Themes 会定期更新，以保持与最新版本 Obsidian 的同步。为了方便您及时获取最新改进，我建议您使用 GitHub 的 fork 功能，以便将最新更改合并到您的 fork 中。

## 免责声明

此主题按原样提供，专为我在 macOS 上使用 Obsidian 主题而设计。因此，它并未在所有操作系统和使用场景下进行全面测试。

此主题修改了 Obsidian 界面的重要部分，因此可能会在未来的更新中出现问题。它也可能与您已有的其他自定义 CSS 不兼容。

## 关于

一款无干扰且高度可定制的 Obsidian 主题系列。

## 作者

- **作者**: Dave
- **GitHub**: [daveton](https://github.com/daveton)
- **许可**: MIT License
