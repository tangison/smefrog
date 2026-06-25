'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Crown } from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'

// Mock leaderboard — these are AI-generated competitors with stable names.
// The user's own entry is inserted by XP rank.
const MOCK_COMPETITORS = [
  { name: 'Tangison', avatar: '🦁', xp: 4250, streak: 23 },
  { name: 'Lerato', avatar: '🦓', xp: 3180, streak: 14 },
  { name: 'Peya', avatar: '🦅', xp: 2890, streak: 9 },
  { name: 'Kaleb', avatar: '🐆', xp: 2240, streak: 18 },
  { name: 'Ingrid', avatar: '🦒', xp: 1870, streak: 5 },
  { name: 'Sakeus', avatar: '🐘', xp: 1450, streak: 11 },
  { name: 'Nangula', avatar: '🦏', xp: 980, streak: 3 },
  { name: 'Greta', avatar: '🦊', xp: 720, streak: 7 },
  { name: 'Tjizu', avatar: '🐗', xp: 410, streak: 2 },
]

export default function LeaderboardPage() {
  const progress = useAcademyProgressContext()
  const { state } = progress
  const { currentStreak } = state

  // Build the full leaderboard
  const allEntries = [
    ...MOCK_COMPETITORS,
    { name: 'You', avatar: '🐸', xp: state.totalXp, streak: currentStreak, isUser: true },
  ].sort((a, b) => b.xp - a.xp)

  const userRank = allEntries.findIndex(e => 'isUser' in e && e.isUser) + 1

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
        className="academy-card p-6 md:p-8 mb-6 text-center"
      >
        <div className="text-5xl mb-2">🏆</div>
        <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2">Weekly League</h1>
        <p className="text-academy-ink-2 mb-4">
          Top 3 by XP earn the &ldquo;Scholar&rdquo; league promotion next week.
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-academy-surface-2">
          <span className="text-sm font-bold text-academy-muted">Your rank:</span>
          <span className="text-xl font-black text-academy-primary">#{userRank}</span>
          <span className="text-sm text-academy-muted">of {allEntries.length}</span>
        </div>
      </motion.div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {allEntries.slice(0, 3).map((entry, i) => {
          const place = i + 1
          const podiumStyles = {
            1: { bg: 'var(--color-academy-warning)', emoji: '👑', height: 'pt-8' },
            2: { bg: 'var(--color-academy-muted)', emoji: '🥈', height: 'pt-6' },
            3: { bg: 'var(--color-academy-warning)', emoji: '🥉', height: 'pt-4' },
          }[place] as { bg: string; emoji: string; height: string }
          return (
            <motion.div
              key={entry.name + i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`academy-card p-4 text-center ${podiumStyles.height} ${'isUser' in entry && entry.isUser ? '!border-academy-primary' : ''}`}
              style={place === 1 ? { background: 'var(--color-academy-warning-soft)' } : {}}
            >
              <div className="text-2xl mb-1">{podiumStyles.emoji}</div>
              <div className="text-3xl mb-1">{entry.avatar}</div>
              <div className="font-black text-sm text-academy-ink truncate">{entry.name}</div>
              <div className="text-xs font-bold text-academy-muted">{entry.xp.toLocaleString()} XP</div>
            </motion.div>
          )
        })}
      </div>

      {/* Full list */}
      <div className="academy-card overflow-hidden">
        {allEntries.map((entry, i) => {
          const rank = i + 1
          const isUser = 'isUser' in entry && entry.isUser
          return (
            <motion.div
              key={entry.name + i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className={`flex items-center gap-3 p-4 border-b border-academy-border last:border-b-0 ${
                isUser ? 'bg-academy-primary-soft' : ''
              }`}
              style={isUser ? { background: 'var(--color-academy-primary-soft)' } : {}}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${
                  rank <= 3 ? 'text-white' : 'text-academy-muted bg-academy-surface-2'
                }`}
                style={rank <= 3 ? { background: rank === 1 ? 'var(--color-academy-warning)' : rank === 2 ? 'var(--color-academy-muted)' : 'var(--color-academy-warning)' } : {}}
              >
                {rank}
              </div>
              <div className="text-2xl">{entry.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className={`font-black text-sm truncate ${isUser ? 'text-academy-primary' : 'text-academy-ink'}`}>
                  {entry.name} {isUser && <span className="text-xs">(you)</span>}
                </div>
                <div className="text-xs text-academy-muted flex items-center gap-2">
                  <span>🔥 {entry.streak}d</span>
                  <span>·</span>
                  <span>{entry.xp.toLocaleString()} XP</span>
                </div>
              </div>
              {rank <= 3 && (
                <Crown className="w-5 h-5 text-academy-warning shrink-0" />
              )}
            </motion.div>
          )
        })}
      </div>

      <p className="text-xs text-academy-muted text-center mt-4">
        League resets every Monday. Mock competitors shown — your XP is real.
      </p>
    </div>
  )
}
