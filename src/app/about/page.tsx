'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingDown, Wifi, Lightbulb, Clock, Shield, Zap, MessageCircle, ArrowRight, Check, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const values = [
  {
    title: '2X Cheaper',
    subtitle: 'Than Industry Standard',
    description: 'Most consultants charge premium prices for basic compliance work. We use lean digital systems to deliver the same outcome at a startup-friendly price.',
    icon: TrendingDown,
    stat: '2X',
    statLabel: 'Cheaper',
  },
  {
    title: 'Fully Remote',
    subtitle: 'WhatsApp & Email Only',
    description: 'No office visits. No paperwork confusion. Everything handled online through WhatsApp and email — from anywhere in Namibia.',
    icon: Wifi,
    stat: '100%',
    statLabel: 'Remote',
  },
  {
    title: 'Built for Startups',
    subtitle: 'Young Entrepreneurs, Side Hustlers, Freelancers',
    description: 'Traditional firms serve corporations. We serve the people who actually need affordable help — the builders, the dreamers, the doers.',
    icon: Lightbulb,
    list: ['Young entrepreneurs', 'Side hustlers', 'Small businesses', 'Freelancers', 'Informal businesses becoming compliant'],
  },
  {
    title: '7–10 Day Turnaround',
    subtitle: 'Depending on BIPA Processing',
    description: 'Most registrations completed within 7–10 working days. We move fast because your business can\'t wait.',
    icon: Clock,
    stat: '7–10',
    statLabel: 'Days',
  },
]

const founders = [
  {
    name: 'Gadafi',
    role: 'Compliance Expert',
    phone: '264813411522',
    display: '081 341 1522',
    description: 'Specializes in business registration, legal compliance, and documentation. Guides entrepreneurs through Namibia\'s regulatory requirements with precision and care.',
    icon: Shield,
    specialties: ['Business Registration', 'Legal Compliance', 'Company Documents'],
    waLink: 'https://wa.me/264813411522',
  },
  {
    name: 'Mux',
    role: 'Digital Strategist',
    phone: '264853057020',
    display: '085 305 7020',
    description: 'Expert in digital services, online presence, and strategic growth. Helps businesses build and scale their digital footprint across Namibia and beyond.',
    icon: Zap,
    specialties: ['Digital Services', 'Online Strategy', 'Brand Growth'],
    waLink: 'https://wa.me/264853057020',
  },
]

