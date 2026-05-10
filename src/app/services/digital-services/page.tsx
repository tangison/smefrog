'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe,
  Code,
  Layout,
  Mail,
  Palette,
  Settings,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Monitor,
  Zap,
  Share2,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const services = [
  {
    icon: Code,
    title: 'Website Development',
    tag: 'CORE SERVICE',
    description:
      'Professional websites that establish your online presence and build credibility. From single-page sites to full business platforms.',
    items: [
      'Custom Website Design',
      'Responsive Development',
      'SEO Optimisation',
      'Content Management Setup',
      'Performance Optimisation',
    ],
    theme: 'light' as const,
  },
  {
    icon: Mail,
    title: 'Business Email Setup',
    tag: 'PROFESSIONAL',
    description:
      'Professional email setup that matches your domain and builds trust with clients. Look legitimate from the very first message.',
    items: [
      'Custom Domain Email Setup',
      'Gmail / Outlook Integration',
      'Email Signature Design',
      'Alias & Forwarding Setup',
      'Migration Assistance',
    ],
    theme: 'dark' as const,
  },
  {
    icon: Palette,
    title: 'Visual Branding',
    tag: 'IDENTITY',
    description:
      'Visual identity development that makes your startup look professional from day one. Stand out in a crowded market.',
    items: [
      'Logo Design',
      'Brand Guidelines',
      'Colour Palette Development',
      'Typography Selection',
      'Brand Asset Package',
    ],
    theme: 'light' as const,
  },
  {
    icon: Share2,
    title: 'Social Media Setup',
    tag: 'PRESENCE',
    description:
      'Complete social media infrastructure setup so your business is visible and consistent across all platforms.',
    items: [
      'Profile Creation & Optimisation',
      'Branded Templates',
      'Content Calendar Setup',
      'Analytics & Tracking',
      'Initial Content Strategy',
    ],
    theme: 'dark' as const,
  },
]

const whyDigital = [
  {
    icon: Monitor,
    stat: '94%',
    title: 'First Impressions Are Digital',
    desc: 'Your website is often the first thing potential clients see. Make it count.',
  },
  {
    icon: Zap,
    stat: '3X',
    title: 'Credibility Multiplier',
    desc: 'Businesses with a professional website are perceived 3X more credible.',
  },
  {
    icon: Sparkles,
    stat: '24/7',
    title: 'Always Open',
    desc: 'Your digital presence works around the clock, even when you\'re not.',
  },
]

const processSteps = [
  { n: '01', title: 'Share Your Vision', desc: 'Describe your business, goals, and brand aesthetic to our team.' },
  { n: '02', title: 'We Design & Build', desc: 'Gemsweb Digital creates your digital presence from the ground up.' },
  { n: '03', title: 'Review & Launch', desc: 'You review, we refine, and then we go live together.' },
  { n: '04', title: 'Ongoing Support', desc: 'Post-launch support and digital consultation available.' },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'SMEfrog — Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'SMEfrog — Digital Strategist' },
]

const GEMSWEB = {
  name: 'Gemsweb Digital',
  url: 'https://gemsweb.xyz',
  description:
    'All digital services are delivered through our partnership with Gemsweb Digital — a specialist in modern web solutions for African businesses.',
}

