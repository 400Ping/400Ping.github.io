// Publications, Talks & Articles, Education, Skills.

// Publications. Fill in the real details; each `links` entry with an empty
// href is skipped, so you can leave placeholders until you have the URL.
export const PUBLICATIONS = [
  {
    title: 'QDP: A Quantum Data Plane for GPU-Accelerated Encoding', // TODO: exact paper title
    authors: 'Jie-Kai Chang, et al.', // TODO: full author list
    venue: 'Demo paper', // TODO: venue + year, e.g. "ApacheCon 2026"
    year: '2026',
    links: [
      { label: 'PDF', href: '' },
      { label: 'arXiv', href: '' },
      { label: 'Code', href: '' },
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
