import { Truck, Clock, Info } from 'lucide-react'
import { PRICE_ITEMS, PRICE_CATEGORIES } from '@/data/content'
import LeadForm from '@/components/LeadForm'

export default function Price() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Цены со склада</p>
          <h1 className="mt-1 text-5xl uppercase md:text-6xl">Прайс-лист</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Популярные позиции в розничных ценах. Актуально на текущий месяц — точную стоимость
            подтвердит менеджер при оформлении. Оптовым клиентам — скидки от объёма.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="space-y-10">
          {PRICE_CATEGORIES.map((cat) => (
            <div key={cat}>
              <h2 className="border-l-4 border-primary pl-3 text-2xl uppercase md:text-3xl">{cat}</h2>
              <div className="mt-4 overflow-x-auto border border-border">
                <table className="w-full min-w-[560px] text-sm">
                  <caption className="sr-only">{cat} — цены</caption>
                  <thead>
                    <tr className="bg-muted text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-4 py-3 font-medium">Наименование</th>
                      <th className="px-4 py-3 font-medium">Ед.</th>
                      <th className="px-4 py-3 text-right font-medium">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    {PRICE_ITEMS.filter((i) => i.category === cat).map((item) => (
                      <tr key={item.name} className="border-t border-border">
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{item.unit}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-start gap-2 border border-border bg-card p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          Цены указаны за наличный расчёт при самовывозе со склада (ул. Монтажников, 32). Доставка и
          разгрузка рассчитываются отдельно по адресу. Для юридических лиц работаем по счету с НДС.
        </p>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Индивидуальный расчёт</p>
            <h2 className="mt-1 text-4xl uppercase md:text-5xl">Узнать точную стоимость</h2>
            <p className="mt-4 text-background/75">
              Укажите интересующие товары, объём и место доставки — пришлём расчёт с учётом доставки
              и скидки от объёма в течение рабочего дня.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" aria-hidden /> Доставка по городу — от 1 500 ₽, по области — от 35 ₽/км
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden /> Отгрузка в день оплаты, доставка — за 24 часа
              </li>
            </ul>
          </div>
          <div className="bg-card p-6 text-card-foreground">
            <LeadForm variant="calc" compact />
          </div>
        </div>
      </section>
    </>
  )
}
