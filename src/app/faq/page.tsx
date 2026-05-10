'use client'

import { useState } from 'react'
import { MessageCircle, ArrowRight, ChevronDown, Bot } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Data ─────────────────────────────────────────── */
const faqs = [
  {
    question: 'How much does a CC registration cost?',
    answer:
      'We offer three CC registration packages to fit your needs: Basic at N$800 (includes Name Reservation, Form CC8, Form CC1, and Submission Handling), Advanced at N$1,200 (adds BO Filing, Digital Certificate, and Compliance Handling), and Full at N$1,750 (includes everything in Advanced plus Remote Support, WhatsApp Assistance, Bank-Ready Documents, and Priority Communication). All pricing is transparent with no hidden fees.',
  },
  {
    question: 'Can I register remotely?',
    answer:
      'Absolutely. Everything is handled online through WhatsApp and email. No office visits are required at any point in the process. You simply send us your documents digitally, we handle all the filings and submissions on your behalf, and your completed registration documents are delivered to you electronically. The entire process is designed to be 100% remote.',
  },
  {
    question: 'How long does registration take?',
    answer:
      'Most CC registrations are completed within 7–10 working days, depending on BIPA processing times. This includes name reservation, document preparation, filing, and certificate issuance. We keep you updated throughout the process via WhatsApp so you always know where things stand. Pty Ltd registrations may take slightly longer due to additional document requirements.',
  },
  {
    question: 'Can foreigners register a business in Namibia?',
    answer:
      'Yes, foreigners can register a business in Namibia. However, you will need a valid work permit or proof of residency. The registration process is the same, but additional documentation may be required to verify your legal status in the country. We can guide you through the specific requirements during your initial consultation.',
  },
  {
    question: 'What documents do I need to register?',
    answer:
      'You\'ll need three key items: (1) A certified copy of your ID or passport, (2) Proof of address (such as a utility bill or bank statement not older than 3 months), and (3) Your proposed business names — we recommend providing 2–3 options in case your first choice is already taken. We handle all the forms and filing paperwork on your behalf.',
  },
  {
    question: "What's the difference between Basic, Advanced, and Full?",
    answer:
      'The Basic package (N$800) covers the essentials: name reservation, Form CC8, Form CC1, and submission handling. The Advanced package (N$1,200) includes everything in Basic plus Beneficial Ownership filing, a digital certificate, and compliance handling. The Full package (N$1,750) is our most popular — it includes everything in Advanced plus dedicated remote support, WhatsApp assistance throughout the process, bank-ready documents for opening your business account, and priority communication with our team.',
  },
  {
    question: 'Do you handle BIPA filing?',
    answer:
      'Yes, BIPA filing is included in all of our registration packages. We handle the entire submission process with the Business and Intellectual Property Authority on your behalf. This is a core part of what we do — ensuring your registration is properly filed and compliant with all BIPA requirements from day one.',
  },
  {
    question: 'What is Beneficial Ownership filing?',
    answer:
      'Beneficial Ownership (BO) filing is a compliance requirement by BIPA that identifies the natural persons who ultimately own or control a business entity. It\'s mandatory for all registered businesses in Namibia. The BO declaration must be filed when registering a new entity and updated whenever ownership changes occur. Our Advanced and Full packages include this filing as standard.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer:
      'Yes, you can upgrade your package at any time. If you start with the Basic package and later decide you need additional services like Beneficial Ownership filing or bank-ready documents, simply contact us via WhatsApp and we\'ll arrange the upgrade. You\'ll only pay the difference between your current package and the one you\'re upgrading to.',
  },
  {
    question: 'Do you offer PTY LTD registration?',
    answer:
      'Yes, we offer Private Company (Pty Ltd) registration starting from N$1,500 for the basic package, with our full-featured Scale Up package at N$3,500. The Pty Ltd structure is better suited for businesses that plan to scale, seek investment, or have multiple shareholders. It includes MOI documents, Form CM5, CM1 & CM29, BO Declaration, BIPA filing, digital certificate, full remote handling, and priority support.',
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
        className="w-full flex items-start justify-between gap-4 py-5 text-left group cursor-pointer"
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
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Common{' '}
              <span className="text-frog-green">Questions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Everything you need to know about getting started with SMEfrog.
              Can&apos;t find your answer? Reach out directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white ring-1 ring-[#E5E7EB] p-1.5 rounded-[2rem] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="bg-[#FAFAFA] rounded-[calc(2rem-0.375rem)] p-6 md:p-8">
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
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Still have questions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Chat with <span className="text-frog-green font-semibold">FrogAI</span> for instant answers, or reach out to our team directly on WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <a
                href="https://wa.me/264853057020"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Mux on WhatsApp
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
