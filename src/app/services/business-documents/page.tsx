'use client'

import { FileText, ScrollText, PenTool, Users, ShieldCheck, Presentation, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const sections = [
  {
    icon: ScrollText,
    title: 'Company Policies',
    description: 'Formal policies that define workplace standards, expectations, and procedures. Essential for compliance and professional operations.',
    items: [
      'Code of Conduct',
      'Health & Safety Policy',
      'Data Protection Policy',
      'Social Media Policy',
      'Anti-Corruption Policy',
      'Leave Policy',
    ],
  },
  {
    icon: PenTool,
    title: 'Contracts & Agreements',
    description: 'Legally sound contracts tailored for your business relationships. Protect your interests with professionally drafted agreements.',
    items: [
      'Service Agreements',
      'Vendor Contracts',
      'Non-Disclosure Agreements (NDAs)',
      'Partnership Agreements',
      'Client Terms of Service',
    ],
  },
  {
    icon: FileText,
    title: 'Templates',
    description: 'Ready-to-use document templates that save time and ensure consistency across your business communications and operations.',
    items: [
      'Invoice Templates',
      'Quotation Templates',
      'Letterhead Designs',
      'Email Templates',
      'Meeting Minutes Template',
    ],
  },
  {
    icon: Users,
    title: 'HR Documents',
    description: 'Complete HR documentation packages to manage your team professionally and stay compliant with labour regulations.',
    items: [
      'Employment Contracts',
      'Employee Onboarding Packs',
      'Performance Review Forms',
      'Disciplinary Procedures',
      'Job Description Templates',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Documents',
    description: 'Stay on the right side of regulations with properly prepared compliance documentation for all relevant authorities.',
    items: [
      'BIPA Annual Returns',
      'Tax Compliance Documents',
      'Beneficial Ownership Declarations',
      'Regulatory Filings',
      'Compliance Checklists',
    ],
  },
  {
    icon: Presentation,
    title: 'Proposal Drafting',
    description: 'Win more business with professionally crafted proposals that communicate your value and differentiate you from competitors.',
    items: [
      'Business Proposals',
      'Project Proposals',
      'Tender Responses',
      'Grant Applications',
      'Sponsorship Proposals',
    ],
  },
]

export default function BusinessDocumentsPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Business Documentation
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Professional Documents<span className="text-frog-green">.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Professional internal business systems — policies, contracts, and compliance documents.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Service Sections ─── */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.04}>
                <div className={`bg-frog-shell ring-1 ${i === 0 ? 'ring-frog-green/25' : 'ring-frog-hairline'} p-1.5 rounded-[2rem] h-full`}>
                  <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                      <section.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                      {section.title}
                    </h2>
                    <p className="text-frog-muted text-sm leading-relaxed mb-4">
                      {section.description}
                    </p>
                    <ul className="space-y-2 flex-1">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                          <span className="text-frog-muted text-sm">{item}</span>
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

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Get Your Documents
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-frog-muted text-base mb-8">
              Professional documentation tailored to your business needs. Let us handle the paperwork.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                View Pricing
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
