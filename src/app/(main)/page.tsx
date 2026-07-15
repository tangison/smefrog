'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Check, Phone, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { HeroSlideshow } from '@/components/hero-slideshow'
import { WhatsAppTestimonials } from '@/components/whatsapp-testimonials'
import {
  waLink,
  TRUST_ITEMS,
  pricingCards,
  STEPS,
  FAQ_ITEMS,
  PHONE_MAIN,
  PHONE_MAIN_TEL,
} from '@/lib/config'

/* ─── Services Data (3 core services only) ─────────── */
const services = [
  {
    title: 'Business Registration',
    tag: 'POPULAR',
    desc: 'Remote BIPA filing. Bank-ready documents. From N$1,000.',
    price: 'From N$1,000',
    img: '/hero/hero-2.webp',
    theme: 'dark' as const,
    span: 'md:col-span-7',
    href: '/services/business-registration',
  },
  {
    title: 'Compliance Services',
    tag: 'RECURRING',
    desc: 'Annual returns, BO updates, and regulatory filings. Registration opens the door; compliance keeps it open.',
    price: 'Custom',
    img: '/images/compliance-checklist.jpeg',
    theme: 'light' as const,
    span: 'md:col-span-5',
    href: '/services/compliance-services',
  },
  {
    title: 'Business Documents',
    tag: 'LEGAL',
    desc: 'Contracts, policies, and internal docs you can use right away.',
    price: 'Custom',
    img: '/images/documents-laptop.jpeg',
    theme: 'dark' as const,
    span: 'md:col-span-5',
    href: '/services/business-documents',
  },
]

