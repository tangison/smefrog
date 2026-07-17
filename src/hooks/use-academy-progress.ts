'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  MODULES,
  TRACKS,
  modulesByTrack,
} from '@/lib/academy/modules'
import {
  ACHIEVEMENTS,
} from '@/lib/academy/achievements'
import {
  createInitialSrState,
  updateSrState,
  qualityFromScore,
  isDue,
} from '@/lib/academy/spaced-repetition'
import type {
  PlayerProgress,
  ModuleProgress,
  AchievementCheckInput,
  Achievement,
} from '@/lib/academy/types'

const STORAGE_KEY = 'smefrog-academy-progress-v1'
const MAX_HEARTS = 5
const HEART_REGEN_HOURS = 4
const DAILY_GOAL_XP = 100

/* ─── Date helpers ────────────────────────────────────────── */
function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10) // YYYY-MM-DD
}

function hoursBetween(a: Date, b: Date): number {
  return (b.getTime() - a.getTime()) / (1000 * 60 * 60)
}

/* ─── Default state ───────────────────────────────────────── */
function createDefaultProgress(): PlayerProgress {
  const now = new Date().toISOString()
  return {
    version: 1,
    moduleProgress: {},
    totalXp: 0,
    gems: 0,
    hearts: MAX_HEARTS,
    maxHearts: MAX_HEARTS,
    lastHeartRegen: now,
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    dailyGoalXp: DAILY_GOAL_XP,
    dailyXpEarned: {},
    unlockedAchievements: [],
    daysActive: 0,
    practiceReviewsDone: 0,
    createdAt: now,
    updatedAt: now,
  }
}

function getModuleProgress(
  state: PlayerProgress,
  moduleId: string,
): ModuleProgress {
  if (state.moduleProgress[moduleId]) return state.moduleProgress[moduleId]
  return {
    moduleId,
    status: 'not-started',
    attempts: 0,
    bestScore: 0,
    lastScore: null,
    completedAt: null,
    sr: createInitialSrState(),
  }
}

/* ─── Heart regen ─────────────────────────────────────────── */
function regenHearts(state: PlayerProgress, now: Date = new Date()): PlayerProgress {
  if (state.hearts >= state.maxHearts) {
    return { ...state, lastHeartRegen: now.toISOString() }
  }
  const last = new Date(state.lastHeartRegen || now.toISOString())
  const elapsed = hoursBetween(last, now)
  const heartsToAdd = Math.floor(elapsed / HEART_REGEN_HOURS)
  if (heartsToAdd <= 0) return state
  const newHearts = Math.min(state.maxHearts, state.hearts + heartsToAdd)
  // Advance lastHeartRegen by the consumed hours
  const consumedHours = heartsToAdd * HEART_REGEN_HOURS
  const newRegenTime = new Date(last.getTime() + consumedHours * 60 * 60 * 1000)
  return {
    ...state,
    hearts: newHearts,
    lastHeartRegen: newRegenTime.toISOString(),
  }
}

/* ─── Streak update ───────────────────────────────────────── */
function updateStreak(state: PlayerProgress, now: Date = new Date()): PlayerProgress {
  const today = todayKey(now)
  if (state.lastActiveDate === today) return state

  const yesterday = todayKey(new Date(now.getTime() - 24 * 60 * 60 * 1000))
  let newStreak: number
  if (state.lastActiveDate === yesterday) {
    newStreak = state.currentStreak + 1
  } else {
    // Streak broken (or first ever activity)
    newStreak = 1
  }

  return {
    ...state,
    currentStreak: newStreak,
    longestStreak: Math.max(state.longestStreak, newStreak),
    lastActiveDate: today,
    daysActive: state.daysActive + 1,
  }
}

/* ─── Achievement checking ────────────────────────────────── */
function buildAchievementInput(state: PlayerProgress): AchievementCheckInput {
  const completedModuleIds = Object.keys(state.moduleProgress).filter(
    id => state.moduleProgress[id].status === 'completed',
  )

  // Count tracks started (any module with attempts > 0)
  const startedTrackIds = new Set<string>()
  for (const id of Object.keys(state.moduleProgress)) {
    const mp = state.moduleProgress[id]
    if (mp.attempts > 0 || mp.status === 'completed') {
      const mod = MODULES.find(m => m.id === id)
      if (mod) startedTrackIds.add(mod.trackId)
    }
  }

  // Count tracks completed (all modules in track done)
  let tracksCompleted = 0
  for (const track of TRACKS) {
    const trackMods = modulesByTrack(track.id)
    const allDone = trackMods.every(m => completedModuleIds.includes(m.id))
    if (allDone && trackMods.length > 0) tracksCompleted++
  }

  // Perfect quizzes
  const perfectQuizzes = Object.values(state.moduleProgress).filter(
    mp => mp.bestScore === 1,
  ).length

  // Modules completed today
  const today = todayKey()
  const modulesCompletedToday = Object.values(state.moduleProgress).filter(
    mp => mp.completedAt && mp.completedAt.slice(0, 10) === today,
  ).length

  return {
    completedModuleIds,
    totalXp: state.totalXp,
    currentStreak: state.currentStreak,
    longestStreak: state.longestStreak,
    perfectQuizzes,
    modulesCompletedToday,
    tracksStarted: startedTrackIds.size,
    tracksCompleted,
    practiceReviewsDone: state.practiceReviewsDone,
    daysActive: state.daysActive,
  }
}

