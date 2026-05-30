'use client'

import { useState } from 'react'
import { MessageCircle, ArrowRight, ChevronDown, Bot } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { motion, AnimatePresence } from 'framer-motion'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const faqs = [
  {
    question: 'How much does CC registration cost?',
    answer:
      'Three tiers: Basic N$800, Advanced N$1,200, Full N$1,750. All transparent. No hidden fees.',
  },
  {
    question: 'Can I register remotely?',
    answer:
      'Yes. 100% online via WhatsApp and email. No office visits needed.',
  },
  {
    question: 'How long does registration take?',
    answer:
      '7–10 working days for CC, depending on BIPA processing. We keep you updated on WhatsApp.',
  },
  {
    question: 'Can foreigners register a business in Namibia?',
    answer:
      'Yes. You need a valid work permit or proof of residency. Same process, extra documentation.',
  },
  {
    question: 'What documents do I need?',
    answer:
      'Three things: certified ID/passport copy, proof of address (under 3 months old), and 2–3 proposed business names.',
  },
  {
    question: 'Do you handle BIPA filing?',
    answer:
      'Yes. Included in every package. We handle the full submission with BIPA on your behalf.',
  },
  {
    question: 'What is Beneficial Ownership filing?',
    answer:
      'A BIPA requirement identifying who ultimately owns your business. Mandatory for all registered entities. Included in Advanced and Full packages.',
  },
  {
    question: 'What happens if I don\'t file annual returns?',
    answer:
      'BIPA may impose penalties or deregister your company.',
  },
  {
    question: 'How often do BO declarations need updating?',
    answer:
      'Whenever ownership changes, or at minimum annually.',
  },
  {
    question: 'What compliance services do you offer?',
    answer:
      'Annual returns, BO updates, regulatory filings, governance documentation, and company secretarial services.',
  },
  {
    question: 'Do you offer PTY LTD registration?',
    answer:
      'Yes. Starting from N$1,500 for basic, N$3,500 for the Scale Up package. Better for businesses planning to scale or seek investment.',
  },
]

/* ─── FAQ Item with state toggle ──────────────────── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-frog-hairline last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group cursor-pointer min-h-[44px]"
        aria-label={isOpen ? `Close: ${faq.question}` : `Open: ${faq.question}`}
      >
        <div className="flex items-start gap-3">
          <span className="text-frog-green/40 font-heading font-bold text-sm mt-0.5 shrink-0 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-frog-light text-sm md:text-base font-heading font-semibold group-hover:text-frog-green transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            {faq.question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-8">
              <p className="text-frog-muted text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>FAQ</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
            >
              Common{' '}
              <span className="text-frog-green">Questions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Quick answers. Can&apos;t find yours? Reach out directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white ring-1 ring-black/[0.06] p-1.5 rounded-[2rem] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 md:p-8">
                {faqs.map((faq, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
                    <FAQItem
                      faq={faq}
                      index={i}
                      isOpen={openIndex === i}
                      onToggle={() => handleToggle(i)}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STILL HAVE QUESTIONS CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-6">
              <Bot className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl font-bold text-frog-light mb-4"
            >
              Still have questions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Ask <span className="text-frog-green font-semibold">FrogAI</span> or chat with us on WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waLink('contact')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat with Us on WhatsApp
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
