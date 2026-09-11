// Identity + bio. Everything on the home page is edited here.
export const PROFILE = {
  name: 'Jie-Kai Chang',
  // One-line identity under the name on the CV page (parts are joined with · )
  identity: [
    'B.S. in Electrical Engineering, Yuan Ze University',
    'Vice President (PMC Chair) & Committer, Apache Mahout',
    'Ray & KubeRay Member',
  ],
  location: 'Taipei, Taiwan',
  links: {
    email: 'jiekaichang@apache.org',
    github: 'https://github.com/400Ping',
    linkedin: 'https://www.linkedin.com/in/jiekaichang',
  },
};

// Small label above the name on the home page.
export const MICRO_LABEL = 'Profile / 2026';

// One-line role under the name (serif, large).
export const ROLE_LINE =
  'ML systems engineer working on distributed systems, Kubernetes-native ML infrastructure, and GPU systems.';

// Bio paragraphs (HTML allowed). Used on the home page.
export const ABOUT = [
  `I'm an undergraduate at <strong>Yuan Ze University</strong> working at the intersection of
   research and infrastructure. My work spans <strong>machine learning</strong> (LLMs, computer
   vision, multimodal, inference, training, RL) and the <strong>systems</strong> that run it
   (distributed systems, Kubernetes-native ML infrastructure, GPU systems, parallel computing).`,
  `Most of that work happens in the open. I'm <strong>Vice President (PMC Chair)</strong> &amp;
   committer of <strong>Apache Mahout</strong>, and a member of <strong>Ray</strong> and
   <strong>KubeRay</strong>, with 107+ merged pull requests and 135+ merged pull requests
   reviewed across the three projects.`,
];

// Right-hand column on the home page.
export const SIDE_NOTES = [
  {
    label: 'Currently',
    html: `Leading Apache Mahout as Vice President (PMC Chair); Core contributor of Ray & the KubeRay.`,
  },
  {
    label: 'Open to',
    html: `Research collaborations, ML-infrastructure work, and mentoring people.`,
  },
];

// Research areas, shown as a lettered question list on the home page.
export const RESEARCH_AREAS = [
  {
    index: 'A',
    title: 'Machine learning & LLMs',
    question:
      'How can large language, vision, and multimodal models be trained and served efficiently, and how should inference, training, and reinforcement-learning pipelines be built so they scale without losing reliability?',
    keywords: 'LLMs / computer vision / multimodal / reinforcement learning / inference / training',
  },
  {
    index: 'B',
    title: 'Systems for machine learning',
    question:
      'How do distributed systems, Kubernetes-native infrastructure, and GPU systems combine into a platform that ML workloads can depend on at scale, and how is that platform kept correct as it grows?',
    keywords: 'Distributed systems / Kubernetes-native ML infrastructure / GPU systems / parallel computing / ML systems',
  },
];

export const RESEARCH_NOTE =
  'Most of this work is public: the CV lists the projects, pull requests, and talks behind each area.';

// Contact section copy on the home page.
export const CONTACT_COPY =
  'If you are working on LLMs, Computer Vision, ML Infrastructure, Distributed Systems or GPU systems, I welcome thoughtful conversations and possible collaborations.';

// Full research areas — shown on the CV page.
export const AREAS = [
  'LLM / ML',
  'Computer vision',
  'Multimodal',
  'Reinforcement learning',
  'Inference',
  'Training',
  'ML systems',
  'Distributed systems',
  'Kubernetes-native ML infrastructure',
  'GPU systems',
  'Parallel computing',
];
