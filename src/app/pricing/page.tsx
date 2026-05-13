'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ArrowRight,
  MessageCircle,
  Crown,
  Sparkles,
  Minus,
  ChevronDown,
  Phone,
  Building2,
  User,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const ccPackages = [
  {
    name: 'BASIC',
    price: '800',
    description: 'Essential registration to get started legally.',
    features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'],
    featured: false,
    waMessage: 'Hi, I want to register with the Basic package (N$800)',
  },
  {
    name: 'ADVANCED',
    price: '1,200',
    description: 'Registration + professional presence for a proper launch.',
    features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate', 'Company Profile', 'Domain Registration', 'BO Filing'],
    featured: true,
    waMessage: 'Hi, I want to register with the Advanced package (N$1,200)',
  },
  {
    name: 'FULL',
    price: '1,750',
    description: 'Everything you need to start and pitch investors.',
    features: ['Everything in Advanced', 'Business Plan', 'Social Setup', 'Pitch Deck Template'],
    featured: false,
    waMessage: 'Hi, I want to register with the Full package (N$1,750)',
  },
]

const comparisonFeatures = [
  { feature: 'Name Reservation', basic: true, advanced: true, full: true },
  { feature: 'BIPA Filing', basic: true, advanced: true, full: true },
  { feature: 'Tax Certificate', basic: true, advanced: true, full: true },
  { feature: 'Company Profile', basic: false, advanced: true, full: true },
  { feature: 'Domain Registration', basic: false, advanced: true, full: true },
  { feature: 'BO Filing', basic: false, advanced: true, full: true },
  { feature: 'Business Plan', basic: false, advanced: false, full: true },
  { feature: 'Social Media Setup', basic: false, advanced: false, full: true },
  { feature: 'Pitch Deck Template', basic: false, advanced: false, full: true },
]

const faqItems = [
  {
    question: 'What\'s in the Basic package?',
    answer:
      'Name reservation, BIPA filing, and your tax certificate. The minimum to operate legally.',
  },
  {
    question: 'Why choose Advanced?',
    answer:
      'Adds Company Profile (needed for bank accounts and tenders), domain registration, and BO filing — now a compliance requirement. The sweet spot for most founders.',
  },
  {
    question: 'What does Full add?',
    answer:
      'Business Plan, Social Media Setup, and Pitch Deck Template. Everything to approach investors and partners with confidence.',
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
      '7–10 working days for CC. Pty Ltd takes slightly longer due to extra documentation.',
  },
  {
    question: 'Can I upgrade later?',
    answer:
      'Yes. Pay the difference. Message us on WhatsApp.',
  },
]

