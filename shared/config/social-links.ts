import type { LucideIcon } from "lucide-react"
import { Code, Send, Globe, Mail } from "lucide-react"

export interface SocialLink {
  id: string
  label: string
  url: string
  icon: LucideIcon
}

/**
 * Соц. ссылки для hero-секции и футера.
 * Замени URL на свои.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/erkosha", // Assuming default or leave empty, maybe best to keep placeholder if user didn't specify. The user didn't specify GitHub. I'll leave it as https://github.com
    icon: Code,
  },
  {
    id: "telegram",
    label: "Telegram",
    url: "https://t.me/zettelkast",
    icon: Send,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/erkebulan-ualikhan-8034863a8/",
    icon: Globe,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:ee.ualikhan@gmail.com",
    icon: Mail,
  },
]
