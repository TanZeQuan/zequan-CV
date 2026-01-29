export type Experience = {
  company: string;
  role: { en: string; zh: string };
  period: string;
  points: { en: string[]; zh: string[] };
};

export const experience: Experience[] = [
  {
    company: "Company Name",
    role: { en: "Frontend Developer", zh: "前端工程师" },
    period: "2025 – Present",
    points: {
      en: [
        "Delivered multiple Web and Mobile projects using React, React Native, and Vue.",
        "Built frontend projects from scratch, including routing, UI components, and basic state management.",
        "Integrated RESTful APIs (authentication, profile, and business data) with backend engineers.",
      ],
      zh: [
        "使用 React / React Native / Vue 交付多个 Web 与行动应用项目。",
        "从 0 到 1 搭建前端项目结构：路由、UI 元件与基础状态管理。",
        "与后端协作完成 RESTful API 串接（登入、用户资料、业务数据）。",
      ],
    },
  },
];
