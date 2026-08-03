// Publications, Talks & Articles, Education, Skills.

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
    title: 'Introducing KubeRay v1.5',
    venue: 'Anyscale Blog',
    href: 'https://www.anyscale.com/blog/kuberay-v1-5',
  },
  {
    title: 'Breathing New Life into Apache Mahout: The Next Generation of Contributors',
    venue: 'The ASF Blog',
    href: 'https://news.apache.org/foundation/entry/breathing-new-life-into-apache-mahout-the-next-generation-of-contributors',
  },
  {
    title: 'ALC Taipei: Igniting the Apache Open Source Movement in Taiwan',
    venue: 'The ASF Blog',
    href: 'https://news.apache.org/foundation/entry/alc-taipei-igniting-the-apache-open-source-movement-in-taiwan',
  },
  {
    title: 'Beyond the Hardware Hub: How ALC Taipei Turned Computex 2026 into a Milestone for the Apache Way',
    venue: 'The ASF Blog',
    href: 'https://news.apache.org/foundation/entry/beyond-the-hardware-hub-how-alc-taipei-turned-computex-2026-into-a-milestone-for-the-apache-way',
  },
];

// Community & service roles.
export const COMMUNITY = [
  {
    role: 'Member',
    org: 'opensource4you (ALC Taipei)',
    period: 'Sep 2024 – Present',
    desc: 'ALC Taipei — Community Development, Apache Software Foundation.',
    href: 'https://cwiki.apache.org/confluence/spaces/COMDEV/pages/370444897/ALC+Taipei',
    icon: '/icons/alc.png',
  },
  {
    role: 'Mentor',
    org: 'Google Summer of Code',
    period: 'Feb 2026 – Present',
    desc: 'Mentor for Apache Mahout.',
    href: 'https://summerofcode.withgoogle.com/',
    icon: '/icons/gsoc.png',
  },
];

export const EDUCATION = [
  {
    school: 'Yuan Ze University',
    icon: '/icons/yzu.png',
    degree: 'B.S. in Electrical Engineering',
    period: 'Sep 2023 – Jun 2027 (expected)',
    note: 'GPA 3.43 / 4.0',
  },
];

export const SKILLS = [
  { group: 'Languages', items: ['C++', 'C', 'Python', 'Go', 'CUDA', 'Rust', 'RISC-V'] },
  { group: 'Systems', items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'GPU kernels', 'Bazel'] },
];
