'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Sparkles, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'Where do I start with registration?',
  'Explain beneficial ownership',
  'What is the difference between CC and PTY LTD?',
  'How often do I file annual returns?',
]

/* ─── Kersti Avatar — geometric mark with a K ─── */
function KerstiAvatar({
  className = 'w-6 h-6',
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="50" cy="50" r="44" fill="currentColor" opacity="0.95" />
      <path
        d="M38 28V72M38 50L58 28M38 50L62 72"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Kersti — the SMEfrog Academy learning assistant.
 * Uses the /api/frogai endpoint with an academy-focused system prompt
 * (selected via the `context: 'academy'` flag).
 *
 * The chat UI adapts to whichever theme is active. Inside the academy it
 * uses the bright Nunito palette; outside (if mounted on the main site)
 * it would use the dark frog theme — but currently it's only mounted
 * inside the academy layout.
 */
export function KerstiChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMessage: Message = { role: 'user', content: text.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/frogai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          context: 'academy',
        }),
      })

      if (!res.ok) throw new Error('Failed to get response')

      const data = await res.json()
      const assistantMessage: Message = { role: 'assistant', content: data.content }
      setMessages(prev => [...prev, assistantMessage])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I couldn't reach the AI just now. Browse the modules below, or try again in a moment.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 academy-safe-bottom"
        style={{
          background: 'var(--color-academy-secondary, #6C5CE7)',
          color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(108, 92, 231, 0.4)',
        }}
        aria-label="Open Kersti chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <KerstiAvatar className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-24 right-6 z-[80] w-[380px] max-w-[calc(100vw-48px)] h-[540px] max-h-[calc(100vh-140px)] rounded-3xl overflow-hidden flex flex-col shadow-2xl academy-safe-bottom"
            style={{
              background: 'var(--color-academy-surface, #FFFFFF)',
              border: '1px solid var(--color-academy-border, #E8E2D0)',
              fontFamily: 'var(--font-academy-body, system-ui)',
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center gap-3 shrink-0"
              style={{
                background: 'var(--color-academy-secondary, #6C5CE7)',
                color: '#FFFFFF',
              }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <KerstiAvatar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-black text-sm flex items-center gap-1.5">
                  Kersti
                  <Sparkles className="w-3 h-3" />
                </h4>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">
                  Academy Learning Assistant
                </p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-academy-bg">
              {messages.length === 0 && (
                <div className="text-center pt-6">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ background: 'var(--color-academy-secondary-soft, #E8E4FB)' }}
                  >
                    <KerstiAvatar
                      className="w-9 h-9"
                      style={{ color: 'var(--color-academy-secondary, #6C5CE7)' }}
                    />
                  </div>
                  <p className="font-bold text-sm mb-1 text-academy-ink">Hi, I&rsquo;m Kersti.</p>
                  <p className="text-academy-muted text-xs mb-5 px-4">
                    I&rsquo;ll help you navigate the 64 modules. Ask me anything about registration,
                    compliance, or Namibian business fundamentals.
                  </p>
                  <div className="space-y-2">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        aria-label={`Ask: ${s}`}
                        className="block w-full text-left p-3 rounded-xl bg-academy-surface border-2 border-academy-border text-academy-ink-2 text-xs font-semibold hover:border-academy-secondary transition-all min-h-[44px]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-academy-surface-2' : ''
                    }`}
                    style={
                      msg.role === 'assistant'
                        ? { background: 'var(--color-academy-secondary-soft, #E8E4FB)' }
                        : {}
                    }
                  >
                    {msg.role === 'user' ? (
                      <User className="w-3.5 h-3.5 text-academy-ink-2" />
                    ) : (
                      <KerstiAvatar
                        className="w-4 h-4"
                        style={{ color: 'var(--color-academy-secondary, #6C5CE7)' }}
                      />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
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
                <div className="flex gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-academy-secondary-soft, #E8E4FB)' }}
                  >
                    <KerstiAvatar
                      className="w-4 h-4"
                      style={{ color: 'var(--color-academy-secondary, #6C5CE7)' }}
                    />
                  </div>
                  <div className="bg-academy-surface border border-academy-border p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: 'var(--color-academy-secondary, #6C5CE7)', animationDelay: '0ms' }}
                      />
                      <span
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: 'var(--color-academy-secondary, #6C5CE7)', animationDelay: '150ms' }}
                      />
                      <span
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: 'var(--color-academy-secondary, #6C5CE7)', animationDelay: '300ms' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-academy-border shrink-0 bg-academy-surface">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  sendMessage(input)
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask Kersti a question..."
                  aria-label="Type your message to Kersti"
                  className="flex-1 bg-academy-bg border-2 border-academy-border rounded-full px-4 py-2.5 text-sm text-academy-ink outline-none focus:border-academy-secondary transition-colors min-h-[44px]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-11 h-11 rounded-full text-white flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-all shrink-0"
                  style={{ background: 'var(--color-academy-secondary, #6C5CE7)' }}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <Link
                href="/academy#tracks"
                className="flex items-center justify-center gap-1.5 mt-2 text-academy-muted text-[10px] font-bold uppercase tracking-wider hover:text-academy-secondary transition-colors"
              >
                <BookOpen className="w-3 h-3" />
                Browse all 64 modules →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
