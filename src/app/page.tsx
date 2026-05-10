import { ArrowRight, MessageCircle, Check } from 'lucide-react'
import Link from 'next/link'

const trustItems = [
  '100% Remote',
  '7–10 Day Turnaround',
  'All BIPA Filings Included',
  '2X Cheaper Than Market Average',
]

const services = [
  {
    title: 'Business Registration',
    description: 'Simple, compliant company setup.',
    items: ['CC Registration', 'Pty Ltd Registration', 'Name Reservation', 'BIPA Filings', 'BO Declaration', 'Digital Certificates', 'Bank-Ready Documents'],
  },
  {
    title: 'Startup Support',
    description: 'Helping founders launch professionally.',
    items: ['Business Plans', 'Company Profiles', 'Pitch Decks', 'Funding Documents', 'Startup Consultation'],
  },
  {
    title: 'Business Documentation',
    description: 'Professional internal business systems.',
    items: ['Company Policies', 'Contracts', 'Templates', 'HR Documents', 'Compliance Documents', 'Proposal Drafting'],
  },
  {
    title: 'Digital Services',
    description: 'Modern tools for modern founders.',
    partner: 'In Partnership With Gemsweb Digital',
    items: ['Website Development', 'Landing Pages', 'Business Emails', 'Branding Support', 'Digital Setup'],
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
                Namibia&apos;s Startup Partner
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-frog-light leading-[1.05] tracking-tight">
                Jump Into Business<span className="text-frog-green">.</span>
              </h1>

              <p className="text-base md:text-lg text-[#8BA89A] max-w-xl mt-6 leading-relaxed">
                Simple. Fast. Affordable startup support for Namibian entrepreneurs.
                We help startups register, launch, structure, and grow — without the
                expensive consultant fees, confusing paperwork, or slow turnaround times.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 transition-colors duration-300"
                >
                  Register Your Business
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <a
                  href="https://wa.me/264813411522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Brand ID Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden ring-1 ring-white/[0.08] bg-frog-dark">
                  <img
                    src="/brand-id.png"
                    alt="SMEfrog — Simple. Fast. For Startups."
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-frog-black/80 backdrop-blur-lg rounded-2xl p-4 ring-1 ring-white/[0.08]">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-frog-green font-heading font-bold text-sm">100%</p>
                      <p className="text-[#8BA89A] text-xs">Remote</p>
                    </div>
                    <div>
                      <p className="text-frog-green font-heading font-bold text-sm">7–10</p>
                      <p className="text-[#8BA89A] text-xs">Days</p>
                    </div>
                    <div>
                      <p className="text-frog-green font-heading font-bold text-sm">2X</p>
                      <p className="text-[#8BA89A] text-xs">Cheaper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-8 gap-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#8BA89A]">
                <span className="w-5 h-5 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light">
              Services Built for Startups
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-[#151D19] ring-1 ring-white/[0.06] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-1">
                  {service.title}
                </h3>
                {service.partner && (
                  <a
                    href="https://gemsweb.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-3 hover:bg-frog-green/20 transition-colors"
                  >
                    {service.partner}
                  </a>
                )}
                <p className="text-[#8BA89A] text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                      <span className="text-[#8BA89A] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light mb-3">
              Startup-Friendly Pricing
            </h2>
            <p className="text-[#8BA89A] text-base max-w-lg mx-auto">
              Transparent pricing. No hidden costs. Professional support at a fraction of the market rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'BASIC', price: 'N$800', desc: 'CC Registration' },
              { name: 'FULL', price: 'N$1,750', desc: 'CC Registration', featured: true },
              { name: 'SCALE UP', price: 'N$3,500', desc: 'Pty Ltd Registration' },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 text-center ${
                  pkg.featured
                    ? 'bg-frog-green/10 ring-1 ring-frog-green/30'
                    : 'bg-[#151D19] ring-1 ring-white/[0.06]'
                }`}
              >
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-frog-green">
                  {pkg.name}
                </span>
                <p className="text-2xl md:text-3xl font-heading font-bold text-frog-light mt-2">
                  {pkg.price}
                </p>
                <p className="text-[#8BA89A] text-sm mt-1">{pkg.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              View full pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light mb-4">
            Ready to Jump Into Business?
          </h2>
          <p className="text-[#8BA89A] text-base md:text-lg mb-8">
            Get started today with affordable, remote startup support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 transition-colors duration-300"
            >
              Register Your Business
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ring-1 ring-white/[0.15] text-frog-light rounded-full px-7 py-3.5 text-sm font-medium bg-white/[0.05] hover:bg-white/[0.1] transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
