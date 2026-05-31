'use client'

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
  ChevronRight,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const ccRegistration = {
  title: 'CC Registration',
  tag: 'MOST POPULAR',
  description:
    'The simplest way to formalise your business in Namibia. Affordable and fast.',
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
    'For businesses that need shareholding, scalability, and formal structure.',
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
      'Annual Return Filing',
      'Compliance Check',
      'Governance Template',
    ],
    btn: 'Choose Full',
    featured: false,
  },
]

const steps = [
  {
    n: '01',
    title: 'Pick Your Package',
    desc: 'Choose Basic, Advanced, or Full.',
    icon: Zap,
  },
  {
    n: '02',
    title: 'Submit Info',
    desc: 'ID, proof of address, and business names, all remote.',
    icon: Globe,
  },
  {
    n: '03',
    title: 'We File',
    desc: 'Forms, BIPA filings, and submissions handled from start to finish.',
    icon: Shield,
  },
  {
    n: '04',
    title: 'Get Documents',
    desc: 'Digital, bank-ready delivery in 7 to 10 working days.',
    icon: Check,
  },
]

const bipaSection = {
  title: 'BIPA Compliance',
  description:
    'All BIPA filings handled remotely. No office visits, no confusion.',
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
    'Beneficial Ownership declarations are mandatory. We keep you compliant.',
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
      'Registered my CC in under 2 weeks. No office visits. No drama.',
  },
  {
    name: 'James T.',
    business: 'Tjiriange Logistics',
    quote:
      'Everything done over WhatsApp. I was skeptical, but solid service.',
  },
  {
    name: 'Lina N.',
    business: 'Oshili Digital',
    quote:
      '2X cheaper than the lawyer I was going to use. Same result.',
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BusinessRegistrationPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark cinematic with image
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
                  Registration
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
                  Register
                  <br />
                  <span className="italic text-frog-green">Smarter.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  CC &amp; PTY LTD filing. Fast, affordable, fully remote.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20">
                    <Clock className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    <span className="text-frog-green text-sm font-bold">7–10 Day Turnaround</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20">
                    <span className="text-frog-green text-sm font-bold">From N$800</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={waLink('registration')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Start registration on WhatsApp"
                    className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Start
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/pricing"
                    aria-label="View pricing"
                    className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Pricing
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/hero/hero-2.webp"
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow light>Types</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-2xl">
                Choose your structure.{' '}
                <span className="italic text-frog-green">We handle the rest.</span>
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
                  <div className="w-11 h-11 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green">
                      {ccRegistration.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  {ccRegistration.title}
                </h3>
                <p className="text-black/40 text-sm leading-relaxed mb-6">
                  {ccRegistration.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-frog-green text-sm font-bold">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                    {ccRegistration.turnaround}
                  </div>
                  <span className="text-black/10">·</span>
                  <span className="text-2xl font-bold text-black">
                    {ccRegistration.price}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {ccRegistration.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-frog-green/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
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
                  <div className="w-11 h-11 rounded-xl bg-frog-green/15 ring-1 ring-frog-green/25 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                      {ptyLtdRegistration.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {ptyLtdRegistration.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {ptyLtdRegistration.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-frog-green">
                    {ptyLtdRegistration.price}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {ptyLtdRegistration.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
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
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Pricing</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Transparent{' '}
                <span className="italic text-frog-green">pricing.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-frog-muted text-base md:text-lg mt-4 max-w-lg mx-auto">
                No hidden fees. No markups.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured}>
                  <div className="flex flex-col h-full text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-frog-green">
                      {pkg.tier}
                    </span>
                    <p className="text-4xl font-bold text-frog-light mt-3">
                      {pkg.price}
                    </p>
                    <p className="text-frog-muted text-sm mt-1">{pkg.sub}</p>

                    <div className="mt-6 space-y-2.5 flex-1">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 justify-center">
                          <span className="w-4 h-4 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-xs">{f}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`${waLink('registration')}&text=${encodeURIComponent(
                        `Hi! I'd like the ${pkg.tier} package (${pkg.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Choose ${pkg.tier} package on WhatsApp`}
                      className={`mt-6 min-h-[48px] w-full py-3 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 touch-manipulation ${easing} ${
                        pkg.featured
                          ? 'bg-frog-green text-black hover:brightness-110'
                          : 'ring-1 ring-frog-green/30 text-frog-green hover:bg-frog-green/10'
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
            <Eyebrow light>Process</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
              Four Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <div className="bg-frog-light rounded-[2rem] p-6 md:p-8 h-full group hover:bg-frog-green/5 transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-bold flex items-center justify-center text-sm mb-5 group-hover:bg-frog-green group-hover:text-black transition-all duration-700">
                    {step.n}
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">
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
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Compliance</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug">
                Stay compliant.{' '}
                <span className="italic text-frog-green">Stay operational.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <DoubleBezel highlight>
                <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-frog-light mb-2">
                  {bipaSection.title}
                </h3>
                <p className="text-frog-muted text-sm leading-relaxed mb-6">
                  {bipaSection.description}
                </p>
                <ul className="space-y-2.5">
                  {bipaSection.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                      <span className="text-frog-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </DoubleBezel>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <DoubleBezel>
                <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-frog-light mb-2">
                  {boFiling.title}
                </h3>
                <p className="text-frog-muted text-sm leading-relaxed mb-6">
                  {boFiling.description}
                </p>
                <ul className="space-y-2.5">
                  {boFiling.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>Reviews</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
              Real results.{' '}
              <span className="italic text-frog-green">Real founders.</span>
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
                    <div className="w-10 h-10 rounded-full bg-frog-green/10 flex items-center justify-center text-frog-green font-bold text-sm">
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
          CTA — Dark cinematic
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Get Started</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ready to{' '}
              <span className="italic text-frog-green">register?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
              Affordable, remote registration. Connect with us on WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waLink('registration')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start registration on WhatsApp"
              className={`group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-10 py-5 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Start on WhatsApp
              <span
                className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
