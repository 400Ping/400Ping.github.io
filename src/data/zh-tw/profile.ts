// 正體中文版的個人簡介。結構與 ../profile.ts 完全相同。
export const PROFILE = {
  name: 'Jie-Kai Chang',
  identity: [
    '元智大學電機工程學系學士',
    'Apache Mahout 副總裁（PMC 主席）暨 Committer',
    'Ray 與 KubeRay 成員',
  ],
  location: '台灣台北',
  links: {
    email: 'jiekaichang@apache.org',
    github: 'https://github.com/400Ping',
    linkedin: 'https://www.linkedin.com/in/jiekaichang',
  },
};

export const MICRO_LABEL = '個人檔案 / 2026';

export const ROLE_LINE =
  '開源機器學習系統工程師，專注於分散式系統、Kubernetes 原生 ML 基礎設施與 GPU 系統。';

export const ABOUT = [
  `我是<strong>元智大學</strong>的大學部學生，工作橫跨研究與基礎設施。我的領域涵蓋<strong>機器學習</strong>（LLM、電腦視覺、多模態、推論、訓練、強化學習），以及支撐它們運作的<strong>系統</strong>（分散式系統、Kubernetes 原生 ML 基礎設施、GPU 系統、平行運算）。`,
  `這些工作大多在開源社群中進行。我是 <strong>Apache Mahout</strong> 的<strong>副總裁（PMC 主席）</strong>暨 committer，也是 <strong>Ray</strong> 與 <strong>KubeRay</strong> 的成員，在三個專案中累計 107+ 個已合併的 pull request，並審閱了 135+ 個已合併的 pull request。`,
];

export const SIDE_NOTES = [
  {
    label: '目前進行',
    html: `以副總裁（PMC 主席）身分帶領 Apache Mahout；Ray 與 KubeRay 核心貢獻者。`,
  },
  {
    label: '歡迎交流',
    html: `研究合作、ML 基礎設施相關工作，以及指導新進貢獻者。`,
  },
];

export const RESEARCH_AREAS = [
  {
    index: '甲',
    title: '機器學習與大型語言模型',
    question:
      '大型語言、視覺與多模態模型如何有效率地訓練與部署？推論、訓練與強化學習流程又該如何設計，才能在擴展的同時維持可靠性？',
    keywords: 'LLM / 電腦視覺 / 多模態 / 強化學習 / 推論 / 訓練',
  },
  {
    index: '乙',
    title: '機器學習系統',
    question:
      '分散式系統、Kubernetes 原生基礎設施與 GPU 系統如何組合成 ML 工作負載能夠大規模信賴的平台？這樣的平台在成長過程中又如何維持正確性？',
    keywords: '分散式系統 / Kubernetes 原生 ML 基礎設施 / GPU 系統 / 平行運算 / ML 系統',
  },
];

export const RESEARCH_NOTE =
  '這些工作大多是公開的：履歷頁列出了各領域背後的專案、pull request 與演講。';

export const CONTACT_COPY =
  '若您也從事 LLM、電腦視覺、ML 基礎設施、分散式系統或 GPU 系統相關工作，歡迎來信交流，也期待可能的合作。';

export const AREAS = [
  'LLM / ML',
  '電腦視覺',
  '多模態',
  '強化學習',
  '推論',
  '訓練',
  'ML 系統',
  '分散式系統',
  'Kubernetes 原生 ML 基礎設施',
  'GPU 系統',
  '平行運算',
];
