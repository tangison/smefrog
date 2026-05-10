'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  ScrollText,
  PenTool,
  Users,
  ShieldCheck,
  Presentation,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronRight,
  Handshake,
  Lock,
  Briefcase,
  FileCheck2,
  Scale,
  ClipboardList,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const documentTypes = [
  {
    icon: Handshake,
    title: "Founders' Agreement",
    description:
      "Define ownership, roles, and responsibilities between co-founders. Prevent disputes before they start with a clear, legally sound agreement.",
    items: [
      'Equity Split & Ownership Terms',
      'Roles & Responsibilities',
      'Decision-Making Processes',
      'Exit Clauses & Vesting',
      'Intellectual Property Assignment',
    ],
  },
  {
    icon: Briefcase,
    title: 'Service Contracts',
    description:
      'Professional service agreements that protect your business and clearly define deliverables, timelines, and payment terms.',
    items: [
      'Scope of Work Definition',
      'Payment Terms & Schedules',
      'Delivery Timelines',
      'Liability Limitations',
      'Termination Clauses',
    ],
  },
  {
    icon: Users,
    title: 'Employment Contracts',
    description:
      'Compliant employment agreements tailored to Namibian labour law. Protect your business while treating your team fairly.',
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
    title: 'Non-Disclosure Agreements',
    description:
      'Protect sensitive business information, trade secrets, and strategic plans with professionally drafted NDAs.',
    items: [
      'Mutual & Unilateral NDAs',
      'Confidentiality Obligations',
      'Duration & Territory Scope',
      'Exclusions & Permitted Disclosures',
      'Remedies for Breach',
    ],
  },
  {
    icon: Scale,
    title: "Shareholders' Agreement",
    description:
      "Govern the relationship between shareholders and protect minority interests. Essential for companies with multiple owners.",
    items: [
      'Share Transfer Restrictions',
      'Drag-Along & Tag-Along Rights',
      'Dividend Policies',
      'Board Composition Rules',
      'Dispute Resolution Mechanisms',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Company Policies',
    description:
      'Formal policies that define workplace standards, expectations, and procedures. Essential for compliance and professional operations.',
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
  { icon: FileCheck2, title: 'Compliance Documents', desc: 'BIPA annual returns, tax compliance, BO declarations.' },
  { icon: Presentation, title: 'Proposal Drafting', desc: 'Business proposals, tender responses, grant applications.' },
  { icon: ScrollText, title: 'Templates', desc: 'Invoice, quotation, and letterhead templates.' },
  { icon: PenTool, title: 'HR Documents', desc: 'Employee contracts, onboarding packs, review forms.' },
]

const processSteps = [
  { n: '01', title: 'Describe Your Needs', desc: 'Tell us which documents you need and the context of your business.' },
  { n: '02', title: 'We Draft & Review', desc: 'Our team prepares professional documents tailored to Namibian law.' },
  { n: '03', title: 'You Review & Approve', desc: 'Review drafts and request revisions until everything is right.' },
  { n: '04', title: 'Receive Final Documents', desc: 'Get your polished, legally sound documents delivered digitally.' },
]

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '264813411522', role: 'Compliance Expert' },
  { id: 'mux', name: 'Mux', phone: '264853057020', role: 'Digital Strategist' },
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
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E3A2F]/[0.15] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-6">
                  Business Documents
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Professional
                  <br />
                  <span className="italic text-[#7AC943]">Documents.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <p className="text-frog-muted text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Contracts, policies, and internal documents — crafted for the Namibian
                  regulatory environment. Protect your business from day one.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] animate-pulse" />
                  <span className="text-[#7AC943] text-sm font-bold">Custom Pricing — Per Document Basis</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Request a Document
                    <span
                      className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${easing}`}
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </a>
                  <Link
                    href="/services/business-registration"
                    className={`inline-flex items-center gap-2 ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
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
                  src="/service-documents.png"
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
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F2F2F2]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow light>Document Types</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-2xl"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Every document your business{' '}
                <span className="italic text-[#7AC943]">needs to operate.</span>
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
                        ? 'bg-[#7AC943]/15 ring-1 ring-[#7AC943]/25'
                        : 'bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20'
                    }`}
                  >
                    <doc.icon className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${
                      i === 0 ? 'text-white' : 'text-[#1A1A1A]'
                    }`}
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
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
                            i === 0 ? 'bg-[#7AC943]' : 'bg-[#7AC943]/60'
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
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7AC943]/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <ScrollReveal>
              <Eyebrow>Our Process</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-snug"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                From brief to{' '}
                <span className="italic text-[#7AC943]">bank-ready document.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel highlight={i === 0}>
                  <div className="mb-4">
                    <span
                      className="text-4xl font-bold text-[#7AC943] leading-none"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-frog-light mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              More than just contracts.{' '}
              <span className="italic text-[#7AC943]">Complete coverage.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-[#F5F5F5] rounded-[2rem] p-6 md:p-8 h-full group hover:bg-[#7AC943]/5 transition-colors duration-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 text-[#7AC943] flex items-center justify-center mb-4 group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-700">
                    <svc.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-base font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
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
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-[#7AC943]/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7AC943]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Custom pricing.{' '}
              <span className="italic text-[#7AC943]">Per document.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Document costs vary based on complexity and scope. Tell us what you need
              and we&apos;ll provide a clear, upfront quote.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2.5 bg-[#7AC943] text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-[#7AC943]/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Request a Document
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
          CTA — Agent selection
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20 mb-4">
                Talk to Us
              </span>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Pick your agent.{' '}
                <span className="italic text-[#7AC943]">Start now.</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {AGENTS.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={i * 0.06}>
                <a
                  href={`https://wa.me/${agent.phone}?text=${encodeURIComponent(
                    `Hi ${agent.name}! I need help with business documents.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-6 rounded-2xl bg-frog-shell ring-1 ring-frog-hairline hover:ring-[#7AC943]/20 hover:bg-white/[0.04] ${easing}`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                      {agent.role}
                    </span>
                    <p className="text-white font-bold text-lg mt-0.5">{agent.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-3 h-3 text-white/30" strokeWidth={1.5} />
                      <span className="text-white/30 text-sm font-medium">
                        +264 {agent.phone.slice(3)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] text-xs font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                      WhatsApp
                    </div>
                    <span className="w-10 h-10 rounded-full bg-[#7AC943]/10 text-[#7AC943] flex items-center justify-center text-sm font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      →
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
