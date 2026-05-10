'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  Check,
  ArrowRight,
  MessageCircle,
  Clock,
  Shield,
  FileCheck,
  Zap,
  Globe,
  Phone,
  ChevronRight,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const ccRegistration = {
  title: 'CC Registration',
  tag: 'MOST POPULAR',
  description:
    'Close Corporation registration for small businesses and solo entrepreneurs. The most affordable and popular way to formalise your business in Namibia.',
  turnaround: '7–10 Working Days',
  price: 'From N$800',
  items: [
    'Name Reservation with BIPA',
    'Founding Statement (CC8)',
    'Constitution (CC1)',
    'Beneficial Owner Declaration',
    'BIPA Filing & Submission',
    'Digital Certificate Issued',
    'Bank-Ready Registration Documents',
  ],
}

const ptyLtdRegistration = {
  title: 'PTY LTD Registration',
  tag: 'FOR GROWING BUSINESSES',
  description:
    'Private Company registration for growing businesses that need a more formal structure, shareholding, and scalability.',
  price: 'From N$1,500',
  items: [
    'Name Reservation (Form CM5)',
    'Memorandum of Incorporation (MOI)',
    'Registration Forms (CM1 & CM29)',
    'Beneficial Owner Declaration',
    'BIPA Filing & Submission',
    'Digital Certificate Issued',
    'Full Remote Handling',
    'Priority Support',
  ],
}

const pricingCards = [
  {
    tier: 'BASIC',
    price: 'N$800',
    sub: 'CC Registration',
    features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate', 'Digital Delivery'],
    btn: 'Choose Basic',
    featured: false,
  },
  {
    tier: 'ADVANCED',
    price: 'N$1,200',
    sub: 'CC Registration',
    features: [
      'Everything in Basic',
      'Company Profile',
      'Domain Registration',
      'BO Filing',
    ],
    btn: 'Choose Advanced',
    featured: true,
  },
  {
    tier: 'FULL',
    price: 'N$1,750',
    sub: 'CC Registration',
    features: [
      'Everything in Advanced',
      'Business Plan Summary',
      'Social Media Setup',
      'Pitch Deck Template',
    ],
    btn: 'Choose Full',
    featured: false,
  },
]

const steps = [
  {
    n: '01',
    title: 'Choose Your Package',
    desc: 'Select the registration package that fits your needs — Basic, Advanced, or Full.',
    icon: Zap,
  },
  {
    n: '02',
    title: 'Submit Your Information',
    desc: 'We collect your ID, proof of address, and proposed business names remotely.',
    icon: Globe,
  },
  {
    n: '03',
    title: 'We File Everything',
    desc: 'Compliance, forms, BIPA filings, and submissions — handled end-to-end.',
    icon: Shield,
  },
  {
    n: '04',
    title: 'Receive Your Documents',
    desc: 'Delivered digitally and bank-ready within 7–10 working days.',
    icon: Check,
  },
]

const bipaSection = {
  title: 'BIPA Compliance',
  description:
    'We handle all BIPA-related filings and submissions on your behalf. No office visits, no paperwork confusion — everything is managed remotely.',
  items: [
    'Annual Returns Filing',
    'Beneficial Ownership Updates',
    'Name Changes & Amendments',
    'Deregistration Support',
    'Compliance Status Checks',
  ],
}

const boFiling = {
  title: 'BO Filing',
  description:
    'Beneficial Ownership declarations are now mandatory. We ensure your business stays compliant with the latest regulatory requirements.',
  items: [
    'Beneficial Owner Declaration',
    'Filing with BIPA',
    'Amendment Filings',
    'Compliance Confirmation',
  ],
}

