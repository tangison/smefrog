'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center px-4 md:px-6">
      <div className="flex flex-col items-center text-center">
        {/* Error icon */}
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center mb-8">
          <svg
            className="w-7 h-7 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-frog-light mb-3">
          Something Went Wrong.
        </h1>

        <p className="text-frog-muted text-base max-w-md mb-8">
          Our systems hit a small obstacle.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Try Again
            <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
          </button>

          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Back Home
            <span className="w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
