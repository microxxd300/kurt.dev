import { skills } from '../data'
import { SkillIcon } from './Icons'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">My Skills</h2>
          <p>The tools and technologies I use and keep practicing to build better projects.</p>
        </div>

        <ul className="skills-grid">
          {skills.map((skill) => (
            <li className="skill" key={skill.name}>
              <div className="skill-box">
                <SkillIcon name={skill.icon} />
                <span className="skill-level">{skill.level}%</span>
              </div>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
