import { useState } from 'react'
import { profile } from '../data'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: open the visitor's email app with the message filled in
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const info = [
    { icon: <PhoneIcon />, label: 'Phone', value: profile.phone },
    { icon: <MailIcon />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PinIcon />, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Let's work together!</h2>
          <p>Have a question, a project idea, or just want to say hi? Send me a message.</p>

          <div className="form-row">
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          </div>
          <textarea name="message" rows="5" placeholder="Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <ul className="contact-info">
          {info.map((item) => (
            <li key={item.label}>
              <span className="contact-icon">{item.icon}</span>
              <div>
                <span className="contact-label">{item.label}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
