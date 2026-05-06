"use client"

import { projects } from "@/shared/config/projects"
import { StaggerContainer } from "@/shared/ui/motion"
import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-8 border-b border-border pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Portfolio
        </h2>
      </div>

      <StaggerContainer
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerContainer>
    </section>
  )
}
