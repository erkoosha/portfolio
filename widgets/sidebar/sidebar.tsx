"use client"

import { useLocale } from "@/shared/lib/i18n"
import { useTheme } from "next-themes"
import { Moon, Sun, Languages } from "lucide-react"

import { AvatarBlock } from "./avatar-block"
import { ContactList } from "./contact-list"
import { SocialBar } from "./social-bar"

export function Sidebar() {
  const { locale, setLocale } = useLocale()
  const { theme, setTheme } = useTheme()

  const toggleLanguage = () => {
    setLocale(locale === "ru" ? "en" : "ru")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <aside className="relative flex w-full flex-col items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:w-[280px] lg:w-[320px] shrink-0">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="flex h-8 items-center gap-1.5 rounded-lg bg-foreground/5 px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
          aria-label="Toggle language"
        >
          <Languages className="h-3.5 w-3.5" />
          <span className="uppercase">{locale}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      </div>

      <div className="mt-4 w-full">
        <AvatarBlock />
      </div>
      
      <div className="h-px w-full bg-border" />
      
      <ContactList />
      
      <div className="h-px w-full bg-border" />
      
      <SocialBar />
    </aside>
  )
}

