import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import Section from './Section'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    setStatus(`Thanks ${name || 'there'}! I will get back to you shortly.`)
    event.currentTarget.reset()
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great together."
      description="Share a bit about your project or idea - I'll respond within one business day."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="card-surface space-y-4"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-lg font-semibold text-white">
                  meignanaganesans@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-lg font-semibold text-white">
                  +91 6380897607
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-200">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Address</p>
                <p className="text-lg font-semibold text-white">
                  1s/11/5 Sankaraperi, Thoothukudi - 628002
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Feel free to reach out for collaboration opportunities or any inquiries.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card-surface space-y-4"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Message
            </label>
            <div className="relative">
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                placeholder="Project goals, timeline, links..."
              />
              <MessageSquare className="pointer-events-none absolute bottom-3 right-3 text-slate-500" />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Send message
          </button>
          {status ? (
            <p className="text-sm text-brand-100/90">{status}</p>
          ) : null}
        </motion.form>
      </div>
    </Section>
  )
}

export default Contact

