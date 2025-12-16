import { motion } from 'framer-motion'
import Section from './Section'

const toneStyles = {
  indigo:
    'bg-gradient-to-br from-wonder-indigo/15 via-wonder-pink/10 to-wonder-cyan/10 border-wonder-indigo/40 text-white',
  pink: 'bg-gradient-to-br from-wonder-pink/15 to-wonder-indigo/10 border-wonder-pink/40 text-white',
  orange: 'bg-gradient-to-br from-wonder-orange/20 to-wonder-pink/10 border-wonder-orange/40 text-white',
  teal: 'bg-gradient-to-br from-wonder-cyan/15 to-wonder-teal/15 border-wonder-cyan/40 text-white',
  cyan: 'bg-gradient-to-br from-wonder-cyan/18 to-wonder-indigo/12 border-wonder-cyan/40 text-white',
  slate: 'bg-gradient-to-br from-white/5 to-white/0 border-white/10 text-slate-100',
}

const Skills = ({ skills }) => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies and tools I work with."
      description="A comprehensive set of skills covering frontend, backend, databases, and cloud platforms for building full-stack applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          const toneClass = toneStyles[skill.tone] || toneStyles.slate
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-animate="card"
              className={`card-surface relative overflow-hidden border ${toneClass}`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon size={22} />
                </div>
                <p className="text-lg font-semibold text-white">{skill.name}</p>
                <p className="text-sm text-slate-200">{skill.level}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills

