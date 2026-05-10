import { Building2, Rocket, FileText, Globe, Check, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Business Registration',
    description: 'We simplify company registration through fast, affordable, fully remote compliance support.',
    icon: Building2,
    items: ['CC Registration', 'Pty Ltd Registration', 'Name Reservation', 'BIPA Filings', 'BO Declaration', 'Digital Certificates', 'Bank-Ready Documents'],
  },
  {
    title: 'Startup Support',
    description: 'We help entrepreneurs launch professionally with business plans, profiles, documents, and operational support.',
    icon: Rocket,
    items: ['Business Plans', 'Company Profiles', 'Pitch Decks', 'Funding Documents', 'Startup Consultation'],
  },
  {
    title: 'Business Documentation',
    description: 'Professional internal business systems — policies, contracts, and compliance documents.',
    icon: FileText,
    items: ['Company Policies', 'Contracts', 'Templates', 'HR Documents', 'Compliance Documents', 'Proposal Drafting'],
  },
  {
    title: 'Digital Services',
    description: 'We provide modern digital tools and partnerships that help startups establish a professional online presence.',
    icon: Globe,
    partner: 'In Partnership With Gemsweb Digital',
    partnerUrl: 'https://gemsweb.xyz',
    items: ['Website Development', 'Landing Pages', 'Business Emails', 'Branding Support', 'Digital Setup'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
            Services Built for Startups
          </h1>
          <p className="text-[#8BA89A] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            From registration to digital presence — everything a Namibian entrepreneur needs to launch and grow.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-[#151D19] ring-1 ring-white/[0.06] p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Left — Info */}
                <div className="md:w-1/3 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[#8BA89A] text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {service.partner && (
                    <a
                      href={service.partnerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mt-3 hover:bg-frog-green/20 transition-colors"
                    >
                      {service.partner}
                    </a>
                  )}
                </div>

                {/* Right — Items */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                        </span>
                        <span className="text-frog-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-3">
            Need something custom?
          </h2>
          <p className="text-[#8BA89A] text-base mb-6">
            We can tailor packages to fit your specific business needs.
          </p>
          <a
            href="https://wa.me/264813411522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
