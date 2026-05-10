'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  "How much is a CC?",
  "Can I register remotely?",
  "Which package should I choose?",
  "How long does it take?",
]

export function FrogAIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

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
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!res.ok) throw new Error('Failed to get response')

      const data = await res.json()
      const assistantMessage: Message = { role: 'assistant', content: data.content }
      setMessages(prev => [...prev, assistantMessage])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please try again or contact us on WhatsApp." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Orb Trigger */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-[#7AC943] text-black flex items-center justify-center shadow-[0_0_30px_rgba(122,201,67,0.3)] hover:shadow-[0_0_50px_rgba(122,201,67,0.4)] hover:scale-110 transition-all duration-300 group"
        aria-label="Open FrogAI Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-24 right-6 z-[90] w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-140px)] rounded-[28px] overflow-hidden flex flex-col border border-white/10"
            style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(40px)' }}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#7AC943] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm">FrogAI</h4>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Registration Assistant</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-[#7AC943] animate-pulse" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto frog-chat-scroll p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center pt-8">
                  <div className="w-16 h-16 rounded-full bg-[#7AC943]/10 mx-auto mb-4 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-[#7AC943]" />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Need help registering?</p>
                  <p className="text-white/30 text-xs mb-6">Ask FrogAI anything.</p>
                  <div className="space-y-2">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="block w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 text-white/50 text-xs font-medium hover:bg-white/10 hover:text-white/70 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-white/10' : 'bg-[#7AC943]/20'
                  }`}>
                    {msg.role === 'user' ? (
                      <User className="w-3.5 h-3.5 text-white/50" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-[#7AC943]" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#7AC943] text-black font-semibold'
                      : 'bg-white/5 text-white/80'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#7AC943]/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-[#7AC943]" />
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#7AC943]/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#7AC943]/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#7AC943]/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input) }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about registration..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white outline-none focus:border-[#7AC943]/50 transition-colors"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 rounded-full bg-[#7AC943] text-black flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-all shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
