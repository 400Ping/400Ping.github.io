// 正體中文版的論文、演講、服務、學歷與技能。結構與 ../misc.ts 完全相同。
export const PUBLICATIONS = [
  {
    title: 'Apache Mahout QDP: GPU-Accelerated Quantum Data Plane',
    authors:
      'Jie-Kai Chang*, Guan-Ming Chiu*, Hsien-Cheng Huang*, Kuan-Hao Huang*, Guan-Hua Wen*',
    venue: '預印本',
    year: '',
    icon: '/icons/arxiv.png',
    links: [{ label: 'arXiv', href: '' }],
  },
];

export const TALKS = [
  {
    title:
      'Accelerating Quantum Machine Learning: Building a GPU-Accelerated Data Plane in Apache Mahout',
    venue: 'Community Over Code Asia 2026',
    href: 'https://asia.communityovercode.org/sessions/general-1194670.html',
  },
  {
    title: 'Introducing QuMat v0.6.0',
    venue: 'Apache Mahout 部落格',
    href: 'https://mahout.apache.org/blog/2026/06/01/Qumat-0.6.0-Release',
  },
  {
    title: 'Introducing QuMat v0.5.0',
    venue: 'Apache Mahout 部落格',
    href: 'https://mahout.apache.org/blog/2026/02/02/Qumat-0.5.0-Release',
  },
  {
    title: 'Introducing KubeRay v1.6 and v1.7',
    venue: 'Anyscale 部落格',
    href: 'https://www.anyscale.com/blog/kuberay-v1-7',
  },
  {
    title: 'Introducing KubeRay v1.5',
    venue: 'Anyscale 部落格',
    href: 'https://www.anyscale.com/blog/kuberay-v1-5',
  },
];

export const COMMUNITY = [
  {
    role: '導師',
    org: 'Google Summer of Code 2026',
    period: '2026 年 2 月 – 8 月',
    desc: '在 Apache 軟體基金會下，指導 Apache Mahout 自動化 API 文件的開發。',
    href: 'https://summerofcode.withgoogle.com/',
    icon: '/icons/gsoc.png',
  },
  {
    role: '成員',
    org: 'opensource4you（ALC Taipei）',
    period: '2024 年 9 月 – 至今',
    desc: 'ALC Taipei — Apache 軟體基金會社群發展。',
    href: 'https://cwiki.apache.org/confluence/spaces/COMDEV/pages/370444897/ALC+Taipei',
    icon: '/icons/alc.png',
  },
];

export const EDUCATION = [
  {
    school: '元智大學',
    icon: '/icons/yzu.png',
    degree: '電機工程學系學士',
    period: '2023 年 9 月 – 2027 年 6 月（預計）',
    note: '',
  },
];

export const SKILLS = [
  { group: '程式語言', items: ['C++', 'C', 'Python', 'Go', 'CUDA', 'Rust', 'RISC-V'] },
  { group: '技術', items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'GPU kernels'] },
];
