# 发布指南 / Release Guide

## Dave Themes 插件

这是一个 Obsidian 插件，包含 12 个精美主题，支持在插件设置中一键切换。

## 自动发布（推荐）

使用 GitHub Actions 自动打包插件并发布到 Releases。

### 步骤

1. **创建标签**（触发自动发布）
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. **自动执行**
   - GitHub Actions 会自动运行
   - 构建主题 CSS 文件
   - 打包整个插件（包含 manifest.json、main.js、themes/）
   - 创建 Release 并上传插件 zip 文件

3. **查看 Release**
   - 前往 GitHub 仓库 → Releases
   - 查看自动生成的发布页面

## 手动打包

```bash
# 1. 构建主题 CSS
node scripts/build-themes.js

# 2. 创建插件目录
mkdir -p dave-themes
cp manifest.json dave-themes/
cp main.js dave-themes/
cp -r themes dave-themes/

# 3. 打包
zip -r dave-themes-v1.0.0.zip dave-themes/

# 4. 手动上传到 GitHub Releases
```

## 发布内容

插件包 `dave-themes-v{version}.zip` 包含：
- `manifest.json` - 插件配置
- `main.js` - 插件代码（实现主题切换功能）
- `themes/` - 12 个主题的 CSS 文件

## 用户安装方式

1. 下载 `dave-themes-v{version}.zip`
2. 解压到 `[Vault]/.obsidian/plugins/dave-themes/`
3. 重启 Obsidian
4. 在设置 → 社区插件 → 已安装插件 中启用 "Dave Themes"
5. 在 Dave Themes 设置中选择喜欢的主题

## 版本号规则

- `v1.0.0` - 主版本（重大更新）
- `v1.1.0` - 次版本（新功能）
- `v1.1.1` - 补丁版本（Bug 修复）
