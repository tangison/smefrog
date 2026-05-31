'use client'

import { useState } from 'react'
import Image from 'next/image'

/* ─── Data ─────────────────────────────────────────── */
const SCREENSHOTS = [
  { src: '/images/wa-compliance.jpeg', alt: 'WhatsApp compliance review', w: 768, h: 1376 },
  { src: '/images/wa-startup.jpeg',    alt: 'WhatsApp startup review',    w: 768, h: 1376 },
  { src: '/images/wa-light-1.jpeg',    alt: 'WhatsApp review 1',         w: 768, h: 1376 },
  { src: '/images/wa-light-2.jpeg',    alt: 'WhatsApp review 2',         w: 768, h: 1376 },
  { src: '/images/wa-business.jpeg',   alt: 'WhatsApp business review',  w: 576, h: 1024 },
]

/* ─── Single card ──────────────────────────────────── */
function ScreenshotCard({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px] snap-center">
      {/* Phone mockup container */}
      <div className="relative rounded-2xl bg-[#F8F9F4] p-3 ring-1 ring-[#7AC943]/10 shadow-lg shadow-black/[0.08]">
        {/* Screen / image — 9:16 aspect ratio like a phone */}
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '9 / 16' }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, 260px"
            className="object-cover object-top"
            quality={85}
          />
        </div>
      </div>

      {/* Label */}
      <p className="text-center mt-3 text-[10px] text-black/30 font-bold uppercase tracking-[0.2em]">
        Verified WhatsApp Review
      </p>
    </div>
  )
}

/* ─── Carousel ─────────────────────────────────────── */
export function WhatsAppTestimonials() {
  const [paused, setPaused] = useState(false)

  // Duplicate items for seamless infinite loop (CSS translateX 0 → -50%)
  const allItems = [...SCREENSHOTS, ...SCREENSHOTS]

  return (
    <div className="w-full overflow-hidden">
      {/* ── Desktop: infinite CSS scroll animation ── */}
      <div
        className={`hidden md:flex gap-6 animate-wa-scroll${paused ? ' animate-wa-scroll-paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {allItems.map((item, i) => (
          <ScreenshotCard key={i} {...item} />
        ))}
      </div>

      {/* ── Mobile: swipeable scroll-snap ── */}
      <div
        className="md:hidden flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {SCREENSHOTS.map((item, i) => (
          <ScreenshotCard key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
