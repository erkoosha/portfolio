import Image from "next/image"
import { motion } from "framer-motion"

import type { Project } from "@/shared/config/projects"
import { useLocale, localized } from "@/shared/lib/i18n"
import { StaggerItem } from "@/shared/ui/motion"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLocale()

  return (
    <StaggerItem>
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-2xl bg-card p-4 transition-colors hover:bg-accent border border-border"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted mb-4">
          <Image
            src={project.imageUrl}
            alt={localized(project.title, locale)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="px-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {localized(project.title, locale)}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.category}
          </p>
        </div>
      </a>
    </StaggerItem>
  )
}
