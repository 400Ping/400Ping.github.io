// Open source — the centerpiece of the CV page.
// Each item is one plain sentence, written the same way as the PDF CV.
// `repo` (owner/name) renders a "Code" link under the entry.
// `icon` (optional) is a small logo shown before the name — files live in public/icons/.
export const OPENSOURCE = [
  {
    name: 'Apache Mahout',
    repo: 'apache/mahout',
    icon: '/icons/mahout.png',
    role: 'Vice President (PMC Chair) & Committer',
    period: 'Nov 2025 – Present',
    href: 'https://github.com/apache/mahout',
    items: [
      {
        html: `Lead project governance, ASF Board reporting, community development, and contributor mentorship.`,
        links: [],
      },
      {
        html: `Co-create QDP (Quantum Data Plane), a GPU-accelerated data plane for encoding classical datasets into quantum states.`,
        links: [],
      },
      {
        html: `Initiate collaboration with AMD Taiwan and ITRI on AMD GPU enablement and validation.`,
        links: [],
      },
      {
        html: `GPU-accelerated state preparation and data pipelines with CUDA/ROCm, asynchronous I/O, zero-copy data paths, and GPU memory optimizations.`,
        links: [],
      },
    ],
  },
  {
    name: 'Ray',
    repo: 'ray-project/ray',
    icon: '/icons/ray.png',
    role: 'Member',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/ray',
    items: [
      {
        html: `(Ongoing) Sort support for Shuffle v2 in Ray Data.`,
        links: [],
      },
      {
        html: `(Ongoing) Unified RayService worker readiness semantics across Raylet and Ray Serve.`,
        links: [],
      },
      {
        html: `Compute Expressions in Ray Data, including datetime and fixed-size array expression namespaces.`,
        links: [],
      },
      {
        html: `Databricks Unity Catalog datasource schema handling and regression coverage.`,
        links: [],
      },
      {
        html: `ActorPoolMapOperator queue cleanup and reliability improvements.`,
        links: [],
      },
      {
        html: `GCS StoreClient asynchronous API cleanup and Ray Core pubsub Bazel target decomposition.`,
        links: [],
      },
    ],
  },
  {
    name: 'KubeRay',
    repo: 'ray-project/kuberay',
    icon: '/icons/ray.png',
    role: 'Member',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/kuberay',
    items: [
      {
        html: `(Ongoing) IPv6 and dual-stack support for KubeRay v1.8 across RayCluster, RayService, mTLS, node addressing, and cross-Pod communication.`,
        links: [],
      },
      {
        html: `Reduced wget dependency in KubeRay v1.6 &amp; v1.7 through native Kubernetes HTTP probes and Python-based health checks.`,
        links: [],
      },
      {
        html: `Kueue + Ray autoscaler integration in KubeRay v1.5 for elastic RayCluster and RayService workloads.`,
        links: [],
      },
    ],
  },
];
