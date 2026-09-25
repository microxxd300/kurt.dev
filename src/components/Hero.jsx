import { profile } from '../data'
import { DownloadIcon, GithubIcon, MailIcon } from './Icons'
import './Hero.css'

function Hero() {
  const initials = profile.fullName
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h3 className="hero-hello">I am {profile.firstName}</h3>
          <h1 className="hero-title">
            {profile.role[0]} <br />
            {profile.role[1]}
          </h1>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <button className="btn btn-outline" onClick={() => window.print()}>
              Download CV <DownloadIcon width={18} height={18} />
            </button>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon width={18} height={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.fullName} />
            ) : (
              <span className="photo-initials">{initials}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
