'use client'

import { useState, useMemo } from 'react'
import { MessageCircle, ArrowRight, Check, Calculator } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Types ──────────────────────────────────────────── */
type BusinessType = 'cc' | 'pty' | 'sole'
type ServiceTier = 'registration' | 'registration-bo' | 'registration-compliance' | 'full'

/* ─── Pricing Data ───────────────────────────────────── */
const BASE_PRICES: Record<BusinessType, number> = {
  cc: 800,
  pty: 1200,
  sole: 600,
}

const TIER_ADDONS: Record<ServiceTier, number> = {
  registration: 0,
  'registration-bo': 300,
  'registration-compliance': 500,
  full: 0, // overridden
}

const FULL_PACKAGE_PRICES: Record<BusinessType, number> = {
  cc: 2200,
  pty: 2800,
  sole: 1700,
}

const ADDON_PRICES: Record<string, number> = {
  seal: 250,
  copies: 150,
  express: 500,
}

const BUSINESS_TYPE_OPTIONS: { value: BusinessType; label: string; price: number }[] = [
  { value: 'cc', label: 'CC', price: 800 },
  { value: 'pty', label: 'Pty Ltd', price: 1200 },
  { value: 'sole', label: 'Sole Trader', price: 600 },
]

const TIER_OPTIONS: { value: ServiceTier; label: string }[] = [
  { value: 'registration', label: 'Registration Only' },
  { value: 'registration-bo', label: 'Registration + BO' },
  { value: 'registration-compliance', label: 'Registration + Compliance' },
  { value: 'full', label: 'Full Package' },
]

const ADDON_OPTIONS: { key: string; label: string; price: number }[] = [
  { key: 'seal', label: 'Company Seal', price: 250 },
  { key: 'copies', label: 'Certified Copies', price: 150 },
  { key: 'express', label: 'Express Processing', price: 500 },
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
      <span className="text-sm font-semibold text-[#a0a0a0]">+N${price.toLocaleString()}</span>
    </button>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export default function PricingCalculatorPage() {
  const [businessType, setBusinessType] = useState<BusinessType>('cc')
  const [tier, setTier] = useState<ServiceTier>('registration')
  const [addons, setAddons] = useState<Set<string>>(new Set())

  const toggleAddon = (key: string) => {
    setAddons((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const calculation = useMemo(() => {
    const lines: { label: string; amount: number }[] = []
    let total = 0

    if (tier === 'full') {
      // Full package override
      const fullPrice = FULL_PACKAGE_PRICES[businessType]
      const basePrice = BASE_PRICES[businessType]
      const tierLabel = TIER_OPTIONS.find((t) => t.value === 'full')!.label
      lines.push({ label: `${BUSINESS_TYPE_OPTIONS.find((b) => b.value === businessType)!.label} Registration`, amount: basePrice })
      lines.push({ label: `${tierLabel} Bundle Discount`, amount: fullPrice - basePrice })
      total = fullPrice
    } else {
      const base = BASE_PRICES[businessType]
      lines.push({ label: `${BUSINESS_TYPE_OPTIONS.find((b) => b.value === businessType)!.label} Registration`, amount: base })
      total = base

      const tierAddon = TIER_ADDONS[tier]
      if (tierAddon > 0) {
        const tierLabel = TIER_OPTIONS.find((t) => t.value === tier)!.label
        lines.push({ label: tierLabel, amount: tierAddon })
        total += tierAddon
      }
    }

    addons.forEach((key) => {
      const addon = ADDON_OPTIONS.find((a) => a.key === key)
      if (addon) {
        lines.push({ label: addon.label, amount: addon.price })
        total += addon.price
      }
    })

    return { lines, total }
  }, [businessType, tier, addons])

  // Build the WhatsApp message dynamically
  const waMessage = useMemo(() => {
    const lines = calculation.lines.map(l => `${l.label}: N$${l.amount.toLocaleString()}`).join(', ')
    const total = `Total estimate: N$${calculation.total.toLocaleString()}`
    const msg = `Hi SMEfrog, I used the pricing calculator. ${lines}. ${total}. I'd like an exact quote.`
    return `https://wa.me/264853411522?text=${encodeURIComponent(msg)}`
  }, [calculation])

  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4CAF50]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Calculator</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pricing{' '}
              <span className="text-[#4CAF50]">Calculator</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Get an instant estimate for your business registration. Select your options and watch the total update in real time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CALCULATOR — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <DoubleBezel>
            <div className="space-y-10">
              {/* Icon + Heading */}
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#4CAF50]/10 ring-1 ring-[#4CAF50]/20 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Calculate Your Cost
                </h2>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Business Type
                </label>
                <PillSelector
                  options={['cc', 'pty', 'sole']}
                  value={businessType}
                  onChange={setBusinessType}
                  getLabel={(v) => {
                    const found = BUSINESS_TYPE_OPTIONS.find((b) => b.value === v)
                    return found ? `${found.label} (N$${found.price.toLocaleString()})` : v
                  }}
                />
              </div>

              {/* Service Tier */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Service Tier
                </label>
                <PillSelector
                  options={['registration', 'registration-bo', 'registration-compliance', 'full']}
                  value={tier}
                  onChange={setTier}
                  getLabel={(v) => TIER_OPTIONS.find((t) => t.value === v)?.label ?? v}
                />
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Add-ons
                </label>
                <div className="space-y-2">
                  {ADDON_OPTIONS.map((addon) => (
                    <CheckboxItem
                      key={addon.key}
                      label={addon.label}
                      price={addon.price}
                      checked={addons.has(addon.key)}
                      onChange={() => toggleAddon(addon.key)}
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Itemised Breakdown */}
              <div className="space-y-3">
                {calculation.lines.map((line, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[#a0a0a0] text-sm">{line.label}</span>
                    <span className="text-white text-sm font-medium">N${line.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Total */}
              <div className="text-center">
                <p
                  className="text-4xl md:text-5xl font-bold text-[#4CAF50]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Estimated Total: N${calculation.total.toLocaleString()}
                </p>
              </div>

              {/* Note */}
              <p className="text-[#a0a0a0] text-xs text-center leading-relaxed">
                Final pricing confirmed via WhatsApp. Excludes BIPA government fees.
              </p>
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
              Want an Exact Quote?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#a0a0a0] text-base md:text-lg mb-10 max-w-lg mx-auto">
              WhatsApp us with your selections and we&apos;ll confirm pricing for your specific situation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 min-h-[48px] bg-[#4CAF50] text-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-[#4CAF50]/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] touch-action-manipulation"
              aria-label="Get an exact quote on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Get an Exact Quote
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
