import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-500 font-display text-lg text-white shadow-lg shadow-brand-500/30">
            MS
          </div>
          <div>
            <p className="font-display text-base text-white">MEIGNANAGANESAN S</p>
            <p className="text-xs text-slate-400">MERN Stack Developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs">
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-full text-center text-xs"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar

