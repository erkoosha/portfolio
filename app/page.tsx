import { ProjectsGrid } from "@/widgets/projects/projects-grid"

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="p-6 md:p-8">
        <ProjectsGrid />
      </div>
    </div>
  )
}
