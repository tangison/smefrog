'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Globe,
  Code,
  Mail,
  Palette,
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
    tag: 'CORE',
    description:
      'Professional websites that build credibility. Single-page to full business platforms.',
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
    title: 'Business Email',
    tag: 'PROFESSIONAL',
    description:
      'Custom domain email that builds trust from the first message.',
    items: [
      'Custom Domain Email',
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
      'Look professional from day one. Logo, colours, and brand assets.',
    items: [
      'Logo Design',
      'Brand Guidelines',
      'Colour Palette',
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
      'Visible and consistent across all platforms from launch.',
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
    title: 'Digital First Impressions',
    desc: 'Your website is the first thing clients see. Make it count.',
  },
  {
    icon: Zap,
    stat: '3X',
    title: 'Credibility Boost',
    desc: 'Professional website = 3X more credible.',
  },
  {
    icon: Sparkles,
    stat: '24/7',
    title: 'Always On',
    desc: 'Your digital presence works when you don\'t.',
  },
]

const processSteps = [
  { n: '01', title: 'Share Your Vision', desc: 'Describe your business, goals, and brand aesthetic.' },
  { n: '02', title: 'We Build', desc: 'Gemsweb Digital creates your digital presence from scratch.' },
  { n: '03', title: 'Review & Launch', desc: 'You review, we refine, then we go live.' },
  { n: '04', title: 'Support', desc: 'Post-launch support and digital consultation available.' },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'SMEfrog — Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'SMEfrog — Digital Strategist' },
]

const GEMSWEB = {
  name: 'Gemsweb Digital',
  url: 'https://gemsweb.xyz',
  description:
    'Digital services delivered through Gemsweb Digital — specialists in modern web solutions for African businesses.',
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
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20">
                    Digital Services
                  </span>
                  <a
                    href={GEMSWEB.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Gemsweb Digital"
                    className="inline-flex items-center gap-2 min-h-[44px] rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.12em] font-bold bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                    Partnered With Gemsweb
                    <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
                  Build Your
                  <br />
                  <span className="italic text-frog-green">Presence.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Websites, email, branding, and social media — via Gemsweb Digital.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                  <span className="text-frog-green text-sm font-bold">Via Gemsweb Digital — Custom Pricing</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/264853057020"
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
                  <a
                    href={GEMSWEB.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Gemsweb Digital website"
                    className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Visit Gemsweb
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

                      {/* Gemsweb badge */}
                      <div className="mt-4">
                        <a
                          href={GEMSWEB.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit Gemsweb Digital"
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] font-bold ${
                            isLight
                              ? 'bg-frog-green/10 text-frog-green border border-frog-green/20 hover:bg-frog-green/20'
                              : 'bg-frog-green/10 text-frog-green border border-frog-green/20 hover:bg-frog-green/20'
                          } transition-colors duration-500 min-h-[44px]`}
                        >
                          <span className="w-1 h-1 rounded-full bg-frog-green animate-pulse" />
                          By Gemsweb Digital
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
                                isLight ? 'bg-frog-green/10' : 'bg-frog-green/15'
                              }`}
                            >
                              <ArrowRight className="w-2.5 h-2.5 text-frog-green" strokeWidth={2} />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
              Your business needs{' '}
              <span className="italic text-frog-green">a digital home.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyDigital.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-frog-light rounded-[2rem] p-8 md:p-10 h-full group hover:bg-frog-green/5 transition-colors duration-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green flex items-center justify-center mb-5 group-hover:bg-frog-green group-hover:text-black transition-all duration-700">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <span className="text-5xl font-bold text-frog-green leading-none block mb-3">
                    {item.stat}
                  </span>

                  <h3 className="text-lg font-bold text-black mb-2">
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
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug">
                Concept to{' '}
                <span className="italic text-frog-green">live website.</span>
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
          GEMSWEB PARTNERSHIP HIGHLIGHT — Light
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="bg-black rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-frog-green/[0.08] blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-frog-green/15 ring-1 ring-frog-green/25 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-7 h-7 text-frog-green" strokeWidth={1.5} />
                </div>

                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                  <span className="text-frog-green text-[10px] uppercase tracking-[0.15em] font-bold">
                    Partnered With Gemsweb Digital
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Powered by{' '}
                  <span className="italic text-frog-green">Gemsweb Digital</span>
                </h3>

                <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
                  {GEMSWEB.description}
                </p>

                <a
                  href={GEMSWEB.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Gemsweb Digital website"
                  className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                >
                  Visit Gemsweb
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
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Start your digital{' '}
                <span className="italic text-frog-green">journey.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p className="text-frog-muted text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Get online and look professional from day one.
              </p>
            </ScrollReveal>
          </div>

          {/* SMEfrog Agents */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20">
                SMEfrog Team
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {AGENTS.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={0.12 + i * 0.06}>
                <a
                  href={`https://wa.me/${agent.phone}?text=${encodeURIComponent(
                    `Hi ${agent.name}! I'm interested in digital services.`
                  )}`}
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
                aria-label="Visit Gemsweb Digital website"
                className={`group flex items-center justify-between min-h-[44px] p-6 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-frog-green/20 hover:bg-white/[0.06] ${easing}`}
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
                  <div className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 bg-frog-green/10 text-frog-green text-xs font-bold group-hover:bg-frog-green group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Visit
                  </div>
                  <span className="w-10 h-10 rounded-full bg-frog-green/10 text-frog-green flex items-center justify-center text-sm font-bold group-hover:bg-frog-green group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
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
