'use client'

import { Check } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const trustItems = [
  '100% Remote',
  '7–10 Day Turnaround',
  'All BIPA Filings Included',
  '2X Cheaper Than Market Average',
]

export function TrustBar() {
  return (
    <ScrollReveal>
      <div className="border-y border-white/[0.06] bg-white/[0.01] py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-10 gap-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#8BA89A]">
              <span className="w-5 h-5 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-frog-green" strokeWidth={2.5} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
