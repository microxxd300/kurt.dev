import { useState } from 'react'
import { projects } from '../data'
import { ArrowIcon } from './Icons'
import './Projects.css'

const filters = ['All', ...new Set(projects.map((p) => p.category))]

function Projects() {
  const [active, setActive] = useState('All')

  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">My Projects</h2>
          <p>Some of the things I have built while learning and practicing.</p>
        </div>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter ${active === filter ? 'active' : ''}`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul className="projects-grid">
          {shown.map((project, index) => (
            <li className="project" key={project.title}>
              <div className={`project-preview preview-${index % 4}`}>
                <span>{project.title}</span>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
                <ArrowIcon width={26} height={26} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
