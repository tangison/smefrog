'use client'

import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  highlight?: boolean
}

export function GlassCard({ children, className = "", delay = 0, highlight = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
      className={`relative group ${className}`}
    >
      {/* Outer gradient border (bezel 1) */}
      <div className={`absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[24px] pointer-events-none ${
        highlight ? 'from-[#7AC943]/20 via-[#7AC943]/5 to-transparent' : ''
      }`} />

      {/* Inner core (bezel 2) */}
      <div className="relative h-full bg-[#0A0A0A] border border-white/5 backdrop-blur-xl rounded-[23px] overflow-hidden p-8 transition-transform duration-500 group-hover:-translate-y-1">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7AC943]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {children}
      </div>
    </motion.div>
  )
}
