'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  ScrollText,
  PenTool,
  Users,
  Handshake,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Lock,
  Briefcase,
  FileCheck2,
  Scale,
  ClipboardList,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink, PHONE_MAIN } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const documentTypes = [
  {
    icon: Handshake,
    title: "Founders' Agreement",
    description:
      "Define ownership, roles, and responsibilities. Prevent disputes before they start.",
    items: [
      'Equity Split & Ownership',
      'Roles & Responsibilities',
      'Decision-Making Processes',
      'Exit Clauses & Vesting',
      'IP Assignment',
    ],
  },
  {
    icon: Briefcase,
    title: 'Service Contracts',
    description:
      'Agreements that protect your business and define deliverables, timelines, and payment.',
    items: [
      'Scope of Work',
      'Payment Terms',
      'Delivery Timelines',
      'Liability Limitations',
      'Termination Clauses',
    ],
  },
  {
    icon: Users,
    title: 'Employment Contracts',
    description:
      'Namibian-compliant employment agreements. Protect your business, treat your team fairly.',
    items: [
      'Job Description & Duties',
      'Remuneration & Benefits',
      'Working Hours & Leave',
      'Confidentiality Clauses',
      'Notice Periods & Termination',
    ],
  },
  {
    icon: Lock,
    title: 'NDAs',
    description:
      'Protect sensitive information and trade secrets with professionally drafted NDAs.',
    items: [
      'Mutual & Unilateral NDAs',
      'Confidentiality Obligations',
      'Duration & Territory',
      'Exclusions & Permitted Disclosures',
      'Remedies for Breach',
    ],
  },
  {
    icon: Scale,
    title: "Shareholders' Agreement",
    description:
      "Govern shareholder relationships. Essential for companies with multiple owners.",
    items: [
      'Share Transfer Restrictions',
      'Drag-Along & Tag-Along Rights',
      'Dividend Policies',
      'Board Composition Rules',
      'Dispute Resolution',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Company Policies',
    description:
      'Formal policies for workplace standards and compliance.',
    items: [
      'Code of Conduct',
      'Health & Safety Policy',
      'Data Protection Policy',
      'Anti-Corruption Policy',
      'Social Media Policy',
    ],
  },
]

const additionalServices = [
  { icon: FileCheck2, title: 'Compliance Docs', desc: 'BIPA annual returns, tax compliance, BO declarations.' },
  { icon: ScrollText, title: 'Templates', desc: 'Invoice, quotation, and letterhead templates.' },
  { icon: PenTool, title: 'HR Documents', desc: 'Employee contracts, onboarding packs, review forms.' },
  { icon: FileText, title: 'Proposals', desc: 'Business proposals, tender responses, grant applications.' },
]

const processSteps = [
  { n: '01', title: 'Describe Needs', desc: 'Tell us which documents you need.' },
  { n: '02', title: 'We Draft', desc: 'Professional documents tailored to Namibian law.' },
  { n: '03', title: 'Review & Approve', desc: 'Review drafts. Request revisions until right.' },
  { n: '04', title: 'Receive', desc: 'Polished, legally sound documents delivered digitally.' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BusinessDocumentsPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Dark cinematic with image
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-dark/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
                  Business Documents
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
                  Professional
                  <br />
                  <span className="italic text-frog-green">Documents.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Contracts, policies, and compliance docs. Protect your business from day one.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-frog-green/10 border border-frog-green/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-frog-green animate-pulse" />
                  <span className="text-frog-green text-sm font-bold">Custom Pricing — Per Document</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={waLink('documents')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Request a document on WhatsApp"
                    className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Request
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/services/business-registration"
                    aria-label="Go to business registration"
                    className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
                  >
                    Register First
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Hero image */}
            <ScrollReveal delay={0.12} className="hidden lg:block">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/hero/hero-7.webp"
                  alt="Business Documents"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frog-black/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DOCUMENT TYPES — Light editorial grid
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow light>Document Types</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-2xl">
                Every document your business{' '}
                <span className="italic text-frog-green">needs.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`rounded-[2rem] p-8 h-full group transition-colors duration-700 ${
                    i === 0
                      ? 'bg-black text-white'
                      : 'bg-white shadow-sm ring-1 ring-black/[0.04] hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                      i === 0
                        ? 'bg-frog-green/15 ring-1 ring-frog-green/25'
                        : 'bg-frog-green/10 ring-1 ring-frog-green/20'
                    }`}
                  >
                    <doc.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${
                      i === 0 ? 'text-white' : 'text-black'
                    }`}
                  >
                    {doc.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      i === 0 ? 'text-white/40' : 'text-black/40'
                    }`}
                  >
                    {doc.description}
                  </p>

                  <ul className="space-y-2">
                    {doc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            i === 0 ? 'bg-frog-green' : 'bg-frog-green/60'
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            i === 0 ? 'text-white/60' : 'text-black/50'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — Dark with DoubleBezel
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug">
                Brief to{' '}
                <span className="italic text-frog-green">bank-ready document.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel highlight={i === 0}>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-frog-green leading-none">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-frog-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-frog-muted text-sm leading-relaxed">{step.desc}</p>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ADDITIONAL SERVICES — Light editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <Eyebrow light>Also Available</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16">
              More than contracts.{' '}
              <span className="italic text-frog-green">Full coverage.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-frog-light rounded-[2rem] p-6 md:p-8 h-full group hover:bg-frog-green/5 transition-colors duration-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green flex items-center justify-center mb-4 group-hover:bg-frog-green group-hover:text-black transition-all duration-700">
                    <svc.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CUSTOM PRICING NOTE — Dark editorial
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Custom pricing.{' '}
              <span className="italic text-frog-green">Per document.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Costs vary by complexity. Tell us what you need — we quote upfront.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href={waLink('documents')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request a document on WhatsApp"
              className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Request
              <span
                className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHATSAPP CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808]">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Contact
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need documents?{' '}
              <span className="italic text-frog-green">Chat with us.</span>
            </h3>
            <p className="text-white/40 text-sm mb-8">{PHONE_MAIN} · We typically respond within a few hours.</p>
            <a
              href={waLink('documents')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_30px_rgba(122,201,67,0.2)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat on WhatsApp
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-700">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
