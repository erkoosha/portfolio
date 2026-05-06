"use client"

import { socialLinks } from "@/shared/config/social-links"

export function SocialBar() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
