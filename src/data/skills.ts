export type LangText = { en: string; zh: string };

export type SkillGroup = {
  title: LangText;
  note?: LangText;
  items: { en: string[]; zh: string[] };
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Frontend Frameworks / Libraries", zh: "前端框架 / 函式库" },
    items: {
      en: ["React.js", "React Native", "Vue 3"],
      zh: ["React.js", "React Native", "Vue 3"],
    },
  },
  {
    title: { en: "Programming Languages", zh: "程式语言" },
    items: {
      en: ["JavaScript (ES6+)", "TypeScript (Basic to Intermediate)"],
      zh: ["JavaScript（ES6+）", "TypeScript（基础～中阶）"],
    },
  },
  {
    title: { en: "Styling & UI", zh: "样式与 UI" },
    items: {
      en: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Mobile-first"],
      zh: ["HTML5", "CSS3", "Tailwind CSS", "响应式设计", "行动装置优先（Mobile-first）"],
    },
  },
  {
    title: { en: "API Integration & Debugging", zh: "API 串接与除错" },
    items: {
      en: ["RESTful API Integration", "Debugging & Issue Fixing", "Basic Testing & Validation"],
      zh: ["RESTful API 串接", "Debug / 问题排查与修复", "基础测试与上线前验证"],
    },
  },
  {
    title: { en: "Tools & Workflow", zh: "工具与流程" },
    items: {
      en: ["Git", "GitHub", "AI-assisted Development (ChatGPT, Claude, Gemini)"],
      zh: ["Git（版本控制）", "GitHub", "AI 辅助开发（ChatGPT、Claude, Gemini）"],
    },
  },
  {
    title: { en: "State Management", zh: "状态管理" },
    note: {
      en: "Intermediate level through hands-on project usage",
      zh: "透过实际项目使用，具备中阶程度",
    },
    items: {
      en: ["Redux (Intermediate)", "Zustand (Intermediate)"],
      zh: ["Redux（中阶）", "Zustand（中阶）"],
    },
  },
];
