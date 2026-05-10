'use client'

import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

const variantStyles = {
  primary: "bg-[#7AC943] text-black hover:shadow-[0_0_30px_rgba(122,201,67,0.3)]",
  secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
  white: "bg-white text-black hover:bg-zinc-100",
  outline: "border border-[#7AC943] text-[#7AC943] hover:bg-[#7AC943] hover:text-black",
  dark: "bg-black text-white hover:bg-[#7AC943] hover:text-black",
}

interface MagneticButtonProps {
  children: React.ReactNode
  variant?: keyof typeof variantStyles
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
}

export function MagneticButton({
  children,
  variant = 'primary',
  onClick,
  href,
  className = "",
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const springConfig = { damping: 15, stiffness: 150 }
  const dx = useSpring(0, springConfig)
  const dy = useSpring(0, springConfig)

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.35
    const y = (clientY - (top + height / 2)) * 0.35
    dx.set(x)
    dy.set(y)
  }

  const reset = () => {
    dx.set(0)
    dy.set(0)
  }

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
    </>
  )

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ x: dx, y: dy }}
        className={`relative px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all active:scale-95 group overflow-hidden inline-flex items-center justify-center ${variantStyles[variant]} ${className}`}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: dx, y: dy }}
      onClick={onClick}
      className={`relative px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all active:scale-95 group overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      {inner}
    </motion.button>
  )
}
