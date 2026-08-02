# 400ping.github.io

我的個人網站 —— 經歷、專案與部落格。使用 [Astro](https://astro.build/) 製作，透過 GitHub Actions 自動部署到 GitHub Pages。

網址：<https://400ping.github.io/>

## 本機開發

```bash
npm install      # 第一次先安裝依賴
npm run dev      # 本機預覽，打開 http://localhost:4321
npm run build    # 產生正式檔案到 dist/
npm run preview  # 預覽 build 後的結果
```

## 常見修改

| 想改什麼 | 改哪個檔案 |
| --- | --- |
| 名字、簡介、社群連結 | `src/consts.ts` |
| 首頁的自我介紹、經歷、專案 | `src/pages/index.astro` |
| 顏色、字體、整體樣式 | `src/styles/global.css` |
| 新增部落格文章 | 在 `src/content/blog/` 新增 `.md` 檔 |

## 寫一篇新文章

在 `src/content/blog/` 新增一個 `.md` 檔，檔名會變成網址（例如 `my-post.md` → `/blog/my-post/`）。開頭放：

```markdown
---
title: 文章標題
description: 一句話描述（選填）
pubDate: 2026-08-10
tags: [tag1, tag2]
draft: false
---

正文用 Markdown 寫。
```

`draft: true` 的文章不會發佈。

## 部署

Push 到 `main` 分支就會自動觸發 `.github/workflows/deploy.yml`，build 完自動上線。
第一次需要到 GitHub repo 的 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。
