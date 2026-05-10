'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Check, Zap, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'

/* ─── Data ─────────────────────────────────────────── */
const trustItems = ['100% Remote', '7–10 Day Turnaround', 'Bank-Ready Documents', 'BIPA Filing Included', '2X Cheaper Than Market']

const editorialServices = [
  {
    title: 'CC Registration',
    tag: 'MOST POPULAR',
    desc: 'The standard for Namibian SMEs. Fully remote filing with BIPA compliance handled.',
    price: 'From N$800',
    img: '/service-registration.png',
    theme: 'dark' as const,
    span: 'md:col-span-7',
  },
  {
    title: 'Startup Support',
    tag: 'GROWTH',
    desc: 'Business plans, pitch decks, and company profiles that win investors.',
    price: 'Custom',
    img: '/service-startup.png',
    theme: 'light' as const,
    span: 'md:col-span-5',
  },
  {
    title: 'Business Documents',
    tag: 'LEGAL',
    desc: 'Professional contracts, policies, and internal docs ready for immediate use.',
    price: 'Custom',
    img: '/service-documents.png',
    theme: 'dark' as const,
    span: 'md:col-span-5',
  },
  {
    title: 'Digital Services',
    tag: 'DIGITAL',
    desc: 'Premium website development, business email setup, and visual branding.',
    price: 'Via Gemsweb',
    img: '/service-digital.png',
    theme: 'light' as const,
    span: 'md:col-span-7',
    badge: { label: 'In Partnership With Gemsweb Digital', url: 'https://gemsweb.xyz' },
  },
]

