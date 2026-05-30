'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── 9 hero slides — WebP with PNG fallback ─── */
const HERO_SLIDES = [
  { src: '/hero/hero-1.webp', fallback: '/hero/hero-1.png' },
  { src: '/hero/hero-2.webp', fallback: '/hero/hero-2.png' },
  { src: '/hero/hero-3.webp', fallback: '/hero/hero-3.png' },
  { src: '/hero/hero-4.webp', fallback: '/hero/hero-4.png' },
  { src: '/hero/hero-5.webp', fallback: '/hero/hero-5.png' },
  { src: '/hero/hero-6.webp', fallback: '/hero/hero-6.png' },
  { src: '/hero/hero-7.webp', fallback: '/hero/hero-7.png' },
  { src: '/hero/hero-8.webp', fallback: '/hero/hero-8.png' },
  { src: '/hero/hero-9.webp', fallback: '/hero/hero-9.png' },
]

const SLIDE_DURATION = 5000 // 5 seconds auto-transition
const FADE_DURATION = 1.8   // cross-fade duration in seconds

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % HERO_SLIDES.length)
  }, [])

  // Auto-advance timer
  useEffect(() => {
    if (paused) return
    const interval = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [nextSlide, paused])

  // Preload all images after mount
  useEffect(() => {
    HERO_SLIDES.forEach(({ src, fallback }) => {
      const img = new window.Image()
      img.src = src
      // Also preload fallback
      const img2 = new window.Image()
      img2.src = fallback
    })
  }, [])

  // Pause on hover / focus for accessibility
  const pause = () => setPaused(true)
  const resume = () => setPaused(false)

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      role="region"
      aria-label="Hero image slideshow"
      aria-roledescription="carousel"
    >
      {/* ─── Slideshow images with cross-fade ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${current + 1} of ${HERO_SLIDES.length}`}
        >
          {/* Desktop: object-cover full-width, anchors left */}
          {/* Mobile: object-center smart-center crop keeps subjects centered */}
          <Image
            src={HERO_SLIDES[current].src}
            alt=""
            fill
            className="object-cover object-center md:object-cover md:object-left"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* ─── Persistent 15% dark-green overlay ─── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(30, 58, 47, 0.15)' }}
        aria-hidden="true"
      />

      {/* ─── Bottom gradient for text legibility ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-frog-black via-frog-black/50 to-frog-black/10 z-[2]" />

      {/* ─── Top vignette ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-frog-black/40 via-transparent to-transparent z-[2]" />

      {/* ─── Ambient glow effects ─── */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-frog-green/8 blur-[180px] rounded-full pointer-events-none z-[3]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-frog-dark/40 blur-[140px] rounded-full pointer-events-none z-[3]" />

      {/* ─── Slide indicators ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex items-center gap-1.5" role="tablist" aria-label="Slideshow controls">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-700 min-h-[44px] flex items-center ${
              i === current
                ? 'bg-frog-green w-8'
                : 'bg-white/20 w-2 hover:bg-white/40'
            }`}
          >
            <span className="sr-only">Slide {i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
