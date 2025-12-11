import { motion } from 'framer-motion'
import Section from './Section'

const Skills = ({ skills }) => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools that help me ship quality products."
      description="A mix of front-end engineering, design systems, and motion to build experiences that feel polished and performant."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-surface"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                <Icon size={22} />
              </div>
              <p className="text-lg font-semibold text-white">{skill.name}</p>
              <p className="text-sm text-slate-400">{skill.level}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills

