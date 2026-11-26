import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/data/content'
import LeadForm from '@/components/LeadForm'

export default function Contacts() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Контакты</p>
          <h1 className="mt-1 text-5xl uppercase md:text-6xl">Свяжитесь с нами</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Звоните, пишите в мессенджеры или оставьте номер — перезвоним сами в течение 15 минут
            в рабочее время.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl uppercase">Телефоны</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 font-display text-3xl text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Phone className="h-6 w-6" aria-hidden /> {COMPANY.phone}
                </a>
                <p className="ml-8 text-xs text-muted-foreground">отдел продаж и ремонта</p>
              </li>
              <li>
                <a
                  href={COMPANY.phone2Href}
                  className="flex items-center gap-2 text-lg font-semibold hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden /> {COMPANY.phone2}
                </a>
                <p className="ml-6 text-xs text-muted-foreground">руководитель проектов</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl uppercase">Мессенджеры</h2>
            <div className="mt-3 flex gap-3">
              <a
                href={COMPANY.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-input px-4 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Send className="h-4 w-4 text-primary" aria-hidden /> Telegram
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-input px-4 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl uppercase">Адрес и режим работы</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {COMPANY.address}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {COMPANY.hours}
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <Mail className="h-4 w-4 text-primary" aria-hidden /> {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-border bg-card p-5 text-sm text-muted-foreground">
            <p className="font-display text-xl uppercase text-foreground">Реквизиты</p>
            <p className="mt-2">
              ООО «УралСтройМаркет» · ИНН 6670001234 · КПП 667001001 · ОГРН 1126670001234 ·
              Р/с 40702810123450000000 в ПАО «Уралбанк», БИК 046577795
            </p>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl uppercase">Обратный звонок</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Оставьте имя и телефон — менеджер перезвонит и ответит на вопросы.
          </p>
          <div className="mt-6">
            <LeadForm variant="callback" />
          </div>
        </div>
      </section>
    </>
  )
}
