'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  ArrowLeft,
  Home,
  RefreshCw,
  Award,
  Menu,
  X,
  Flame,
} from 'lucide-react'
import type { useAcademyProgress } from '@/hooks/use-academy-progress'

const navItems = [
  { href: '/academy', label: 'Home', icon: Home },
  { href: '/academy/practice', label: 'Practice', icon: RefreshCw },
  { href: '/academy/achievements', label: 'Milestones', icon: Award },
]

export function AcademyHeader({
  progress,
}: {
  progress: ReturnType<typeof useAcademyProgress>
}) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { state } = progress
  const { currentStreak } = state

  return (
    <header className="academy-safe-top sticky top-0 z-50 bg-academy-surface/90 backdrop-blur-lg border-b border-academy-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Back to SMEfrog + Logo */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <Link
            href="/"
            aria-label="Back to SMEfrog main site"
            className="p-2 rounded-full hover:bg-academy-surface-2 transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/academy" className="flex items-center gap-2 min-w-0">
            <span className="text-xl md:text-2xl font-black tracking-tight truncate" style={{ color: 'var(--color-academy-primary)' }}>
              SMEfrog
            </span>
            <span className="hidden sm:inline text-[10px] md:text-xs font-bold uppercase tracking-widest bg-academy-primary-soft text-academy-primary px-2 py-0.5 rounded-full shrink-0">
              Academy
            </span>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  active
                    ? 'bg-academy-primary text-white'
                    : 'text-academy-ink-2 hover:bg-academy-surface-2'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right: Stats (simplified — only streak, no hearts/gems) */}
        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          {/* Streak (only show if > 0) */}
          {currentStreak > 0 && (
            <div
              className="flex items-center gap-1 px-2 md:px-2.5 py-1.5 rounded-full"
              style={{ background: 'var(--color-academy-warning-soft)' }}
              title={`${currentStreak}-day streak`}
            >
              <Flame
                className="w-3.5 h-3.5 md:w-4 md:h-4 academy-animate-flame"
                style={{ color: 'var(--color-academy-warning)' }}
                strokeWidth={2}
                fill="currentColor"
              />
              <span className="font-black text-xs md:text-sm text-academy-ink academy-nums">
                {currentStreak}
              </span>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full hover:bg-academy-surface-2"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-academy-border bg-academy-surface">
          <div className="max-w-5xl mx-auto px-4 py-2 flex flex-col gap-1">
            {navItems.map(item => {
              const Icon = item.icon
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    active
                      ? 'bg-academy-primary text-white'
                      : 'text-academy-ink-2 hover:bg-academy-surface-2'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
