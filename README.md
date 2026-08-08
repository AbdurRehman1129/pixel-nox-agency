# Pixel Nox — Website

The marketing site for Pixel Nox, a software product agency. Built with
Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Editing site content (no component code required)

Almost all of the text on this site lives in two files, so you can update
copy, contact details, and services without touching any `.tsx` component:

- **`data/siteConfig.ts`** — company name, tagline, description, email,
  phone, address, social links, footer copyright, and the production `url`
  (used by the sitemap, robots.txt, and social share metadata — update this
  once you have a real domain).
- **`data/services.ts`** — the 6 services shown as cards on the homepage and
  as individual pages at `/services/[slug]`. Each entry has a `slug`,
  `title`, `shortDescription` (card text), `fullDescription`, `features`
  list, and optional `technologies` list. **Adding, removing, or renaming a
  service here automatically updates the homepage grid, the detail pages,
  the sitemap, and the Book a Meeting service dropdown** — nothing else
  needs to change.

Legal page content (Privacy Policy, Terms & Conditions, Refund Policy,
Cookies Policy) lives directly in each page file under `app/`, since it's
long-form prose rather than structured data:

- `app/privacy-policy/page.tsx`
- `app/terms-and-conditions/page.tsx`
- `app/refund-policy/page.tsx`
- `app/cookies-policy/page.tsx`

> **Before going live:** the legal pages contain realistic placeholder text,
> not reviewed legal copy. Have them reviewed by a lawyer, especially since
> this site is intended for international documentation — cross-border
> rules like GDPR may apply depending on your clients.

## Connecting real email delivery

The contact form (`app/api/contact/route.ts`) and the Book a Meeting form
(`app/api/book-meeting/route.ts`) both work end-to-end today, but currently
only log submissions to the server console — no email is actually sent yet.
To connect a real provider:

1. Copy `.env.example` to `.env.local` and fill in your provider's API key.
2. Pick an email service (Resend, SendGrid, Postmark, etc.) and add its SDK:
   ```bash
   npm install resend
   ```
3. In each route file, replace the `console.log(...)` line with a real send
   call using the provider's SDK and your `RESEND_API_KEY` (or equivalent).

## Project structure

```
app/
  page.tsx                    Homepage (Hero, About, Services, Book a Meeting)
  contact/page.tsx            Contact page + form
  services/[slug]/page.tsx    Individual service detail pages (statically generated)
  privacy-policy/             \
  terms-and-conditions/        |  Legal pages
  refund-policy/               |
  cookies-policy/             /
  api/contact/route.ts        Contact form submission handler
  api/book-meeting/route.ts   Book a Meeting submission handler
  sitemap.ts, robots.ts       SEO
  opengraph-image.tsx         Dynamic social share image
  not-found.tsx               Custom 404
components/                   All UI components (Navbar, Footer, cards, forms, etc.)
data/                         siteConfig.ts and services.ts — the content source of truth
```

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this from
   the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings need to change.
4. Add any environment variables from `.env.example` in the Vercel project's
   **Settings → Environment Variables** before deploying, if you've
   connected an email provider.
5. Deploy. Vercel gives you a `*.vercel.app` URL immediately; add your own
   domain under **Settings → Domains** once you have one, and update
   `data/siteConfig.ts`'s `url` field to match.

## Post-deploy smoke test

- [ ] Every nav link and footer link resolves (no 404s)
- [ ] All 6 service cards open their correct detail page
- [ ] Contact form submits and shows the success state
- [ ] Book a Meeting modal opens, submits, and shows the success state
- [ ] Mobile menu opens/closes correctly on a phone-width screen
- [ ] All 4 legal pages render and link correctly from the footer
- [ ] `/sitemap.xml` and `/robots.txt` load
- [ ] Visiting a made-up URL shows the custom 404 page