function checkNewAchievements(state: PlayerProgress): {
  state: PlayerProgress
  newlyUnlocked: Achievement[]
} {
  const input = buildAchievementInput(state)
  const newlyUnlocked: Achievement[] = []
  const newUnlockedIds = [...state.unlockedAchievements]

  for (const ach of ACHIEVEMENTS) {
    if (newUnlockedIds.includes(ach.id)) continue
    if (ach.check(input)) {
      newUnlockedIds.push(ach.id)
      newlyUnlocked.push(ach)
    }
  }

  // Add XP from newly unlocked achievements
  const bonusXp = newlyUnlocked.reduce((sum, a) => sum + a.xpReward, 0)
  const today = todayKey()

  return {
    state: {
      ...state,
      unlockedAchievements: newUnlockedIds,
      totalXp: state.totalXp + bonusXp,
      dailyXpEarned: {
        ...state.dailyXpEarned,
        [today]: (state.dailyXpEarned[today] || 0) + bonusXp,
      },
    },
    newlyUnlocked,
  }
}

/* ─── Lazy initializer — reads localStorage once on first render ─── */
function loadInitialState(): PlayerProgress {
  if (typeof window === 'undefined') return createDefaultProgress()
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as PlayerProgress
      return regenHearts(parsed)
    }
  } catch (e) {
    console.warn('Failed to load academy progress:', e)
  }
  return createDefaultProgress()
}

