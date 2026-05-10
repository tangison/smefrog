'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Check, Zap, Globe, Shield, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

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
  { tier: 'BASIC', price: 'N$800', sub: 'CC Registration', features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'], btn: 'Choose Basic' },
  { tier: 'ADVANCED', price: 'N$1,200', sub: 'CC Registration', features: ['Basic + Company Profile', 'Domain Registration', 'BO Filing'], featured: true, btn: 'Choose Advanced' },
  { tier: 'FULL', price: 'N$1,750', sub: 'CC Registration', features: ['Advanced + Business Plan', 'Social Setup', 'Pitch Deck Template'], btn: 'Choose Full' },
]

const steps = [
  { n: '01', title: 'Choose Your Package', desc: 'Select the registration package that fits your needs.', icon: Zap },
  { n: '02', title: 'Submit Your Information', desc: 'We collect the required registration details remotely.', icon: Globe },
  { n: '03', title: 'We File Everything', desc: 'Compliance, forms, filings, and submissions — handled.', icon: Shield },
  { n: '04', title: 'Receive Your Documents', desc: 'Delivered digitally and ready for business.', icon: Check },
]

const testimonials = [
  { name: 'Maria K.', business: 'MK Cleaners CC', quote: 'Registered my CC in under 2 weeks. No office visits. No drama. Just results.' },
  { name: 'James T.', business: 'Tjiriange Logistics', quote: 'SMEfrog handled everything over WhatsApp. I was skeptical, but the service was solid.' },
  { name: 'Lina N.', business: 'Oshili Digital', quote: '2X cheaper than the lawyer I was going to use. Same documents. Same result.' },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'Digital Strategist' },
]

const faqItems = [
  { q: 'How much does a CC registration cost?', a: 'Basic CC registration starts at N$800. Advanced is N$1,200. Full package is N$1,750 — all include BIPA filing.' },
  { q: 'Can I register remotely?', a: 'Yes. Everything is handled remotely through WhatsApp and email. No office visits needed.' },
  { q: 'How long does registration take?', a: 'Usually 7–10 working days depending on BIPA processing times.' },
  { q: 'Can foreigners register a business?', a: 'Yes, with a valid work permit or proof of residency in Namibia.' },
  { q: 'What documents do I need?', a: 'ID copy, proof of address, and your proposed business name(s). We handle the rest.' },
]

