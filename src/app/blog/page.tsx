'use client'

import { ArrowRight, MessageCircle, Clock, BookOpen } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'

/* ─── Data ─────────────────────────────────────────── */
const blogPosts = [
  {
    title: 'How to Register a CC in Namibia — 2024 Guide',
    excerpt:
      'A comprehensive walkthrough of the Close Corporation registration process in Namibia, from name reservation to receiving your certificate. Everything you need to know in one place.',
    date: '15 Jan 2024',
    readTime: '8 min read',
    category: 'Guides',
  },
  {
    title: 'PTY LTD vs CC: Which Is Right for You?',
    excerpt:
      'Not sure whether to register a Close Corporation or a Private Company? We break down the key differences, advantages, and which structure suits different types of businesses.',
    date: '22 Jan 2024',
    readTime: '6 min read',
    category: 'Comparisons',
  },
  {
    title: 'Understanding BIPA Compliance Requirements',
    excerpt:
      'BIPA compliance is mandatory for all registered businesses in Namibia. Learn what\'s required, when filings are due, and how to stay on the right side of regulations.',
    date: '5 Feb 2024',
    readTime: '7 min read',
    category: 'Compliance',
  },
  {
    title: 'The Complete Guide to Beneficial Ownership Filing',
    excerpt:
      'Beneficial Ownership declarations are now a legal requirement. This guide explains who needs to file, what information is required, and the consequences of non-compliance.',
    date: '18 Feb 2024',
    readTime: '5 min read',
    category: 'Compliance',
  },
  {
    title: 'Why Remote Registration Is the Future',
    excerpt:
      'The days of spending hours at government offices are over. Discover how digital-first registration services are transforming the way Namibian entrepreneurs start businesses.',
    date: '3 Mar 2024',
    readTime: '4 min read',
    category: 'Insights',
  },
  {
    title: 'Startup Costs in Namibia: A Real Breakdown',
    excerpt:
      'What does it actually cost to start a business in Namibia? We break down registration fees, compliance costs, and hidden expenses that most first-time founders overlook.',
    date: '20 Mar 2024',
    readTime: '9 min read',
    category: 'Insights',
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
        href="#"
        className="group block h-full bg-white ring-1 ring-[#E5E7EB] p-1.5 rounded-[2rem] hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        <div className="bg-[#F8F9F4] rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col">
          {/* Category pill */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-[#9CA3AF]">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-frog-green transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-1">
            {post.excerpt}
          </p>

          {/* Footer: date + read more */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
            <span className="text-[11px] text-[#9CA3AF] font-medium uppercase tracking-[0.1em]">
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-frog-green text-sm font-semibold group-hover:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              Read More
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
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Insights &{' '}
              <span className="text-frog-green">Resources</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Practical guides, expert comparisons, and startup insights to help you navigate the Namibian business landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BLOG GRID — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#F8F9F4]">
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
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to start your business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Skip the research and let us handle everything. Register your business remotely with SMEfrog — fast, affordable, and 100% online.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <a
                href="https://wa.me/264853057020"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Mux on WhatsApp
                <span className="w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
