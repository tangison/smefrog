'use client'

import { Building2, Rocket, FileText, Globe, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'Business Registration',
    description: 'We simplify company registration through fast, affordable, fully remote compliance support.',
    icon: Building2,
    href: '/services/business-registration',
    items: ['CC Registration', 'Pty Ltd Registration', 'Name Reservation', 'BIPA Filings', 'BO Declaration', 'Digital Certificates', 'Bank-Ready Documents'],
  },
  {
    title: 'Startup Support',
    description: 'We help entrepreneurs launch professionally with business plans, profiles, documents, and operational support.',
    icon: Rocket,
    href: '/services/startup-support',
    items: ['Business Plans', 'Company Profiles', 'Pitch Decks', 'Funding Documents', 'Startup Consultation'],
  },
  {
    title: 'Business Documentation',
    description: 'Professional internal business systems — policies, contracts, and compliance documents.',
    icon: FileText,
    href: '/services/business-documents',
    items: ['Company Policies', 'Contracts', 'Templates', 'HR Documents', 'Compliance Documents', 'Proposal Drafting'],
  },
  {
    title: 'Digital Services',
    description: 'We provide modern digital tools and partnerships that help startups establish a professional online presence.',
    icon: Globe,
    href: '/services/digital-services',
    badge: { label: 'In Partnership With Gemsweb Digital', url: 'https://gemsweb.xyz' },
    items: ['Website Development', 'Landing Pages', 'Business Emails', 'Branding Support', 'Digital Setup'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              What We Do
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Services Built for Startups
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              From registration to digital presence — everything a Namibian entrepreneur needs to launch and grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                  <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-frog-muted text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Badge */}
                    {service.badge && (
                      <a
                        href={service.badge.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4 hover:bg-frog-green/20 transition-colors w-fit"
                      >
                        {service.badge.label}
                      </a>
                    )}

                    {/* Items */}
                    <ul className="space-y-2 flex-1 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                          <span className="text-frog-muted text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-frog-green text-sm font-medium hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] mt-auto"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-3">
              Need something custom?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-frog-muted text-base mb-6">
              We can tailor packages to fit your specific business needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat on WhatsApp
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
