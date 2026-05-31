# Task 3-4: Brand + Contact Agent

## Task
Create /brand page (Section 3) and redesign /contact page with WhatsApp pre-fill form (Section 4)

## Work Completed

### /brand/page.tsx (NEW)
- Full brand identity page with 5 sections
- Sticky "Copy Brand Identity" button at top (green pill, bg-[#4CAF50], rounded-full)
- Section 1: Logo Usage with 3 approved background cards, wordmark rules, "Do Not" list
- Section 2: Colours with 8 swatches (hex + RGB + use-case)
- Section 3: Typography with Syne/DM Sans/DM Mono previews + type scale table
- Section 4: Voice and Tone with 5 numbered rules
- Section 5: Copy CTA with preview of plain-text brand identity
- Uses ScrollReveal, Eyebrow, DoubleBezel components
- Dark theme consistent with site

### /contact/page.tsx (REDESIGNED)
- WhatsApp pre-fill form replacing old static CTA
- Name (required, with validation), Business type (pill radios), Description (200 char max), Source (select)
- "Continue to WhatsApp" button builds and encodes message, opens wa.me/264853411522?text= in new tab
- Note: "Your message opens in WhatsApp. You can edit it before sending."
- No EmailJS/Nodemailer/fetch POST/server-side handling
- Hero, Windhoek location card, Gemsweb partner section, bottom CTA preserved
- All sections now dark theme

### footer.tsx (MODIFIED)
- Added "Brand Guidelines" link → /brand in Company links section (after Academy)

### Pre-existing Fixes
- page.tsx: missing comma after `desc` property (line 48)
- services/page.tsx: double comma after `description` property (line 46)

## Verification
- ESLint: clean pass
- All routes return 200: /, /brand, /contact
