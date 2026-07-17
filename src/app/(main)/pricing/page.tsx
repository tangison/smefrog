'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ArrowRight,
  MessageCircle,
  Crown,
  Minus,
  ChevronDown,
  Phone,
  Shield,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink, pricingCards, PHONE_MAIN, PHONE_MAIN_TEL } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const pkgDescriptions: Record<string, string> = {
  BASIC: 'Essential registration to get started legally.',
  ADVANCED: 'Registration + professional presence for a proper launch.',
  FULL: 'Everything you need to start and stay compliant.',
  'PTY LTD PACKAGE': 'Premium PTY LTD registration with dedicated account management and 1 year of compliance handled for you.',
}

const complianceTiers = [
  {
    name: 'ESSENTIAL',
    price: '500',
    period: '/year',
    description: 'Keep your company active and penalty-free.',
    features: ['Annual Return Filing', 'BO Update', 'Compliance Status Check'],
    featured: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '1,200',
    period: '/year',
    description: 'Annual returns, BO updates, governance docs, and regulatory filings.',
    features: ['Essential + Governance Documentation', 'Regulatory Filing', 'Amendment Filings'],
    featured: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    description: 'Full compliance management for growing businesses.',
    features: ['Professional + Company Secretarial Services', 'Dedicated Compliance Officer', 'WhatsApp response within 4 business hours'],
    featured: false,
  },
]

const comparisonFeatures = [
  { feature: 'Name Reservation', basic: true, advanced: true, full: true },
  { feature: 'BIPA Filing', basic: true, advanced: true, full: true },
  { feature: 'Tax Certificate', basic: true, advanced: true, full: true },
  { feature: 'Company Profile', basic: false, advanced: true, full: true },
  { feature: 'Domain Registration', basic: false, advanced: true, full: true },
  { feature: 'BO Filing', basic: false, advanced: true, full: true },
  { feature: 'Annual Return Filing', basic: false, advanced: false, full: true },
  { feature: 'Compliance Check', basic: false, advanced: false, full: true },
  { feature: 'Governance Template', basic: false, advanced: false, full: true },
]

const faqItems = [
  {
    question: "What's in the Basic package?",
    answer:
      'Name reservation, BIPA filing, and your tax certificate. The minimum to operate legally.',
  },
  {
    question: 'Why choose Advanced?',
    answer:
      'Adds Company Profile (needed for bank accounts and tenders), domain registration, and BO filing, now a compliance requirement. The sweet spot for most founders.',
  },
  {
    question: 'What does Full add?',
    answer:
      'Annual Return Filing, Compliance Check, and Governance Template. Keeps your company compliant from day one.',
  },
  {
    question: 'Any hidden fees?',
    answer:
      'No. The price you see is what you pay. No admin markups, no surcharges. Government fees included.',
  },
  {
    question: 'How does payment work?',
    answer:
      'WhatsApp or EFT before we start. We confirm and begin immediately.',
  },
  {
    question: 'How long does registration take?',
    answer:
      '7 to 10 working days for CC. Pty Ltd takes slightly longer due to extra documentation.',
  },
  {
    question: 'Can I upgrade later?',
    answer:
      'Yes. Pay the difference. Message us on WhatsApp.',
  },
  {
    question: 'What happens if I don\'t file annual returns?',
    answer:
      'BIPA may impose penalties or deregister your company. We prevent that.',
  },
  {
    question: 'How often do I need to update my BO declaration?',
    answer:
      'Whenever there\'s a change in ownership structure, or at minimum annually.',
  },
  {
    question: 'Do you handle compliance for PTY LTD companies too?',
    answer:
      'Yes. We handle compliance for CCs, PTY LTDs, and other Namibian entities.',
  },
]

