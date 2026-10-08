import { gym, navLinks, openingHours } from '../config'
import { FacebookIcon, InstagramIcon } from './BrandIcons'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo size="sm" />
          <p className="mt-4 max-w-xs text-sm text-muted">{gym.description}</p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={gym.instagram} label="Instagram" icon={InstagramIcon} />
            <SocialLink href={gym.facebook} label="Facebook" icon={FacebookIcon} />
          </div>
        </div>

        <FooterCol title="Navegación">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink/70 transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Horarios">
          {openingHours.map((h) => (
            <li key={h.days} className="text-ink/70">
              <span className="block text-xs text-muted">{h.days}</span>
              {h.hours}
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contacto">
          <li className="text-ink/70">{gym.address}</li>
          <li>
            <a href={`mailto:${gym.email}`} className="text-ink/70 hover:text-ink">
              {gym.email}
            </a>
          </li>
          <li className="text-ink/70">{gym.phone}</li>
        </FooterCol>
      </div>

      {/* Nombre gigante de cierre */}
      <p
        aria-hidden="true"
        className="select-none whitespace-nowrap text-center font-display text-[17vw] uppercase leading-[0.75] text-outline opacity-40"
      >
        {gym.name}
      </p>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {gym.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">{title}</h3>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  )
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line text-ink/70 transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
    >
      <Icon className="size-5" />
    </a>
  )
}
