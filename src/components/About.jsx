import { motion } from 'framer-motion'
import Section from './Section'

const profileImg =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80'

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="MERN Stack Developer passionate about building robust web applications."
      description="Experienced in creating dynamic and responsive user interfaces, handling data efficiently, and optimizing web performance."
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-slate-300"
        >
          <p>
            A MERN stack developer with year of experience is well-versed in building 
            robust web applications using MongoDB, Express.js, React, and Node.js. They 
            have honed their skills in creating dynamic and responsive user interfaces, 
            handling data efficiently, and optimizing web performance.
          </p>
          <p>
            With their solid foundation, they are ready to tackle more complex challenges 
            and contribute effectively to any development team.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Languages', value: 'English, Tamil' },
              { label: 'Framework', value: 'React, Express.js' },
              { label: 'Database', value: 'MongoDB, Firebase, SQL' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-[0.08em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-8 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <img
              src={profileImg}
              alt="Profile"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About

