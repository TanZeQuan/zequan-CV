import type { I18nText } from "./types";

export const labels = {
  nav: {
    experience: { en: "Experience", zh: "工作经验" },
    education: { en: "Education", zh: "学历" },
    skills: { en: "Skills", zh: "技术能力" },
    projects: { en: "Projects", zh: "项目经验" },
    contact: { en: "Contact", zh: "联系我" },
    resume: { en: "Resume", zh: "简历" },
  },

  hero: {
    titleEyebrow: { en: "Professional Portfolio", zh: "专业作品集" },
    ctaContact: { en: "Contact Me", zh: "联系我" },
    highlights: { en: "Highlights", zh: "亮点" },
  },

  projects: {
    companyTitle: { en: "Company Projects", zh: "公司项目" },
    companySub: {
      en: "Projects delivered as part of a team in a professional environment.",
      zh: "在公司/团队环境中交付的项目经验。",
    },
    freelanceTitle: { en: "Freelance Projects", zh: "自由接案项目" },
    freelanceSub: {
      en: "Independently delivered projects, from requirements to deployment.",
      zh: "独立交付的项目经验（需求到上线）。",
    },
    role: { en: "Role", zh: "角色" },
    responsibility: { en: "Responsibility", zh: "负责内容" },
    impact: { en: "Impact", zh: "成果/影响" },
  },

  contact: {
    intro: {
      en: "If you’re hiring for frontend roles (React/TypeScript), I can share a short demo and walk through how I deliver clean UI and reliable API integrations.",
      zh: "如果你正在招聘前端岗位（React/TypeScript），我可以分享 demo，并说明我如何交付高质量 UI 与稳定的 API 串接。",
    },
    emailMe: { en: "Email Me", zh: "发邮件给我" },
    details: { en: "Details", zh: "基本信息" },
    location: { en: "Location", zh: "地点" },
    email: { en: "Email", zh: "邮箱" },
    availability: { en: "Availability", zh: "求职状态" },
  },
  sections: {
    experience: {
      eyebrow: { en: "Career", zh: "职业" },
      title: { en: "Experience", zh: "工作经验" },
      subtitle: {
        en: "Impact-focused bullets with clear scope and delivery.",
        zh: "以成果为导向的经历描述，强调范围与交付。",
      },
    },
    education: {
      eyebrow: { en: "Education", zh: "学历" },
      title: { en: "Education", zh: "学历" },
      subtitle: {
        en: "Academic background relevant to software development.",
        zh: "与软件开发相关的学习背景。",
      },
    },
    skills: {
      eyebrow: { en: "Capabilities", zh: "技术能力" },
      title: { en: "Skills", zh: "技能" },
      subtitle: {
        en: "A structured view of the tools and strengths I use to build production-ready web applications.",
        zh: "我用于交付高质量 Web 应用的技术栈与能力概览。",
      },
    },
    projects: {
      eyebrowCompany: { en: "Professional Work", zh: "专业经历" },
      eyebrowFreelance: { en: "Independent Work", zh: "独立交付" },
    },
  },

  common: {
    role: { en: "Role", zh: "角色" },
    responsibility: { en: "Responsibility", zh: "负责内容" },
    impact: { en: "Impact", zh: "成果/影响" },
    viewProjects: { en: "View Projects", zh: "查看项目" },
    downloadResume: { en: "Download Resume", zh: "下载简历" },
    copyEmail: { en: "Copy Email", zh: "复制邮箱" },
    copied: { en: "Copied!", zh: "已复制" },
  },
} as const;

export function t(text: I18nText, lang: "en" | "zh") {
  return text[lang];
}
