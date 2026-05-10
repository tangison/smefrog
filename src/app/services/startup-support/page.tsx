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
      'Professional business plans designed for funding applications, strategic planning, and investor presentations. We craft clear, structured documents that communicate your vision effectively.',
    items: [
      'Executive Summary Development',
      'Market Analysis & Research',
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
      'Investor-ready presentations that tell your startup story compellingly. Structured to capture attention and communicate value clearly.',
    items: [
      'Problem & Solution Framing',
      'Market Opportunity Slides',
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
      'Polished company presentations that establish credibility and professionalism. Perfect for client meetings, partnership proposals, and business development.',
    items: [
      'Company Overview & History',
      'Service/Product Descriptions',
      'Team & Leadership Profiles',
      'Mission & Vision Statements',
      'Branded Document Design',
    ],
    theme: 'light' as const,
  },
  {
    icon: Wallet,
    title: 'Investor-Ready Docs',
    tag: 'FUNDING',
    description:
      'Documents and preparation for funding applications. We help you get your paperwork in order so you can focus on pitching your business.',
    items: [
      'Funding Application Support',
      'Document Preparation',
      'Compliance Verification',
      'Financial Document Review',
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
      'You have an idea but need the structure and documents to make it real. We help you build the foundation.',
    features: ['Business Plan', 'Company Profile', 'Registration Guidance'],
  },
  {
    icon: Target,
    title: 'Funding Applicants',
    description:
      'You need professional documents to apply for grants, loans, or investor capital. We prepare you for the ask.',
    features: ['Pitch Deck', 'Financial Projections', 'Funding Applications'],
  },
  {
    icon: TrendingUp,
    title: 'Growing Businesses',
    description:
      'You\'re scaling and need polished materials for partnerships, proposals, and new markets.',
    features: ['Company Profile', 'Strategic Plan', 'Partnership Proposals'],
  },
  {
    icon: Lightbulb,
    title: 'Side Hustle Professionals',
    description:
      'You\'re transitioning from informal to formal. Get the documents that make your side business legitimate.',
    features: ['Business Plan', 'Registration', 'Basic Profile'],
  },
]

const testimonials = [
  {
    name: 'David M.',
    business: 'Windhoek Tech Solutions',
    quote:
      'The pitch deck SMEfrog created helped me secure seed funding. Professional quality at a fraction of agency prices.',
  },
  {
    name: 'Sarah K.',
    business: 'Okambogo Farming CC',
    quote:
      'My business plan was accepted by DBN on the first submission. That never happens — but it did.',
  },
  {
    name: 'Petrus N.',
    business: 'Oshikandi Trading',
    quote:
      'They turned my rough notes into a company profile that actually impresses clients. Game changer.',
  },
]

const processSteps = [
  { n: '01', title: 'Tell Us Your Vision', desc: 'Share your business idea, goals, and target audience with our team.' },
  { n: '02', title: 'We Draft & Design', desc: 'Our team crafts professional documents tailored to your specific needs.' },
  { n: '03', title: 'Review & Refine', desc: 'You review drafts and we iterate until everything is perfect.' },
  { n: '04', title: 'Deliver & Support', desc: 'Receive your polished documents plus ongoing WhatsApp support.' },
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
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E3A2F]/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-6">
                  Startup Support
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Launch With
                  <br />
                  <span className="italic text-[#7AC943]">Structure.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Business plans, pitch decks, company profiles, and investor-ready
                  documents — crafted for Namibian entrepreneurs ready to make their move.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] animate-pulse" />
                  <span className="text-[#7AC943] text-sm font-bold">Custom Pricing — Tailored to Your Needs</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Get a Quote
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/services/business-registration"
                    className={`inline-flex items-center gap-2 ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
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
              isLight ? 'bg-[#F2F2F2]' : 'bg-frog-black'
            } ${i > 0 ? '' : ''}`}
          >
            <div className="max-w-[1400px] mx-auto">
              <ScrollReveal>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`rounded-[2rem] p-8 md:p-12 h-full ${
                    isLight
                      ? 'bg-white shadow-sm ring-1 ring-black/[0.04]'
                      : 'bg-[#0A0A0A] ring-1 ring-white/5'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                    {/* Left */}
                    <div className="lg:w-2/5 shrink-0">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            isLight
                              ? 'bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20'
                              : 'bg-[#7AC943]/15 ring-1 ring-[#7AC943]/25'
                          }`}
                        >
                          <service.icon className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                            isLight ? 'text-[#7AC943]' : 'text-[#7AC943]/80'
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${
                          isLight ? 'text-[#1A1A1A]' : 'text-white'
                        }`}
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                                  ? 'bg-[#7AC943]/10'
                                  : 'bg-[#7AC943]/15'
                              }`}
                            >
                              <ArrowRight className="w-2.5 h-2.5 text-[#7AC943]" strokeWidth={2} />
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
            <Eyebrow light>Who Is This For</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Built for every stage{' '}
              <span className="italic text-[#7AC943]">of the journey.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-[#F5F5F5] rounded-[2rem] p-8 md:p-10 h-full group hover:bg-[#7AC943]/5 transition-colors duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] flex items-center justify-center mb-5 group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-700">
                    <uc.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-xl font-bold text-[#1A1A1A] mb-3"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed mb-5">
                    {uc.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {uc.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-full bg-[#7AC943]/10 text-[#7AC943] text-xs font-bold"
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
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Our Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                From idea to{' '}
                <span className="italic text-[#7AC943]">investor-ready.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel highlight={i === 0}>
                  <div className="mb-4">
                    <span
                      className="text-4xl font-bold text-[#7AC943] leading-none"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-frog-light mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
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
              They launched.{' '}
              <span className="italic text-[#7AC943]">So can you.</span>
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
          CUSTOM PRICING NOTE — Dark editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-[#7AC943]/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7AC943]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Custom pricing.{' '}
              <span className="italic text-[#7AC943]">Tailored scope.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Every startup is different. We scope your project and quote accordingly — no
              cookie-cutter packages, just what you actually need.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Get a Custom Quote
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
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
                Talk to Us
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Pick your agent.{' '}
                <span className="italic text-[#7AC943]">Start now.</span>
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
                  className={`group flex items-center justify-between p-6 rounded-2xl bg-frog-shell ring-1 ring-frog-hairline hover:ring-[#7AC943]/20 hover:bg-white/[0.04] ${easing}`}
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
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] text-xs font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                      WhatsApp
                    </div>
                    <span className="w-10 h-10 rounded-full bg-[#7AC943]/10 text-[#7AC943] flex items-center justify-center text-sm font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
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
