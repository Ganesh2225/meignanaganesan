import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section'

const Projects = ({ projects }) => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Recent work that blends design, code, and motion."
      description="A sample of product launches, dashboards, and component systems shipped with React and Tailwind."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-300">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:bg-brand-500/10"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default Projects

