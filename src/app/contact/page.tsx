'use client'

import { useState } from 'react'
import { MessageCircle, ArrowRight, Phone, Globe } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

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

const timelines = [
  'ASAP',
  '1–2 Weeks',
  '1 Month',
  'Flexible',
]

const agents = [
  { name: 'Gadafi', number: '813411522', display: '081 341 1522' },
  { name: 'Mux', number: '853057020', display: '085 305 7020' },
]

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'Gadafi',
    value: '081 341 1522',
    href: 'https://wa.me/264813411522',
  },
  {
    icon: MessageCircle,
    label: 'Mux',
    value: '085 305 7020',
    href: 'https://wa.me/264853057020',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'smefrog.tangison.com',
    href: 'https://smefrog.tangison.com',
  },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
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
  const [timeline, setTimeline] = useState('')
  const [agent, setAgent] = useState('Gadafi')
  const [notes, setNotes] = useState('')

  const selectedAgent = agents.find(a => a.name === agent) || agents[0]

  const buildWhatsAppUrl = () => {
    const agentNumber = selectedAgent.number
    const agentName = selectedAgent.name
    const message = `Hi ${agentName}, I'm ${fullName} from ${businessName}. I'm interested in ${service} with a budget of ${budget} and timeline of ${timeline}. ${notes}`
    return `https://wa.me/264${agentNumber}?text=${encodeURIComponent(message)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(), '_blank')
  }

  return (
    <>
      {/* ═══ HEADER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Contact</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Get in Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Ready to start? Have questions? Fill out the form and we&apos;ll connect you directly via WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FORM + INFO ═══ */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                  <h2 className="text-xl font-heading font-bold text-frog-light mb-6">
                    Smart WhatsApp Contact
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
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

                    {/* Business Name */}
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

                    {/* Service Needed */}
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

                    {/* Budget */}
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

                    {/* Timeline */}
                    <div>
                      <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        required
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="bg-frog-card text-frog-muted">Select a timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-frog-card text-frog-light">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Agent */}
                    <div>
                      <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-3">
                        Preferred Agent
                      </label>
                      <RadioGroup
                        value={agent}
                        onValueChange={setAgent}
                        className="flex gap-4"
                      >
                        {agents.map((a) => (
                          <div key={a.name} className="flex items-center gap-2.5">
                            <RadioGroupItem
                              value={a.name}
                              id={`agent-${a.name}`}
                              className="border-frog-green/40 text-frog-green data-[state=checked]:border-frog-green"
                            />
                            <Label
                              htmlFor={`agent-${a.name}`}
                              className="text-frog-light text-sm cursor-pointer"
                            >
                              {a.name}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-frog-muted text-xs uppercase tracking-wider font-medium mb-2">
                        Notes
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any additional details or questions..."
                        rows={3}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] w-full"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      Send via WhatsApp
                      <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <h2 className="text-xl font-heading font-bold text-frog-light mb-6">
                  Contact Us Directly
                </h2>

                <div className="space-y-3">
                  {contactInfo.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[1.25rem] hover:ring-frog-green/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      <div className="bg-frog-card rounded-[calc(1.25rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-4 flex items-center gap-3 w-full">
                        <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                          <method.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                        </span>
                        <div>
                          <p className="text-frog-muted text-xs">{method.label}</p>
                          <p className="text-frog-light text-sm font-medium">{method.value}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Direct WhatsApp CTA */}
                <div className="bg-frog-shell ring-1 ring-frog-green/20 p-1.5 rounded-[2rem] mt-8">
                  <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 text-center">
                    <div className="w-12 h-12 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-heading font-bold text-frog-light mb-2">
                      Prefer Direct Chat?
                    </h3>
                    <p className="text-frog-muted text-sm mb-4">
                      Skip the form and message us directly on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/264813411522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      Chat on WhatsApp
                      <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
