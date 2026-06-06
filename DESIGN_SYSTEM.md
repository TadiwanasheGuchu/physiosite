# Desert-Modern Design System

Sossus Physiotherapy's visual language translates the Namibian landscape into a premium digital experience. Full spec: `stitch/desert_modern_wellness/DESIGN.md`.

## Philosophy

**Warm Minimalism** — generous whitespace that feels like an open horizon, not a void.  
**Kinetic Hospitality** — clinical precision delivered with the sensory comfort of a luxury retreat.

Visual techniques: Glassmorphism · Bento Box Layouts · Material Grain Textures · Golden Hour Lighting

---

## Color Tokens

These are the exact Tailwind color names used across all stitch HTML files. Configure them in `tailwind.config.ts`.

```ts
colors: {
  // Surfaces
  "surface":                    "#f7f9ff",
  "surface-dim":                "#c9dcf3",
  "surface-bright":             "#f7f9ff",
  "surface-container-lowest":   "#ffffff",
  "surface-container-low":      "#edf4ff",
  "surface-container":          "#e3efff",
  "surface-container-high":     "#d9eaff",
  "surface-container-highest":  "#d1e4fb",
  "surface-variant":            "#d1e4fb",
  "surface-tint":               "#a23f00",
  "background":                 "#f7f9ff",

  // On-surfaces
  "on-surface":                 "#091d2e",
  "on-surface-variant":         "#594238",
  "on-background":              "#091d2e",
  "inverse-surface":            "#203243",
  "inverse-on-surface":         "#e8f2ff",

  // Primary — Sossusvlei Copper
  "primary":                    "#9e3d00",
  "on-primary":                 "#ffffff",
  "primary-container":          "#c64f00",
  "on-primary-container":       "#fffbff",
  "inverse-primary":            "#ffb595",
  "primary-fixed":              "#ffdbcd",
  "primary-fixed-dim":          "#ffb595",
  "on-primary-fixed":           "#351000",
  "on-primary-fixed-variant":   "#7c2e00",

  // Secondary — Kalahari Sand
  "secondary":                  "#675d4e",
  "on-secondary":               "#ffffff",
  "secondary-container":        "#efe0cd",
  "on-secondary-container":     "#6d6354",
  "secondary-fixed":            "#efe0cd",
  "secondary-fixed-dim":        "#d2c4b2",
  "on-secondary-fixed":         "#221a0f",
  "on-secondary-fixed-variant": "#4f4538",

  // Tertiary — Granite Grey
  "tertiary":                   "#5c5c5c",
  "on-tertiary":                "#ffffff",
  "tertiary-container":         "#757474",
  "on-tertiary-container":      "#fefcfb",
  "tertiary-fixed":             "#e4e2e2",
  "tertiary-fixed-dim":         "#c8c6c6",
  "on-tertiary-fixed":          "#1b1c1c",
  "on-tertiary-fixed-variant":  "#474747",

  // Outline
  "outline":                    "#8c7166",
  "outline-variant":            "#e0c0b2",

  // Error
  "error":                      "#ba1a1a",
  "on-error":                   "#ffffff",
  "error-container":            "#ffdad6",
  "on-error-container":         "#93000a",
}
```

---

## Typography

Two fonts only. Load from Google Fonts.

