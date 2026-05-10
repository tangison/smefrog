import Link from 'next/link'
import { Phone, Globe } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-frog-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/icon.png" alt="SMEfrog" className="w-8 h-8 rounded-lg" />
              <span className="font-heading font-bold text-frog-light text-lg">SMEfrog</span>
            </div>
            <p className="text-[#8BA89A] text-sm leading-relaxed">
              Simple. Fast. For Startups.
            </p>
            <p className="text-[#8BA89A] text-sm leading-relaxed mt-2">
              Affordable startup support for Namibian entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8BA89A] text-sm hover:text-frog-green transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                </span>
                <span className="text-[#8BA89A] text-sm">081 341 1522 (Gadafi)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                </span>
                <span className="text-[#8BA89A] text-sm">085 305 7020 (Mux)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                  <Globe className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                </span>
                <a
                  href="https://smefrog.tangison.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8BA89A] text-sm hover:text-frog-green transition-colors duration-300"
                >
                  smefrog.tangison.com
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Partner */}
          <div>
            <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
              Digital Partner
            </h4>
            <a
              href="https://gemsweb.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-frog-green text-sm font-medium hover:text-frog-green/80 transition-colors duration-300"
            >
              Gemsweb Digital
            </a>
            <p className="text-[#8BA89A] text-sm leading-relaxed mt-2">
              Website development, branding, and digital solutions for modern businesses.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8BA89A] text-xs">
            &copy; {new Date().getFullYear()} SMEfrog. All rights reserved.
          </p>
          <p className="text-[#8BA89A] text-xs">
            Built with <span className="text-frog-green">&#9829;</span> for Namibian entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}
