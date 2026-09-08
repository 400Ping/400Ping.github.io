// Languages, URL helpers, and every piece of UI copy that is not "content".
// Content (bio, projects, talks…) lives in src/data/<lang>/ and is picked by src/data/index.ts.

export type Lang = 'en' | 'zh-tw';
export const LANGS: Lang[] = ['en', 'zh-tw'];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<Lang, { htmlLang: string; label: string }> = {
  en: { htmlLang: 'en', label: 'EN' },
  'zh-tw': { htmlLang: 'zh-TW', label: '繁' },
};

/** URL prefix for a language: '' for English, '/zh-tw' for Traditional Chinese. */
export const langPrefix = (lang: Lang) => (lang === DEFAULT_LANG ? '' : `/${lang}`);

/** Localise a root-relative path, e.g. localePath('zh-tw', '/cv/') → '/zh-tw/cv/'. */
export const localePath = (lang: Lang, path: string) => `${langPrefix(lang)}${path}`;

/** The same page in another language. Blog posts exist only in English, so they map to the blog index. */
export function switchLang(pathname: string, to: Lang): string {
  let base = pathname;
  for (const l of LANGS) {
    if (l === DEFAULT_LANG) continue;
    if (base === `/${l}` || base.startsWith(`/${l}/`)) base = base.slice(l.length + 1) || '/';
  }
  if (to !== DEFAULT_LANG && /^\/blog\/.+/.test(base)) base = '/blog/';
  return localePath(to, base);
}

export const UI = {
  en: {
    site: {
      subtitle: 'Electrical Engineering',
      affiliation: 'Electrical Engineering / YZU',
      description:
        'Jie-Kai Chang (400Ping) — open-source ML systems engineer and EE undergraduate at Yuan Ze University, working on distributed systems, Kubernetes-native ML infrastructure, and GPU systems. Vice President (PMC Chair) of Apache Mahout; Ray / KubeRay member.',
    },
    nav: { about: 'About', research: 'Research', writing: 'Writing', cv: 'CV', contact: 'Contact' },
    links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV', pdf: 'PDF ↓' },
    home: {
      contact: 'Contact',
      research: 'Research areas',
      researchLead: 'My current interests fall into two closely related areas.',
      writing: 'Recent writing',
      writingLead: 'Living notes on the work as it lands.',
      allWriting: 'All writing →',
      updated: 'Updated',
      notes: 'Notes',
      contactHeading: 'Contact',
    },
    cv: {
      title: 'CV',
      micro: 'Curriculum vitae',
      h1: 'Public work, organized by project.',
      description: 'Jie-Kai Chang — CV: open-source experience, leadership and service, publications, talks, education, and skills.',
      experience: 'Experience',
      projects: (n: number) => `${n} projects`,
      service: 'Leadership & service',
      publications: 'Publications',
      talks: 'Talks & articles',
      education: 'Education',
      skills: 'Skills & areas',
      researchAreas: 'Research areas',
      code: 'Code',
    },
    blog: {
      title: 'Writing',
      micro: 'Writing / living notes',
      h1: 'Notes, grouped by topic.',
      lead: 'Many of these are living documents that get revised as the work evolves, so read the <em>updated</em> date rather than the date a note was first posted.',
      description: 'Living notes on LLM/ML, ML infrastructure, systems, and open source.',
      noPosts: 'No posts yet.',
      count: (n: number) => `${n} ${n === 1 ? 'note' : 'notes'}`,
      updated: 'Updated',
      notes: 'Notes',
    },
    footer: { builtPrefix: 'Built with ', builtSuffix: '', source: 'Source' },
  },
  'zh-tw': {
    site: {
      subtitle: '電機工程',
      affiliation: '電機工程 / 元智大學',
      description:
        'Jie-Kai Chang（400Ping）— 開源機器學習系統工程師、元智大學電機工程學系學生，專注於分散式系統、Kubernetes 原生 ML 基礎設施與 GPU 系統。Apache Mahout 副總裁（PMC 主席）；Ray / KubeRay 成員。',
    },
    nav: { about: '關於', research: '研究', writing: '文章', cv: '履歷', contact: '聯絡' },
    links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: '履歷', pdf: 'PDF ↓' },
    home: {
      contact: '聯絡方式',
      research: '研究領域',
      researchLead: '目前的研究興趣可歸納為兩個彼此關聯的領域。',
      writing: '近期文章',
      writingLead: '隨工作進展持續更新的筆記。',
      allWriting: '所有文章 →',
      updated: '更新於',
      notes: '筆記',
      contactHeading: '聯絡與合作',
    },
    cv: {
      title: '履歷',
      micro: '履歷',
      h1: '公開的工作，依專案整理。',
      description: 'Jie-Kai Chang 的履歷：開源經歷、領導與服務、論文、演講、學歷與技能。',
      experience: '經歷',
      projects: (n: number) => `${n} 個專案`,
      service: '領導與服務',
      publications: '論文',
      talks: '演講與文章',
      education: '學歷',
      skills: '技能與領域',
      researchAreas: '研究領域',
      code: '程式碼',
    },
    blog: {
      title: '文章',
      micro: '文章 / 持續更新的筆記',
      h1: '依主題整理的筆記。',
      lead: '其中許多是隨工作演進持續修訂的文件，請以<em>更新</em>日期為準，而非首次發布的日期。',
      description: '關於 LLM/ML、ML 基礎設施、系統與開源的持續更新筆記。',
      noPosts: '目前尚無文章。',
      count: (n: number) => `${n} 篇`,
      updated: '更新於',
      notes: '筆記',
    },
    footer: { builtPrefix: '以 ', builtSuffix: ' 建置', source: '原始碼' },
  },
} as const;

export const t = (lang: Lang) => UI[lang];
