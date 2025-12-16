import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { education } from '../data'

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background and achievements."
      description="Educational qualifications that form the foundation of my technical expertise."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${edu.degree}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            data-animate="card"
            className="card-surface"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
              <GraduationCap size={22} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {edu.institution}
            </h3>
            <p className="mb-1 text-sm text-slate-300">{edu.degree}</p>
            <p className="mb-2 text-sm font-medium text-brand-200">
              {edu.percentage}
            </p>
            <p className="text-xs text-slate-400">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Education

