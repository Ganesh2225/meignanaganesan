import { motion } from 'framer-motion'

const Section = ({ id, eyebrow, title, description, children }) => {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          {eyebrow ? <p className="pill w-fit">{eyebrow}</p> : null}
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-lg text-slate-300">{description}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export default Section

