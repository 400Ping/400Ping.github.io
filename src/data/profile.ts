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
  'I build and break machine-learning infrastructure — from GPU kernels to cluster orchestration.';

// Home landing highlights.
export const STATS = [
  { value: '77+', label: 'Pull requests' },
  { value: '96+', label: 'PR reviews' },
  { value: '3', label: 'Major projects' },
];

// Focus areas shown on the home page.
export const FOCUS = [
  {
    title: 'Distributed systems',
    desc: 'Ray Core, GCS, and the machinery that keeps large clusters coordinated and correct.',
  },
  {
    title: 'Kubernetes operators',
    desc: 'KubeRay — reconciliation, readiness semantics, and reliable lifecycle management.',
  },
  {
    title: 'GPU / CUDA performance',
    desc: 'Fast kernels for ML systems, and getting data onto the accelerator efficiently.',
  },
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
  `I'm an EE undergrad at Yuan Ze University who spends most of his time inside other
   people's codebases. I work on <strong>distributed systems</strong>,
   <strong>Kubernetes operators</strong>, and <strong>GPU/CUDA performance</strong> for ML
   systems — roughly, making machine-learning infrastructure fast and hard to break.`,
  `I'm a PMC member and committer for <strong>Apache Mahout</strong>, and a regular
   contributor to <strong>Ray</strong> and <strong>KubeRay</strong>
   (<strong>77+ PRs</strong>, <strong>96+ reviews</strong>). I like open source for the same
   reason I like systems work: everything is out in the open, and you can just go read why it
   breaks.`,
];