/* ─── Page ──────────────────────────────────────────── */
export default function DigitalServicesPage() {
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
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20">
                    Digital Services
                  </span>
                  <a
                    href={GEMSWEB.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.12em] font-bold bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] animate-pulse" />
                    In Partnership With Gemsweb Digital
                    <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Build Your
                  <br />
                  <span className="italic text-[#7AC943]">Presence.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Websites, business email, visual branding, and social media setup —
                  delivered through our partnership with Gemsweb Digital.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] animate-pulse" />
                  <span className="text-[#7AC943] text-sm font-bold">Via Gemsweb Digital — Custom Pricing</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/264853057020"
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
                  <a
                    href={GEMSWEB.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Visit Gemsweb Digital
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/service-digital.png"
                  alt="Digital Services"
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
          SERVICES — Alternating light/dark
      ═══════════════════════════════════════════════════ */}
      {services.map((service, i) => {
        const isLight = service.theme === 'light'
        return (
          <section
            key={service.title}
            className={`py-20 md:py-28 px-4 md:px-6 ${
              isLight ? 'bg-[#F2F2F2]' : 'bg-frog-black'
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
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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

                      {/* Gemsweb badge */}
                      <div className="mt-4">
                        <a
                          href={GEMSWEB.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] font-bold ${
                            isLight
                              ? 'bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 hover:bg-[#7AC943]/20'
                              : 'bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 hover:bg-[#7AC943]/20'
                          } transition-colors duration-500`}
                        >
                          <span className="w-1 h-1 rounded-full bg-[#7AC943] animate-pulse" />
                          Delivered by Gemsweb Digital
                          <ExternalLink className="w-2.5 h-2.5" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>

                    {/* Right — Items */}
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                isLight ? 'bg-[#7AC943]/10' : 'bg-[#7AC943]/15'
                              }`}
                            >
                              <ArrowRight className="w-2.5 h-2.5 text-[#7AC943]" strokeWidth={2} />
                            </span>
                            <span className={`text-sm ${isLight ? 'text-black/60' : 'text-white/60'}`}>
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
          WHY DIGITAL — Light editorial with stats
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>Why Go Digital</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your business deserves{' '}
              <span className="italic text-[#7AC943]">a digital home.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyDigital.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-[#F5F5F5] rounded-[2rem] p-8 md:p-10 h-full group hover:bg-[#7AC943]/5 transition-colors duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] flex items-center justify-center mb-5 group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-700">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <span
                    className="text-5xl font-bold text-[#7AC943] leading-none block mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.stat}
                  </span>

                  <h3
                    className="text-lg font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">{item.desc}</p>
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
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Our Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                From concept to{' '}
                <span className="italic text-[#7AC943]">live website.</span>
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
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-frog-light mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
          GEMSWEB PARTNERSHIP HIGHLIGHT — Light
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="bg-black rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#7AC943]/[0.08] blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#7AC943]/15 ring-1 ring-[#7AC943]/25 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-7 h-7 text-[#7AC943]" strokeWidth={1.5} />
                </div>

                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] animate-pulse" />
                  <span className="text-[#7AC943] text-[10px] uppercase tracking-[0.15em] font-bold">
                    In Partnership With Gemsweb Digital
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Powered by{' '}
                  <span className="italic text-[#7AC943]">Gemsweb Digital</span>
                </h3>

                <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
                  {GEMSWEB.description}
                </p>

                <a
                  href={GEMSWEB.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                >
                  Visit Gemsweb Digital
                  <span
                    className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Dark with both SMEfrog & Gemsweb
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-[#7AC943]/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7AC943]/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start your digital{' '}
                <span className="italic text-[#7AC943]">journey today.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p className="text-frog-muted text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Get online and look professional from day one. Reach out to either our SMEfrog team or Gemsweb Digital directly.
              </p>
            </ScrollReveal>
          </div>

          {/* SMEfrog Agents */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20">
                SMEfrog Team
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {AGENTS.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={0.12 + i * 0.06}>
                <a
                  href={`https://wa.me/${agent.phone}?text=${encodeURIComponent(
                    `Hi ${agent.name}! I'm interested in digital services for my business.`
                  )}`}
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

          {/* Gemsweb Digital */}
          <ScrollReveal delay={0.24}>
            <div className="text-center mb-6">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-white/5 text-white/40 border border-white/10">
                Direct Partner
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="max-w-md mx-auto">
              <a
                href={GEMSWEB.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-[#7AC943]/20 hover:bg-white/[0.06] ${easing}`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                    Digital Partner
                  </span>
                  <p className="text-white font-bold text-lg mt-0.5">{GEMSWEB.name}</p>
                  <span className="text-white/30 text-sm font-medium">
                    gemsweb.xyz
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] text-xs font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Visit Site
                  </div>
                  <span className="w-10 h-10 rounded-full bg-[#7AC943]/10 text-[#7AC943] flex items-center justify-center text-sm font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
