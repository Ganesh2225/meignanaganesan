import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import Section from './Section'
import { experience } from '../data'

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional journey and contributions."
      description="Building scalable web applications and contributing to innovative projects."
    >
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-surface"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                <Briefcase size={22} />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-brand-200">{exp.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Experience

