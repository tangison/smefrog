'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingDown, Wifi, Lightbulb, Clock, Shield, Zap, MessageCircle, ArrowRight, Check, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const values = [
  {
    title: '2X Cheaper',
    subtitle: 'Than Industry Standard',
    description: 'Lean digital systems. Same result. Half the price.',
    icon: TrendingDown,
    stat: '2X',
    statLabel: 'Cheaper',
  },
  {
    title: 'Fully Remote',
    subtitle: 'WhatsApp & Email Only',
    description: 'No office visits. Everything online — from anywhere in Namibia.',
    icon: Wifi,
    stat: '100%',
    statLabel: 'Remote',
  },
  {
    title: 'Built for Namibians',
    subtitle: 'Founders, Hustlers, Freelancers',
    description: 'We serve the people who need affordable help most.',
    icon: Lightbulb,
    list: ['Young entrepreneurs', 'Side hustlers', 'Small businesses', 'Freelancers', 'Informal businesses'],
  },
  {
    title: '7–10 Day Turnaround',
    subtitle: 'BIPA Processing Time',
    description: 'We move fast because your business can\'t wait.',
    icon: Clock,
    stat: '7–10',
    statLabel: 'Days',
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
            src="/hero/hero-3.webp"
            alt="SMEfrog background"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-frog-black/60 via-frog-black/80 to-frog-black" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-frog-green/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>About</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter mb-8">
              Why<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-frog-green to-white">SMEfrog</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed">
              Business registration, simplified.
            </p>
          </ScrollReveal>

          {/* Quick stats bar */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-8 md:gap-14">
              {stats.slice(0, 2).map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-black text-frog-green">
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Mission</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
              We started with one belief:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight mb-8">
              Registration shouldn&apos;t cost more than starting.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-base md:text-lg text-black/60 leading-relaxed mb-12">
              We help founders start right — no office visits, no markups, no waste.
            </p>
          </ScrollReveal>

          {/* Mission Card — green accent bezel */}
          <ScrollReveal delay={0.18}>
            <div className="bg-[#E8F5E0] ring-1 ring-frog-green/25 p-1.5 rounded-[2rem]">
              <div className="bg-white rounded-[calc(2rem-0.375rem)] shadow-[0_1px_3px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 self-stretch bg-frog-green rounded-full shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-frog-green font-semibold mb-2">
                      Our Belief
                    </p>
                    <p className="text-lg md:text-xl font-heading font-semibold text-black leading-relaxed">
                      Every founder deserves affordable registration.
                    </p>
                    <p className="text-sm text-black/60 mt-3 leading-relaxed">
                      100% remote. 2X cheaper. 7–10 day delivery.
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
            <Eyebrow light>Why Us</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter mb-4">
              Built Different.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Not a firm. A digital system built for how founders work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const isEven = i % 2 === 0
              return (
                <ScrollReveal key={value.title} delay={i * 0.06}>
                  <div className={`p-1.5 rounded-[2rem] h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-frog-green/20 ${
                    isEven
                      ? 'bg-frog-light ring-1 ring-black/[0.04]'
                      : 'bg-black ring-1 ring-white/[0.06]'
                  }`}>
                    <div className={`rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full ${
                      isEven ? 'bg-frog-light' : 'bg-frog-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                    }`}>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                        isEven
                          ? 'bg-frog-green/10 ring-1 ring-frog-green/20'
                          : 'bg-frog-green/10 ring-1 ring-frog-green/20'
                      }`}>
                        <value.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                      </div>

                      {/* Stat highlight */}
                      {value.stat && (
                        <div className="mb-4">
                          <span className={`text-4xl md:text-5xl font-black tracking-tight ${isEven ? 'text-frog-green' : 'text-frog-green'}`}>
                            {value.stat}
                          </span>
                          <span className={`ml-2 text-xs uppercase tracking-wider font-bold ${isEven ? 'text-black/60' : 'text-frog-muted'}`}>
                            {value.statLabel}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-black mb-1 ${isEven ? 'text-black' : 'text-frog-light'}`}>
                        {value.title}
                      </h3>
                      <p className={`text-xs uppercase tracking-wider font-bold mb-3 ${isEven ? 'text-frog-green' : 'text-frog-green'}`}>
                        {value.subtitle}
                      </p>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 ${isEven ? 'text-black/60' : 'text-frog-muted'}`}>
                        {value.description}
                      </p>

                      {/* List */}
                      {value.list && (
                        <ul className="space-y-2 mt-3">
                          {value.list.map((item) => (
                            <li key={item} className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                              <span className={`text-sm ${isEven ? 'text-black/60' : 'text-frog-muted'}`}>{item}</span>
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

      {/* ═══ TEAM — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Team</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4">
              Our <span className="italic text-frog-green">Experts.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Compliance specialists dedicated to keeping your business legal. Direct access via WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waLink('contact')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Meet the Team
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STATS COUNTER — LIGHT ═══ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow light>Numbers</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-black text-black">
                The Numbers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <div className="bg-white rounded-[2rem] p-6 md:p-8 text-center ring-1 ring-black/[0.04] shadow-sm hover:shadow-md hover:ring-frog-green/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-black text-frog-green tracking-tight mb-2 group-hover:scale-105 transition-transform duration-700">
                    {stat.value}
                  </p>
                  <p className="text-black/60 text-xs uppercase tracking-wider font-bold">
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
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-green/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Process</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter mb-12 md:mb-16">
              Four Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Message Us', desc: 'WhatsApp. No forms.', icon: MessageCircle },
              { n: '02', title: 'Send Details', desc: 'We collect what\'s needed.', icon: Users },
              { n: '03', title: 'We Handle It', desc: 'Filing, compliance, submissions.', icon: Shield },
              { n: '04', title: 'Get Documents', desc: 'Delivered digitally.', icon: Check },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08}>
                <DoubleBezel className="h-full">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-black flex items-center justify-center text-sm mb-5">
                    {step.n}
                  </div>
                  <h3 className="text-base font-black text-frog-light mb-2">
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-frog-green/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow light>Start</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-6 italic">
              Stop waiting.<br />Start.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              400+ founders chose the smarter way. Your turn.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink('contact')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register Now
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-black/5 border border-black/10 text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-black/10 active:scale-95 transition-all duration-300"
                aria-label="Contact us"
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
