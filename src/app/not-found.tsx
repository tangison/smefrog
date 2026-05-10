'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center px-4 md:px-6">
      <div className="relative flex flex-col items-center text-center">
        {/* Ambient green glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-frog-green/[0.08] blur-[100px] w-[300px] h-[300px] rounded-full pointer-events-none" />

        {/* SMEfrog icon with green glow */}
        <div className="relative w-20 h-20 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-8">
          <img src="/icon.png" alt="SMEfrog" className="w-12 h-12 rounded-xl" />
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-frog-light mb-3">
          Looks Like This Page Jumped Away.
        </h1>

        <p className="text-frog-muted text-base max-w-md mb-8">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          Back Home
          <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </div>
  )
}
