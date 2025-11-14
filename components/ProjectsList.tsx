import Link from 'next/link'
import type { ProjectEntry } from '@/lib/projects'

interface ProjectsListProps {
  projects: ProjectEntry[]
  limit?: number
  idPrefix?: string
}

const knownTagClasses = new Set([
  'js',
  'py',
  'python',
  'pytorch',
  'ml',
  'dl',
  'ts',
  'rnn',
  'llm',
  'web',
  'dash',
  'express',
  'flask',
  'sql',
  'db',
  'geo',
  'graph',
  'rs',
  'cpp',
  'game',
])

const tagDescriptions: Record<string, string> = {
  js: 'JavaScript',
  py: 'Python',
  python: 'Python',
  pytorch: 'PyTorch',
  ml: 'Machine Learning',
  dl: 'Deep Learning',
  ts: 'Time Series',
  rnn: 'Recurrent Neural Networks',
  llm: 'Large Language Models',
  web: 'Web Development',
  dash: 'Dash (Plotly Framework)',
  express: 'Express.js',
  flask: 'Flask',
  sql: 'SQL',
  db: 'Databases',
  geo: 'Geospatial / GeoPandas',
  graph: 'Graph Analysis',
  rs: 'Remote Sensing',
  cpp: 'C++',
  game: 'Game Development',
}

const sanitizeTag = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]/g, '-')

export function ProjectsList({ projects, limit, idPrefix }: ProjectsListProps) {
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects

  return (
    <div className="projects-list">
      {items.map((project) => {
        const normalizedTags = project.tags.map((tag) => sanitizeTag(tag))
        const href = project.href ?? `/projects#${project.slug}`

        const elementId = idPrefix ? `${idPrefix}-${project.slug}` : project.slug

        return (
          <div key={project.slug} id={elementId} className="project-row">
            <div>
              <Link href={href} className="project-title">
                {project.title}
              </Link>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {normalizedTags.map((normalized, index) => {
                  const original = project.tags[index]
                  const tagClass = knownTagClasses.has(normalized)
                    ? normalized
                    : 'default'
                  return (
                    <span
                      key={`${project.slug}-${normalized}-${index}`}
                      className={`project-tag ${tagClass}`}
                      title={tagDescriptions[normalized] ?? original}
                    >
                      {original.toUpperCase()}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsList

