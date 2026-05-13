'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Building2,
  Presentation,
  Wallet,
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronRight,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const serviceBreakdown = [
  {
    icon: BookOpen,
    title: 'Business Plans',
    tag: 'FOUNDATION',
    description:
      'Clear, structured plans for funding, strategy, and investor presentations.',
    items: [
      'Executive Summary',
      'Market Analysis',
      'Financial Projections',
      'Operational Strategy',
      'Funding-Ready Formatting',
    ],
    theme: 'light' as const,
  },
  {
    icon: Presentation,
    title: 'Pitch Decks',
    tag: 'INVESTOR-READY',
    description:
      'Presentations that tell your story and communicate value clearly.',
    items: [
      'Problem & Solution Framing',
      'Market Opportunity',
      'Business Model Canvas',
      'Traction & Milestones',
      'Investment Ask Structure',
    ],
    theme: 'dark' as const,
  },
  {
    icon: Building2,
    title: 'Company Profiles',
    tag: 'CREDIBILITY',
    description:
      'Polished profiles for clients, partners, and business development.',
    items: [
      'Company Overview',
      'Service Descriptions',
      'Team Profiles',
      'Mission & Vision',
      'Branded Design',
    ],
    theme: 'light' as const,
  },
  {
    icon: Wallet,
    title: 'Funding Docs',
    tag: 'FUNDING',
    description:
      'Document prep for grants, loans, and investor capital.',
    items: [
      'Application Support',
      'Document Preparation',
      'Compliance Verification',
      'Financial Review',
      'Submission Assistance',
    ],
    theme: 'dark' as const,
  },
]

const useCases = [
  {
    icon: Rocket,
    title: 'First-Time Founders',
    description:
      'You have an idea. We build the structure and documents.',
    features: ['Business Plan', 'Company Profile', 'Registration Guidance'],
  },
  {
    icon: Target,
    title: 'Funding Applicants',
    description:
      'Professional documents to apply for grants, loans, or investment.',
    features: ['Pitch Deck', 'Financial Projections', 'Funding Applications'],
  },
  {
    icon: TrendingUp,
    title: 'Growing Businesses',
    description:
      'Polished materials for partnerships, proposals, and new markets.',
    features: ['Company Profile', 'Strategic Plan', 'Partnership Proposals'],
  },
  {
    icon: Lightbulb,
    title: 'Side Hustlers',
    description:
      'Go from informal to formal. Make your side business legitimate.',
    features: ['Business Plan', 'Registration', 'Basic Profile'],
  },
]

const testimonials = [
  {
    name: 'David M.',
    business: 'Windhoek Tech Solutions',
    quote:
      'The pitch deck helped me secure seed funding. Professional quality at a fraction of agency prices.',
  },
  {
    name: 'Sarah K.',
    business: 'Okambogo Farming CC',
    quote:
      'My business plan was accepted by DBN on the first submission. That never happens.',
  },
  {
    name: 'Petrus N.',
    business: 'Oshikandi Trading',
    quote:
      'They turned my rough notes into a company profile that actually impresses clients.',
  },
]

