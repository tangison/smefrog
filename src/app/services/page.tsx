'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  Rocket,
  FileText,
  Globe,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Phone,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const services = [
  {
    title: 'Business Registration',
    subtitle: 'CC & PTY LTD',
    description:
      'Fast, affordable, fully remote company registration. Name to certificate — done.',
    icon: Building2,
    href: '/services/business-registration',
    image: '/service-registration.png',
    price: 'From N$800',
    priceNote: 'CC Registration',
    items: [
      'CC Registration',
      'Pty Ltd Registration',
      'Name Reservation',
      'BIPA Filings',
      'BO Declaration',
      'Digital Certificates',
      'Bank-Ready Documents',
    ],
    accent: true,
  },
  {
    title: 'Startup Support',
    subtitle: 'Plans & Decks',
    description:
      'Business plans, pitch decks, and strategy for Namibian startups.',
    icon: Rocket,
    href: '/services/startup-support',
    image: '/service-startup.png',
    price: 'Custom',
    priceNote: 'Tailored scope',
    items: [
      'Business Plans',
      'Company Profiles',
      'Pitch Decks',
      'Funding Documents',
      'Startup Consultation',
    ],
    accent: false,
  },
  {
    title: 'Business Documents',
    subtitle: 'Contracts & Policies',
    description:
      'Policies, contracts, and compliance docs for Namibian businesses.',
    icon: FileText,
    href: '/services/business-documents',
    image: '/service-documents.png',
    price: 'Custom',
    priceNote: 'Per document',
    items: [
      'Company Policies',
      'Contracts',
      'Templates',
      'HR Documents',
      'Compliance Documents',
      'Proposal Drafting',
    ],
    accent: false,
  },
  {
    title: 'Digital Services',
    subtitle: 'Web, Email & Brand',
    description:
      'Websites, email, and branding via Gemsweb Digital.',
    icon: Globe,
    href: '/services/digital-services',
    image: '/service-digital.png',
    price: 'Via Gemsweb',
    priceNote: 'Partner services',
    badge: { label: 'Partnered With Gemsweb Digital', url: 'https://gemsweb.xyz' },
    items: [
      'Website Development',
      'Landing Pages',
      'Business Emails',
      'Branding Support',
      'Digital Setup',
    ],
    accent: false,
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

/* ─── Page ──────────────────────────────────────────── */
export default function ServicesPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  const arrowEasing =
    'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — DARK, cinematic
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
              Services
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
              Ready to
              <br />
              <span className="italic text-frog-green">Launch.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Everything to take your business from idea to live.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start registration on WhatsApp"
                className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Start
                <span
                  className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
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
      </section>

      {/* ═══════════════════════════════════════════════════
          BENTO GRID — LIGHT editorial background
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          {/* Section intro */}
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
                Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-2xl">
                Four services.{' '}
                <span className="italic text-frog-green">One goal.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5">
            {/* ── Business Registration — Large Card (col-span-7, row-span-2) ── */}
            <ScrollReveal className="col-span-12 md:col-span-7 md:row-span-2" delay={0}>
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[520px] md:min-h-[700px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[0].href} className="absolute inset-0 z-10" aria-label={services[0].title}>
                  <span className="sr-only">{services[0].title}</span>
                </Link>

                {/* Image */}
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-frog-green/15 backdrop-blur-sm ring-1 ring-frog-green/30 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green">
                        {services[0].subtitle}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                    {services[0].title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    {services[0].description}
                  </p>

                  {/* Price badge */}
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/15 backdrop-blur-sm border border-frog-green/25 mb-6 w-fit">
                    <span className="text-frog-green text-sm font-bold">
                      {services[0].price}
                    </span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-white/40 text-xs">{services[0].priceNote}</span>
                  </div>

                  {/* Items */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {services[0].items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-white/55 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-frog-green text-sm font-bold group-hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Explore
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Startup Support — Top Right (col-span-5) ── */}
            <ScrollReveal className="col-span-12 md:col-span-5" delay={0.06}>
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[300px] md:min-h-[340px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[1].href} className="absolute inset-0 z-10" aria-label={services[1].title}>
                  <span className="sr-only">{services[1].title}</span>
                </Link>

                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-frog-green/15 backdrop-blur-sm ring-1 ring-frog-green/25 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green/80">
                      {services[1].subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {services[1].title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">
                    {services[1].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {services[1].items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] font-medium tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                      {services[1].items.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/40 text-[10px] md:text-[11px]">
                          +{services[1].items.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-frog-green text-xs font-bold group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      More
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Business Documents — Bottom Right (col-span-5) ── */}
            <ScrollReveal className="col-span-12 md:col-span-5" delay={0.12}>
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[300px] md:min-h-[340px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[2].href} className="absolute inset-0 z-10" aria-label={services[2].title}>
                  <span className="sr-only">{services[2].title}</span>
                </Link>

                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-frog-green/15 backdrop-blur-sm ring-1 ring-frog-green/25 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green/80">
                      {services[2].subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {services[2].title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">
                    {services[2].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {services[2].items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] font-medium tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                      {services[2].items.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/40 text-[10px] md:text-[11px]">
                          +{services[2].items.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-frog-green text-xs font-bold group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      More
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Digital Services — Full Width (col-span-12) ── */}
            <ScrollReveal className="col-span-12" delay={0.18}>
              <motion.div
                whileHover={{ scale: 0.998 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative min-h-[360px] md:min-h-[440px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[3].href} className="absolute inset-0 z-10" aria-label={services[3].title}>
                  <span className="sr-only">{services[3].title}</span>
                </Link>

                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 lg:p-12 max-w-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-frog-green/15 backdrop-blur-sm ring-1 ring-frog-green/30 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-frog-green/80">
                      {services[3].subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                    {services[3].title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5">
                    {services[3].description}
                  </p>

                  {/* Gemsweb Digital Badge */}
                  {services[3].badge && (
                    <a
                      href={services[3].badge.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Gemsweb Digital"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.12em] font-bold bg-frog-green/15 text-frog-green border border-frog-green/25 mb-5 w-fit hover:bg-frog-green/25 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-sm z-20 relative min-h-[44px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                      {services[3].badge.label}
                    </a>
                  )}

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {services[3].items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-xs font-medium tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-frog-green text-sm font-bold group-hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Explore
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE SMEFROG — DARK with cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        {/* Ambient orb */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Why Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug mb-4">
              Cheaper.{' '}
              <span className="italic text-frog-green">Fair.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-xl mb-12 md:mb-16 leading-relaxed">
              No overhead. Savings passed to you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                number: '2X',
                label: 'Cheaper',
                desc: 'Same service. Half the price.',
              },
              {
                number: '100%',
                label: 'Remote',
                desc: 'WhatsApp & email. No office visits.',
              },
              {
                number: '7–10',
                label: 'Days',
                desc: 'Most registrations done in 7–10 working days.',
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <DoubleBezel className="h-full">
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-bold text-frog-green leading-none">
                      {stat.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed">{stat.desc}</p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — DARK cinematic with gradient
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Need something{' '}
              <span className="italic text-frog-green">custom?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8 leading-relaxed">
              We scope and quote based on what you need. Nothing more.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat Now
              <span
                className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          QUICK CONTACT BAR — DARK with agent cards
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
            {agents.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={i * 0.06}>
                <a
                  href={agent.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with ${agent.name} on WhatsApp`}
                  className={`group flex items-center justify-between min-h-[44px] p-6 rounded-2xl bg-frog-shell ring-1 ring-frog-hairline hover:ring-frog-green/20 hover:bg-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                      {agent.role}
                    </span>
                    <p className="text-white font-bold text-lg mt-0.5">{agent.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-3 h-3 text-white/30" strokeWidth={1.5} />
                      <span className="text-white/30 text-sm font-medium">{agent.phone}</span>
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
