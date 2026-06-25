'use client'

import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  Zap,
  CheckCircle2,
  Target,
  BookOpen,
  Lightbulb,
  Play,
} from 'lucide-react'
import { MODULES, getTrackById } from '@/lib/academy/modules'
import { getQuizByModuleId } from '@/lib/academy/quizzes'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { QuizRunner } from '@/components/academy/quiz-runner'

export default function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const router = useRouter()
  const progress = useAcademyProgressContext()
  const [stage, setStage] = useState<'intro' | 'lesson' | 'quiz'>('intro')

  const moduleData = MODULES.find(m => m.slug === slug)

  if (!moduleData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-black text-academy-ink mb-2">Module not found</h1>
        <p className="text-academy-ink-2 mb-6">We couldn't find that module.</p>
        <Link href="/academy" className="academy-btn academy-btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Academy
        </Link>
      </div>
    )
  }

  const track = getTrackById(moduleData.trackId)!
  const quiz = getQuizByModuleId(moduleData.id)
  const mp = progress.getModuleProgress(moduleData.id)
  const isCompleted = mp.status === 'completed'

  // If out of hearts, show prompt to wait
  if (progress.state.hearts <= 0 && stage === 'quiz') {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-4">💔</div>
        <h1 className="text-2xl font-black text-academy-ink mb-2">Out of hearts!</h1>
        <p className="text-academy-ink-2 mb-6">
          You need hearts to take quizzes. They regenerate every 4 hours, or you can refill with gems.
        </p>
        <div className="flex flex-col gap-2">
          {progress.state.gems >= 50 && (
            <button
              onClick={() => progress.refillHearts()}
              className="academy-btn academy-btn-primary w-full"
            >
              💎 Refill hearts (50 gems)
            </button>
          )}
          <Link href="/academy" className="academy-btn academy-btn-secondary w-full">
            Back to Academy
          </Link>
        </div>
      </div>
    )
  }

  /* ─── Quiz stage ─── */
  if (stage === 'quiz' && quiz) {
    return (
      <QuizRunner
        quiz={quiz}
        moduleTitle={moduleData.title}
        moduleXp={moduleData.xp}
        progress={progress}
        onComplete={() => {
          // Stay on page; user can navigate back manually or click continue
        }}
        onExit={() => setStage('lesson')}
      />
    )
  }

  /* ─── Lesson stage ─── */
  if (stage === 'lesson') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
        <button
          onClick={() => setStage('intro')}
          className="flex items-center gap-2 text-sm font-bold text-academy-muted hover:text-academy-ink mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to overview
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="academy-card p-6 md:p-10"
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-4 leading-tight">
              {moduleData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-academy-muted mb-8 pb-6 border-b border-academy-border">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {moduleData.duration} min read
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-academy-warning fill-current" />
                {moduleData.xp} XP
              </span>
              <span>·</span>
              <span>{moduleData.level}</span>
            </div>

            <p className="text-lg text-academy-ink-2 leading-relaxed mb-6 font-medium">
              {moduleData.summary}
            </p>

            <div className="text-base text-academy-ink-2 leading-relaxed whitespace-pre-line mb-8">
              {moduleData.body}
            </div>

            {/* Key facts callout */}
            <div
              className="p-5 rounded-2xl mb-8"
              style={{ background: 'var(--color-academy-warning-soft)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-academy-warning" />
                <h3 className="font-black text-academy-ink">Key takeaways</h3>
              </div>
              <ul className="space-y-2">
                {moduleData.keyFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-academy-ink-2">
                    <CheckCircle2 className="w-4 h-4 text-academy-success shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-academy-border">
            <button
              onClick={() => setStage('quiz')}
              disabled={progress.state.hearts <= 0}
              className="academy-btn academy-btn-primary flex-1"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Take the quiz ({quiz?.questions.length || 0} questions)
            </button>
            {progress.state.hearts <= 0 && (
              <p className="text-sm text-academy-danger text-center sm:self-center">
                Need hearts to take the quiz
              </p>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  /* ─── Intro stage ─── */
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      <button
        onClick={() => router.push('/academy')}
        className="flex items-center gap-2 text-sm font-bold text-academy-muted hover:text-academy-ink mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Academy
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`academy-card p-6 md:p-10 academy-track-${moduleData.trackId}`}
      >
        {/* Track badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          style={{ background: 'var(--track-color-soft)', color: 'var(--track-color)' }}
        >
          {track.name}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-academy-ink mb-3 leading-tight">
          {moduleData.title}
        </h1>
        <p className="text-lg text-academy-ink-2 mb-8 leading-relaxed">{moduleData.summary}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="text-center p-4 rounded-2xl bg-academy-surface-2">
            <Clock className="w-5 h-5 text-academy-ink-2 mx-auto mb-1" />
            <div className="text-xs font-bold uppercase tracking-wider text-academy-muted">Duration</div>
            <div className="font-black text-academy-ink">{moduleData.duration} min</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-academy-surface-2">
            <Zap className="w-5 h-5 text-academy-warning mx-auto mb-1" fill="currentColor" />
            <div className="text-xs font-bold uppercase tracking-wider text-academy-muted">XP Reward</div>
            <div className="font-black text-academy-ink">+{moduleData.xp}</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-academy-surface-2">
            <Target className="w-5 h-5 text-academy-ink-2 mx-auto mb-1" />
            <div className="text-xs font-bold uppercase tracking-wider text-academy-muted">Level</div>
            <div className="font-black text-academy-ink">{moduleData.level}</div>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="mb-8">
          <h2 className="text-sm font-black uppercase tracking-widest text-academy-muted mb-3">
            What you&rsquo;ll learn
          </h2>
          <ul className="space-y-2">
            {moduleData.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'var(--track-color-soft)' }}
                >
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--track-color)' }} />
                </div>
                <span className="text-academy-ink-2 leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Status / start button */}
        {isCompleted && (
          <div
            className="p-4 rounded-2xl mb-6 flex items-center gap-3"
            style={{ background: 'var(--color-academy-success-soft)' }}
          >
            <CheckCircle2 className="w-6 h-6 text-academy-success shrink-0" />
            <div>
              <div className="font-black text-academy-success text-sm">Module completed</div>
              <div className="text-xs text-academy-ink-2">
                Best score: {Math.round(mp.bestScore * 100)}% · {mp.attempts} attempt{mp.attempts === 1 ? '' : 's'}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setStage('lesson')}
            className="academy-btn academy-btn-primary flex-1"
          >
            <BookOpen className="w-4 h-4" />
            {isCompleted ? 'Review lesson' : 'Start lesson'}
          </button>
          {isCompleted && quiz && progress.state.hearts > 0 && (
            <button
              onClick={() => setStage('quiz')}
              className="academy-btn academy-btn-secondary flex-1"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Retake quiz
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
