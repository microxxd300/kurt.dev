import { useEffect } from 'react'

const SELECTOR = '.section-head, .about-item, .resume-card, .skill, .project, .contact-grid > *, .stat'

// Fades elements in as they scroll into view.
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(SELECTOR)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
