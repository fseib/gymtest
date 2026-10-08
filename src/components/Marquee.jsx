const WORDS = ['Técnica', 'Fuerza', 'Movilidad', 'Grupos reducidos', 'Entrenamiento guiado', 'Sin lesiones']

function Track({ className = '', textClass = '', reverse = false }) {
  // Se duplica el contenido para que la animación (-50%) haga un loop sin cortes
  const items = [...WORDS, ...WORDS]
  return (
    <div className={`flex overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <div className={`flex shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((w, i) => (
          <span key={i} className={`flex items-center font-display text-4xl uppercase tracking-wide sm:text-5xl ${textClass}`}>
            <span className="px-6">{w}</span>
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-14" aria-hidden="true">
      <Track className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-2 border-y border-line bg-surface" textClass="text-outline" reverse />
      <Track className="relative -rotate-2 bg-accent text-on-accent shadow-2xl shadow-accent/30" />
    </div>
  )
}
