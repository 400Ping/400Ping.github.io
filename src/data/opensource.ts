// 開源貢獻 —— 首頁的核心區塊。
// 每個 project 有標題、角色、期間、連結，以及一組貢獻條目。
// 條目可帶 links: [{ label, href }]，會顯示成小標籤。
export const OPENSOURCE = [
  {
    name: 'Apache Mahout',
    role: 'PMC & Committer',
    period: 'Apr 2026 – Present · Committer since Jan 2026',
    href: 'https://mahout.apache.org/',
    items: [
      {
        html: `<strong>Co-created QDP (Quantum Data Plane)</strong> — 用 GPU-accelerated kernels 把 classical data 編碼成 quantum states。`,
        links: [{ label: 'qumat-qdp', href: 'https://github.com/apache/mahout' }],
      },
      {
        html: `<strong>Community leadership</strong> — 主持社群討論與 meetings、mentor 新貢獻者，並撰寫 demo paper。`,
        links: [],
      },
      {
        html: `<strong>AMD ecosystem</strong> — 促成 AMD Taiwan、ITRI 與 Apache Mahout 的合作，主導 Mahout 的 AMD 生態系支援。`,
        links: [],
      },
    ],
  },
  {
    name: 'Ray',
    role: 'Contributor',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/ray',
    items: [
      {
        html: `<strong>Ray Data — Compute Expressions</strong>（進行中）：擴充 <code>.dt</code>/<code>.arr</code>/<code>.map</code>/<code>.image</code>/<code>.uri</code> namespaces；交付 datetime 與 fixed-size array 支援。`,
        links: [
          { label: 'Issue #58674', href: 'https://github.com/ray-project/ray/issues/58674' },
          { label: 'PR #58740', href: 'https://github.com/ray-project/ray/pull/58740' },
          { label: 'PR #58741', href: 'https://github.com/ray-project/ray/pull/58741' },
        ],
      },
      {
        html: `<strong>DatabricksUCDatasource schema bug</strong>：修掉 <code>schema()</code> shadowing 造成的 runtime error，並補上 regression tests。`,
        links: [{ label: 'PR #61282', href: 'https://github.com/ray-project/ray/pull/61282' }],
      },
      {
        html: `<strong>Ray Data reliability</strong>：修復 <code>ActorPoolMapOperator</code> 的 flaky queue cleanup。`,
        links: [{ label: 'PR #58694', href: 'https://github.com/ray-project/ray/pull/58694' }],
      },
      {
        html: `<strong>Ray Core — Unified RayService readiness endpoint</strong>（進行中）：設計統一 Raylet + Serve readiness 語意的 worker health endpoint（for KubeRay）。`,
        links: [{ label: 'Issue #60925', href: 'https://github.com/ray-project/ray/issues/60925' }],
      },
      {
        html: `<strong>GCS StoreClient async cleanup</strong>：<code>Status</code> → <code>void</code>。`,
        links: [{ label: 'PR #55663', href: 'https://github.com/ray-project/ray/pull/55663' }],
      },
      {
        html: `<strong>Split pubsub targets</strong>：拆分 Bazel targets 以改善 build 效能。`,
        links: [{ label: 'PR #50601', href: 'https://github.com/ray-project/ray/pull/50601' }],
      },
    ],
  },
  {
    name: 'KubeRay',
    role: 'Contributor',
    period: 'Feb 2025 – Present',
    href: 'https://github.com/ray-project/kuberay',
    items: [
      {
        html: `<strong>進行中</strong>：Idle termination、移除 wget dependency、History Server metadata 收集邏輯、History Server S3 client migration。`,
        links: [],
      },
      {
        html: `<strong>RayJob Sidecar mode fix</strong>：避免 head pod 被刪除時 head pod 重啟。`,
        links: [{ label: 'PR #4234', href: 'https://github.com/ray-project/kuberay/pull/4234' }],
      },
      {
        html: `<strong>RayService e2e</strong>：新增 <code>TestUpdateRayService</code> e2e 測試。`,
        links: [{ label: 'PR #3446', href: 'https://github.com/ray-project/kuberay/pull/3446' }],
      },
    ],
  },
];
