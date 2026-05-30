'use client'

import { ArrowRight, MessageCircle, Clock, BookOpen } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { waLink } from '@/lib/config'
import { Eyebrow } from '@/components/eyebrow'

/* ─── Data ─────────────────────────────────────────── */
const blogPosts = [
  {
    title: 'CC Registration in Namibia — 2024',
    excerpt:
      'Step-by-step walkthrough from name reservation to certificate.',
    date: '15 Jan 2024',
    readTime: '8 min',
    category: 'Guides',
    href: '/resources/cc-registration-guide',
  },
  {
    title: 'PTY LTD vs CC: Which to Pick?',
    excerpt:
      'Key differences, advantages, and which fits your business.',
    date: '22 Jan 2024',
    readTime: '6 min',
    category: 'Comparisons',
    href: '/resources/cc-vs-pty-ltd',
  },
  {
    title: 'BIPA Compliance Requirements',
    excerpt:
      'What\'s required, when filings are due, and how to stay compliant.',
    date: '5 Feb 2024',
    readTime: '7 min',
    category: 'Compliance',
    href: '/resources/bipa-compliance-checklist',
  },
  {
    title: 'Beneficial Ownership Filing Guide',
    excerpt:
      'Who needs to file, what\'s required, and consequences of non-compliance.',
    date: '18 Feb 2024',
    readTime: '5 min',
    category: 'Compliance',
    href: '/resources/beneficial-ownership-guide',
  },
  {
    title: 'The Complete Guide to Annual Returns in Namibia',
    excerpt:
      'Everything you need to know about filing annual returns and staying compliant with BIPA.',
    date: '10 Mar 2024',
    readTime: '6 min',
    category: 'Compliance',
    href: '/resources/bipa-compliance-checklist',
  },
  {
    title: 'Beneficial Ownership: What You Need to Know',
    excerpt:
      'Understanding BO declarations, update requirements, and how to avoid penalties.',
    date: '25 Mar 2024',
    readTime: '5 min',
    category: 'Compliance',
    href: '/resources/beneficial-ownership-guide',
  },
]

/* ─── Blog Card ────────────────────────────────────── */
function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[number]
  index: number
}) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <a
        href={post.href}
        className="group block h-full min-h-[44px] bg-white ring-1 ring-black/[0.06] p-1.5 rounded-[2rem] hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        aria-label={`Read: ${post.title}`}
      >
        <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col">
          {/* Category pill */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-black/40">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold text-black mb-3 leading-snug group-hover:text-frog-green transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
            {post.excerpt}
          </p>

          {/* Footer: date + read more */}
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
            <span className="text-[11px] text-black/40 font-medium uppercase tracking-[0.1em]">
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-frog-green text-sm font-semibold group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              Read
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </a>
    </ScrollReveal>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Blog</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
            >
              Insights &{' '}
              <span className="text-frog-green">Resources</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Practical guides and compliance insights for Namibian businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BLOG GRID — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.title} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl font-bold text-frog-light mb-4"
            >
              Ready to get compliant?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Skip the research. We handle everything — fast, affordable, 100% online.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={waLink('contact')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 min-h-[44px] bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat with Us on WhatsApp
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
