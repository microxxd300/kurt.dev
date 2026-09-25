# kurt.dev — Personal CV Page

A personal Curriculum Vitae (CV) web page built with **React** and **Vite**, using a dark purple theme.

**Live site:** https://microxxd300.github.io/kurt.dev/

## Student Information

| | |
|---|---|
| **Complete Name** | Kurt Lumpayao |
| **Year Level** | [Year Level] |
| **Set/Section** | [Set/Section] |
| **Subject** | [Subject] |

## About the Project

This is my first GitHub repository. It contains a one-page CV website with:

- **Profile / Introduction** – hero section with a short intro about me
- **What I Do** – the areas I focus on
- **Education & Experience** – my school background and activities
- **Skills** – tools and languages I use, with proficiency levels
- **Projects** – things I have built, with a category filter
- **Contact** – contact details and a message form
- **Download CV** – prints a clean, light version of the page (Save as PDF)

## Built With

- [React](https://react.dev/) – UI components
- [Vite](https://vite.dev/) – dev server and build tool
- Plain CSS – custom theme using CSS variables (no UI library)

## Project Structure

```
kurt.dev/
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Puts all sections together
    ├── index.css         # Theme colors, global styles, print styles
    ├── data.js           # All CV content (edit this to update the page)
    ├── hooks/
    │   └── useReveal.js  # Scroll fade-in animation
    └── components/       # One component + CSS file per section
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── About.jsx
        ├── Resume.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Icons.jsx
```

## How to Run

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/microxxd300/kurt.dev.git
cd kurt.dev
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

To make a production build:

```bash
npm run build
npm run preview
```

## Author

**Kurt Lumpayao** — [kurtlumpayao25@gmail.com](mailto:kurtlumpayao25@gmail.com) · [GitHub](https://github.com/microxxd300)
