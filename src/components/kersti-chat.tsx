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
function KerstiAvatar({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="44" fill="currentColor" opacity="0.92" />
      <path
        d="M38 28V72M38 50L58 28M38 50L62 72"
        stroke="#0F1412"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Kersti — the SMEfrog Academy learning assistant.
 * Uses the same /api/frogai endpoint with an academy-focused system prompt
 * that is set client-side via a `system` hint in the first message.
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
          // hint to the API to use academy context; route.ts already has SMEfrog KB
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
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full bg-frog-green text-black flex items-center justify-center shadow-[0_0_30px_rgba(122,201,67,0.35)] hover:shadow-[0_0_50px_rgba(122,201,67,0.45)] hover:scale-110 transition-all duration-300"
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
              <KerstiAvatar className="w-7 h-7 text-frog-green" />
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
            className="fixed bottom-24 right-6 z-[80] w-[380px] max-w-[calc(100vw-48px)] h-[540px] max-h-[calc(100vh-140px)] rounded-[28px] overflow-hidden flex flex-col border border-white/10 bg-frog-card/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-frog-green flex items-center justify-center">
                <KerstiAvatar className="w-6 h-6 text-frog-green" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm flex items-center gap-1.5">
                  Kersti
                  <Sparkles className="w-3 h-3 text-frog-green" />
                </h4>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                  Academy Learning Assistant
                </p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-frog-green animate-pulse" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto frog-chat-scroll p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-frog-green/10 mx-auto mb-4 flex items-center justify-center">
                    <KerstiAvatar className="w-9 h-9 text-frog-green" />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Hi, I&rsquo;m Kersti.</p>
                  <p className="text-white/30 text-xs mb-6 px-4">
                    I&rsquo;ll help you navigate the 64 modules. Ask me anything about
                    registration, compliance, or Namibian business fundamentals.
                  </p>
                  <div className="space-y-2">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        aria-label={`Ask: ${s}`}
                        className="block w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 text-white/50 text-xs font-medium hover:bg-white/10 hover:text-white/70 transition-all min-h-[44px]"
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
                      msg.role === 'user' ? 'bg-white/10' : 'bg-frog-green/20'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-3.5 h-3.5 text-white/50" />
                    ) : (
                      <KerstiAvatar className="w-4 h-4 text-frog-green" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-frog-green text-black font-semibold'
                        : 'bg-white/5 text-white/80'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-frog-green/20 flex items-center justify-center shrink-0">
                    <KerstiAvatar className="w-4 h-4 text-frog-green" />
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-frog-green/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-frog-green/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-frog-green/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 shrink-0">
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
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white outline-none focus:border-frog-green/50 transition-colors min-h-[44px]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-11 h-11 rounded-full bg-frog-green text-black flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-all shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <Link
                href="#tracks"
                className="flex items-center justify-center gap-1.5 mt-2 text-white/25 text-[10px] font-bold uppercase tracking-wider hover:text-frog-green transition-colors"
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
