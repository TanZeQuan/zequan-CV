export type LangText = { en: string; zh: string };
export type ProjectCategory = "professional" | "independent";
export type ProjectLink = { label: "Demo" | "GitHub"; href: string };

export type Project = {
  name: LangText;
  description: LangText;
  stack: string[];

  role: LangText;
  responsibility: { en: string[]; zh: string[] };
  impact: { en: string[]; zh: string[] };

  cover?: { src: string; alt: { en: string; zh: string } };
  primaryLink?: { href: string; label: { en: string; zh: string } }; // 一般放 Live / Website

  category: ProjectCategory;
  links?: ProjectLink[];
  meta?: LangText;
};

export const projects: Project[] = [
  // =========================
  // Professional / Company Projects (4)
  // =========================
  {
    name: {
      en: "IM Instant Messaging Mobile App (Not Launched)",
      zh: "IM 即时通讯行动应用（尚未上线）",
    },
    description: {
      en: "A mobile IM app covering authentication, chat UI, message handling, and navigation flows.",
      zh: "行动端即时通讯应用，包含登入验证、聊天介面、讯息处理与页面导航流程。",
    },
    stack: ["React Native", "TypeScript", "Expo", "REST API"],
    role: { en: "Frontend Developer", zh: "前端工程师" },
    responsibility: {
      en: [
        "Implemented authentication flow, chat interface, and message list in React Native.",
        "Designed navigation structure and basic state management for key screens.",
        "Integrated backend APIs for user profile and messaging-related data.",
      ],
      zh: [
        "使用 React Native 实作登入流程、聊天介面与讯息列表。",
        "规划页面导航结构，并完成关键页面的基础状态管理。",
        "串接后端 API 以取得用户资料与聊天相关数据。",
      ],
    },
    impact: {
      en: [
        "Established a scalable frontend structure for further feature expansion.",
        "Improved stability via pre-launch debugging and optimization.",
      ],
      zh: ["建立可扩展的前端架构，便于后续功能迭代。", "上线前进行除错与优化，提升稳定性。"],
    },
    category: "professional",
    meta: { en: "Mobile App • React Native", zh: "行动应用 • React Native" },
    cover: {
      src: "/project/trading.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
  {
    name: {
      en: "Vue-based Interactive H5 Web Application",
      zh: "基于 Vue 的 H5 互动式 Web 应用",
    },
    description: {
      en: "A mobile-friendly interactive H5 web app focusing on user flow, state transitions, and interaction effects.",
      zh: "面向行动装置的 H5 互动页面，涵盖用户流程、状态切换与互动效果。",
    },
    stack: ["Vue 3", "HTML", "CSS", "JavaScript"],
    role: { en: "Frontend Developer", zh: "前端工程师" },
    responsibility: {
      en: [
        "Built interactive pages and frontend logic using Vue.",
        "Created reusable UI components and implemented animations.",
        "Optimized layout and performance for mobile devices.",
      ],
      zh: ["使用 Vue 开发互动页面与前端逻辑。", "开发可复用 UI 元件并实现动画效果。", "针对行动装置进行版面适配与效能优化。"],
    },
    impact: {
      en: [
        "Enhanced mobile UX with smoother interactions.",
        "Reduced repeated work through reusable components.",
      ],
      zh: ["提升移动端体验与互动流畅度。", "透过可复用组件减少重复开发。"],
    },
    category: "professional",
    meta: { en: "H5 Web • Vue", zh: "H5 Web • Vue" },
    cover: {
      src: "/projects/isar.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },

  },
  {
    name: { en: "Digital Asset Trading Platform (Web)", zh: "数字资产交易平台（Web）" },
    description: {
      en: "Frontend development for a global-facing digital asset trading platform.",
      zh: "参与面向全球用户的数字资产交易平台前端页面开发。",
    },
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    role: { en: "Frontend Developer", zh: "前端工程师" },
    responsibility: {
      en: [
        "Implemented responsive layouts and trading-related UI pages.",
        "Collaborated with backend engineers for API integration and dynamic data rendering.",
      ],
      zh: ["实作响应式版面与交易相关 UI 页面。", "与后端协作完成 API 串接与动态资料呈现。"],
    },
    impact: {
      en: ["Ensured consistent UI behavior across devices.", "Supported stable presentation of key trading workflows."],
      zh: ["确保多装置下 UI 行为一致。", "支持关键交易流程稳定呈现。"],
    },
    category: "professional",
    meta: { en: "Web • Trading Platform", zh: "Web • 交易平台" },
    cover: {
      src: "/projects/isar.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
  {
    name: { en: "InsurTech & FinTech Web Platform", zh: "保险 × 金融科技平台（Web）" },
    description: {
      en: "A web platform combining insurance services and fintech workflows.",
      zh: "融合保险服务与金融科技流程的前端平台介面开发。",
    },
    stack: ["Web", "Responsive UI", "UI Components"],
    role: { en: "Frontend Developer", zh: "前端工程师" },
    responsibility: {
      en: [
        "Translated business requirements into structured UI components and page layouts.",
        "Ensured cross-browser compatibility and responsive design.",
      ],
      zh: ["将业务需求转化为结构化 UI 元件与页面配置。", "确保跨浏览器相容性与响应式设计。"],
    },
    impact: {
      en: ["Improved clarity and usability for complex workflows."],
      zh: ["提升复杂业务流程的易用性与清晰度。"],
    },
    category: "professional",
    meta: { en: "Web • InsurTech / FinTech", zh: "Web • InsurTech / FinTech" },
    cover: {
      src: "/projects/isar.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },

  // =========================
  // Independent / Freelance Projects (2)
  // =========================
  {
    name: {
      en: "International Conference Website Optimization & Payment Integration",
      zh: "国际会议官网优化与金流整合",
    },
    description: {
      en: "Optimized a conference website and supported Stripe payment workflow integration and testing.",
      zh: "负责会议官网版面与内容优化，并协助 Stripe 金流流程整合与测试。",
    },
    stack: ["Wix", "Stripe", "Web"],
    role: { en: "Frontend Developer (Freelance)", zh: "前端工程师（自由接案）" },
    responsibility: {
      en: [
        "Optimized website layout and content updates on Wix.",
        "Assisted in Stripe payment flow integration and end-to-end testing.",
      ],
      zh: ["使用 Wix 调整网站结构与版面，优化浏览体验。", "协助 Stripe 支付流程整合，并进行端到端测试验证。"],
    },
    impact: {
      en: ["Improved website usability and enabled online registration/payment flow."],
      zh: ["提升网站可用性，并完成线上报名与付款流程。"],
    },
    category: "independent",
    links: [{ label: "Demo", href: "https://www.isarconference.com/" }],
    meta: { en: "Web • Freelance", zh: "Web • 自由接案" },
    cover: {
      src: "/projects/isar.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
  {
    name: {
      en: "Digital Payment Platform Website Optimization",
      zh: "数位支付平台网站优化（远端协作）",
    },
    description: {
      en: "UI/UX improvements and frontend maintenance support for a payment platform website.",
      zh: "参与支付平台官网视觉优化与前端维护支援（远端协作）。",
    },
    stack: ["Web", "UI/UX", "Remote Collaboration"],
    role: { en: "Frontend Developer (Freelance / Support)", zh: "前端工程师（自由接案 / 辅助）" },
    responsibility: {
      en: [
        "Improved visual design and user experience on key pages.",
        "Supported layout adjustments and frontend maintenance with remote team.",
      ],
      zh: ["协助改善页面视觉与使用者体验。", "与远端团队协作，支援页面维护与版面调整。"],
    },
    impact: {
      en: ["Enhanced usability and supported ongoing iteration with minimal disruption."],
      zh: ["提升可用性，并在不影响现有结构下支援持续迭代。"],
    },
    category: "independent",
    links: [{ label: "Demo", href: "https://www.myubipay.com/" }],
    meta: { en: "Web • Freelance / Remote", zh: "Web • 自由接案 / 远端" },
    cover: {
      src: "/projects/isar.png",
      alt: { en: "ISAR Conference Website", zh: "ISAR 会议官网" },
    },
    primaryLink: {
      href: "https://www.isarconference.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
];
