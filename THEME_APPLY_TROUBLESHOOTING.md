# Obsidian 主题无法应用：对比与修复方案

## 1) 你当前仓库中的结构对比

对比 `test`（线上下载的可用主题）与自定义主题目录（`Duotone`/`Graphite`/`Solarized`）：

- 四个目录都包含 `theme.css + manifest.json`，基础文件齐全。
- `test/manifest.json` 的 `minAppVersion` 是 `1.9.0`，你的主题是 `0.15.0`。
- 你的主题清单字段更精简（缺少 `authorUrl`、`fundingUrl`），但这不是必填项。

结论：**从文件完整性看，你的主题本身并没有明显缺件，问题更可能是“安装位置或启用方式”而不是 CSS 文件本体。**

---

## 2) 最常见根因（按概率排序）

### A. 放错目录
Obsidian 只会从当前 Vault 的这个目录读取社区主题：

- `<你的Vault>/.obsidian/themes/<主题文件夹>/theme.css`
- `<你的Vault>/.obsidian/themes/<主题文件夹>/manifest.json`

你截图里显示的是仓库工作区目录结构，不能证明已经放进了目标 Vault 的 `.obsidian/themes`。

### B. 主题目录层级多了一层
常见错误：

- ❌ `.obsidian/themes/Duotone/Duotone/theme.css`
- ✅ `.obsidian/themes/Duotone/theme.css`

### C. 没有在 Obsidian 中刷新/启用
操作路径：

1. 设置 → 外观（Appearance）
2. 打开“社区主题（Community themes）”
3. 在下拉框选择你的主题
4. 如果没有出现，先切换到默认主题再切回，或重启 Obsidian

### D. vault 不是你以为的那个
你可能把主题放在 A Vault，但当前打开的是 B Vault。

---

## 3) 快速自检清单（2 分钟）

1. 打开当前 Vault 根目录。
2. 进入 `.obsidian/themes/`。
3. 确认存在以下任一目录（例如 `Duotone`）：
   - `.obsidian/themes/Duotone/theme.css`
   - `.obsidian/themes/Duotone/manifest.json`
4. 打开 `manifest.json`，确认是有效 JSON（无注释、无尾逗号）。
5. 回到 Obsidian 外观页面重新选择主题。

---

## 4) 建议你直接采用的“标准安装法”

以 `Duotone` 为例：

1. 在 Vault 中创建目录：`.obsidian/themes/Duotone/`
2. 仅复制两个文件进去：
   - `Duotone/theme.css`
   - `Duotone/manifest.json`
3. 重启 Obsidian。
4. 设置 → 外观 → 主题下拉框里选择 `Dave Duotone`。

> `Graphite`、`Solarized` 同理，一次只放一个主题排查最稳妥。

---

## 5) 可选增强（不是必须）

为了兼容线上主题列表习惯，可在 `manifest.json` 中补充：

- `authorUrl`
- `fundingUrl`

这不会决定“能否加载”，但有助于信息完整。


---

## 6) 一键诊断（推荐）

仓库已新增脚本，可直接检查路径、文件、JSON 合法性、以及与 `test` 的字段差异：

```bash
./scripts/diagnose-theme.sh <你的Vault路径> <主题名> [参考主题目录]
# 示例
./scripts/diagnose-theme.sh ~/Documents/MyVault Duotone test
```

输出重点：

- `[MISSING]`：缺文件，属于阻断问题。
- `[FAIL] JSON invalid`：`manifest.json` 格式错误，属于阻断问题。
- `[WARN] Nested folder detected`：目录嵌套错误，高概率导致主题不显示。
