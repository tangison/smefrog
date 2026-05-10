'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function ScrollReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const sections = [
  {
    title: '1. Service Description',
    content: [
      'SMEfrog is a Namibian business registration service that assists entrepreneurs and companies with the following:',
      '• Company registration with the Ministry of Industrialisation, Trade and SME Development (MITSMED).',
      '• Business name reservation and registration.',
      '• Tax registration with the Namibia Revenue Agency (NamRA).',
      '• Social Security Commission (SSC) registration.',
      '• Annual returns filing and company compliance management.',
      '• Business amendments, deregistrations, and related statutory filings.',
      '',
      'SMEfrog acts as an intermediary between you and the relevant Namibian government authorities. We do not guarantee approval of any application, as the final decision rests with the respective government body.',
    ],
  },
  {
    title: '2. Eligibility',
    content: [
      'By using our services, you represent that you:',
      '• Are at least 18 years of age.',
      '• Have the legal capacity to enter into these terms on behalf of yourself or your business entity.',
      '• Provide accurate, complete, and truthful information for all applications and filings.',
      '• Understand that providing false or misleading information may result in rejection of your application and potential legal consequences under Namibian law.',
    ],
  },
  {
    title: '3. Payment Terms',
    content: [
      '• All fees for our services must be paid in full before we commence processing your application, unless otherwise agreed in writing.',
      '• Our fees include both SMEfrog\'s service fee and the applicable government filing fees, unless stated otherwise in your quotation.',
      '• Payments can be made via bank transfer, mobile money, or other methods as communicated by SMEfrog.',
      '• SMEfrog reserves the right to adjust pricing for government fee changes. We will notify you of any material price changes before processing.',
      '• All prices are quoted in Namibian Dollars (NAD) and include VAT where applicable.',
      '• Unpaid invoices may result in the suspension or cancellation of your application processing.',
    ],
  },
  {
    title: '4. Refund Policy',
    content: [
      '• Government filing fees are non-refundable once submitted to the relevant authority, regardless of the outcome of your application.',
      '• SMEfrog service fees are refundable under the following conditions:',
      '   – If we have not yet commenced processing your application, a full refund of our service fee will be issued.',
      '   – If processing has commenced but is incomplete, a partial refund may be considered at our discretion, minus costs incurred.',
      '• No refunds will be issued for applications that are rejected by government authorities due to incomplete or incorrect information provided by you.',
      '• Refund requests must be submitted in writing within 30 days of payment.',
      '• Approved refunds will be processed within 14 business days to the original payment method.',
    ],
  },
  {
    title: '5. Processing Times & Deliverables',
    content: [
      '• Estimated processing times provided by SMEfrog are indicative and based on typical government processing periods. Actual times may vary.',
      '• SMEfrog is not liable for delays caused by government authorities, incomplete documentation, or circumstances beyond our control.',
      '• We will keep you informed of your application status and promptly communicate any issues or additional requirements.',
      '• Delivery of final documents (certificates, registration numbers, etc.) is subject to successful processing by the relevant authority.',
    ],
  },
  {
    title: '6. Client Responsibilities',
    content: [
      'You are responsible for:',
      '• Providing all required documents and information accurately and in a timely manner.',
      '• Responding to SMEfrog\'s requests for additional information within the communicated timeframes.',
      '• Ensuring that all information submitted is truthful and compliant with Namibian law.',
      '• Reviewing and verifying all applications before submission.',
      '• Maintaining compliance with ongoing statutory requirements after registration.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      '• SMEfrog provides administrative and facilitation services only. We do not provide legal, tax, or financial advice. You should consult qualified professionals for such advice.',
      '• SMEfrog shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.',
      '• Our total liability for any claim arising from our services shall not exceed the total fees paid by you to SMEfrog for the specific service in question.',
      '• We are not liable for the outcomes of government decisions, including but not limited to application rejections, delays, or additional requirements imposed by authorities.',
      '• We are not responsible for any loss or damage resulting from your failure to provide accurate or timely information.',
    ],
  },
  {
    title: '8. Intellectual Property',
    content: [
      '• All content, materials, and resources on the SMEfrog website and in our communications are the intellectual property of SMEfrog or its licensors.',
      '• You may not reproduce, distribute, or use our materials for commercial purposes without prior written consent.',
      '• Any templates, guides, or documents provided to you are for your personal use in connection with our services only.',
    ],
  },
  {
    title: '9. Confidentiality',
    content: [
      '• SMEfrog treats all client information as confidential and will not disclose it to third parties except as required to process your application or as mandated by Namibian law.',
      '• Our obligation of confidentiality does not apply to information that is already public, independently obtained, or required to be disclosed by law.',
    ],
  },
  {
    title: '10. Termination',
    content: [
      '• Either party may terminate the service engagement by providing written notice to the other party.',
      '• Upon termination, SMEfrog will cease all processing activities. Fees for work already completed will not be refunded.',
      '• Any government submissions already made cannot be reversed, and associated fees are non-refundable.',
      '• You remain responsible for any outstanding payments for services rendered up to the termination date.',
    ],
  },
  {
    title: '11. Governing Law',
    content: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Namibia.',
      'Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Namibia.',
      'The Companies Act 28 of 2004, the Close Corporations Act 26 of 1988, and all other relevant Namibian legislation apply to the business registration services we facilitate.',
    ],
  },
  {
    title: '12. Changes to These Terms',
    content: [
      'SMEfrog reserves the right to amend these Terms and Conditions at any time. We will notify you of material changes by posting updated terms on our website with a revised "Last Updated" date.',
      'Your continued use of our services after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: '13. Contact Us',
    content: [
      'For any questions or concerns regarding these Terms and Conditions, please contact us:',
      '',
      'WhatsApp: Gadafi — +264 81 341 1522',
      'WhatsApp: Mux — +264 85 305 7020',
      'Website: www.smefrog.com',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1121] py-24 sm:py-32">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7AC943]/5 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#7AC943]/3 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
              <img src="/frog-icon.png" alt="SMEfrog" className="h-10 w-10" />
              <span className="font-[Cabinet_Grotesk] text-lg font-bold text-white group-hover:text-[#7AC943] transition-colors">SMEfrog</span>
            </Link>
            <h1 className="font-[Cabinet_Grotesk] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Terms &amp;{' '}
              <span className="text-[#7AC943]">Conditions</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 font-[Satoshi] max-w-2xl mx-auto">
              Please read these terms carefully before using SMEfrog&apos;s services. By engaging us, you agree to these conditions.
            </p>
            <p className="mt-4 text-sm text-white/40 font-[Satoshi]">
              Last updated: 4 March 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.04} className="mb-12 last:mb-0">
              <h2 className="font-[Cabinet_Grotesk] text-xl sm:text-2xl font-bold text-[#0B1121] mb-4">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((paragraph, j) => (
                  <p
                    key={j}
                    className={`font-[Satoshi] text-[15px] leading-relaxed ${
                      paragraph.startsWith('•')
                        ? 'text-[#0B1121]/80 pl-4'
                        : paragraph.startsWith('   –')
                        ? 'text-[#0B1121]/70 pl-8'
                        : paragraph === ''
                        ? 'h-2'
                        : 'text-[#0B1121]/70'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && (
                <div className="mt-12 border-b border-[#0B1121]/5" />
              )}
            </ScrollReveal>
          ))}

          {/* Bottom navigation */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 pt-8 border-t border-[#0B1121]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#7AC943] font-[Satoshi] font-medium hover:gap-3 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-[#0B1121]/50 font-[Satoshi] text-sm hover:text-[#7AC943] transition-colors"
              >
                View Privacy Policy
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
