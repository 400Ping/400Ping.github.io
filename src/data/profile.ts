// Identity + bio, shown in the masthead.
export const PROFILE = {
  name: 'Jie-Kai Chang',
  // One-line identity under the name (parts are joined with · )
  identity: [
    'EE undergrad, Yuan Ze University',
    'Apache Mahout PMC & Committer',
    'Ray / KubeRay contributor',
  ],
  location: 'Taiwan',
  links: {
    email: 'jiekaichang@apache.org',
    github: 'https://github.com/400Ping',
    linkedin: 'https://www.linkedin.com/in/jiekaichang',
  },
};

// One-line tagline for the home hero.
export const TAGLINE =
  'Researching AI/ML systems and the infrastructure that runs them.';

// Short intro shown under the name on the home page.
export const HOME_INTRO =
  `EE undergrad researching AI/ML systems — and building the open-source infrastructure that runs them.`;

// Short area labels for the home page.
export const HOME_AREAS = [
  'LLM/ML',
  'Computer Vision',
  'GPU acceleration',
  'ML systems',
  'Distributed systems',
];

// Full research areas — shown on the CV page.
export const AREAS = [
  'LLM / ML',
  'Computer vision',
  'Multimodal',
  'Reinforcement learning',
  'Inference',
  'Distributed ML',
  'ML systems',
  'Distributed systems',
  'Parallel computing',
  'GPU acceleration',
  'Kubernetes',
];

// Home landing highlights.
export const STATS = [
  { value: '77+', label: 'Pull requests' },
  { value: '96+', label: 'PR reviews' },
  { value: '3', label: 'Major projects' },
];

// Extra paragraphs shown only on the About page (after the shared ABOUT bio).
export const ABOUT_MORE = [
  `Most of my work happens in the open. I care about code that other people can read,
   extend, and trust — which is why I spend as much time on reviews, tests, and docs as on
   features. I also enjoy the community side of open source: mentoring new contributors and
   helping projects grow their next generation of maintainers.`,
  `<em>(Add a more personal paragraph here — how you got into systems, what you're
   exploring lately, or what you do away from the keyboard.)</em>`,
];

// Bio paragraphs (HTML allowed). Keep it short and in your own voice.
export const ABOUT = [
  `I'm an EE undergrad at Yuan Ze University working at the intersection of research and
   infrastructure. My research spans <strong>machine learning</strong> — LLMs, computer vision,
   multimodal models, RL, and inference — and the <strong>systems</strong> that run it:
   distributed systems, parallel computing, GPU acceleration, and Kubernetes. I build the
   <strong>AI/ML infrastructure</strong> that ties the two together, from GPU kernels to cluster
   orchestration.`,
  `Most of that infrastructure work happens in the open. I'm a PMC member and committer for
   <strong>Apache Mahout</strong>, and a regular contributor to <strong>Ray</strong> and
   <strong>KubeRay</strong> (<strong>77+ PRs</strong>, <strong>96+ reviews</strong>). I like open
   source for the same reason I like systems work: everything is out in the open, and you can just
   go read why it breaks.`,
];