/* ─── Hook ────────────────────────────────────────────────── */
export function useAcademyProgress() {
  const [state, setState] = useState<PlayerProgress>(loadInitialState)
  const [loaded, setLoaded] = useState(true) // always loaded now — lazy init
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([])

  // SSR safety: on the server we used the default state; on the client the
  // lazy initializer runs on hydration. No effect needed.

  // Persist to localStorage on state change
  useEffect(() => {
    if (!loaded) return
    try {
      const toStore = { ...state, updatedAt: new Date().toISOString() }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
    } catch (e) {
      console.warn('Failed to persist academy progress:', e)
    }
  }, [state, loaded])

  // Dismiss achievement toast
  const dismissAchievements = useCallback(() => {
    setNewAchievements([])
  }, [])

  /* ─── Apply state + run streak/achievement logic ─── */
  const applyState = useCallback(
    (updater: (prev: PlayerProgress) => PlayerProgress) => {
      setState(prev => {
        const today = new Date()
        // Update streak first
        const withStreak = updateStreak(prev, today)
        // Apply the user's updater
        const next = updater(withStreak)
        // Check achievements
        const { state: withAch, newlyUnlocked } = checkNewAchievements(next)
        if (newlyUnlocked.length > 0) {
          setNewAchievements(prevNew => [...prevNew, ...newlyUnlocked])
        }
        return withAch
      })
    },
    [],
  )

  /* ─── Actions ─── */

  /** Record a quiz attempt. Returns whether the module was newly completed. */
  const recordQuizAttempt = useCallback(
    (moduleId: string, correct: number, total: number): {
      passed: boolean
      newlyCompleted: boolean
      lostHeart: boolean
    } => {
      const score = total > 0 ? correct / total : 0
      const passed = score >= 0.7 // pass threshold

      let lostHeart = false
      let newlyCompleted = false

      applyState(prev => {
        const prevMp = getModuleProgress(prev, moduleId)
        const wasCompleted = prevMp.status === 'completed'

        // Lose a heart on wrong answers
        const wrongAnswers = total - correct
        const newHearts = Math.max(0, prev.hearts - wrongAnswers)
        if (wrongAnswers > 0) lostHeart = true

        // Update SR state
        const quality = qualityFromScore(correct, total)
        const newSr = updateSrState(prevMp.sr, quality)

        // Update module progress
        const newMp: ModuleProgress = {
          ...prevMp,
          attempts: prevMp.attempts + 1,
          bestScore: Math.max(prevMp.bestScore, score),
          lastScore: score,
          status: passed ? 'completed' : prevMp.status === 'completed' ? 'completed' : 'in-progress',
          completedAt: passed && !wasCompleted ? new Date().toISOString() : prevMp.completedAt,
          sr: newSr,
        }

        newlyCompleted = passed && !wasCompleted

        // Award XP only for newly completed modules
        let xpAwarded = 0
        let gemsAwarded = 0
        const today = todayKey()
        const newDailyXp = { ...prev.dailyXpEarned }

        if (newlyCompleted) {
          const mod = MODULES.find(m => m.id === moduleId)
          if (mod) {
            xpAwarded = mod.xp
            gemsAwarded = 5 // bonus gems for completing
          }
        }

        // Bonus XP for perfect score on first attempt
        if (score === 1 && prevMp.attempts === 0) {
          xpAwarded += 25
          gemsAwarded += 2
        }

        if (xpAwarded > 0) {
          newDailyXp[today] = (newDailyXp[today] || 0) + xpAwarded
        }

        return {
          ...prev,
          moduleProgress: {
            ...prev.moduleProgress,
            [moduleId]: newMp,
          },
          hearts: newHearts,
          totalXp: prev.totalXp + xpAwarded,
          gems: prev.gems + gemsAwarded,
          dailyXpEarned: newDailyXp,
        }
      })

      return { passed, newlyCompleted, lostHeart }
    },
    [applyState],
  )

  /** Record a single spaced-repetition review (from practice mode). */
  const recordPracticeReview = useCallback(
    (moduleId: string, quality: 0 | 1 | 2 | 3 | 4 | 5): void => {
      applyState(prev => {
        const prevMp = getModuleProgress(prev, moduleId)
        const newSr = updateSrState(prevMp.sr, quality)
        const newMp: ModuleProgress = {
          ...prevMp,
          sr: newSr,
        }

        // Small XP for practice (10 XP per review)
        const xp = 10
        const today = todayKey()

        return {
          ...prev,
          moduleProgress: {
            ...prev.moduleProgress,
            [moduleId]: newMp,
          },
          totalXp: prev.totalXp + xp,
          gems: prev.gems + 1, // 1 gem per review
          practiceReviewsDone: prev.practiceReviewsDone + 1,
          dailyXpEarned: {
            ...prev.dailyXpEarned,
            [today]: (prev.dailyXpEarned[today] || 0) + xp,
          },
        }
      })
    },
    [applyState],
  )

  /** Spend gems to refill hearts (cost: 50 gems for full refill). */
  const refillHearts = useCallback((): boolean => {
    let success = false
    applyState(prev => {
      if (prev.gems < 50 || prev.hearts >= prev.maxHearts) return prev
      success = true
      return {
        ...prev,
        gems: prev.gems - 50,
        hearts: prev.maxHearts,
        lastHeartRegen: new Date().toISOString(),
      }
    })
    return success
  }, [applyState])

  /** Reset all progress. */
  const resetProgress = useCallback((): void => {
    setState(createDefaultProgress())
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  /* ─── Derived data ─── */
  const completedModuleIds = useMemo(
    () =>
      Object.keys(state.moduleProgress).filter(
        id => state.moduleProgress[id].status === 'completed',
      ),
    [state.moduleProgress],
  )

  const todayXp = state.dailyXpEarned[todayKey()] || 0
  const dailyGoalMet = todayXp >= state.dailyGoalXp

  const dueModules = useMemo(() => {
    return MODULES.filter(m => {
      const mp = state.moduleProgress[m.id]
      if (!mp) return false
      return mp.status === 'completed' && isDue(mp.sr)
    })
  }, [state.moduleProgress])

  const level = Math.floor(state.totalXp / 200) + 1
  const xpIntoLevel = state.totalXp - (level - 1) * 200
  const xpToNextLevel = level * 200 - state.totalXp
  const levelProgressPct = Math.round((xpIntoLevel / 200) * 100)

  return {
    // State
    state,
    loaded,
    newAchievements,
    dismissAchievements,

    // Derived
    completedModuleIds,
    completedCount: completedModuleIds.length,
    totalModules: MODULES.length,
    todayXp,
    dailyGoalMet,
    dueModules,
    level,
    xpIntoLevel,
    xpToNextLevel,
    levelProgressPct,
    maxHearts: MAX_HEARTS,

    // Actions
    recordQuizAttempt,
    recordPracticeReview,
    refillHearts,
    resetProgress,
    getModuleProgress: (moduleId: string) => getModuleProgress(state, moduleId),
  }
}
