import { ArrowUpRight, Check } from 'lucide-react'
import { plans, whatsappLink } from '../config'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Plans() {
  return (
    <section id="planes" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        index={3}
        eyebrow="Membresías"
        title="Elegí tu"
        highlight="plan"
        text="Elegí cuántas veces por semana querés entrenar. Todos los planes son con entrenamiento guiado en grupo reducido."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const featured = plan.featured
          return (
            <Reveal
              key={plan.name}
              delay={i * 110}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-2 sm:p-10 ${
                featured
                  ? 'bg-accent text-on-accent shadow-2xl shadow-accent/30'
                  : 'border border-line bg-surface'
              }`}
            >
              {/* Número gigante de fondo */}
              <span
                className={`pointer-events-none absolute -right-4 -top-10 font-display text-[12rem] leading-none ${
                  featured ? 'text-white/10' : 'text-white/[0.03]'
                }`}
                aria-hidden="true"
              >
                0{i + 1}
              </span>

              <div className="relative flex items-center justify-between">
                <h3 className="font-display text-4xl uppercase tracking-wide">{plan.name}</h3>
                {featured && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                    Más elegido
                  </span>
                )}
              </div>
              <p className={`relative mt-1 text-sm ${featured ? 'text-white/80' : 'text-muted'}`}>{plan.description}</p>

              <p className="relative mt-8 flex items-start gap-1">
                <span className="mt-2 text-2xl font-semibold">$</span>
                <span className="font-display text-8xl leading-none">{plan.price}</span>
              </p>
              <p className={`relative text-sm ${featured ? 'text-white/80' : 'text-muted'}`}>por mes</p>

              <div className={`relative my-8 h-px ${featured ? 'bg-white/25' : 'bg-line'}`} />

              <ul className="relative flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-full ${
                        featured ? 'bg-white text-accent' : 'bg-accent/20 text-ink'
                      }`}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`¡Hola! Me interesa el plan de ${plan.name} por semana. ¿Me pasan más info?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative mt-10 inline-flex items-center justify-between rounded-full py-4 pl-7 pr-4 font-semibold transition-all ${
                  featured
                    ? 'bg-bg text-ink hover:bg-black'
                    : 'border border-white/15 hover:border-accent hover:bg-accent hover:text-on-accent'
                }`}
              >
                Quiero este plan
                <span className={`grid size-9 place-items-center rounded-full ${featured ? 'bg-accent text-on-accent' : 'bg-white/10'}`}>
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
