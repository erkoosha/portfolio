"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/shared/config/site"
import { useLocale, localized } from "@/shared/lib/i18n"

export function ContactList() {
  const { locale } = useLocale()

  const contacts = [
    {
      id: "email",
      icon: Mail,
      label: "EMAIL",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      id: "phone",
      icon: Phone,
      label: "PHONE",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      id: "location",
      icon: MapPin,
      label: "LOCATION",
      value: localized(siteConfig.contact.location, locale),
      href: null,
    },
  ]

  return (
    <ul className="flex flex-col gap-6 w-full">
      {contacts.map((contact) => (
        <li key={contact.id} className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-muted-foreground shadow-sm">
            <contact.icon className="h-4 w-4" />
          </div>
          <div className="flex flex-col overflow-hidden text-sm">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {contact.label}
            </span>
            {contact.href ? (
              <a
                href={contact.href}
                className="truncate font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {contact.value}
              </a>
            ) : (
              <span className="truncate font-medium text-foreground">
                {contact.value}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
