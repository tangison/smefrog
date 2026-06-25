/**
 * Academy — Achievement definitions
 *
 * Achievements unlock automatically as the player progresses.
 * Each achievement has a `check` predicate evaluated against the player's
 * current progress state.
 */
import type { Achievement } from './types'

export const ACHIEVEMENTS: Achievement[] = [
  // ─── First steps ───
  {
    id: 'first-module',
    name: 'First Steps',
    description: 'Complete your first module',
    category: 'completion',
    icon: 'sprout',
    xpReward: 50,
    check: s => s.completedModuleIds.length >= 1,
  },
  {
    id: 'first-quiz',
    name: 'Quiz Rookie',
    description: 'Complete your first quiz',
    category: 'completion',
    icon: 'pencil',
    xpReward: 25,
    check: s => s.completedModuleIds.length >= 1,
  },
  {
    id: 'first-perfect',
    name: 'Perfectionist',
    description: 'Score 100% on a quiz',
    category: 'mastery',
    icon: 'target',
    xpReward: 100,
    check: s => s.perfectQuizzes >= 1,
  },

  // ─── Streaks ───
  {
    id: 'streak-3',
    name: 'Warming Up',
    description: 'Maintain a 3-day streak',
    category: 'streak',
    icon: 'flame',
    xpReward: 75,
    check: s => s.longestStreak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    category: 'streak',
    icon: 'flame',
    xpReward: 200,
    check: s => s.longestStreak >= 7,
  },
  {
    id: 'streak-30',
    name: 'Unstoppable',
    description: 'Maintain a 30-day streak',
    category: 'streak',
    icon: 'fire',
    xpReward: 1000,
    check: s => s.longestStreak >= 30,
  },

  // ─── Completion ───
  {
    id: 'complete-5',
    name: 'Getting Serious',
    description: 'Complete 5 modules',
    category: 'completion',
    icon: 'book',
    xpReward: 100,
    check: s => s.completedModuleIds.length >= 5,
  },
  {
    id: 'complete-10',
    name: 'Scholar',
    description: 'Complete 10 modules',
    category: 'completion',
    icon: 'books',
    xpReward: 250,
    check: s => s.completedModuleIds.length >= 10,
  },
  {
    id: 'complete-25',
    name: 'Half-Centurion',
    description: 'Complete 25 modules',
    category: 'completion',
    icon: 'medal',
    xpReward: 500,
    check: s => s.completedModuleIds.length >= 25,
  },
  {
    id: 'complete-50',
    name: 'Half-Marathon',
    description: 'Complete 50 modules',
    category: 'completion',
    icon: 'trophy',
    xpReward: 1000,
    check: s => s.completedModuleIds.length >= 50,
  },
  {
    id: 'complete-all',
    name: 'Academy Graduate',
    description: 'Complete all 64 modules',
    category: 'completion',
    icon: 'graduation',
    xpReward: 5000,
    check: s => s.completedModuleIds.length >= 64,
  },

  // ─── Mastery ───
  {
    id: 'perfect-5',
    name: 'Sharpshooter',
    description: 'Score 100% on 5 quizzes',
    category: 'mastery',
    icon: 'bullseye',
    xpReward: 300,
    check: s => s.perfectQuizzes >= 5,
  },
  {
    id: 'perfect-20',
    name: 'Sharp Mind',
    description: 'Score 100% on 20 quizzes',
    category: 'mastery',
    icon: 'star',
    xpReward: 800,
    check: s => s.perfectQuizzes >= 20,
  },

  // ─── Exploration ───
  {
    id: 'track-starter',
    name: 'Explorer',
    description: 'Start a module in all 3 tracks',
    category: 'exploration',
    icon: 'compass',
    xpReward: 150,
    check: s => s.tracksStarted >= 3,
  },
  {
    id: 'track-completer',
    name: 'Triple Threat',
    description: 'Complete all modules in a single track',
    category: 'exploration',
    icon: 'map',
    xpReward: 500,
    check: s => s.tracksCompleted >= 1,
  },
  {
    id: 'all-tracks',
    name: 'Polymath',
    description: 'Complete all modules in all 3 tracks',
    category: 'exploration',
    icon: 'globe',
    xpReward: 3000,
    check: s => s.tracksCompleted >= 3,
  },

  // ─── Practice (spaced repetition) ───
  {
    id: 'practice-10',
    name: 'Reviewer',
    description: 'Complete 10 spaced-repetition reviews',
    category: 'mastery',
    icon: 'refresh',
    xpReward: 150,
    check: s => s.practiceReviewsDone >= 10,
  },
  {
    id: 'practice-50',
    name: 'Memory Master',
    description: 'Complete 50 spaced-repetition reviews',
    category: 'mastery',
    icon: 'brain',
    xpReward: 500,
    check: s => s.practiceReviewsDone >= 50,
  },

  // ─── Dedication ───
  {
    id: 'days-7',
    name: 'Regular',
    description: 'Be active on 7 different days',
    category: 'streak',
    icon: 'calendar',
    xpReward: 100,
    check: s => s.daysActive >= 7,
  },
  {
    id: 'days-30',
    name: 'Dedicated',
    description: 'Be active on 30 different days',
    category: 'streak',
    icon: 'calendar-check',
    xpReward: 400,
    check: s => s.daysActive >= 30,
  },

  // ─── Special ───
  {
    id: 'xp-1000',
    name: 'Four Digits',
    description: 'Earn 1,000 total XP',
    category: 'special',
    icon: 'zap',
    xpReward: 0,
    check: s => s.totalXp >= 1000,
  },
  {
    id: 'xp-5000',
    name: 'XP Tycoon',
    description: 'Earn 5,000 total XP',
    category: 'special',
    icon: 'diamond',
    xpReward: 0,
    check: s => s.totalXp >= 5000,
  },
  {
    id: 'daily-goal',
    name: 'Goal Getter',
    description: 'Hit your daily XP goal',
    category: 'special',
    icon: 'check',
    xpReward: 50,
    check: s => s.modulesCompletedToday >= 1 && s.totalXp > 0,
  },
]

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id)
}
