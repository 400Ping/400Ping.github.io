// 個人名片資料 —— 左側欄與首頁 About 用這裡。
export const PROFILE = {
  name: 'Jie-Kai Chang',
  // 名片欄的頭銜行（一行一個）
  titles: [
    'B.S. in EE, Yuan Ze University',
    'PMC & Committer, Apache Mahout',
    'Contributor, Ray · KubeRay',
  ],
  location: 'Taiwan',
  // 頭像：把一張照片放到 public/avatar.jpg，avatarImage 改成 '/avatar.jpg' 就會用照片；
  // 留空字串則顯示 initials 字母頭像。
  avatarImage: '',
  initials: 'JK',
  links: {
    email: 'jiekaichang@apache.org',
    github: 'https://github.com/400Ping',
    linkedin: 'https://www.linkedin.com/in/jiekaichang',
    cv: '/cv.pdf',
  },
};

// About 段落（可自由增減）
export const ABOUT = [
  `我是 Jie-Kai Chang，元智大學電機工程學系的大學生（B.S. EE, 2023–2027）。
   我的重心放在 <strong>distributed systems</strong>、<strong>Kubernetes operators</strong>，
   以及 ML systems 的 <strong>GPU/CUDA performance</strong> —— 簡單說，就是想辦法把機器學習系統跑得又快又穩，
   從 GPU kernel 一路到 cluster orchestration。`,
  `我是 <strong>Apache Mahout</strong> 的 PMC member 與 committer，也持續貢獻 <strong>Ray / KubeRay</strong>
   生態系，目前累積 <strong>77+ PRs</strong> 與 <strong>96+ PR reviews</strong>。
   我喜歡開源社群那種「把東西攤開來一起把它做好」的感覺，也樂於帶新的貢獻者入門。`,
];