/* ─── Home Page ────────────────────────────────────── */
export default function HomePage() {
  const [selectedAgent, setSelectedAgent] = useState('gadafi')
  const [regForm, setRegForm] = useState({ name: '', biz: '', package: 'Advanced' })

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault()
    const agent = AGENTS.find(a => a.id === selectedAgent)
    if (!agent) return
    const msg = `Hi ${agent.name}! I'm ${regForm.name}. I want to jump into business with the ${regForm.package} package for my business "${regForm.biz}".`
    window.open(`https://wa.me/${agent.phone}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      {/* ═══ 1. HERO — Cinematic bottom-left composition ═══ */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-frog-black via-frog-black/60 to-transparent z-10" />
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#7AC943]/10 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-frog-dark/40 blur-[140px] rounded-full pointer-events-none" />
        </div>

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
                  <span className="w-2 h-2 rounded-full bg-[#7AC943] animate-pulse" />
                  <span className="text-[#7AC943] text-[10px] font-black uppercase tracking-[0.35em]">Ready for 2024 Compliance</span>
                </div>

                <h1 className="text-6xl md:text-[110px] lg:text-[140px] font-black text-white leading-[0.85] tracking-tighter mb-10" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  The Digital<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7AC943] to-white">Jumpstart.</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/40 max-w-2xl mb-14 font-bold leading-relaxed">
                  Namibia&apos;s premium remote business registration service. We handle BIPA, so you can handle growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-[#7AC943] text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
                  >
                    Register Now
                    <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-white/10 active:scale-95 transition-all duration-300"
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

      {/* ═══ 2. TRUST STRIP — Light premium surface ═══ */}
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
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7AC943] shrink-0" />
                  <span className="text-black/50 font-bold text-[11px] uppercase tracking-[0.15em]">{text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 3. EDITORIAL SERVICES BENTO — Light ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <ScrollReveal><Eyebrow light>What We Do</Eyebrow></ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <ScrollReveal delay={0.06}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter italic" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Register Smarter.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="text-right">
                  <div className="text-5xl md:text-6xl font-black text-[#7AC943]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>2X</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold">Cheaper than market average</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card — CC Registration */}
            <ScrollReveal className="md:col-span-7">
              <motion.div
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-black group cursor-pointer"
              >
                <Image src={editorialServices[0].img} alt="CC Registration" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <span className="text-[#7AC943] text-xs font-black uppercase tracking-widest mb-4">{editorialServices[0].tag}</span>
                  <h3 className="text-white text-4xl md:text-5xl font-black mb-4 leading-none" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>CC<br />Registration</h3>
                  <p className="text-white/40 max-w-xs mb-6 text-sm">{editorialServices[0].desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7AC943] font-black">{editorialServices[0].price}</span>
                    <Link href="/services/business-registration" className="w-12 h-12 rounded-full bg-[#7AC943] flex items-center justify-center text-black font-bold hover:scale-110 transition-transform duration-500">→</Link>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Right stack */}
            <div className="md:col-span-5 space-y-6">
              {editorialServices.slice(1, 3).map((s, i) => (
                <ScrollReveal key={s.title} delay={0.06 * (i + 1)}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`p-8 md:p-10 rounded-[2rem] h-[260px] md:h-[285px] flex flex-col justify-between cursor-pointer ${
                      s.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black shadow-xl shadow-black/5'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${s.theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>{s.tag}</span>
                      <h3 className="text-2xl md:text-3xl font-black mt-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
                      <p className={`text-sm mt-2 ${s.theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{s.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className={`text-xs font-black uppercase tracking-widest ${s.theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>Learn More</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>→</div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom full-width — Digital Services */}
            <ScrollReveal className="md:col-span-12">
              <motion.div
                whileHover={{ scale: 0.998 }}
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
                        className="inline-block rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-medium bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 hover:bg-[#7AC943]/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {editorialServices[3].badge?.label} ↗
                      </a>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Digital Services</h3>
                    <p className="text-black/40 text-sm mt-2 max-w-md">{editorialServices[3].desc}</p>
                  </div>
                  <Link href="/services/digital-services" className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold shrink-0 hover:scale-110 transition-transform duration-500">→</Link>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-black/40 text-sm font-bold uppercase tracking-widest hover:text-[#7AC943] transition-colors duration-500">
                View all services <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 4. HOW IT WORKS — Soft light ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow light>How It Works</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-12 md:mb-16" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <div className="bg-[#F5F5F5] rounded-[2rem] p-6 md:p-8 h-full group hover:bg-[#7AC943]/5 transition-colors duration-700">
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] font-black flex items-center justify-center text-sm mb-5 group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-700">
                    {step.n}
                  </div>
                  <h3 className="text-base font-black text-black mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{step.title}</h3>
                  <p className="text-black/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. PRICING TEASER — Dark cinematic ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-black to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7AC943]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-frog-light" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Transparent <span className="italic text-[#7AC943]">Structure.</span>
              </h2>
              <p className="text-frog-muted mt-4">No hidden fees. No consultant markups. Just results.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pricingCards.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="text-center">
                  <div className="flex flex-col h-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#7AC943]">{pkg.tier}</span>
                    <p className="text-4xl font-black text-frog-light mt-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{pkg.price}</p>
                    <p className="text-frog-muted text-sm mt-1">{pkg.sub}</p>
                    <div className="mt-6 space-y-2.5 flex-1">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 justify-center">
                          <span className="w-4 h-4 rounded-full bg-[#7AC943]/15 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#7AC943]" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/264813411522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 w-full py-3 rounded-xl font-black text-sm transition-all duration-700 inline-flex items-center justify-center ${
                        pkg.featured
                          ? 'bg-[#7AC943] text-black hover:brightness-110'
                          : 'ring-1 ring-[#7AC943]/30 text-[#7AC943] hover:bg-[#7AC943]/10'
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
              <Link href="/pricing" className="inline-flex items-center gap-2 text-[#7AC943] text-sm font-medium hover:gap-3 transition-all duration-500">
                View full pricing <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 6. TESTIMONIALS — Warm light ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><Eyebrow light>What Founders Say</Eyebrow></ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-12 md:mb-16" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Real results. Real founders.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 h-full shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-shadow duration-700">
                  <p className="text-black/60 text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] font-black text-sm">
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

      {/* ═══ 7. FAQ — Quiet premium ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Eyebrow light>FAQ</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Common Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="bg-[#F8F8F8] rounded-2xl p-6 md:p-8 group hover:bg-[#7AC943]/5 transition-colors duration-500">
                  <h4 className="text-black font-black text-base mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.q}</h4>
                  <p className="text-black/40 text-sm leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-black/30 text-sm font-bold uppercase tracking-widest hover:text-[#7AC943] transition-colors duration-500">
                View all FAQs <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 8. QUICK CONTACT BAR — Light ═══ */}
      <section className="bg-white py-20 px-4 md:px-6 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Questions? Chat with us.</h2>
            <p className="text-black/40 font-bold">Average response time: Under 5 minutes.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {AGENTS.map(agent => (
              <a
                key={agent.id}
                href={`https://wa.me/${agent.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-[#7AC943] hover:text-black transition-all duration-300"
              >
                <Phone className="w-4 h-4 opacity-50" />
                <span className="opacity-50">{agent.role}</span> {agent.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REGISTRATION FLOW — Dark cinematic ═══ */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden" id="registration-section">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7AC943]/[0.03] blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <div>
            <ScrollReveal>
              <Eyebrow>Jumpstart Form</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-12 italic" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Let&apos;s<br />move.
              </h2>
            </ScrollReveal>

            {/* Agent Selection */}
            <div className="grid gap-4">
              {AGENTS.map(agent => (
                <div
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`p-8 md:p-10 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 flex justify-between items-center ${
                    selectedAgent === agent.id
                      ? 'bg-[#7AC943] border-[#7AC943] text-black scale-[1.02] shadow-[0_0_50px_rgba(122,201,67,0.15)]'
                      : 'bg-white/5 border-white/5 text-white hover:border-white/20'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${selectedAgent === agent.id ? 'text-black/50' : 'text-white/20'}`}>Active Consultant</span>
                    <h4 className="text-2xl md:text-3xl font-black mt-1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{agent.name}</h4>
                  </div>
                  {selectedAgent === agent.id ? (
                    <div className="text-xl font-black">✓</div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0A0A0A] p-8 md:p-14 rounded-[3rem] border border-white/5 relative group">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[#7AC943] font-black italic text-sm">Jumpstart v2</span>
              </div>

              <form onSubmit={handleJump} className="space-y-10 pt-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Identity</label>
                  <input
                    required
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/10 py-5 text-2xl text-white outline-none focus:border-[#7AC943] transition-colors font-bold"
                    placeholder="Full Name"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Venture Name</label>
                  <input
                    required
                    value={regForm.biz}
                    onChange={(e) => setRegForm({ ...regForm, biz: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/10 py-5 text-2xl text-white outline-none focus:border-[#7AC943] transition-colors font-bold"
                    placeholder="e.g. Frog Logistics CC"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Package</label>
                  <div className="flex gap-3">
                    {['Basic', 'Advanced', 'Full'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setRegForm({ ...regForm, package: p })}
                        className={`flex-1 py-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                          regForm.package === p
                            ? 'bg-[#7AC943] text-black'
                            : 'bg-white/5 border border-white/10 text-white/40 hover:bg-white/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7AC943] py-7 rounded-2xl text-black font-black text-lg uppercase tracking-widest hover:scale-[1.01] active:scale-[0.98] transition-all shadow-2xl shadow-[#7AC943]/20 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect to WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA — Deep dark cinematic ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden bg-[#FBFBFB]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7AC943]/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter mb-8 italic" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Stop waiting.<br />Start.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-black/30 text-lg md:text-xl font-bold mb-10 max-w-xl mx-auto">
              Join 400+ Namibian entrepreneurs who jumped ahead this month.
            </p>
          </ScrollReveal>

          {/* Email CTA Form */}
          <ScrollReveal delay={0.1}>
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-black/5 flex flex-col gap-4">
              <input
                placeholder="Your Email Address"
                className="w-full bg-[#F2F2F2] border-none px-6 py-5 rounded-2xl outline-none focus:ring-2 ring-[#7AC943]/20 font-bold text-black"
              />
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-[#7AC943] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Get Free Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
