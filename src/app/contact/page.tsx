'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Shield, Zap, Check, MapPin, Globe, Phone, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const agents = [
  {
    name: 'Gadafi',
    phone: '264813411522',
    display: '081 341 1522',
    role: 'Compliance Expert',
    description: 'Specializes in business registration, legal compliance, and documentation. Guides you through Namibia\'s regulatory requirements with precision.',
    icon: Shield,
    specialties: ['Business Registration', 'Legal Compliance', 'Company Documents'],
    waLink: 'https://wa.me/264813411522',
  },
  {
    name: 'Mux',
    phone: '264853057020',
    display: '085 305 7020',
    role: 'Digital Strategist',
    description: 'Expert in digital services, online presence, and strategic growth. Helps you build and scale your digital footprint.',
    icon: Zap,
    specialties: ['Digital Services', 'Online Strategy', 'Brand Growth'],
    waLink: 'https://wa.me/264853057020',
  },
]

const packages = ['Basic', 'Advanced', 'Full']

const inputClass = 'bg-frog-card ring-1 ring-frog-hairline rounded-xl px-4 py-3.5 text-frog-light text-sm focus:ring-[#7AC943]/30 outline-none w-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-frog-muted/40'

/* ─── Page ──────────────────────────────────────────── */
export default function ContactPage() {
  const [fullName, setFullName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('Advanced')
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  const buildWhatsAppUrl = () => {
    const message = `Hi ${selectedAgent.name}! I'm ${fullName}. I want to register my business "${businessName}" with the ${selectedPackage} package. Looking forward to connecting!`
    return `https://wa.me/${selectedAgent.phone}?text=${encodeURIComponent(message)}`
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7AC943]/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Contact</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let&apos;s <span className="italic text-[#7AC943]">Talk.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              Skip the queue. Choose a specialist, fill in your details, and get connected on WhatsApp in seconds. No emails. No waiting. Just action.
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
                  className="group inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3 hover:bg-white/[0.08] hover:border-[#7AC943]/20 transition-all duration-500"
                >
                  <agent.icon className="w-4 h-4 text-[#7AC943]" strokeWidth={1.5} />
                  <span className="text-white/60 text-sm font-bold">{agent.name}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-[#7AC943] text-xs font-bold">{agent.role}</span>
                  <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-[#7AC943] group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ AGENT CARDS — LIGHT ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-[#F8F9F4]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow light>Choose Your Specialist</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Talk to the Right <span className="italic text-[#7AC943]">Expert.</span>
              </h2>
              <p className="text-[#6B7280] text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                Each agent brings unique expertise. Pick the one that fits your needs and reach out directly.
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
                  >
                    <div className={`ring-1 rounded-[2rem] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isActive
                        ? 'ring-[#7AC943]/40 bg-[#7AC943]/[0.06]'
                        : 'ring-black/[0.04] bg-white'
                    }`}>
                      <div className={`rounded-[calc(2rem-0.375rem)] p-6 md:p-8 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isActive
                          ? 'bg-white shadow-[0_0_40px_rgba(122,201,67,0.08)]'
                          : 'bg-[#F8F9F4]'
                      }`}>
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#7AC943]/60 to-transparent" />
                        )}

                        <div className="flex items-start gap-5 mb-5">
                          {/* Agent icon */}
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isActive
                              ? 'bg-[#7AC943]/15 ring-[#7AC943]/30'
                              : 'bg-[#7AC943]/5 ring-[#7AC943]/10'
                          }`}>
                            <agent.icon className={`w-6 h-6 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              isActive ? 'text-[#7AC943]' : 'text-[#6B7280]'
                            }`} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-2xl font-black text-[#1A1A1A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {agent.name}
                              </h3>
                              {isActive && (
                                <span className="w-5 h-5 rounded-full bg-[#7AC943] flex items-center justify-center transition-all duration-500">
                                  <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                                </span>
                              )}
                            </div>
                            <p className="text-[#7AC943] text-xs font-bold uppercase tracking-wider">
                              {agent.role}
                            </p>
                          </div>
                        </div>

                        <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                          {agent.description}
                        </p>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {agent.specialties.map((spec) => (
                            <span
                              key={spec}
                              className={`inline-block text-[10px] px-3 py-1 rounded-full ring-1 font-bold uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                                isActive
                                  ? 'bg-[#7AC943]/10 text-[#7AC943] ring-[#7AC943]/20'
                                  : 'bg-[#F5F5F5] text-[#6B7280] ring-black/[0.04]'
                              }`}
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Contact row */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/[0.04]">
                          <div className="flex items-center gap-2.5">
                            <Phone className="w-3.5 h-3.5 text-[#7AC943]" strokeWidth={1.5} />
                            <span className="text-[#6B7280] text-sm font-bold">{agent.display}</span>
                          </div>
                          <a
                            href={agent.waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn inline-flex items-center gap-2 text-[#7AC943] text-xs font-bold uppercase tracking-wider hover:text-[#7AC943]/70 transition-colors duration-300"
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
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#7AC943]/[0.02] rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-dark/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow>Registration Form</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black text-frog-light tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Start Your <span className="italic text-[#7AC943]">Registration.</span>
              </h2>
              <p className="text-frog-muted text-base max-w-xl mx-auto mt-4 leading-relaxed">
                Fill in your details below. We&apos;ll connect you directly to your chosen agent on WhatsApp with a pre-filled message.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-10">
                {/* Form header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-frog-light" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
                      />
                    </div>
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-frog-muted text-xs uppercase tracking-wider font-bold mb-3">
                      Select Package
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {packages.map((pkg) => (
                        <button
                          key={pkg}
                          type="button"
                          onClick={() => setSelectedPackage(pkg)}
                          className={`py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            selectedPackage === pkg
                              ? 'bg-[#7AC943] text-black shadow-[0_0_20px_rgba(122,201,67,0.15)]'
                              : 'bg-frog-shell ring-1 ring-frog-hairline text-frog-muted hover:ring-[#7AC943]/20 hover:text-frog-light'
                          }`}
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
                      Choose Your Agent
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {agents.map((agent) => {
                        const isActive = selectedAgent.name === agent.name
                        return (
                          <button
                            key={agent.name}
                            type="button"
                            onClick={() => setSelectedAgent(agent)}
                            className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              isActive
                                ? 'bg-[#7AC943]/10 ring-2 ring-[#7AC943]/30'
                                : 'bg-frog-shell ring-1 ring-frog-hairline hover:ring-[#7AC943]/15'
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ring-1 transition-all duration-700 ${
                              isActive
                                ? 'bg-[#7AC943]/20 ring-[#7AC943]/30'
                                : 'bg-[#7AC943]/5 ring-[#7AC943]/10'
                            }`}>
                              <agent.icon className={`w-4 h-4 transition-colors duration-700 ${
                                isActive ? 'text-[#7AC943]' : 'text-frog-muted'
                              }`} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <p className="text-frog-light text-sm font-bold">{agent.name}</p>
                              <p className="text-frog-muted text-[10px] uppercase tracking-wider">{agent.role}</p>
                            </div>
                            {isActive && (
                              <span className="w-5 h-5 rounded-full bg-[#7AC943] flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Selected agent indicator */}
                  <div className="flex items-center gap-3 bg-[#7AC943]/[0.04] ring-1 ring-[#7AC943]/10 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center shrink-0">
                      {(() => {
                        const AgentIcon = selectedAgent.icon
                        return <AgentIcon className="w-3.5 h-3.5 text-[#7AC943]" strokeWidth={1.5} />
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
                    <span className="text-[#7AC943] text-xs font-bold">{selectedPackage} Package</span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[#7AC943] text-black font-black rounded-2xl px-8 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-[0.98] transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                    Connect to WhatsApp
                    <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </button>

                  <p className="text-frog-muted/40 text-xs text-center">
                    You&apos;ll be redirected to WhatsApp with a pre-filled message to {selectedAgent.name}.
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
              <div className="bg-[#F8F9F4] rounded-[2rem] p-8 md:p-10 ring-1 ring-black/[0.04] h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A1A] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Windhoek, Namibia
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  We operate 100% remotely from Windhoek, serving entrepreneurs across all 14 regions of Namibia. No office visits needed — everything happens through WhatsApp and email.
                </p>

                {/* Quick contact list */}
                <div className="space-y-3">
                  {agents.map((agent) => (
                    <a
                      key={agent.name}
                      href={agent.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white ring-1 ring-black/[0.04] hover:ring-[#7AC943]/20 transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-3">
                        <agent.icon className="w-4 h-4 text-[#7AC943]" strokeWidth={1.5} />
                        <div>
                          <p className="text-[#1A1A1A] text-sm font-bold">{agent.name}</p>
                          <p className="text-[#6B7280] text-xs">{agent.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#6B7280] text-xs font-bold">{agent.display}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7AC943] group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Gemsweb Partnership */}
            <ScrollReveal delay={0.08}>
              <div className="bg-[#0A0A0A] rounded-[2rem] p-8 md:p-10 ring-1 ring-white/[0.06] h-full relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#7AC943]/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center mb-6">
                    <Globe className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-frog-light mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Digital Partner
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed mb-6">
                    SMEfrog&apos;s digital services are powered by <span className="text-[#7AC943] font-bold">Gemsweb Digital</span> — a full-service digital agency specializing in web development, branding, and online strategy for African businesses.
                  </p>

                  {/* Partnership card */}
                  <div className="bg-frog-shell ring-1 ring-[#7AC943]/15 rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-[#7AC943]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-frog-light text-sm font-bold">Gemsweb Digital</p>
                        <p className="text-frog-muted text-[10px] uppercase tracking-wider">Official Digital Partner</p>
                      </div>
                    </div>
                    <a
                      href="https://gemsweb.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/gem inline-flex items-center gap-2 text-[#7AC943] text-sm font-bold hover:text-[#7AC943]/70 transition-colors duration-300"
                    >
                      gemsweb.xyz
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                  </div>

                  <p className="text-frog-muted/50 text-xs leading-relaxed">
                    From website development to social media setup, Gemsweb Digital handles the digital side of your business while SMEfrog handles the legal.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA — DARK ═══ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7AC943]/[0.04] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <Eyebrow>Ready?</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-frog-light tracking-tighter mb-6 italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Jump Into<br />Business.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              400+ entrepreneurs already chose the faster, cheaper, smarter way. Your turn.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={selectedAgent.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#7AC943] text-black font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat with {selectedAgent.name}
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] text-white font-black rounded-full px-10 py-5 text-sm tracking-widest uppercase hover:bg-white/[0.08] active:scale-95 transition-all duration-300"
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
