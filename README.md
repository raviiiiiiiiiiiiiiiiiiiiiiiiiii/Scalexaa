# Scalexa — Meta Ads Agency Landing Page

> Performance-driven Meta Ads agency website for D2C, eCommerce & Dropshipping brands.

**Live:** [www.scalexa.digital](https://www.scalexa.digital)

---

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Deployment:** Vercel
- **Domain:** GoDaddy → scalexa.digital
- **Forms:** Formspree (lead capture)
- **Analytics:** Google Search Console

---

## Project Structure

```
scalexa/
├── public/
│   ├── sitemap.xml         # All routes for SEO
│   ├── robots.txt          # Search engine crawl rules
│   ├── og-image.png        # TODO: Add 1200x630 OG image
│   └── favicon.png         # TODO: Add brand favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav + hamburger menu
│   │   ├── Hero.jsx            # Hero with Meta Ads proof card
│   │   ├── BrandLogos.jsx      # Infinite scroll marquee
│   │   ├── Partners.jsx        # Meta & Shopify partner section
│   │   ├── Services.jsx        # 6 service cards
│   │   ├── HowItWorks.jsx      # 4-step cascade layout
│   │   ├── Results.jsx         # Shopify + Meta dashboard cards
│   │   ├── WhyUs.jsx           # Comparison table
│   │   ├── About.jsx           # About Scalexa + founder card
│   │   ├── FAQ.jsx             # Accordion FAQ
│   │   ├── LeadForm.jsx        # Formspree contact form
│   │   └── Footer.jsx          # White footer with anchor links
│   ├── pages/
│   │   ├── Home.jsx            # Main landing page
│   │   ├── CaseStudies.jsx     # /case-studies listing
│   │   └── CaseStudyDetail.jsx # /case-studies/:slug
│   ├── data/
│   │   └── casestudies.js      # All 15 case study entries
│   ├── App.jsx                 # Router setup
│   └── main.jsx
├── vercel.json             # SPA rewrite rules
├── index.html              # Meta tags + JSON-LD structured data
└── package.json
```

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/case-studies` | All case studies listing |
| `/case-studies/:slug` | Individual case study detail |

---

## Sections (Landing Page)

1. **Navbar** — Sticky, hamburger menu on mobile, anchor links
2. **Hero** — Headline, CTA, Meta Ads proof card with live stats
3. **Brand Logos** — Infinite scroll marquee (Meta, Shopify, Google, etc.)
4. **Trusted Partners** — Meta Business Partner + Shopify Partner cards
5. **Services** — 6 service cards (horizontally scrollable on mobile)
6. **How It Works** — 4-step staggered cascade layout
7. **Results** — Shopify + Meta Ads dashboard overview with carousel
8. **Why Scalexa** — Others vs Scalexa comparison
9. **About** — Agency story + Founder card (Sadan Mansuri)
10. **FAQ** — Accordion with 4 questions
11. **Lead Form** — Formspree form → scalexa07@gmail.com
12. **Footer CTA** — WhatsApp CTA + anchor nav links

---

## Case Studies

15 case studies with real Meta Ads & Shopify dashboard screenshots:

| Slug | Brand | Niche |
|------|-------|-------|
| `xenora-fashion` | Xenora Fashion | D2C Fashion |
| `dhanaya-jewels` | Dhanaya Jewels | D2C Jewellery |
| `boltin-kids` | Boltin Kids | Kids Products |
| `urbanfit-activewear` | UrbanFit Activewear | Fitness |
| `glowskin-beauty` | GlowSkin Beauty | Skincare |
| `zara-home-decor` | Zara Home Décor | Home & Lifestyle |
| `nutrivibe-supplements` | NutriVibe Supplements | Health |
| `petpaws-store` | PetPaws Store | Pet Products |
| `craftora-handmade` | Craftora Handmade | Artisan |
| `luxewatch-co` | LuxeWatch Co. | Premium Watches |
| `babybloom-store` | BabyBloom Store | Baby & Maternity |
| `fitgear-pro` | FitGear Pro | Fitness Equipment |
| `ethnicwear-hub` | EthnicWear Hub | Ethnic Fashion |
| `organicroots` | OrganicRoots | Organic Food |
| `techgadgets-store` | TechGadgets Store | Electronics |

---

## SEO Setup

- `sitemap.xml` — All 17 URLs submitted to Google Search Console
- `robots.txt` — Allow all, sitemap reference included
- JSON-LD structured data — `ProfessionalService` schema
- Open Graph + Twitter Card meta tags
- Google Search Console — verified & sitemap submitted
- Manual indexing requested for all pages

---

## Environment & Config

**Formspree** — Replace `YOUR_FORM_ID` in `LeadForm.jsx`:
```js
// https://formspree.io/f/YOUR_FORM_ID
// Create free account at formspree.io → get form ID → replace here
```

**WhatsApp CTA** — All buttons link to:
```
https://wa.me/918200306143
```

**Brand Color:**
```
Primary: #0199e3
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

Connected to **Vercel** via GitHub. Every push to `main` auto-deploys.

**Domain config:**
- `www.scalexa.digital` → Vercel (Valid ✅)
- `scalexa.digital` → Vercel A record `216.198.79.1` (Valid ✅)
- CNAME www → `de319f7d8c304a83.vercel-dns-017.com`

---

## Client

**Scalexa** — Meta Ads Agency  
Founder: Sadan Mansuri  
Email: scalexa07@gmail.com  
WhatsApp: +91-8200306143  
Website: [www.scalexa.digital](https://www.scalexa.digital)

---

## Built By

**Zenith Scales** — [zenith.ezsites.in](https://zenith.ezsites.in)  
*Web Development & Digital Solutions*
