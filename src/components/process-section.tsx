'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { MessageCircle, FileText, Settings, Package } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Message us on WhatsApp to get started.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Send Your Details',
    description: 'We collect the required registration information.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'We Handle Everything',
    description: 'Compliance, forms, filings, and submissions — all taken care of.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Receive Your Documents',
    description: 'Delivered digitally and ready for business.',
    icon: Package,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            How It Works
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-12 md:mb-20">
            Four Simple Steps
          </h2>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              {/* Outer Shell - Double Bezel */}
              <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem] h-full">
                {/* Inner Core */}
                <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8 h-full flex flex-col">
                  {/* Step Number + Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-heading font-bold flex items-center justify-center text-lg">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-frog-green/[0.06] flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-frog-green/60" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8BA89A] text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Connector indicator (not on last item) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-end mt-4">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-frog-green/30">
                          <path d="M0 6H20M20 6L15 1M20 6L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
