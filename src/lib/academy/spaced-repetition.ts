/**
 * Spaced Repetition — SM-2 algorithm (Piotr Wozniak, 1987)
 *
 * A simplified, production-grade implementation tuned for short factual
 * recall from the academy's module key facts.
 *
 * Quality scale (0-5):
 *   0-2: wrong answer → reset reps, interval = 1
 *   3:   barely correct → interval = 1, ef decreases slightly
 *   4:   correct, normal effort → standard interval progression
 *   5:   perfect recall → interval grows faster, ef increases
 *
 * EF is clamped to a minimum of 1.3.
 */

import type { SpacedRepetitionState } from './types'

export function createInitialSrState(now: Date = new Date()): SpacedRepetitionState {
  return {
    ef: 2.5,
    interval: 0,
    reps: 0,
    due: now.toISOString(),
    lastReviewed: null,
  }
}

/**
 * Update SR state after a review.
 */
export function updateSrState(
  prev: SpacedRepetitionState,
  quality: 0 | 1 | 2 | 3 | 4 | 5,
  now: Date = new Date(),
): SpacedRepetitionState {
  let { ef, reps, interval } = prev

  if (quality < 3) {
    // Failed recall — reset
    reps = 0
    interval = 1
  } else {
    // Successful recall
    reps += 1
    if (reps === 1) {
      interval = 1
    } else if (reps === 2) {
      interval = 3
    } else {
      interval = Math.round(interval * ef)
    }
  }

  // Update easiness factor
  const q = quality
  ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  if (ef < 1.3) ef = 1.3

  const due = new Date(now)
  due.setDate(due.getDate() + interval)

  return {
    ef,
    interval,
    reps,
    due: due.toISOString(),
    lastReviewed: now.toISOString(),
  }
}

/**
 * Map a quiz performance (correct / total) to an SM-2 quality score.
 */
export function qualityFromScore(correct: number, total: number): 0 | 1 | 2 | 3 | 4 | 5 {
  if (total === 0) return 3
  const ratio = correct / total
  if (ratio === 1) return 5
  if (ratio >= 0.85) return 4
  if (ratio >= 0.7) return 3
  if (ratio >= 0.5) return 2
  if (ratio >= 0.3) return 1
  return 0
}

/**
 * Check if a module is due for review.
 */
export function isDue(sr: SpacedRepetitionState, now: Date = new Date()): boolean {
  if (!sr.due) return true
  return new Date(sr.due).getTime() <= now.getTime()
}

/**
 * Get all modules due for review, sorted by due date (oldest first).
 */
export function getDueModules<T extends { sr: SpacedRepetitionState }>(
  items: T[],
  now: Date = new Date(),
): T[] {
  return items
    .filter(item => isDue(item.sr, now))
    .sort((a, b) => {
      const aDue = a.sr.due ? new Date(a.sr.due).getTime() : 0
      const bDue = b.sr.due ? new Date(b.sr.due).getTime() : 0
      return aDue - bDue
    })
}

/**
 * Human-readable "next review" label.
 */
export function formatDueLabel(sr: SpacedRepetitionState, now: Date = new Date()): string {
  if (!sr.due) return 'Not scheduled'
  const due = new Date(sr.due)
  const diffMs = due.getTime() - now.getTime()
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays <= 0) return 'Due now'
  if (diffDays === 1) return 'Due tomorrow'
  if (diffDays < 7) return `Due in ${diffDays} days`
  if (diffDays < 30) return `Due in ${Math.round(diffDays / 7)} weeks`
  return `Due in ${Math.round(diffDays / 30)} months`
}
