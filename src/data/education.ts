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

  // ✅ New: Final Year Project
  {
    school: { en: "Final Year Project", zh: "毕业设计" },
    program: {
      en: "Event Ticketing Website (Events • Festivals • Concerts)",
      zh: "活动售票网站（活动 • 音乐节 • 演唱会）",
    },
    year: { en: "Frontend Lead", zh: "前端主导" },
    // 如果你愿意更详细，可加 description（可选）
    description: {
      en: "Built the frontend for browsing events, selecting seats/tickets, and checkout. Collaborated on backend integration.",
      zh: "负责前端：活动浏览、票券选择与结账流程，并与后端协作完成整合。",
    },
    detail: {
      en: "Users can browse events, view details, and purchase tickets directly on the website. I led the frontend and integrated key API flows.",
      zh: "用户可在网站浏览活动、查看详情并购买票券。我主导前端开发，并完成关键 API 流程整合。",
    },

  },
];
