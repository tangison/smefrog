'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Zap,
  Flame,
  ChevronRight,
  Award,
  RefreshCw,
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { MODULES, TRACKS, modulesByTrack, getTrackById } from '@/lib/academy/modules'
import type { TrackId } from '@/lib/academy/types'

/* ─── Track icon ─── */
function TrackIcon({ trackId, className }: { trackId: TrackId; className?: string }) {
  const icons = {
    registration: '📝',
    compliance: '🛡️',
    fundamentals: '🗺️',
  }
  return <span className={className}>{icons[trackId]}</span>
}

/* ─── Daily Goal Ring ─── */
function DailyGoalRing({
  earned,
  goal,
}: {
  earned: number
  goal: number
}) {
  const pct = Math.min(100, (earned / goal) * 100)
  const met = earned >= goal
  const circumference = 2 * Math.PI * 36
  const dashOffset = circumference - (pct / 100) * circumference

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-24 h-24 shrink-0">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="var(--color-academy-surface-2)"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke={met ? 'var(--color-academy-success)' : 'var(--color-academy-primary)'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Flame
            className={`w-5 h-5 ${met ? 'text-academy-success' : 'text-academy-warning'}`}
            fill={met ? 'var(--color-academy-success)' : 'currentColor'}
          />
          <span className="text-xs font-black text-academy-ink mt-0.5">{Math.round(pct)}%</span>
        </div>
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-academy-muted">
          Daily Goal
        </div>
        <div className="text-2xl font-black text-academy-ink leading-tight">
          <span className="academy-nums">{earned}</span> <span className="text-academy-muted text-base font-bold">/ <span className="academy-nums">{goal}</span> XP</span>
        </div>
        <div className={`text-sm font-bold ${met ? 'text-academy-success' : 'text-academy-ink-2'}`}>
          {met ? 'Goal achieved' : <><span className="academy-nums">{goal - earned}</span> XP to go</>}
        </div>
      </div>
    </div>
  )
}

/* ─── Module row ─── */
function ModuleRow({
  module,
  index,
  status,
  onClick,
}: {
  module: (typeof MODULES)[number]
  index: number
  status: 'not-started' | 'in-progress' | 'completed' | 'locked'
  onClick: () => void
}) {
  const track = getTrackById(module.trackId)!

  const levelColor =
    module.level === 'Beginner'
      ? 'text-academy-success'
      : module.level === 'Intermediate'
      ? 'text-academy-warning'
      : 'text-academy-danger'

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      onClick={onClick}
      disabled={status === 'locked'}
      className={`academy-module-card ${status === 'locked' ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
        style={{ background: 'var(--track-color-soft, var(--color-academy-surface-2))' }}
      >
        {status === 'completed' ? (
          <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--color-academy-success)' }} />
        ) : status === 'locked' ? (
          <Lock className="w-5 h-5 text-academy-muted" />
        ) : (
          <span className="font-black text-sm" style={{ color: 'var(--track-color, var(--color-academy-ink-2))' }}>
            {module.id.slice(1)}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${levelColor}`}>
            {module.level}
          </span>
          <span className="text-[10px] text-academy-muted">·</span>
          <span className="text-[10px] text-academy-muted">{module.duration} min</span>
        </div>
        <div className="font-bold text-academy-ink text-sm leading-tight truncate">{module.title}</div>
        <div className="flex items-center gap-1 mt-0.5">
          <Zap className="w-3 h-3 text-academy-warning fill-current" />
          <span className="text-[11px] text-academy-muted font-bold">{module.xp} XP</span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-academy-muted shrink-0" />
    </motion.button>
  )
}

