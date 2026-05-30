'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── 3 Namibian landscape hero slides — WebP with PNG fallback ─── */
const HERO_SLIDES = [
  { src: '/hero/hero-1.webp', fallback: '/hero/hero-1.png' },
  { src: '/hero/hero-6.webp', fallback: '/hero/hero-6.png' },
  { src: '/hero/hero-9.webp', fallback: '/hero/hero-9.png' },
]

const SLIDE_DURATION = 5000 // 5 seconds auto-transition
const FADE_DURATION = 1.8   // cross-fade duration in seconds
const PARALLAX_FACTOR = 0.4 // Image moves at 40% of scroll speed (60% slower than content)

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

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

  // Lightweight JS parallax: translate image container at 40% of scroll speed
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !parallaxRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerHeight = rect.height
      const scrollOffset = -rect.top // How far the top of the container is from viewport top

      // Only apply parallax while the container is in view
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      // Clamp so images don't scroll past their container
      const maxTranslate = containerHeight * PARALLAX_FACTOR
      const translateY = Math.max(0, Math.min(scrollOffset * PARALLAX_FACTOR, maxTranslate))

      parallaxRef.current.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pause on hover / focus for accessibility
  const pause = () => setPaused(true)
  const resume = () => setPaused(false)

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      role="region"
      aria-label="Hero image slideshow"
      aria-roledescription="carousel"
    >
      {/* ─── Parallax image wrapper ─── */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translateY(0px)' }}
        aria-hidden="true"
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
      </div>

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
            className={`relative flex items-center justify-center w-11 h-11 cursor-pointer group ${
              i === current ? '' : ''
            }`}
          >
            {/* Visible dot */}
            <span
              className={`block rounded-full transition-all duration-700 ${
                i === current
                  ? 'bg-frog-green w-8 h-1.5'
                  : 'bg-white/20 w-2 h-1.5 group-hover:bg-white/40'
              }`}
            />
            <span className="sr-only">Slide {i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
