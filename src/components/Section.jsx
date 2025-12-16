import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section = ({ id, eyebrow, title, description, children }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        },
      )

      const cards = el.querySelectorAll('[data-animate="card"]')
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              start: 'top 78%',
              once: true,
            },
          },
        )
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? <p className="pill w-fit">{eyebrow}</p> : null}
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-lg text-slate-300">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section

