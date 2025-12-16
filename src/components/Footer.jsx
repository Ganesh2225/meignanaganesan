const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} MEIGNANAGANESAN S. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="transition hover:text-white"
            aria-label="View projects"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition hover:text-white"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

