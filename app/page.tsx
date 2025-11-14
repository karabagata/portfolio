import Link from 'next/link'
import ContactBanner from '@/components/ContactBanner'
import ProjectsList from '@/components/ProjectsList'
import { projects } from '@/lib/projects'

export default function Home() {
  return (
    <div className="terminal-page">
      <section className="terminal-section">
        <div className="terminal-section-label">WHO AM I?</div>
        <div className="terminal-section-body">
          <p className="terminal-paragraph">
          Master's student in Data Science and AI at <Link href="https://en.unistra.fr" target="_blank">Unistra</Link>. I'm passionate about working on machine learning models, LLMs, visualizing data, and turning ideas into real applications.
          </p>
          <p className="terminal-paragraph">
            
            Curious and analytical student, with strong interest in applying modern AI techniques. Experienced in teamwork, deep learning, and data analysis.
          </p>
        </div>
      </section>

      <section className="terminal-section">
        <div className="terminal-section-label">PROJECTS</div>
        <div className="terminal-section-body">
          <p className="terminal-paragraph">
            I have developed and contributed to a diverse portfolio of projects—from LLM text-to-SQL assistants and spatial analytics platforms to forecasting engines, dashboard-driven data products, computer vision pipelines, and advanced machine learning models.
          </p>
          <ProjectsList projects={projects} limit={3} />
          <Link href="/projects" className="text-sm uppercase tracking-[0.24em] text-muted hover:text-accent">
            View the full index -&gt;
          </Link>
        </div>
      </section>

      <section className="terminal-section">
        <div className="terminal-section-label">ABOUT</div>
        <div className="terminal-section-body">
          <p className="terminal-paragraph">
          I am in the final stages of my master’s program and will soon start a six-month internship at <Link href="https://kwarto.io" target="_blank">Kwarto</Link> as a Data Scientist / AI Developer. 
           During this internship, I will focus on building machine learning models and developing computer vision systems.
          </p>
          <div className="terminal-stack">
          <h3>Capabilities</h3>
          <p>LLM alignment, geospatial analytics, forecasting, classification, computer vision, 
            model evaluation, data analysis, clustering, data visualization, deep learning.</p>
            
          </div>
          <div className="terminal-stack">
            <h3>Toolbox</h3>
            <p>Python, PyTorch, scikit-learn, GeoPandas, SQL, TensorFlow, seaborn, matplotlib and a bit of C/C++/Java when needed.</p>
            <p>Git, Bash, 
            Dash, Next.js, a bit of Flask...</p>
          </div>
        </div>
      </section>

      <section className="terminal-section">
        <div className="terminal-section-label">CONTACT</div>
        <div className="terminal-section-body">
          <ContactBanner />
        </div>
      </section>
    </div>
  )
}
