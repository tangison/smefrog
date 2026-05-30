'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

export function ContactCta() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/20 to-frog-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(122,201,67,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(122,201,67,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="w-16 h-16 rounded-2xl bg-frog-green/20 ring-1 ring-frog-green/30 flex items-center justify-center mx-auto mb-8"
            >
              <img src="/upload/Icon.png" alt="SMEfrog" className="w-10 h-10 rounded-xl object-contain" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-4">
              Ready to Jump Into Business?
            </h2>
            <p className="text-lg md:text-xl text-[#8BA89A] max-w-xl mx-auto mb-10 leading-relaxed">
              Get started today with affordable, remote startup support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-frog-green text-frog-black rounded-full px-8 py-4 font-semibold text-base hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Register Your Business
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 ring-1 ring-white/[0.15] text-frog-light rounded-full px-8 py-4 font-medium text-base bg-white/[0.05] hover:bg-white/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {[
                { label: '100% Remote', value: true },
                { label: '7–10 Day Turnaround', value: true },
                { label: 'No Hidden Fees', value: true },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#7AC943" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#8BA89A] text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
