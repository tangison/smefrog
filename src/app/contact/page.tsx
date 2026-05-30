'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, MapPin, Globe, Phone, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { waLink, PHONE_MAIN, GEMSWEB_URL } from '@/lib/config'

/* ─── Page ──────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-32 md:py-40 lg:py-52 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-frog-green/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Contact</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter">
              Let&apos;s <span className="italic text-frog-green">Talk.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              Get in touch with us directly. Fast, simple, no forms needed.
            </p>
          </ScrollReveal>

          {/* Quick contact pills */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-10">
              <span
                className="group inline-flex items-center gap-3 min-h-[44px] bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3"
              >
                <Phone className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                <span className="text-white/60 text-sm font-bold">{PHONE_MAIN}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHATSAPP CTA CARD — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white ring-1 ring-black/[0.06] p-1.5 rounded-[2rem] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="bg-white rounded-[calc(2rem-0.375rem)] p-8 md:p-12 text-center">
                {/* WhatsApp icon */}
                <div className="w-16 h-16 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-7 h-7 text-frog-green" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-black mb-3 tracking-tight">
                  Chat with Us on WhatsApp
                </h2>

                <p className="text-black/60 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  We typically respond within a few hours during business hours.
                </p>

                {/* Phone number */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Phone className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  <span className="text-black/60 text-sm font-bold">+264 85 341 1522</span>
                </div>

                {/* Big green CTA button */}
                <a
                  href={waLink('contact')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 min-h-[56px] bg-frog-green text-black font-black rounded-full px-12 py-5 text-base tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  Chat with Us on WhatsApp
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ LOCATION + PARTNER — LIGHT ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location */}
            <ScrollReveal>
              <div className="bg-frog-light rounded-[2rem] p-8 md:p-10 ring-1 ring-black/[0.04] h-full">
                <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-black mb-3">
                  Windhoek, Namibia
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6">
                  100% remote. Serving all 14 regions. WhatsApp and email only.
                </p>

                {/* Quick contact */}
                <div className="space-y-3">
                  <a
                    href={waLink('contact')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-white ring-1 ring-black/[0.04] hover:ring-frog-green/20 transition-all duration-500 group min-h-[44px]"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                      <div>
                        <p className="text-black text-sm font-bold">WhatsApp Us</p>
                        <p className="text-black/60 text-xs">{PHONE_MAIN}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-frog-green group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Gemsweb Partnership */}
            <ScrollReveal delay={0.08}>
              <div className="bg-frog-card rounded-[2rem] p-8 md:p-10 ring-1 ring-white/[0.06] h-full relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-frog-green/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-6">
                    <Globe className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-frog-light mb-3">
                    Digital Partner
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed mb-6">
                    Powered by <span className="text-frog-green font-bold">Gemsweb Digital</span> — web development, branding, and online strategy for African businesses.
                  </p>

                  {/* Partnership card */}
                  <div className="bg-frog-shell ring-1 ring-frog-green/15 rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-frog-light text-sm font-bold">Gemsweb Digital</p>
                        <p className="text-frog-muted text-[10px] uppercase tracking-wider">Official Digital Partner</p>
                      </div>
                    </div>
                    <a
                      href={GEMSWEB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/gem inline-flex items-center gap-2 text-frog-green text-sm font-bold hover:text-frog-green/70 transition-colors duration-300 min-h-[44px]"
                      aria-label="Visit Gemsweb Digital website"
                    >
                      gemsweb.xyz
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                  </div>

                  <p className="text-frog-muted/50 text-xs leading-relaxed">
                    SMEfrog handles the compliance. Gemsweb handles the digital.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA — DARK ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.04] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Ready?</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-frog-light tracking-tighter mb-6 italic">
              Jump In.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              400+ founders chose the faster way. Your turn.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink('contact')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat Now
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-white/[0.04] border border-white/[0.08] text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-white/[0.08] active:scale-95 transition-all duration-300"
                aria-label="View pricing packages"
              >
                View Packages
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
