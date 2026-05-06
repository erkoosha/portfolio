# Erkebulan — Frontend Developer Portfolio

A modern, fast, and fully responsive dashboard-style personal portfolio built with **Next.js**. The project follows a lightweight **Feature-Sliced Design (FSD)** architecture and supports internationalization (i18n) out of the box.

## ✨ Features

- **Dashboard Layout:** A clean, two-column layout with a sticky sidebar for contacts and a scrollable content area for projects.
- **Dark/Light Mode:** Seamless theme switching with Tailwind CSS semantic variables (`next-themes`).
- **Internationalization (i18n):** Built-in bilingual support (English / Russian) using a lightweight React Context, without heavy external libraries.
- **Smooth Animations:** Staggered grid animations and hover effects powered by `framer-motion`.
- **FSD Architecture:** Clean code separation into `app`, `widgets`, `features`, and `shared` layers for maximum maintainability.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 How to Update Content

All customizable data is isolated in the `shared/config/` directory.

- **`site.ts`**: Update your name, role, description, and contact info (email, phone, location).
- **`projects.ts`**: Add or remove your projects. Each project supports bilingual titles and descriptions.
- **`social-links.ts`**: Update your Telegram, LinkedIn, GitHub, or add new social links.

To change your avatar, simply replace the placeholder in `widgets/sidebar/avatar-block.tsx` with an `<Image />` component or another icon.