```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

| Scale | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `display-lg` | EB Garamond | 64px | 500 | 1.1 | -0.02em |
| `headline-lg` | EB Garamond | 48px | 500 | 1.2 | — |
| `headline-lg-mobile` | EB Garamond | 32px | 500 | 1.2 | — |
| `headline-md` | EB Garamond | 32px | 500 | 1.3 | — |
| `body-lg` | Inter | 18px | 400 | 1.6 | — |
| `body-md` | Inter | 16px | 400 | 1.6 | — |
| `label-md` | Inter | 14px | 600 | 1.2 | 0.05em |

Tailwind fontSize config:
```ts
fontSize: {
  "display-lg":         ["64px",  { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
  "headline-lg":        ["48px",  { lineHeight: "1.2", fontWeight: "500" }],
  "headline-lg-mobile": ["32px",  { lineHeight: "1.2", fontWeight: "500" }],
  "headline-md":        ["32px",  { lineHeight: "1.3", fontWeight: "500" }],
  "body-lg":            ["18px",  { lineHeight: "1.6", fontWeight: "400" }],
  "body-md":            ["16px",  { lineHeight: "1.6", fontWeight: "400" }],
  "label-md":           ["14px",  { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
}
```

---

## Spacing

```ts
spacing: {
  "xs":            "4px",
  "sm":            "12px",
  "base":          "8px",
  "md":            "24px",
  "lg":            "48px",
  "xl":            "80px",
  "gutter":        "24px",
  "container-max": "1280px",
}
```

---

## Border Radius

```ts
borderRadius: {
  DEFAULT: "0.25rem",   // 4px — inputs, small elements
  "lg":    "0.5rem",    // 8px — buttons, inputs (rounded-lg)
  "xl":    "0.75rem",   // 12px — bento cards (rounded-xl)
  "2xl":   "1rem",      // 16px — larger cards, images
  "3xl":   "1.5rem",    // 24px — CTA sections
  "full":  "9999px",    // pills
}
```

---

## Core Components

### Glass Navigation

The floating nav bar. Fixed, full-width, shrinks on scroll.

```tsx
<nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-on-surface/10 shadow-sm transition-all duration-300">
```

Scroll behavior (useEffect + scroll listener): add `py-sm shadow-md`, remove `py-md shadow-sm` after 50px scroll.

### Bento Card

The primary content module.

```tsx
<div className="bento-card bg-white p-lg rounded-xl border border-on-surface/5 relative overflow-hidden">
```

CSS:
```css
.bento-card {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(158, 61, 0, 0.15);
}
```

### Primary Button

```tsx
<button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md active:scale-95">
```

Pill variant (nav CTA):
```tsx
<button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md active:scale-95">
```

### Ghost Button

```tsx
<button className="border border-outline text-on-surface px-lg py-md rounded-lg font-label-md text-label-md hover:bg-secondary-container/20 transition-all">
```

### Grain Texture Overlay

Applied as a fixed `z-[-1]` layer behind page content and inside CTAs.

```css
.grain-texture {
  background-image: url("https://www.transparenttextures.com/patterns/p6.png");
  mix-blend-mode: multiply;
}
```

Usage:
```tsx
<div className="fixed inset-0 pointer-events-none grain-texture opacity-[0.03] z-[-1]" />
```

### Pain Point Pulse (Assess Page)

```css
.pain-point-pulse {
  animation: pulse-copper 2s infinite;
}
@keyframes pulse-copper {
  0%   { transform: scale(1);   opacity: 0.8; }
  50%  { transform: scale(1.5); opacity: 0.3; }
  100% { transform: scale(1);   opacity: 0.8; }
}
```

### Glass Panel

Used on the pain assessment overlay.

```css
.glass-panel {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

### Status Chip

```tsx
// Available
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase">Available</span>

// Booked
<span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md uppercase">Booked</span>
```

---

## Layout Patterns

### Page Container

```tsx
<div className="max-w-container-max mx-auto px-gutter">
```

### Section Spacing

```tsx
<section className="py-xl px-gutter">
```

### Bento Grid (Home — Active Empathy section)

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-md h-auto md:h-[600px]">
  {/* Large: 2×2 */}
  <div className="md:col-span-2 md:row-span-2 bento-card ...">
  {/* Medium: 2×1 */}
  <div className="md:col-span-2 bento-card ...">
  {/* Small: 1×1 */}
  <div className="bento-card ...">
  <div className="bento-card ...">
</div>
```

### Hero Grid

```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center w-full">
  <div className="lg:col-span-7 ...">  {/* Content */}
  <div className="lg:col-span-5 ...">  {/* Image */}
</div>
```

---

## Icons

Uses **Material Symbols Outlined** from Google Fonts CDN.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

```tsx
<span className="material-symbols-outlined">arrow_forward</span>
// Filled variant:
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
```

Common icons used: `arrow_forward` · `login` · `event_available` · `fitness_center` · `orthopedics` · `spa` · `circle`

---

## Atmospheric Effects

### Hero Gradient

```tsx
<div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40" />
```

### Golden Hour Radial Glow

```tsx
<div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
```

### Decorative Blob

```tsx
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded-full blur-3xl opacity-50 z-[-1]" />
```

---

## Body & Selection

```tsx
<body className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
```
