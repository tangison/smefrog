'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  X,
  Heart,
  ChevronRight,
  RotateCcw,
  Trophy,
  Zap,
  Gem,
} from 'lucide-react'
import type { Quiz, QuizQuestion } from '@/lib/academy/types'
import type { useAcademyProgress } from '@/hooks/use-academy-progress'

type Stage = 'question' | 'feedback' | 'complete' | 'failed'

interface QuizRunnerProps {
  quiz: Quiz
  moduleTitle: string
  moduleXp: number
  progress: ReturnType<typeof useAcademyProgress>
  onComplete: (passed: boolean) => void
  onExit: () => void
}

export function QuizRunner({
  quiz,
  moduleTitle,
  moduleXp,
  progress,
  onComplete,
  onExit,
}: QuizRunnerProps) {
  const [questionIdx, setQuestionIdx] = useState(0)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [stage, setStage] = useState<Stage>('question')
  const [correctCount, setCorrectCount] = useState(0)
  const [heartsAtStart] = useState(progress.state.hearts)
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const question: QuizQuestion | undefined = quiz.questions[questionIdx]
  const totalQuestions = quiz.questions.length
  const isLastQuestion = questionIdx === totalQuestions - 1

  // Derive "no hearts" modal visibility from state (no effect needed)
  const showNoHeartsModal = progress.state.hearts <= 0 && stage === 'question'
  const dismissNoHeartsModal = () => {
    // Can't actually dismiss without hearts — but the user can exit the quiz
    onExit()
  }

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current)
    }
  }, [])

  const handleSelect = (idx: number) => {
    if (stage !== 'question' || !question) return
    if (progress.state.hearts <= 0) {
      // Modal is auto-shown via derived state; nothing to set here
      return
    }
    setSelectedIdx(idx)
    const isCorrect = idx === question.correctIndex
    const newCorrect = correctCount + (isCorrect ? 1 : 0)
    setCorrectCount(newCorrect)
    setStage('feedback')

    // Auto-advance after 1.8s
    feedbackTimerRef.current = setTimeout(() => {
      if (isLastQuestion) {
        // Finalize
        const passed = newCorrect / totalQuestions >= quiz.passThreshold
        // Record the attempt (this awards XP + updates SR + loses hearts)
        const result = progress.recordQuizAttempt(
          quiz.moduleId,
          newCorrect,
          totalQuestions,
        )
        if (passed) {
          setStage('complete')
        } else {
          setStage('failed')
        }
        onComplete(passed)
      } else {
        setQuestionIdx(i => i + 1)
        setSelectedIdx(null)
        setStage('question')
      }
    }, 1800)
  }

  const handleRetry = () => {
    setQuestionIdx(0)
    setSelectedIdx(null)
    setCorrectCount(0)
    setStage('question')
  }

  if (!question && stage !== 'complete' && stage !== 'failed') {
    return null
  }

  /* ─── Completion screen ─── */
  if (stage === 'complete') {
    const xpEarned = moduleXp + (correctCount === totalQuestions ? 25 : 0)
    return (
      <CompletionScreen
        title="Module complete"
        correct={correctCount}
        total={totalQuestions}
        xpEarned={xpEarned}
        perfect={correctCount === totalQuestions}
        onContinue={() => onComplete(true)}
      />
    )
  }

  if (stage === 'failed') {
    return (
      <CompletionScreen
        title="Not quite there yet"
        correct={correctCount}
        total={totalQuestions}
        xpEarned={0}
        perfect={false}
        failed
        onRetry={handleRetry}
        onContinue={() => onComplete(false)}
      />
    )
  }

  const isCorrect = selectedIdx === question.correctIndex
  const progressPct = ((questionIdx + (stage === 'feedback' ? 1 : 0)) / totalQuestions) * 100

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Top bar: exit + progress + hearts */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onExit}
          aria-label="Exit quiz"
          className="text-academy-muted hover:text-academy-ink p-2 -ml-2"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex-1 academy-progress-track">
          <div
            className="academy-progress-fill"
            style={{ width: `${progressPct}%`, background: 'var(--color-academy-primary)' }}
          />
        </div>
        <div className="flex items-center gap-1 text-academy-danger">
          <Heart className="w-5 h-5 fill-current" />
          <span className="font-black text-sm academy-nums">{progress.state.hearts}</span>
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={questionIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-academy-ink mb-8 leading-tight">
            {question.prompt}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx)
              const isSelected = selectedIdx === idx
              const isCorrectAnswer = idx === question.correctIndex
              const showResult = stage === 'feedback'

              let className = 'academy-quiz-option'
              if (showResult && isCorrectAnswer) {
                className += ' academy-quiz-option-correct'
              } else if (showResult && isSelected && !isCorrectAnswer) {
                className += ' academy-quiz-option-wrong'
              } else if (isSelected && !showResult) {
                className += ' academy-quiz-option-selected'
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={stage === 'feedback'}
                  className={className}
                >
                  <span className="academy-quiz-option-letter">{letter}</span>
                  <span className="flex-1">{opt}</span>
                  {showResult && isCorrectAnswer && (
                    <Check className="w-5 h-5 text-academy-success shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrectAnswer && (
                    <X className="w-5 h-5 text-academy-danger shrink-0" />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Feedback bar */}
      <AnimatePresence>
        {stage === 'feedback' && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed bottom-0 left-0 right-0 p-6 border-t-2 ${
              isCorrect
                ? 'bg-academy-success-soft border-academy-success'
                : 'bg-academy-danger-soft border-academy-danger'
            }`}
          >
            <div className="max-w-2xl mx-auto flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isCorrect ? 'bg-academy-success' : 'bg-academy-danger'
                }`}
              >
                {isCorrect ? (
                  <Check className="w-7 h-7 text-white" strokeWidth={3} />
                ) : (
                  <X className="w-7 h-7 text-white" strokeWidth={3} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-black text-lg ${isCorrect ? 'text-academy-success' : 'text-academy-danger'}`}>
                  {isCorrect ? 'Correct!' : 'Not quite'}
                </div>
                <p className="text-sm text-academy-ink-2 leading-snug">{question.explanation}</p>
              </div>
              <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-academy-surface text-academy-ink font-bold text-sm shrink-0">
                <Zap className="w-3.5 h-3.5 text-academy-warning fill-current" />
                {correctCount}/{totalQuestions}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No hearts modal */}
      <AnimatePresence>
        {showNoHeartsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-academy-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={dismissNoHeartsModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-academy-surface rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-academy-danger-soft flex items-center justify-center">
                <Heart className="w-10 h-10 text-academy-danger" />
              </div>
              <h3 className="text-2xl font-black text-academy-ink mb-2">Out of hearts</h3>
              <p className="text-academy-ink-2 mb-6">
                You need hearts to take quizzes. Hearts regenerate every 4 hours, or you can refill instantly with gems.
              </p>
              <div className="flex flex-col gap-2">
                {progress.state.gems >= 50 && (
                  <button
                    onClick={() => progress.refillHearts()}
                    className="academy-btn academy-btn-primary w-full"
                  >
                  <Gem className="w-4 h-4" strokeWidth={2} /> Refill for 50 gems
                  </button>
                )}
                <button
                  onClick={dismissNoHeartsModal}
                  className="academy-btn academy-btn-secondary w-full"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Completion Screen ─── */
function CompletionScreen({
  title,
  correct,
  total,
  xpEarned,
  perfect,
  failed,
  onRetry,
  onContinue,
}: {
  title: string
  correct: number
  total: number
  xpEarned: number
  perfect: boolean
  failed?: boolean
  onRetry?: () => void
  onContinue: () => void
}) {
  const pct = Math.round((correct / total) * 100)

  return (
    <div className="max-w-md mx-auto px-4 py-12 text-center relative">
      {/* Confetti for non-failed completion — uses CSS token references */}
      {!failed && (
        <div className="academy-confetti" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => {
            const tokenVars = [
              'var(--color-academy-primary-bright)',
              'var(--color-academy-secondary)',
              'var(--color-academy-success-bright)',
              'var(--color-academy-warning-bright)',
              'var(--color-academy-info)',
            ]
            const color = tokenVars[i % tokenVars.length]
            const left = Math.random() * 100
            const delay = Math.random() * 0.5
            const duration = 2 + Math.random() * 1
            return (
              <div
                key={i}
                className="academy-confetti-piece"
                style={{
                  left: `${left}%`,
                  background: color,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                }}
              />
            )
          })}
        </div>
      )}

      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
          failed ? 'bg-academy-danger-soft' : 'bg-academy-success-soft'
        }`}
      >
        {failed ? (
          <RotateCcw className="w-12 h-12 text-academy-danger" strokeWidth={2.5} />
        ) : (
          <Trophy className="w-12 h-12 text-academy-success" strokeWidth={2.5} />
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl font-black text-academy-ink mb-2"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-academy-ink-2 mb-8"
      >
        {failed
          ? `You scored ${correct}/${total}. You need ${Math.ceil(total * 0.7)} correct to pass. Try again!`
          : perfect
          ? 'Perfect score! Outstanding work. 🌟'
          : `You scored ${correct}/${total}. Great job!`}
      </motion.p>

      {!failed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="academy-card p-6 mb-8"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-academy-muted mb-2">
            Rewards earned
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-academy-warning fill-current" />
              <span className="text-2xl font-black text-academy-ink">+{xpEarned}</span>
              <span className="text-sm text-academy-muted">XP</span>
            </div>
            {perfect && (
              <>
                <div className="w-px h-8 bg-academy-border" />
                <div className="flex items-center gap-2">
                  <Gem className="w-5 h-5 text-academy-info" strokeWidth={2} />
                  <span className="text-2xl font-black text-academy-ink">+7</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col gap-3"
      >
        {failed && onRetry && (
          <button onClick={onRetry} className="academy-btn academy-btn-primary w-full">
            <RotateCcw className="w-4 h-4" />
            Try again
          </button>
        )}
        <button onClick={onContinue} className={`academy-btn w-full ${failed ? 'academy-btn-secondary' : 'academy-btn-success'}`}>
          {failed ? 'Back to module' : 'Continue'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
