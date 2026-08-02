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
  'I research LLMs, machine learning, and computer vision — accelerated on GPUs — and build the AI/ML infrastructure behind it.';

// Short friendly intro shown under the tagline on the home page.
export const HOME_INTRO =
  `I'm an EE undergrad researching LLMs, machine learning, and computer vision, with a focus on
   GPU acceleration — and I build the AI/ML infrastructure that makes that research run. Much of
   that infrastructure work is open source, across Apache Mahout, Ray, and KubeRay.`;

// Home landing highlights.
export const STATS = [
  { value: '77+', label: 'Pull requests' },
  { value: '96+', label: 'PR reviews' },
  { value: '3', label: 'Major projects' },
];

// Focus areas.
export const FOCUS = [
  {
    title: 'LLM & ML research',
    desc: 'Training, evaluating, and understanding large language and machine-learning models.',
  },
  {
    title: 'Computer vision',
    desc: 'Vision models and pipelines, and the data plumbing that keeps them fed.',
  },
  {
    title: 'GPU acceleration',
    desc: 'Fast CUDA kernels and getting data onto the accelerator efficiently.',
  },
  {
    title: 'AI/ML infrastructure',
    desc: 'The distributed systems and Kubernetes operators that make the research run at scale.',
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
  `I'm an EE undergrad at Yuan Ze University working at the intersection of research and
   infrastructure. My research is in <strong>LLMs</strong>, <strong>machine learning</strong>,
   and <strong>computer vision</strong>, with a focus on <strong>GPU acceleration</strong> — and
   I build the <strong>AI/ML infrastructure</strong> that makes that research run, from GPU
   kernels to cluster orchestration.`,
  `Most of that infrastructure work happens in the open. I'm a PMC member and committer for
   <strong>Apache Mahout</strong>, and a regular contributor to <strong>Ray</strong> and
   <strong>KubeRay</strong> (<strong>77+ PRs</strong>, <strong>96+ reviews</strong>). I like open
   source for the same reason I like systems work: everything is out in the open, and you can just
   go read why it breaks.`,
];
