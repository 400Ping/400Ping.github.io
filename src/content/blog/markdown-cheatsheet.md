---
title: Markdown 語法速查
description: 寫文章時常用的 Markdown 語法備忘。
pubDate: 2026-07-20
tags: [markdown, notes]
---

寫文章會用到的東西大概都在這。這篇也可以直接刪掉。

## 標題

用 `##`、`###` 開頭就是二級、三級標題。

## 文字樣式

**粗體**、*斜體*、`行內程式碼`、~~刪除線~~。

## 清單

- 項目一
- 項目二
  - 巢狀項目

1. 第一步
2. 第二步

## 程式碼區塊

```python
def hello():
    print("Hello, 400ping!")
```

## 連結與圖片

[這是連結](https://400ping.github.io/)

圖片放在 `public/` 資料夾，然後這樣引用：

```markdown
![說明文字](/my-image.png)
```

## 引用

> 這是一段引言。

## 表格

| 語言 | 用途 |
| --- | --- |
| Python | 資料/AI |
| Rust | 系統 |
| TypeScript | 前端 |
