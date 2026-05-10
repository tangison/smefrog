'use client'

import { useState } from 'react'
import Image from 'next/image'
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

/* ─── Data ─────────────────────────────────────────── */
const ccPackages = [
  {
    name: 'BASIC',
    price: '800',
    description: 'Essential registration — everything you need to get started legally.',
    features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'],
    featured: false,
    waMessage: 'Hi, I want to register with the Basic package (N$800)',
  },
  {
    name: 'ADVANCED',
    price: '1,200',
    description: 'Registration + professional presence — for entrepreneurs who want to launch properly.',
    features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate', 'Company Profile', 'Domain Registration', 'BO Filing'],
    featured: true,
    waMessage: 'Hi, I want to register with the Advanced package (N$1,200)',
  },
  {
    name: 'FULL',
    price: '1,750',
    description: 'The complete startup toolkit — registration, branding, and investor-readiness in one package.',
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
    question: 'What is included in the Basic package?',
    answer:
      'The Basic package covers the essentials: name reservation with BIPA, full BIPA filing for your CC registration, and your tax certificate. This is the minimum you need to operate legally in Namibia.',
  },
  {
    question: 'Why should I choose Advanced over Basic?',
    answer:
      'The Advanced package adds your Company Profile (essential for bank accounts and tenders), a domain registration for your online presence, and Beneficial Ownership filing — which is now a compliance requirement. Most entrepreneurs find this is the sweet spot.',
  },
  {
    question: 'What does the Full package add?',
    answer:
      'The Full package is the complete startup toolkit. On top of everything in Advanced, you get a professional Business Plan, Social Media Setup across platforms, and a Pitch Deck Template — everything you need to approach investors, lenders, and partners with confidence.',
  },
  {
    question: 'Are there hidden fees?',
    answer:
      'Absolutely not. The prices you see are what you pay. We do not add administrative markups, consultation surcharges, or any hidden costs. Government filing fees are included in all packages.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Payment is made via WhatsApp or EFT before we begin the registration process. We will confirm receipt and start working immediately. No deposit schemes or installment complexity.',
  },
  {
    question: 'How long does registration take?',
    answer:
      'Most CC registrations are completed within 7–10 working days from when we receive your information and payment. Pty Ltd registrations may take slightly longer due to additional documentation requirements.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer:
      'Yes. If you start with Basic and decide you need the additional features, you can upgrade by paying the difference. Just message us on WhatsApp and we will handle the upgrade seamlessly.',
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

/* ─── DoubleBezel ────────────────────────────────────── */
function DoubleBezel({
  children,
  className = '',
  highlight = false,
}: {
  children: React.ReactNode
  className?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`bg-frog-shell ring-1 ${
        highlight ? 'ring-[#7AC943]/25' : 'ring-frog-hairline'
      } p-1.5 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}
    >
      <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
        {children}
      </div>
    </div>
  )
}

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
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-white font-bold text-sm md:text-base pr-4 group-hover:text-[#7AC943] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-[#7AC943] transition-colors duration-500" strokeWidth={1.5} />
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
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#7AC943]/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A2F]/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-6">
              Pricing
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Transparent
              <br />
              <span className="italic text-[#7AC943]">Structure.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Professional support without inflated consultant pricing. What you
              see is what you pay — no hidden fees, no surprises.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#cc-packages"
                className={`inline-flex items-center gap-2 bg-white/[0.04] hover:bg-[#7AC943]/10 text-white/60 hover:text-[#7AC943] rounded-full px-5 py-2.5 text-sm font-bold ring-1 ring-white/[0.06] hover:ring-[#7AC943]/20 ${easing}`}
              >
                CC Registration
                <span className="text-[#7AC943] font-bold">from N$800</span>
              </a>
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 ring-1 ring-white/10 text-white/50 rounded-full px-5 py-2.5 text-sm font-bold bg-white/[0.02] hover:bg-white/[0.05] hover:text-white ${easing}`}
              >
                View All Services
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
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7AC943]/[0.03] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
              CC Registration
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Choose your package.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-xl mb-12 md:mb-16 leading-relaxed">
              Every package includes professional handling. Pick the level of support that fits where you are in your journey.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {ccPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Tier + Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20">
                        {pkg.name}
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] font-bold bg-[#7AC943] text-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className="text-base text-frog-muted font-bold"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        N$
                      </span>
                      <span
                        className="text-5xl md:text-6xl font-bold text-white leading-none"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                          <span className="w-5 h-5 rounded-full bg-[#7AC943]/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#7AC943]" strokeWidth={2} />
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
                        className={`group inline-flex items-center justify-center gap-2 bg-[#7AC943] text-black font-bold rounded-full px-7 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                      >
                        Choose {pkg.name}
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
                        className={`group inline-flex items-center justify-center gap-2 ring-1 ring-[#7AC943]/30 text-[#7AC943] rounded-full px-7 py-4 text-sm font-bold bg-[#7AC943]/[0.05] hover:bg-[#7AC943]/[0.1] active:scale-[0.98] ${easing}`}
                      >
                        Choose {pkg.name}
                        <span
                          className={`w-7 h-7 rounded-full bg-[#7AC943]/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
              Compare
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Feature Comparison
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#6B7280] text-base max-w-xl mb-12 leading-relaxed">
              See exactly what&apos;s included in each CC Registration package at a glance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white">
              {/* Header row */}
              <div className="grid grid-cols-4 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <div className="p-4 md:p-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9CA3AF]">
                    Feature
                  </span>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#6B7280]">
                    Basic
                  </span>
                  <div
                    className="text-[#1A1A1A] font-bold mt-0.5"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    N$800
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB] bg-[#7AC943]/[0.03]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#7AC943]">
                      Advanced
                    </span>
                    <Crown className="w-3 h-3 text-[#7AC943]" strokeWidth={1.5} />
                  </div>
                  <div
                    className="text-[#1A1A1A] font-bold mt-0.5"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    N$1,200
                  </div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#6B7280]">
                    Full
                  </span>
                  <div
                    className="text-[#1A1A1A] font-bold mt-0.5"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                    i < comparisonFeatures.length - 1 ? 'border-b border-[#F3F4F6]' : ''
                  } hover:bg-[#FAFAFA] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}
                >
                  <div className="p-4 md:p-5">
                    <span className="text-sm text-[#374151] font-medium">{row.feature}</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6]">
                    {row.basic ? (
                      <span className="w-6 h-6 rounded-full bg-[#7AC943]/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#7AC943]" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6] bg-[#7AC943]/[0.015]">
                    {row.advanced ? (
                      <span className="w-6 h-6 rounded-full bg-[#7AC943]/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#7AC943]" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6]">
                    {row.full ? (
                      <span className="w-6 h-6 rounded-full bg-[#7AC943]/15 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#7AC943]" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-4 border-t border-[#E5E7EB] bg-[#F9FAFB]">
                <div className="p-4 md:p-5" />
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB]">
                  <a
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Basic%20package%20(N%24800)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold text-[#6B7280] hover:text-[#7AC943] ${easing}`}
                  >
                    Choose Basic &rarr;
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB]">
                  <a
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Advanced%20package%20(N%241%2C200)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-1.5 bg-[#7AC943] text-black font-bold rounded-full px-5 py-2.5 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] ${easing}`}
                  >
                    Choose Advanced
                    <ArrowRight
                      className={`w-3.5 h-3.5 group-hover:translate-x-0.5 ${arrowEasing}`}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB]">
                  <a
                    href="https://wa.me/264813411522?text=Hi%2C%20I%20want%20to%20register%20with%20the%20Full%20package%20(N%241%2C750)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold text-[#6B7280] hover:text-[#7AC943] ${easing}`}
                  >
                    Choose Full &rarr;
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
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#7AC943]/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Common questions{' '}
              <span className="italic text-[#7AC943]">answered.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base mb-10 leading-relaxed">
              Everything you need to know about our pricing and packages.
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
              Start Registration
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Ready to{' '}
              <span className="italic text-[#7AC943]">begin?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#6B7280] text-base mb-10 leading-relaxed">
              Fill in your details below and we&apos;ll get back to you on WhatsApp within the hour.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white ring-1 ring-[#E5E7EB] rounded-2xl p-6 md:p-10">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#9CA3AF] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Kamati"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-[#1A1A1A] text-sm font-medium placeholder:text-[#C0C0C0] placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#7AC943]/30 focus:border-[#7AC943]/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#9CA3AF] mb-2">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formBusiness}
                      onChange={(e) => setFormBusiness(e.target.value)}
                      placeholder="e.g. Kamati Enterprises CC"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-[#1A1A1A] text-sm font-medium placeholder:text-[#C0C0C0] placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#7AC943]/30 focus:border-[#7AC943]/30 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#9CA3AF] mb-2">
                    Package
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ccPackages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setFormPackage(pkg.name.toLowerCase())}
                        className={`relative rounded-xl py-3 px-3 text-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          formPackage === pkg.name.toLowerCase()
                            ? 'bg-[#7AC943] text-black ring-2 ring-[#7AC943]/30 shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                            : 'bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] hover:border-[#7AC943]/20 hover:text-[#1A1A1A]'
                        }`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider">
                          {pkg.name}
                        </span>
                        <span
                          className={`block text-sm font-bold mt-0.5 ${
                            formPackage === pkg.name.toLowerCase() ? 'text-black/70' : 'text-[#9CA3AF]'
                          }`}
                          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                          N${pkg.price}
                        </span>
                        {pkg.featured && (
                          <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#7AC943] flex items-center justify-center ${
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
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#9CA3AF] mb-2">
                    Preferred Agent
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {agents.map((agent) => (
                      <button
                        key={agent.name}
                        onClick={() => setSelectedAgent(agent.name.toLowerCase())}
                        className={`flex items-center gap-3 rounded-xl py-3.5 px-4 text-left transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          selectedAgent === agent.name.toLowerCase()
                            ? 'bg-[#7AC943] text-black ring-2 ring-[#7AC943]/30 shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                            : 'bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB] hover:border-[#7AC943]/20'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                            selectedAgent === agent.name.toLowerCase()
                              ? 'bg-black/10'
                              : 'bg-[#7AC943]/10'
                          }`}
                        >
                          <MessageCircle
                            className={`w-4 h-4 ${
                              selectedAgent === agent.name.toLowerCase() ? 'text-black' : 'text-[#7AC943]'
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">{agent.name}</span>
                          <span
                            className={`block text-[10px] ${
                              selectedAgent === agent.name.toLowerCase() ? 'text-black/50' : 'text-[#9CA3AF]'
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
                    className={`group inline-flex items-center justify-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm w-full hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.15)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Start Registration via WhatsApp
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <p className="text-[#9CA3AF] text-xs text-center mt-3 font-medium">
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
              <p className="text-white text-sm font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Ready? Start Registration
              </p>
              <p className="text-white/30 text-xs font-medium">From N$800 · 7–10 day turnaround</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="https://wa.me/264813411522?text=Hi%2C%20I%27m%20ready%20to%20start%20my%20business%20registration"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 bg-[#7AC943] text-black font-bold rounded-full px-6 py-3 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_20px_rgba(122,201,67,0.2)] w-full sm:w-auto ${easing}`}
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Start Registration
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
