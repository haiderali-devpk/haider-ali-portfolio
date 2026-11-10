# Haider Ali — Portfolio (v2)

Frontend developer portfolio for **Haider Ali**, rebuilt with a new look:
**Palette #4 Navy & Coral** — Dark `#0c1e3e`, Primary `#2563eb`,
Accent `#fb7185`, Light `#f8fafc`.

## Tech stack

| Technology | Purpose |
| --- | --- |
| React.js | Frontend |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide Icons | Icons |
| Vite | Build tool |

## Run it

```bash
npm install
npm run dev      # local development server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Contact form

The contact form sends real messages to **haiderali646450@gmail.com**
using [FormSubmit](https://formsubmit.co) — no signup, no API key. The
form POSTs to `https://formsubmit.co/haiderali646450@gmail.com` with
`_subject="New message from portfolio"`, `_captcha="false"` and
`_template="table"`, and shows a success message after sending.

**Important — one-time activation:** the first submission triggers an
activation email to haiderali646450@gmail.com. Click the activation link
in the inbox — after that, all form messages will arrive at that email.

## Sections

Hero (with typing headline + photo), skills ticker, About, Skills,
Projects (4 real projects with live demos), Services, Contact, and a
two-column footer.

## Features

- **Smooth scrolling** — `scroll-behavior: smooth` for anchor navigation
  plus Framer Motion `whileInView` reveals on every section.
- **Animated gradient hero** — slow-drifting navy / blue / coral gradient
  (`.hero-gradient`, 18s keyframe loop; off for reduced-motion visitors).
- **Project hover effects** — image zooms, card lifts with a coral border
  glow, and an overlay with View Live / GitHub buttons appears on hover.
- **Dark / light mode** — Sun/Moon toggle in the header. Light mode is the
  Navy & Coral palette; dark mode uses deep navy (`#081226`) backgrounds
  with light text and the same blue/coral accents. The choice is saved in
  localStorage (`haider-portfolio-theme`) and first-time visitors follow
  their system `prefers-color-scheme`. An inline script in `index.html`
  applies the theme before React loads, so there is no flash.
- **Mobile navigation** — hamburger menu (Menu/X icons) with an animated
  slide-down panel; tapping any link closes it.
- **Download CV** — buttons in the hero and About section link to
  `public/haider-ali-cv.pdf` (one-page CV, built from Haider Ali's details).
- **GitHub & LinkedIn** — prominent buttons in the hero and Contact
  section; footer keeps LinkedIn exactly once.

## Notes

- All website text is in English.
- The hero photo is `src/assets/haider-ali.png`; project screenshots are
  the `project-*.webp` files in `src/assets/`.
- Loader: full-screen navy loader, "HA." + "Haider Ali" + "Frontend
  Developer", fades after ~1s; Esc or a click dismisses it.
