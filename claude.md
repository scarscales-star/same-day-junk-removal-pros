# Same-Day Junk Removal Pros — Website Project

## Project Overview
Building a new website for **Same-Day Junk Removal Pros** (Seattle, WA).
- **Current site:** samedayjunkremoval.co (brand/color reference only)
- **Structure reference:** junkittampa.com (layout patterns, page types, conversion approach — not colors)
- **Goal:** High-converting, mobile-first lead generation site with individual landing pages per service

---

## Brand & Colors
Pulled from samedayjunkremoval.co — monochromatic, clean, professional:

| Role | Hex |
|------|-----|
| Primary / Buttons / CTA | `#32373c` (dark charcoal) |
| Background | `#ffffff` (white) |
| Dark accent / headers | `#000000` (black) |
| Body text / secondary | `#32373c` |
| Muted / decorative | `#707070` (medium gray) |
| Light gray (dividers/cards) | `#f5f5f5` |
| CTA hover / urgency accent | `#1a1d20` (deeper charcoal) |

**Typography:** Bold, heavy sans-serif for headlines. Clean readable sans for body. No script fonts.
**Imagery:** Real photos of junk removal jobs, before/after, trucks, crew. No stock-generic.

---

## Tech Stack
- **Platform:** WordPress + Elementor (or custom HTML/CSS if specified)
- **Forms:** GHL embedded form or native WP form → GHL pipeline
- **Calls:** Click-to-call on every page, sticky mobile header
- **Hosting:** As directed by client

---

## Site Architecture (modeled after junkittampa.com)

```
Home
├── Services (parent, not a landing page itself)
│   ├── /junk-removal/                  ← flagship service LP
│   ├── /appliance-removal/
│   ├── /furniture-removal/
│   ├── /construction-debris-removal/
│   ├── /electronics-disposal/
│   ├── /yard-waste-removal/
│   ├── /estate-cleanouts/
│   └── /valet-trash-service/
├── Service Areas (local SEO pages)
│   ├── /seattle/
│   ├── /bellevue/
│   └── /[other cities]/
├── About
├── FAQ
├── Contact
└── Blog (optional, for SEO content)
```

---

## Service Page Template (Every Service = Standalone Landing Page)

Each service page must be self-contained — a visitor should be able to land, understand, trust, and convert without navigating elsewhere.

### Required Sections (in order):

1. **Hero**
   - H1 with service name + city (e.g., "Appliance Removal in Seattle, WA")
   - 1-line value prop beneath
   - Two CTAs: primary "Get a Free Quote" (opens form/GHL) + secondary "Call Now: (206) 889-3023"
   - Background: dark charcoal or real photo with overlay
   - Mobile: CTAs stacked, full-width buttons, large tap targets (min 48px)

2. **Trust Bar** (below hero, before any copy)
   - Icons + short labels: Same-Day Available | Licensed & Insured | Upfront Pricing | Eco-Friendly Disposal
   - Horizontal scroll on mobile

3. **What We Remove / Service Description**
   - H2 explaining exactly what this service covers
   - Bullet list of items handled (specific, scannable)
   - 1 photo or illustration

4. **How It Works** (3-step process)
   - Step 1: Book online or call → Step 2: We arrive on time → Step 3: Junk gone, you pay
   - Simple icon + label format
   - Builds confidence, reduces friction

5. **Pricing Section**
   - "Transparent, upfront pricing — no hidden fees"
   - Explain pricing model (by load size, item count, etc.)
   - Do NOT list specific prices unless client confirms; instead use a pricing range or "Get a free quote in 60 seconds"

6. **Mid-Page CTA** (repeating CTA after ~50% scroll)
   - Same as hero CTA — dark button, click-to-call
   - Mobile: sticky bottom bar with "Call" + "Book Now" buttons

7. **Why Choose Us / Credibility Block**
   - 3–4 differentiators with icons: Experienced Team, Same-Day Service, Locally Owned, Rated 5 Stars
   - Pull in real reviews if available (Google reviews embed or manual)

8. **Reviews / Social Proof**
   - Minimum 3 Google reviews displayed
   - Star rating, reviewer name, short quote
   - Google badge or "Verified Google Review" label

