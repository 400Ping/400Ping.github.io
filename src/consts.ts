// 全站共用的基本資料 —— 之後只要改這裡就好。
export const SITE = {
  title: '400ping',
  // 顯示在首頁大標與 <title> 的名字
  author: '400ping',
  // 一句話簡介（首頁副標）
  tagline: 'Computer Science · 我的經歷與筆記',
  description: '400ping 的個人網站：經歷、專案與部落格。',
};

// 導覽列連結
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
];

// 社群連結 —— 換成你自己的（用不到的整行刪掉即可）
export const SOCIAL_LINKS = [
  { href: 'https://github.com/400ping', label: 'GitHub' },
  { href: 'mailto:jaychang326@gmail.com', label: 'Email' },
  // { href: 'https://www.linkedin.com/in/你的帳號', label: 'LinkedIn' },
  // { href: 'https://x.com/你的帳號', label: 'X' },
];
