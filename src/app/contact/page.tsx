'use client'

import { useState } from 'react'
import { MessageCircle, ArrowRight, Shield, Zap, Check, Clock, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const services = [
  'Business Registration',
  'Startup Support',
  'Business Documents',
  'Digital Services',
  'Other',
]

const budgets = [
  'Under N$1,000',
  'N$1,000–N$2,000',
  'N$2,000–N$5,000',
  'N$5,000+',
]

const agents = [
  {
    name: 'Gadafi',
    phone: '264813411522',
    display: '081 341 1522',
    role: 'Compliance Expert',
    description: 'Specializes in business registration, legal compliance, and documentation. Guides you through regulatory requirements with precision.',
    icon: Shield,
    specialties: ['Business Registration', 'Legal Compliance', 'Company Documents'],
  },
  {
    name: 'Mux',
    phone: '264853057020',
    display: '085 305 7020',
    role: 'Digital Strategist',
    description: 'Expert in digital services, online presence, and strategic growth. Helps you build and scale your digital footprint.',
    icon: Zap,
    specialties: ['Digital Services', 'Online Strategy', 'Brand Growth'],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Choose Your Agent',
    description: 'Select the specialist that matches your needs — compliance or digital strategy.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Fill In Details',
    description: 'Tell us about your business, the service you need, and your budget.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Connect on WhatsApp',
    description: 'Get redirected to a direct WhatsApp chat with your chosen agent.',
    icon: MessageCircle,
  },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium mb-4 border ${
      light
        ? 'bg-frog-green/10 text-frog-green border-frog-green/20'
        : 'bg-frog-green/10 text-frog-green border-frog-green/20'
    }`}>
      {children}
    </span>
  )
}

const inputClass = 'bg-frog-card ring-1 ring-frog-hairline rounded-xl px-4 py-3 text-frog-light text-sm focus:ring-frog-green/30 outline-none w-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-frog-muted/50'

/* ─── Page ──────────────────────────────────────────── */
export default function ContactPage() {
  const [fullName, setFullName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  const buildWhatsAppUrl = () => {
    const message = `Hi ${selectedAgent.name}, I'm ${fullName} from ${businessName}. I'm interested in ${service} with a budget of ${budget}. Looking forward to connecting!`
    return `https://wa.me/${selectedAgent.phone}?text=${encodeURIComponent(message)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(), '_blank')
  }

  return (
    <>
      {/* ═══ HEADER — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-frog-green/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-green/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ScrollReveal>
            <Eyebrow>Contact</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Talk to the Right<br />
              <span className="text-frog-green">Expert</span>, Instantly
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
              Skip the queue. Choose a specialist, fill in your details, and get connected on WhatsApp in seconds. No emails. No waiting. Just action.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROCESS — LIGHT ═══ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow light>How It Works</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-black">
                Three Steps to Get Started
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div className="relative bg-white rounded-2xl p-6 md:p-8 ring-1 ring-frog-green/10 shadow-sm hover:shadow-md hover:ring-frog-green/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <span className="text-frog-green/20 text-5xl font-heading font-bold absolute top-4 right-6 select-none">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-5 group-hover:bg-frog-green/15 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <step.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-frog-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-frog-black/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT — DARK ═══ */}
      <section className="py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        {/* Gradient accents */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-frog-green/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow>Connect Now</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light">
                Choose Your Specialist
              </h2>
              <p className="text-frog-muted text-base max-w-xl mx-auto mt-3 leading-relaxed">
                Each agent brings unique expertise. Pick the one that fits your needs and reach out directly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* ─── LEFT: Agent Selection Cards ─── */}
            <div className="lg:col-span-2 space-y-5">
              {agents.map((agent, i) => {
                const isActive = selectedAgent.name === agent.name
                return (
                  <ScrollReveal key={agent.name} delay={i * 0.08}>
                    <button
                      type="button"
                      onClick={() => setSelectedAgent(agent)}
                      className="w-full text-left transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {/* DoubleBezel outer shell */}
                      <div className={`ring-1 rounded-[2rem] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isActive
                          ? 'ring-frog-green/40 bg-frog-green/[0.06]'
                          : 'ring-frog-hairline bg-frog-shell'
                      }`}>
                        {/* Inner core */}
                        <div className={`bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-5 md:p-6 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          isActive ? 'shadow-[inset_0_1px_1px_rgba(122,201,67,0.1)]' : ''
                        }`}>
                          {/* Active indicator glow */}
                          {isActive && (
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-frog-green/60 to-transparent" />
                          )}

                          <div className="flex items-start gap-4">
                            {/* Agent icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              isActive
                                ? 'bg-frog-green/15 ring-frog-green/30'
                                : 'bg-frog-green/5 ring-frog-green/10'
                            }`}>
                              <agent.icon className={`w-5 h-5 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                                isActive ? 'text-frog-green' : 'text-frog-muted'
                              }`} strokeWidth={1.5} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-base font-heading font-bold text-frog-light">
                                  {agent.name}
                                </h3>
                                {isActive && (
                                  <span className="w-5 h-5 rounded-full bg-frog-green flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                                    <Check className="w-3 h-3 text-frog-black" strokeWidth={2.5} />
                                  </span>
                                )}
                              </div>
                              <p className="text-frog-green text-xs font-medium uppercase tracking-wider mb-2">
                                {agent.role}
                              </p>
                              <p className="text-frog-muted text-sm leading-relaxed mb-3">
                                {agent.description}
                              </p>
                              {/* Specialties */}
                              <div className="flex flex-wrap gap-1.5">
                                {agent.specialties.map((spec) => (
                                  <span
                                    key={spec}
                                    className={`inline-block text-[10px] px-2 py-0.5 rounded-full ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                                      isActive
                                        ? 'bg-frog-green/10 text-frog-green ring-frog-green/20'
                                        : 'bg-frog-shell text-frog-muted ring-frog-hairline'
                                    }`}
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </ScrollReveal>
                )
              })}

              {/* Direct WhatsApp fallback */}
              <ScrollReveal delay={0.16}>
                <div className="mt-4 bg-frog-shell ring-1 ring-frog-green/15 rounded-[2rem] p-1.5">
                  <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-5 md:p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <p className="text-frog-muted text-sm mb-1">
                      Prefer to chat directly?
                    </p>
                    <p className="text-frog-muted/60 text-xs">
                      Skip the form and message {selectedAgent.name} directly.
                    </p>
                    <a
                      href={`https://wa.me/${selectedAgent.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 mt-3 text-frog-green text-sm font-medium hover:text-frog-green/80 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      Open WhatsApp
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ─── RIGHT: Contact Form ─── */}
            <ScrollReveal delay={0.06} className="lg:col-span-3">
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold text-frog-light">
                        Send a Message
                      </h2>
                      <p className="text-frog-muted text-xs">
                        via {selectedAgent.name} · {selectedAgent.role}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
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
                        <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Your business name"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Service + Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
                          Service Needed
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          required
                          className={`${inputClass} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled className="bg-frog-card text-frog-muted">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-frog-card text-frog-light">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
                          Budget
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          required
                          className={`${inputClass} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled className="bg-frog-card text-frog-muted">Select your budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-frog-card text-frog-light">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Selected Agent Indicator */}
                    <div className="flex items-center gap-3 bg-frog-green/[0.04] ring-1 ring-frog-green/10 rounded-xl px-4 py-3">
                      <div className="w-8 h-8 rounded-lg bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                        {(() => {
                          const AgentIcon = selectedAgent.icon
                          return <AgentIcon className="w-3.5 h-3.5 text-frog-green" strokeWidth={1.5} />
                        })()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-frog-light text-sm font-medium">
                          Messaging: {selectedAgent.name}
                        </p>
                        <p className="text-frog-muted text-xs truncate">
                          {selectedAgent.role} · {selectedAgent.display}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const otherAgent = agents.find(a => a.name !== selectedAgent.name)
                          if (otherAgent) setSelectedAgent(otherAgent)
                        }}
                        className="text-frog-green text-xs font-medium hover:text-frog-green/70 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0"
                      >
                        Switch
                      </button>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] w-full"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      Chat with {selectedAgent.name} on WhatsApp
                      <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                    </button>

                    <p className="text-frog-muted/50 text-xs text-center">
                      You&apos;ll be redirected to WhatsApp with a pre-filled message to {selectedAgent.name}.
                    </p>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