/* ─── Main page ─── */
export default function AcademyPage() {
  const progress = useAcademyProgressContext()
  const {
    state,
    completedModuleIds,
    completedCount,
    totalModules,
    todayXp,
    dailyGoalMet,
    dueModules,
    level,
    xpIntoLevel,
    xpToNextLevel,
    levelProgressPct,
  } = progress
  const { currentStreak } = state

  // Find next module to do (first not-completed module whose previous module is done)
  const nextModule = MODULES.find((m, i) => {
    if (completedModuleIds.includes(m.id)) return false
    if (i === 0) return true
    // Previous module in same track must be done OR any module in previous tracks done
    const prevInTrack = MODULES[i - 1]
    if (prevInTrack.trackId === m.trackId) {
      return completedModuleIds.includes(prevInTrack.id)
    }
    return true // first module of a new track is always available
  })

  // Track progress
  const trackProgress = TRACKS.map(track => {
    const mods = modulesByTrack(track.id)
    const done = mods.filter(m => completedModuleIds.includes(m.id)).length
    return {
      track,
      done,
      total: mods.length,
      pct: mods.length > 0 ? Math.round((done / mods.length) * 100) : 0,
    }
  })

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      {/* ─── Hero ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="academy-card p-6 md:p-8 mb-6 relative overflow-hidden"
      >
        {/* Decorative ambient orb */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 academy-animate-float"
          style={{ background: 'var(--color-academy-primary-soft)' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="academy-chip" style={{ background: 'var(--color-academy-primary-soft)', color: 'var(--color-academy-primary)' }}>
                <Sparkles className="w-3 h-3" />
                Level <span className="academy-nums">{level}</span>
              </span>
              <span className="academy-chip" style={{ background: 'var(--color-academy-warning-soft)', color: 'var(--color-academy-warning)' }}>
                <Flame className="w-3 h-3" fill="currentColor" />
                <span className="academy-nums">{currentStreak}</span> day streak
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2 leading-tight">
              Welcome back, learner
            </h1>
            <p className="text-academy-ink-2 text-sm md:text-base">
              {completedCount === 0
                ? "Let's start your journey through 64 modules of Namibian business mastery."
                : completedCount < totalModules
                ? `You've completed ${completedCount} of ${totalModules} modules. Keep going.`
                : 'You have completed all modules. Practice to keep your knowledge sharp.'}
            </p>
          </div>
          <DailyGoalRing earned={todayXp} goal={state.dailyGoalXp} />
        </div>

        {/* Level progress bar */}
        <div className="mt-6 relative z-10">
          <div className="flex items-center justify-between text-xs font-bold text-academy-muted mb-1.5">
            <span>Level <span className="academy-nums">{level}</span></span>
            <span><span className="academy-nums">{xpToNextLevel}</span> XP to Level <span className="academy-nums">{level + 1}</span></span>
          </div>
          <div className="academy-progress-track">
            <motion.div
              className="academy-progress-fill"
              style={{ background: 'var(--color-academy-secondary)' }}
              initial={{ width: 0 }}
              animate={{ width: `${levelProgressPct}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* ─── Continue learning ─── */}
      {nextModule && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Link
            href={`/academy/${nextModule.slug}`}
            className="block academy-card p-6 md:p-8 relative overflow-hidden group"
            style={{ background: 'var(--color-academy-primary)', color: 'var(--color-academy-surface)' }}
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20" style={{ background: 'var(--color-academy-surface)' }} />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  Continue learning
                </div>
                <h2 className="text-xl md:text-2xl font-black mb-1 leading-tight">
                  {nextModule.title}
                </h2>
                <p className="text-sm opacity-90 line-clamp-1">{nextModule.summary}</p>
                <div className="flex items-center gap-3 mt-3 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" fill="currentColor" />
                    <span className="academy-nums">{nextModule.xp}</span> XP
                  </span>
                  <span>·</span>
                  <span><span className="academy-nums">{nextModule.duration}</span> min</span>
                  <span>·</span>
                  <span>{nextModule.level}</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* ─── Practice reminder (due modules) ─── */}
      {dueModules.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6"
        >
          <Link
            href="/academy/practice"
            className="block academy-card p-6 group"
            style={{ background: 'var(--color-academy-warning-soft)', borderColor: 'var(--color-academy-warning)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'var(--color-academy-warning)' }}>
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-academy-warning)' }}>
                  Review due
                </div>
                <div className="font-black text-academy-ink">
                  <span className="academy-nums">{dueModules.length}</span> module{dueModules.length === 1 ? '' : 's'} ready for review
                </div>
                <div className="text-sm text-academy-ink-2">
                  Spaced repetition keeps knowledge sticky. Practice now.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-academy-ink-2 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* ─── Tracks ─── */}
      <div id="tracks" className="mb-6">
        <h2 className="text-2xl font-black text-academy-ink mb-4">Learning Tracks</h2>
        {/* Asymmetric grid: first track is large (col-span-2), other two stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {trackProgress.map(({ track, done, total, pct }, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <Link
                href={`/academy#track-${track.id}`}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(`track-${track.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`academy-card p-5 md:p-6 block academy-track-${track.id} ${i === 0 ? 'md:flex md:items-center md:gap-6' : ''}`}
              >
                <div className={i === 0 ? 'md:flex-1' : ''}>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`rounded-2xl flex items-center justify-center text-2xl ${i === 0 ? 'w-14 h-14' : 'w-12 h-12'}`}
                      style={{ background: 'var(--track-color-soft)' }}
                    >
                      <TrackIcon trackId={track.id} />
                    </div>
                    <span
                      className="academy-chip"
                      style={{ background: 'var(--track-color-soft)', color: 'var(--track-color)' }}
                    >
                      <span className="academy-nums">{done}</span>/<span className="academy-nums">{total}</span>
                    </span>
                  </div>
                  <h3 className={`font-black text-academy-ink mb-1 leading-tight ${i === 0 ? 'text-lg md:text-xl' : ''}`}>{track.name}</h3>
                  <p className={`text-academy-ink-2 mb-3 ${i === 0 ? 'text-sm line-clamp-2' : 'text-xs line-clamp-2'}`}>{track.tagline}</p>
                  <div className="academy-progress-track">
                    <div
                      className="academy-progress-fill"
                      style={{ width: `${pct}%`, background: 'var(--track-color)' }}
                    />
                  </div>
                  <div className="text-[10px] font-bold text-academy-muted mt-1.5 text-right">
                    <span className="academy-nums">{pct}</span>%
                  </div>
                </div>
                {i === 0 && (
                  <div className="hidden md:block md:w-48 shrink-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-academy-muted mb-2">Description</div>
                    <p className="text-sm text-academy-ink-2 leading-snug" style={{ fontFamily: 'var(--font-academy-serif)' }}>
                      {track.description}
                    </p>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Module lists per track ─── */}
      {TRACKS.map(track => {
        const mods = modulesByTrack(track.id)
        return (
          <section key={track.id} id={`track-${track.id}`} className="mb-10 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <TrackIcon trackId={track.id} className="text-2xl" />
              <div>
                <h2 className="text-xl font-black text-academy-ink leading-tight">{track.name}</h2>
                <p className="text-xs text-academy-muted">{track.tagline}</p>
              </div>
            </div>
            <div className="space-y-2">
              {mods.map((mod, i) => {
                const mp = progress.getModuleProgress(mod.id)
                const prevInTrack = i > 0 ? mods[i - 1] : null
                const prevDone = !prevInTrack || completedModuleIds.includes(prevInTrack.id)
                // Lock module if previous not done AND previous exists
                // (for now, allow all modules to be accessible — Duolingo-style locking is optional)
                const status: 'not-started' | 'in-progress' | 'completed' | 'locked' =
                  mp.status === 'completed'
                    ? 'completed'
                    : mp.status === 'in-progress'
                    ? 'in-progress'
                    : 'not-started'
                return (
                  <ModuleRow
                    key={mod.id}
                    module={mod}
                    index={i}
                    status={status}
                    onClick={() => {
                      window.location.href = `/academy/${mod.slug}`
                    }}
                  />
                )
              })}
            </div>
          </section>
        )
      })}

      {/* ─── Recent achievements ─── */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-black text-academy-ink">Recent Awards</h2>
          <Link
            href="/academy/achievements"
            className="text-sm font-bold text-academy-primary hover:underline"
          >
            View all →
          </Link>
        </div>
        <RecentAchievements progress={progress} />
      </div>
    </div>
  )
}

/* ─── Recent achievements widget ─── */
function RecentAchievements({
  progress,
}: {
  progress: ReturnType<typeof useAcademyProgressContext>
}) {
  const { state } = progress
  const unlocked = state.unlockedAchievements
  if (unlocked.length === 0) {
    return (
      <div className="academy-card p-8 text-center">
        <Award className="w-12 h-12 text-academy-muted mx-auto mb-3" />
        <p className="text-academy-ink-2 font-bold mb-1">No awards yet</p>
        <p className="text-sm text-academy-muted">
          Complete your first module to start earning awards.
        </p>
      </div>
    )
  }
  // Show last 4
  const recent = unlocked.slice(-4).reverse()
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {recent.map(id => {
        return (
          <div key={id} className="academy-badge academy-badge-unlocked">
            <Award className="w-7 h-7 text-academy-warning" strokeWidth={1.5} />
            <div className="text-xs font-bold text-academy-ink capitalize">
              {id.replace(/-/g, ' ')}
            </div>
          </div>
        )
      })}
    </div>
  )
}
