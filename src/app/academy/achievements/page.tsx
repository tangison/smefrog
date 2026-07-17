'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, Trophy } from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { ACHIEVEMENTS } from '@/lib/academy/achievements'
import type { AchievementCategory } from '@/lib/academy/types'

const CATEGORY_META: Record<AchievementCategory, { label: string; emoji: string; color: string }> = {
  streak: { label: 'Streaks', emoji: '🔥', color: 'var(--color-academy-warning)' },
  completion: { label: 'Completion', emoji: '📚', color: 'var(--color-academy-primary)' },
  mastery: { label: 'Mastery', emoji: '🎯', color: 'var(--color-academy-success)' },
  speed: { label: 'Speed', emoji: '⚡', color: 'var(--color-academy-info)' },
  exploration: { label: 'Exploration', emoji: '🧭', color: 'var(--color-academy-secondary)' },
  special: { label: 'Special', emoji: '⭐', color: 'var(--color-academy-danger)' },
}

const ACHIEVEMENT_EMOJI: Record<string, string> = {
  sprout: '🌱',
  pencil: '✏️',
  target: '🎯',
  flame: '🔥',
  fire: '🔥',
  book: '📖',
  books: '📚',
  medal: '🏅',
  trophy: '🏆',
  graduation: '🎓',
  bullseye: '🎯',
  star: '⭐',
  compass: '🧭',
  map: '🗺️',
  globe: '🌍',
  refresh: '🔄',
  brain: '🧠',
  calendar: '📅',
  'calendar-check': '✅',
  zap: '⚡',
  diamond: '💎',
  check: '✅',
}

export default function AchievementsPage() {
  const progress = useAcademyProgressContext()
  const { state } = progress

  const unlocked = new Set(state.unlockedAchievements)
  const total = ACHIEVEMENTS.length
  const unlockedCount = unlocked.size

  // Group by category
  const byCategory = ACHIEVEMENTS.reduce((acc, ach) => {
    if (!acc[ach.category]) acc[ach.category] = []
    acc[ach.category].push(ach)
    return acc
  }, {} as Record<AchievementCategory, typeof ACHIEVEMENTS>)

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      <Link
        href="/academy"
        className="flex items-center gap-2 text-sm font-bold text-academy-muted hover:text-academy-ink mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Academy
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="academy-card p-6 md:p-8 mb-6 text-center"
      >
        <Trophy className="w-12 h-12 text-academy-warning mx-auto mb-2" strokeWidth={1.5} />
        <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2">Awards</h1>
        <p className="text-academy-ink-2 mb-4">
          Unlock awards as you progress. Each award earns bonus XP.
        </p>
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-academy-surface-2">
          <span className="text-2xl font-black text-academy-ink academy-nums">
            {unlockedCount}
            <span className="text-academy-muted">/<span className="academy-nums">{total}</span></span>
          </span>
          <span className="text-sm font-bold text-academy-muted">unlocked</span>
        </div>
      </motion.div>

      {/* Categories */}
      {Object.entries(byCategory).map(([cat, achievements]) => {
        const meta = CATEGORY_META[cat as AchievementCategory]
        const catUnlocked = achievements.filter(a => unlocked.has(a.id)).length
        return (
          <section key={cat} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{meta.emoji}</span>
              <h2 className="text-xl font-black text-academy-ink">{meta.label}</h2>
              <span
                className="academy-chip"
                style={{ background: `color-mix(in srgb, ${meta.color} 15%, white)`, color: meta.color }}
              >
                <span className="academy-nums">{catUnlocked}</span>/<span className="academy-nums">{achievements.length}</span>
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {achievements.map((ach, i) => {
                const isUnlocked = unlocked.has(ach.id)
                return (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className={`academy-badge ${isUnlocked ? 'academy-badge-unlocked' : 'academy-badge-locked'}`}
                  >
                    <div className="text-4xl mb-1">
                      {isUnlocked ? (ACHIEVEMENT_EMOJI[ach.icon] || '🏅') : <Lock className="w-8 h-8 text-academy-muted" />}
                    </div>
                    <div className="font-black text-sm text-academy-ink leading-tight">{ach.name}</div>
                    <div className="text-xs text-academy-muted leading-snug mt-1">{ach.description}</div>
                    {ach.xpReward > 0 && (
                      <div className="text-xs font-bold mt-2" style={{ color: meta.color }}>
                        +{ach.xpReward} XP
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
