'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/* ─── Standard fade-up reveal ─── */
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

/* ─── Image scale reveal (0.97 → 1.0) ─── */
const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
}

/* ─── Stagger container (80ms between children) ─── */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

/* ─── Stagger child item ─── */
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
}

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'default' | 'image' | 'stagger-container' | 'stagger-child'
}

export function ScrollReveal({ children, className, delay = 0, variant = 'default' }: Props) {
  const variants =
    variant === 'image'
      ? imageReveal
      : variant === 'stagger-container'
        ? staggerContainer
        : variant === 'stagger-child'
          ? staggerChild
          : reveal

  return (
    <motion.div
      variants={variants}
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
