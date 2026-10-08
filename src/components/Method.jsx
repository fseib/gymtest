import { Users } from 'lucide-react'
import { pillars } from '../config'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

// Tamaños del bento en desktop: el primero grande, el segundo ancho y los dos últimos chicos
const LAYOUT = ['lg:col-span-2 lg:row-span-2', 'lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1']

export default function Method() {
  return (
    <section id="metodo" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        index={1}
        eyebrow="El método"
        title="Entrená con"
        highlight="propósito"
        text="Nada de rutinas al azar. Cada entrenamiento tiene una estructura y un objetivo, y un coach que te guía en cada repetición."
      />

      <div className="grid auto-rows-[280px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 3) * 90}
            className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl p-6 sm:p-7 ${
              p.image ? 'border border-line' : 'bg-accent text-on-accent'
            } ${LAYOUT[i % LAYOUT.length]}`}
          >
            {p.image ? (
              <>
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-20 size-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/50 to-black/10" />
              </>
            ) : (
              <Users className="absolute right-6 top-6 size-10 opacity-80" strokeWidth={1.5} />
            )}

            <span className={`absolute left-6 top-6 font-display text-xl sm:left-7 sm:top-7 ${p.image ? 'text-ink/60' : 'text-white/70'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3 className={`font-display uppercase leading-none ${i === 0 ? 'text-6xl sm:text-8xl' : 'text-4xl'}`}>
              {p.title}
            </h3>
            <p className={`mt-2 max-w-sm text-sm ${p.image ? 'text-ink/75' : 'text-white/85'}`}>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
