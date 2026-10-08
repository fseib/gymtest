import { whatsappLink } from '../config'
import { WhatsAppIcon } from './BrandIcons'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        ¿Consultas? Escribinos
      </span>
      <span className="grid size-14 animate-wa-pulse place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-16">
        <WhatsAppIcon className="size-8 sm:size-9" />
      </span>
    </a>
  )
}
