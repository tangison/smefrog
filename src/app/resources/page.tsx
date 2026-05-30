'use client'

import {
  BookOpen,
  FileText,
  ClipboardCheck,
  GitCompare,
  FileSpreadsheet,
  Briefcase,
  Scale,
  PenTool,
  Calculator,
  Search,
  BarChart3,
  MessageCircle,
  ArrowRight,
  Download,
  ExternalLink,
  Zap,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { WHATSAPP_GADAFI, WHATSAPP_MUX } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const registrationGuides = [
  {
    icon: BookOpen,
    title: 'CC Registration Guide',
    description: 'Step-by-step CC registration walkthrough.',
    action: 'Read Guide',
    actionIcon: ExternalLink,
    href: '/resources/cc-registration-guide',
  },
  {
    icon: GitCompare,
    title: 'CC vs Pty Ltd',
    description: 'Key differences and which to choose.',
    action: 'Read Guide',
    actionIcon: ExternalLink,
    href: '/resources/cc-vs-pty-ltd',
  },
  {
    icon: ClipboardCheck,
    title: 'BIPA Compliance Checklist',
    description: 'Requirements, deadlines, and filing info.',
    action: 'Read Guide',
    actionIcon: ExternalLink,
    href: '/resources/bipa-compliance-checklist',
  },
  {
    icon: FileText,
    title: 'Beneficial Ownership Guide',
    description: 'How to file your BO declaration.',
    action: 'Read Guide',
    actionIcon: ExternalLink,
    href: '/resources/beneficial-ownership-guide',
  },
]

const templates = [
  {
    icon: FileSpreadsheet,
    title: 'Business Plan Template',
    description: 'Professional template for Namibian startups.',
    action: 'Download',
    actionIcon: Download,
    href: '#',
  },
  {
    icon: Briefcase,
    title: 'Founders\' Agreement',
    description: 'Equity, roles, and dispute resolution.',
    action: 'Download',
    actionIcon: Download,
    href: '#',
  },
  {
    icon: PenTool,
    title: 'Service Contract',
    description: 'Standard agreement for freelancers.',
    action: 'Download',
    actionIcon: Download,
    href: '#',
  },
  {
    icon: Scale,
    title: 'Shareholders\' Agreement',
    description: 'For Pty Ltd companies with multiple owners.',
    action: 'Download',
    actionIcon: Download,
    href: '#',
  },
]

const tools = [
  {
    icon: Calculator,
    title: 'Pricing Calculator',
    description: 'Calculate your total registration cost.',
    action: 'Use Tool',
    actionIcon: Zap,
    href: '#',
  },
  {
    icon: Search,
    title: 'Business Name Checker',
    description: 'Check if your name is available.',
    action: 'Use Tool',
    actionIcon: Zap,
    href: '#',
  },
  {
    icon: BarChart3,
    title: 'Startup Cost Estimator',
    description: 'Estimate total startup costs including first year.',
    action: 'Use Tool',
    actionIcon: Zap,
    href: '#',
  },
]

/* ─── Resource Card — Light variant ═════════════════ */
function LightResourceCard({
  item,
  index,
}: {
  item: (typeof registrationGuides)[number] | (typeof templates)[number] | (typeof tools)[number]
  index: number
}) {
  const IconComp = item.icon
  const ActionIcon = item.actionIcon

  return (
    <ScrollReveal delay={index * 0.06}>
      <div className="bg-white ring-1 ring-black/[0.06] p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
        <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
            <IconComp className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold text-black mb-2"
          >
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
            {item.description}
          </p>

          {/* Action */}
          <a
            href={item.href}
            className="inline-flex items-center gap-2 min-h-[44px] text-frog-green text-sm font-semibold group-hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            aria-label={`${item.action}: ${item.title}`}
          >
            {item.action}
            <ActionIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ─── Resource Card — Dark variant ══════════════════ */
function DarkResourceCard({
  item,
  index,
}: {
  item: (typeof registrationGuides)[number] | (typeof templates)[number] | (typeof tools)[number]
  index: number
}) {
  const IconComp = item.icon
  const ActionIcon = item.actionIcon

  return (
    <ScrollReveal delay={index * 0.06}>
      <DoubleBezel className="h-full">
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
            <IconComp className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold text-frog-light mb-2"
          >
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-frog-muted text-sm leading-relaxed mb-6 flex-1">
            {item.description}
          </p>

          {/* Action */}
          <a
            href={item.href}
            className="inline-flex items-center gap-2 min-h-[44px] text-frog-green text-sm font-semibold hover:gap-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            aria-label={`${item.action}: ${item.title}`}
          >
            {item.action}
            <ActionIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </DoubleBezel>
    </ScrollReveal>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function ResourcesPage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Resources</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
            >
              Tools for{' '}
              <span className="text-frog-green">Founders</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Guides, templates, and tools to help you start smart.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ REGISTRATION GUIDES — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Guides</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-2"
            >
              Registration Guides
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-base max-w-xl mb-12 leading-relaxed">
              Everything about registering and maintaining your business.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {registrationGuides.map((guide, i) => (
              <LightResourceCard key={guide.title} item={guide} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEMPLATES — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Templates</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
            >
              Free Templates
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Professional document templates — free to download.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template, i) => (
              <DarkResourceCard key={template.title} item={template} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOOLS & CALCULATORS — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Tools</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-2"
            >
              Calculators & Tools
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-base max-w-xl mb-12 leading-relaxed">
              Plan, calculate, and verify before you register.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <LightResourceCard key={tool.title} item={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl font-bold text-frog-light mb-4"
            >
              Ready to register?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Skip the research. We handle everything — fast, affordable, 100% online.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_GADAFI}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Register via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register via WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <a
                href={WHATSAPP_MUX}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 min-h-[44px] ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Chat with Mux on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                WhatsApp Mux
                <span className="w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
