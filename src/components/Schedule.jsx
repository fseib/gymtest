import { Clock, MapPin, Navigation } from 'lucide-react'
import { gym, mapEmbedUrl, openingHours } from '../config'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Schedule() {
  return (
    <section id="horarios" className="border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index={4}
          eyebrow="Horarios"
          title="Cuándo y"
          highlight="dónde"
          text="Entrenamos con cupo limitado para que el coach pueda acompañar a cada uno."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Apertura */}
          <Reveal className="rounded-[2rem] border border-line bg-bg p-6 sm:p-8 lg:col-span-2">
            <h3 className="mb-5 flex items-center gap-3 font-display text-3xl tracking-wide">
              <Clock className="size-6 text-accent" /> Abrimos
            </h3>
            <ul className="space-y-3">
              {openingHours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 text-sm">
                  <span className="text-muted">{h.days}</span>
                  <span className="text-right font-semibold">{h.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Ubicación */}
          <Reveal delay={100} className="relative min-h-80 overflow-hidden rounded-[2rem] border border-line lg:col-span-3">
            <iframe
              title={`Mapa de ${gym.name}`}
              src={mapEmbedUrl}
              className="absolute inset-0 size-full grayscale invert-[0.92] contrast-[0.85]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 p-3 pl-4 backdrop-blur-xl">
              <MapPin className="size-5 shrink-0 text-accent" />
              <p className="flex-1 text-sm leading-snug">{gym.address}</p>
              <a
                href={gym.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-on-accent"
              >
                <Navigation className="size-3.5" /> Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
