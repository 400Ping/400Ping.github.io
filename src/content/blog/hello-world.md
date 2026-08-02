---
title: Hello World — 這個網站是怎麼做的
description: 用 Astro 從零搭一個可以放在 GitHub Pages 的個人網站。
pubDate: 2026-08-02
tags: [astro, web, meta]
---

這是第一篇文章，順便記錄一下這個網站怎麼來的。

## 技術選型

- **框架**：[Astro](https://astro.build/)，輸出純靜態檔案，適合放在 GitHub Pages。
- **寫文章**：直接用 Markdown 檔放在 `src/content/blog/`，加上開頭的 frontmatter 就會自動變成一篇文章。
- **部署**：GitHub Actions，每次 push 到 `main` 就自動 build 並發佈。

## 怎麼新增一篇文章

在 `src/content/blog/` 底下新增一個 `.md` 檔，最上面放 frontmatter：

```markdown
---
title: 文章標題
description: 一句話描述（選填）
pubDate: 2026-08-10
tags: [tag1, tag2]
---

正文從這裡開始，用 Markdown 寫就好。
```

存檔、push，網站就會多一篇文章。就這麼簡單。

> 小提醒：把 frontmatter 裡的 `draft: true` 加上去，這篇就會暫時不發佈，方便寫到一半先存著。
