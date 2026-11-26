import { Link } from 'react-router'
import { ArrowRight, Phone } from 'lucide-react'
import { SERVICES, COMPANY } from '@/data/content'

export default function Services() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Каталог услуг</p>
          <h1 className="mt-1 text-5xl uppercase md:text-6xl">Услуги компании</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Материалы, доставка и строительно-ремонтные работы — всё в одном окне: один договор,
            один ответственный, одна смета.
          </p>
        </div>
      </section>

      <section className="blueprint-grid">
        <div className="mx-auto max-w-6xl space-y-5 px-4 py-14 md:px-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className={`grid gap-6 border border-border bg-card md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {s.image ? (
                <div className="aspect-[3/2] overflow-hidden md:aspect-auto md:min-h-64">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex min-h-48 items-center justify-center bg-foreground/5 md:min-h-64">
                  <span className="font-display text-7xl text-primary/25" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              )}
              <div className="flex flex-col justify-center gap-3 p-6 md:p-8">
                <h2 className="text-3xl uppercase md:text-4xl">{s.title}</h2>
                <p className="text-muted-foreground">{s.description}</p>
                <p className="font-display text-2xl text-primary">{s.price}</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    to="/#raschet"
                    className="inline-flex h-11 items-center gap-2 bg-primary px-5 font-display text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                  >
                    Запросить расчёт <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex h-11 items-center gap-2 border border-input px-5 font-display text-lg uppercase tracking-wider transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" aria-hidden /> {COMPANY.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:px-6">
          <h2 className="text-3xl uppercase md:text-4xl">Не нашли нужную услугу?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Позвоните — подскажем по материалам, подберём бригаду под нестандартную задачу или оформим
            поставку под заказ в срок от 3 дней.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex h-12 items-center gap-2 bg-primary px-6 font-display text-xl uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <Phone className="h-5 w-5" aria-hidden /> {COMPANY.phone}
            </a>
            <Link
              to="/kontakty"
              className="inline-flex h-12 items-center border border-input px-6 font-display text-xl uppercase tracking-wider transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Контакты
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
