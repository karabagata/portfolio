import ProjectsList from '@/components/ProjectsList'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <div className="terminal-page">
      <section className="terminal-section">
        <div className="terminal-section-label">Projects</div>
        <div className="terminal-section-body">
          
          
          <ProjectsList projects={projects} />
        </div>
      </section>
    </div>
  )
}