const agents = [
  {
    name: 'Gadafi',
    role: 'Compliance Expert',
    phone: '081 341 1522',
    waLink: 'https://wa.me/264813411522',
  },
  {
    name: 'Mux',
    role: 'Digital Strategist',
    phone: '085 305 7020',
    waLink: 'https://wa.me/264853057020',
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
  const [selectedAgent, setSelectedAgent] = useState<string>('gadafi')
  const [formName, setFormName] = useState('')
  const [formBusiness, setFormBusiness] = useState('')
  const [formPackage, setFormPackage] = useState('advanced')

  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  const arrowEasing = 'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  const agentWaLink =
    selectedAgent === 'gadafi'
      ? 'https://wa.me/264813411522'
      : 'https://wa.me/264853057020'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — DARK, cinematic
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

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
                <span className="text-frog-green font-bold">from N$800</span>
              </a>
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/50 rounded-full px-5 py-2.5 text-sm font-bold bg-white/[0.02] hover:bg-white/[0.05] hover:text-white ${easing}`}
                aria-label="View all services"
              >
                All Services
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CC REGISTRATION PACKAGES — DARK with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section id="cc-packages" className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-frog-green/[0.03] blur-[180px] rounded-full pointer-events-none" />

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
            {ccPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Tier + Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20">
                        {pkg.name}
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] font-bold bg-frog-green text-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className="text-base text-frog-muted font-bold"
                      >
                        N$
                      </span>
                      <span
                        className="text-5xl md:text-6xl font-bold text-white leading-none"
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-frog-muted text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-frog-hairline mb-6" />

                    {/* Features */}
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {pkg.featured ? (
                      <a
                        href={`https://wa.me/264813411522?text=${encodeURIComponent(pkg.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-7 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                        aria-label={`Choose ${pkg.name} package`}
                      >
                        Get {pkg.name}
                        <span
                          className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/264813411522?text=${encodeURIComponent(pkg.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 min-h-[44px] ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-4 text-sm font-bold bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] ${easing}`}
                        aria-label={`Choose ${pkg.name} package`}
                      >
                        Get {pkg.name}
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
                  <div
                    className="text-black font-bold mt-0.5"
                  >
                    N$800
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-black/[0.06] bg-frog-green/[0.03]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-frog-green">
                      Advanced
                    </span>
                    <Crown className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <div
                    className="text-black font-bold mt-0.5"
                  >
                    N$1,200
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-black/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-black/60">
                    Full
                  </span>
                  <div
                    className="text-black font-bold mt-0.5"
                  >
                    N$1,750
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
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Basic%20package%20(N%24800)"
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
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Advanced%20package%20(N%241%2C200)"
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
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Full%20package%20(N%241%2C750)"
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
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-frog-green/[0.03] blur-[150px] rounded-full pointer-events-none" />

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
              Pricing and package FAQs.
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
          REGISTRATION FORM — LIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Register
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
            >
              Ready to{' '}
              <span className="italic text-frog-green">start?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-black/60 text-base mb-10 leading-relaxed">
              Fill in your details. We&apos;ll reply on WhatsApp within the hour.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white ring-1 ring-black/[0.06] rounded-2xl p-6 md:p-10">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Kamati"
                      className="w-full min-h-[44px] pl-11 pr-4 py-3.5 rounded-xl bg-frog-light border border-black/[0.06] text-black text-sm font-medium placeholder:text-black/30 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-frog-green/30 focus:border-frog-green/30 transition-all duration-300"
                      aria-label="Your full name"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-2">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formBusiness}
                      onChange={(e) => setFormBusiness(e.target.value)}
                      placeholder="e.g. Kamati Enterprises CC"
                      className="w-full min-h-[44px] pl-11 pr-4 py-3.5 rounded-xl bg-frog-light border border-black/[0.06] text-black text-sm font-medium placeholder:text-black/30 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-frog-green/30 focus:border-frog-green/30 transition-all duration-300"
                      aria-label="Your business name"
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-2">
                    Package
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ccPackages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setFormPackage(pkg.name.toLowerCase())}
                        className={`relative min-h-[44px] rounded-xl py-3 px-3 text-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          formPackage === pkg.name.toLowerCase()
                            ? 'bg-frog-green text-black ring-2 ring-frog-green/30 shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                            : 'bg-frog-light text-black/60 border border-black/[0.06] hover:border-frog-green/20 hover:text-black'
                        }`}
                        aria-label={`Select ${pkg.name} package`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider">
                          {pkg.name}
                        </span>
                        <span
                          className={`block text-sm font-bold mt-0.5 ${
                            formPackage === pkg.name.toLowerCase() ? 'text-black/70' : 'text-black/40'
                          }`}
                        >
                          N${pkg.price}
                        </span>
                        {pkg.featured && (
                          <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-frog-green flex items-center justify-center ${
                            formPackage === pkg.name.toLowerCase() ? 'bg-black' : ''
                          }`}>
                            <Crown className="w-2.5 h-2.5 text-white" strokeWidth={2} />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agent Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-2">
                    Preferred Agent
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {agents.map((agent) => (
                      <button
                        key={agent.name}
                        onClick={() => setSelectedAgent(agent.name.toLowerCase())}
                        className={`min-h-[44px] flex items-center gap-3 rounded-xl py-3.5 px-4 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          selectedAgent === agent.name.toLowerCase()
                            ? 'bg-frog-green text-black ring-2 ring-frog-green/30 shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                            : 'bg-frog-light text-black/60 border border-black/[0.06] hover:border-frog-green/20'
                        }`}
                        aria-label={`Select ${agent.name} as preferred agent`}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                            selectedAgent === agent.name.toLowerCase()
                              ? 'bg-black/10'
                              : 'bg-frog-green/10'
                          }`}
                        >
                          <MessageCircle
                            className={`w-4 h-4 ${
                              selectedAgent === agent.name.toLowerCase() ? 'text-black' : 'text-frog-green'
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">{agent.name}</span>
                          <span
                            className={`block text-[10px] ${
                              selectedAgent === agent.name.toLowerCase() ? 'text-black/50' : 'text-black/40'
                            }`}
                          >
                            {agent.role}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <a
                    href={`${agentWaLink}?text=${encodeURIComponent(
                      `Hi, I'm ${formName || '[Your Name]'} and I'd like to register "${formBusiness || '[Business Name]'}" with the ${formPackage.charAt(0).toUpperCase() + formPackage.slice(1)} package.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm w-full hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                    aria-label="Start registration via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Start via WhatsApp
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <p className="text-black/40 text-xs text-center mt-3 font-medium">
                    100% remote · 7–10 day turnaround · No hidden fees
                  </p>
                </div>
              </div>
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
                Ready? Start Registration
              </p>
              <p className="text-white/30 text-xs font-medium">From N$800 · 7–10 day turnaround</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="https://wa.me/264813411522?text=Hi%2C%20I%27m%20ready%20to%20start%20my%20business%20registration"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-6 py-3 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_20px_rgba(122,201,67,0.2)] w-full sm:w-auto ${easing}`}
                aria-label="Start business registration on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register Now
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
