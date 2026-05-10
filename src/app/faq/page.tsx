'use client'

import { MessageCircle, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/* ─── Data ─────────────────────────────────────────── */
const faqs = [
  {
    question: 'How long does registration take?',
    answer: 'Usually 7–10 working days depending on BIPA processing.',
  },
  {
    question: 'Is everything remote?',
    answer: 'Yes. Everything is handled online through WhatsApp and email.',
  },
  {
    question: 'Are there hidden costs?',
    answer: 'No. Fixed transparent pricing — what you see is what you pay.',
  },
  {
    question: 'Do I need to visit an office?',
    answer: 'No office visits required. Everything is done remotely.',
  },
  {
    question: 'Do you help after registration?',
    answer: 'Yes. We also assist with business plans, branding, websites, policies, and startup documents.',
  },
  {
    question: "What's the difference between CC and Pty Ltd?",
    answer: 'A CC (Close Corporation) is simpler and cheaper, ideal for small businesses. A Pty Ltd (Private Company) offers more structure and is better for scaling businesses seeking investment.',
  },
  {
    question: 'What documents do I need to register?',
    answer: "We'll need your ID copy, proposed business name options, and basic details about your business activities. We handle all the forms.",
  },
  {
    question: 'Can I track my registration progress?',
    answer: 'Yes. We provide updates via WhatsApp throughout the process.',
  },
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
      {children}
    </span>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function FAQPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>FAQ</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Common Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Everything you need to know about getting started with SMEfrog.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══ */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-frog-hairline last:border-b-0"
                    >
                      <AccordionTrigger className="text-frog-light text-sm md:text-base font-heading font-semibold hover:text-frog-green hover:no-underline py-4 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] [&>svg]:text-frog-green">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-frog-muted text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STILL HAVE QUESTIONS CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light mb-4">
              Still have questions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8">
              Reach out directly and we&apos;ll help you get the answers you need.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
