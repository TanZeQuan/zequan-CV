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
      en: "Company Website Rebuild (Internship)",
      zh: "公司官网重建（实习）",
    },
    description: {
      en: "Rebuilt a company website during internship, taking ownership of planning, design, development, and delivery using Wix.",
      zh: "实习期间独立负责公司官网重建，从规划、设计到开发与交付，使用 Wix 完成。",
    },
    stack: ["Wix", "Web", "UI/UX"],
    role: {
      en: "Frontend Developer Intern",
      zh: "前端工程师（实习）",
    },
    responsibility: {
      en: [
        "Planned the website structure and content based on company needs and branding.",
        "Designed and built the company website independently using Wix.",
        "Led progress updates and discussions with stakeholders to align on requirements and revisions.",
        "Delivered the rebuilt website within the internship period, meeting business expectations.",
      ],
      zh: [
        "根据公司需求与品牌方向，规划网站结构与内容。",
        "独立完成官网的设计与搭建，并使用 Wix 实作。",
        "负责与相关人员开会沟通进度，调整需求与修改内容。",
        "在实习期间完成官网重建并交付，符合公司使用需求。",
      ],
    },
    impact: {
      en: [
        "Successfully delivered a complete company website rebuild, receiving positive feedback and follow-up requests for continued maintenance after the internship.",
      ],
      zh: [
        "成功交付完整官网重建，并在实习结束后获得主管正面回馈与后续维护合作的肯定。",
      ],
    },
    category: "professional",
    meta: {
      en: "Web • Internship • Solo Project",
      zh: "Web • 实习 • 独立负责",
    },
     cover: {
      src: "/project/intern-project.png",
      alt: {
        en: "IM Instant Messaging Mobile App",
        zh: "IM 即时通讯行动应用",
      },
    },
    primaryLink: {
      href: "https://azlab1301.wixsite.com/my-site",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
  {
    name: {
      en: "IM Instant Messaging Mobile App (Android Test Build)",
      zh: "IM 即时通讯行动应用（Android 测试版）",
    },
    description: {
      en: "A React Native IM mobile app featuring authentication, real-time messaging via WebSocket, and core chat workflows. Currently available as an Android test build.",
      zh: "使用 React Native 开发的即时通讯行动应用，涵盖登入验证、WebSocket 即时聊天与核心聊天流程，目前提供 Android 测试版本。",
    },
    stack: ["React Native", "TypeScript", "Expo", "REST API", "WebSocket"],
    role: {
      en: "Frontend Developer",
      zh: "前端工程师",
    },
    responsibility: {
      en: [
        "Implemented authentication flow, chat UI, and message list using React Native and Expo.",
        "Integrated REST APIs for user profiles, chat rooms, and message history.",
        "Implemented real-time messaging using WebSocket and handled message updates in the UI.",
        "Designed navigation structure and managed state for core chat features.",
      ],
      zh: [
        "使用 React Native 与 Expo 实作登入流程、聊天介面与讯息列表。",
        "串接 REST API 取得用户资料、聊天室与历史讯息。",
        "整合 WebSocket 实现即时聊天，并处理前端讯息即时更新。",
        "规划应用导航结构，并管理核心聊天功能的前端状态。",
      ],
    },
    impact: {
      en: [
        "Delivered a functional real-time chat experience on Android with a scalable frontend structure for future features.",
      ],
      zh: [
        "成功在 Android 平台实现可运作的即时聊天体验，并建立可扩展的前端架构，支援后续功能扩充。",
      ],
    },
    category: "professional",
    meta: {
      en: "Mobile App • React Native • Real-time Messaging",
      zh: "行动应用 • React Native • API 对接 • 即时通讯",
    },
    cover: {
      src: "/project/im-app.png",
      alt: {
        en: "IM Instant Messaging Mobile App",
        zh: "IM 即时通讯行动应用",
      },
    },
    primaryLink: {
      href: "",
      label: {
        en: "Android Test Build",
        zh: "Android 测试版本",
      },
    },
  },
  {
    name: {
      en: "Bubble Tea Membership & Engagement App (Pause)",
      zh: "奶茶品牌会员与互动 App (暂停)",
    },
    description: {
      en: "A React Native mobile application designed to enhance user engagement and brand loyalty through membership features, points interaction, and product browsing.",
      zh: "使用 React Native 开发的行动应用，透过会员机制、积分互动与商品浏览，提升用户黏着度与品牌参与度。",
    },
    stack: ["React Native", "JavaScript", "REST API"],
    role: {
      en: "Frontend Developer",
      zh: "前端工程师",
    },
    responsibility: {
      en: [
        "Developed core mobile screens and interaction flows using React Native.",
        "Integrated backend APIs to support membership data, points interactions, and dynamic content rendering.",
        "Collaborated with backend developers to align API responses with frontend state and UI requirements.",
      ],
      zh: [
        "使用 React Native 开发核心页面与使用流程。",
        "对接后端 API，处理会员资料、积分互动与动态内容呈现。",
        "与后端工程师协作，确保 API 回传资料与前端状态及 UI 显示一致。",
      ],
    },
    impact: {
      en: [
        "Established a functional frontend foundation with API-driven data flows before the project was paused.",
      ],
      zh: [
        "在项目暂停前，完成可与后端 API 对接的前端基础架构。",
      ],
    },
    category: "professional",
    meta: {
      en: "Mobile App • React Native • API Integration • Paused",
      zh: "行动应用 • React Native • API 对接",
    },
    cover: {
      src: "/project/bubbletea.png",
      alt: {
        en: "Bubble Tea Mobile App",
        zh: "奶茶品牌行动应用",
      },
    },
  },
  {
    name: {
      en: "Digital Asset Trading Platform (Web)",
      zh: "数字资产交易平台（Web）",
    },
    description: {
      en: "Frontend development for a global-facing digital asset trading platform, focused on static and data-ready web interfaces.",
      zh: "参与面向全球用户的数字资产交易平台前端页面开发，主要负责展示型网页介面。",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    role: {
      en: "Frontend Developer",
      zh: "前端工程师",
    },
    responsibility: {
      en: [
        "Implemented responsive layouts and trading-related UI pages.",
        "Built frontend pages based on provided designs and content requirements.",
        "Ensured consistent UI presentation across different devices and browsers.",
      ],
      zh: [
        "实作响应式版面与交易相关的前端 UI 页面。",
        "根据既有设计与内容需求完成前端页面制作。",
        "确保网页在不同装置与浏览器下呈现一致。",
      ],
    },
    impact: {
      en: [
        "Delivered consistent and stable frontend presentation for a globally accessible trading platform.",
      ],
      zh: [
        "为面向全球用户的交易平台提供稳定一致的前端展示效果。",
      ],
    },
    category: "professional",
    meta: {
      en: "Web • Digital Asset / Trading Platform • Client Project",
      zh: "Web • 数字资产 / 交易平台 • 客户项目",
    },
    cover: {
      src: "/project/trading.png",
      alt: {
        en: "Digital Asset Trading Platform",
        zh: "数字资产交易平台",
      },
    },
    primaryLink: {
      href: "https://www.fx8.vip/index-EN.html",
      label: {
        en: "Live Website",
        zh: "打开网站",
      },
    },
  },
  {
    name: {
      en: "InsuranceTech & FinTech Web Platform",
      zh: "保险 × 金融科技平台（Web）",
    },
    description: {
      en: "Frontend development for an InsurTech and FinTech web platform focused on shaping a new future for insurance assets—transforming protection into sustainable, stable financial momentum for long-term value growth and secure wealth succession.",
      zh: "为保险 × 金融科技平台进行前端开发，协助打造保险资产的新未来，将保障转化为可持续、稳定的金融动能，实现长期价值增长与稳健的财富传承。",
    },
    stack: ["Web", "Responsive UI", "UI Components"],
    role: {
      en: "Frontend Developer",
      zh: "前端工程师",
    },
    responsibility: {
      en: [
        "Implemented client-facing web pages based on business requirements and product vision.",
        "Translated complex insurance and financial workflows into structured, reusable UI components.",
        "Collaborated with internal teams to ensure responsive design and cross-browser compatibility.",
      ],
      zh: [
        "根据业务需求与产品愿景实现面向客户使用的前端页面。",
        "将复杂的保险与金融流程转化为结构化、可复用的 UI 元件。",
        "确保网页在不同装置与浏览器下的响应式与相容性。",
      ],
    },
    impact: {
      en: [
        "Improved clarity and usability of complex insurance and financial workflows, supporting long-term value-oriented user experiences.",
      ],
      zh: [
        "提升保险与金融相关复杂流程在前端介面上的清晰度与可用性，支援以长期价值为导向的使用体验。",
      ],
    },
    category: "professional",
    meta: {
      en: "Web • InsurTech / FinTech • Client Project",
      zh: "Web • InsurTech / FinTech • 客户项目",
    },
    cover: {
      src: "/project/insurance.png",
      alt: {
        en: "InsurTech and FinTech Web Platform",
        zh: "保险与金融科技平台",
      },
    },
    primaryLink: {
      href: "https://lv.onl/",
      label: {
        en: "Live Website",
        zh: "打开网站",
      },
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
      en: "Designed and optimized an international conference website using Wix, and supported Stripe payment setup to enable online registration and payments.",
      zh: "使用 Wix 为国际会议搭建与优化官网，并协助整合 Stripe 金流，实现线上报名与付款。",
    },
    stack: ["Wix", "Stripe", "Web"],
    role: {
      en: "Frontend Developer (Freelance)",
      zh: "前端工程师（自由接案）",
    },
    responsibility: {
      en: [
        "Worked closely with the client to gather requirements and iterate on layout, content, and visual design.",
        "Built and optimized the conference event pages on Wix for better usability and clarity.",
        "Set up and tested Stripe payment flow to support online ticket purchase and registration.",
      ],
      zh: [
        "与客户持续沟通需求，并根据回馈反复调整页面结构、内容与视觉设计。",
        "使用 Wix 搭建并优化会议活动页面，提升整体浏览与报名体验。",
        "协助客户完成 Stripe 金流设定，并进行付款流程测试与验证。",
      ],
    },
    impact: {
      en: [
        "Delivered a complete event website that met all client requirements and enabled a smooth online registration and payment experience.",
      ],
      zh: [
        "成功交付完整会议官网，满足客户所有需求，并提供顺畅的线上报名与付款体验。",
      ],
    },
    category: "independent",
    meta: { en: "Web • Freelance", zh: "Web • 自由接案" },
    cover: {
      src: "/project/isar.png",
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
      zh: "数位支付平台网站优化（创业团队 / 远端协作）",
    },
    description: {
      en: "Contributed to UI/UX improvements and frontend development for a digital payment platform as part of a startup team.",
      zh: "作为创业团队成员，参与数位支付平台的前端开发与 UI/UX 优化（远端协作）。",
    },
    stack: ["Next.js", "Tailwind CSS", "Ant Design", "Web", "Remote Collaboration"],
    role: {
      en: "Frontend Developer (Startup / Remote)",
      zh: "前端工程师（创业团队 / 远端）",
    },
    responsibility: {
      en: [
        "Worked with a senior frontend developer to improve UI/UX and optimize key pages using Next.js, Tailwind CSS, and Ant Design.",
        "Implemented layout and component adjustments while learning and adapting to a complex production-level codebase.",
        "Participated in weekly remote sync meetings to review progress, gather feedback, and iterate on improvements.",
      ],
      zh: [
        "与资深前端工程师协作，使用 Next.js、Tailwind CSS 与 Ant Design 优化页面 UI/UX。",
        "在较复杂的正式项目架构中进行版面与组件调整，并持续学习与适应开发流程。",
        "参与每周远端会议汇报进度，根据回馈进行持续优化。",
      ],
    },
    impact: {
      en: [
        "Improved usability and visual consistency while gradually contributing to a complex fintech codebase through guided collaboration.",
      ],
      zh: [
        "在资深工程师的指导下逐步参与复杂的金融项目开发，同时提升整体可用性与视觉一致性。",
      ],
    },
    category: "independent",
    meta: { en: "Web • Startup • Remote", zh: "Web • 创业团队 • 远端" },
    cover: {
      src: "/project/ubipay.png",
      alt: { en: "Digital Payment Platform Website", zh: "数位支付平台官网" },
    },
    primaryLink: {
      href: "https://www.myubipay.com/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  },
  {
    name: {
      en: "EduTrack — Education Tracking System (Web)",
      zh: "EduTrack 教育记录系统（网页）",
    },
    description: {
      en: "A web-based education tracking system that allows teachers to record lessons and student information, while parents can view their children’s learning progress.",
      zh: "一套教育记录系统，协助老师记录授课与学生资料，并让家长查看孩子的学习进度。",
    },
    stack: ["React", "Tailwind CSS", "Supabase"],
    role: {
      en: "Frontend Developer (Freelance)",
      zh: "前端工程师（自由接案）",
    },
    responsibility: {
      en: [
        "Built responsive web interfaces for lesson records and student progress tracking.",
        "Integrated Supabase backend for authentication and data management.",
      ],
      zh: [
        "开发响应式网页界面，用于课程记录与学生进度追踪。",
        "整合 Supabase 后端，处理登录与资料管理。",
      ],
    },
    impact: {
      en: [
        "Improved efficiency of lesson documentation and provided parents with clearer visibility into student progress.",
      ],
      zh: [
        "提升老师记录课程的效率，并让家长更清楚掌握学生的学习进度。",
      ],
    },
    category: "independent",
    meta: { en: "Web • Freelance", zh: "Web • 自由接案" },
    cover: {
      src: "/project/edutrack.png",
      alt: { en: "EduTrack web app", zh: "EduTrack 教育记录系统" },
    },
    primaryLink: {
      href: "https://edu-track-swart-sigma.vercel.app/",
      label: { en: "Live Website", zh: "打开网站" },
    },
  }
];
