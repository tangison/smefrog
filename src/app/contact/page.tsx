'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, ArrowRight, MapPin, Globe, Phone, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { PHONE_MAIN, GEMSWEB_URL } from '@/lib/config'

/* ─── Business type options ───────────────────────────── */
const businessTypes = [
  'CC',
  'Pty Ltd',
  'Compliance',
  'Documents',
  'Not sure yet',
] as const

/* ─── Source options ──────────────────────────────────── */
const sourceOptions = [
  'Google',
  'WhatsApp',
  'Referral',
  'Social media',
  'Other',
] as const

/* ─── Page ────────────────────────────────────────────── */
export default function ContactPage() {
  const [name, setName] = useState('')
  const [businessType, setBusinessType] = useState<string>('')
  const [description, setDescription] = useState('')
  const [source, setSource] = useState('')
  const [nameError, setNameError] = useState(false)

  const handleContinue = () => {
    // Validate name
    if (!name.trim()) {
      setNameError(true)
      return
    }
    setNameError(false)

    // Build WhatsApp message
    const parts: string[] = []
    parts.push(`Hi SMEfrog, my name is ${name.trim()}.`)
    parts.push(`I'm interested in: ${businessType || 'General enquiry'}.`)
    if (description.trim()) {
      parts.push(description.trim())
    }
    if (source) {
      parts.push(`I found you via: ${source}.`)
    }

    const message = parts.join(' ')
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/264853411522?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
              Tell us what you need. We will open a WhatsApp chat so you can send it directly.
            </p>
          </ScrollReveal>

          {/* Quick contact pills */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-10">
              <span className="group inline-flex items-center gap-3 min-h-[44px] bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3">
                <Phone className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                <span className="text-white/60 text-sm font-bold">{PHONE_MAIN}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHATSAPP PRE-FILL FORM — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Send a Message</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter mb-4">
              Pre-fill Your Message
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 md:mb-14 leading-relaxed">
              Fill in a few details. We will build a WhatsApp message for you to review and send.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-10">
                {/* ─── Name ─── */}
                <div className="mb-8">
                  <label htmlFor="contact-name" className="block text-sm font-black text-frog-light mb-2">
                    Your Name <span className="text-[#4CAF50]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setNameError(false) }}
                    placeholder="e.g. Maria Kambo"
                    className={`w-full bg-white/[0.04] border rounded-full px-5 py-3.5 text-frog-light text-sm font-bold placeholder:text-white/15 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all min-h-[48px] touch-manipulation ${
                      nameError ? 'border-red-500/60' : 'border-white/[0.08]'
                    }`}
                    aria-required="true"
                    aria-invalid={nameError}
                  />
                  {nameError && (
                    <p className="text-red-400 text-xs font-bold mt-2 ml-5">Please enter your name</p>
                  )}
                </div>

                {/* ─── Business Type ─── */}
                <div className="mb-8">
                  <label className="block text-sm font-black text-frog-light mb-3">
                    What are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setBusinessType(type === businessType ? '' : type)}
                        className={`inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 touch-manipulation ${
                          businessType === type
                            ? 'bg-[#4CAF50] text-black border-[#4CAF50]'
                            : 'bg-white/[0.04] text-frog-muted border-white/[0.08] hover:border-[#4CAF50]/30 hover:text-frog-light'
                        }`}
                        aria-pressed={businessType === type}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ─── Description ─── */}
                <div className="mb-8">
                  <label htmlFor="contact-desc" className="block text-sm font-black text-frog-light mb-2">
                    What do you need help with?
                    <span className="text-[#666666] font-normal ml-2">(optional)</span>
                  </label>
                  <textarea
                    id="contact-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 200))}
                    placeholder="e.g. I want to register a CC for my cleaning business"
                    rows={3}
                    maxLength={200}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-3.5 text-frog-light text-sm font-bold placeholder:text-white/15 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all resize-none min-h-[48px] touch-manipulation"
                  />
                  <p className="text-[#666666] text-xs font-bold mt-2 text-right">{description.length}/200</p>
                </div>

                {/* ─── Source ─── */}
                <div className="mb-10">
                  <label htmlFor="contact-source" className="block text-sm font-black text-frog-light mb-2">
                    How did you hear about us?
                    <span className="text-[#666666] font-normal ml-2">(optional)</span>
                  </label>
                  <select
                    id="contact-source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3.5 text-frog-light text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all min-h-[48px] touch-manipulation appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="" className="bg-[#0a0a0a] text-[#666666]">Select one...</option>
                    {sourceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0a0a0a] text-frog-light">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* ─── WhatsApp Button ─── */}
                <button
                  onClick={handleContinue}
                  className="group w-full inline-flex items-center justify-center gap-3 min-h-[56px] bg-[#4CAF50] text-black font-black rounded-full px-12 py-5 text-base tracking-widest uppercase hover:shadow-[0_0_30px_rgba(76,175,80,0.3)] active:scale-95 transition-all duration-300 touch-manipulation"
                  aria-label="Continue to WhatsApp with your pre-filled message"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  Continue to WhatsApp
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
                </button>

                {/* Note */}
                <p className="text-[#666666] text-xs text-center mt-4 leading-relaxed">
                  Your message opens in WhatsApp. You can edit it before sending.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ LOCATION + PARTNER — DARK ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-green/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <ScrollReveal>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-8 md:p-10 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-6">
                    <MapPin className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-frog-light mb-3">
                    Windhoek, Namibia
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed mb-6">
                    100% remote. Serving all 14 regions. WhatsApp and email only.
                  </p>

                  {/* Quick contact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] ring-1 ring-frog-hairline min-h-[44px]">
                      <MessageCircle className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                      <div>
                        <p className="text-frog-light text-sm font-bold">WhatsApp Us</p>
                        <p className="text-frog-muted text-xs">{PHONE_MAIN}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Gemsweb Partnership */}
            <ScrollReveal delay={0.08}>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-8 md:p-10 h-full relative overflow-hidden">
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
                      Powered by <span className="text-frog-green font-bold">Gemsweb Digital</span>: web development, branding, and online strategy for African businesses.
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
              <button
                onClick={() => {
                  const url = `https://wa.me/264853411522?text=${encodeURIComponent("Hi SMEfrog, I'd like to get in touch about your services.")}`
                  window.open(url, '_blank', 'noopener,noreferrer')
                }}
                className="group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat Now
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-white/[0.04] border border-white/[0.08] text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-white/[0.08] active:scale-95 transition-all duration-300 touch-manipulation"
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
