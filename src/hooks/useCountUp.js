import { useEffect, useState } from 'react'

// Anima el número dentro de un texto ("+800" → +0…+800). Deja intacto el prefijo/sufijo.
export function useCountUp(value, start, duration = 1600) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!start || !match) return
    const target = Number(match[2])
    let frame
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCurrent(Math.round(eased * target))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, value])

  if (!match) return value
  return `${match[1]}${current}${match[3]}`
}