const stats = [
  { value: '400+', label: 'Businesses Registered' },
  { value: '7–10', label: 'Day Turnaround' },
  { value: '2X', label: 'Cheaper Than Market' },
  { value: '100%', label: 'Remote Process' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO — DARK CINEMATIC ═══ */}
      <section className="relative py-32 md:py-40 lg:py-52 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-bg.png"
            alt="SMEfrog background"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-frog-black/60 via-frog-black/80 to-frog-black" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>About SMEfrog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7AC943] to-white">SMEfrog</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed">
              A digital-first company making business registration simple, affordable, and accessible across Namibia.
            </p>
          </ScrollReveal>

          {/* Quick stats bar */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-8 md:gap-14">
              {stats.slice(0, 2).map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-black text-[#7AC943]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </span>
                  <span className="text-frog-muted text-xs uppercase tracking-wider font-bold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ MISSION — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F8F9F4]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Our Mission</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed mb-6">
              SMEfrog was created to solve a simple problem:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Starting a business shouldn&apos;t cost more than the business itself.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-12">
              We built a lean, digital-first support company focused on helping founders
              start properly — without wasting time or money. No office visits. No consultant markups. Just clean, professional registration at a price that makes sense.
            </p>
          </ScrollReveal>

          {/* Mission Card — green accent bezel */}
          <ScrollReveal delay={0.18}>
            <div className="bg-[#E8F5E0] ring-1 ring-[#7AC943]/25 p-1.5 rounded-[2rem]">
              <div className="bg-white rounded-[calc(2rem-0.375rem)] shadow-[0_1px_3px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 self-stretch bg-[#7AC943] rounded-full shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#7AC943] font-semibold mb-2">
                      What We Believe
                    </p>
                    <p className="text-lg md:text-xl font-heading font-semibold text-[#1A1A1A] leading-relaxed">
                      Every entrepreneur deserves access to affordable, professional business registration — regardless of their budget or location.
                    </p>
                    <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">
                      That&apos;s why SMEfrog operates 100% remotely, charges 2X less than traditional firms, and delivers results in 7–10 working days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ VALUE CARDS — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Why SMEfrog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Built Different.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              We&apos;re not a traditional consulting firm. We&apos;re a digital-first operation designed for the way entrepreneurs actually work today.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const isEven = i % 2 === 0
              return (
                <ScrollReveal key={value.title} delay={i * 0.06}>
                  <div className={`p-1.5 rounded-[2rem] h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#7AC943]/20 ${
                    isEven
                      ? 'bg-[#F5F5F5] ring-1 ring-black/[0.04]'
                      : 'bg-black ring-1 ring-white/[0.06]'
                  }`}>
                    <div className={`rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full ${
                      isEven ? 'bg-[#F8F9F4]' : 'bg-[#0A0A0A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                    }`}>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                        isEven
                          ? 'bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20'
                          : 'bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20'
                      }`}>
                        <value.icon className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                      </div>

                      {/* Stat highlight */}
                      {value.stat && (
                        <div className="mb-4">
                          <span className={`text-4xl md:text-5xl font-black tracking-tight ${isEven ? 'text-[#7AC943]' : 'text-[#7AC943]'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {value.stat}
                          </span>
                          <span className={`ml-2 text-xs uppercase tracking-wider font-bold ${isEven ? 'text-[#6B7280]' : 'text-frog-muted'}`}>
                            {value.statLabel}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-black mb-1 ${isEven ? 'text-[#1A1A1A]' : 'text-frog-light'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {value.title}
                      </h3>
                      <p className={`text-xs uppercase tracking-wider font-bold mb-3 ${isEven ? 'text-[#7AC943]' : 'text-[#7AC943]'}`}>
                        {value.subtitle}
                      </p>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 ${isEven ? 'text-[#6B7280]' : 'text-frog-muted'}`}>
                        {value.description}
                      </p>

                      {/* List */}
                      {value.list && (
                        <ul className="space-y-2 mt-3">
                          {value.list.map((item) => (
                            <li key={item} className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] shrink-0" />
                              <span className={`text-sm ${isEven ? 'text-[#6B7280]' : 'text-frog-muted'}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDERS / TEAM — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7AC943]/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>The Team</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Meet Your <span className="italic text-[#7AC943]">Experts.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Two specialists. One mission. Get connected directly to the person who can help you most.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder.name} delay={i * 0.08}>
                <DoubleBezel highlight className="h-full relative group">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#7AC943]/40 to-transparent" />

                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center shrink-0 group-hover:bg-[#7AC943]/15 transition-colors duration-700">
                      <founder.icon className="w-6 h-6 text-[#7AC943]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-frog-light" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {founder.name}
                      </h3>
                      <p className="text-[#7AC943] text-xs font-bold uppercase tracking-wider mt-1">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-frog-muted text-sm leading-relaxed mb-6">
                    {founder.description}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block text-[10px] px-3 py-1 rounded-full bg-frog-shell text-frog-muted ring-1 ring-frog-hairline font-bold uppercase tracking-wider"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Contact row */}
                  <div className="flex items-center justify-between pt-4 border-t border-frog-hairline">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#7AC943]" strokeWidth={1.5} />
                      <span className="text-frog-muted text-sm font-bold">{founder.display}</span>
                    </div>
                    <a
                      href={founder.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 bg-[#7AC943] text-black font-bold rounded-full px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-[#7AC943]/90 active:scale-[0.97] transition-all duration-300"
                    >
                      Chat
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
                    </a>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS COUNTER — LIGHT ═══ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F8F9F4]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow light>By The Numbers</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Results That Speak
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <div className="bg-white rounded-[2rem] p-6 md:p-8 text-center ring-1 ring-black/[0.04] shadow-sm hover:shadow-md hover:ring-[#7AC943]/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-black text-[#7AC943] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-700" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wider font-bold">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7AC943]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>How It Works</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter mb-12 md:mb-16" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Contact Us', desc: 'Message us on WhatsApp. No forms, no waiting.', icon: MessageCircle },
              { n: '02', title: 'Send Your Details', desc: 'We collect the required registration information.', icon: Users },
              { n: '03', title: 'We Handle Everything', desc: 'Compliance, forms, filings, and submissions — handled.', icon: Shield },
              { n: '04', title: 'Receive Your Documents', desc: 'Delivered digitally and ready for business.', icon: Check },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <DoubleBezel className="h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] font-black flex items-center justify-center text-sm mb-5">
                    {step.n}
                  </div>
                  <h3 className="text-base font-black text-frog-light mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7AC943]/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow light>Get Started</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-6 italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Stop waiting.<br />Start.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#6B7280] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Join 400+ Namibian entrepreneurs who chose the smarter, faster, cheaper way to register their business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#7AC943] text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register on WhatsApp
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-black/5 border border-black/10 text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-black/10 active:scale-95 transition-all duration-300"
              >
                Contact Us
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
