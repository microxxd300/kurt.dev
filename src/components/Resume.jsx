import { education, experience } from '../data'
import { BriefcaseIcon, CapIcon } from './Icons'
import './Resume.css'

function ResumeColumn({ icon, title, items }) {
  return (
    <div className="resume-col">
      <h2 className="resume-heading">
        {icon}
        <span>{title}</span>
      </h2>
      <ul className="resume-list">
        {items.map((item) => (
          <li className="resume-card" key={item.title}>
            <span className="resume-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container resume-grid">
        <ResumeColumn
          icon={<CapIcon width={30} height={30} />}
          title="My Education"
          items={education}
        />
        <ResumeColumn
          icon={<BriefcaseIcon width={30} height={30} />}
          title="My Experience"
          items={experience}
        />
      </div>
    </section>
  )
}

export default Resume
