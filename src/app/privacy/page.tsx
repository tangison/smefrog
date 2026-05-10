import { ScrollReveal } from '@/components/scroll-reveal'
import { Shield, MessageSquare, Cookie, UserCheck, Lock, Mail } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: 'Data Collection',
    content: [
      'We collect personal information necessary to deliver our services effectively. This includes your full name, business details, contact information (phone number, email address), and any documentation required for business registration and compliance filings.',
      'Information is collected only when you voluntarily provide it — through our WhatsApp communication, online forms, or direct correspondence. We do not collect data through automated tracking or hidden means.',
    ],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Communication',
    content: [
      'SMEfrog uses WhatsApp as a primary communication channel for business consultations and service delivery. When you message us on WhatsApp, your phone number, message content, and any shared documents are processed solely for the purpose of providing our services.',
      'We do not share your WhatsApp conversation data with third parties. Message records are retained only for the duration necessary to complete your service and resolve any follow-up queries.',
    ],
  },
  {
    icon: Cookie,
    title: 'Cookies & Analytics',
    content: [
      'Our website uses minimal analytics to understand basic site usage — such as page views and general traffic patterns. We do not use third-party tracking cookies, advertising pixels, or cross-site tracking technologies.',
      'Any cookies used are strictly functional or analytical, and do not collect personally identifiable information. You may disable cookies in your browser settings without affecting your ability to use our website.',
    ],
  },
  {
    icon: UserCheck,
    title: 'User Rights',
    content: [
      'You have the right to access, correct, or delete your personal data at any time. If you wish to review the information we hold about you, or request that your data be removed from our systems, simply contact us.',
      'We will respond to all data access and deletion requests within 14 business days. Upon verification of your identity, we will provide a copy of your data or confirm its deletion from our records.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Protection',
    content: [
      'We take reasonable measures to protect your personal information from unauthorised access, alteration, or disclosure. Data is stored securely and accessed only by authorised team members who need it to deliver services.',
      'While no system is completely secure, we continuously review our practices to ensure your information is handled responsibly and in accordance with applicable Namibian data protection standards.',
    ],
  },
  {
    icon: Mail,
    title: 'Contact',
    content: [
      'For any privacy-related inquiries, concerns, or requests regarding your personal data, please reach out to our support team via WhatsApp or email. We are committed to addressing your questions promptly and transparently.',
      'WhatsApp: +264 81 341 1522',
      'We value your trust and are dedicated to protecting your privacy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Privacy Policy
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Your Privacy Matters
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg mt-4 leading-relaxed max-w-2xl">
              We are committed to protecting your personal information and being transparent about how we use it.
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
