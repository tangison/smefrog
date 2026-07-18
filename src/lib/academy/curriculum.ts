/**
 * SMEfrog Academy — Curriculum structure
 *
 * Reorganises the 64 existing modules into 6 learning paths with progressive
 * disclosure. The dashboard shows paths, not the full catalogue.
 *
 * Each path has:
 *   - An id, name, tagline, description, icon, and accent color
 *   - A list of module IDs (referencing modules.ts) grouped into chapters
 *   - A "flagship" flag (the recommended starting path)
 *
 * The module content itself stays in modules.ts — this file just defines
 * the grouping and the recommended sequence.
 */

import type { TrackId } from './types'

export interface LearningPath {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  icon: 'Rocket' | 'Wallet' | 'ShieldCheck' | 'Megaphone' | 'Users' | 'TrendingUp'
  accent: string // CSS color value
  flagship: boolean
  estimatedHours: number
  practicalOutcome: string
  chapters: {
    title: string
    description: string
    moduleIds: string[] // references MODULES by id
  }[]
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'start-your-business',
    slug: 'start-your-business',
    name: 'Start Your Business',
    tagline: 'From idea to registered entity',
    description:
      'Choose a structure, reserve a name, file with BIPA, understand ownership, set up tax and banking, and identify licences. Ends with a personalised registration plan.',
    icon: 'Rocket',
    accent: 'var(--color-academy-primary)',
    flagship: true,
    estimatedHours: 4,
    practicalOutcome: 'A personalised Namibian business-registration plan and document checklist',
    chapters: [
      {
        title: 'Choose your legal structure',
        description: 'CC, PTY LTD, or sole prop — which is right for you?',
        moduleIds: ['m1', 'm10'],
      },
      {
        title: 'Name and ownership',
        description: 'Reserve a BIPA-compliant name and prepare founder documents',
        moduleIds: ['m2', 'm3', 'm4', 'm5'],
      },
      {
        title: 'Register with BIPA',
        description: 'Navigate the BIPA filing process end-to-end',
        moduleIds: ['m6', 'm21'],
      },
      {
        title: 'Ownership and beneficial ownership',
        description: 'Understand BO declaration triggers and filing',
        moduleIds: ['m7'],
      },
      {
        title: 'Tax, banking and initial records',
        description: 'Register with NAMRA, open a bank account, set up basic books',
        moduleIds: ['m8', 'm9', 'm14', 'm15', 'm44', 'm45', 'm46', 'm47', 'm50'],
      },
      {
        title: 'Licences and permits',
        description: 'Identify sector-specific licences and municipal trade licence',
        moduleIds: ['m12', 'm13'],
      },
      {
        title: 'Capstone: Your registration plan',
        description: 'Produce a complete, personalised registration plan',
        moduleIds: ['m64'],
      },
    ],
  },
  {
    id: 'money-tax-bookkeeping',
    slug: 'money-tax-bookkeeping',
    name: 'Money, Tax and Bookkeeping',
    tagline: 'Keep the books, pay the right tax',
    description:
      'Business banking, invoices, pricing, cash flow, PAYE, VAT, and tax calendars. Ends with a basic financial system and compliance calendar.',
    icon: 'Wallet',
    accent: 'var(--color-academy-success)',
    flagship: false,
    estimatedHours: 3,
    practicalOutcome: 'A basic financial system and compliance calendar',
    chapters: [
      {
        title: 'Business banking and payments',
        description: 'Choose a bank, set up payment methods',
        moduleIds: ['m46', 'm47'],
      },
      {
        title: 'Invoices and record keeping',
        description: 'Keep proper records from day one',
        moduleIds: ['m43'],
      },
      {
        title: 'Pricing and costing',
        description: 'Price for the Namibian market',
        moduleIds: ['m51'],
      },
      {
        title: 'Cash-flow management',
        description: 'Don\'t run out of money',
        moduleIds: [],
      },
      {
        title: 'PAYE and employee obligations',
        description: 'Understand employer tax obligations',
        moduleIds: ['m28', 'm52'],
      },
      {
        title: 'VAT registration and administration',
        description: 'When and how to register for VAT',
        moduleIds: ['m15', 'm29'],
      },
      {
        title: 'Tax calendars and returns',
        description: 'Stay on top of filing deadlines',
        moduleIds: ['m27', 'm37', 'm42'],
      },
    ],
  },
  {
    id: 'compliance-protection',
    slug: 'compliance-protection',
    name: 'Compliance and Protection',
    tagline: 'Stay legal, stay penalty-free',
    description:
      'Annual returns, beneficial ownership, contracts, data protection, IP, and risk. Ends with a compliance and risk checklist.',
    icon: 'ShieldCheck',
    accent: 'var(--color-academy-secondary)',
    flagship: false,
    estimatedHours: 3,
    practicalOutcome: 'A compliance and risk checklist',
    chapters: [
      {
        title: 'Annual returns',
        description: 'The filing that keeps your entity active',
        moduleIds: ['m22', 'm26', 'm43'],
      },
      {
        title: 'Beneficial-ownership updates',
        description: 'When and how to update BO',
        moduleIds: ['m23'],
      },
      {
        title: 'Contracts and governance',
        description: 'Resolutions, registers, and agreements',
        moduleIds: ['m24', 'm26'],
      },
      {
        title: 'Data protection and risk',
        description: 'Namibian Data Protection Bill and FIC obligations',
        moduleIds: ['m34', 'm35'],
      },
      {
        title: 'Intellectual property',
        description: 'Trade marks, copyright, and patents',
        moduleIds: ['m62', 'm63'],
      },
      {
        title: 'Risk, insurance and insolvency',
        description: 'Plan for the worst',
        moduleIds: ['m40'],
      },
    ],
  },
  {
    id: 'marketing-sales',
    slug: 'marketing-sales',
    name: 'Marketing and Sales',
    tagline: 'Find and keep customers',
    description:
      'Customer research, brand positioning, digital presence, sales processes, and retention. Ends with a practical marketing and sales plan.',
    icon: 'Megaphone',
    accent: 'var(--color-academy-warning)',
    flagship: false,
    estimatedHours: 3,
    practicalOutcome: 'A practical marketing and sales plan',
    chapters: [
      {
        title: 'Customer research and positioning',
        description: 'Know who you serve',
        moduleIds: [],
      },
      {
        title: 'Digital presence',
        description: 'Website, social, and e-commerce',
        moduleIds: ['m61'],
      },
      {
        title: 'Pricing and proposals',
        description: 'Price right, quote right',
        moduleIds: ['m51'],
      },
      {
        title: 'Sales and retention',
        description: 'Close and keep customers',
        moduleIds: [],
      },
    ],
  },
  {
    id: 'operations-employment',
    slug: 'operations-employment',
    name: 'Operations and Employment',
    tagline: 'Run and grow the team',
    description:
      'Processes, suppliers, hiring, employment obligations, payroll, and health & safety. Ends with an operating checklist and first-hire plan.',
    icon: 'Users',
    accent: 'var(--color-academy-info)',
    flagship: false,
    estimatedHours: 3,
    practicalOutcome: 'An operating checklist and first-hire plan',
    chapters: [
      {
        title: 'Hiring employees',
        description: 'Your first hire',
        moduleIds: ['m52', 'm14'],
      },
      {
        title: 'Employment obligations',
        description: 'Labour Act, affirmative action, SSC',
        moduleIds: ['m28', 'm32', 'm33'],
      },
      {
        title: 'Firing and exit',
        description: 'Fair dismissal and severance',
        moduleIds: ['m53'],
      },
      {
        title: 'Premises and logistics',
        description: 'Leasing, importing, exporting',
        moduleIds: ['m54', 'm55', 'm56'],
      },
    ],
  },
  {
    id: 'funding-growth',
    slug: 'funding-growth',
    name: 'Funding and Growth',
    tagline: 'Raise, scale, and partner',
    description:
      'Funding readiness, grants, projections, business plans, tender readiness, and scaling. Ends with a funding-readiness pack and growth roadmap.',
    icon: 'TrendingUp',
    accent: 'var(--color-academy-danger)',
    flagship: false,
    estimatedHours: 3,
    practicalOutcome: 'A funding-readiness pack and growth roadmap',
    chapters: [
      {
        title: 'Funding landscape',
        description: 'Grants, loans, and equity in Namibia',
        moduleIds: ['m48', 'm49'],
      },
      {
        title: 'Tender readiness',
        description: 'Qualify for government tenders',
        moduleIds: ['m41'],
      },
      {
        title: 'Export and expansion',
        description: 'SACU, AfCFTA, and cross-border',
        moduleIds: ['m56', 'm57'],
      },
    ],
  },
]

export function getPathBySlug(slug: string): LearningPath | undefined {
  return LEARNING_PATHS.find(p => p.slug === slug)
}

export function getFlagshipPath(): LearningPath {
  return LEARNING_PATHS.find(p => p.flagship) || LEARNING_PATHS[0]
}

export function getPathModuleIds(path: LearningPath): string[] {
  return path.chapters.flatMap(ch => ch.moduleIds)
}

export function getPathProgress(
  path: LearningPath,
  completedModuleIds: string[],
): { completed: number; total: number; pct: number } {
  const allModuleIds = getPathModuleIds(path)
  const total = allModuleIds.length
  const completed = allModuleIds.filter(id => completedModuleIds.includes(id)).length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  return { completed, total, pct }
}
