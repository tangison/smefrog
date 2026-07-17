'use client'

import { useState, useMemo } from 'react'
import { MessageCircle, ArrowRight, Check, BarChart3, AlertTriangle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Types ──────────────────────────────────────────── */
type BusinessType = 'cc' | 'pty'
type MemberRange = '1' | '2-5' | '6-10'

/* ─── Service Data ───────────────────────────────────── */
interface ServiceOption {
  key: string
  label: string
  getPrice: (bt: BusinessType) => number
}

const SERVICES: ServiceOption[] = [
  {
    key: 'annual-return',
    label: 'Annual Return Filing',
    getPrice: (bt) => (bt === 'cc' ? 450 : 600),
  },
  {
    key: 'bo-declaration',
    label: 'BO Declaration Update',
    getPrice: () => 300,
  },
  {
    key: 'company-secretary',
    label: 'Company Secretary per year',
    getPrice: () => 1200,
  },
  {
    key: 'governance-review',
    label: 'Governance Documentation Review',
    getPrice: () => 800,
  },
  {
    key: 'popia-review',
    label: 'POPIA Compliance Review',
    getPrice: () => 650,
  },
]

const MEMBER_RANGES: { value: MemberRange; label: string }[] = [
  { value: '1', label: '1' },
  { value: '2-5', label: '2–5' },
  { value: '6-10', label: '6–10' },
]

/* ─── Pill Selector ──────────────────────────────────── */
function PillSelector<T extends string>({
  options,
  value,
  onChange,
  getLabel,
}: {
  options: T[]
  value: T
  onChange: (v: T) => void
  getLabel: (v: T) => string
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`rounded-full min-h-[48px] px-6 py-2.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] touch-action-manipulation ${
            value === opt
              ? 'bg-[#4CAF50] text-black'
              : 'bg-white/5 text-white/50 ring-1 ring-white/10 hover:ring-white/20 hover:text-white/70'
          }`}
        >
          {getLabel(opt)}
        </button>
      ))}
    </div>
  )
}

/* ─── Custom Checkbox ────────────────────────────────── */
function CheckboxItem({
  label,
  price,
  checked,
  onChange,
}: {
  label: string
  price: number
  checked: boolean
  onChange: () => void
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full flex items-center gap-4 rounded-2xl p-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-left ${
        checked
          ? 'bg-[#4CAF50]/10 ring-1 ring-[#4CAF50]/30'
          : 'bg-white/5 ring-1 ring-white/10 hover:ring-white/20'
      }`}
    >
      <span
        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          checked
            ? 'bg-[#4CAF50] text-black'
            : 'bg-white/10 ring-1 ring-white/20'
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5" strokeWidth={2.5} />}
      </span>
      <span className="flex-1 text-sm text-white">{label}</span>
      <span className="text-sm font-semibold text-[#a0a0a0]">N${price.toLocaleString()}</span>
    </button>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export default function CostEstimatorPage() {
  const [businessType, setBusinessType] = useState<BusinessType>('cc')
  const [members, setMembers] = useState<MemberRange>('1')
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())

  const toggleService = (key: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const calculation = useMemo(() => {
    const lines: { label: string; amount: number }[] = []
    let subtotal = 0

    selectedServices.forEach((key) => {
      const service = SERVICES.find((s) => s.key === key)
      if (service) {
        const price = service.getPrice(businessType)
        lines.push({ label: service.label, amount: price })
        subtotal += price
      }
    })

    const surcharge = members === '6-10'
    const total = surcharge ? Math.round(subtotal * 1.2) : subtotal

    return { lines, subtotal, surcharge, total }
  }, [businessType, members, selectedServices])

  // Build the WhatsApp message dynamically
  const waMessage = useMemo(() => {
    if (calculation.lines.length === 0) {
      return `https://wa.me/264853411522?text=${encodeURIComponent("Hi SMEfrog, I'd like to discuss a compliance package.")}`
    }
    const lines = calculation.lines.map(l => `${l.label}: N$${l.amount.toLocaleString()}`).join(', ')
    const total = `Estimated annual cost: N$${calculation.total.toLocaleString()}`
    const msg = `Hi SMEfrog, I used the compliance cost estimator. ${lines}. ${total}. I'd like to discuss a compliance package.`
    return `https://wa.me/264853411522?text=${encodeURIComponent(msg)}`
  }, [calculation])

  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4CAF50]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Estimator</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Compliance Cost{' '}
              <span className="text-[#4CAF50]">Estimator</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Estimate your annual compliance costs. Select your services and see the total in real time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ESTIMATOR — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <DoubleBezel>
            <div className="space-y-10">
              {/* Icon + Heading */}
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#4CAF50]/10 ring-1 ring-[#4CAF50]/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Estimate Annual Costs
                </h2>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Business Type
                </label>
                <PillSelector
                  options={['cc', 'pty']}
                  value={businessType}
                  onChange={setBusinessType}
                  getLabel={(v) => (v === 'cc' ? 'CC' : 'Pty Ltd')}
                />
              </div>

              {/* Members / Directors */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Members / Directors
                </label>
                <PillSelector
                  options={['1', '2-5', '6-10']}
                  value={members}
                  onChange={setMembers}
                  getLabel={(v) => {
                    const found = MEMBER_RANGES.find((m) => m.value === v)
                    return found ? found.label : v
                  }}
                />
                {members === '6-10' && (
                  <p className="text-[#4CAF50] text-xs mt-2">
                    6–10 members/directors adds a 20% surcharge to the total.
                  </p>
                )}
              </div>

              {/* Services */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Compliance Services
                </label>
                <div className="space-y-2">
                  {SERVICES.map((service) => (
                    <CheckboxItem
                      key={service.key}
                      label={service.label}
                      price={service.getPrice(businessType)}
                      checked={selectedServices.has(service.key)}
                      onChange={() => toggleService(service.key)}
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Itemised Breakdown */}
              {calculation.lines.length > 0 ? (
                <div className="space-y-3">
                  {calculation.lines.map((line, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[#a0a0a0] text-sm">{line.label}</span>
                      <span className="text-white text-sm font-medium">N${line.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  {calculation.surcharge && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#a0a0a0] text-sm">20% surcharge (6–10 members)</span>
                      <span className="text-white text-sm font-medium">N${(calculation.total - calculation.subtotal).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-[#a0a0a0] text-sm text-center">Select services above to see your estimated costs.</p>
              )}

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Total */}
              <div className="text-center">
                <p
                  className="text-4xl md:text-5xl font-bold text-[#4CAF50]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Estimated Annual Compliance Cost: N${calculation.total.toLocaleString()}
                </p>
              </div>

              {/* Warning Note */}
              <div className="flex items-start gap-3 bg-amber-500/10 ring-1 ring-amber-500/20 rounded-2xl p-4">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  Avoiding compliance costs N$200/month in BIPA penalties for late returns.
                </p>
              </div>
            </div>
          </DoubleBezel>
        </div>
      </section>

      {/* ═══ CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#4CAF50]/10 to-[#0a0a0a] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4CAF50]/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-[#4CAF50]/10 ring-1 ring-[#4CAF50]/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-[#4CAF50]" strokeWidth={1.5} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Discuss a Compliance Package
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#a0a0a0] text-base md:text-lg mb-10 max-w-lg mx-auto">
              Let us build a tailored compliance plan for your business. No surprises, no penalties.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 min-h-[48px] bg-[#4CAF50] text-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-[#4CAF50]/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] touch-action-manipulation"
              aria-label="Discuss a compliance package on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Discuss a Compliance Package
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
