# KJF Starnberg

Website der Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e.V.

Built with ❤️ by [theexiile1305](https://github.com/theexiile1305). Please report any issues at [GitHub Issues](https://github.com/theexiile1305/kjfw-sta/issues).

## Tech Stack

| Layer           | Technology                         |
| --------------- | ---------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack) |
| Language        | TypeScript 5                       |
| Styling         | Tailwind CSS 4                     |
| Email           | Resend                             |
| Validation      | Zod 4                              |
| Package Manager | pnpm                               |

## Prerequisites

- Node.js 24+
- pnpm 10+

## Getting Started

**1. Install dependencies**

```bash
pnpm install
```

**2. Configure environment variables**

```bash
cp .env.local.example .env.local
```

| Variable          | Required | Description                                                    |
| ----------------- | -------- | -------------------------------------------------------------- |
| `RESEND_API_KEY`  | Yes      | API key for the contact form email integration                 |
| `INTERN_PASSWORD` | Yes      | Password for the protected member area                         |
| `INTERN_SECRET`   | No       | HMAC secret for session tokens (defaults to `fallback-secret`) |
| `CONTACT_EMAIL_TO`| No       | Receiver mail adress in context of the contact page (Resend)   |

**3. Start the development server**

```bash
pnpm dev
```

The app is available at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start dev server with Turbopack  |
| `pnpm build`        | Create a production build        |
| `pnpm start`        | Start the production server      |
| `pnpm lint`         | Run ESLint                       |
| `pnpm lint:fix`     | Run ESLint with auto-fix         |
| `pnpm format`       | Format all files with Prettier   |
| `pnpm format:check` | Check formatting without writing |

## Project Structure

```
app/                        # Next.js App Router
  [slug]/                   # Dynamic CMS-like pages
  jugendfeuerwehren/        # Youth brigade listing
  jugendfeuerwehr/[slug]/   # Youth brigade detail
  kinderfeuerwehren/        # Children brigade listing
  kinderfeuerwehr/[slug]/   # Children brigade detail
  jugendpokal/              # Youth competition
  termine/                  # Events calendar
  ueber-uns/                # About
  kontakt/                  # Contact form
  informationen-fuer-die-eltern/
  intern/                   # Password-protected member area
    login/
    logout/
    download/[filename]/    # Protected PDF download
  gdpr/
  impressum/

components/
  layout/                   # Header, Footer, MobileMenu, SkipLink
  brigades/                 # BrigadeCard
  home/                     # Homepage sections
  ui/                       # Card, Button, SectionHeading
  seo/                      # JsonLd schema
  contact/                  # ContactForm

lib/
  data/                     # Static data (brigades, events, youth cup)
  constants.ts              # ORG_NAME, BASE_URL, CONTACT, STATS
  intern-auth.ts            # HMAC token helpers
  metadata.ts               # buildMetadata helper

types/                      # TypeScript interfaces
  brigade.ts
  event.ts
```

## Member Area

The `/intern` route is protected by a simple password-based authentication system.

- Login submits the password against `INTERN_PASSWORD` using a timing-safe comparison.
- On success an HttpOnly, `SameSite=Strict` cookie is set for the `/intern` path (7-day expiry, `Secure` in production).
- Session tokens are HMAC-SHA256 digests keyed with `INTERN_SECRET`.
- Protected PDF files are served from the `private-docs/` directory and require a valid session cookie.

## Data

Brigade and event data lives as typed TypeScript arrays under `lib/data/`:

| File                  | Contents                                                           |
| --------------------- | ------------------------------------------------------------------ |
| `youthBrigades.ts`    | 43 Jugendfeuerwehren with fire station address, website, and email |
| `childrenBrigades.ts` | 9 Kinderfeuerwehren with fire station address, website, and email  |
| `events.ts`           | Calendar events                                                    |
| `youthCup.ts`         | Jugendpokal results                                                |

## Security

All responses include the following headers (configured in `next.config.ts`):

- `Strict-Transport-Security` — 2-year HSTS with `preload`
- `Content-Security-Policy` — strict, no external script/style/font sources
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — camera, microphone, and geolocation disabled

## Deployment

The project is deployed on [Vercel](https://vercel.com). A minimal `vercel.json` is included.

Set the three environment variables (`RESEND_API_KEY`, `INTERN_PASSWORD`, `INTERN_SECRET`) in the Vercel project settings before deploying.
