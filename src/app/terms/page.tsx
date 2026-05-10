import { ScrollReveal } from '@/components/scroll-reveal'
import { FileText, CreditCard, Clock, Scale } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: 'Service Terms',
    content: [
      'SMEfrog provides business registration, startup documentation, and digital support services for entrepreneurs in Namibia. Our services include Close Corporation (CC) registration, Private Company (Pty Ltd) registration, business plans, company profiles, compliance documents, and digital setup services.',
      'By engaging our services, you agree to provide accurate and complete information required for service delivery. SMEfrog acts as a compliance facilitator, preparing and submitting documentation on your behalf based on the information you provide.',
      'We reserve the right to refuse service if the information provided is incomplete, inaccurate, or if the requested service falls outside our scope of work.',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment Policy',
    content: [
      'Payment is required before service processing begins. We accept payment via EFT, bank transfer, and other methods as communicated during the consultation process. All prices are quoted in Namibian Dollars (N$) and are inclusive of applicable BIPA filing fees unless stated otherwise.',
      'Refund Policy: Services are non-refundable once processing has begun. If a registration is rejected due to an error on our part, we will rectify and resubmit at no additional cost. If a registration cannot be completed due to information you provided being incorrect or insufficient, additional fees may apply for resubmission.',
      'Partial payments or payment plans may be arranged at our discretion. Full payment must be received before final documents are delivered.',
    ],
  },
  {
    icon: Clock,
    title: 'Turnaround Expectations',
    content: [
      'Standard business registration services are typically completed within 7–10 working days from the date we receive all required information and payment. This timeframe is dependent on BIPA (Business and Intellectual Property Authority) processing times, which are outside our control.',
      'Delays may occur due to BIPA backlogs, incomplete documentation, name reservation disputes, or other regulatory factors. We will keep you informed of any delays and work to resolve them as quickly as possible.',
      'Expedited processing may be available for certain services at an additional fee. Please ask about rush options during your consultation.',
    ],
  },
  {
    icon: Scale,
    title: 'Liability Limitations',
    content: [
      'SMEfrog acts as a compliance facilitator, not legal counsel. Our services include document preparation, filing, and submission based on the information you provide. We do not provide legal advice, tax advice, or financial advisory services.',
      'While we strive for accuracy and compliance, SMEfrog cannot be held liable for outcomes resulting from incorrect information provided by the client, regulatory changes beyond our control, or decisions made by BIPA or other government entities.',
      'Our liability is limited to the fees paid for the specific service in question. Under no circumstances shall SMEfrog be liable for indirect, incidental, or consequential damages arising from the use of our services.',
      'For legal matters beyond our scope, we recommend consulting a qualified legal professional.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Terms of Service
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Service Terms
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg mt-4 leading-relaxed max-w-2xl">
              Please review these terms carefully before engaging our services. They outline the scope, expectations, and limitations of our work together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.06}>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-lg md:text-xl font-heading font-bold text-frog-light pt-1.5">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3 pl-0 md:pl-14">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-frog-muted text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Last Updated */}
      <section className="pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-frog-muted/40 text-xs text-center">
            Last updated: {new Date().toLocaleDateString('en-NA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </>
  )
}
