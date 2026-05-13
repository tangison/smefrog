'use client'

import { ScrollReveal } from './scroll-reveal'
import { Check, ArrowRight, Crown } from 'lucide-react'

const ccPackages = [
  {
    name: 'BASIC',
    price: '800',
    features: [
      'Name Reservation',
      'Form CC8',
      'Form CC1',
      'Submission Handling',
    ],
    featured: false,
  },
  {
    name: 'ADVANCED',
    price: '1,200',
    features: [
      'Everything in Basic',
      'BO Filing',
      'Digital Certificate',
      'Compliance Handling',
    ],
    featured: false,
  },
  {
    name: 'FULL',
    price: '1,750',
    features: [
      'Everything in Advanced',
      'Remote Support',
      'WhatsApp Assistance',
      'Bank-Ready Documents',
      'Priority Communication',
    ],
    featured: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            Startup-Friendly Pricing
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-12 md:mb-16">
            Transparent Pricing. No Hidden Costs.
          </h2>
        </ScrollReveal>

        {/* CC Registration Packages */}
        <ScrollReveal delay={0.15}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-frog-light mb-8">
            CC Registration Packages
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {ccPackages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.08}>
              {/* Outer Shell - Double Bezel */}
              <div
                className={`bg-white/[0.03] ring-1 p-1.5 rounded-[2rem] h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  pkg.featured
                    ? 'ring-frog-green/30 bg-frog-green/[0.05]'
                    : 'ring-white/[0.08]'
                }`}
              >
                {/* Inner Core */}
                <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8 h-full flex flex-col">
                  {/* Package Tier */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                      {pkg.name}
                    </span>
                    {pkg.featured && (
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium bg-frog-green text-frog-black flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-lg font-heading text-[#8BA89A]">N$</span>
                    <span className="text-4xl font-heading font-bold text-frog-light">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-frog-green" strokeWidth={2.5} />
                        </span>
                        <span className="text-[#8BA89A] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      pkg.featured
                        ? 'bg-frog-green text-frog-black hover:bg-frog-green/90'
                        : 'ring-1 ring-frog-green/30 text-frog-green bg-frog-green/[0.05] hover:bg-frog-green/[0.1]'
                    }`}
                  >
                    Get Started
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 ${
                        pkg.featured ? 'bg-black/10' : 'bg-frog-green/10'
                      }`}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pty Ltd Registration */}
        <ScrollReveal>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-frog-light mb-8">
            Pty Ltd Registration
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {/* Outer Shell */}
          <div className="bg-white/[0.03] ring-1 ring-frog-green/20 p-1.5 rounded-[2rem]">
            {/* Inner Core */}
            <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                    SCALE UP PACKAGE
                  </span>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-lg font-heading text-[#8BA89A]">N$</span>
                    <span className="text-5xl md:text-6xl font-heading font-bold text-frog-light">
                      3,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#8BA89A] text-sm line-through">
                    Typical Market Price: N$6,450+
                  </span>
                  <span className="text-frog-green text-lg font-semibold">
                    SMEfrog Price: N$3,500
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  'Form CM5',
                  'MOI Documents',
                  'CM1 & CM29',
                  'BO Declaration',
                  'BIPA Filing',
                  'Digital Certificate',
                  'Full Remote Handling',
                  'Priority Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-frog-green" strokeWidth={2.5} />
                    </span>
                    <span className="text-[#8BA89A] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Green Accent Strip */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-frog-green/15">
                <span className="text-frog-green text-sm font-medium">
                  Save over N$2,950 compared to market rates
                </span>
                <a
                  href="https://wa.me/264813411522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-base hover:bg-frog-green/90 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  Get Started
                  <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
