'use client'

import { Globe, Code, Layout, Mail, Palette, Settings, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const sections = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Professional websites that establish your online presence and build credibility. Delivered through our partnership with Gemsweb Digital.',
    items: [
      'Custom Website Design',
      'Responsive Development',
      'SEO Optimisation',
      'Content Management Setup',
      'Performance Optimisation',
    ],
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed for campaigns, product launches, and lead generation. Built by Gemsweb Digital.',
    items: [
      'Campaign Landing Pages',
      'Product Launch Pages',
      'Lead Generation Forms',
      'A/B Testing Setup',
      'Analytics Integration',
    ],
  },
  {
    icon: Mail,
    title: 'Business Emails',
    description: 'Professional email setup that matches your domain and builds trust with clients. Configured by Gemsweb Digital.',
    items: [
      'Custom Domain Email Setup',
      'Gmail / Outlook Integration',
      'Email Signature Design',
      'Alias & Forwarding Setup',
      'Migration Assistance',
    ],
  },
  {
    icon: Palette,
    title: 'Branding Support',
    description: 'Visual identity development that makes your startup look professional from day one. Designed by Gemsweb Digital.',
    items: [
      'Logo Design',
      'Brand Guidelines',
      'Colour Palette Development',
      'Typography Selection',
      'Brand Asset Package',
    ],
  },
  {
    icon: Settings,
    title: 'Digital Setup',
    description: 'Complete digital infrastructure setup so your business is ready to operate online. Handled by Gemsweb Digital.',
    items: [
      'Google Business Profile',
      'Social Media Setup',
      'Domain Registration',
      'SSL Certificate Installation',
      'Analytics & Tracking Setup',
    ],
  },
]

export default function DigitalServicesPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Digital Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Build Your Presence<span className="text-frog-green">.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="https://gemsweb.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mt-4 hover:bg-frog-green/20 transition-colors"
            >
              In Partnership With Gemsweb Digital
              <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              We provide modern digital tools and partnerships that help startups establish a professional online presence.
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

      {/* ─── Partnership Highlight ─── */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-frog-shell ring-1 ring-frog-green/25 p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                  Powered by Gemsweb Digital
                </h3>
                <p className="text-frog-muted text-sm leading-relaxed max-w-md mx-auto mb-6">
                  All digital services are delivered through our partnership with Gemsweb Digital — a specialist in modern web solutions for African businesses.
                </p>
                <a
                  href="https://gemsweb.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  Visit Gemsweb Digital
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Start Your Digital Presence
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-frog-muted text-base mb-8">
              Get online and look professional from day one. Explore digital services with Gemsweb Digital.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://gemsweb.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Start Your Digital Presence
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </a>
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
