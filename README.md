# ZeroSoft Portfolio — React + Vite + Tailwind

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. It includes hero, about, skills, projects, and contact sections with smooth scrolling and subtle animations.

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
The app will be available at the URL printed in the terminal (default: http://localhost:5173).

Lint the project:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

## Deploying to Vercel
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, import the project and select this repository.
3. Keep the default settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. (Optional) Add the following to your project root for custom rewrites:
   - `vercel.json` (already included)
5. Deploy — Vercel will handle install/build/hosting automatically.

## Customization Tips
- Update `src/data.js` to change skills and project cards.
- Edit copy and CTAs in `src/components/Hero.jsx`, `About.jsx`, and `Contact.jsx`.
- Swap imagery with your own assets or links.
- Adjust theme tokens in `tailwind.config.js` and global styles in `src/index.css`.