const processSteps = [
  { n: '01', title: 'Share Your Vision', desc: 'Tell us your idea, goals, and audience.' },
  { n: '02', title: 'We Draft', desc: 'Professional documents tailored to your needs.' },
  { n: '03', title: 'Review & Refine', desc: 'You review. We iterate until perfect.' },
  { n: '04', title: 'Deliver', desc: 'Polished documents plus WhatsApp support.' },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'Digital Strategist' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function StartupSupportPage() {
  const [selectedAgent, setSelectedAgent] = useState('gadafi')
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark cinematic with image
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
                  Startup Support
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
                  Launch With
                  <br />
                  <span className="italic text-frog-green">Structure.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Plans, decks, and docs for Namibian entrepreneurs ready to move.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                  <span className="text-frog-green text-sm font-bold">Custom Pricing</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get a quote on WhatsApp"
                    className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Quote
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/services/business-registration"
                    aria-label="Go to business registration"
                    className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Register Instead
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/service-startup.png"
                  alt="Startup Support"
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
          SERVICE BREAKDOWN — Alternating light/dark
      ═══════════════════════════════════════════════════ */}
      {serviceBreakdown.map((service, i) => {
        const isLight = service.theme === 'light'
        return (
          <section
            key={service.title}
            className={`py-20 md:py-28 px-4 md:px-6 ${
              isLight ? 'bg-frog-light' : 'bg-frog-black'
            }`}
          >
            <div className="max-w-[1400px] mx-auto">
              <ScrollReveal>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`rounded-[2rem] p-8 md:p-12 h-full ${
                    isLight
                      ? 'bg-white shadow-sm ring-1 ring-black/[0.04]'
                      : 'bg-frog-card ring-1 ring-white/5'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                    {/* Left */}
                    <div className="lg:w-2/5 shrink-0">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            isLight
                              ? 'bg-frog-green/10 ring-1 ring-frog-green/20'
                              : 'bg-frog-green/15 ring-1 ring-frog-green/25'
                          }`}
                        >
                          <service.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                            isLight ? 'text-frog-green' : 'text-frog-green/80'
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${
                          isLight ? 'text-black' : 'text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base leading-relaxed ${
                          isLight ? 'text-black/40' : 'text-white/40'
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Right — Items */}
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                isLight
                                  ? 'bg-frog-green/10'
                                  : 'bg-frog-green/15'
                              }`}
                            >
                              <ArrowRight className="w-2.5 h-2.5 text-frog-green" strokeWidth={2} />
                            </span>
                            <span
                              className={`text-sm ${
                                isLight ? 'text-black/60' : 'text-white/60'
                              }`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </section>
        )
      })}

      {/* ═══════════════════════════════════════════════════
          USE CASES — Light editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>Who It&rsquo;s For</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
              Every stage{' '}
              <span className="italic text-frog-green">of the journey.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-frog-light rounded-[2rem] p-8 md:p-10 h-full group hover:bg-frog-green/5 transition-colors duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green flex items-center justify-center mb-5 group-hover:bg-frog-green group-hover:text-black transition-all duration-700">
                    <uc.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">
                    {uc.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed mb-5">
                    {uc.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {uc.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-full bg-frog-green/10 text-frog-green text-xs font-bold"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — Dark with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug">
                Idea to{' '}
                <span className="italic text-frog-green">investor-ready.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel highlight={i === 0}>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-frog-green leading-none">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-frog-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed">{step.desc}</p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
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
              They launched.{' '}
              <span className="italic text-frog-green">So can you.</span>
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
          CUSTOM PRICING NOTE — Dark editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Custom pricing.{' '}
              <span className="italic text-frog-green">Tailored scope.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Every startup is different. We scope and quote — no filler, just what you need.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a custom quote on WhatsApp"
              className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Get Quote
              <span
                className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Agent selection
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
                Contact
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Pick your agent.{' '}
                <span className="italic text-frog-green">Start.</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {AGENTS.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={i * 0.06}>
                <a
                  href={`https://wa.me/${agent.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with ${agent.name} on WhatsApp`}
                  className={`group flex items-center justify-between min-h-[44px] p-6 rounded-2xl bg-frog-shell ring-1 ring-frog-hairline hover:ring-frog-green/20 hover:bg-white/[0.04] ${easing}`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                      {agent.role}
                    </span>
                    <p className="text-white font-bold text-lg mt-0.5">{agent.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-3 h-3 text-white/30" strokeWidth={1.5} />
                      <span className="text-white/30 text-sm font-medium">
                        +264 {agent.phone.slice(3)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 bg-frog-green/10 text-frog-green text-xs font-bold group-hover:bg-frog-green group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                      WhatsApp
                    </div>
                    <span className="w-10 h-10 rounded-full bg-frog-green/10 text-frog-green flex items-center justify-center text-sm font-bold group-hover:bg-frog-green group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      →
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
