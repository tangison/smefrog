'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  Zap,
  CheckCircle2,
  Target,
  BookOpen,
  Lightbulb,
  Play,
  X,
  Send,
} from 'lucide-react'
import { MODULES, getTrackById } from '@/lib/academy/modules'
import { getQuizByModuleId } from '@/lib/academy/quizzes'
import { useAcademyProgressContext } from '@/components/academy/academy-progress-provider'
import { QuizRunner } from '@/components/academy/quiz-runner'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

/* ─── Contextual Kersti (lesson-scoped, no floating button) ─── */
function ContextualKersti({
  open,
  onClose,
  moduleTitle,
  moduleSummary,
}: {
  open: boolean
  onClose: () => void
  moduleTitle: string
  moduleSummary: string
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/frogai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          context: 'academy',
          lessonContext: { title: moduleTitle, summary: moduleSummary },
        }),
      })
      if (!res.ok) throw new Error('failed')
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I could not reach the assistant right now. See the official sources below or contact SMEfrog on WhatsApp at 085 341 1522.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: 'rgba(26, 26, 46, 0.4)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="bg-academy-surface rounded-t-3xl sm:rounded-3xl w-full max-w-md h-[80vh] sm:h-[600px] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div
              className="p-4 flex items-center gap-3 shrink-0"
              style={{ background: 'var(--color-academy-secondary)', color: 'white' }}
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-black text-sm">K</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-sm">Ask about this lesson</div>
                <div className="text-xs opacity-80 truncate">{moduleTitle}</div>
              </div>
              <button onClick={onClose} aria-label="Close" className="p-1.5 rounded-full hover:bg-white/20">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-academy-bg">
              {messages.length === 0 && (
                <div className="text-center pt-8">
                  <p className="text-sm text-academy-ink-2 mb-4">
                    Ask a question about <span className="font-bold">{moduleTitle}</span>. Kersti will cite
                    official Namibian sources and tell you when to seek professional advice.
                  </p>
                  <div className="space-y-2">
                    {[
                      'What\'s the most important thing to remember here?',
                      'Where can I verify this on BIPA\'s site?',
                      'What if my situation is different?',
                    ].map(q => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="block w-full text-left p-3 rounded-xl bg-academy-surface border border-academy-border text-academy-ink-2 text-xs font-semibold hover:border-academy-secondary transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-academy-secondary text-white font-semibold'
                        : 'bg-academy-surface border border-academy-border text-academy-ink'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-1 justify-start">
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{
                        background: 'var(--color-academy-secondary)',
                        animationDelay: `${i * 150}ms`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={e => {
                e.preventDefault()
                send(input)
              }}
              className="p-3 border-t border-academy-border shrink-0 bg-academy-surface flex items-center gap-2"
            >
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about this lesson…"
                className="flex-1 bg-academy-bg border-2 border-academy-border rounded-full px-4 py-2.5 text-sm text-academy-ink outline-none focus:border-academy-secondary transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full text-white flex items-center justify-center disabled:opacity-30 shrink-0"
                style={{ background: 'var(--color-academy-secondary)' }}
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ModuleView({ slug }: { slug: string }) {
  const router = useRouter()
  const progress = useAcademyProgressContext()
  const [stage, setStage] = useState<'intro' | 'lesson' | 'quiz'>('intro')
  const [showKersti, setShowKersti] = useState(false)

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
        <h1 className="text-2xl font-black text-academy-ink mb-2">Out of hearts</h1>
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
          <article className="max-w-[65ch]">
            <h1 className="text-3xl md:text-4xl font-black text-academy-ink mb-4 leading-tight">
              {moduleData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-academy-muted mb-8 pb-6 border-b border-academy-border">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="academy-nums">{moduleData.duration}</span> min read
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-academy-warning fill-current" />
                <span className="academy-nums">{moduleData.xp}</span> XP
              </span>
              <span>·</span>
              <span>{moduleData.level}</span>
            </div>

            <p className="text-lg text-academy-ink-2 leading-relaxed mb-6 font-medium" style={{ fontFamily: 'var(--font-academy-serif)' }}>
              {moduleData.summary}
            </p>

            <div className="academy-prose mb-8">
              <p>{moduleData.body}</p>
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
          </article>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-academy-border">
            <button
              onClick={() => setStage('quiz')}
              className="academy-btn academy-btn-primary flex-1"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Take the quiz ({quiz?.questions.length || 0} questions)
            </button>
          </div>

          {/* Contextual Kersti trigger */}
          <div className="mt-6 p-4 rounded-2xl bg-academy-surface-2 border border-academy-border">
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-academy-secondary)' }}
              >
                <span className="text-white font-black text-sm">K</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-academy-ink mb-1">Have a question about this lesson?</div>
                <p className="text-xs text-academy-ink-2 mb-3">
                  Ask Kersti — scoped to this lesson, cites official Namibian sources.
                </p>
                <button
                  onClick={() => setShowKersti(true)}
                  className="academy-btn academy-btn-secondary text-sm py-2"
                >
                  Ask about this lesson
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contextual Kersti panel */}
        <ContextualKersti
          open={showKersti}
          onClose={() => setShowKersti(false)}
          moduleTitle={moduleData.title}
          moduleSummary={moduleData.summary}
        />
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
