# Task 4 - Pricing & About Page Enhancement

## Summary
Enhanced both Pricing and About pages with light/dark section balance, editorial layouts, and DoubleBezel architecture per requirements.

## Pricing Page Changes
- **Light header section** (bg-white) with dark text, eyebrow, heading, and quick-nav pills to #cc-packages and #pty-ltd
- **Dark CC Registration section** (bg-frog-black) with 3 DoubleBezel cards: Basic (N$800), Advanced (N$1,200), Full (N$1,750 - featured)
- **Light editorial comparison section** (bg-white) with feature-by-feature table across all 3 tiers, check/dash icons, highlighted Full column with Crown badge, and CTA row
- **Dark Pty Ltd section** (bg-frog-black) with DoubleBezel card containing side-by-side market comparison (N$6,450+ vs N$3,500) and savings callout
- **Dark CTA section** with gradient background and WhatsApp button
- Extracted easing classes to variables to avoid ESLint template literal parsing issues

## About Page Changes
- **Hero section** with /about-bg.png as background using Next.js Image component (fill, object-cover, opacity-20), gradient overlay
- **Story section** light themed (bg-[#FAFAFA]) with dark text colors
- **Mission card** uses DoubleBezel architecture: green outer shell (#E8F5E0), white inner core, thick frog-green left bar, expanded mission copy
- **Why SMEfrog section** alternates between light cards (white shell + #FAFAFA inner) and dark DoubleBezel cards in 2-column grid
- **Process section** dark with DoubleBezel step cards
- No `import React` used, 'use client' directive on both pages

## Technical Notes
- Both pages use ScrollReveal from @/components/scroll-reveal
- All transitions use cubic-bezier(0.32,0.72,0,1)
- DoubleBezel on dark sections, clean white/light cards on light sections
- Lint passes clean, both /pricing and /about return 200
