'use client'

import { ScrollReveal } from './scroll-reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
    answer:
      'Yes. We also assist with business plans, branding, websites, policies, and startup documents.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            FAQ
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-12 md:mb-16">
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Outer Shell - Double Bezel */}
          <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem]">
            {/* Inner Core */}
            <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-white/[0.06] last:border-b-0"
                  >
                    <AccordionTrigger className="text-frog-light text-base md:text-lg font-heading font-semibold hover:text-frog-green hover:no-underline py-5 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] [&>svg]:text-frog-green">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#8BA89A] text-sm md:text-base leading-relaxed pb-5">
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
  )
}
