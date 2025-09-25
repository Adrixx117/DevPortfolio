import type { FC } from "react"

export type Project = {
  title: string
  description: string
  tech: string[]
  url: string
  repo: string
}

type ProjectCardProps = {
  project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
      <h4 className="text-xl font-semibold text-white">{project.title}</h4>
      <p className="mt-2 text-gray-400 text-sm">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Repo
        </a>
      </div>
    </div>
  )
}
