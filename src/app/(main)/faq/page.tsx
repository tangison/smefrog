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
    question: 'How much does it cost to register a CC?',
    answer:
      'Three tiers: Basic N$1,000, Advanced N$1,500, Full N$2,200. The PTY LTD Package is N$4,500 (premium). All include BIPA filing. No hidden fees.',
  },
  {
    question: 'Do I have to visit an office to register?',
    answer:
      'No. Everything happens over WhatsApp and email. You never need to visit BIPA or our office.',
  },
  {
    question: 'How long does registration take?',
    answer:
      '7 to 10 working days for CC, depending on BIPA processing. We keep you updated on WhatsApp.',
  },
  {
    question: 'Can a foreigner register a business in Namibia?',
    answer:
      'Yes. You need a valid work permit or proof of residency. The process is the same; you just add your permit to the documents.',
  },
  {
    question: 'What documents do I need to get started?',
    answer:
      'Three things: a certified ID or passport copy, proof of address (not older than 3 months), and 2 to 3 proposed business names.',
  },
  {
    question: 'Do you handle the BIPA filing for me?',
    answer:
      'Yes. BIPA filing is included in every package. We handle the full submission on your behalf.',
  },
  {
    question: 'What is Beneficial Ownership filing?',
    answer:
      'A BIPA requirement that identifies who ultimately owns your business. Mandatory for all registered entities. Included in Advanced and Full packages.',
  },
  {
    question: 'What happens if I don\'t file my annual returns?',
    answer:
      'BIPA may impose penalties of N$200 per month or deregister your company. We file on time so this does not happen.',
  },
  {
    question: 'How often do BO declarations need updating?',
    answer:
      'Whenever ownership changes, or at minimum once a year. You have 21 days to update after any change.',
  },
  {
    question: 'What compliance services do you offer?',
    answer:
      'Annual returns, BO updates, regulatory filings, governance documentation, and company secretarial services.',
  },
  {
    question: 'Do you register PTY LTD companies too?',
    answer:
      'Yes. Starting from N$1,500 for basic, N$3,500 for the Scale Up package. Better for businesses planning to seek investment or grow beyond a small team.',
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
    <div
      className={`border-b border-[#1e1e1e] last:border-b-0 transition-colors duration-300 ${
        isOpen ? 'bg-[#0f1a0f]' : 'hover:bg-[#111111]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 px-4 text-left cursor-pointer min-h-[48px] touch-manipulation"
        aria-label={isOpen ? `Close: ${faq.question}` : `Open: ${faq.question}`}
      >
        <div className="flex items-start gap-3">
          <span className="text-[#4CAF50] font-bold text-sm mt-0.5 shrink-0 tabular-nums" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white text-sm md:text-base font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {faq.question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="w-4 h-4 text-[#4CAF50]" strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-8 pr-4">
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
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

      {/* ═══ FAQ ACCORDION — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#0a0a0a] ring-1 ring-[#1e1e1e] rounded-[2rem] overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />
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
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STILL HAVE QUESTIONS CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />

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
              className="group inline-flex items-center gap-2.5 min-h-[48px] bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] touch-manipulation"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat with Us on WhatsApp
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
