/**
 * SMEfrog — Centralised configuration
 * Single source of truth for all business data, URLs, and pricing.
 * Eliminates 50+ hardcoded duplications across the codebase.
 */

// ─── Contact / WhatsApp ────────────────────────────────────
export const WHATSAPP_GADAFI = 'https://wa.me/264813411522'
export const WHATSAPP_MUX = 'https://wa.me/264853057020'
export const PHONE_MAIN = '+264 341 1522'
export const PHONE_MAIN_TEL = 'tel:+2643411522'

// ─── Agents ────────────────────────────────────────────────
export const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', phone: '081 341 1522', fullPhone: '264813411522', role: 'Compliance Expert', waLink: WHATSAPP_GADAFI },
  { id: 'mux', name: 'Mux', phone: '085 305 7020', fullPhone: '264853057020', role: 'Digital Strategist', waLink: WHATSAPP_MUX },
] as const

// ─── Social ────────────────────────────────────────────────
export const FACEBOOK_URL = 'https://www.facebook.com/SMEfrogNamibia'
export const GEMSWEB_URL = 'https://gemsweb.xyz'

// ─── Site ──────────────────────────────────────────────────
export const SITE_URL = 'https://smefrog.tangison.com'
export const SITE_NAME = 'SMEfrog'

// ─── Pricing ───────────────────────────────────────────────
export const PRICING = {
  basic: { tier: 'BASIC', price: 'N$800', sub: 'CC Registration', features: ['Name Reservation', 'BIPA Filing', 'Tax Certificate'], btn: 'Get Basic' },
  advanced: { tier: 'ADVANCED', price: 'N$1,200', sub: 'CC Registration', features: ['Basic + Company Profile', 'Domain Registration', 'BO Filing'], featured: true, btn: 'Get Advanced' },
  full: { tier: 'FULL', price: 'N$1,750', sub: 'CC Registration', features: ['Advanced + Business Plan', 'Social Setup', 'Pitch Deck'], btn: 'Get Full' },
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
