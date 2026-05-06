import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/shared/config/site"
import { cn } from "@/lib/utils"
import { LocaleProvider } from "@/shared/lib/i18n"
import { Sidebar } from "@/widgets/sidebar/sidebar"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: siteConfig.seo.title.ru,
  description: siteConfig.seo.description.ru,
  openGraph: {
    title: siteConfig.seo.title.ru,
    description: siteConfig.seo.description.ru,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <LocaleProvider>
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 p-4 md:flex-row md:p-6 lg:gap-8 lg:p-8">
              <div className="md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
                <Sidebar />
              </div>

              <main className="flex-1 rounded-3xl border border-border bg-card shadow-sm relative">
                {children}
              </main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

