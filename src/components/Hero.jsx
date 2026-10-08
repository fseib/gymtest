import { ArrowDown, ArrowUpRight, Star } from 'lucide-react'
import { gym, images, review, stats } from '../config'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const AVATARS = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=60',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=60',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=60',
]

// Palabras del tagline: la primera sólida, las del medio contorneadas, la última en color de acento
function wordClass(i, total) {
  if (i === total - 1) return 'text-accent'
  if (i > 0) return 'text-outline'
  return ''
}

export default function Hero() {
  const words = gym.tagline.split(' ')

  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <img
        src={images.hero}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full animate-slow-zoom object-cover object-[70%_center] grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/10 to-bg/60" />
      <div className="absolute -left-40 top-1/3 -z-10 size-[32rem] rounded-full bg-accent/25 blur-[140px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-32 sm:px-6">
        <p className="mb-6 flex animate-fade-in items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink/80">
          <span className="h-px w-10 bg-accent" />
          Fuerza en serio
        </p>

        <h1 className="font-display text-[22vw] uppercase leading-[0.82] sm:text-[11rem] lg:text-[13rem]">
          {words.map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className={`block animate-rise ${wordClass(i, words.length)}`}
                style={{ animationDelay: `${150 + i * 120}ms` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md animate-fade-in [animation-delay:600ms]">
            <p className="text-lg text-ink/75">{gym.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-accent py-4 pl-7 pr-5 font-semibold text-on-accent transition-all hover:glow"
              >
                Reservá tu clase
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 font-semibold backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-bg"
              >
                Ver planes
              </a>
            </div>
          </div>

          {/* Tarjeta flotante con prueba social */}
          <div className="w-full max-w-xs animate-fade-in rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl [animation-delay:800ms]">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((src) => (
                  <img key={src} src={src} alt="" className="size-11 rounded-full border-2 border-bg object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {review.rating} en {review.source}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              “{review.quote}”
            </p>
          </div>
        </div>
      </div>

      <HeroStats />
    </section>
  )
}

function HeroStats() {
  const [ref, visible] = useInView({ threshold: 0.3 })
  return (
    <div ref={ref} className="border-t border-white/10 bg-bg/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <dl className="grid flex-1 grid-cols-3 divide-x divide-white/10">
          {stats.map((s) => (
            <Stat key={s.label} {...s} start={visible} />
          ))}
        </dl>
        <a
          href="#metodo"
          aria-label="Bajar al método"
          className="ml-6 hidden size-14 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:border-accent hover:bg-accent md:grid"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </div>
    </div>
  )
}

function Stat({ value, label, start }) {
  const display = useCountUp(value, start)
  return (
    <div className="flex flex-col py-6 pl-4 first:pl-0 sm:flex-row sm:items-center sm:gap-4 sm:pl-8">
      <dt className="text-[0.65rem] uppercase leading-tight tracking-widest text-muted sm:text-xs">{label}</dt>
      <dd className="order-first font-display text-4xl leading-none sm:text-6xl">{display}</dd>
    </div>
  )
}
