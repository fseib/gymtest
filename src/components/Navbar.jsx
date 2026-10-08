import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { gym, navLinks } from '../config'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 40)
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del fondo con el menú mobile abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ${
            scrolled || open
              ? 'border border-white/10 bg-black/60 shadow-2xl shadow-black/50 backdrop-blur-xl'
              : 'border border-transparent'
          }`}
        >
          <Logo onClick={close} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="group hidden items-center gap-1.5 rounded-full bg-accent py-3 pl-5 pr-4 text-sm font-semibold text-on-accent transition-all hover:glow sm:inline-flex"
            >
              Clase gratis
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </a>
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menú mobile a pantalla completa */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-between bg-bg/95 px-6 pb-10 pt-28 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`border-b border-line transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              <a href={link.href} onClick={close} className="flex items-baseline gap-4 py-4">
                <span className="text-xs text-muted">0{i + 1}</span>
                <span className="font-display text-5xl tracking-wide">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <a
            href="#contacto"
            onClick={close}
            className="rounded-full bg-accent py-4 text-center font-semibold text-on-accent"
          >
            Reservá tu clase gratis
          </a>
          <p className="text-center text-sm text-muted">{gym.address}</p>
        </div>
      </div>
    </>
  )
}
