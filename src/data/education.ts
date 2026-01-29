export type EducationItem = {
  school: { en: string; zh: string };
  program: { en: string; zh: string };
  year: { en: string; zh: string };
  detail?: { en: string; zh: string };
};


export const education = [
  {
    school: { en: "MMU Cyberjaya University", zh: "MMU 赛城大学（Cyberjaya）" },
    program: {
      en: "Diploma in Information Technology",
      zh: "资讯科技文凭（Diploma in Information Technology）",
    },
    year: { en: "2025", zh: "2025" },
  },

  {
    school: { en: "Final Year Project", zh: "毕业设计" },
    program: {
      en: "Event Ticketing Website (Events • Festivals • Concerts)",
      zh: "活动售票网站（活动 • 音乐节 • 演唱会）",
    },
    year: { en: "Frontend Lead", zh: "前端主导" },
    stack: {
      en: "HTML • CSS • JavaScript • PHP • XAMPP",
      zh: "HTML • CSS • JavaScript • PHP • XAMPP",
    },
    description: {
      en: "Led frontend development for an event ticketing website, covering event browsing, ticket selection, and checkout flow, with backend support built using PHP.",
      zh: "主导活动售票网站的前端开发，涵盖活动浏览、票券选择与结账流程，并搭配 PHP 后端支援。",
    },
    detail: {
      en: "Users can browse events, view details, and purchase tickets directly on the website. I handled frontend architecture and UI logic, and worked with backend integration in a local XAMPP environment.",
      zh: "用户可在网站上浏览活动、查看详情并完成购票。我负责前端架构与 UI 逻辑，并在本地 XAMPP 环境下完成后端整合。",
    },
  }
];
