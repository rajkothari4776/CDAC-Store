import { Project } from "@/data/Projects"

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 p-4">
      {projects.map(project => (
        <div key={project.id} className="border p-4 rounded-md shadow-sm bg-white">
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-600">{project.category}</p>
          <p className="text-sm text-gray-600">{project.budget} | {project.duration}</p>
        </div>
      ))}
    </div>
  )
}
