import Reveal from './Reveal'

// Encabezado de sección: número + etiqueta, título grande (última parte contorneada) y texto opcional a la derecha.
export default function SectionHeader({ index, eyebrow, title, highlight, text, center = false }) {
  return (
    <Reveal
      className={`mb-14 flex flex-col gap-6 ${
        center ? 'items-center text-center' : 'lg:flex-row lg:items-end lg:justify-between'
      }`}
    >
      <div>
        <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted ${center ? 'justify-center' : ''}`}>
          <span className="flex items-center gap-2 text-ink">
            <span className="size-1.5 rounded-full bg-accent" />
            {String(index).padStart(2, '0')}
          </span>
          {eyebrow}
        </p>
        <h2 className="font-display text-6xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
          {title}
          <br />
          <span className="text-outline">{highlight}</span>
        </h2>
      </div>
      {text && <p className={`max-w-sm text-ink/70 ${center ? '' : 'lg:text-right'}`}>{text}</p>}
    </Reveal>
  )
}
