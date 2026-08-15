# SMEfrog

Remote business services for Namibian SMEs.

**Live:** [sme.tangison.com](https://sme.tangison.com), [smefrog.tangison.com](https://smefrog.tangison.com)  
**Status:** Production site  
**Visibility:** Public

## What this is

Main SMEfrog platform site. Twenty-eight routes covering the service catalogue, pricing, onboarding and the SMEfrog brand surface.

## Stack

- Next.js (App Router)
- TypeScript
- Framer Motion
- lucide-react icons

## Getting started

```bash
git clone https://github.com/tangison/smefrog.git
cd smefrog
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server. |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Routes

28 page routes.

```
/
/about
/academy
/academy/[slug]
/academy/achievements
/academy/leaderboard
/academy/practice
/blog
/brand
/contact
/faq
/pricing
/privacy
/resources
/resources/beneficial-ownership-guide
/resources/bipa-compliance-checklist
/resources/cc-registration-guide
/resources/cc-vs-pty-ltd
/resources/cost-estimator
/resources/name-checker
/resources/pricing-calculator
/search
/services
/services/business-documents
/services/business-registration
/services/compliance-services
/services/fractional-executives
/terms
```

## Environment

Create `.env.local` for local secrets. Never commit it.

## Deployment

Deployed on Vercel. Production domains:

- `sme.tangison.com`
- `smefrog.tangison.com`

## Maintainer

Built and maintained by **Tangison Technologies**, Windhoek, Namibia.

| | |
|---|---|
| Main line | [+264 83 411 522](tel:+264813411522) (`083411522`) |
| Email | contact@tangison.com |
| Web | https://tangison.com |

## Licence

Proprietary. Copyright Tangison Technologies. All rights reserved.
