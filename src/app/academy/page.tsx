'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Rocket,
  Wallet,
  ShieldCheck,
  Megaphone,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { LEARNING_PATHS, getFlagshipPath, getPathProgress, getPathModuleIds } from '@/lib/academy/curriculum'
import { MODULES, getModuleById } from '@/lib/academy/modules'
import type { LearningPath } from '@/lib/academy/curriculum'

/* ─── Icon mapper ─── */
function PathIcon({ name, className }: { name: LearningPath['icon']; className?: string }) {
  const map = { Rocket, Wallet, ShieldCheck, Megaphone, Users, TrendingUp }
  const Cmp = map[name]
  return <Cmp className={className} strokeWidth={1.5} />
}

/* ─── Goal selector (first visit) ─── */
function GoalSelector({
  onSelect,
}: {
  onSelect: (pathId: string) => void
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
          style={{ background: 'var(--color-academy-primary-soft)', color: 'var(--color-academy-primary)' }}
        >
          <Sparkles className="w-3 h-3" />
          SMEfrog Academy
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-academy-ink mb-4 leading-[1.05]">
          What are you trying to do?
        </h1>
        <p className="text-academy-ink-2 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Pick a goal and we&apos;ll recommend the right learning path. Each path ends with a practical output you can use.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LEARNING_PATHS.map((path, i) => (
          <motion.button
            key={path.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            onClick={() => onSelect(path.id)}
            className="academy-card p-6 text-left group"
            style={{ borderColor: path.accent === 'var(--color-academy-primary)' ? 'var(--color-academy-primary)' : 'var(--color-academy-border)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `color-mix(in srgb, ${path.accent} 12%, white)` }}
              >
                <PathIcon name={path.icon} className="w-6 h-6" />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                style={{ background: `color-mix(in srgb, ${path.accent} 12%, white)`, color: path.accent }}
              >
                {path.estimatedHours}h
              </span>
            </div>
            <h3 className="font-black text-academy-ink mb-1 text-lg leading-tight">{path.name}</h3>
            <p className="text-sm text-academy-ink-2 mb-4 leading-snug">{path.tagline}</p>
            <div className="flex items-center gap-2 text-xs font-bold" style={{ color: path.accent }}>
              <span>Start this path</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        ))}
      </div>

      <p className="text-center text-xs text-academy-muted mt-8">
        Saved on this device · No account required
      </p>
    </div>
  )
}

/* ─── Path card ─── */
function PathCard({
  path,
  progress,
  isRecommended,
  onStart,
}: {
  path: LearningPath
  progress: { completed: number; total: number; pct: number }
  isRecommended: boolean
  onStart: () => void
}) {
  const moduleIds = getPathModuleIds(path)
  const nextModule = moduleIds.find(id => {
    // Find first not-completed module
    return !progress.completed // placeholder, we'll pass completed separately
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`academy-card p-6 ${isRecommended ? 'border-2' : ''}`}
      style={isRecommended ? { borderColor: path.accent } : {}}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: `color-mix(in srgb, ${path.accent} 12%, white)` }}
          >
            <PathIcon name={path.icon} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-academy-ink text-lg leading-tight">{path.name}</h3>
            <p className="text-xs text-academy-muted">{path.tagline}</p>
          </div>
        </div>
        {isRecommended && (
          <span
            className="academy-chip"
            style={{ background: path.accent, color: 'white' }}
          >
            Recommended
          </span>
        )}
      </div>

      <p className="text-sm text-academy-ink-2 mb-4 leading-snug">{path.description}</p>

      <div className="flex items-center gap-4 text-xs text-academy-muted mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="academy-nums">{path.estimatedHours}</span>h
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span className="academy-nums">{moduleIds.length}</span> lessons
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Target className="w-3.5 h-3.5" />
          {path.practicalOutcome.split(' ').slice(0, 3).join(' ')}…
        </span>
      </div>

      {progress.total > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs font-bold text-academy-muted mb-1.5">
            <span>Progress</span>
            <span className="academy-nums">
              {progress.completed}/{progress.total}
            </span>
          </div>
          <div className="academy-progress-track">
            <div
              className="academy-progress-fill"
              style={{ width: `${progress.pct}%`, background: path.accent }}
            />
          </div>
        </div>
      )}

      <button
        onClick={onStart}
        className="academy-btn academy-btn-primary w-full"
        style={isRecommended ? { background: path.accent } : {}}
      >
        {progress.completed > 0 ? 'Continue' : 'Start'}
        <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

/* ─── Main page ─── */
function loadInitialGoal(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem('smefrog-academy-goal')
  } catch {
    return null
  }
}

