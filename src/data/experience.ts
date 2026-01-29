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
        "Integrated RESTful APIs with backend engineers for authentication, user profiles, and core business data.",
        "Acted as the frontend point of contact for selected projects, coordinating requirements, timelines, and implementation with backend engineers and stakeholders.",
        "Led frontend delivery from development through testing, working closely with backend teams to ensure features were ready before release.",
      ],
      zh: [
        "使用 React / React Native / Vue 交付多个 Web 与行动应用项目。",
        "从 0 到 1 搭建前端项目结构，包括路由、UI 元件与基础状态管理。",
        "与后端工程师协作完成 RESTful API 串接（登入、用户资料与核心业务数据）。",
        "在部分项目中担任前端对口人，协助协调需求、时程与开发实现，并与相关人员沟通对接。",
        "负责前端从开发到测试阶段的交付，与后端密切合作，确保功能在上线前稳定可用。",
      ],
    },
  },
];