9. **Service Area** (for this specific service)
   - Short paragraph + bulleted list of cities/neighborhoods served
   - Helps local SEO and confirms coverage to visitor

10. **FAQ** (service-specific, 4–6 questions)
    - Schema markup: FAQ structured data on every page
    - Questions should match real search intent (e.g., "How much does appliance removal cost in Seattle?")

11. **Final CTA / Footer CTA**
    - Full-width dark section: "Ready to get rid of it? Get your free quote today."
    - Large CTA button + phone number
    - Reinforce trust: "Same-day available. No obligation."

---

## Homepage Structure

1. **Hero** — Bold headline, city + service, dual CTA, real photo/video background
2. **Services Grid** — All service pages linked with icon cards (mobile: 2-column grid)
3. **Trust Bar** — Same as service pages
4. **How It Works** — 3-step process (same component, reused)
5. **About / Who We Are** — Short para, crew photo, local business angle
6. **Reviews** — Google review carousel or static grid
7. **Service Areas Map** — Simple text list or embedded map
8. **Final CTA** — Dark section, quote form or click-to-call
9. **Footer** — NAP (Name, Address, Phone), links, license info, copyright

---

## Mobile-First Rules (Non-Negotiable)

- Design for 390px viewport first, scale up
- Hero buttons: full-width, stacked, min 48px height
- **Sticky mobile CTA bar:** fixed bottom bar with phone icon ("Call") and form icon ("Book") — present on all pages
- Font size: body min 16px, H1 min 32px on mobile
- Images: WebP format, lazy loaded, max 800px wide for mobile
- No horizontal scroll anywhere
- Tap targets: min 44x44px on all interactive elements
- Form fields: large, clearly labeled, single-column on mobile
- Page speed target: LCP < 2.5s on mobile (Core Web Vitals)

---

## SEO Requirements

- **Title tag format:** `[Service] in Seattle, WA | Same-Day Junk Removal Pros`
- **Meta description:** Action-oriented, 150–160 chars, includes city + service + CTA
- **H1:** One per page, includes primary keyword + location
- **H2/H3:** Support keywords naturally, no keyword stuffing
- **Schema markup:** LocalBusiness on homepage, Service on service pages, FAQ on all pages with FAQ sections
- **Internal linking:** Each service page links to 2–3 related services + homepage
- **Image alt text:** Descriptive, includes service + location where relevant
- **URL slugs:** Short, clean, keyword-rich (e.g., `/appliance-removal/` not `/services/appliance-removal-seattle-wa/`)
- **NAP consistency:** Same Name, Address, Phone format site-wide (matches Google Business Profile exactly)

---

## Conversion Optimization Rules

- CTA above the fold on every page — no exceptions
- Phone number in header, sticky on mobile, and in every CTA section
- Forms: max 3 fields for initial contact (Name, Phone, Service needed) — lower friction
- Social proof within first 2 scrolls of any page
- Urgency language where honest: "Same-day available", "Spots filling fast today"
- Every page ends with a CTA — never a dead end
- Trust signals near CTAs: license badge, insurance badge, BBB/Google rating
- Load speed is a conversion factor — keep pages lean

---

## GHL Integration Points

- Quote form → GHL pipeline "New Lead" stage
- Contact form → same pipeline
- Click-to-call tracking → GHL call tracking number if set up
- Optional: GHL calendar embed for booking slots
- Webhook trigger on form submit for instant follow-up automation

---

## Content Tone

- Direct, local, trustworthy
- No corporate jargon — talk like a neighbor who hauls junk
- Action-oriented: "We'll haul it today", "Get it gone"
- Reassuring around pricing: "No surprise fees", "We tell you the price before we start"
- Eco-conscious angle where relevant: "We recycle and donate when possible"

---

## What NOT to Do

- Do not use colors from junkittampa.com (their site uses different branding)
- Do not build a single mega "services" page — every service is its own URL
- Do not hide the phone number or bury CTAs below the fold
- Do not use generic stock photos of random people smiling — use real junk removal imagery
- Do not skip FAQ schema — it's free real estate in Google results
- Do not build desktop-first then squeeze for mobile — start mobile, enhance up
