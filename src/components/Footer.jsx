import { profile } from '../data'
import './Footer.css'

const links = ['About', 'Resume', 'Skills', 'Projects', 'Contact']

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo-mark">K</a>
        <nav className="footer-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <p>
          &copy; {new Date().getFullYear()} All rights reserved by{' '}
          <span>{profile.fullName}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
