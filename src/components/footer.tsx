import Link from 'next/link'
import { Phone, Globe } from 'lucide-react'

const navColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Business Registration', href: '/services/business-registration' },
      { label: 'Startup Support', href: '/services/startup-support' },
      { label: 'Business Documents', href: '/services/business-documents' },
      { label: 'Digital Services', href: '/services/digital-services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const contactItems = [
  { icon: Phone, label: 'Gadafi', value: '081 341 1522', href: 'https://wa.me/264813411522' },
  { icon: Phone, label: 'Mux', value: '085 305 7020', href: 'https://wa.me/264853057020' },
  { icon: Globe, label: 'Website', value: 'smefrog.tangison.com', href: 'https://smefrog.tangison.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-frog-hairline bg-frog-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/icon.png" alt="SMEfrog" className="w-9 h-9 rounded-xl" />
              <span className="font-heading font-bold text-frog-light text-xl">SMEfrog</span>
            </div>
            <p className="text-frog-muted text-sm leading-relaxed mb-6 max-w-xs">
              Simple. Fast. For Startups. Affordable startup support for Namibian entrepreneurs.
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-frog-muted text-sm hover:text-frog-green transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </span>
                  {item.value}
                  <span className="text-frog-muted/50 text-xs">({item.label})</span>
                </a>
              ))}
            </div>
            {/* Digital Partner */}
            <div className="mt-6">
              <p className="text-frog-muted/50 text-xs uppercase tracking-wider mb-1.5">Digital Partner</p>
              <a
                href="https://gemsweb.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-frog-green text-sm font-medium hover:text-frog-green/70 transition-colors"
              >
                Gemsweb Digital ↗
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-frog-light text-xs uppercase tracking-[0.15em] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-frog-muted text-sm hover:text-frog-green transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-frog-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-frog-muted/50 text-xs">
            &copy; {new Date().getFullYear()} SMEfrog. All rights reserved.
          </p>
          <p className="text-frog-muted/50 text-xs">
            Built with <span className="text-frog-green">&#9829;</span> for Namibian entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}
