# Agent Context - LBYA Website

## Project Overview
This is a Next.js 15 website for LBYA AB, a sustainable engineering and architecture firm. The site features a modern, minimalist design with a focus on environmental sustainability and green design principles.

## Key Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.13.0 (Core + ScrollTrigger)
- **Fonts**: 
  - Ruslan Display (for LBYA branding)
  - Inter (body text)
- **i18n**: Custom implementation supporting EN, FR, SV

## Design System

### Colors
- **Primary Green**: `#2E7D32` - Used for CTAs, highlights, hero sections
- **Dark Grey**: `#37474F` - Used for footer, sidebar, text
- **Light Beige**: `#F5F5DC` - Background color, card backgrounds
- **Light Green**: `#A5D6A7` - Hover states, accent color
- **Darker Green**: `#1B5E20` - Button hover states

### Typography
- **Brand Font**: Ruslan Display - Used exclusively for "LBYA" text across the site
- **Body Font**: Inter (weights: 300-800)
- **Font Usage Rule**: ALL instances of "LBYA" must use `style={{ fontFamily: "'Ruslan Display', serif" }}`

### Logo System
- **logoA.svg**: Used in navbar (top bar), footer, with white filter (`invert(1) brightness(2)`)
- **logoB.svg**: Used in sidebar (rotated 90°) with white filter
- **logoC.svg**: Alternative logo variant

## Site Structure

### Pages
1. **Home** (`/`) - Hero, Services, Insights, Projects, CTA
2. **About** (`/about`) - Company info, mission, team
3. **Insights** (`/insights`) - Blog/articles listing with LBYA animation
4. **Careers** (`/careers`) - Job listings with Insights-style hero
5. **Contact** (`/contact`) - Contact form and information
6. **Privacy** (`/privacy`) - GDPR-compliant privacy policy

### Navigation Structure
- **Top Bar** (fixed): Green background (`#2E7D32`), language selector (left), logo + LBYA label (center), mobile menu (right)
- **Desktop Sidebar** (right): Grey background (`#37474F`), hamburger menu (top), rotated logoB (bottom)
- **Slide-out Menu**: Grey background, appears from right on desktop

### Key Components

#### Navbar (`/src/app/components/Navbar.tsx`)
- Top bar: Green with white text, language selector
- Sidebar: Grey, 80px wide, fixed right
- Logo: logoA with white filter in top bar
- LBYA label: Ruslan Display font, scales on scroll
- Menu items: Services, Projects, About, Insights, Careers, Contact

#### Footer (`/src/app/components/Footer.tsx`)
- 4-column grid: Logo + "LBYA AB" | "LBYA" (company links) | "OUR SOLUTIONS" | "CONTACT"
- All column text: UPPERCASE
- Logo: logoA with white filter
- Bottom section: Copyright with inline links (Data Privacy, Cookie Policy, etc.)
- LBYA instances: Use Ruslan Display font with `fontSize: '1.3em'` in copyright

#### HeroSection (`/src/app/components/HeroSection.tsx`)
- Green gradient overlay on background image
- Title: "Rooted in Nature, Built for the Future" (both parts bold)
- Two CTA buttons with animations

#### CookieConsent (`/src/app/components/CookieConsent.tsx`)
- GDPR-compliant modal popup
- Granular controls: Essential, Functional, Analytics, Marketing
- Green accent colors, backdrop blur
- Appears 1s after first visit

## Page-Specific Details

### Insights Page
- Green hero section (matching main hero style)
- White "Latest Articles" card on green background
- LBYA scroll animation at bottom (beige background, text reveals on scroll)
- Newsletter "Stay Updated" card with float-in animation

### Careers Page
- Green hero with Ruslan Display font for LBYA
- Zigzag card layout (mt-0, mt-12, mt-6)
- "Why Work With Us" cards with green icons
- Chart-like growth animation on scroll (GSAP)
- Green "Open Positions" section with white icon

