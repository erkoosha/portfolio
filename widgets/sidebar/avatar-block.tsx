"use client"

import { siteConfig } from "@/shared/config/site"
import { useLocale, localized } from "@/shared/lib/i18n"
import { User } from "lucide-react"

export function AvatarBlock() {
  const { locale } = useLocale()

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4 flex h-32 w-32 items-center justify-center rounded-3xl bg-foreground/5 shadow-sm">
        <User className="h-16 w-16 text-muted-foreground/50" strokeWidth={1.5} />

        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-card">
          <div className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
        </div>
      </div>

      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
        {siteConfig.name}
      </h2>
      <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted-foreground">
        {localized(siteConfig.role, locale)}
      </span>
    </div>
  )
}
