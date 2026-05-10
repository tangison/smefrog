'use client'

import Image from 'next/image'
import { Building2, Rocket, FileText, Globe, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/scroll-reveal'

const services = [
  {
    title: 'Business Registration',
    description: 'We simplify company registration through fast, affordable, fully remote compliance support.',
    icon: Building2,
    href: '/services/business-registration',
    image: '/service-registration.png',
    items: ['CC Registration', 'Pty Ltd Registration', 'Name Reservation', 'BIPA Filings', 'BO Declaration', 'Digital Certificates', 'Bank-Ready Documents'],
  },
  {
    title: 'Startup Support',
    description: 'We help entrepreneurs launch professionally with business plans, profiles, documents, and operational support.',
    icon: Rocket,
    href: '/services/startup-support',
    image: '/service-startup.png',
    items: ['Business Plans', 'Company Profiles', 'Pitch Decks', 'Funding Documents', 'Startup Consultation'],
  },
  {
    title: 'Business Documentation',
    description: 'Professional internal business systems — policies, contracts, and compliance documents.',
    icon: FileText,
    href: '/services/business-documents',
    image: '/service-documents.png',
    items: ['Company Policies', 'Contracts', 'Templates', 'HR Documents', 'Compliance Documents', 'Proposal Drafting'],
  },
  {
    title: 'Digital Services',
    description: 'We provide modern digital tools and partnerships that help startups establish a professional online presence.',
    icon: Globe,
    href: '/services/digital-services',
    image: '/service-digital.png',
    badge: { label: 'In Partnership With Gemsweb Digital', url: 'https://gemsweb.xyz' },
    items: ['Website Development', 'Landing Pages', 'Business Emails', 'Branding Support', 'Digital Setup'],
  },
]

export default function ServicesPage() {
  const [RegistrationIcon, StartupIcon, DocumentsIcon, DigitalIcon] = services.map((s) => s.icon)

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

      {/* ─── Editorial Bento Grid ─── */}
      <section className="bg-[#F2F2F2] py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-5">

            {/* ── Business Registration — Large Card (col-span-7, row-span-2) ── */}
            <ScrollReveal className="col-span-12 md:col-span-7 md:row-span-2" delay={0}>
              <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[480px] md:min-h-[640px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[0].href} className="absolute inset-0 z-10">
                  <span className="sr-only">{services[0].title}</span>
                </Link>

                {/* Image Background */}
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-frog-black/90 via-frog-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center mb-4">
                    <RegistrationIcon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                    {services[0].title}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5 max-w-md">
                    {services[0].description}
                  </p>

                  {/* Items */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                    {services[0].items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-frog-green shrink-0" />
                        <span className="text-white/60 text-xs md:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <span className="inline-flex items-center gap-2 text-frog-green text-sm font-medium group-hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Learn More
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Startup Support — Top Right (col-span-5) ── */}
            <ScrollReveal className="col-span-12 md:col-span-5" delay={0.06}>
              <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[280px] md:min-h-[310px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[1].href} className="absolute inset-0 z-10">
                  <span className="sr-only">{services[1].title}</span>
                </Link>

                {/* Image Background */}
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-frog-black/85 via-frog-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center mb-3">
                    <StartupIcon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  </div>

                  <h2 className="text-lg md:text-xl font-heading font-bold text-white mb-1.5">
                    {services[1].title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {services[1].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {services[1].items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                      {services[1].items.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/50 text-[10px] md:text-[11px]">
                          +{services[1].items.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-frog-green text-xs font-medium group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Business Documents — Bottom Right (col-span-5) ── */}
            <ScrollReveal className="col-span-12 md:col-span-5" delay={0.12}>
              <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full min-h-[280px] md:min-h-[310px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[2].href} className="absolute inset-0 z-10">
                  <span className="sr-only">{services[2].title}</span>
                </Link>

                {/* Image Background */}
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-frog-black/85 via-frog-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center mb-3">
                    <DocumentsIcon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  </div>

                  <h2 className="text-lg md:text-xl font-heading font-bold text-white mb-1.5">
                    {services[2].title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {services[2].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {services[2].items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                      {services[2].items.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/50 text-[10px] md:text-[11px]">
                          +{services[2].items.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-frog-green text-xs font-medium group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Digital Services — Full Width (col-span-12) ── */}
            <ScrollReveal className="col-span-12" delay={0.18}>
              <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="relative min-h-[340px] md:min-h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer"
              >
                <Link href={services[3].href} className="absolute inset-0 z-10">
                  <span className="sr-only">{services[3].title}</span>
                </Link>

                {/* Image Background */}
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="100vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-frog-black/90 via-frog-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-2xl">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center mb-4">
                    <DigitalIcon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {services[3].title}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                    {services[3].description}
                  </p>

                  {/* Gemsweb Digital Badge */}
                  {services[3].badge && (
                    <a
                      href={services[3].badge.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/15 text-frog-green border border-frog-green/25 mb-5 w-fit hover:bg-frog-green/25 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-sm z-20 relative"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                      {services[3].badge.label}
                    </a>
                  )}

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {services[3].items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-xs tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-frog-green text-sm font-medium group-hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Learn More
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
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
