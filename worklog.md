# SMEfrog Restructuring Plan

## Business Strategy Pivot
**From:** "The Company That Does Everything" (4 services)  
**To:** "The Compliance Partner for Small Businesses in Namibia" (3 focused services)

---

## Service Changes

### REMOVE
| Service | Reason |
|---------|--------|
| **Startup Support** | Business plans/pitch decks are hard to standardize, low-budget clients, endless revisions, many never launch |
| **Digital Services** | Disconnected from core positioning. Already a Gemsweb partnership — move fully to Gemsweb |

### KEEP (Core Services)
| Service | Why | Pricing |
|---------|-----|---------|
| **Business Registration** | Door-opener. CC, PTY LTD, Name Reservations, BIPA, BO filings | From N$800 |
| **Compliance Services** (NEW) | Recurring revenue moat. Annual returns, BO updates, regulatory filings, governance docs, company secretarial | Recurring |
| **Business Documents** | Complementary. Contracts, policies, resolutions, agreements, templates | Per document |

### MOVE TO GEMSWEB
- Website Development
- Business Email
- Visual Branding
- Social Media Setup
→ These become a Gemsweb referral card, not a full SMEfrog service page

---

## Image Strategy

### DELETE (AI-generated, not from uploads)
- `/public/service-registration.png`
- `/public/service-startup.png`
- `/public/service-documents.png`
- `/public/service-digital.png`
- `/public/about-bg.png`

### HERO SLIDESHOW (3 Namibian Landscapes Only)
| Image | Description | Why |
|-------|-------------|-----|
| `hero-1.webp` | Namib desert dunes with teal sky | Classic Namib, wide open, hero-perfect |
| `hero-6.webp` | Dramatic African sunset panorama | Rich palette, iconic hero material |
| `hero-9.webp` | Red desert with layered bands | Unmistakably Namibian, strong composition |

### ASSIGN TO PAGES (6 Remaining Images)
| Image | Description | Assigned To |
|-------|-------------|-------------|
| `hero-2.webp` | Savanna with acacia trees in golden light | Business Registration page |
| `hero-5.webp` | Savanna-to-desert transition, red earth | Compliance Services page (new) |
| `hero-7.webp` | Coastal/mountains with teal waters | Business Documents page |
| `hero-3.webp` | Dark dense bush/woodland | About page hero background |
| `hero-4.webp` | Dark silhouette landscape | Homepage CTA section background |
| `hero-8.webp` | Dense green canopy | Resources page hero background |

---

## Page-by-Page Changes

### `/services/startup-support/page.tsx` → DELETE ENTIRELY
### `/services/digital-services/page.tsx` → DELETE ENTIRELY
### `/services/compliance-services/page.tsx` → CREATE NEW

### `page.tsx` (Homepage)
- Services bento: 3 cards only (Registration, Compliance, Documents)
- Remove "Startup Support" and "Digital Services" cards
- Add Gemsweb referral mini-card in trust strip or CTA area
- Registration form: update package options (remove "Business Plan", "Pitch Deck" from Full package)
- Hero: uses 3-image slideshow

### `services/page.tsx` (Services Hub)
- 3 services only: Registration, Compliance, Documents
- Remove Startup Support and Digital Services bento cards
- Add Gemsweb Digital referral card (small, bottom, "Need a website?" → gemsweb.xyz)
- "Why Us" stats stay the same

### `services/business-registration/page.tsx`
- Replace `/service-registration.png` with `/hero/hero-2.webp`
- Remove "Pitch Deck Template" and "Business Plan Summary" from Full package
- Keep CC & PTY LTD details, BIPA/BO sections, pricing

### `services/compliance-services/page.tsx` (NEW)
- Hero image: `/hero/hero-5.webp`
- Content: Annual Returns, BO Updates, Regulatory Filings, Governance Documentation, Record Keeping, Company Secretarial Services
- Positioning: "Compliance is recurring. Registration is one-time. We keep you operational year after year."
- Pricing: Recurring/custom

### `services/business-documents/page.tsx`
- Replace `/service-documents.png` with `/hero/hero-7.webp`
- Keep existing document types and structure

### `pricing/page.tsx`
- Remove Startup Support and Digital Services from pricing
- Add Compliance Services pricing section
- Update Full package features (remove Business Plan, Pitch Deck, Social Setup)
- Keep CC registration packages

### `about/page.tsx`
- Replace `/about-bg.png` with `/hero/hero-3.webp`
- Update Mux's role from "Digital Strategist" to something compliance-focused
- Remove Digital Services references

### `footer.tsx`
- Remove Startup Support and Digital Services links
- Add Compliance Services link
- Add Gemsweb referral mini-card
- Keep Gemsweb Digital partner section

### `navbar.tsx`
- No nav link changes (Services links to hub page)

### `search-overlay.tsx`
- Remove Startup Support and Digital Services from search index
- Add Compliance Services entries

### `frogai-chat.tsx` + `api/frogai/route.ts`
- Update system prompt: remove startup support and digital services knowledge
- Add compliance services knowledge

### `config.ts`
- Remove Startup Support and Digital Services references
- Add COMPLIANCE_SERVICE data
- Update PRICING: Full package removes "Business Plan", "Pitch Deck", "Social Setup"
- Add "Annual Returns" and "BO Filing" to Full package
- Update agent roles (Mux → "Compliance Officer" or similar)

### `blog/page.tsx`
- Remove Startup Support and Digital Services blog cards
- Add Compliance-related blog cards

### `resources/page.tsx`
- Remove placeholder `href="#"` links
- Keep registration guides, add compliance guide links

### `faq/page.tsx`
- Remove startup/digital FAQs
- Add compliance FAQs

### `contact/page.tsx`
- Remove Digital Services references
- Update Mux's role

---

## Dead Code Removal

### Delete (9 unused shadcn/ui components)
- `src/components/ui/button.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/skeleton.tsx`
- `src/components/ui/toast.tsx`
- `src/components/ui/toggle.tsx`
- `src/components/ui/toggle-group.tsx`

### Delete (2 service page directories)
- `src/app/services/startup-support/page.tsx`
- `src/app/services/digital-services/page.tsx`

### Delete (5 AI-generated images)
- `/public/service-registration.png`
- `/public/service-startup.png`
- `/public/service-documents.png`
- `/public/service-digital.png`
- `/public/about-bg.png`

### Delete (6 PNG fallbacks for hero images kept — keep WebP only)
Wait — actually keep PNG fallbacks for browsers that don't support WebP. But since we're reducing from 9 to 3 in the hero, the other 6 PNGs can stay for use on other pages.

Actually: keep all PNG fallbacks. They're used as fallback sources.

---

## Data Centralization (config.ts)

Move duplicated data from individual pages into config.ts:
- AGENTS (currently duplicated in 6+ files)
- Testimonials
- Pricing data
- FAQ data

---

## Execution Order

1. **Phase 1**: Delete dead code (unused shadcn components)
2. **Phase 2**: Delete Startup Support page + remove all references
3. **Phase 3**: Delete Digital Services page + replace with Gemsweb referral
4. **Phase 4**: Create Compliance Services page
5. **Phase 5**: Delete AI-generated images
6. **Phase 6**: Update hero slideshow to 3 images, assign remaining to pages
7. **Phase 7**: Update homepage bento (3 services)
8. **Phase 8**: Update config.ts, footer, navbar, search overlay, FrogAI, metadata
9. **Phase 9**: Update pricing page
10. **Phase 10**: Update about, contact, FAQ, blog, resources pages
11. **Phase 11**: Final lint, Vercel readiness, push to GitHub + Vercel
