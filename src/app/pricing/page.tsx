'use client'

import { Check, ArrowRight, MessageCircle, Crown, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const ccPackages = [
  {
    name: 'BASIC',
    price: '800',
    features: ['Name Reservation', 'Form CC8', 'Form CC1', 'Submission Handling'],
    featured: false,
  },
  {
    name: 'ADVANCED',
    price: '1,200',
    features: ['Everything in Basic', 'BO Filing', 'Digital Certificate', 'Compliance Handling'],
    featured: false,
  },
  {
    name: 'FULL',
    price: '1,750',
    features: ['Everything in Advanced', 'Remote Support', 'WhatsApp Assistance', 'Bank-Ready Documents', 'Priority Communication'],
    featured: true,
  },
]

const ptyltdFeatures = [
  'Form CM5',
  'MOI Documents',
  'CM1 & CM29',
  'BO Declaration',
  'BIPA Filing',
  'Digital Certificate',
  'Full Remote Handling',
  'Priority Support',
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
export default function PricingPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Startup-Friendly Pricing</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Transparent Pricing.<br />No Hidden Costs.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Professional support without inflated consultant pricing. What you see is what you pay.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CC REGISTRATION PACKAGES ═══ */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.06}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-8">
              CC Registration Packages
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ccPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Tier + Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                        {pkg.name}
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-semibold bg-frog-green text-frog-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-base font-heading text-frog-muted">N$</span>
                      <span className="text-4xl font-heading font-bold text-frog-light">{pkg.price}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {pkg.featured ? (
                      <a
                        href="https://wa.me/264813411522"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        Get Started
                        <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    ) : (
                      <a
                        href="https://wa.me/264813411522"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        Get Started
                        <span className="w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    )}
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PTY LTD REGISTRATION ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.06}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-8">
              Pty Ltd Registration
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-frog-shell ring-1 ring-frog-green/20 p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
                      SCALE UP PACKAGE
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-heading text-frog-muted">N$</span>
                      <span className="text-5xl md:text-6xl font-heading font-bold text-frog-light">3,500</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:text-right">
                    <span className="text-frog-muted text-sm line-through">
                      Typical Market Price: N$6,450+
                    </span>
                    <span className="text-frog-green text-lg md:text-xl font-heading font-bold">
                      SMEfrog Price: N$3,500
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {ptyltdFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                      </span>
                      <span className="text-frog-muted text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-frog-green/15">
                  <span className="text-frog-green text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                    Save over N$2,950 compared to market rates
                  </span>
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    Get Started
                    <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-4">
              Ready to Get Started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8">
              Choose your package and start your business registration today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