const pricingCards = [
  { tier: 'BASIC', price: 'N$800', sub: 'CC Registration', features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'] },
  { tier: 'ADVANCED', price: 'N$1,200', sub: 'CC Registration', features: ['Basic + Company Profile', 'Domain Registration', 'BO Filing'], featured: true },
  { tier: 'FULL', price: 'N$1,750', sub: 'CC Registration', features: ['Advanced + Business Plan', 'Social Setup', 'Pitch Deck Template'] },
]

const steps = [
  { n: '01', title: 'Choose Your Package', desc: 'Select the registration package that fits your needs.', icon: Zap },
  { n: '02', title: 'Submit Your Information', desc: 'We collect the required registration details remotely.', icon: Globe },
  { n: '03', title: 'We File Everything', desc: 'Compliance, forms, filings, and submissions — handled.', icon: Shield },
  { n: '04', title: 'Receive Your Documents', desc: 'Delivered digitally and ready for business.', icon: Check },
]

const values = [
  { title: '2X Cheaper', body: 'Lean digital systems deliver the same professional services at a fraction of the cost.' },
  { title: 'Fully Remote', body: 'Everything handled online through WhatsApp and email. No office visits required.' },
  { title: 'Built for Startups', body: 'We serve young entrepreneurs, side hustlers, small businesses, and freelancers.' },
  { title: '7–10 Day Turnaround', body: 'Most registrations completed within 7–10 working days depending on BIPA processing.' },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium mb-4 ${
      light
        ? 'bg-black/5 text-black/60 border border-black/10'
        : 'bg-frog-green/10 text-frog-green border border-frog-green/20'
    }`}>
      {children}
    </span>
  )
}

function DoubleBezel({ children, className = '', highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  return (
    <div className={`bg-frog-shell ring-1 ${highlight ? 'ring-frog-green/25' : 'ring-frog-hairline'} p-1.5 rounded-[2rem] ${className}`}>
      <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
        {children}
      </div>
    </div>
  )
}

function CtaButton({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  const cls = primary
    ? 'group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
    : 'group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <span className={`w-7 h-7 rounded-full flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${primary ? 'bg-black/10' : 'bg-frog-green/10'}`}>
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
      </span>
    </a>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — Bottom-left editorial over cinematic background ═══ */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        {/* Cinematic background layers */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-frog-black via-frog-black/60 to-transparent z-10" />
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-frog-green/10 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-frog-dark/40 blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-20 py-24 md:py-32 px-4 md:px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-frog-green" />
                  <span className="text-frog-green text-xs font-black uppercase tracking-[0.3em]">Namibia · 100% Remote</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-heading font-bold text-frog-light leading-[0.9] tracking-tight mb-8">
                  {['Start your', 'business', 'remotely.'].map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                      className="inline-block mr-3 md:mr-5"
                    >
                      {word === 'remotely.' ? (
                        <>remotely<span className="text-frog-green italic">.</span></>
                      ) : word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="text-lg md:text-xl text-frog-muted/70 max-w-xl mb-10 leading-relaxed font-medium"
                >
                  Fast BIPA registration without the industry markup. No hassle. No high fees. Just the jump you need.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link href="/pricing" className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Register Your CC
                    <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </Link>
                  <CtaButton href="https://wa.me/264813411522">
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Chat on WhatsApp
                  </CtaButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP — Light premium surface ═══ */}
      <section className="bg-[#FBFBFB] py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
              {trustItems.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                  <span className="text-black/50 font-bold text-[11px] uppercase tracking-[0.15em]">{text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ EDITORIAL SERVICES BENTO ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <ScrollReveal>
              <Eyebrow light>What We Do</Eyebrow>
            </ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <ScrollReveal delay={0.06}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black tracking-tighter italic">
                  Register Smarter.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-right">
                  <div className="text-5xl md:text-6xl font-heading font-black text-frog-green">2X</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold">Cheaper than market average</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card — CC Registration */}
            <ScrollReveal className="md:col-span-7">
              <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-black group cursor-pointer"
              >
                <Image src={editorialServices[0].img} alt="CC Registration" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <span className="text-frog-green text-xs font-black uppercase tracking-widest mb-4">{editorialServices[0].tag}</span>
                  <h3 className="text-white text-4xl md:text-5xl font-heading font-black mb-4 leading-none">CC<br />Registration</h3>
                  <p className="text-white/40 max-w-xs mb-6 text-sm">{editorialServices[0].desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-frog-green font-heading font-bold">{editorialServices[0].price}</span>
                    <Link href="/services/business-registration" className="w-12 h-12 rounded-full bg-frog-green flex items-center justify-center text-black font-bold hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Right stack — Startup Support + Business Documents */}
            <div className="md:col-span-5 space-y-6">
              {editorialServices.slice(1, 3).map((s, i) => (
                <ScrollReveal key={s.title} delay={0.06 * (i + 1)}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`p-8 md:p-10 rounded-[2rem] h-[260px] md:h-[285px] flex flex-col justify-between cursor-pointer ${
                      s.theme === 'dark'
                        ? 'bg-black text-white'
                        : 'bg-white text-black shadow-xl shadow-black/5'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${s.theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>
                        {s.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-heading font-black mt-2">{s.title}</h3>
                      <p className={`text-sm mt-2 ${s.theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{s.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className={`text-xs font-black uppercase tracking-widest ${s.theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                        Learn More
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        s.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                      }`}>
                        →
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom full-width — Digital Services */}
            <ScrollReveal className="md:col-span-12">
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-[280px] md:h-[320px] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-black/5 group cursor-pointer"
              >
                <Image src={editorialServices[3].img} alt="Digital Services" fill className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">{editorialServices[3].tag}</span>
                      <a
                        href={editorialServices[3].badge?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 hover:bg-frog-green/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {editorialServices[3].badge?.label} ↗
                      </a>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-black text-black">Digital Services</h3>
                    <p className="text-black/40 text-sm mt-2 max-w-md">{editorialServices[3].desc}</p>
                  </div>
                  <Link href="/services/digital-services" className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold shrink-0 hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    →
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-black/40 text-sm font-bold uppercase tracking-widest hover:text-frog-green transition-colors duration-500">
                View all services <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Soft light textured ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>How It Works</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-12 md:mb-16">
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] rounded-[2rem] p-6 md:p-8 h-full group hover:bg-frog-green/5 transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-heading font-bold flex items-center justify-center text-sm mb-5 group-hover:bg-frog-green group-hover:text-frog-black transition-all duration-700">
                    {step.n}
                  </div>
                  <h3 className="text-base font-heading font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING TEASER — Dark cinematic ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-black to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light">
                Transparent <span className="italic text-frog-green">Structure.</span>
              </h2>
              <p className="text-frog-muted mt-4">No hidden fees. No consultant markups. Just results.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="text-center">
                  <div className="flex flex-col h-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-frog-green">{pkg.tier}</span>
                    <p className="text-4xl font-heading font-bold text-frog-light mt-3">{pkg.price}</p>
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
                      href="https://wa.me/264813411522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all duration-700 inline-flex items-center justify-center ${
                        pkg.featured
                          ? 'bg-frog-green text-frog-black hover:brightness-110'
                          : 'ring-1 ring-frog-green/30 text-frog-green hover:bg-frog-green/10'
                      }`}
                    >
                      Choose {pkg.tier.charAt(0) + pkg.tier.slice(1).toLowerCase()}
                    </a>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                View full pricing <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHY SMEFROG — Warm light minimal ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Why SMEfrog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black max-w-3xl leading-snug mb-4">
              Starting a business shouldn&apos;t cost more than the business itself.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="w-1 h-12 bg-frog-green/30 rounded-full mb-12 md:mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="bg-white rounded-[2rem] p-6 md:p-8 h-full shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-black mb-2">{v.title}</h3>
                  <p className="text-black/40 text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER MESSAGE — Dark editorial ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Eyebrow>Our Mission</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-frog-light leading-snug">
              &ldquo;Starting a business should not cost more than the business itself.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base mt-6 max-w-xl mx-auto leading-relaxed">
              SMEfrog exists to remove friction for entrepreneurs. Help more Namibian founders become formal businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA — Deep dark cinematic ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-frog-light mb-4 italic">
              Start smart.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-10">
              Register your business remotely today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/pricing" className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                Register Your Business
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Link>
              <CtaButton href="https://wa.me/264813411522">
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
              </CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
