import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2 } from 'lucide-react'

interface LeadFormProps {
  variant?: 'callback' | 'calc'
  compact?: boolean
}

export default function LeadForm({ variant = 'callback', compact = false }: LeadFormProps) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const phone = String(fd.get('phone') ?? '').replace(/[\s\-\(\)]/g, '')
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Укажите телефон полностью — не менее 10 цифр.')
      return
    }
    setError('')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3 border border-primary/40 bg-card p-6" role="status">
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden />
        <h3 className="text-2xl uppercase">Заявка принята</h3>
        <p className="text-muted-foreground">
          Спасибо! Менеджер перезвонит вам в течение 15 минут в рабочее время
          (Пн–Пт 08:00–19:00, Сб 09:00–16:00).
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Отправить ещё одну
        </Button>
      </div>
    )
  }

  const isCalc = variant === 'calc'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {isCalc && !compact && (
        <p className="text-sm text-muted-foreground">
          Укажите интересующие товары, объём и место доставки — пришлём точный расчёт с учётом
          доставки в течение рабочего дня.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`lf-name-${variant}-${compact}`}>Ваше имя</Label>
          <Input id={`lf-name-${variant}-${compact}`} name="name" placeholder="Иван" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`lf-phone-${variant}-${compact}`}>
            Телефон <span className="text-primary">*</span>
          </Label>
          <Input
            id={`lf-phone-${variant}-${compact}`}
            name="phone"
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
          />
        </div>
      </div>
      {isCalc && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`lf-goods-${variant}-${compact}`}>Товары и объём</Label>
            <Input
              id={`lf-goods-${variant}-${compact}`}
              name="goods"
              placeholder="Например: цемент 30 мешков, песок 5 м³"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`lf-addr-${variant}-${compact}`}>Место доставки</Label>
            <Input id={`lf-addr-${variant}-${compact}`} name="address" placeholder="Район, улица, город" />
          </div>
        </div>
      )}
      {!compact && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`lf-msg-${variant}-${compact}`}>Комментарий</Label>
          <Textarea
            id={`lf-msg-${variant}-${compact}`}
            name="message"
            rows={3}
            placeholder={isCalc ? 'Пожелания по срокам, маркам, брендам…' : 'Удобное время звонка, вопрос…'}
          />
        </div>
      )}
      {error && (
        <p className="text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {isCalc ? 'Запросить расчёт стоимости' : 'Заказать обратный звонок'}
        </Button>
        <p className="text-xs text-muted-foreground">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
        </p>
      </div>
    </form>
  )
}
