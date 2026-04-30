# 发布指南 / Release Guide

## 自动发布（推荐）

使用 GitHub Actions 自动打包并发布到 Releases。

### 步骤

1. **创建标签**（触发自动发布）
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. **自动执行**
   - GitHub Actions 会自动运行
   - 为每个主题打包成 zip 文件
   - 创建 Release 并上传所有 zip 文件

3. **查看 Release**
   - 前往 GitHub 仓库 → Releases
   - 查看自动生成的发布页面

## 手动发布

如果不想使用 GitHub Actions，可以手动打包：

```bash
# 运行打包脚本
./scripts/package.sh 1.0.0

# 手动上传到 GitHub Releases
# 前往 GitHub → Releases → Draft a new release
```

## 发布规范

### 版本号规则（Semantic Versioning）

- `v1.0.0` - 主版本（重大更新）
- `v1.1.0` - 次版本（新功能）
- `v1.1.1` - 补丁版本（Bug 修复）

### 单个主题更新

如果需要单独更新某个主题：

```bash
# 为主题特定更新创建标签
git tag -a v1.0.0-graphite -m "Update Dave Graphite"
git push origin v1.0.0-graphite
```

## 发布内容

每个主题的 zip 包包含：
- `theme.css` - 主题样式文件
- `manifest.json` - 主题配置信息

## 用户安装方式

1. 下载对应主题的 zip 文件
2. 解压到 Obsidian Vault 的 `.obsidian/themes/[theme-name]/` 目录
3. 在 Obsidian 设置 → 外观 → 主题 中选择启用
