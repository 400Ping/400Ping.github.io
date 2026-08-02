// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub 使用者網站 (400ping.github.io) 服務於網域根目錄，
// 所以 site 設為完整網址、不需要 base。
export default defineConfig({
  site: 'https://400ping.github.io',
  integrations: [sitemap()],
  markdown: {
    // 關掉語法上色，讓程式碼區塊維持單色 old-school 風格（用 global.css 的樣式）。
    syntaxHighlight: false,
  },
});
