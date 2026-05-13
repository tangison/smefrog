'use client'

import { ScrollReveal } from './scroll-reveal'
import { TrendingDown, Wifi, Lightbulb, Clock } from 'lucide-react'

const values = [
  {
    title: '2X Cheaper Than Industry Standard',
    description:
      'Our lean digital systems let us deliver the same professional services at a fraction of the cost. No office overhead, no unnecessary fees.',
    icon: TrendingDown,
  },
  {
    title: 'Fully Remote',
    description:
      'Everything is handled online through WhatsApp and email. No office visits, no travel, no waiting in line.',
    icon: Wifi,
  },
  {
    title: 'Built for Startups',
    description:
      'Designed specifically for young entrepreneurs, side hustlers, small businesses, freelancers, and informal businesses becoming compliant.',
    icon: Lightbulb,
    list: [
      'Young entrepreneurs',
      'Side hustlers',
      'Small businesses',
      'Freelancers',
      'Informal businesses becoming compliant',
    ],
  },
  {
    title: 'Fast Turnaround',
    description: 'Get your documents ready in no time.',
    highlight: '7–10 Working Days',
    icon: Clock,
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
            Why SMEfrog
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-6">
            Starting a business shouldn&apos;t cost more than the business itself.
          </h2>
        </ScrollReveal>

        {/* Quote-style accent */}
        <ScrollReveal delay={0.15}>
          <div className="w-1 h-16 bg-frog-green/40 rounded-full mb-16 md:mb-20" />
        </ScrollReveal>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              {/* Outer Shell - Double Bezel */}
              <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem] h-full">
                {/* Inner Core */}
                <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8 h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-5">
                    <value.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-3">
                    {value.title}
                  </h3>

                  {/* Highlight number */}
                  {value.highlight && (
                    <p className="text-4xl md:text-5xl font-heading font-bold text-frog-green mb-3">
                      {value.highlight}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-[#8BA89A] text-sm leading-relaxed mb-4">
                    {value.description}
                  </p>

                  {/* List */}
                  {value.list && (
                    <ul className="space-y-2">
                      {value.list.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                          <span className="text-[#8BA89A] text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
