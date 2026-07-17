/**
 * Academy — shared types
 */

export type TrackId = 'registration' | 'compliance' | 'fundamentals'

export type ModuleLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Module {
  id: string
  slug: string
  trackId: TrackId
  title: string
  summary: string
  duration: number // minutes
  xp: number
  level: ModuleLevel
  outcomes: string[]
  body: string
  /** Key facts the learner must remember — used by the quiz generator and the spaced-repetition practice mode. */
  keyFacts: string[]
}

export interface Track {
  id: TrackId
  name: string
  tagline: string
  description: string
  color: string
  accent: string
  icon: 'FileCheck' | 'ShieldCheck' | 'Map'
}

/* ─── Quiz ────────────────────────────────────────────────── */
export type QuestionType = 'multiple-choice' | 'true-false'

export interface QuizQuestion {
  id: string
  type: QuestionType
  prompt: string
  options: string[] // for true-false: ['True', 'False']
  correctIndex: number
  explanation: string
}

export interface Quiz {
  moduleId: string
  questions: QuizQuestion[]
  /** Pass threshold (fraction). 0.7 = need 70% to complete the module. */
  passThreshold: number
}

/* ─── Achievements ────────────────────────────────────────── */
export type AchievementCategory =
  | 'streak'
  | 'completion'
  | 'mastery'
  | 'speed'
  | 'exploration'
  | 'special'

export interface Achievement {
  id: string
  name: string
  description: string
  category: AchievementCategory
  /** SVG icon key (rendered by <AchievementIcon />) */
  icon: string
  /** XP reward for unlocking */
  xpReward: number
  /** Condition: evaluated against the player's progress state */
  check: (state: AchievementCheckInput) => boolean
}

export interface AchievementCheckInput {
  completedModuleIds: string[]
  totalXp: number
  currentStreak: number
  longestStreak: number
  perfectQuizzes: number
  modulesCompletedToday: number
  tracksStarted: number
  tracksCompleted: number
  practiceReviewsDone: number
  daysActive: number
}

/* ─── Player progress (persisted) ─────────────────────────── */
export interface ModuleProgress {
  moduleId: string
  status: 'not-started' | 'in-progress' | 'completed'
  attempts: number
  bestScore: number // 0-1
  lastScore: number | null
  completedAt: string | null // ISO date
  /** Spaced-repetition state (SM-2) */
  sr: SpacedRepetitionState
}

export interface SpacedRepetitionState {
  /** Easiness factor (>= 1.3) */
  ef: number
  /** Interval in days */
  interval: number
  /** Repetition count */
  reps: number
  /** Next review date (ISO) */
  due: string | null
  /** Last review date (ISO) */
  lastReviewed: string | null
}

export interface PlayerProgress {
  version: number
  moduleProgress: Record<string, ModuleProgress>
  totalXp: number
  gems: number
  hearts: number
  maxHearts: number
  lastHeartRegen: string | null // ISO
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null // YYYY-MM-DD
  dailyGoalXp: number
  dailyXpEarned: Record<string, number> // YYYY-MM-DD -> xp
  unlockedAchievements: string[]
  daysActive: number
  practiceReviewsDone: number
  createdAt: string
  updatedAt: string
}
