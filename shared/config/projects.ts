import type { BilingualString } from "./site"

export type ProjectCategory = "Applications" | "Web development" | "UI/UX"

export interface Project {
  id: string
  title: BilingualString
  description: BilingualString
  imageUrl: string
  projectUrl: string
  category: ProjectCategory
  tags: string[]
}

/**
 * Массив проектов для портфолио.
 * Чтобы добавить новый проект — просто добавь объект в массив.
 */
export const projects: Project[] = [
  {
    id: "gexabyte",
    title: {
      ru: "Аутсорс-агентство Gexabyte",
      en: "Gexabyte Outsource Agency",
    },
    description: {
      ru: "Сайт для аутсорс-компании Gexabyte. Презентация услуг, портфолио и форма заявки.",
      en: "Website for Gexabyte outsourcing company. Services presentation, portfolio, and contact form.",
    },
    imageUrl: "/projects/1.jpg",
    projectUrl: "https://gexabyte.com/",
    category: "Web development",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "vitiligo",
    title: {
      ru: "Сайт клиники Витилиго",
      en: "Vitiligo Clinic Website",
    },
    description: {
      ru: "Современный сайт для медицинской клиники с информацией о лечении и специалистах.",
      en: "Modern website for a medical clinic with information about treatments and specialists.",
    },
    imageUrl: "/projects/2.jpg",
    projectUrl: "https://vitiligoclinickz.vercel.app/",
    category: "Web development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "gallery-app",
    title: {
      ru: "Приложение Галерея",
      en: "Gallery App",
    },
    description: {
      ru: "Тестовое задание. Галерея с возможностью поиска картинок и сохранения их в избранное.",
      en: "Test task. Image gallery with search functionality and saving to favorites.",
    },
    imageUrl: "/projects/3.jpg",
    projectUrl: "https://abc-berkut-eight.vercel.app/",
    category: "Applications",
    tags: ["React", "API Integration", "State Management"],
  },
  {
    id: "rams-calculator",
    title: {
      ru: "Калькулятор Rams",
      en: "Rams Calculator",
    },
    description: {
      ru: "Тестовое задание для компании Rams. Калькулятор для подсчета ежемесячных выплат.",
      en: "Test task for Rams company. Calculator for computing monthly payments.",
    },
    imageUrl: "/projects/4.jpg",
    projectUrl: "https://rams-calculate.vercel.app/",
    category: "Applications",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "form-builder",
    title: {
      ru: "Конструктор Форм (Drag & Drop)",
      en: "Form Builder (Drag & Drop)",
    },
    description: {
      ru: "Тестовое задание. Интерактивный конструктор форм с использованием react-dnd.",
      en: "Test task. Interactive form builder built with react-dnd.",
    },
    imageUrl: "/projects/5.jpg",
    projectUrl: "https://form-builder-nine-topaz.vercel.app/",
    category: "Applications",
    tags: ["React", "react-dnd", "TypeScript"],
  },
]