const testimonials = [
  {
    name: 'Maria K.',
    business: 'MK Cleaners CC',
    quote:
      'Registered my CC in under 2 weeks. No office visits. No drama. Just results.',
  },
  {
    name: 'James T.',
    business: 'Tjiriange Logistics',
    quote:
      'SMEfrog handled everything over WhatsApp. I was skeptical, but the service was solid.',
  },
  {
    name: 'Lina N.',
    business: 'Oshili Digital',
    quote:
      '2X cheaper than the lawyer I was going to use. Same documents. Same result.',
  },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'Digital Strategist' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BusinessRegistrationPage() {
  const [selectedAgent, setSelectedAgent] = useState('gadafi')
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark cinematic with image
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#7AC943]/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A2F]/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-6">
                  Business Registration
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Register
                  <br />
                  <span className="italic text-[#7AC943]">Smarter.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  CC &amp; PTY LTD filing made simple. Fast, affordable, fully remote
                  compliance support for Namibian entrepreneurs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20">
                    <Clock className="w-4 h-4 text-[#7AC943]" strokeWidth={1.5} />
                    <span className="text-[#7AC943] text-sm font-bold">7–10 Day Turnaround</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20">
                    <span className="text-[#7AC943] text-sm font-bold">From N$800</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Register Now
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/pricing"
                    className={`inline-flex items-center gap-2 ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    View Pricing
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/service-registration.png"
                  alt="Business Registration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frog-black/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CC & PTY LTD — Light editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow light>Registration Types</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-2xl"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Choose your structure.{' '}
                <span className="italic text-[#7AC943]">We handle the rest.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CC Registration */}
            <ScrollReveal>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7AC943]">
                      {ccRegistration.tag}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {ccRegistration.title}
                </h3>
                <p className="text-black/40 text-sm leading-relaxed mb-6">
                  {ccRegistration.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#7AC943] text-sm font-bold">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                    {ccRegistration.turnaround}
                  </div>
                  <span className="text-black/10">·</span>
                  <span className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {ccRegistration.price}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {ccRegistration.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#7AC943]/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#7AC943]" strokeWidth={2} />
                      </span>
                      <span className="text-black/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* PTY LTD Registration */}
            <ScrollReveal delay={0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="bg-black rounded-[2rem] p-8 md:p-10 shadow-sm h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#7AC943]/15 ring-1 ring-[#7AC943]/25 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                      {ptyLtdRegistration.tag}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {ptyLtdRegistration.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {ptyLtdRegistration.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-[#7AC943]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {ptyLtdRegistration.price}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {ptyLtdRegistration.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#7AC943]/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#7AC943]" strokeWidth={2} />
                      </span>
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRICING CARDS — Dark cinematic with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Pricing</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Transparent{' '}
                <span className="italic text-[#7AC943]">Structure.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-frog-muted text-base md:text-lg mt-4 max-w-lg mx-auto">
                No hidden fees. No consultant markups. Just results.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured}>
                  <div className="flex flex-col h-full text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#7AC943]">
                      {pkg.tier}
                    </span>
                    <p
                      className="text-4xl font-bold text-frog-light mt-3"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {pkg.price}
                    </p>
                    <p className="text-frog-muted text-sm mt-1">{pkg.sub}</p>

                    <div className="mt-6 space-y-2.5 flex-1">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 justify-center">
                          <span className="w-4 h-4 rounded-full bg-[#7AC943]/15 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#7AC943]" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-xs">{f}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/264813411522?text=${encodeURIComponent(
                        `Hi! I'd like to register with the ${pkg.tier} package (${pkg.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 w-full py-3 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 ${easing} ${
                        pkg.featured
                          ? 'bg-[#7AC943] text-black hover:brightness-110'
                          : 'ring-1 ring-[#7AC943]/30 text-[#7AC943] hover:bg-[#7AC943]/10'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {pkg.btn}
                    </a>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — Light editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>How It Works</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] rounded-[2rem] p-6 md:p-8 h-full group hover:bg-[#7AC943]/5 transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] font-bold flex items-center justify-center text-sm mb-5 group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-700">
                    {step.n}
                  </div>
                  <h3
                    className="text-base font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BIPA & BO FILING — Dark with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7AC943]/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Compliance Services</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Stay compliant.{' '}
                <span className="italic text-[#7AC943]">Stay operational.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <DoubleBezel highlight>
                <div className="w-10 h-10 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-frog-light mb-2"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {bipaSection.title}
                </h3>
                <p className="text-frog-muted text-sm leading-relaxed mb-6">
                  {bipaSection.description}
                </p>
                <ul className="space-y-2.5">
                  {bipaSection.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] shrink-0" />
                      <span className="text-frog-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </DoubleBezel>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <DoubleBezel>
                <div className="w-10 h-10 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-frog-light mb-2"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {boFiling.title}
                </h3>
                <p className="text-frog-muted text-sm leading-relaxed mb-6">
                  {boFiling.description}
                </p>
                <ul className="space-y-2.5">
                  {boFiling.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] shrink-0" />
                      <span className="text-frog-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </DoubleBezel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Light warm
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>What Founders Say</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Real results.{' '}
              <span className="italic text-[#7AC943]">Real founders.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 h-full shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700">
                  <p className="text-black/60 text-base leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-black font-bold text-sm">{t.name}</p>
                      <p className="text-black/30 text-xs">{t.business}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Dark cinematic with agent selection
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-[#7AC943]/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7AC943]/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <ScrollReveal>
                <Eyebrow>Get Started</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Ready to register
                  <br />
                  <span className="italic text-[#7AC943]">your business?</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-frog-muted text-base md:text-lg max-w-md leading-relaxed">
                  Get started with affordable, remote business registration today. Choose your agent and connect via WhatsApp.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — Agent cards */}
            <div>
              <ScrollReveal>
                <div className="text-center mb-6">
                  <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
                    Pick Your Agent
                  </span>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {AGENTS.map((agent, i) => (
                  <ScrollReveal key={agent.id} delay={i * 0.06}>
                    <button
                      type="button"
                      onClick={() => setSelectedAgent(agent.id)}
                      className={`w-full group flex items-center justify-between p-6 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        selectedAgent === agent.id
                          ? 'bg-[#7AC943] ring-1 ring-[#7AC943] text-black shadow-[0_0_50px_rgba(122,201,67,0.15)]'
                          : 'bg-frog-shell ring-1 ring-frog-hairline text-white hover:ring-[#7AC943]/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="text-left">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                            selectedAgent === agent.id ? 'text-black/50' : 'text-white/20'
                          }`}
                        >
                          {agent.role}
                        </span>
                        <p
                          className={`text-lg font-bold mt-0.5 ${
                            selectedAgent === agent.id ? 'text-black' : 'text-white'
                          }`}
                        >
                          {agent.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Phone
                            className={`w-3 h-3 ${
                              selectedAgent === agent.id ? 'text-black/30' : 'text-white/30'
                            }`}
                            strokeWidth={1.5}
                          />
                          <span
                            className={`text-sm font-medium ${
                              selectedAgent === agent.id ? 'text-black/40' : 'text-white/30'
                            }`}
                          >
                            +264 {agent.phone.slice(3)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className={`hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            selectedAgent === agent.id
                              ? 'bg-black/10 text-black'
                              : 'bg-[#7AC943]/10 text-[#7AC943] group-hover:bg-[#7AC943] group-hover:text-black'
                          }`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                          WhatsApp
                        </div>
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            selectedAgent === agent.id
                              ? 'bg-black/10 text-black'
                              : 'bg-[#7AC943]/10 text-[#7AC943] group-hover:bg-[#7AC943] group-hover:text-black'
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.12}>
                  <a
                    href={`https://wa.me/${AGENTS.find((a) => a.id === selectedAgent)?.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full inline-flex items-center justify-center gap-3 bg-[#7AC943] text-black font-bold rounded-2xl px-8 py-5 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Chat with {AGENTS.find((a) => a.id === selectedAgent)?.name} on WhatsApp
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
