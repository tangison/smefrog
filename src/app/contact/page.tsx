'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Shield, Zap, Check, MapPin, Globe, Phone, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { WHATSAPP_GADAFI, WHATSAPP_MUX, GEMSWEB_URL } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const agents = [
  {
    name: 'Gadafi',
    phone: '264813411522',
    display: '081 341 1522',
    role: 'Compliance Expert',
    description: 'Business registration, legal compliance, and documentation.',
    icon: Shield,
    specialties: ['Business Registration', 'Legal Compliance', 'Company Documents'],
    waLink: WHATSAPP_GADAFI,
  },
  {
    name: 'Mux',
    phone: '264853057020',
    display: '085 305 7020',
    role: 'Digital Strategist',
    description: 'Digital services, online presence, and strategic growth.',
    icon: Zap,
    specialties: ['Digital Services', 'Online Strategy', 'Brand Growth'],
    waLink: WHATSAPP_MUX,
  },
]

const packages = ['Basic', 'Advanced', 'Full']

const inputClass = 'bg-frog-card ring-1 ring-frog-hairline rounded-xl px-4 py-3.5 text-frog-light text-sm focus:ring-frog-green/30 outline-none w-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-black/30'

/* ─── Page ──────────────────────────────────────────── */
export default function ContactPage() {
  const [fullName, setFullName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('Advanced')
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  const buildWhatsAppUrl = () => {
    const message = `Hi ${selectedAgent.name}! I'm ${fullName}. I want to register "${businessName}" with the ${selectedPackage} package.`
    return `${selectedAgent.waLink}?text=${encodeURIComponent(message)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(), '_blank')
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
              Pick a specialist. Fill in details. Connected on WhatsApp in seconds.
            </p>
          </ScrollReveal>

          {/* Quick contact pills */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-10">
              {agents.map((agent) => (
                <a
                  key={agent.name}
                  href={agent.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 min-h-[44px] bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3 hover:bg-white/[0.08] hover:border-frog-green/20 transition-all duration-500"
                  aria-label={`Chat with ${agent.name} on WhatsApp`}
                >
                  <agent.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  <span className="text-white/60 text-sm font-bold">{agent.name}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-frog-green text-xs font-bold">{agent.role}</span>
                  <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-frog-green group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ AGENT CARDS — LIGHT ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow light>Specialists</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter">
                Pick Your <span className="italic text-frog-green">Expert.</span>
              </h2>
              <p className="text-black/60 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                Choose the expert that fits your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent, i) => {
              const isActive = selectedAgent.name === agent.name
              return (
                <ScrollReveal key={agent.name} delay={i * 0.08}>
                  <button
                    type="button"
                    onClick={() => setSelectedAgent(agent)}
                    className="w-full text-left transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    aria-label={`Select ${agent.name} as your agent`}
                  >
                    <div className={`ring-1 rounded-[2rem] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isActive
                        ? 'ring-frog-green/40 bg-frog-green/[0.06]'
                        : 'ring-black/[0.04] bg-white'
                    }`}>
                      <div className={`rounded-[calc(2rem-0.375rem)] p-6 md:p-8 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isActive
                          ? 'bg-white shadow-[0_0_40px_rgba(122,201,67,0.08)]'
                          : 'bg-frog-light'
                      }`}>
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-frog-green/60 to-transparent" />
                        )}

                        <div className="flex items-start gap-5 mb-5">
                          {/* Agent icon */}
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isActive
                              ? 'bg-frog-green/15 ring-frog-green/30'
                              : 'bg-frog-green/5 ring-frog-green/10'
                          }`}>
                            <agent.icon className={`w-6 h-6 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              isActive ? 'text-frog-green' : 'text-black/60'
                            }`} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-2xl font-black text-black">
                                {agent.name}
                              </h3>
                              {isActive && (
                                <span className="w-5 h-5 rounded-full bg-frog-green flex items-center justify-center transition-all duration-500">
                                  <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                                </span>
                              )}
                            </div>
                            <p className="text-frog-green text-xs font-bold uppercase tracking-wider">
                              {agent.role}
                            </p>
                          </div>
                        </div>

                        <p className="text-black/60 text-sm leading-relaxed mb-4">
                          {agent.description}
                        </p>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {agent.specialties.map((spec) => (
                            <span
                              key={spec}
                              className={`inline-block text-[10px] px-3 py-1 rounded-full ring-1 font-bold uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                                isActive
                                  ? 'bg-frog-green/10 text-frog-green ring-frog-green/20'
                                  : 'bg-frog-light text-black/60 ring-black/[0.04]'
                              }`}
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Contact row */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/[0.04]">
                          <div className="flex items-center gap-2.5">
                            <Phone className="w-3.5 h-3.5 text-frog-green" strokeWidth={1.5} />
                            <span className="text-black/60 text-sm font-bold">{agent.display}</span>
                          </div>
                          <a
                            href={agent.waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn inline-flex items-center gap-2 min-h-[44px] text-frog-green text-xs font-bold uppercase tracking-wider hover:text-frog-green/70 transition-colors duration-300"
                            aria-label={`Open WhatsApp chat with ${agent.name}`}
                          >
                            WhatsApp
                            <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ REGISTRATION FORM — DARK GLASS PANEL ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        {/* Gradient accents */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-frog-green/[0.02] rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow>Register</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter">
                Start Your <span className="italic text-frog-green">Registration.</span>
              </h2>
              <p className="text-frog-muted text-base max-w-xl mx-auto mt-4 leading-relaxed">
                Fill in your details. We&apos;ll connect you to your agent on WhatsApp.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-10">
                {/* Form header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-frog-light">
                      Register Your Business
                    </h3>
                    <p className="text-frog-muted text-xs">
                      via {selectedAgent.name} · {selectedAgent.role}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-frog-muted text-xs uppercase tracking-wider font-bold mb-2.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        required
                        className={inputClass}
                        aria-label="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-frog-muted text-xs uppercase tracking-wider font-bold mb-2.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Frog Logistics CC"
                        required
                        className={inputClass}
                        aria-label="Your business name"
                      />
                    </div>
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-frog-muted text-xs uppercase tracking-wider font-bold mb-3">
                      Package
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {packages.map((pkg) => (
                        <button
                          key={pkg}
                          type="button"
                          onClick={() => setSelectedPackage(pkg)}
                          className={`min-h-[44px] py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            selectedPackage === pkg
                              ? 'bg-frog-green text-black shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                              : 'bg-frog-shell ring-1 ring-frog-hairline text-frog-muted hover:ring-frog-green/20 hover:text-frog-light'
                          }`}
                          aria-label={`Select ${pkg} package`}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                    {/* Package details */}
                    <div className="mt-3 flex items-center gap-2 text-frog-muted/50 text-xs">
                      {selectedPackage === 'Basic' && <span>CC Registration · Name Reservation · BIPA Filing · Tax Certificate</span>}
                      {selectedPackage === 'Advanced' && <span>Basic + Company Profile · Domain Registration · BO Filing</span>}
                      {selectedPackage === 'Full' && <span>Advanced + Business Plan · Social Setup · Pitch Deck Template</span>}
                    </div>
                  </div>

                  {/* Agent Selection */}
                  <div>
                    <label className="block text-frog-muted text-xs uppercase tracking-wider font-bold mb-3">
                      Choose Agent
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {agents.map((agent) => {
                        const isActive = selectedAgent.name === agent.name
                        return (
                          <button
                            key={agent.name}
                            type="button"
                            onClick={() => setSelectedAgent(agent)}
                            className={`min-h-[44px] flex items-center gap-3 p-4 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              isActive
                                ? 'bg-frog-green/10 ring-2 ring-frog-green/30'
                                : 'bg-frog-shell ring-1 ring-frog-hairline hover:ring-frog-green/15'
                            }`}
                            aria-label={`Select ${agent.name} as agent`}
                          >
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ring-1 transition-all duration-700 ${
                              isActive
                                ? 'bg-frog-green/20 ring-frog-green/30'
                                : 'bg-frog-green/5 ring-frog-green/10'
                            }`}>
                              <agent.icon className={`w-4 h-4 transition-colors duration-700 ${
                                isActive ? 'text-frog-green' : 'text-frog-muted'
                              }`} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <p className="text-frog-light text-sm font-bold">{agent.name}</p>
                              <p className="text-frog-muted text-[10px] uppercase tracking-wider">{agent.role}</p>
                            </div>
                            {isActive && (
                              <span className="w-5 h-5 rounded-full bg-frog-green flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Selected agent indicator */}
                  <div className="flex items-center gap-3 bg-frog-green/[0.04] ring-1 ring-frog-green/10 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                      {(() => {
                        const AgentIcon = selectedAgent.icon
                        return <AgentIcon className="w-3.5 h-3.5 text-frog-green" strokeWidth={1.5} />
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-frog-light text-sm font-bold">
                        Messaging: {selectedAgent.name}
                      </p>
                      <p className="text-frog-muted text-xs truncate">
                        {selectedAgent.role} · {selectedAgent.display}
                      </p>
                    </div>
                    <span className="text-frog-green text-xs font-bold">{selectedPackage} Package</span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-2xl px-8 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-[0.98] transition-all duration-300"
                    aria-label="Connect to WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                    Connect Now
                    <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </button>

                  <p className="text-frog-muted/40 text-xs text-center">
                    Opens WhatsApp with a pre-filled message to {selectedAgent.name}.
                  </p>
                </form>
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

                {/* Quick contact list */}
                <div className="space-y-3">
                  {agents.map((agent) => (
                    <a
                      key={agent.name}
                      href={agent.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white ring-1 ring-black/[0.04] hover:ring-frog-green/20 transition-all duration-500 group min-h-[44px]"
                      aria-label={`Chat with ${agent.name}`}
                    >
                      <div className="flex items-center gap-3">
                        <agent.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                        <div>
                          <p className="text-black text-sm font-bold">{agent.name}</p>
                          <p className="text-black/60 text-xs">{agent.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-black/60 text-xs font-bold">{agent.display}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-frog-green group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
                      </div>
                    </a>
                  ))}
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
                    SMEfrog handles the legal. Gemsweb handles the digital.
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
                href={selectedAgent.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 min-h-[44px] bg-frog-green text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
                aria-label={`Chat with ${selectedAgent.name} on WhatsApp`}
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