### Projects Section
- Green background (`#2E7D32`)
- Three projects: Kinshasa, Stockholm, Cape Town
- Zigzag layout alternating image sides
- No "View Project" button
- Unsplash images configured in `next.config.ts`

### Services Section
- White background
- Title: "Shaping the future"
- 4 cards: Sustainable Architecture, Structural Engineering, BIM-Based Workflow, IT Services
- Card titles: `font-medium` (medium bold)
- Image overlays with green gradients

## Animation Patterns

### GSAP Usage
1. **Page Transitions**: Template-based with opacity + x offset
2. **Scroll Triggers**: Used for cards, text reveals, LBYA animation
3. **Newsletter Card**: Float-in (y: 100) + expand (scale: 1.03)
4. **Careers Cards**: Growth from bottom (scaleY: 0 to 1, transformOrigin: 'bottom')

### Common Animation Settings
- Duration: 0.8-1.2s
- Easing: 'power3.out' or 'power2.out'
- Trigger: 'top 80-85%'
- Stagger: 0.1s for multiple elements

## Internationalization

### Supported Languages
- English (EN) - Default
- French (FR)
- Swedish (SV)

### Translation Structure
Located in `/src/app/i18n/translations.ts`:
- `navbar`: Navigation links
- `hero`: Homepage hero text
- `services`: Services section content
- `projects`: Project cards
- `cta`: Call-to-action buttons
- `footer`: Footer links and copyright

### Language Selector
- Global icon dropdown in top navbar
- Shows full language names: "English (Global)", "Français", "Svenska"

## Important Rules & Conventions

1. **LBYA Font Rule**: ALWAYS use Ruslan Display for "LBYA" text
2. **Color Consistency**: Use defined color palette, no arbitrary colors
3. **Animation Performance**: Use GSAP context cleanup (`ctx.revert()`)
4. **Responsive Design**: Mobile-first, test at breakpoints (md, lg)
5. **Accessibility**: Include aria-labels, alt text, proper semantic HTML
6. **Image Optimization**: Use Next.js Image component, configure remote patterns
7. **Code Style**: Use Tailwind utilities, minimal inline styles except for fonts

## File Structure
```
src/app/
├── components/
│   ├── Navbar.tsx (topbar + sidebar)
│   ├── Footer.tsx (4-column layout)
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── CTASection.tsx
│   ├── CookieConsent.tsx
│   └── TransitionLink.tsx
├── context/
│   ├── ThemeContext.tsx
│   └── TransitionContext.tsx
├── i18n/
│   ├── I18nContext.tsx
│   └── translations.ts
├── about/page.tsx
├── careers/page.tsx
├── contact/page.tsx
├── insights/page.tsx
├── privacy/page.tsx
├── layout.tsx
├── page.tsx (home)
└── globals.css
```

## Development Notes

### Recent Changes
- Updated navbar: Green top bar, grey sidebar
- Footer: 4-column layout, uppercase text, LBYA font applied
- Cookie consent: GDPR-compliant with granular controls
- Privacy page: Created with Insights-style hero
- Projects: Updated to Kinshasa, Stockholm, Cape Town
- Services: Changed to "Shaping the future", medium bold titles

### Common Tasks
- **Add new page**: Create in `src/app/[page]/page.tsx`, add to navbar/footer
- **Update translations**: Edit `src/app/i18n/translations.ts`
- **Modify colors**: Use existing palette, update Tailwind classes
- **Add animations**: Use GSAP with ScrollTrigger, include cleanup
- **Update fonts**: Ensure LBYA uses Ruslan Display

## External Resources
- Unsplash images: Configured in `next.config.ts`
- LinkedIn: https://www.linkedin.com/company/lbya/about/?viewAsMember=true
- Google Fonts: Ruslan Display loaded in layout.tsx

## Known Issues & Considerations
- Cookie consent uses localStorage (client-side only)
- Page transitions may need adjustment for slower connections
- GSAP animations require `typeof window !== 'undefined'` checks
- Navbar language selector limited to 3 languages for clean UI
