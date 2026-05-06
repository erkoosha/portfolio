import type { Locale } from "@/shared/lib/i18n"

export type BilingualString = Record<Locale, string>

export const siteConfig = {
  name: "Erkebulan",
  role: {
    ru: "Frontend Разработчик",
    en: "Frontend Developer",
  },
  description: {
    ru: "Создаю современные веб-приложения с фокусом на качество кода, производительность и пользовательский опыт. Работаю с React, Next.js и TypeScript.",
    en: "Building modern web applications with a focus on code quality, performance, and user experience. Working with React, Next.js, and TypeScript.",
  },
  contact: {
    email: "ee.ualikhan@gmail.com",
    phone: "+77074384184",
    location: {
      ru: "Алматы, Казахстан",
      en: "Almaty, Kazakhstan",
    },
  },
  seo: {
    title: {
      ru: "Erkosha — Frontend Developer Portfolio",
      en: "Erkosha — Frontend Developer Portfolio",
    },
    description: {
      ru: "Портфолио frontend-разработчика. React, Next.js, TypeScript. Современные веб-приложения.",
      en: "Frontend developer portfolio. React, Next.js, TypeScript. Modern web applications.",
    },
  },
} as const

