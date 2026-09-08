// 正體中文版的開源經歷。結構與 ../opensource.ts 完全相同。
export const OPENSOURCE = [
  {
    name: 'Apache Mahout',
    repo: 'apache/mahout',
    icon: '/icons/mahout.png',
    role: '副總裁（PMC 主席）暨 Committer',
    period: '2025 年 11 月 – 至今',
    href: 'https://github.com/apache/mahout',
    items: [
      { html: `主導專案治理、ASF 董事會報告、社群發展與貢獻者指導。`, links: [] },
      {
        html: `共同創建 QDP（Quantum Data Plane），一個將古典資料集編碼為量子態的 GPU 加速資料平面。`,
        links: [],
      },
      { html: `發起與 AMD 台灣及工研院（ITRI）在 AMD GPU 支援與驗證上的合作。`, links: [] },
      {
        html: `以 CUDA/ROCm、非同步 I/O、零複製資料路徑與 GPU 記憶體最佳化，實作 GPU 加速的量子態準備與資料管線。`,
        links: [],
      },
    ],
  },
  {
    name: 'Ray',
    repo: 'ray-project/ray',
    icon: '/icons/ray.png',
    role: '成員',
    period: '2025 年 2 月 – 至今',
    href: 'https://github.com/ray-project/ray',
    items: [
      { html: `（進行中）Ray Data Shuffle v2 的排序支援。`, links: [] },
      { html: `Ray Data 的 Compute Expressions，包含 datetime 與固定大小陣列的表達式命名空間。`, links: [] },
      { html: `Databricks Unity Catalog 資料來源的 schema 處理與回歸測試覆蓋。`, links: [] },
      { html: `ActorPoolMapOperator 佇列清理與可靠性改進。`, links: [] },
      { html: `（進行中）統一 Raylet 與 Ray Serve 之間的 RayService worker readiness 語意。`, links: [] },
      { html: `GCS StoreClient 非同步 API 清理，以及 Ray Core pubsub Bazel target 拆分。`, links: [] },
    ],
  },
  {
    name: 'KubeRay',
    repo: 'ray-project/kuberay',
    icon: '/icons/ray.png',
    role: '成員',
    period: '2025 年 2 月 – 至今',
    href: 'https://github.com/ray-project/kuberay',
    items: [
      {
        html: `（進行中）KubeRay v1.8 的 IPv6 與雙協定堆疊支援，涵蓋 RayCluster、RayService、mTLS、節點定址與跨 Pod 通訊。`,
        links: [],
      },
      {
        html: `透過原生 Kubernetes HTTP probe 與 Python 健康檢查，降低 KubeRay v1.6 與 v1.7 對 wget 的依賴。`,
        links: [],
      },
      {
        html: `KubeRay v1.5 的 Kueue 與 Ray autoscaler 整合，支援彈性的 RayCluster 與 RayService 工作負載。`,
        links: [],
      },
    ],
  },
];
