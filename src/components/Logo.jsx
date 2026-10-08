import { Crown } from 'lucide-react'
import { gym } from '../config'

export default function Logo({ size = 'md', onClick }) {
  const box = size === 'sm' ? 'size-8' : 'size-9'
  const text = size === 'sm' ? 'text-2xl' : 'text-[1.7rem]'
  return (
    <a href="#inicio" onClick={onClick} className="flex items-center gap-2.5">
      <span className={`grid ${box} -rotate-6 place-items-center rounded-lg bg-accent text-on-accent`}>
        <Crown className="size-5" strokeWidth={2.5} />
      </span>
      <span className={`font-display ${text} leading-none tracking-wide`}>{gym.name}</span>
    </a>
  )
}
