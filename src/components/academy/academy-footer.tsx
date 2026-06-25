import Link from 'next/link'

export function AcademyFooter() {
  return (
    <footer className="academy-safe-bottom mt-16 border-t border-academy-border bg-academy-surface">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-academy-muted">
          <span className="font-bold" style={{ color: 'var(--color-academy-primary)' }}>SMEfrog Academy</span>
          <span>·</span>
          <span>Free business education for Namibia</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-academy-muted">
          <Link href="/" className="hover:text-academy-ink transition-colors">
            Main Site
          </Link>
          <span>·</span>
          <span>© 2026 SMEfrog</span>
          <span>·</span>
          <span>A concept by Tangison.com</span>
        </div>
      </div>
    </footer>
  )
}
