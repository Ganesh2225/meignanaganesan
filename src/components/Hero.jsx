import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="pill w-fit">MERN Stack Developer</p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m MEIGNANAGANESAN S - building robust web applications.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            A MERN stack developer with experience in building dynamic and responsive 
            web applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href="#projects">
              View projects
              <ArrowRight size={18} />
            </a>
            <a className="btn-ghost" href="#contact">
              Contact me
              <Send size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 sm:max-w-xl">
            {[
              { label: 'Projects', value: '4+' },
              { label: 'Experience', value: '2+ yrs' },
              { label: 'Languages', value: '2' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="font-display text-2xl text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-10 -top-16 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -right-12 bottom-4 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative card-surface p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-500 text-2xl font-semibold text-white shadow-lg shadow-brand-500/30">
                MS
              </div>
              <div>
                <p className="text-sm text-slate-400">Currently working at</p>
                <p className="text-lg font-semibold text-white">
                  Digisailor - MERN Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p>
                I specialize in building scalable web applications with React, Node.js, 
                and MongoDB. Focused on creating efficient backend solutions and 
                dynamic user interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

