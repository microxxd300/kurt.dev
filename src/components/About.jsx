import { about } from '../data'
import { ArrowIcon } from './Icons'
import './About.css'

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">What I Do</h2>
          <p>
            A quick look at the areas I focus on as a student and what I enjoy
            working on the most.
          </p>
        </div>

        <ul className="about-list">
          {about.map((item, index) => (
            <li className="about-item" key={item.title}>
              <div className="about-name">
                <span className="about-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
              <ArrowIcon className="about-arrow" width={26} height={26} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
