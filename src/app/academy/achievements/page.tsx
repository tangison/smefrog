'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, CheckCircle2 } from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { LEARNING_PATHS, getPathProgress, getPathModuleIds } from '@/lib/academy/curriculum'
import { MODULES } from '@/lib/academy/modules'

// Simplified milestones — tied to practical outcomes, not arbitrary activity
const MILESTONES = [
  {
    id: 'first-lesson',
    name: 'First lesson complete',
    description: 'You finished your first lesson. You can now explain one practical business concept.',
    check: (completedCount: number) => completedCount >= 1,
  },
  {
    id: 'path-started',
    name: 'Path started',
    description: 'You completed 5 lessons. You are building a real understanding of your chosen topic.',
    check: (completedCount: number) => completedCount >= 5,
  },
  {
    id: 'path-complete',
    name: 'Path complete',
    description: 'You completed every lesson in a learning path. You can now take the next real action.',
    check: (pathCompleted: number) => pathCompleted >= 1,
  },
  {
    id: 'all-paths',
    name: 'Polymath',
    description: 'You completed every lesson in every path. You have a comprehensive Namibian business education.',
    check: (pathCompleted: number) => pathCompleted >= LEARNING_PATHS.length,
  },
]

export default function AchievementsPage() {
  const progress = useAcademyProgressContext()
  const { completedModuleIds, completedCount } = progress

  // Calculate how many paths are complete
  const pathsCompleted = LEARNING_PATHS.filter(path => {
    const { completed, total } = getPathProgress(path, completedModuleIds)
    return total > 0 && completed === total
  }).length

  const unlocked = MILESTONES.filter(m => {
    if (m.id === 'path-complete' || m.id === 'all-paths') {
      return m.check(pathsCompleted)
    }
    return m.check(completedCount)
  })
  const unlockedIds = unlocked.map(m => m.id)

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      <Link
        href="/academy"
        className="flex items-center gap-2 text-sm font-bold text-academy-muted hover:text-academy-ink mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Academy
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2">Milestones</h1>
        <p className="text-academy-ink-2 text-sm md:text-base">
          Milestones mark real progress — not arbitrary points. Each one means you can do something you couldn&apos;t before.
        </p>
      </motion.div>

      <div className="space-y-4">
        {MILESTONES.map((milestone, i) => {
          const isUnlocked = unlockedIds.includes(milestone.id)
          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`academy-card p-6 flex items-start gap-4 ${isUnlocked ? '' : 'opacity-60'}`}
              style={isUnlocked ? { borderColor: 'var(--color-academy-success)' } : {}}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  isUnlocked ? '' : ''
                }`}
                style={{
                  background: isUnlocked
                    ? 'var(--color-academy-success-soft)'
                    : 'var(--color-academy-surface-2)',
                }}
              >
                {isUnlocked ? (
                  <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--color-academy-success)' }} strokeWidth={2} />
                ) : (
                  <Lock className="w-5 h-5 text-academy-muted" strokeWidth={2} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-black text-academy-ink">{milestone.name}</h2>
                  {isUnlocked && (
                    <span
                      className="academy-chip"
                      style={{
                        background: 'var(--color-academy-success-soft)',
                        color: 'var(--color-academy-success)',
                      }}
                    >
                      Unlocked
                    </span>
                  )}
                </div>
                <p className="text-sm text-academy-ink-2 leading-snug">{milestone.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ─── Path progress summary ─── */}
      <div className="mt-10">
        <h2 className="text-xl font-black text-academy-ink mb-4">Path progress</h2>
        <div className="space-y-3">
          {LEARNING_PATHS.map(path => {
            const { completed, total, pct } = getPathProgress(path, completedModuleIds)
            return (
              <Link
                key={path.id}
                href="/academy"
                className="academy-card p-4 flex items-center gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-academy-ink text-sm">{path.name}</h3>
                    <span className="text-xs text-academy-muted academy-nums shrink-0">
                      {completed}/{total}
                    </span>
                  </div>
                  <div className="academy-progress-track">
                    <div
                      className="academy-progress-fill"
                      style={{ width: `${pct}%`, background: path.accent }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <p className="text-center text-xs text-academy-muted mt-10">
        Saved on this device · No account required
      </p>
    </div>
  )
}
