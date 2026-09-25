import { stats } from '../data'
import './Stats.css'

function Stats() {
  return (
    <div className="container stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Stats
