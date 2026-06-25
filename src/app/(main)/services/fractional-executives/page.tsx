'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Megaphone,
  Cpu,
  Users,
  Scale,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const FRACTIONAL_CTA =
  'https://wa.me/264853411522?text=Hi%20SMEfrog%2C%20I%27d%20like%20to%20enquire%20about%20Fractional%20Executive%20services.'

const ROLES = [
  {
    title: 'COO',
    fullTitle: 'Chief Operating Officer',
    description:
      'A fractional COO installs the operational backbone your business needs to scale: standard operating procedures, hiring plans, vendor management, and the weekly metrics cadence that keeps everyone aligned. Ideal for founders who have hit N$500K+ in revenue and need someone to take ownership of delivery.',
    icon: Briefcase,
    deliverables: [
      'Operating cadence (weekly metrics, monthly review)',
      'Standard Operating Procedures for 3\u20135 core processes',
      'Hiring plan and role design for the next 2 quarters',
      'Vendor consolidation and cost renegotiation',
    ],
    commitment: '2\u20133 days / week',
    best: 'Founders scaling past N$500K revenue',
  },
  {
    title: 'CFO',
    fullTitle: 'Chief Financial Officer',
    description:
      'A fractional CFO builds the financial discipline that prevents scaling disasters: a real budget, cash-flow forecast, management accounts, and the board-ready reporting that investors expect. Particularly valuable before raising capital or entering a high-growth phase.',
    icon: TrendingUp,
    deliverables: [
      '13-week rolling cash-flow forecast',
      'Monthly management accounts (IFRS for SMEs)',
      'Budget vs actual variance analysis',
      'Investor-ready reporting pack (if applicable)',
    ],
    commitment: '1\u20132 days / week',
    best: 'Pre-fundraise or scaling businesses',
  },
  {
    title: 'CMO',
    fullTitle: 'Chief Marketing Officer',
    description:
      'A fractional CMO designs the marketing strategy and selects the channels that actually move the needle for a Namibian SME: WhatsApp-first campaigns, local SEO, radio where it still converts, and the analytics stack to prove what works. Built for businesses that have product-market fit but no growth engine.',
    icon: Megaphone,
    deliverables: [
      'Channel strategy and budget allocation',
      'Messaging framework and brand voice',
      'Campaign calendar (90-day rollout)',
      'Analytics dashboard with conversion metrics',
    ],
    commitment: '1\u20132 days / week',
    best: 'Post-product-market-fit growth stage',
  },
  {
    title: 'CTO',
    fullTitle: 'Chief Technology Officer',
    description:
      'A fractional CTO makes the build-vs-buy decisions, picks the stack, and runs the engineering team (or the dev shop) so you don\u2019t waste 6 months on the wrong architecture. Critical when you\u2019re moving from no-code to a custom build, or scaling an existing product.',
    icon: Cpu,
    deliverables: [
      'Stack audit and recommendations',
      'Technical roadmap (90-day and 12-month)',
      'Engineering hiring plan or vendor selection',
      'Code review and quality standards',
    ],
    commitment: '1\u20132 days / week',
    best: 'Moving off no-code or scaling a custom build',
  },
  {
    title: 'HR Director',
    fullTitle: 'Human Resources Director',
    description:
      'A fractional HR Director builds the people infrastructure that prevents the costly mistakes Namibian SMEs make around employment contracts, labour law compliance, performance management, and retention. Essential when you cross the 10-employee threshold.',
    icon: Users,
    deliverables: [
      'Compliant employment contract templates',
      'Performance management framework',
      'Compensation bands and review cycle',
      'Labour Act-compliant HR policies',
    ],
    commitment: '1\u20132 days / week',
    best: 'Businesses with 10+ employees',
  },
  {
    title: 'Legal Advisor',
    fullTitle: 'Fractional Legal Advisor',
    description:
      'A fractional Legal Advisor handles the contracts, governance, and regulatory matters that a growing Namibian business accumulates: shareholder agreements, customer contracts, IP protection, and the regulatory review that prevents nasty surprises. Cost-effective alternative to a full-time general counsel.',
    icon: Scale,
    deliverables: [
      'Contract review and template library',
      'Shareholder and founder agreements',
      'IP protection (trade marks, confidentiality)',
      'Regulatory compliance review',
    ],
    commitment: 'On retainer, 5\u201310 hrs / month',
    best: 'Businesses signing contracts regularly',
  },
]

