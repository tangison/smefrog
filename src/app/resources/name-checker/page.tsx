'use client'

import { useState, useMemo } from 'react'
import { MessageCircle, ArrowRight, Search, AlertTriangle, XCircle, Info, CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Types ──────────────────────────────────────────── */
type BusinessType = 'cc' | 'pty'
type ResultType = 'error' | 'warning' | 'info' | 'success'

interface ValidationResult {
  type: ResultType
  message: string
}

/* ─── Restricted Words ───────────────────────────────── */
const RESTRICTED_WORDS = [
  'Bank', 'Insurance', 'Trust', 'Government', 'Namibia',
  'National', 'Municipal', 'University', 'College', 'Hospital',
]

/* ─── Validation Logic ───────────────────────────────── */
function validateName(name: string): ValidationResult | null {
  const trimmed = name.trim()
  if (trimmed.length === 0) return null

  // 1. Length check
  if (trimmed.length < 3) {
    return { type: 'error', message: 'Name too short.' }
  }

  // 2. Restricted words check
  const lowerName = trimmed.toLowerCase()
  for (const word of RESTRICTED_WORDS) {
    if (lowerName.includes(word.toLowerCase())) {
      return {
        type: 'warning',
        message: `Contains a restricted word ("${word}") requiring special authority approval.`,
      }
    }
  }

  // 3. Legal suffix check
  if (/\bCC$/i.test(trimmed) || /\(Pty\)\s*Ltd$/i.test(trimmed) || /\bPty\s+Ltd$/i.test(trimmed)) {
    return {
      type: 'info',
      message: 'BIPA adds the legal suffix — no need to include it.',
    }
  }

  // 4. All clear
  return {
    type: 'success',
    message: 'This name format looks good. SMEfrog can check availability and reserve it at BIPA as part of registration.',
  }
}

/* ─── Result Card ────────────────────────────────────── */
const RESULT_STYLES: Record<ResultType, { border: string; bg: string; icon: typeof AlertTriangle; iconColor: string }> = {
  error: {
    border: 'ring-red-500/30',
    bg: 'bg-red-500/10',
    icon: XCircle,
    iconColor: 'text-red-400',
  },
  warning: {
    border: 'ring-amber-500/30',
    bg: 'bg-amber-500/10',
    icon: AlertTriangle,
    iconColor: 'text-amber-400',
  },
  info: {
    border: 'ring-white/20',
    bg: 'bg-white/5',
    icon: Info,
    iconColor: 'text-white/70',
  },
  success: {
    border: 'ring-[#4CAF50]/30',
    bg: 'bg-[#4CAF50]/10',
    icon: CheckCircle2,
    iconColor: 'text-[#4CAF50]',
  },
}

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

/* ─── Page ───────────────────────────────────────────── */
export default function NameCheckerPage() {
  const [name, setName] = useState('')
  const [businessType, setBusinessType] = useState<BusinessType>('cc')

  const result = useMemo(() => validateName(name), [name])

  const waMessage = name.trim()
    ? `Hi%20SMEfrog%2C%20I%20want%20to%20check%20if%20the%20name%20${encodeURIComponent(name.trim())}%20is%20available.`
    : 'Hi%20SMEfrog%2C%20I%20want%20to%20check%20if%20a%20business%20name%20is%20available.'

  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4CAF50]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Checker</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Business Name{' '}
              <span className="text-[#4CAF50]">Checker</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Check if your desired business name meets BIPA requirements. Instant feedback as you type.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CHECKER — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <DoubleBezel>
            <div className="space-y-10">
              {/* Icon + Heading */}
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#4CAF50]/10 ring-1 ring-[#4CAF50]/20 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Check Your Name
                </h2>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-white text-sm font-semibold mb-3">
                  Desired Business Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Otjiwarongo Trading"
                  className="w-full rounded-full min-h-[48px] bg-white/5 ring-1 ring-white/10 px-6 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-[#4CAF50]/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
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

              {/* Result Card */}
              {result && (
                <div
                  className={`flex items-start gap-4 rounded-2xl p-5 ring-1 ${RESULT_STYLES[result.type].border} ${RESULT_STYLES[result.type].bg} transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                >
                  {(() => {
                    const Style = RESULT_STYLES[result.type]
                    const IconComp = Style.icon
                    return <IconComp className={`w-5 h-5 shrink-0 mt-0.5 ${Style.iconColor}`} strokeWidth={1.5} />
                  })()}
                  <p className="text-sm text-white/90 leading-relaxed">{result.message}</p>
                </div>
              )}
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
              Reserve Your Name
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#a0a0a0] text-base md:text-lg mb-10 max-w-lg mx-auto">
              We&apos;ll check real-time availability at BIPA and reserve your name as part of the registration process.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={`https://wa.me/264853411522?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 min-h-[48px] bg-[#4CAF50] text-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-[#4CAF50]/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] touch-action-manipulation"
              aria-label="Reserve this name on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Reserve This Name
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
