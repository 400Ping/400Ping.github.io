// Publications, Talks & Articles, Community & Service, Education, Skills.

// Publications. Each `links` entry with an empty href is skipped,
// so you can leave a placeholder until you have the URL.
export const PUBLICATIONS = [
  {
    title: 'Apache Mahout QDP: GPU-Accelerated Quantum Data Plane',
    authors:
      'Jie-Kai Chang*, Guan-Ming Chiu*, Hsien-Cheng Huang*, Kuan-Hao Huang*, Guan-Hua Wen*',
    venue: 'Preprint',
    year: '',
    icon: '/icons/arxiv.png',
    links: [
      { label: 'arXiv', href: '' }, // TODO: paste the arXiv URL here
    ],
  },
];

// Talks & Articles. Add the real URL to `href` when you have it (empty = title only).
export const TALKS = [
  {
    title:
      'Accelerating Quantum Machine Learning: Building a GPU-Accelerated Data Plane in Apache Mahout',
    venue: 'Community Over Code Asia 2026',
    href: 'https://asia.communityovercode.org/sessions/general-1194670.html',
  },
  {
    title: 'Introducing QuMat v0.6.0',
    venue: 'Apache Mahout Blog',
    href: 'https://mahout.apache.org/blog/2026/06/01/Qumat-0.6.0-Release',
  },
  {
    title: 'Introducing QuMat v0.5.0',
    venue: 'Apache Mahout Blog',
    href: 'https://mahout.apache.org/blog/2026/02/02/Qumat-0.5.0-Release',
  },
  {
    title: 'Introducing KubeRay v1.6 and v1.7',
    venue: 'Anyscale Blog',
    href: 'https://www.anyscale.com/blog/kuberay-v1-7',
  },
  {
    title: 'Introducing KubeRay v1.5',
    venue: 'Anyscale Blog',
    href: 'https://www.anyscale.com/blog/kuberay-v1-5',
  },
];

// Leadership & service roles.
export const COMMUNITY = [
  {
    role: 'Mentor',
    org: 'Google Summer of Code 2026',
    period: 'Feb 2026 – Aug 2026',
    desc: 'Mentoring the development of automated API documentation for Apache Mahout under the Apache Software Foundation.',
    href: 'https://summerofcode.withgoogle.com/',
    icon: '/icons/gsoc.png',
  },
  {
    role: 'Member',
    org: 'opensource4you (ALC Taipei)',
    period: 'Sep 2024 – Present',
    desc: 'ALC Taipei — Community Development, Apache Software Foundation.',
    href: 'https://cwiki.apache.org/confluence/spaces/COMDEV/pages/370444897/ALC+Taipei',
    icon: '/icons/alc.png',
  },
];

export const EDUCATION = [
  {
    school: 'Yuan Ze University',
    icon: '/icons/yzu.png',
    degree: 'B.S. in Electrical Engineering',
    period: 'Sep 2023 – Jun 2027 (expected)',
    note: '',
  },
];

export const SKILLS = [
  { group: 'Languages', items: ['C++', 'C', 'Python', 'Go', 'CUDA', 'Rust', 'RISC-V'] },
  { group: 'Technologies', items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'GPU kernels'] },
];