const ENGAGEMENT_MODELS = [
  {
    name: 'Retainer',
    desc: 'A fixed number of days per month, scheduled in advance. Best for ongoing strategic work.',
    icon: Clock,
  },
  {
    name: 'Project',
    desc: 'A defined deliverable with a clear start and end. Best for one-off initiatives.',
    icon: CheckCircle2,
  },
  {
    name: 'Advisory',
    desc: 'A monthly advisory cadence with no fixed deliverables. Best for founders who need a sounding board.',
    icon: Sparkles,
  },
]

export default function FractionalExecutivesPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  const arrowEasing = 'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 lg:py-56 px-4 md:px-6 bg-frog-black overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-frog-green/[0.05] blur-[200px] rounded-full pointer-events-none orb-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.18] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
              <Sparkles className="w-3 h-3" />
              Virtual or Physical · Namibia-based · Flexible
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6">
              Fractional
              <br />
              <span className="italic text-frog-green">Executives.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Executive leadership at a fraction of the cost.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <a
                href={FRACTIONAL_CTA}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consultation about Fractional Executives"
                className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Book a Consultation
                <span className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <Link
                href="/services"
                aria-label="View all services"
                className={`inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] ${easing}`}
              >
                All Services
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VALUE PROP ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Why Fractional
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-3xl mb-4">
              Senior leadership. <span className="italic text-frog-green">No full-time salary.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed">
              A full-time executive in Namibia costs N$80,000&ndash;N$250,000 per month, plus benefits, plus equity. Most SMEs don&rsquo;t need 5 days a week of CFO time&mdash;they need 1 or 2. A fractional executive gives you the expertise at a fraction of the cost, with the flexibility to scale up or down as the business changes.
            </p>
          </ScrollReveal>

          {/* Comparison stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { stat: '70\u201390%', label: 'Cost reduction', sub: 'vs a full-time equivalent' },
              { stat: '1\u20133 days', label: 'Per week', sub: 'typical commitment' },
              { stat: 'No equity', label: 'Required', sub: 'unlike most senior hires' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <div className="h-full p-6 md:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="text-5xl md:text-6xl font-bold text-frog-green leading-none mb-3">
                    {s.stat}
                  </div>
                  <div className="text-black font-bold text-lg mb-1">{s.label}</div>
                  <div className="text-black/50 text-sm">{s.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROLE CARDS ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              The Six Roles
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight mb-4">
              Senior expertise, <span className="italic text-frog-green">on tap.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Six executive roles, available as fractional engagements. Mix and match based on what your business actually needs right now.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROLES.map((role, i) => {
              const Icon = role.icon
              return (
                <ScrollReveal key={role.title} delay={(i % 3) * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="group h-full rounded-3xl overflow-hidden border border-white/[0.06] bg-frog-card/60 backdrop-blur-sm hover:border-frog-green/30 transition-all duration-500 flex flex-col"
                  >
                    {/* Header */}
                    <div className="p-6 md:p-7 border-b border-white/[0.04]">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-frog-green/15 border border-frog-green/25 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                          {role.commitment}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                        {role.title}
                      </h3>
                      <p className="text-frog-green text-xs font-bold italic mb-3">
                        {role.fullTitle}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-3">
                        Typical deliverables
                      </div>
                      <ul className="space-y-2.5 mb-6 flex-1">
                        {role.deliverables.map(d => (
                          <li key={d} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-2.5 h-2.5 text-frog-green" strokeWidth={2.5} />
                            </span>
                            <span className="text-white/70 text-xs leading-snug">{d}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-white/[0.04]">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">
                          Best for
                        </div>
                        <p className="text-white/60 text-xs leading-snug">{role.best}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ENGAGEMENT MODELS ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Engagement Models
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-3xl mb-4">
              Three ways to <span className="italic text-frog-green">engage.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-black/60 text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
              Pick the model that matches the work. Switch models as needs change.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = model.icon
              return (
                <ScrollReveal key={model.name} delay={i * 0.06}>
                  <div className="h-full p-6 md:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <Icon className="w-8 h-8 text-frog-green mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-black mb-2">{model.name}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">{model.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready for senior leadership <span className="italic text-frog-green">without the salary?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8 leading-relaxed">
              Book a consultation. We&rsquo;ll diagnose what your business actually needs and recommend the right role, model, and cadence&mdash;or tell you honestly if you don&rsquo;t need a fractional executive yet.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href={FRACTIONAL_CTA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a Fractional Executives consultation on WhatsApp"
              className={`group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] ${easing}`}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Book a Consultation
              <span className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
