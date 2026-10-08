import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react'
import { gym, levels } from '../config'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const inputClass =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/25 outline-none transition-colors focus:border-accent focus:ring-0'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [level, setLevel] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('Faltan las variables de EmailJS. Copiá .env.example a .env y completalas.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
      setLevel('')
    } catch (err) {
      console.error('Error enviando el formulario:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeader index={5} eyebrow="Contacto" title="Reservá tu" highlight="clase gratis" />
          <Reveal className="-mt-6 flex flex-col">
            <p className="mb-8 text-ink/70">Dejanos tus datos y te respondemos en menos de 24 horas.</p>
            <ContactItem icon={Phone} label="Teléfono" value={gym.phone} href={`tel:${gym.phone.replace(/\s|-/g, '')}`} />
            <ContactItem icon={Mail} label="Email" value={gym.email} href={`mailto:${gym.email}`} />
            <ContactItem icon={MapPin} label="Dirección" value={gym.address} href={gym.mapsUrl} external />
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-x-8 gap-y-8 rounded-[2rem] border border-line bg-surface p-6 sm:grid-cols-2 sm:p-10"
          >
            <Field label="Nombre" htmlFor="name">
              <input id="name" name="name" required autoComplete="name" placeholder="Tu nombre" className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email">
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="tu@email.com" className={inputClass} />
            </Field>
            <Field label="Teléfono" htmlFor="phone" className="sm:col-span-2">
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="11 1234 5678" className={inputClass} />
            </Field>

            <fieldset className="sm:col-span-2">
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">¿Desde dónde arrancás?</legend>
              <input type="hidden" name="level" value={level || 'No especificado'} />
              <div className="flex flex-wrap gap-2">
                {levels.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setLevel(level === name ? '' : name)}
                    aria-pressed={level === name}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                      level === name
                        ? 'border-accent bg-accent text-on-accent'
                        : 'border-line text-muted hover:border-white/40 hover:text-ink'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </fieldset>

            <Field label="Mensaje" htmlFor="message" className="sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Contanos tu objetivo, si tenés alguna lesión o cualquier consulta..."
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div className="flex flex-col gap-4 sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center justify-between rounded-full bg-accent py-3 pl-8 pr-3 text-lg font-semibold text-on-accent transition-all hover:glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                <span className="grid size-11 place-items-center rounded-full bg-black/25">
                  {status === 'sending' ? (
                    <LoaderCircle className="size-5 animate-spin" />
                  ) : (
                    <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                  )}
                </span>
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="flex items-center gap-2 rounded-2xl border border-green-500/40 bg-green-500/10 p-4 text-green-400">
                    <CircleCheck className="size-5 shrink-0" /> ¡Gracias! Recibimos tu mensaje y te contactamos pronto.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-400">
                    <CircleAlert className="size-5 shrink-0" /> No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.
                  </p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="group flex items-center gap-5 border-t border-line py-5 last:border-b"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
        <Icon className="size-5" />
      </span>
      <span className="flex-1">
        <span className="block text-xs uppercase tracking-widest text-muted">{label}</span>
        <span className="font-medium">{value}</span>
      </span>
      <ArrowUpRight className="size-5 text-muted transition-all group-hover:rotate-45 group-hover:text-ink" />
    </a>
  )
}
