# Sossus Physiotherapy — Project Overview

## What This Is

A premium physiotherapy practice website for **Sossus Physiotherapy**, a Namibian clinic based in Windhoek. The brand identity is "Desert-Modern" — a fusion of Namibian warmth (Sossusvlei dunes, Kalahari sand, copper tones) with clinical precision and luxury hospitality.

The site serves three user types:
1. **Public visitors** — marketing, booking, pain assessment
2. **Patients** — portal login, dashboard, recovery hub
3. **Clinic admins** — clinic overview, treatment plan builder

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.7 (App Router) |
| Runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Material Symbols Outlined (Google CDN) + Lucide React |
| Forms | React Hook Form |
| Email | Resend |

**Important:** This is Next.js 16 — APIs and conventions differ from Next.js 13/14. Read `node_modules/next/dist/docs/` before writing routing or data-fetching code.

## Site Map & Routes

### Public Pages
| Route | Page | Source Design |
|---|---|---|
| `/` | Home | `stitch/home_sossus_physiotherapy/` |
| `/services` | Specialized Services | `stitch/specialized_services/` |
| `/about` | Our Story | `stitch/our_story_sossus_physiotherapy/` |
| `/contact` | Clinics & Contact | `stitch/clinics_contact/` |
| `/contact/sent` | Message Sent confirmation | `stitch/message_sent_sossus_physiotherapy/` |
| `/assess` | Assess Your Pain (multi-step tool) | `stitch/assess_your_pain/` |
| `/book` | Book a Consultation | `stitch/book_a_consultation/` |
| `/book/guest` | Guest Booking (no login) | `stitch/guest_booking/` |
| `/book/confirmed` | Booking Confirmed | `stitch/booking_confirmed_sossus_physiotherapy/` |

### Auth & Portal
| Route | Page | Source Design |
|---|---|---|
| `/portal/sign-in` | Patient Portal Sign In | `stitch/patient_portal_sign_in/` |
| `/portal/dashboard` | Patient Dashboard — Recovery Hub | `stitch/patient_dashboard_recovery_hub/screen.png` |

### Admin
| Route | Page | Source Design |
|---|---|---|
| `/admin` | Clinic Overview Dashboard | `stitch/admin_dashboard_clinic_overview/screen.png` |
| `/admin/treatment-plans` | Treatment Plan Builder | `stitch/admin_treatment_plan_builder/screen.png` |

### Utility
| Route | Page | Source Design |
|---|---|---|
| `/legal` | Privacy Policy & Terms of Service | `stitch/privacy_policy_terms_of_service/` |
| `not-found.tsx` | 404 Page | `stitch/page_not_found_sossus_physiotherapy/` |

## Navigation

Primary nav links (from all pages): **Home · Services · Assess Pain · Book Now · Patient Portal**

The nav is glassmorphic — `backdrop-blur-xl bg-surface/80` — and shrinks on scroll (py-md → py-sm).

## Key Features

### Assess Your Pain
Multi-step interactive tool. The design shows animated "pain point" markers on a body diagram with a pulsing copper animation (`pain-point-pulse` keyframe). Steps transition with a 500ms cubic-bezier ease.

### Booking Flow
Two paths:
- **Authenticated** → `/book` (patient already logged in)
- **Guest** → `/book/guest` (no account required, collects name/email/phone)

Both end at `/book/confirmed`.

### Contact / Enquiry
Form sends via **Resend**. On success redirects to `/contact/sent`.

### Patient Portal
Authentication-gated. Currently design-only (PNG screens) for dashboard. Sign-in page has full HTML design.

### Admin Section
Design-only (PNG screens). Will need role-based access control before implementation.

## Project File Structure (target)

```
src/
  app/
    layout.tsx                  # Root layout — nav + footer
    page.tsx                    # /
    services/page.tsx
    about/page.tsx
    contact/
      page.tsx
      sent/page.tsx
    assess/page.tsx
    book/
      page.tsx
      guest/page.tsx
      confirmed/page.tsx
    portal/
      sign-in/page.tsx
      dashboard/page.tsx
    admin/
      page.tsx
      treatment-plans/page.tsx
    legal/page.tsx
    not-found.tsx
  components/
    layout/
      Nav.tsx
      Footer.tsx
    ui/
      BentoCard.tsx
      Button.tsx
      GlassPanel.tsx
      StatusChip.tsx
    forms/
      BookingForm.tsx
      ContactForm.tsx
      GuestBookingForm.tsx
      PainAssessment.tsx
```

## Design Sources

Each stitch folder contains:
- `screen.png` — Visual reference screenshot
- `code.html` — Full Tailwind HTML prototype (use as implementation guide)

The design system spec lives in `stitch/desert_modern_wellness/DESIGN.md`.

## Stitch Screens with PNG Only (no HTML)
These need to be hand-implemented from the screenshot:
- `stitch/patient_dashboard_recovery_hub/screen.png`
- `stitch/admin_dashboard_clinic_overview/screen.png`
- `stitch/admin_treatment_plan_builder/screen.png`
