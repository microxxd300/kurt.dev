// Small inline SVG icons so the project doesn't need an icon library.

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
  </svg>
)

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const PinIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const GithubIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const BriefcaseIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
)

export const CapIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M22 9 12 4 2 9l10 5 10-5z" />
    <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6" />
  </svg>
)

// Skill logos (simplified)
const skillIcons = {
  html: (
    <svg viewBox="0 0 32 32" width="40" height="40">
      <path d="M5 3h22l-2 23-9 3-9-3z" fill="#e44d26" />
      <path d="M16 5v22l7.3-2.1L25 5z" fill="#f16529" />
      <path d="M10 9h12l-.3 3H13.3l.2 3h7.9l-.6 6.5L16 23l-4.8-1.5-.3-3.5h3l.1 1.6 2 .6 2-.6.2-2.6H10.6z" fill="#fff" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 32 32" width="40" height="40">
      <path d="M5 3h22l-2 23-9 3-9-3z" fill="#1572b6" />
      <path d="M16 5v22l7.3-2.1L25 5z" fill="#33a9dc" />
      <path d="M22 9H10l.3 3h8.2l-.3 3H13l.3 3h4.6l-.3 2.3-1.6.5-1.7-.5-.1-1.3h-3l.3 3.5L16 23l4.4-1.5z" fill="#fff" />
    </svg>
  ),
  js: (
    <svg viewBox="0 0 32 32" width="40" height="40">
      <rect x="3" y="3" width="26" height="26" rx="3" fill="#f7df1e" />
      <text x="25" y="25" textAnchor="end" fontFamily="Arial" fontWeight="700" fontSize="12" fill="#000">JS</text>
    </svg>
  ),
  react: (
    <svg viewBox="-12 -12 24 24" width="40" height="40" fill="none" stroke="#61dafb" strokeWidth="1">
      <circle r="2" fill="#61dafb" stroke="none" />
      <ellipse rx="10" ry="4" />
      <ellipse rx="10" ry="4" transform="rotate(60)" />
      <ellipse rx="10" ry="4" transform="rotate(120)" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 32 32" width="40" height="40">
      <rect x="4" y="4" width="24" height="24" rx="3" transform="rotate(45 16 16)" fill="#f05033" />
      <g stroke="#fff" strokeWidth="2" fill="#fff">
        <line x1="12" y1="10" x2="12" y2="22" />
        <line x1="12" y1="13" x2="19" y2="17" />
        <circle cx="12" cy="10" r="2" />
        <circle cx="12" cy="22" r="2" />
        <circle cx="20" cy="17.5" r="2" />
      </g>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 36" width="28" height="40">
      <circle cx="18" cy="18" r="6" fill="#1abcfe" />
      <path d="M6 36a6 6 0 0 0 6-6v-6H6a6 6 0 0 0 0 12z" fill="#0acf83" />
      <path d="M0 18a6 6 0 0 0 6 6h6V12H6a6 6 0 0 0-6 6z" fill="#a259ff" />
      <path d="M0 6a6 6 0 0 0 6 6h6V0H6a6 6 0 0 0-6 6z" fill="#f24e1e" />
      <path d="M12 0v12h6a6 6 0 0 0 0-12z" fill="#ff7262" />
    </svg>
  ),
}

export const SkillIcon = ({ name }) => skillIcons[name] ?? null