/* ─── Home Page ────────────────────────────────────── */
export default function HomePage() {

  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <HeroSlideshow />

        {/* Ambient green glow behind headline */}

        <div className="relative z-20 py-24 md:py-32 px-4 md:px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Status pill */}
                <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-frog-green animate-pulse" />
                  <span className="text-frog-green text-[10px] font-black uppercase tracking-[0.35em]">Now Filing 2025 Compliance</span>
                </div>

                <h1 className="text-6xl md:text-[110px] lg:text-[140px] font-black text-white leading-[0.85] tracking-tighter mb-10">
                  Register Your<br />
                  Business<span className="text-frog-green">.</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/50 max-w-2xl mb-14 font-bold leading-relaxed">
                  Get your CC or PTY LTD registered without leaving home. BIPA filing included. From N$1,000.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={waLink('home')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Register now on WhatsApp"
                    className="group inline-flex items-center gap-3 bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 min-h-[44px]"
                  >
                    Register My Business
                    <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-white/10 active:scale-95 transition-all duration-300 min-h-[44px]"
                  >
                    View Packages
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP ═══ */}
      <section className="bg-frog-light py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
              {TRUST_ITEMS.map((text, i) => (
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

      {/* ═══ 3. SERVICES BENTO (3 core services) ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <ScrollReveal><Eyebrow light>Services</Eyebrow></ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <ScrollReveal delay={0.06}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter italic">
                  What We Do.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-right">
                  <div className="text-5xl md:text-6xl font-black text-frog-green">2X</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">Cheaper than market</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card — Business Registration */}
            <ScrollReveal className="md:col-span-7">
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-black group cursor-pointer"
              >
                <Image src={services[0].img} alt="Business Registration" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <span className="text-frog-green text-xs font-black uppercase tracking-widest mb-4">{services[0].tag}</span>
                  <h3 className="text-white text-4xl md:text-5xl font-black mb-4 leading-none">Business<br />Registration</h3>
                  <p className="text-white/50 max-w-xs mb-6 text-sm">{services[0].desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-frog-green font-black">{services[0].price}</span>
                    <Link href={services[0].href} aria-label="View Business Registration" className="w-12 h-12 min-h-[44px] min-w-[44px] rounded-full bg-frog-green flex items-center justify-center text-black font-bold hover:scale-110 transition-transform duration-500">→</Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Right stack — Compliance + Documents */}
            <div className="md:col-span-5 space-y-6">
              {services.slice(1).map((s, i) => (
                <ScrollReveal key={s.title} delay={0.06 * (i + 1)}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`glow-card-hover p-8 md:p-10 rounded-[2rem] h-[260px] md:h-[285px] flex flex-col justify-between cursor-pointer ${
                      s.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black shadow-xl shadow-black/5'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${s.theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{s.tag}</span>
                      <h3 className="text-2xl md:text-3xl font-black mt-2">{s.title}</h3>
                      <p className={`text-sm mt-2 ${s.theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>{s.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className={`text-xs font-black uppercase tracking-widest ${s.theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>Learn More</span>
                      <Link href={s.href} aria-label={`View ${s.title}`} className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center ${s.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>→</Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-black/40 text-sm font-bold uppercase tracking-widest hover:text-frog-green transition-colors duration-500">
                All services <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 4. HOW IT WORKS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow light>How It Works</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-12 md:mb-16">
              Four Steps.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <div className="bg-frog-light rounded-[2rem] p-6 md:p-8 h-full group hover:bg-frog-green/5 transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-black flex items-center justify-center text-sm mb-5 group-hover:bg-frog-green group-hover:text-black transition-all duration-700">
                    {step.n}
                  </div>
                  <h3 className="text-base font-black text-black mb-2">{step.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. PRICING TEASER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-black to-frog-dark pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-frog-light">
                No Hidden Fees.
              </h2>
              <p className="text-frog-muted mt-4">From N$1,000. No consultant markups.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="text-center">
                  <div className="flex flex-col h-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-frog-green">{pkg.tier}</span>
                    <p className="text-4xl font-black text-frog-light mt-3">{pkg.price}</p>
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
                      href={waLink('pricing')}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Choose ${pkg.tier} package`}
                      className={`mt-6 w-full py-3 rounded-full font-black text-sm transition-all duration-700 inline-flex items-center justify-center min-h-[48px] touch-manipulation ${
                        pkg.featured
                          ? 'bg-frog-green text-black hover:brightness-110'
                          : 'ring-1 ring-frog-green/30 text-frog-green hover:bg-frog-green/10'
                      }`}
                    >
                      {pkg.btn}
                    </a>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-500">
                Full pricing <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 6. WHATSAPP TESTIMONIALS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow light>Reviews</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Real Conversations.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/40 text-lg font-bold mb-12 md:mb-16 max-w-xl">
              Verified WhatsApp reviews from our clients.
            </p>
          </ScrollReveal>

          <WhatsAppTestimonials />
        </div>
      </section>

      {/* ═══ 7. ACADEMY ═══ */}
      <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style={{ background: '#0a1a0a' }}>
        {/* Subtle frog watermark */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url(/upload/Icon.png)', backgroundSize: '300px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Education</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl font-black text-frog-light mb-4">
              Free Business <span className="text-frog-green">Education</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              SMEfrog Academy: 64 free modules covering registration, compliance, and Namibian business fundamentals. No login required.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-frog-green">64</p>
                <p className="text-frog-muted text-xs uppercase tracking-widest font-bold mt-1">Modules</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-frog-green">3</p>
                <p className="text-frog-muted text-xs uppercase tracking-widest font-bold mt-1">Learning Tracks</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <Link
              href="/academy"
              className="group inline-flex items-center gap-3 bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 min-h-[48px] touch-manipulation"
              aria-label="Go to SMEfrog Academy"
            >
              Go to Academy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 8. FAQ ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow light>FAQ</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-black text-black">
                Questions?
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="bg-frog-light rounded-2xl p-6 md:p-8 group hover:bg-frog-green/5 transition-colors duration-500">
                  <h4 className="text-black font-black text-base mb-2">{item.q}</h4>
                  <p className="text-black/50 text-sm leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-black/40 text-sm font-bold uppercase tracking-widest hover:text-frog-green transition-colors duration-500">
                All FAQs <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 8. CONTACT BAR ═══ */}
      <section className="bg-white py-20 px-4 md:px-6 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight mb-4">Questions? Chat with us.</h2>
            <p className="text-black/40 font-bold">Response time: Under 5 minutes.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_MAIN_TEL}
              className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-frog-green hover:text-black transition-all duration-300 min-h-[44px]"
              aria-label="Call main business line"
            >
              <Phone className="w-4 h-4 opacity-50" />
              {PHONE_MAIN}
            </a>
            <a
              href={waLink('contact')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-frog-green text-black px-8 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-frog-green/90 transition-all duration-300 min-h-[44px]"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 opacity-70" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══ REGISTRATION CTA ═══ */}
      <section className="py-24 md:py-32 bg-frog-black relative overflow-hidden" id="registration-section">
        {/* Ambient green glow */}

        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollReveal>
            <Eyebrow>Register</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-6 italic">
              Let&apos;s<br />move.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg md:text-xl font-bold max-w-xl mx-auto mb-10">
              Register your business in 4 steps. 100% remote. From N$1,000.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waLink('registration')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-frog-green text-black font-black rounded-full px-12 py-6 text-lg tracking-widest uppercase hover:shadow-[0_0_50px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 min-h-[44px]"
              aria-label="Register now on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Register My Business
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden bg-frog-light">
        {/* Ambient green glow */}

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter mb-8 italic">
              Stop waiting.<br />Start.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-black/40 text-lg md:text-xl font-bold mb-10 max-w-xl mx-auto">
              Your business registration handled over WhatsApp. From N$1,000.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink('home')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register now on WhatsApp"
                className="group inline-flex items-center gap-3 bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Us on WhatsApp
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 bg-black text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-frog-green hover:text-black transition-all duration-300 min-h-[44px]"
              >
                View Packages
                <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
