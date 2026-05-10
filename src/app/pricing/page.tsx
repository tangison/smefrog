import { Check, ArrowRight, MessageCircle, Crown } from 'lucide-react'
import Link from 'next/link'

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

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            Startup-Friendly Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
            Transparent Pricing.<br />No Hidden Costs.
          </h1>
          <p className="text-[#8BA89A] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Professional support without inflated consultant pricing. What you see is what you pay.
          </p>
        </div>
      </section>

      {/* CC Registration Packages */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-8">
            CC Registration Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ccPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 md:p-8 flex flex-col ${
                  pkg.featured
                    ? 'bg-frog-green/[0.06] ring-1 ring-frog-green/30'
                    : 'bg-[#151D19] ring-1 ring-white/[0.06]'
                }`}
              >
                {/* Tier + Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                    {pkg.name}
                  </span>
                  {pkg.featured && (
                    <span className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-semibold bg-frog-green text-frog-black flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-base font-heading text-[#8BA89A]">N$</span>
                  <span className="text-4xl font-heading font-bold text-frog-light">{pkg.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
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
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    pkg.featured
                      ? 'bg-frog-green text-frog-black hover:bg-frog-green/90'
                      : 'ring-1 ring-frog-green/30 text-frog-green bg-frog-green/[0.05] hover:bg-frog-green/[0.1]'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pty Ltd Registration */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-8">
            Pty Ltd Registration
          </h2>

          <div className="rounded-2xl bg-[#151D19] ring-1 ring-frog-green/20 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                  SCALE UP PACKAGE
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-base font-heading text-[#8BA89A]">N$</span>
                  <span className="text-5xl md:text-6xl font-heading font-bold text-frog-light">3,500</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:text-right">
                <span className="text-[#8BA89A] text-sm line-through">
                  Typical Market Price: N$6,450+
                </span>
                <span className="text-frog-green text-base font-semibold">
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
                  <span className="text-[#8BA89A] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-frog-green/15">
              <span className="text-frog-green text-sm font-medium">
                Save over N$2,950 compared to market rates
              </span>
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
