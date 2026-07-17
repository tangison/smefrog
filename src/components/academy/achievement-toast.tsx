'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { Achievement } from '@/lib/academy/types'

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

export function AchievementToast({
  achievements,
  onDismiss,
}: {
  achievements: Achievement[]
  onDismiss: () => void
}) {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (achievements.length === 0) return
    const t = setTimeout(onDismiss, 6000)
    return () => clearTimeout(t)
  }, [achievements, onDismiss])

  return (
    <div className="fixed top-20 right-4 z-[200] flex flex-col gap-2 max-w-sm w-[calc(100vw-2rem)] sm:w-auto pointer-events-none">
      <AnimatePresence>
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.id + i}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.15 }}
            className="academy-card p-4 flex items-center gap-3 pointer-events-auto border-2 !border-academy-warning bg-academy-warning-soft"
            style={{ borderColor: 'var(--color-academy-warning)' }}
          >
            <div className="text-3xl shrink-0 academy-animate-bounce-in">
              {ACHIEVEMENT_EMOJI[ach.icon] || '🏅'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest text-academy-warning mb-0.5">
                Achievement unlocked
              </div>
              <div className="font-black text-academy-ink text-sm leading-tight">{ach.name}</div>
              <div className="text-xs text-academy-ink-2 leading-snug mt-0.5">{ach.description}</div>
              {ach.xpReward > 0 && (
                <div className="text-xs font-bold text-academy-warning mt-1">+{ach.xpReward} XP</div>
              )}
            </div>
            <button
              onClick={onDismiss}
              aria-label="Dismiss"
              className="p-1 rounded-full hover:bg-academy-surface-2 shrink-0"
            >
              <X className="w-4 h-4 text-academy-muted" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
