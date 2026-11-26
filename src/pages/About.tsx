import { CheckCircle2 } from 'lucide-react'
import { DIGITS, ADVANTAGES } from '@/data/content'

const DOCS = [
  'Уставные документы и ОГРН',
  'Договор подряда с фиксированной сметой',
  'Гарантийные обязательства — 2 года',
  'Допуски и страховка бригад',
  'Счета и закрывающие документы для юрлиц',
]

export default function About() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">О компании</p>
          <h1 className="mt-1 break-words text-4xl uppercase sm:text-5xl md:text-6xl">УралСтройМаркет</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Работаем с 2010 года: начинали с одного склада цемента, а сегодня это 4 000 м² площадей,
            собственный автопарк и штатные бригады отделочников.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <h2 className="text-3xl uppercase text-foreground md:text-4xl">Из одного поддона — в региональный поставщик</h2>
            <p>
              Наша идея проста: клиенту не нужно пять подрядчиков. Мы привезём материалы по оптовой цене,
              поднимем на этаж, а если нужно — сделаем ремонт под ключ с гарантией по договору.
              Поэтому каждый четвёртый заказ — от постоянных клиентов и их рекомендаций.
            </p>
            <p>
              Склад и офис находятся в Екатеринбурге на улице Монтажников. Доставляем по всей
              Свердловской области — от Полевского до Нижней Туры, включая микрорайоны и СНТ.
            </p>
            <ul className="space-y-2 pt-2">
              {DOCS.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {d}
                </li>
              ))}
            </ul>
          </div>
          <figure className="border border-border bg-card p-3">
            <img
              src="images/about.jpg"
              alt="Команда УралСтройМаркет на складе строительных материалов"
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="pt-3 text-xs text-muted-foreground">
              Команда склада и отдела продаж. Слева направо: комплектация, логистика, менеджеры по работе с клиентами.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-border bg-card">
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

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="text-3xl uppercase md:text-4xl">Принципы работы</h2>
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
    </>
  )
}
