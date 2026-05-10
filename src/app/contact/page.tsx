import { MessageCircle, ArrowRight, Phone, Globe, Mail } from 'lucide-react'
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
    answer: 'Yes. We also assist with business plans, branding, websites, policies, and startup documents.',
  },
]

const contactMethods = [
  {
    label: 'WhatsApp (Gadafi)',
    value: '081 341 1522',
    href: 'https://wa.me/264813411522',
    icon: MessageCircle,
  },
  {
    label: 'WhatsApp (Mux)',
    value: '085 305 7020',
    href: 'https://wa.me/264853057020',
    icon: MessageCircle,
  },
  {
    label: 'Website',
    value: 'smefrog.tangison.com',
    href: 'https://smefrog.tangison.com',
    icon: Globe,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
            Get in Touch
          </h1>
          <p className="text-[#8BA89A] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Ready to start? Have questions? Reach out — we respond fast.
          </p>
        </div>
      </section>

      {/* Contact + FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-heading font-bold text-frog-light mb-6">
                Contact Us
              </h2>

              <div className="space-y-3 mb-8">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#151D19] ring-1 ring-white/[0.06] p-4 hover:ring-frog-green/20 transition-colors duration-300"
                  >
                    <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                      <method.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[#8BA89A] text-xs">{method.label}</p>
                      <p className="text-frog-light text-sm font-medium">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Main CTA */}
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-heading font-bold text-frog-light mb-6">
                Common Questions
              </h2>

              <div className="rounded-2xl bg-[#151D19] ring-1 ring-white/[0.06] p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-white/[0.06] last:border-b-0"
                    >
                      <AccordionTrigger className="text-frog-light text-sm md:text-base font-heading font-semibold hover:text-frog-green hover:no-underline py-4 transition-colors duration-300 [&>svg]:text-frog-green">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#8BA89A] text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