/* ─── FAQ Item ───────────────────────────────────────── */
function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group min-h-[44px]"
        aria-label={open ? `Close: ${question}` : `Open: ${question}`}
      >
        <span className="text-white font-bold text-sm md:text-base pr-4 group-hover:text-frog-green transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-frog-green transition-colors duration-500" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="text-frog-muted text-sm leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function PricingPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  const arrowEasing = 'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — DARK, cinematic with background image
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/desk-planning.jpeg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-frog-black/60 via-frog-black/80 to-frog-black" />

        {/* Ambient orbs */}

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
              Pricing
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
            >
              Transparent
              <br />
              <span className="italic text-frog-green">Pricing.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              No hidden fees. No surprises. What you see is what you pay.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#cc-packages"
                className={`inline-flex items-center gap-2 min-h-[44px] bg-white/[0.04] hover:bg-frog-green/10 text-white/60 hover:text-frog-green rounded-full px-5 py-2.5 text-sm font-bold ring-1 ring-white/[0.06] hover:ring-frog-green/20 ${easing}`}
                aria-label="View CC Registration packages"
              >
                CC Registration
                <span className="text-frog-green font-bold">from N$1,000</span>
              </a>
              <a
                href="#compliance"
                className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/50 rounded-full px-5 py-2.5 text-sm font-bold bg-white/[0.02] hover:bg-white/[0.05] hover:text-white ${easing}`}
                aria-label="View Compliance Services"
              >
                Compliance
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CC REGISTRATION PACKAGES — DARK with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section id="cc-packages" className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              CC Registration
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Choose your package.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-xl mb-12 md:mb-16 leading-relaxed">
              Every package is professionally handled. Pick your level.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {pricingCards.filter(c => c.tier !== 'PTY LTD PACKAGE').map((card, i) => {
              const priceNum = card.price.replace('N$', '')
              const isFeatured = 'featured' in card && card.featured
              return (
                <ScrollReveal key={card.tier} delay={i * 0.06}>
                  <DoubleBezel highlight={isFeatured} className="h-full">
                    <div className="flex flex-col h-full">
                      {/* Tier + Badge */}
                      <div className="flex items-center gap-2 mb-5">
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20">
                          {card.tier}
                        </span>
                        {isFeatured && (
                          <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] font-bold bg-frog-green text-black flex items-center gap-1">
                            <Crown className="w-3 h-3" strokeWidth={1.5} />
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-base text-frog-muted font-bold">
                          N$
                        </span>
                        <span className="text-5xl md:text-6xl font-bold text-white leading-none">
                          {priceNum}
                        </span>
                      </div>
                      <p className="text-frog-muted text-sm leading-relaxed mb-6">
                        {pkgDescriptions[card.tier] || card.sub}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-frog-hairline mb-6" />

                      {/* Features */}
                      <ul className="space-y-3 flex-1 mb-8">
                        {card.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                            </span>
                            <span className="text-frog-muted text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      {isFeatured ? (
                        <a
                          href={waLink('pricing')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-7 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                          aria-label={`Choose ${card.tier} package`}
                        >
                          {card.btn}
                          <span
                            className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                          >
                            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </span>
                        </a>
                      ) : (
                        <a
                          href={waLink('pricing')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group inline-flex items-center justify-center gap-2 min-h-[44px] ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-4 text-sm font-bold bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] ${easing}`}
                          aria-label={`Choose ${card.tier} package`}
                        >
                          {card.btn}
                          <span
                            className={`w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                          >
                            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </span>
                        </a>
                      )}
                    </div>
                  </DoubleBezel>
                </ScrollReveal>
              )
            })}
          </div>

          {/* ─── PTY LTD PREMIUM PACKAGE — Full-width banner card ─── */}
          {(() => {
            const ptyPkg = pricingCards.find(c => c.tier === 'PTY LTD PACKAGE')
            if (!ptyPkg) return null
            const priceNum = ptyPkg.price.replace('N$', '')
            const cta = ('cta' in ptyPkg && ptyPkg.cta) ? ptyPkg.cta : waLink('pricing')
            return (
              <ScrollReveal delay={0.18}>
                <div className="mt-6 md:mt-8 rounded-[2rem] overflow-hidden border border-frog-green/30 bg-gradient-to-br from-frog-green/[0.08] via-frog-card to-frog-card relative">
                  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-frog-green/[0.03] blur-[180px] rounded-full pointer-events-none" />
                  {/* Premium glow */}

                  <div className="relative z-10 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    {/* Left: title block */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-frog-green text-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          PREMIUM
                        </span>
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-white/5 text-white/60 border border-white/10">
                          PTY LTD
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                        PTY LTD Package
                      </h3>
                      <p className="text-frog-muted text-sm md:text-base leading-relaxed mb-6">
                        {pkgDescriptions['PTY LTD PACKAGE']}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base text-frog-muted font-bold">N$</span>
                        <span className="text-5xl md:text-6xl font-bold text-frog-green leading-none">{priceNum}</span>
                        <span className="text-white/30 text-xs font-bold uppercase tracking-wider ml-2">one-time</span>
                      </div>
                    </div>

                    {/* Middle: features */}
                    <div className="lg:col-span-5">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ptyPkg.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-frog-green" strokeWidth={2.5} />
                            </span>
                            <span className="text-white/80 text-sm font-medium leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA */}
                    <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:items-stretch">
                      <a
                        href={cta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-6 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.25)] ${easing} w-full`}
                        aria-label="Choose PTY LTD Package"
                      >
                        {ptyPkg.btn}
                        <span className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 ${arrowEasing}`}>
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                      <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider text-center lg:text-center">
                        Priority 3-Day Processing
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })()}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMPLIANCE SERVICES — DARK with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section id="compliance" className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-dark relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-frog-green/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              <Shield className="w-3 h-3" strokeWidth={2} />
              Compliance
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Compliance Services
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-xl mb-12 md:mb-16 leading-relaxed">
              Ongoing compliance keeps your business operational and penalty-free.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {complianceTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.06}>
                <DoubleBezel highlight={tier.featured} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Tier + Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20">
                        {tier.name}
                      </span>
                      {tier.featured && (
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] font-bold bg-frog-green text-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-2">
                      {tier.price === 'Custom' ? (
                        <span className="text-4xl md:text-5xl font-bold text-white leading-none">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="text-base text-frog-muted font-bold">
                            N$
                          </span>
                          <span className="text-5xl md:text-6xl font-bold text-white leading-none">
                            {tier.price}
                          </span>
                          <span className="text-base text-frog-muted font-bold">
                            {tier.period}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-frog-muted text-sm leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-frog-hairline mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {tier.featured ? (
                      <a
                        href={waLink('pricing')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-7 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                        aria-label={`Choose ${tier.name} compliance plan`}
                      >
                        Get {tier.name}
                        <span
                          className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    ) : (
                      <a
                        href={waLink('pricing')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 min-h-[44px] ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-4 text-sm font-bold bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] ${easing}`}
                        aria-label={`Choose ${tier.name} compliance plan`}
                      >
                        Get {tier.name}
                        <span
                          className={`w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    )}
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMPARISON TABLE — LIGHT editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Compare
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
            >
              Feature Comparison
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-black/60 text-base max-w-xl mb-12 leading-relaxed">
              What&apos;s included at a glance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-black/[0.06] overflow-hidden bg-white">
              <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-frog-green/10 rounded-full blur-[100px] pointer-events-none" />
              {/* Header row */}
              <div className="grid grid-cols-4 bg-frog-light border-b border-black/[0.06]">
                <div className="p-4 md:p-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
                    Feature
                  </span>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-black/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black/60">
                    Basic
                  </span>
                  <div className="text-black font-bold mt-0.5">
                    N$1,000
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-black/[0.06] bg-frog-green/[0.03]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-frog-green">
                      Advanced
                    </span>
                    <Crown className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <div className="text-black font-bold mt-0.5">
                    N$1,500
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-black/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black/60">
                    Full
                  </span>
                  <div className="text-black font-bold mt-0.5">
                    N$2,200
                  </div>
                </div>
              </div>

              {/* Feature rows */}
              {comparisonFeatures.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 ${
                    i < comparisonFeatures.length - 1 ? 'border-b border-black/[0.04]' : ''
                  } hover:bg-frog-light transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}
                >
                  <div className="p-4 md:p-5">
                    <span className="text-sm text-black/80 font-medium">{row.feature}</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.04]">
                    {row.basic ? (
                      <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-black/20" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.04] bg-frog-green/[0.015]">
                    {row.advanced ? (
                      <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-black/20" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.04]">
                    {row.full ? (
                      <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-black/20" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-4 border-t border-black/[0.06] bg-frog-light">
                <div className="p-4 md:p-5" />
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.06]">
                  <a
                    href={waLink('pricing')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold text-black/60 hover:text-frog-green min-h-[44px] inline-flex items-center ${easing}`}
                    aria-label="Choose Basic package"
                  >
                    Get Basic &rarr;
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.06]">
                  <a
                    href={waLink('pricing')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-1.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-5 py-2.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] ${easing}`}
                    aria-label="Choose Advanced package"
                  >
                    Get Advanced
                    <ArrowRight
                      className={`w-3.5 h-3.5 group-hover:translate-x-0.5 ${arrowEasing}`}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-black/[0.06]">
                  <a
                    href={waLink('pricing')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold text-black/60 hover:text-frog-green min-h-[44px] inline-flex items-center ${easing}`}
                    aria-label="Choose Full package"
                  >
                    Get Full &rarr;
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — DARK with accordion
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-frog-green/[0.03] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Common questions{' '}
              <span className="italic text-frog-green">answered.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base mb-10 leading-relaxed">
              Pricing, packages, and compliance FAQs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-frog-shell ring-1 ring-frog-hairline rounded-2xl p-6 md:p-8">
              {faqItems.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHATSAPP CTA CARD — LIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white ring-1 ring-black/[0.06] rounded-2xl p-8 md:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-frog-green/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to{' '}
                <span className="italic text-frog-green">start?</span>
              </h2>
              <p className="text-black/60 text-base mb-8 max-w-md mx-auto leading-relaxed">
                Message us on WhatsApp. We&apos;ll reply within the hour and get your registration or compliance sorted.
              </p>

              <a
                href={waLink('pricing')}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                aria-label="Start via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span
                  className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>

              <div className="mt-8 pt-6 border-t border-black/[0.06]">
                <p className="text-black/40 text-xs font-medium mb-3">
                  Or reach us directly
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={PHONE_MAIN_TEL}
                    className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-frog-green font-bold min-h-[44px] transition-colors duration-300"
                    aria-label={`Call ${PHONE_MAIN}`}
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    {PHONE_MAIN}
                  </a>
                </div>
              </div>

              <p className="text-black/40 text-xs text-center mt-6 font-medium">
                100% remote · 7 to 10 day turnaround · No hidden fees
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STICKY CTA BAR
      ═══════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-4 md:pb-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-auto flex items-center justify-between bg-black/80 backdrop-blur-2xl rounded-2xl px-5 md:px-8 py-4 ring-1 ring-white/[0.06] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="hidden sm:block">
              <p className="text-white text-sm font-bold">
                Ready? Let&apos;s Talk
              </p>
              <p className="text-white/30 text-xs font-medium">From N$1,000 · 7 to 10 day turnaround</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={waLink('pricing')}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-6 py-3 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_20px_rgba(122,201,67,0.2)] w-full sm:w-auto ${easing}`}
                aria-label="Start business registration on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-500" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom padding for sticky CTA */}
      <div className="h-20" />
    </>
  )
}
