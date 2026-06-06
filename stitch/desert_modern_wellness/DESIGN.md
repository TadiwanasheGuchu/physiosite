---
name: Desert-Modern Wellness
colors:
  surface: '#f7f9ff'
  surface-dim: '#c9dcf3'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d9eaff'
  surface-container-highest: '#d1e4fb'
  on-surface: '#091d2e'
  on-surface-variant: '#594238'
  inverse-surface: '#203243'
  inverse-on-surface: '#e8f2ff'
  outline: '#8c7166'
  outline-variant: '#e0c0b2'
  surface-tint: '#a23f00'
  primary: '#9e3d00'
  on-primary: '#ffffff'
  primary-container: '#c64f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb595'
  secondary: '#675d4e'
  on-secondary: '#ffffff'
  secondary-container: '#efe0cd'
  on-secondary-container: '#6d6354'
  tertiary: '#5c5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#757474'
  on-tertiary-container: '#fefcfb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb595'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#efe0cd'
  secondary-fixed-dim: '#d2c4b2'
  on-secondary-fixed: '#221a0f'
  on-secondary-fixed-variant: '#4f4538'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#f7f9ff'
  on-background: '#091d2e'
  surface-variant: '#d1e4fb'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system translates the raw, cinematic beauty of the Namibian landscape into a premium digital experience for high-end physiotherapy. The aesthetic follows a **Warm Minimalism** philosophy, rejecting sterile clinical tropes in favor of **Kinetic Hospitality**. It balances the authoritative precision of medical expertise with the sensory richness of a luxury retreat.

The visual language utilizes a "Desert-Modern" approach:
- **Warm Minimalism:** Large, intentional breathing room (whitespace) that feels like an open horizon rather than a void.
- **Glassmorphism:** Navigation and overlays utilize soft backdrop blurs to simulate heat haze and light diffusion.
- **Bento Box Layouts:** Content is organized into modular, rounded containers that provide a sense of grounded structure and easy scannability.
- **Material Textures:** Subtle grain and organic patterns inspired by sandstone and raw linen are applied to surface backgrounds to add tactile depth.

## Colors

The palette is derived from the natural chromatics of the Sossusvlei dunes and the Central Plateau. 

- **Sossusvlei Copper (#D35400):** Our primary action color. It represents energy, blood flow, and the warmth of the sun. Used for CTAs and critical focus points.
- **Kalahari Sand (#F5E6D3):** The primary surface color. It replaces standard clinical white to provide a soothing, low-strain background that feels premium and organic.
- **Granite Grey (#4A4A4A):** Used for secondary text and borders, offering a softer alternative to pure black for better readability against sand backgrounds.
- **Deep Slate (#2C3E50):** The anchor color. Used for primary typography and high-contrast UI elements to convey stability, trust, and professional rigor.

## Typography

The typography strategy pairs classical prestige with modern functionalism. 

**EB Garamond** (used as a proxy for Cormorant Garamond) provides an editorial, high-touch feel for all display and heading roles. It should be typeset with generous leading to evoke a sense of calm and luxury.

**Inter** handles all utilitarian tasks. Its neutral, systematic nature ensures that medical information, exercises, and scheduling data are communicated with clinical clarity. Label styles should use increased letter-spacing and uppercase styling to denote "Precision Labels" for anatomical or technical terms.

## Layout & Spacing

The layout utilizes a **Bento Box Grid** system that organizes content into distinct, functional modules. 

- **Grid:** A 12-column fluid grid for desktop with 24px gutters. On mobile, this collapses to a single column with 16px side margins.
- **Bento Modules:** Content blocks should have varying spans (e.g., a 2x2 grid where one block spans 8 columns and two others span 4). This creates a rhythmic, masonry-like feel.
- **Rhythm:** Use "Golden Hour" spacing—generous top and bottom padding (80px+) on sections to ensure the UI feels unhurried and expansive.
- **Mobile:** Elements within Bento boxes should stack vertically, maintaining the same internal padding (24px) to preserve the "contained" feel.

## Elevation & Depth

Depth in the design system is achieved through light and material rather than traditional drop shadows.

- **Glassmorphic Navigation:** The primary navigation bar is a "Floating Horizon" element—a semi-transparent Kalahari Sand surface with a 20px backdrop blur, anchored with a 1px border of 10% Deep Slate.
- **Tonal Layering:** Depth is communicated by placing slightly darker or lighter shades of Sand within Bento containers. 
- **Golden Hour Lighting:** Use subtle radial gradients (Primary Copper at 5% opacity) in the corners of sections to simulate the warmth of Namibian sunlight hitting the page.
- **Soft Inner Glows:** Instead of outer shadows, use subtle inner highlights on buttons to give them a "honed stone" appearance.

## Shapes

The shape language is inspired by weathered stone—solid but smoothed by time.

- **Bento Containers:** Use `rounded-lg` (16px) for all primary content modules to soften the layout.
- **Interactive Elements:** Buttons and input fields use `rounded-md` (8px) for a more precise, professional feel compared to the larger containers.
- **Media:** Photography of the clinic or anatomical diagrams should follow the Bento container's 16px radius to maintain the modular harmony.

## Components

- **Buttons:** Primary buttons are solid Sossusvlei Copper with White or Kalahari Sand text. Secondary buttons are "Ghost" style with a Deep Slate border and no fill. All buttons feature a 300ms transition on hover, deepening the copper saturation.
- **Bento Cards:** The core component. Each card has a subtle 1px border (#4A4A4A at 10% opacity) and a background of Kalahari Sand. They should house a mix of iconography, Serif headlines, and Sans-serif body text.
- **Input Fields:** Minimalist design with only a bottom border in Deep Slate. When focused, a 2px Sossusvlei Copper underline animates from the center.
- **Floating Navigation:** A pill-shaped or full-width blur-bar that sits at the top of the viewport. Icons within the nav use Deep Slate for a grounded, legible look.
- **Status Chips:** Small, rounded-pill indicators for "Available" or "Booked" status. Use Sossusvlei Copper for high-energy indicators and Deep Slate for neutral information.
- **Material Textures:** Apply a faint SVG noise filter to the main Kalahari Sand background to mimic the grain of desert dunes and linen fabrics.