import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { Menu, X, Phone, Clock, MapPin, Mail } from 'lucide-react'
import { COMPANY, NAV } from '@/data/content'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
      <span className="flex h-10 w-10 items-center justify-center bg-primary font-display text-2xl text-primary-foreground" aria-hidden>
        УС
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl uppercase tracking-wide sm:text-2xl">УралСтройМаркет</span>
        <span className="hidden text-xs text-muted-foreground sm:block">материалы · доставка · ремонт</span>
      </span>
    </Link>
  )
}

export default function SiteLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col">
      <div className="hazard-stripes h-1.5 w-full" aria-hidden />
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive ? 'text-primary underline decoration-2 underline-offset-4' : 'text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:flex"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex h-11 items-center justify-center bg-primary px-4 font-display text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 md:hidden"
              aria-label={`Позвонить: ${COMPANY.phone}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center border border-input hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background lg:hidden" aria-label="Мобильная навигация">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-border px-4 py-3.5 font-display text-xl uppercase tracking-wide ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 px-4 py-3.5 font-semibold">
              <Phone className="h-4 w-4 text-primary" aria-hidden /> {COMPANY.phone}
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background">
        <div className="hazard-stripes h-1.5 w-full" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
          <div>
            <p className="font-display text-2xl uppercase tracking-wide">УралСтройМаркет</p>
            <p className="mt-2 text-sm text-background/70">
              Строительные материалы с доставкой и ремонт под ключ в Екатеринбурге и Свердловской области.
            </p>
          </div>
          <nav aria-label="Навигация в подвале">
            <p className="font-display text-lg uppercase tracking-wide text-background/90">Разделы</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-background/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-display text-lg uppercase tracking-wide text-background/90">Контакты</p>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              <li>
                <a href={COMPANY.phoneHref} className="hover:text-primary">{COMPANY.phone}</a>
              </li>
              <li>
                <a href={COMPANY.phone2Href} className="hover:text-primary">{COMPANY.phone2}</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" aria-hidden /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {COMPANY.address}
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-lg uppercase tracking-wide text-background/90">Режим работы</p>
            <p className="mt-3 flex items-start gap-2 text-sm text-background/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {COMPANY.hours}
            </p>
            <p className="mt-4 text-xs text-background/50">
              ООО «УралСтройМаркет» · ИНН 6670001234 · ОГРН 1126670001234
            </p>
          </div>
        </div>
        <div className="border-t border-background/15">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-background/50 md:px-6">
            © {new Date().getFullYear()} УралСтройМаркет. Демонстрационный сайт, подготовленный по техническому заданию
            для ознакомления с функциональностью.
          </p>
        </div>
      </footer>
    </div>
  )
}
