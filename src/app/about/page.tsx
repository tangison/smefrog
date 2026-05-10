import { TrendingDown, Wifi, Lightbulb, Clock, Check, MessageCircle } from 'lucide-react'

const values = [
  {
    title: '2X Cheaper Than Industry Standard',
    description: 'Most consultants charge premium prices for basic compliance work. We use lean digital systems to deliver the same outcome at a startup-friendly price.',
    icon: TrendingDown,
  },
  {
    title: 'Fully Remote',
    description: 'No office visits. No paperwork confusion. Everything handled online through WhatsApp and email.',
    icon: Wifi,
  },
  {
    title: 'Built for Startups',
    description: 'Traditional firms serve corporations. We serve the people who actually need affordable help.',
    icon: Lightbulb,
    list: ['Young entrepreneurs', 'Side hustlers', 'Small businesses', 'Freelancers', 'Informal businesses becoming compliant'],
  },
  {
    title: 'Fast Turnaround',
    description: 'Most registrations completed within:',
    icon: Clock,
    highlight: '7–10 Working Days',
  },
]

const steps = [
  { number: '01', title: 'Contact Us', description: 'Message us on WhatsApp.' },
  { number: '02', title: 'Send Your Details', description: 'We collect the required registration information.' },
  { number: '03', title: 'We Handle Everything', description: 'Compliance, forms, filings, and submissions.' },
  { number: '04', title: 'Receive Your Documents', description: 'Delivered digitally and ready for business.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            About SMEfrog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
            Built for Entrepreneurs
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-lg md:text-xl text-[#8BA89A] leading-relaxed mb-6">
            SMEfrog was created to solve a simple problem:
          </p>
          <p className="text-xl md:text-2xl text-frog-light font-heading font-medium leading-relaxed mb-8">
            Starting a business in Namibia is unnecessarily expensive, confusing, and slow.
          </p>
          <p className="text-base md:text-lg text-[#8BA89A] leading-relaxed mb-12">
            We built a lean, digital-first support company focused on helping founders
            start properly — without wasting time or money.
          </p>

          {/* Mission */}
          <div className="rounded-2xl bg-[#151D19] ring-1 ring-frog-green/20 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch bg-frog-green/40 rounded-full shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-frog-green/60 font-medium mb-2">
                  Our Mission
                </p>
                <p className="text-lg md:text-xl font-heading font-semibold text-frog-light leading-relaxed">
                  Help more entrepreneurs become formal businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SMEfrog */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Why SMEfrog
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light max-w-3xl leading-snug">
              Starting a business shouldn&apos;t cost more than the business itself.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-[#151D19] ring-1 ring-white/[0.06] p-6 md:p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-frog-light mb-2">
                  {value.title}
                </h3>
                {value.highlight && (
                  <p className="text-3xl md:text-4xl font-heading font-bold text-frog-green mb-2">
                    {value.highlight}
                  </p>
                )}
                <p className="text-[#8BA89A] text-sm leading-relaxed">
                  {value.description}
                </p>
                {value.list && (
                  <ul className="space-y-1.5 mt-3">
                    {value.list.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-[#8BA89A] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-frog-light">
              Four Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-[#151D19] ring-1 ring-white/[0.06] p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 text-frog-green font-heading font-bold flex items-center justify-center text-sm mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-heading font-bold text-frog-light mb-1">
                  {step.title}
                </h3>
                <p className="text-[#8BA89A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
