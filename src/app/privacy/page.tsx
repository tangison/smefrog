'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us when using our services, including:',
      '• Personal identification information: full name, email address, phone number, physical address, and national identification number.',
      '• Business information: company name, registration details, business address, and director/shareholder information.',
      '• Payment information: banking details and payment records processed through secure third-party providers.',
      '• Communication data: records of correspondence between you and SMEfrog, including WhatsApp conversations, emails, and support tickets.',
      '• Technical data: IP address, browser type, device information, and usage patterns when you visit our website.',
    ],
  },
  {
    title: '2. How We Use Your Data',
    content: [
      'We use the information we collect to:',
      '• Provide and administer our business registration and compliance services in Namibia.',
      '• Process your applications with the Ministry of Industrialisation, Trade and SME Development (MITSMED) and other relevant authorities.',
      '• Communicate with you about your application status, required documents, and service updates.',
      '• Process payments and maintain financial records.',
      '• Improve our services, website functionality, and user experience.',
      '• Comply with legal obligations and regulatory requirements under Namibian law.',
      '• Send you relevant updates about regulatory changes that may affect your business (with your consent).',
    ],
  },
  {
    title: '3. Data Protection & Security',
    content: [
      'We take the protection of your personal data seriously and implement appropriate technical and organisational measures to safeguard your information, including:',
      '• Encryption of data in transit and at rest using industry-standard protocols.',
      '• Secure access controls limiting data access to authorised personnel only.',
      '• Regular security assessments and updates to our systems.',
      '• Secure third-party payment processors that comply with PCI-DSS standards.',
      '• While we strive to protect your data, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '4. Data Sharing & Third Parties',
    content: [
      'We may share your information with:',
      '• Government agencies and regulatory bodies as required to complete your business registration and compliance services.',
      '• Trusted service providers who assist us in delivering our services (e.g., payment processors, hosting providers), who are bound by confidentiality obligations.',
      '• Law enforcement or regulatory authorities when required by Namibian law or court order.',
      'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'Under the Namibian Data Protection framework, you have the right to:',
      '• Access: Request a copy of the personal data we hold about you.',
      '• Correction: Request correction of inaccurate or incomplete personal data.',
      '• Deletion: Request deletion of your personal data, subject to legal retention requirements.',
      '• Objection: Object to the processing of your personal data in certain circumstances.',
      '• Portability: Request your data in a structured, commonly used format.',
      'To exercise any of these rights, please contact us using the details provided below. We will respond to your request within 30 days.',
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      'We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Business registration documents and related records are typically retained for a minimum of 5 years as required by Namibian regulatory requirements.',
    ],
  },
  {
    title: '7. Cookies & Tracking',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the revised policy.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:',
      '',
      'WhatsApp: Gadafi — +264 81 341 1522',
      'WhatsApp: Mux — +264 85 305 7020',
      'Website: www.smefrog.com',
      '',
      'We are committed to resolving any concerns promptly and transparently.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1121] py-24 sm:py-32">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#7AC943]/5 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#7AC943]/3 blur-[100px]" />
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
              Privacy{' '}
              <span className="text-[#7AC943]">Policy</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 font-[Satoshi] max-w-2xl mx-auto">
              Your privacy matters to us. This policy outlines how SMEfrog collects, uses, and protects your personal information.
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
            <ScrollReveal key={i} delay={i * 0.05} className="mb-12 last:mb-0">
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

          {/* Back link */}
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
                href="/terms"
                className="inline-flex items-center gap-2 text-[#0B1121]/50 font-[Satoshi] text-sm hover:text-[#7AC943] transition-colors"
              >
                View Terms &amp; Conditions
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
