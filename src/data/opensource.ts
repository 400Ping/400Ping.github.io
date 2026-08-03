// Open source — the centerpiece.
// `repo` (owner/name) renders a live GitHub star badge next to the project title.
// `icon` (optional) is a small logo shown before the name — files live in public/icons/.
export const OPENSOURCE = [
  {
    name: 'Apache Mahout',
    repo: 'apache/mahout',
    icon: '/icons/mahout.png',
    role: 'PMC Member & Committer',
    period: 'Nov 2025 – Present · committer since Jan. 2026',
    href: 'https://github.com/apache/mahout',
    items: [
      {
        html: `<strong>Co-Authored QDP (Quantum Data Plane)</strong> — encode classical data into quantum states with GPU-accelerated kernels.`,
        links: [{ label: 'qumat-qdp', href: 'https://github.com/apache/mahout' }],
      },
      {
        html: `<strong>Community leadership</strong> — lead discussions and meetings, mentor contributors, and authored a demo paper.`,
        links: [],
      },
      {
        html: `<strong>AMD ecosystem</strong> — initiated a collaboration between AMD Taiwan, ITRI, and Apache Mahout; leading AMD ecosystem support in Mahout.`,
        links: [],
      },
    ],
  },
  {
    name: 'Ray',
    repo: 'ray-project/ray',
    icon: '/icons/ray.png',
    role: 'Contributor',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/ray',
    items: [
      {
        html: `<strong>Ray Data — Compute Expressions</strong> (ongoing): expanding the <code>.dt</code>/<code>.arr</code>/<code>.map</code>/<code>.image</code>/<code>.uri</code> namespaces; shipped datetime and fixed-size array support.`,
        links: [
          { label: 'Issue #58674', href: 'https://github.com/ray-project/ray/issues/58674' },
          { label: 'PR #58740', href: 'https://github.com/ray-project/ray/pull/58740' },
          { label: 'PR #58741', href: 'https://github.com/ray-project/ray/pull/58741' },
        ],
      },
      {
        html: `Fixed a <strong>DatabricksUCDatasource schema bug</strong> — resolved <code>schema()</code> shadowing that triggered runtime errors; added regression tests.`,
        links: [{ label: 'PR #61282', href: 'https://github.com/ray-project/ray/pull/61282' }],
      },
      {
        html: `Improved <strong>Ray Data reliability</strong> — fixed a flaky queue cleanup in <code>ActorPoolMapOperator</code>.`,
        links: [{ label: 'PR #58694', href: 'https://github.com/ray-project/ray/pull/58694' }],
      },
      {
        html: `<strong>Ray Core — Unified RayService readiness endpoint</strong> (ongoing): a Ray-defined worker health endpoint unifying Raylet + Serve readiness semantics for KubeRay.`,
        links: [{ label: 'Issue #60925', href: 'https://github.com/ray-project/ray/issues/60925' }],
      },
      {
        html: `<strong>GCS StoreClient async cleanup</strong> — <code>Status</code> → <code>void</code>.`,
        links: [{ label: 'PR #55663', href: 'https://github.com/ray-project/ray/pull/55663' }],
      },
      {
        html: `<strong>Split pubsub targets</strong> — smaller Bazel targets to improve build performance.`,
        links: [{ label: 'PR #50601', href: 'https://github.com/ray-project/ray/pull/50601' }],
      },
    ],
  },
  {
    name: 'KubeRay',
    repo: 'ray-project/kuberay',
    icon: '/icons/kuberay.png',
    role: 'Contributor',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/kuberay',
    items: [
      {
        html: `<strong>Ongoing</strong>: idle termination, removing the wget dependency, History Server metadata collection, and History Server S3 client migration.`,
        links: [],
      },
      {
        html: `<strong>RayJob sidecar mode fix</strong> — prevent the head pod from restarting when it is deleted.`,
        links: [{ label: 'PR #4234', href: 'https://github.com/ray-project/kuberay/pull/4234' }],
      },
      {
        html: `<strong>RayService e2e</strong> — added an end-to-end test for <code>UpdateRayService</code>.`,
        links: [{ label: 'PR #3446', href: 'https://github.com/ray-project/kuberay/pull/3446' }],
      },
    ],
  },
];
