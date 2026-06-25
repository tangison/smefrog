'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Copy, Check, Palette, Type, Mic, ImageIcon } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Brand Identity Copy Text ────────────────────────── */
const BRAND_IDENTITY_TEXT = `SMEFROG BRAND IDENTITY
======================
Logo: "SME" white/black + "frog" #4CAF50. Never single colour. Never stretched.
Primary colour: #4CAF50 (green). Dark bg: #0a0a0a. Surface: #141414.
Fonts: Syne (headings, 700/800) + DM Sans (body, 300-500).
Voice: Direct. Plain English. Namibian-specific. No m-dashes. No exclamation points. No AI filler.
Tone: Confident, warm, efficient.
WhatsApp: +264853411522
Academy: academy.smefrog.com (future) / document-library-one.vercel.app (current)`

/* ─── Colour Data ─────────────────────────────────────── */
const colours = [
  { name: 'Primary Green', hex: '#4CAF50', rgb: 'rgb(76, 175, 80)', use: 'CTAs, active states, accents, logo "frog"' },
  { name: 'Deep Green', hex: '#2d6b30', rgb: 'rgb(45, 107, 48)', use: 'Hover states, secondary buttons' },
  { name: 'Dark Background', hex: '#0a0a0a', rgb: 'rgb(10, 10, 10)', use: 'Primary page background' },
  { name: 'Surface', hex: '#141414', rgb: 'rgb(20, 20, 20)', use: 'Card backgrounds' },
  { name: 'Border', hex: '#1e1e1e', rgb: 'rgb(30, 30, 30)', use: 'Dividers and card borders' },
  { name: 'Body Text', hex: '#c8c8c8', rgb: 'rgb(200, 200, 200)', use: 'Paragraph text' },
  { name: 'Muted Text', hex: '#666666', rgb: 'rgb(102, 102, 102)', use: 'Secondary labels, captions' },
  { name: 'White', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)', use: 'Headings on dark backgrounds' },
]

/* ─── Typography Scale ────────────────────────────────── */
const typeScale = [
  { label: 'H1', css: 'clamp(32px, 5vw, 56px)', weight: '700–800', lineHeight: '1.1', example: 'Section Titles' },
  { label: 'H2', css: 'clamp(24px, 4vw, 40px)', weight: '700–800', lineHeight: '1.1', example: 'Page Headings' },
  { label: 'H3', css: '22px', weight: '700–800', lineHeight: '1.1', example: 'Card Headings' },
  { label: 'Body', css: '16px', weight: '300–500', lineHeight: '1.75', example: 'Paragraphs, descriptions' },
  { label: 'Small', css: '13px', weight: '400–500', lineHeight: '1.4', example: 'Labels, captions' },
]

/* ─── Voice Rules ─────────────────────────────────────── */
const voiceRules = [
  { rule: 'Direct and plain', desc: 'Say what you mean in the fewest words.' },
  { rule: 'Namibian-specific', desc: 'Reference local context, local institutions (BIPA, NamRA), local prices (N$).' },
  { rule: 'Confident without arrogance', desc: 'No exclamation points. No superlatives.' },
  { rule: 'No m-dashes', desc: 'No m-dashes, no AI filler phrases, no passive voice.' },
  { rule: 'Warm but efficient', desc: 'One line of personality is enough, then get to the point.' },
]

