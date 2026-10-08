import { ArrowUpRight } from 'lucide-react'
import { audiences, images, stats, whatsappLink } from '../config'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Audience() {
  const coaches = stats.find((s) => /coach/i.test(s.label))

  return (
    <section id="para-quien" className="relative overflow-hidden border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="absolute -right-40 top-0 size-[30rem] rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative self-start lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.about}
              alt="Coach corrigiendo la técnica de un alumno"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          {coaches && (
            <div className="absolute -bottom-6 right-4 rotate-3 rounded-3xl bg-accent px-7 py-5 text-on-accent shadow-2xl shadow-accent/30 sm:-right-6">
              <p className="font-display text-6xl leading-none">{coaches.value}</p>
              <p className="text-sm font-medium">{coaches.label} que te guían</p>
            </div>
          )}
        </Reveal>

        <div className="flex flex-col justify-center">
          <SectionHeader
            index={2}
            eyebrow="Para quién"
            title="Pensado"
            highlight="para vos"
          />

          <ul className="flex flex-col">
            {audiences.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 90}
                className="group border-t border-line py-7 last:border-b"
              >
                <a
                  href={whatsappLink(a.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 sm:gap-8"
                >
                  <span className="font-display text-2xl text-accent">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block font-display text-4xl uppercase leading-none tracking-wide transition-colors group-hover:text-white sm:text-5xl">
                      {a.title}
                    </span>
                    <span className="mt-3 block max-w-md text-ink/70">{a.text}</span>
                  </span>
                  <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
