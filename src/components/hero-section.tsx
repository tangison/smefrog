'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react'

const headlineWords = ['Jump', 'Into', 'Business.']

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-frog-dark rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-frog-green/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(122,201,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,201,67,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="py-24 md:py-32 lg:py-40 px-4 md:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6"
              >
                Namibia&apos;s Startup Partner
              </motion.span>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-heading text-frog-light leading-[0.95] tracking-tight">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + i * 0.12,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="inline-block mr-3 md:mr-5"
                  >
                    {word === 'Business.' ? (
                      <>
                        Business<span className="text-frog-green">.</span>
                      </>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="text-lg md:text-xl text-[#8BA89A] max-w-2xl mt-6 leading-relaxed"
              >
                Simple. Fast. Affordable startup support for Namibian entrepreneurs.
                We help startups register, launch, structure, and grow — without the
                expensive consultant fees, confusing paperwork, or slow turnaround times.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                {/* Primary CTA - Button-in-Button Pattern */}
                <a
                  href="https://wa.me/264813411522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-base hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
                  className="group inline-flex items-center gap-3 ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-base font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right Visual - Brand Card */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* Double Bezel Brand Card */}
                <div className="bg-white/[0.04] ring-1 ring-white/[0.08] p-2 rounded-[2.5rem]">
                  <div className="bg-[#151D19] rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-8 flex flex-col items-center gap-6">
                    {/* Frog Icon */}
                    <div className="w-24 h-24 rounded-[1.5rem] bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <img
                        src="/icon.png"
                        alt="SMEfrog"
                        className="w-16 h-16 rounded-xl object-contain"
                      />
                    </div>

                    {/* Stats */}
                    <div className="w-full space-y-4">
                      <div className="flex items-center justify-between px-2">
                        <span className="text-[#8BA89A] text-sm">Turnaround</span>
                        <span className="text-frog-green font-heading font-bold text-lg">7–10 Days</span>
                      </div>
                      <div className="h-px bg-white/[0.06]" />
                      <div className="flex items-center justify-between px-2">
                        <span className="text-[#8BA89A] text-sm">Savings</span>
                        <span className="text-frog-green font-heading font-bold text-lg">2X Cheaper</span>
                      </div>
                      <div className="h-px bg-white/[0.06]" />
                      <div className="flex items-center justify-between px-2">
                        <span className="text-[#8BA89A] text-sm">Workflow</span>
                        <span className="text-frog-green font-heading font-bold text-lg">100% Remote</span>
                      </div>
                    </div>

                    {/* Mini CTA */}
                    <div className="w-full bg-frog-green/10 ring-1 ring-frog-green/20 rounded-2xl p-4 text-center">
                      <p className="text-frog-green font-heading font-semibold text-sm">
                        Simple. Fast. For Startups.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#8BA89A] text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#8BA89A]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
