'use client'

import { TrendingDown, Wifi, Lightbulb, Clock, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const values = [
  {
    title: '2X Cheaper Than Industry Standard',
    description: 'Most consultants charge premium prices for basic compliance work. We use lean digital systems to deliver the same outcome at a startup-friendly price.',
    icon: TrendingDown,
  },
  {
    title: 'Fully Remote',
    description: 'No office visits. No paperwork confusion. Everything handled online through WhatsApp and email.',
    icon: Wifi,
  },
  {
    title: 'Built for Startups',
    description: 'Traditional firms serve corporations. We serve the people who actually need affordable help.',
    icon: Lightbulb,
    list: ['Young entrepreneurs', 'Side hustlers', 'Small businesses', 'Freelancers', 'Informal businesses becoming compliant'],
  },
  {
    title: 'Fast Turnaround',
    description: 'Most registrations completed within:',
    icon: Clock,
    highlight: '7–10 Working Days',
  },
]

const steps = [
  { number: '01', title: 'Contact Us', description: 'Message us on WhatsApp.' },
  { number: '02', title: 'Send Your Details', description: 'We collect the required registration information.' },
  { number: '03', title: 'We Handle Everything', description: 'Compliance, forms, filings, and submissions.' },
  { number: '04', title: 'Receive Your Documents', description: 'Delivered digitally and ready for business.' },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
      {children}
    </span>
  )
}

function DoubleBezel({ children, className = '', highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  return (
    <div className={`bg-frog-shell ring-1 ${highlight ? 'ring-frog-green/25' : 'ring-frog-hairline'} p-1.5 rounded-[2rem] ${className}`}>
      <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
        {children}
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>About SMEfrog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Built for Entrepreneurs
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-frog-muted leading-relaxed mb-6">
              SMEfrog was created to solve a simple problem:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-xl md:text-2xl lg:text-3xl text-frog-light font-heading font-semibold leading-relaxed mb-8">
              Starting a business in Namibia is unnecessarily expensive, confusing, and slow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-frog-muted leading-relaxed mb-12">
              We built a lean, digital-first support company focused on helping founders
              start properly — without wasting time or money.
            </p>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal delay={0.12}>
            <div className="bg-frog-shell ring-1 ring-frog-green/20 p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-1 self-stretch bg-frog-green/40 rounded-full shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-frog-green/60 font-medium mb-2">
                      Our Mission
                    </p>
                    <p className="text-lg md:text-xl font-heading font-semibold text-frog-light leading-relaxed">
                      Help more entrepreneurs become formal businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHY SMEFROG ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Why SMEfrog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light max-w-3xl leading-snug mb-4">
              Starting a business shouldn&apos;t cost more than the business itself.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="w-1 h-12 bg-frog-green/30 rounded-full mb-12 md:mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.06}>
                <DoubleBezel className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-2">
                    {value.title}
                  </h3>
                  {value.highlight && (
                    <p className="text-3xl md:text-4xl font-heading font-bold text-frog-green mb-2">
                      {value.highlight}
                    </p>
                  )}
                  <p className="text-frog-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                  {value.list && (
                    <ul className="space-y-1.5 mt-3">
                      {value.list.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                          <span className="text-frog-muted text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>How It Works</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light mb-12">
              Four Simple Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.08}>
                <DoubleBezel className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-heading font-bold flex items-center justify-center text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-base font-heading font-bold text-frog-light mb-1">
                    {step.title}
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
