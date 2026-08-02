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
  { title: 'Introducing KubeRay v1.5', venue: '', href: '' },
  {
    title: 'Breathing New Life into Apache Mahout: The Next Generation of Contributors',
    venue: '',
    href: '',
  },
  { title: 'ALC Taipei: Igniting the Apache Open Source Movement in Taiwan', venue: '', href: '' },
];

export const EDUCATION = [
  {
    school: 'Yuan Ze University',
    degree: 'B.S. in Electrical Engineering',
    period: 'Sep 2023 – Jun 2027 (expected)',
    note: 'GPA 3.43 / 4.0',
  },
];

export const SKILLS = [
  { group: 'Languages', items: ['C++', 'C', 'Python', 'Go', 'CUDA', 'Rust', 'RISC-V'] },
  { group: 'Systems', items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'GPU kernels', 'Bazel'] },
];