export default function AcademyPage() {
  const progress = useAcademyProgressContext()
  const { completedModuleIds, completedCount } = progress
  const [selectedGoal, setSelectedGoal] = useState<string | null>(loadInitialGoal)

  const handleSelectGoal = (pathId: string) => {
    setSelectedGoal(pathId)
    try {
      localStorage.setItem('smefrog-academy-goal', pathId)
    } catch {
      /* ignore */
    }
  }

  // If no goal selected, show onboarding
  if (!selectedGoal) {
    return <GoalSelector onSelect={handleSelectGoal} />
  }

  const recommendedPath = LEARNING_PATHS.find(p => p.id === selectedGoal) || getFlagshipPath()
  const recommendedProgress = getPathProgress(recommendedPath, completedModuleIds)

  // Find next module to do in the recommended path
  const recommendedModuleIds = getPathModuleIds(recommendedPath)
  const nextModuleId = recommendedModuleIds.find(id => !completedModuleIds.includes(id))
  const nextModule = nextModuleId ? getModuleById(nextModuleId) : null

  // Other paths (not the recommended one)
  const otherPaths = LEARNING_PATHS.filter(p => p.id !== recommendedPath.id)

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
      {/* ─── Header ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="academy-chip"
            style={{ background: 'var(--color-academy-primary-soft)', color: 'var(--color-academy-primary)' }}
          >
            <Sparkles className="w-3 h-3" />
            Your goal: {recommendedPath.name}
          </span>
          <button
            onClick={() => setSelectedGoal(null)}
            className="text-xs font-bold text-academy-muted hover:text-academy-ink transition-colors"
          >
            Change
          </button>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2 leading-tight">
          {completedCount === 0
            ? 'Ready to begin'
            : completedCount < 64
            ? 'Keep going'
            : 'You did it'}
        </h1>
        <p className="text-academy-ink-2 text-sm md:text-base">
          {completedCount === 0
            ? `Your recommended path: ${recommendedPath.name}. ${recommendedModuleIds.length} lessons, ~${recommendedPath.estimatedHours} hours.`
            : `You've completed ${completedCount} lesson${completedCount === 1 ? '' : 's'} across all paths.`}
        </p>
        <p className="text-xs text-academy-muted mt-2">Saved on this device</p>
      </motion.div>

      {/* ─── Continue learning (next module) ─── */}
      {nextModule && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link
            href={`/academy/${nextModule.slug}`}
            className="block academy-card p-6 md:p-8 relative overflow-hidden group"
            style={{ background: 'var(--color-academy-primary)', color: 'var(--color-academy-surface)' }}
          >
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: 'var(--color-academy-surface)' }}
            />
            <div className="relative z-10 flex items-center gap-6">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
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
                    <Clock className="w-3.5 h-3.5" />
                    <span className="academy-nums">{nextModule.duration}</span> min
                  </span>
                  <span>·</span>
                  <span>{nextModule.level}</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* ─── Recommended path progress ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-8"
      >
        <h2 className="text-xl font-black text-academy-ink mb-4">Your path</h2>
        <PathCard
          path={recommendedPath}
          progress={recommendedProgress}
          isRecommended
          onStart={() => {
            // Scroll to the path's first module or navigate to first chapter
            const firstModuleId = recommendedModuleIds.find(id => !completedModuleIds.includes(id)) || recommendedModuleIds[0]
            const firstModule = getModuleById(firstModuleId)
            if (firstModule) {
              window.location.href = `/academy/${firstModule.slug}`
            }
          }}
        />
      </motion.div>

      {/* ─── Chapter breakdown of recommended path ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-black text-academy-ink mb-4">Chapters</h2>
        <div className="academy-card p-6">
          <ol className="space-y-4">
            {recommendedPath.chapters.map((chapter, i) => {
              const chapterModules = chapter.moduleIds
                .map(id => getModuleById(id))
                .filter((m): m is NonNullable<typeof m> => m !== undefined)
              const chapterDone = chapterModules.filter(m => completedModuleIds.includes(m.id)).length
              const chapterTotal = chapterModules.length
              const isComplete = chapterTotal > 0 && chapterDone === chapterTotal
              const isInProgress = chapterDone > 0 && chapterDone < chapterTotal

              return (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-sm ${
                      isComplete
                        ? 'bg-academy-success text-white'
                        : isInProgress
                        ? 'bg-academy-primary text-white'
                        : 'bg-academy-surface-2 text-academy-muted'
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="academy-nums">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-academy-ink text-sm leading-tight">{chapter.title}</h3>
                      <span className="text-xs text-academy-muted academy-nums shrink-0">
                        {chapterDone}/{chapterTotal}
                      </span>
                    </div>
                    <p className="text-xs text-academy-ink-2 mb-2">{chapter.description}</p>
                    {chapterModules.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {chapterModules.map(m => {
                          const done = completedModuleIds.includes(m.id)
                          return (
                            <Link
                              key={m.id}
                              href={`/academy/${m.slug}`}
                              className={`text-[11px] px-2 py-1 rounded-full font-medium transition-colors ${
                                done
                                  ? 'bg-academy-success-soft text-academy-success'
                                  : 'bg-academy-surface-2 text-academy-ink-2 hover:bg-academy-primary-soft hover:text-academy-primary'
                              }`}
                            >
                              {done && <CheckCircle2 className="w-2.5 h-2.5 inline mr-1" />}
                              {m.title}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </motion.div>

      {/* ─── Other paths (quiet) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-8"
      >
        <h2 className="text-xl font-black text-academy-ink mb-4">Other paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherPaths.map(path => {
            const pathProgress = getPathProgress(path, completedModuleIds)
            return (
              <PathCard
                key={path.id}
                path={path}
                progress={pathProgress}
                isRecommended={false}
                onStart={() => handleSelectGoal(path.id)}
              />
            )
          })}
        </div>
      </motion.div>

      {/* ─── Practice reminder (only if due modules exist) ─── */}
      {progress.dueModules.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/academy/practice"
            className="block academy-card p-6 group"
            style={{ background: 'var(--color-academy-warning-soft)', borderColor: 'var(--color-academy-warning)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-academy-warning)' }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-academy-warning)' }}>
                  Review due
                </div>
                <div className="font-black text-academy-ink">
                  <span className="academy-nums">{progress.dueModules.length}</span> lesson{progress.dueModules.length === 1 ? '' : 's'} ready for review
                </div>
                <div className="text-sm text-academy-ink-2">
                  Spaced repetition keeps knowledge sticky.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-academy-ink-2 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>
      )}

      {/* ─── Footer note ─── */}
      <p className="text-center text-xs text-academy-muted mt-12">
        SMEfrog Academy · Free business education for Namibia · Saved on this device
      </p>
    </div>
  )
}
