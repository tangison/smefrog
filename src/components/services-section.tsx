'use client'

import { ScrollReveal } from './scroll-reveal'
import { Building2, Rocket, FileText, Globe } from 'lucide-react'

const services = [
  {
    title: 'Business Registration',
    icon: Building2,
    span: 'md:col-span-7 md:row-span-2',
    items: [
      'CC Registration',
      'Pty Ltd Registration',
      'Name Reservation',
      'BIPA Filings',
      'BO Declaration',
      'Digital Certificates',
      'Bank-Ready Documents',
    ],
  },
  {
    title: 'Startup Support',
    icon: Rocket,
    span: 'md:col-span-5',
    items: [
      'Business Plans',
      'Company Profiles',
      'Pitch Decks',
      'Funding Documents',
      'Startup Consultation',
    ],
  },
  {
    title: 'Business Documentation',
    icon: FileText,
    span: 'md:col-span-5',
    items: [
      'Company Policies',
      'Contracts',
      'Templates',
      'HR Documents',
      'Compliance Documents',
      'Proposal Drafting',
    ],
  },
  {
    title: 'Digital Services',
    icon: Globe,
    span: 'md:col-span-7',
    items: [
      'Website Development',
      'Landing Pages',
      'Business Emails',
      'Branding Support',
      'Digital Setup',
    ],
    badge: 'In Partnership With Gemsweb Digital',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            What We Do
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-12 md:mb-16">
            Services Built for Startups
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} className={service.span}>
              {/* Outer Shell - Double Bezel */}
              <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem] h-full">
                {/* Inner Core */}
                <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-1">
                    {service.title}
                  </h3>

                  {/* Badge (Digital Services only) */}
                  {service.badge && (
                    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-5 self-start mt-2">
                      {service.badge}
                    </span>
                  )}

                  {!service.badge && <div className="mb-4" />}

                  {/* Service List */}
                  <ul className="space-y-2.5 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-[#8BA89A] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
