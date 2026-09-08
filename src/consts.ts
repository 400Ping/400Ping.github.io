// Site-wide constants — edit here. Per-language UI copy lives in src/i18n.ts.
export const SITE = {
  title: 'Jie-Kai Chang',
  author: 'Jie-Kai Chang',
  repo: 'https://github.com/400Ping/400Ping.github.io',
  // PDF version of the CV (Google Drive). Shown as "PDF ↓" in the header and in the profile-link row.
  cvUrl: 'https://drive.google.com/file/d/1wrd-4DaIo4KiXuebQa8pGHeyv6sUfqmb/view?usp=sharing',
  // Used by the RSS feed (English only).
  description:
    'Jie-Kai Chang (400Ping) — open-source ML systems engineer and EE undergraduate at Yuan Ze University, working on distributed systems, Kubernetes-native ML infrastructure, and GPU systems. Vice President (PMC Chair) of Apache Mahout; Ray / KubeRay member.',
};

// Primary nav. `key` looks up the label in src/i18n.ts; `path` is localised per language.
export const NAV_LINKS = [
  { path: '/#about', key: 'about' },
  { path: '/#research', key: 'research' },
  { path: '/blog/', key: 'writing' },
  { path: '/cv/', key: 'cv' },
  { path: '/#contact', key: 'contact' },
] as const;

// Header right-hand links. Kept short on purpose: Email / CV already live in the
// primary nav (Contact, CV) and in the profile-link row on every page (ProfileLinks.astro).
// The CV PDF link is appended after these.
export const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/jiekaichang', label: 'LinkedIn' },
  { href: 'https://github.com/400Ping', label: 'GitHub' },
];
