'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Check, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const trustItems = ['100% Remote', '7–10 Day Turnaround', 'All BIPA Filings Included', '2X Cheaper Than Market Average']

const services = [
  { title: 'Business Registration', desc: 'Simple, compliant company setup.', span: 'md:col-span-7', items: ['CC Registration', 'Pty Ltd Registration', 'Name Reservation', 'BIPA Filings', 'BO Declaration', 'Digital Certificates', 'Bank-Ready Documents'] },
  { title: 'Startup Support', desc: 'Helping founders launch professionally.', span: 'md:col-span-5', items: ['Business Plans', 'Company Profiles', 'Pitch Decks', 'Funding Documents', 'Startup Consultation'] },
  { title: 'Business Documentation', desc: 'Professional internal business systems.', span: 'md:col-span-5', items: ['Company Policies', 'Contracts', 'Templates', 'HR Documents', 'Compliance Documents', 'Proposal Drafting'] },
  { title: 'Digital Services', desc: 'Modern tools for modern founders.', span: 'md:col-span-7', badge: 'In Partnership With Gemsweb Digital', items: ['Website Development', 'Landing Pages', 'Business Emails', 'Branding Support', 'Digital Setup'] },
]

const pricingCards = [
  { tier: 'BASIC', price: 'N$800', sub: 'CC Registration', features: 4 },
  { tier: 'FULL', price: 'N$1,750', sub: 'CC Registration', features: 5, featured: true },
  { tier: 'SCALE UP', price: 'N$3,500', sub: 'Pty Ltd Registration', features: 8 },
]

const values = [
  { title: '2X Cheaper', body: 'Lean digital systems deliver the same professional services at a fraction of the cost.' },
  { title: 'Fully Remote', body: 'Everything handled online through WhatsApp and email. No office visits required.' },
  { title: 'Built for Startups', body: 'We serve young entrepreneurs, side hustlers, small businesses, and freelancers.' },
  { title: '7–10 Day Turnaround', body: 'Most registrations completed within 7–10 working days depending on BIPA processing.' },
]

const steps = [
  { n: '01', title: 'Contact Us', desc: 'Message us on WhatsApp.' },
  { n: '02', title: 'Send Your Details', desc: 'We collect the required registration information.' },
  { n: '03', title: 'We Handle Everything', desc: 'Compliance, forms, filings, and submissions.' },
  { n: '04', title: 'Receive Your Documents', desc: 'Delivered digitally and ready for business.' },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
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
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Mesh gradients */}
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-frog-green/[0.07] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-8%] w-[450px] h-[450px] bg-frog-dark/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="py-32 md:py-40 px-4 md:px-6 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left — Copy */}
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                <Eyebrow>Namibia&apos;s Startup Partner</Eyebrow>
              </motion.span>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-frog-light leading-[0.95] tracking-tight">
                {['Jump', 'Into', 'Business.'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, delay: 0.25 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                    className="inline-block mr-3 md:mr-5"
                  >
                    {word === 'Business.' ? <>Business<span className="text-frog-green">.</span></> : word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.32, 0.72, 0, 1] }}
                className="text-lg md:text-xl text-frog-muted max-w-2xl mt-6 leading-relaxed"
              >
                Simple. Fast. Affordable startup support for Namibian entrepreneurs.
                We help startups register, launch, structure, and grow — without the
                expensive consultant fees, confusing paperwork, or slow turnaround times.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                <Link href="/pricing" className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  Register Your Business
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
                <CtaButton href="https://wa.me/264813411522">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  Chat on WhatsApp
                </CtaButton>
              </motion.div>
            </div>

            {/* Right — Brand ID */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-2 rounded-[2.5rem]">
                <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden relative">
                  <img src="/brand-id.png" alt="SMEfrog Brand" className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-frog-black/90 via-frog-black/50 to-transparent p-6 pt-16">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {[{ v: '100%', l: 'Remote' }, { v: '7–10', l: 'Days' }, { v: '2X', l: 'Cheaper' }].map((s) => (
                        <div key={s.l}>
                          <p className="text-frog-green font-heading font-bold text-sm">{s.v}</p>
                          <p className="text-frog-muted text-[10px] uppercase tracking-wider">{s.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-frog-muted/40 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}>
            <ChevronDown className="w-4 h-4 text-frog-muted/40" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <ScrollReveal>
        <div className="border-y border-frog-hairline bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-8 gap-3">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-frog-muted">
                  <span className="w-5 h-5 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══ SERVICES BENTO ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow>What We Do</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-12 md:mb-16">
              Services Built for Startups
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06} className={s.span}>
                <DoubleBezel className="h-full">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-1">{s.title}</h3>
                  {s.badge && (
                    <a href="https://gemsweb.xyz" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4 mt-1 hover:bg-frog-green/20 transition-colors">
                      {s.badge}
                    </a>
                  )}
                  <p className="text-frog-muted text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-frog-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                View all services <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PRICING TEASER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light">
                Startup-Friendly Pricing
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-frog-green">{pkg.tier}</span>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-frog-light mt-3">{pkg.price}</p>
                  <p className="text-frog-muted text-sm mt-1">{pkg.sub}</p>
                  <p className="text-frog-muted/40 text-xs mt-2">{pkg.features} features included</p>
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

      {/* ═══ WHY SMEFROG ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow>Why SMEfrog</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light max-w-3xl leading-snug mb-4">
              Starting a business shouldn&apos;t cost more than the business itself.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="w-1 h-12 bg-frog-green/30 rounded-full mb-12 md:mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <DoubleBezel className="h-full">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-2">{v.title}</h3>
                  <p className="text-frog-muted text-sm leading-relaxed">{v.body}</p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow>How It Works</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light mb-12">
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <DoubleBezel className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-heading font-bold flex items-center justify-center text-sm mb-4">
                    {step.n}
                  </div>
                  <h3 className="text-base font-heading font-bold text-frog-light mb-1">{step.title}</h3>
                  <p className="text-frog-muted text-sm leading-relaxed">{step.desc}</p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER MESSAGE ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
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

      {/* ═══ MASSIVE CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-4">
              Ready to Jump Into Business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8">
              Get started today with affordable, remote startup support.
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
