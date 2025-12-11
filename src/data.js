import {
  Code2,
  Layout,
  Smartphone,
  Palette,
  Database,
  Rocket,
  Sparkles,
} from 'lucide-react'

export const skills = [
  { name: 'React / Vite', level: 'Advanced', icon: Code2 },
  { name: 'Tailwind CSS', level: 'Advanced', icon: Palette },
  { name: 'TypeScript', level: 'Advanced', icon: Sparkles },
  { name: 'Framer Motion', level: 'Intermediate', icon: Rocket },
  { name: 'Responsive UI', level: 'Advanced', icon: Smartphone },
  { name: 'Design Systems', level: 'Advanced', icon: Layout },
  { name: 'REST / GraphQL', level: 'Intermediate', icon: Database },
  { name: 'Accessibility', level: 'Advanced', icon: Sparkles },
]

export const projects = [
  {
    title: 'Insight Dashboard',
    description:
      'Data-rich analytics dashboard with live filters, dark mode, and custom charts for product KPIs.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Chart.js'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/dashboard',
  },
  {
    title: 'Product Launch Landing',
    description:
      'High-converting marketing page with A/B-tested hero messaging, responsive layouts, and form integration.',
    tech: ['Vite', 'Tailwind', 'Netlify Forms'],
    image:
      'https://images.unsplash.com/photo-1522199873716-fddd3a1f4834?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/landing',
  },
  {
    title: 'UI Component Library',
    description:
      'Reusable components with tokens, themes, and documentation; powered by Storybook and tested for accessibility.',
    tech: ['React', 'Storybook', 'Tailwind', 'Testing Library'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/components',
  },
]