/* ─── Page ────────────────────────────────────────────── */
export default function BrandPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_IDENTITY_TEXT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = BRAND_IDENTITY_TEXT
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <>
      {/* ═══ STICKY COPY BUTTON ═══ */}
      <div className="sticky top-0 z-50 bg-frog-black/80 backdrop-blur-md border-b border-frog-hairline">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <span className="text-white/40 text-xs font-bold uppercase tracking-widest">SMEfrog Brand</span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 min-h-[44px] bg-[#4CAF50] text-black font-black rounded-full px-6 py-2.5 text-sm tracking-wider hover:shadow-[0_0_30px_rgba(76,175,80,0.3)] active:scale-95 transition-all duration-300 touch-manipulation"
            aria-label="Copy full brand identity text to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" strokeWidth={2} />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" strokeWidth={2} />
                Copy Brand Identity
              </>
            )}
          </button>
        </div>
      </div>

      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-32 md:py-40 lg:py-52 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4CAF50]/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Brand</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter">
              Brand<br />
              <span className="italic text-[#4CAF50]">Guidelines.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              Rules for how SMEfrog looks, sounds, and reads. smefrog.com only.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 1 — LOGO USAGE ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4CAF50]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <ImageIcon className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
              <Eyebrow>Section 1</Eyebrow>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4">
              Logo Usage
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              The SMEfrog logo is the single most important brand asset. Use it correctly.
            </p>
          </ScrollReveal>

          {/* Logo display card */}
          <ScrollReveal delay={0.14}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* On Dark */}
              <div className="bg-[#0a0a0a] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
                <div className="bg-[#0a0a0a] rounded-[calc(2rem-0.375rem)] p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <Image
                    src="/upload/logo On Dark.png"
                    alt="SMEfrog logo on dark background"
                    width={200}
                    height={60}
                    className="h-12 w-auto mb-4"
                    priority
                  />
                  <span className="text-[#666666] text-xs font-bold uppercase tracking-wider">On Dark #0a0a0a</span>
                </div>
              </div>

              {/* On White */}
              <div className="bg-[#f5f5f5] ring-1 ring-black/[0.06] p-1.5 rounded-[2rem]">
                <div className="bg-[#ffffff] rounded-[calc(2rem-0.375rem)] p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="mb-4">
                    <span className="text-3xl font-black tracking-tight">
                      <span className="text-black">SME</span>
                      <span className="text-[#4CAF50]">frog</span>
                    </span>
                  </div>
                  <span className="text-black/40 text-xs font-bold uppercase tracking-wider">On White #ffffff</span>
                </div>
              </div>

              {/* On Green */}
              <div className="bg-[#4CAF50] ring-1 ring-[#4CAF50]/20 p-1.5 rounded-[2rem]">
                <div className="bg-[#4CAF50] rounded-[calc(2rem-0.375rem)] p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="mb-4">
                    <span className="text-3xl font-black tracking-tight">
                      <span className="text-white">SME</span>
                      <span className="text-white/90">frog</span>
                    </span>
                  </div>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">On Green #4CAF50 (white logo only)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Wordmark rules */}
          <ScrollReveal delay={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DoubleBezel>
                <h3 className="text-lg font-black text-frog-light mb-4">Wordmark Rules</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">
                      <span className="text-frog-light font-bold">&quot;SME&quot;</span> always in white (on dark backgrounds) or black (on light backgrounds)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">
                      <span className="text-[#4CAF50] font-bold">&quot;frog&quot;</span> always in <span className="text-[#4CAF50] font-bold">#4CAF50</span> green
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">Never reversed. Never in a single colour.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">
                      Minimum clear space: equal to the height of the &quot;S&quot; in SMEfrog on all sides
                    </span>
                  </li>
                </ul>
              </DoubleBezel>

              <DoubleBezel>
                <h3 className="text-lg font-black text-frog-light mb-4">Do Not</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">Do not stretch or distort the logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">Do not recolour any part of the logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">Do not add effects (shadows, glows, outlines)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span className="text-frog-muted text-sm leading-relaxed">Do not place on a busy background without a solid backing</span>
                  </li>
                </ul>
              </DoubleBezel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 2 — COLOURS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CAF50]/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
              <Eyebrow>Section 2</Eyebrow>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4">
              Colours
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              The full SMEfrog palette. Every colour has a job.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colours.map((colour, i) => (
              <ScrollReveal key={colour.hex} delay={i * 0.04}>
                <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[1.5rem] h-full">
                  <div className="bg-frog-card rounded-[calc(1.5rem-0.375rem)] p-5 h-full">
                    {/* Swatch */}
                    <div
                      className="w-full h-20 rounded-xl mb-4 border border-white/[0.06]"
                      style={{ backgroundColor: colour.hex }}
                    />
                    {/* Name */}
                    <h3 className="text-sm font-black text-frog-light mb-2">{colour.name}</h3>
                    {/* Hex */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">HEX</span>
                      <span className="text-sm font-bold text-frog-muted font-mono">{colour.hex}</span>
                    </div>
                    {/* RGB */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">RGB</span>
                      <span className="text-sm font-bold text-frog-muted font-mono">{colour.rgb}</span>
                    </div>
                    {/* Use case */}
                    <p className="text-xs text-[#666666] leading-relaxed">{colour.use}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — TYPOGRAPHY ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CAF50]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <Type className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
              <Eyebrow>Section 3</Eyebrow>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4">
              Typography
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Two type families. Every weight has a purpose.
            </p>
          </ScrollReveal>

          {/* Font families */}
          <ScrollReveal delay={0.14}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Syne */}
              <DoubleBezel>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#4CAF50] mb-3 block">Display / Headings</span>
                <p className="text-4xl font-extrabold text-frog-light mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Syne
                </p>
                <p className="text-frog-muted text-sm leading-relaxed mb-4">Weight 700 and 800 only. Use for all page titles, section headings, card headings.</p>
                <div className="space-y-2">
                  <p className="text-frog-light text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>Bold 800</p>
                  <p className="text-frog-light text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>Bold 700</p>
                </div>
              </DoubleBezel>

              {/* DM Sans */}
              <DoubleBezel>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#4CAF50] mb-3 block">Body</span>
                <p className="text-4xl font-extrabold text-frog-light mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  DM Sans
                </p>
                <p className="text-frog-muted text-sm leading-relaxed mb-4">Weight 300, 400, 500. Use for all body copy, labels, navigation.</p>
                <div className="space-y-2">
                  <p className="text-frog-light text-base" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>Light 300</p>
                  <p className="text-frog-light text-base" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Regular 400</p>
                  <p className="text-frog-light text-base" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Medium 500</p>
                </div>
              </DoubleBezel>

              {/* DM Mono */}
              <DoubleBezel>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#4CAF50] mb-3 block">Monospace / Code</span>
                <p className="text-4xl font-extrabold text-frog-light mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                  DM Mono
                </p>
                <p className="text-frog-muted text-sm leading-relaxed mb-4">Use for tool outputs, data displays, code.</p>
                <div className="space-y-2">
                  <p className="text-frog-light text-sm font-mono" style={{ fontFamily: "'DM Mono', monospace" }}>
                    const name = &quot;SMEfrog&quot;
                  </p>
                  <p className="text-frog-light text-sm font-mono" style={{ fontFamily: "'DM Mono', monospace" }}>
                    N$1,000.00
                  </p>
                </div>
              </DoubleBezel>
            </div>
          </ScrollReveal>

          {/* Type scale */}
          <ScrollReveal delay={0.18}>
            <h3 className="text-xl font-black text-frog-light mb-6">Type Scale</h3>
            <div className="bg-frog-shell ring-1 ring-frog-hairline rounded-[2rem] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-frog-hairline">
                    <th className="text-left p-4 text-[10px] uppercase tracking-wider font-black text-[#666666]">Level</th>
                    <th className="text-left p-4 text-[10px] uppercase tracking-wider font-black text-[#666666]">Size</th>
                    <th className="text-left p-4 text-[10px] uppercase tracking-wider font-black text-[#666666]">Weight</th>
                    <th className="text-left p-4 text-[10px] uppercase tracking-wider font-black text-[#666666]">Line Height</th>
                    <th className="text-left p-4 text-[10px] uppercase tracking-wider font-black text-[#666666] hidden sm:table-cell">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {typeScale.map((item, i) => (
                    <tr key={item.label} className={i < typeScale.length - 1 ? 'border-b border-frog-hairline' : ''}>
                      <td className="p-4 text-[#4CAF50] font-black font-mono">{item.label}</td>
                      <td className="p-4 text-frog-muted font-mono">{item.css}</td>
                      <td className="p-4 text-frog-muted">{item.weight}</td>
                      <td className="p-4 text-frog-muted font-mono">{item.lineHeight}</td>
                      <td className="p-4 text-frog-muted hidden sm:table-cell">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Line length note */}
          <ScrollReveal delay={0.22}>
            <div className="mt-6 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] shrink-0 mt-2" />
              <p className="text-frog-muted text-sm leading-relaxed">
                Cap line length at <span className="text-frog-light font-bold font-mono">65ch</span> for body text. Headings: line height 1.1. Body: 1.75. Labels: 1.4.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 4 — VOICE AND TONE ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4CAF50]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-5 h-5 text-[#4CAF50]" strokeWidth={1.5} />
              <Eyebrow>Section 4</Eyebrow>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-frog-light tracking-tighter mb-4">
              Voice and Tone
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              How SMEfrog sounds in writing. Every word earns its place.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voiceRules.map((item, i) => (
              <ScrollReveal key={item.rule} delay={i * 0.06}>
                <DoubleBezel className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-[#4CAF50] text-2xl font-black leading-none mt-0.5">0{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-black text-frog-light mb-2">{item.rule}</h3>
                      <p className="text-frog-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — COPY CTA ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4CAF50]/[0.04] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Copy It</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter mb-4">
              Need the full spec?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              One click copies the entire brand identity as plain text. Paste it anywhere.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <button
              onClick={handleCopy}
              className="group inline-flex items-center gap-3 min-h-[56px] bg-[#4CAF50] text-black font-black rounded-full px-12 py-5 text-base tracking-widest uppercase hover:shadow-[0_0_30px_rgba(76,175,80,0.3)] active:scale-95 transition-all duration-300 touch-manipulation"
              aria-label="Copy full brand identity text to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" strokeWidth={2} />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" strokeWidth={2} />
                  Copy Brand Identity
                </>
              )}
            </button>
          </ScrollReveal>

          {/* Preview of copied text */}
          <ScrollReveal delay={0.18}>
            <div className="mt-10 bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] p-6 md:p-8 text-left">
                <pre className="text-frog-muted text-sm leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto">
                  {BRAND_IDENTITY_TEXT}
                </pre>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
