'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  RefreshCw,
  Check,
  X,
  Zap,
  Clock,
  BookOpen,
  Gem,
} from 'lucide-react'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { MODULES } from '@/lib/academy/modules'
import { isDue, formatDueLabel } from '@/lib/academy/spaced-repetition'

type Stage = 'intro' | 'reviewing' | 'feedback' | 'complete'

export default function PracticePage() {
  const progress = useAcademyProgressContext()
  const { state, recordPracticeReview } = progress

  // Build the review queue: all modules with SR state that are due
  const reviewQueue = useMemo(() => {
    return MODULES.filter(m => {
      const mp = state.moduleProgress[m.id]
      if (!mp || mp.status !== 'completed') return false
      return isDue(mp.sr)
    }).map(m => ({
      module: m,
      mp: state.moduleProgress[m.id],
    }))
  }, [state.moduleProgress])

  const [stage, setStage] = useState<Stage>('intro')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedQuality, setSelectedQuality] = useState<0 | 1 | 2 | 3 | 4 | 5 | null>(null)
  const [reviewedCount, setReviewedCount] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)

  const current = reviewQueue[currentIdx]

  const startSession = () => {
    if (reviewQueue.length === 0) return
    setStage('reviewing')
    setCurrentIdx(0)
    setReviewedCount(0)
    setXpEarned(0)
  }

  const handleRate = (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!current || selectedQuality !== null) return
    setSelectedQuality(quality)
    setStage('feedback')
    recordPracticeReview(current.module.id, quality)
    setReviewedCount(c => c + 1)
    setXpEarned(x => x + 10)

    setTimeout(() => {
      if (currentIdx + 1 < reviewQueue.length) {
        setCurrentIdx(i => i + 1)
        setSelectedQuality(null)
        setStage('reviewing')
      } else {
        setStage('complete')
      }
    }, 1800)
  }

  /* ─── Intro ─── */
  if (stage === 'intro') {
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
          className="academy-card p-6 md:p-10 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-academy-warning-soft flex items-center justify-center">
            <RefreshCw className="w-10 h-10 text-academy-warning" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-2">Practice</h1>
          <p className="text-academy-ink-2 mb-6 max-w-md mx-auto">
            Spaced repetition strengthens long-term memory. Rate how well you remember each module&rsquo;s
            key facts, and we&rsquo;ll schedule the next review at the optimal time.
          </p>

          {reviewQueue.length === 0 ? (
            <div className="p-6 rounded-2xl bg-academy-surface-2 mb-6">
              <div className="text-4xl mb-2">✨</div>
              <p className="font-bold text-academy-ink mb-1">No reviews due right now</p>
              <p className="text-sm text-academy-ink-2">
                Complete more modules to build your review queue, or check back later.
              </p>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-academy-surface-2 mb-6">
              <BookOpen className="w-10 h-10 text-academy-warning mx-auto mb-2" strokeWidth={1.5} />
              <p className="font-bold text-academy-ink mb-1">
                <span className="academy-nums">{reviewQueue.length}</span> module{reviewQueue.length === 1 ? '' : 's'} ready for review
              </p>
              <p className="text-sm text-academy-ink-2 mb-3">
                Each review takes ~1 minute and earns 10 XP + 1 gem.
              </p>
              <div className="text-xs text-academy-muted">
                Next up: <span className="font-bold text-academy-ink">{reviewQueue[0]?.module.title}</span>
              </div>
            </div>
          )}

          <button
            onClick={startSession}
            disabled={reviewQueue.length === 0}
            className="academy-btn academy-btn-primary w-full sm:w-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Start practice session
          </button>
        </motion.div>
      </div>
    )
  }

  /* ─── Complete ─── */
  if (stage === 'complete') {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center relative">
        <div className="academy-confetti" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => {
            const colors = ['#FF6B47', '#6C5CE7', '#7AC943', '#FFB83D']
            const color = colors[i % colors.length]
            return (
              <div
                key={i}
                className="academy-confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: color,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random()}s`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                }}
              />
            )
          })}
        </div>

        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-academy-success-soft flex items-center justify-center"
        >
          <Check className="w-12 h-12 text-academy-success" strokeWidth={3} />
        </motion.div>

        <h1 className="text-3xl font-black text-academy-ink mb-2">Practice complete</h1>
        <p className="text-academy-ink-2 mb-6">
          You reviewed <span className="academy-nums font-bold">{reviewedCount}</span> module{reviewedCount === 1 ? '' : 's'}.
        </p>

        <div className="academy-card p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-academy-muted mb-2">Earned</div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-academy-warning fill-current" />
              <span className="text-2xl font-black text-academy-ink academy-nums">+{xpEarned}</span>
              <span className="text-sm text-academy-muted">XP</span>
            </div>
            <div className="w-px h-8 bg-academy-border" />
            <div className="flex items-center gap-2">
              <Gem className="w-5 h-5 text-academy-info" strokeWidth={2} />
              <span className="text-2xl font-black text-academy-ink academy-nums">+{reviewedCount}</span>
            </div>
          </div>
        </div>

        <Link href="/academy" className="academy-btn academy-btn-success w-full">
          Back to Academy
        </Link>
      </div>
    )
  }

  /* ─── Reviewing ─── */
  if (!current) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-10">
      {/* Top bar */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/academy"
          className="text-academy-muted hover:text-academy-ink p-2 -ml-2"
          aria-label="Exit practice"
        >
          <X className="w-5 h-5" />
        </Link>
        <div className="flex-1 academy-progress-track">
          <div
            className="academy-progress-fill"
            style={{
              width: `${(currentIdx / reviewQueue.length) * 100}%`,
              background: 'var(--color-academy-warning)',
            }}
          />
        </div>
        <div className="text-xs font-bold text-academy-muted">
          <span className="academy-nums">{currentIdx + 1}</span>/<span className="academy-nums">{reviewQueue.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Module title */}
          <div className="academy-card p-6 md:p-8 mb-6">
            <div className="text-xs font-bold uppercase tracking-widest text-academy-muted mb-1">
              Recall this module
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-academy-ink mb-3 leading-tight">
              {current.module.title}
            </h2>
            <p className="text-academy-ink-2 text-sm leading-relaxed mb-4">{current.module.summary}</p>

            <div className="flex items-center gap-3 text-xs text-academy-muted mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {formatDueLabel(current.mp.sr)}
              </span>
              <span>·</span>
              <span>{current.mp.sr.reps} previous review{current.mp.sr.reps === 1 ? '' : 's'}</span>
            </div>

            <div className="p-4 rounded-2xl bg-academy-warning-soft">
              <p className="text-sm text-academy-ink-2 leading-snug">
                <span className="font-bold">Recall exercise:</span> Before revealing, try to remember the
                key facts from this module. Then scroll down and rate how well you remembered.
              </p>
            </div>

            <details className="mt-4 group">
              <summary className="cursor-pointer text-sm font-bold text-academy-primary hover:underline">
                Reveal key facts →
              </summary>
              <ul className="mt-3 space-y-2">
                {current.module.keyFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-academy-ink-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-academy-warning shrink-0 mt-1.5" />
                    {fact}
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Rating buttons */}
          <div className="academy-card p-6">
            <h3 className="font-black text-academy-ink mb-1 text-center">How well did you remember?</h3>
            <p className="text-xs text-academy-muted mb-5 text-center">
              Be honest — your rating schedules the next review
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { q: 1, label: 'Forgot', color: 'var(--color-academy-danger)', emoji: '😵' },
                { q: 3, label: 'Hard', color: 'var(--color-academy-warning)', emoji: '😓' },
                { q: 4, label: 'Good', color: 'var(--color-academy-info)', emoji: '🙂' },
                { q: 5, label: 'Easy', color: 'var(--color-academy-success)', emoji: '😎' },
              ].map(opt => (
                <button
                  key={opt.q}
                  onClick={() => handleRate(opt.q as 0 | 1 | 2 | 3 | 4 | 5)}
                  disabled={selectedQuality !== null}
                  className="academy-btn academy-btn-secondary flex-col py-4 gap-1.5"
                  style={selectedQuality === opt.q ? { borderColor: opt.color, background: `color-mix(in srgb, ${opt.color} 10%, white)` } : {}}
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-xs font-bold">{opt.label}</span>
                </button>
              ))}
            </div>
            <p className="text-[10px] text-academy-muted text-center mt-4">
              Forgot = review tomorrow · Hard = 1 day · Good = 3 days · Easy = longer interval
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback toast */}
      <AnimatePresence>
        {stage === 'feedback' && selectedQuality !== null && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 p-6 bg-academy-success-soft border-t-2 border-academy-success"
          >
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-academy-success flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="flex-1">
                <div className="font-black text-academy-success">+10 XP</div>
                <p className="text-xs text-academy-ink-2">Next review scheduled.</p>
              </div>
              <div className="text-sm font-bold text-academy-ink">
                <span className="academy-nums">{reviewedCount}</span>/<span className="academy-nums">{reviewQueue.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
