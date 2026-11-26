import { Link } from 'react-router'
import { ArrowRight, CheckCircle2, Truck, FileText, Ruler, ShieldCheck } from 'lucide-react'
import { COMPANY, SERVICES, DIGITS, ADVANTAGES, STEPS, REVIEWS, PRICE_ITEMS } from '@/data/content'
import LeadForm from '@/components/LeadForm'

const SERVICE_ICONS = [Ruler, ShieldCheck, FileText, Truck, ShieldCheck, Ruler]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Склад строительных материалов УралСтройМаркет: стеллажи с кирпичом, цементом и гипсокартоном"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 md:px-6 md:py-28">
          <img
            src="/images/cat-foreman.png"
            alt="Кот в строительной каске — талисман УралСтройМаркет"
            className="pointer-events-none absolute bottom-0 right-2 hidden w-52 select-none drop-shadow-2xl md:block lg:right-6 lg:w-72"
          />
          <p className="inline-flex w-fit items-center gap-2 border border-background/30 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-background/90">
            <span className="h-2 w-2 bg-primary" aria-hidden />
            Екатеринбург · Свердловская область
          </p>
          <h1 className="max-w-3xl text-balance text-5xl uppercase leading-[0.95] text-background md:text-7xl">
            Стройматериалы и ремонт под ключ
          </h1>
          <p className="max-w-xl text-lg text-background/85">
            Продажа стройматериалов с доставкой за 24 часа и ремонт помещений по договору.
            Бесплатный замер и смета за один день.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#raschet"
              className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 font-display text-xl uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              Запросить расчёт <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <Link
              to="/price"
              className="inline-flex h-12 items-center justify-center border border-background/40 px-6 font-display text-xl uppercase tracking-wider text-background transition-colors hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              Прайс-лист
            </Link>
          </div>
          <a href={COMPANY.phoneHref} className="text-background underline decoration-primary decoration-2 underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background w-fit">
            {COMPANY.phone}
          </a>
        </div>
      </section>

      {/* Digits */}
      <section className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {DIGITS.map((d, i) => (
            <div
              key={d.label}
              className={`flex flex-col gap-1 px-4 py-6 md:px-6 ${i > 0 ? 'border-l border-border' : ''} ${i >= 2 ? 'border-t border-border md:border-t-0' : ''} ${i === 2 ? 'border-l-0 md:border-l' : ''}`}
            >
              <dd className="font-display text-4xl text-primary md:text-5xl">{d.value}</dd>
              <dt className="text-sm text-muted-foreground">{d.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="blueprint-grid">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Направления</p>
              <h2 className="mt-1 text-4xl uppercase md:text-5xl">Материалы и услуги</h2>
            </div>
            <Link
              to="/uslugi"
              className="inline-flex items-center gap-2 font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Все услуги <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <article key={s.slug} className="group flex flex-col border border-border bg-card transition-colors hover:border-primary/50">
                  {s.image ? (
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[3/2] items-center justify-center bg-foreground/5">
                      <Icon className="h-12 w-12 text-primary" aria-hidden />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="text-2xl uppercase leading-tight">{s.title}</h3>
                    <p className="flex-1 text-sm text-muted-foreground">{s.description}</p>
                    <p className="font-display text-xl text-primary">{s.price}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Price teaser */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Прайс-лист</p>
              <h2 className="mt-1 text-4xl uppercase md:text-5xl">Популярные позиции</h2>
              <p className="mt-4 text-background/75">
                Честные розничные цены со склада в Екатеринбурге. Для юридических лиц — индивидуальные
                условия и отсрочка. Полный прайс — более 4 000 позиций.
              </p>
              <Link
                to="/price"
                className="mt-6 inline-flex h-12 items-center gap-2 bg-primary px-6 font-display text-xl uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                Весь прайс-лист <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
            <div className="overflow-hidden border border-background/20">
              <table className="w-full text-sm">
                <caption className="sr-only">Популярные позиции прайс-листа</caption>
                <thead>
                  <tr className="bg-background/10 text-left text-xs uppercase tracking-wider text-background/70">
                    <th className="px-4 py-3 font-medium">Позиция</th>
                    <th className="px-4 py-3 text-right font-medium">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ITEMS.slice(0, 6).map((item) => (
                    <tr key={item.name} className="border-t border-background/15">
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-primary">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Почему мы</p>
        <h2 className="mt-1 text-4xl uppercase md:text-5xl">Работаем как для себя</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="flex gap-4 border border-border bg-card p-6">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="text-2xl uppercase">{a.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Как мы работаем</p>
          <h2 className="mt-1 text-4xl uppercase md:text-5xl">От заявки до сдачи</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-5">
            {STEPS.map((s) => (
              <li key={s.num} className="flex flex-col gap-2 border-t-2 border-primary pt-4">
                <span className="font-display text-4xl text-primary">{s.num}</span>
                <h3 className="text-xl uppercase">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Отзывы</p>
        <h2 className="mt-1 text-4xl uppercase md:text-5xl">Нам доверяют соседи</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col gap-3 border border-border bg-card p-6">
              <blockquote className="flex-1 text-sm leading-relaxed">«{r.text}»</blockquote>
              <figcaption>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="raschet" className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Заявка</p>
            <h2 className="mt-1 text-4xl uppercase md:text-5xl">Запросить расчёт стоимости</h2>
            <p className="mt-4 text-muted-foreground">
              Опишите задачу: что нужно купить или сделать, в каких объёмах и куда привезти. Менеджер
              рассчитает стоимость с учётом доставки и перезвонит в течение рабочего дня.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> Перезвоним за 15 минут в рабочее время
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> Смета — в день обращения
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> Бесплатный выезд замерщика
              </li>
            </ul>
          </div>
          <LeadForm variant="calc" />
        </div>
      </section>

      {/* SEO text */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-2xl uppercase text-foreground">Стройматериалы с доставкой в Екатеринбурге</h2>
          <p>
            «УралСтройМаркет» — поставщик строительных материалов и подрядчик по отделочным работам
            в Екатеринбурге и Свердловской области. На собственном складе в районе улицы Монтажников
            всегда в наличии цемент, бетон, кирпич, газобетон, гипсокартон, утеплитель, арматура и
            отделочные материалы — более 4 000 позиций.
          </p>
          <p>
            Отгружаем от одного мешка и от одного поддона по оптовым ценам. Доставляем манипуляторами
            и бортовыми автомобилями по Екатеринбургу, а также в Берёзовский, Верхнюю Пышму, Среднеуральск,
            Полевской и другие города области. Выполняем ремонт квартир, офисов и коммерческих помещений
            под ключ: от демонтажа до финишной отделки, с договором и гарантией 2 года.
          </p>
        </div>
      </section>
    </>
  )
}
