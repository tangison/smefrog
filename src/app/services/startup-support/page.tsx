'use client'

import { BookOpen, Building2, Presentation, Wallet, Users, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const sections = [
  {
    icon: BookOpen,
    title: 'Business Plans',
    description: 'Professional business plans designed for funding applications, strategic planning, and investor presentations. We craft clear, structured documents that communicate your vision effectively.',
    items: [
      'Executive Summary Development',
      'Market Analysis & Research',
      'Financial Projections',
      'Operational Strategy',
      'Funding-Ready Formatting',
    ],
  },
  {
    icon: Building2,
    title: 'Company Profiles',
    description: 'Polished company presentations that establish credibility and professionalism. Perfect for client meetings, partnership proposals, and business development.',
    items: [
      'Company Overview & History',
      'Service/Product Descriptions',
      'Team & Leadership Profiles',
      'Mission & Vision Statements',
      'Branded Document Design',
    ],
  },
  {
    icon: Presentation,
    title: 'Pitch Decks',
    description: 'Investor-ready presentations that tell your startup story compellingly. Structured to capture attention and communicate value clearly.',
    items: [
      'Problem & Solution Framing',
      'Market Opportunity Slides',
      'Business Model Canvas',
      'Traction & Milestones',
      'Investment Ask Structure',
    ],
  },
  {
    icon: Wallet,
    title: 'Funding Readiness',
    description: 'Documents and preparation for funding applications. We help you get your paperwork in order so you can focus on pitching your business.',
    items: [
      'Funding Application Support',
      'Document Preparation',
      'Compliance Verification',
      'Financial Document Review',
      'Submission Assistance',
    ],
  },
  {
    icon: Users,
    title: 'Startup Consultation',
    description: 'One-on-one guidance to help you navigate the early stages of building your business. Get expert advice tailored to your specific situation.',
    items: [
      'Business Structure Advice',
      'Registration Guidance',
      'Compliance Roadmap',
      'Growth Strategy Sessions',
      'Ongoing WhatsApp Support',
    ],
  },
]

export default function StartupSupportPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Startup Support
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Launch With Structure<span className="text-frog-green">.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              We help entrepreneurs launch professionally with business plans, profiles, documents, and operational support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Service Sections ─── */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.04}>
              <div className={`bg-frog-shell ring-1 ${i === 0 ? 'ring-frog-green/25' : 'ring-frog-hairline'} p-1.5 rounded-[2rem]`}>
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    {/* Left */}
                    <div className="md:w-1/3 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                        <section.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                        {section.title}
                      </h2>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>

                    {/* Right — Items */}
                    <div className="flex-1">
                      <ul className="space-y-2.5">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                            <span className="text-frog-muted text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Get Startup Support
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-frog-muted text-base mb-8">
              Launch your business the right way with professional support and guidance.
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
