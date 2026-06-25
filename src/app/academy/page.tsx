'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileCheck,
  ShieldCheck,
  Map,
  Clock,
  Zap,
  Trophy,
  TrendingUp,
  BookOpen,
  ChevronRight,
  Sparkles,
  Award,
  Target,
  CheckCircle2,
} from 'lucide-react'
import {
  TRACKS,
  MODULES,
  TOTAL_XP,
  TOTAL_MODULES,
  TOTAL_TRACKS,
  modulesByTrack,
  trackStats,
  type TrackId,
  type Module,
  type Track,
} from '@/lib/academy-data'

/* ─── Local XP Persistence ─────────────────────────────────── */
const STORAGE_KEY = 'smefrog-academy-xp'

function useXpState() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const ids: string[] = JSON.parse(stored)
        setCompleted(new Set(ids))
      }
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = (moduleId: string) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(moduleId)) {
        next.delete(moduleId)
      } else {
        next.add(moduleId)
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const reset = () => {
    setCompleted(new Set())
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }

  const earnedXp = useMemo(
    () =>
      MODULES.filter(m => completed.has(m.id)).reduce(
        (sum, m) => sum + m.xp,
        0,
      ),
    [completed],
  )

  return { completed, toggle, reset, earnedXp }
}

/* ─── Icon Mapper ──────────────────────────────────────────── */
function TrackIcon({ name, className }: { name: Track['icon']; className?: string }) {
  const map = { FileCheck, ShieldCheck, Map }
  const Cmp = map[name]
  return <Cmp className={className} strokeWidth={1.5} />
}

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-4 md:px-6 bg-frog-black overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-frog-green/[0.05] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-frog-dark/[0.18] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
            <Sparkles className="w-3 h-3" />
            SMEfrog Academy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6"
        >
          Free business
          <br />
          <span className="italic text-frog-green">education.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.32, 0.72, 0, 1] }}
          className="text-frog-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-4"
        >
          {TOTAL_MODULES} modules across {TOTAL_TRACKS} tracks. Built for Namibian founders.
          No login required.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.32, 0.72, 0, 1] }}
          className="text-white/40 text-sm md:text-base max-w-2xl leading-relaxed mb-10"
        >
          From name reservation to beneficial ownership, from BIPA filing to bank account
          opening &mdash; the practical knowledge SMEfrog uses every day, distilled into
          short, structured modules. Earn XP as you progress. Installable as a PWA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#tracks"
            className="group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <BookOpen className="w-4 h-4" strokeWidth={1.5} />
            Browse Modules
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-700">
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </a>
          <a
            href="#xp-dashboard"
            className="inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <Trophy className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
            XP Dashboard
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── XP Dashboard ─────────────────────────────────────────── */
function XpDashboard({
  earnedXp,
  completedCount,
}: {
  earnedXp: number
  completedCount: number
}) {
  const pct = Math.round((earnedXp / TOTAL_XP) * 100)
  const level = Math.floor(earnedXp / 200) + 1
  const nextLevelXp = level * 200
  const xpIntoLevel = earnedXp - (level - 1) * 200
  const xpToNext = nextLevelXp - earnedXp
  const levelPct = Math.round((xpIntoLevel / 200) * 100)

  const stats = [
    { label: 'Total XP', value: earnedXp.toLocaleString(), icon: Zap, sub: `${pct}% of all XP` },
    { label: 'Level', value: `${level}`, icon: Award, sub: `${xpToNext} XP to level ${level + 1}` },
    { label: 'Modules Done', value: `${completedCount}/${TOTAL_MODULES}`, icon: CheckCircle2, sub: `${Math.round((completedCount / TOTAL_MODULES) * 100)}% complete` },
    { label: 'Tracks Started', value: `${Math.min(TOTAL_TRACKS, completedCount > 0 ? Math.min(TOTAL_TRACKS, completedCount) : 0)}/${TOTAL_TRACKS}`, icon: Target, sub: 'Pick a track to begin' },
  ]

  return (
    <section id="xp-dashboard" className="py-20 md:py-28 px-4 md:px-6 bg-frog-black relative overflow-hidden border-t border-frog-hairline">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-12"
        >
          <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            XP Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Track your <span className="italic text-frog-green">progress.</span>
          </h2>
          <p className="text-frog-muted text-base md:text-lg mt-4 max-w-xl">
            Every module awards XP. Complete modules to level up. Your progress is saved
            locally in your browser &mdash; no account, no login.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <Icon className="w-5 h-5 text-frog-green mb-4" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                <div className="text-white/30 text-[11px] mt-1">{stat.sub}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Level progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-frog-green/[0.06] via-frog-green/[0.03] to-transparent border border-frog-green/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-frog-green/15 border border-frog-green/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white font-bold">Level {level}</div>
                <div className="text-white/40 text-xs">{earnedXp.toLocaleString()} / {TOTAL_XP.toLocaleString()} total XP</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-frog-green font-bold text-sm">{xpToNext} XP</div>
              <div className="text-white/30 text-[10px] uppercase tracking-wider">to Level {level + 1}</div>
            </div>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${levelPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="h-full bg-gradient-to-r from-frog-green to-frog-green/70 rounded-full"
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] font-bold uppercase tracking-wider text-white/30">
            <span>Level {level}</span>
            <span>{levelPct}%</span>
            <span>Level {level + 1}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Track Card ───────────────────────────────────────────── */
function TrackCard({ track, index }: { track: Track; index: number }) {
  const stats = trackStats(track.id)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-frog-card/60 backdrop-blur-sm group"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(122,201,67,0.6), transparent)' }}
      />
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-frog-green/15 border border-frog-green/25 flex items-center justify-center">
            <TrackIcon name={track.icon} className="w-6 h-6 text-frog-green" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            Track {index + 1} / {TOTAL_TRACKS}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1">{track.name}</h3>
        <p className="text-frog-green text-sm font-bold italic mb-3">{track.tagline}</p>
        <p className="text-white/50 text-sm leading-relaxed mb-6">{track.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-white font-bold text-lg">{stats.moduleCount}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider">Modules</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-frog-green font-bold text-lg">{stats.totalXp}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider">XP</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-white font-bold text-lg">{stats.totalMinutes}m</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider">Reading</div>
          </div>
        </div>

        <a
          href={`#track-${track.id}`}
          className="inline-flex items-center gap-2 text-frog-green text-sm font-bold group-hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          Jump to modules
          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </motion.div>
  )
}

/* ─── Module Card ──────────────────────────────────────────── */
function ModuleCard({
  module,
  index,
  completed,
  onToggle,
}: {
  module: Module
  index: number
  completed: boolean
  onToggle: (id: string) => void
}) {
  const levelColor =
    module.level === 'Beginner'
      ? 'text-frog-green'
      : module.level === 'Intermediate'
      ? 'text-yellow-400'
      : 'text-orange-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.3), ease: [0.32, 0.72, 0, 1] }}
      className={`relative rounded-2xl border p-5 md:p-6 transition-all duration-500 ${
        completed
          ? 'border-frog-green/40 bg-frog-green/[0.06]'
          : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-wider">
              {module.id}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${levelColor}`}>
              {module.level}
            </span>
            <span className="text-white/20 text-[10px] flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" strokeWidth={2} />
              {module.duration}m
            </span>
          </div>
          <h4 className="text-white font-bold text-base md:text-lg mb-2 leading-tight">
            {module.title}
          </h4>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
            {module.summary}
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider">
            <span className="text-frog-green flex items-center gap-1">
              <Zap className="w-3 h-3" strokeWidth={2} />
              {module.xp} XP
            </span>
            {completed && (
              <span className="text-frog-green flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                Done
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => onToggle(module.id)}
          aria-label={completed ? `Mark ${module.title} as not done` : `Mark ${module.title} as done`}
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 min-h-[44px] min-w-[44px] ${
            completed
              ? 'bg-frog-green text-black hover:bg-frog-green/80'
              : 'bg-white/5 text-white/30 hover:bg-white/10 hover:text-white/60 border border-white/10'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </motion.div>
  )
}

/* ─── Track Section (full module list) ─────────────────────── */
function TrackSection({
  track,
  completed,
  onToggle,
}: {
  track: Track
  completed: Set<string>
  onToggle: (id: string) => void
}) {
  const mods = modulesByTrack(track.id)
  const stats = trackStats(track.id)
  const doneCount = mods.filter(m => completed.has(m.id)).length
  const pct = Math.round((doneCount / stats.moduleCount) * 100)

  return (
    <section
      id={`track-${track.id}`}
      key={track.id}
      className="py-20 md:py-24 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-frog-green/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Track header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-frog-green/15 border border-frog-green/30 flex items-center justify-center">
                <TrackIcon name={track.icon} className="w-5 h-5 text-frog-green" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-frog-green">
                {track.name}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {track.tagline}
            </h2>
            <p className="text-frog-muted text-base leading-relaxed">{track.description}</p>
          </div>
          <div className="md:text-right">
            <div className="text-3xl font-bold text-frog-green">{pct}%</div>
            <div className="text-white/40 text-xs font-bold uppercase tracking-wider">
              {doneCount} / {stats.moduleCount} modules done
            </div>
          </div>
        </div>

        {/* Track progress bar */}
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="h-full bg-frog-green rounded-full"
          />
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mods.map((mod, i) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              index={i}
              completed={completed.has(mod.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Bottom CTA ───────────────────────────────────────────── */
function BottomCta({ earnedXp }: { earnedXp: number }) {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-frog-black border-t border-frog-hairline relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/[0.06] to-frog-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <TrendingUp className="w-10 h-10 text-frog-green mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to <span className="italic text-frog-green">register?</span>
          </h2>
          <p className="text-frog-muted text-base md:text-lg mb-8 leading-relaxed">
            You&rsquo;ve learned the theory. Let SMEfrog handle the practice. 100% remote,
            BIPA filing included, from N$1,000.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/264853411522?text=Hi%20SMEfrog%2C%20I%27ve%20been%20going%20through%20the%20Academy%20and%20I%27d%20like%20to%20register%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-black font-bold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] shadow-[0_0_40px_rgba(122,201,67,0.2)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Start Registration
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 min-h-[44px] ring-1 ring-white/10 text-white/70 rounded-full px-8 py-4 text-sm font-bold bg-white/[0.03] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              View Pricing
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
          {earnedXp > 0 && (
            <p className="text-white/30 text-xs mt-6">
              You&rsquo;ve earned <span className="text-frog-green font-bold">{earnedXp} XP</span> so far. Keep going.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */
export default function AcademyPage() {
  const { completed, toggle, earnedXp } = useXpState()
  const completedCount = completed.size

  return (
    <>
      <Hero />
      <XpDashboard earnedXp={earnedXp} completedCount={completedCount} />

      {/* Tracks overview */}
      <section id="tracks" className="py-20 md:py-28 px-4 md:px-6 bg-frog-light">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="mb-12"
          >
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-bold bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              3 Tracks
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-2xl">
              Pick a <span className="italic text-frog-green">track.</span> Or do all three.
            </h2>
            <p className="text-black/50 text-base md:text-lg mt-4 max-w-xl">
              Each track is a self-contained learning path. Start at module 1 of any track
              and work through in order, or jump around &mdash; your XP follows either way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TRACKS.map((track, i) => (
              <TrackCard key={track.id} track={track} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Track sections (full module lists) */}
      {TRACKS.map(track => (
        <TrackSection key={track.id} track={track} completed={completed} onToggle={toggle} />
      ))}

      <BottomCta earnedXp={earnedXp} />
    </>
  )
}
