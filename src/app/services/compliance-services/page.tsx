'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  FileCheck,
  Landmark,
  Building2,
  Check,
  ArrowRight,
  MessageCircle,
  Clock,
  Repeat,
  TrendingUp,
  ChevronRight,
  Eye,
  CalendarCheck,
  FileSearch,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink, TESTIMONIALS } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const serviceCards = [
  {
    icon: Shield,
    tag: 'MANDATORY',
    title: 'Annual Returns Filing',
    description:
      'Every registered entity must file annual returns with BIPA. Miss a filing and your business risks deregistration.',
    items: [
      'BIPA Annual Return Preparation',
      'Filing on Your Behalf',
      'Deadline Tracking & Reminders',
      'Penalty Avoidance',
      'Filing Confirmation & Receipt',
    ],
  },
  {
    icon: FileCheck,
    tag: 'REGULATORY',
    title: 'Beneficial Ownership Updates',
    description:
      'Beneficial Ownership declarations must be kept current. Any change in ownership structure requires an amendment filing.',
    items: [
      'BO Declaration Updates',
      'Amendment Filings with BIPA',
      'Ownership Structure Mapping',
      'Compliance Confirmation',
      'Change Notification Management',
    ],
  },
  {
    icon: Landmark,
    tag: 'ONGOING',
    title: 'Regulatory Filings',
    description:
      'Stay on top of every regulatory requirement. From tax compliance to sector-specific filings — we handle it all.',
    items: [
      'Tax Compliance Filing Support',
      'Sector-Specific Requirements',
      'Regulatory Deadline Monitoring',
      'Amendment & Resubmission Handling',
      'Filing Status Tracking',
    ],
  },
  {
    icon: Building2,
    tag: 'GOVERNANCE',
    title: 'Company Secretarial Services',
    description:
      'Professional secretarial support so your business stays compliant with Namibian corporate governance standards.',
    items: [
      'Statutory Record Keeping',
      'Meeting Minutes & Resolutions',
      'Director & Member Changes',
      'Constitutional Amendments',
      'Registered Office Management',
    ],
  },
]

const stats = [
  {
    label: 'Annual',
    value: 'Frequency',
    description: 'Returns and filings recur every year — a built-in business cycle.',
    icon: CalendarCheck,
  },
  {
    label: '100%',
    value: 'Compliance',
    description: 'We promise full compliance or we fix it — no gaps, no penalties.',
    icon: Shield,
  },
  {
    label: 'Recurring',
    value: 'Revenue',
    description: 'Every client is a long-term relationship, not a one-time transaction.',
    icon: Repeat,
  },
]

const steps = [
  {
    n: '01',
    title: 'Submit Info',
    desc: 'Share your entity details, ownership info, and current compliance status.',
    icon: FileSearch,
  },
  {
    n: '02',
    title: 'We File',
    desc: 'We prepare and submit all required filings with BIPA and regulators.',
    icon: Shield,
  },
  {
    n: '03',
    title: 'Ongoing Monitoring',
    desc: 'We track deadlines and keep your records current — automatically.',
    icon: Eye,
  },
  {
    n: '04',
    title: 'Annual Review',
    desc: 'Yearly compliance health check to ensure nothing slips through.',
    icon: CalendarCheck,
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function ComplianceServicesPage() {
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
                  Compliance
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
                  Stay Compliant.
                  <br />
                  <span className="italic text-frog-green">Operational.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Annual returns, BO updates, and regulatory filings. Registration gets you in — compliance keeps you running.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20">
                    <Repeat className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    <span className="text-frog-green text-sm font-bold">Custom Pricing — Recurring</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={waLink('compliance')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Start compliance service on WhatsApp"
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
                    href="/services/business-registration"
                    aria-label="View business registration"
                    className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Registration
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/hero/hero-5.webp"
                  alt="Savanna-to-desert transition landscape"
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
          SERVICE BREAKDOWN — Alternating light/dark sections
      ═══════════════════════════════════════════════════ */}
      {serviceCards.map((card, i) => {
        const isEven = i % 2 === 0
        const Icon = card.icon
        return (
          <section
            key={card.title}
            className={`py-24 md:py-32 lg:py-40 px-4 md:px-6 ${isEven ? 'bg-frog-light' : 'bg-white'}`}
          >
            <div className="max-w-[1400px] mx-auto">
              <ScrollReveal>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`rounded-[2rem] p-8 md:p-10 shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700 h-full ${
                    isEven ? 'bg-white' : 'bg-frog-light'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green">
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
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
            </div>
          </section>
        )
      })}

      {/* ═══════════════════════════════════════════════════
          RECURRING REVENUE — Light bg with stats
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow light>Recurring Revenue</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-3xl">
                Registration is once.{' '}
                <span className="italic text-frog-green">Compliance is forever.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-black/40 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
                Registration is a single transaction. Compliance is a relationship. Every year, every filing, every deadline — that&apos;s recurring value for your business and ours. The strongest business model isn&apos;t the one-time sale; it&apos;s the ongoing partnership that keeps companies operational and penalty-free.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon
              return (
                <ScrollReveal key={stat.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700 h-full text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-5">
                      <StatIcon className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-frog-green mb-2">
                      {stat.label}
                    </p>
                    <p className="text-lg font-bold text-black mb-2">
                      {stat.value}
                    </p>
                    <p className="text-black/40 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — Dark with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                How it{' '}
                <span className="italic text-frog-green">works.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-frog-muted text-base md:text-lg mt-4 max-w-lg mx-auto">
                Four steps. Zero office visits. Full compliance.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <ScrollReveal key={step.n} delay={i * 0.08}>
                  <DoubleBezel highlight={i === 0}>
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-bold flex items-center justify-center text-sm mb-5">
                        {step.n}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                        <StepIcon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-bold text-frog-light mb-2">
                        {step.title}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </DoubleBezel>
                </ScrollReveal>
              )
            })}
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
            {TESTIMONIALS.map((t, i) => (
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

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <Eyebrow>Get Started</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ready to stay{' '}
                <span className="italic text-frog-green">compliant?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-frog-muted text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8">
                Don&apos;t wait for a penalty. Start your compliance journey today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <a
                href={waLink('compliance')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start compliance service on WhatsApp"
                className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-10 py-5 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
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
        </div>
      </section>
    </>
  )
}
