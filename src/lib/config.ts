/**
 * SMEfrog — Centralised configuration
 * Single source of truth for all business data, URLs, and pricing.
 * Eliminates 50+ hardcoded duplications across the codebase.
 */

// ─── Contact / WhatsApp ────────────────────────────────────
export const WHATSAPP_MAIN = 'https://wa.me/264853411522'
export const PHONE_MAIN = '+264 85 341 1522'
export const PHONE_MAIN_TEL = 'tel:+264853411522'

// ─── Social ────────────────────────────────────────────────
export const FACEBOOK_URL = 'https://www.facebook.com/SMEfrogNamibia'
export const INSTAGRAM_URL = 'https://www.instagram.com/smefrog?igsh=MWFhYnV1NTZvYXl6ag=='
export const GITHUB_URL = 'https://github.com/tangison'
export const GEMSWEB_URL = 'https://gemsweb.xyz'

// ─── Site ──────────────────────────────────────────────────
export const SITE_URL = 'https://smefrog.tangison.com'

// ─── Pricing ───────────────────────────────────────────────
export const PRICING = {
  basic: { tier: 'BASIC', price: 'N$800', sub: 'CC Registration', features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'], btn: 'Get Basic' },
  advanced: { tier: 'ADVANCED', price: 'N$1,200', sub: 'CC Registration', features: ['Basic + Company Profile', 'Domain Registration', 'BO Filing'], featured: true, btn: 'Get Advanced' },
  full: { tier: 'FULL', price: 'N$1,750', sub: 'CC Registration', features: ['Advanced + Annual Return Filing', 'Compliance Check', 'Governance Template'], btn: 'Get Full' },
} as const

export const pricingCards = Object.values(PRICING)

// ─── Trust items ───────────────────────────────────────────
export const TRUST_ITEMS = ['100% Remote', '7–10 Days', 'Bank-Ready Docs', 'BIPA Included', '2X Cheaper'] as const

// ─── How It Works steps ───────────────────────────────────
export const STEPS = [
  { n: '01', title: 'Pick a Package', desc: 'Choose what fits.' },
  { n: '02', title: 'Send Your Details', desc: 'We collect everything remotely.' },
  { n: '03', title: 'We File It All', desc: 'Compliance, forms, submissions.' },
  { n: '04', title: 'Get Your Documents', desc: 'Delivered digitally. Ready for business.' },
] as const

// ─── Testimonials ──────────────────────────────────────────
export const TESTIMONIALS = [
  { name: 'Maria K.', business: 'MK Cleaners CC', quote: 'Registered my CC in under 2 weeks. No office visits. No drama.' },
  { name: 'James T.', business: 'Tjiriange Logistics', quote: 'Everything happened over WhatsApp. I was skeptical, but it worked.' },
  { name: 'Lina N.', business: 'Oshili Digital', quote: '2X cheaper than the lawyer I was going to use. Same documents.' },
] as const

// ─── FAQ ───────────────────────────────────────────────────
export const FAQ_ITEMS = [
  { q: 'How much does a CC cost?', a: 'N$800 Basic. N$1,200 Advanced. N$1,750 Full. All include BIPA filing.' },
  { q: 'Can I register remotely?', a: 'Yes. WhatsApp and email. No office visits.' },
  { q: 'How long does it take?', a: '7–10 working days, depending on BIPA.' },
  { q: 'Can foreigners register?', a: 'Yes, with a valid work permit or residency.' },
  { q: 'What do I need?', a: 'ID copy, proof of address, proposed business name(s). We handle the rest.' },
] as const

// ─── Prefilled WhatsApp Messages ──────────────────────────
export const WA_MESSAGES = {
  home: "Hi SMEfrog, I'd like to get started with registering my business.",
  registration: "Hi SMEfrog, I'm interested in registering a business. Can you help me?",
  compliance: 'Hi SMEfrog, I need help with compliance for my business.',
  documents: 'Hi SMEfrog, I need help with business documents. What do you offer?',
  pricing: "Hi SMEfrog, I'd like to discuss pricing for your services.",
  contact: "Hi SMEfrog, I'd like to get in touch about your services.",
  footer: "Hi SMEfrog, I found you on your website and I'd like to know more.",
  frogai: 'Hi SMEfrog, I was chatting with FrogAI and I\'d like to speak to a person.',
} as const

// ─── WhatsApp Link Helper ─────────────────────────────────
export function waLink(message: keyof typeof WA_MESSAGES): string {
  return `${WHATSAPP_MAIN}?text=${encodeURIComponent(WA_MESSAGES[message])}`
}
