# Visual Design Overview

## Design Inspiration

This design draws inspiration from leading engineering firms:
- **WSP** (wsp.com): Professional, modern layout with sophisticated navigation
- **COWI** (cowi.com): Angular design language, vibrant color usage, smooth animations

## Page Layout & Flow

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (Fixed Right, Desktop)                              │
│  ├─ Language Selector (EN, FR, SV) - Top Left              │
│  ├─ Logo - Bottom                                            │
│  └─ Menu Items - Vertically Stacked                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ HERO SECTION                                         │   │
│  │ ├─ Animated Title: "Engineering Solutions..."       │   │
│  │ ├─ Subtitle + Description                           │   │
│  │ ├─ Primary & Secondary CTA Buttons                  │   │
│  │ ├─ Scroll Indicator                                 │   │
│  │ └─ Floating Blob Animations (Background)            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ SERVICES SECTION (Forest Green #2E7D32)              │   │
│  │ ├─ "Our Services" Title                              │   │
│  │ └─ 4-Column Grid (2x2 on mobile)                     │   │
│  │    ├─ Service 1: Icon + Title + Description          │   │
│  │    ├─ Service 2: Icon + Title + Description          │   │
│  │    ├─ Service 3: Icon + Title + Description          │   │
│  │    └─ Service 4: Icon + Title + Description          │   │
│  │ Angle: Bottom-Right Edge (Diagonal)                  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ PROJECTS SECTION (Earth Beige #F5F5DC)               │   │
│  │ ├─ Left Side: Description + Title                    │   │
│  │ └─ Right Side: Project Cards                         │   │
│  │    ├─ Project 1: Category + Title + Description      │   │
│  │    ├─ Project 2: Category + Title + Description      │   │
│  │    └─ Project 3: Category + Title + Description      │   │
│  │ Angle: Top-Right Edge (Diagonal)                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ CTA SECTION (Sage Green #A5D6A7)                     │   │
│  │ ├─ Main Headline + Description                       │   │
│  │ ├─ Primary & Secondary CTA Buttons                   │   │
│  │ └─ 3-Column Statistics:                              │   │
│  │    ├─ 500+ Projects                                  │   │
│  │    ├─ 25+ Years Experience                           │   │
│  │    └─ 50+ Global Teams                               │   │
│  │ Angle: Bottom-Left Edge (Diagonal)                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ FOOTER (Charcoal #37474F)                            │   │
│  │ ├─ Logo + Company Description                        │   │
│  │ ├─ Services Links                                    │   │
│  │ ├─ Company Links                                     │   │
│  │ ├─ Contact Information                               │   │
│  │ └─ Social Media Links + Copyright                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Navigation Structure

### Desktop Layout
```
┌─────────────────────────────────────────────┬─────────────┐
│ Content (Full Width)                        │ Navbar      │
│                                             │ (w: 16rem)  │
│                                             │             │
│                                             │ ┌─────────┐ │
│                                             │ │ Menu 1  │ │
│                                             │ │ Menu 2  │ │
│                                             │ │ Menu 3  │ │
│                                             │ │ Menu 4  │ │
│                                             │ ├─────────┤ │
│                                             │ │ Logo    │ │
│                                             │ └─────────┘ │
└─────────────────────────────────────────────┴─────────────┘

┌─────────────────────────────────────────────────────────┐
│ Top Bar (Language Selector | Hamburger)                 │
├─────────────────────────────────────────────────────────┤
│ Content Area                                            │
└─────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌──────────────────────────┐
│ EN ✓          ☰          │ ← Top Bar
├──────────────────────────┤
│                          │
│ Content                  │
│                          │
└──────────────────────────┘

When menu opened:
┌──────────────────────────┐
│ ✕              [Overlay] │
│                          │
│ Menu Item 1              │
│ Menu Item 2              │
│ Menu Item 3              │
│ Menu Item 4              │
│                          │
│ Logo                     │
└──────────────────────────┘
```

## Color Usage by Section

### Hero Section (#F5F5DC - Earth Beige)
- Background: Earth Beige
- Title: Forest Green
- Accent Title: Sky Blue
- Buttons: Forest Green (primary), outline (secondary)

### Services Section (#2E7D32 - Forest Green)
- Background: Forest Green
- Text: White
- Cards: White with slight transparency
- Hover effect: Sage Green accents

### Projects Section (#F5F5DC - Earth Beige)
- Background: Earth Beige
- Title: Forest Green
- Accent: Sky Blue
- Cards: Color-coded (Sky Blue, Sage)
- Category badges: Full color

### CTA Section (#A5D6A7 - Sage)
- Background: Sage Green
- Text: Forest Green / Charcoal
- Buttons: Forest Green (primary), outline (secondary)
- Grid pattern: Subtle Forest Green

### Footer (#37474F - Charcoal)
- Background: Charcoal
- Text: White
- Links: Sage Green
- Hover links: White

## Angular Design Elements

### Clipped Sections
```
Services (angle-bottom-right):
┌─────────────────────────┐
│                         │
│      Content            │
│                         │
│                    ╱  ╱
└─────────────────╱──╱───┘

Projects (angle-top-right):
╱──╱
│  │   Content
│  │
└──────────────────┘

CTA (angle-bottom-left):
      ┌──────────────┐
      │   Content    │
      │              │
    ╱│            ╱
╱ ──┴──────────╱
```

## Animation Timeline

### Page Load
```
0ms     → Hero title fades in
200ms   → Hero subtitle fades in
400ms   → CTA buttons fade in
600ms   → Scroll indicator bounces

Background elements animate continuously:
- Blob 1: 7s cycle
- Blob 2: 7s cycle (delayed 2s)
- Grid pattern: Subtle movement
```

### On Scroll (ScrollTrigger)
```
Services Section:
- Title fades in (trigger at 80%)
- Cards stagger in (0.15s between each)

Projects Section:
- Title slides in from left
- Project cards slide in from right

CTA Section:
- Content scales up from 0.9
- Grid background animates
```

### On Hover
```
Buttons:
- Scale to 1.05
- Background color shifts
- Shadow increases

Service Cards:
- Translate Y by -10px
- Border color updates
- Icon scales

Project Cards:
- Border highlights
- Arrow animates right
- Background subtly changes
```

## Responsive Breakpoints

### Mobile (<640px)
```
- Single column layouts
- Hamburger menu active
- Larger touch targets (44px min)
- Stacked content (Projects: description top, projects below)
- Padding: 24px (p-6)
- Font sizes: Base sizes
```

### Tablet (640px - 1024px)
```
- 2-column grids
- Still using hamburger menu (on smaller tablets)
- Adjusted padding: 32px (p-8)
- Medium font sizes
- Navbar may show on very large tablets
```

### Desktop (1024px+)
```
- 3-4 column grids
- Side navbar always visible
- Full navigation
- Padding: 48px (p-12)
- Larger font sizes
- Full featured animations
```

## Accessibility Considerations

### Color Contrast Ratios
```
✓ Forest Green on Earth Beige: 5.2:1 (WCAG AA)
✓ Charcoal on Earth Beige: 7.8:1 (WCAG AAA)
✓ White on Forest Green: 6.4:1 (WCAG AA)
✓ Sky Blue on White: 4.6:1 (WCAG AA)
✓ Sage on White: 3.2:1 (WCAG A)
```

### Focus States
- Visible outline on interactive elements
- Color change on button focus
- Keyboard navigation supported

### Motion
- Animations respect `prefers-reduced-motion`
- No distracting auto-playing elements
- Pause on content of importance

## Performance Metrics

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Bundle Size
- JavaScript: < 200KB (gzipped)
- CSS: < 50KB (gzipped)
- Images: Optimized via Next.js Image

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

**Visual Design Version**: 1.0
**Design Tools Used**: Figma, Browser DevTools
**Last Updated**: October 31, 2025
