import { ArrowUpRight } from 'lucide-react'
import { images, whatsappLink } from '../config'
import { WhatsAppIcon } from './BrandIcons'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="px-3 py-24 sm:px-6 sm:py-32">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:py-28">
        <img src={images.cta} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover grayscale" />
        <div className="absolute inset-0 -z-10 bg-accent/80 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 to-black/20" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Tu primera clase es gratis</p>
        <h2 className="mx-auto max-w-4xl font-display text-6xl uppercase leading-[0.85] sm:text-8xl lg:text-9xl">
          Empezá <span className="text-outline">bien</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-white py-4 pl-7 pr-5 font-semibold text-bg transition-transform hover:scale-105"
          >
            Reservar clase
            <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="size-5" /> Escribinos
          </a>
        </div>
      </Reveal>
    </section>
  )
}
