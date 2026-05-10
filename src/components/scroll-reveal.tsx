'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const reveal: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
}

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}
