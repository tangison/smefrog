'use client'

import { motion } from 'framer-motion'
import { LogoMark } from '@/components/logo-mark'

export default function Loading() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-frog-black">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="relative w-20 h-20 mb-8"
      >
        <LogoMark className="w-20 h-20 drop-shadow-[0_0_20px_rgba(122,201,67,0.3)]" />
      </motion.div>
      <motion.span
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-white/10 font-black text-[10px] uppercase tracking-[1em]"
      >
        Preparing Jump
      </motion.span>
    </div>
  )
}
