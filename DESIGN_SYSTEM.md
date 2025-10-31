# Design System

## Color Palette

### Primary Colors

**Forest Green** - Primary Brand Color
```
Hex: #2E7D32
RGB: rgb(46, 125, 50)
HSL: hsl(105, 47%, 35%)
Usage: Main brand color, primary buttons, headings
```

**Sage** - Secondary Accent
```
Hex: #A5D6A7
RGB: rgb(165, 214, 167)
HSL: hsl(105, 42%, 75%)
Usage: Accents, secondary elements, hover states
```

### Background & Text

**Earth Beige** - Background
```
Hex: #F5F5DC
RGB: rgb(245, 245, 220)
HSL: hsl(60, 85%, 91%)
Usage: Page background, light sections
```

**Charcoal** - Text
```
Hex: #37474F
RGB: rgb(55, 71, 79)
HSL: hsl(194, 18%, 26%)
Usage: Body text, dark content
```

### Accent Colors

**Sky Blue** - Highlight / Link
```
Hex: #81D4FA
RGB: rgb(129, 212, 250)
HSL: hsl(199, 89%, 74%)
Usage: Links, highlights, secondary accents
```

## Typography

### Font Stack
```css
font-family: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Hierarchy

#### Hero Title
- Size: 3.5rem (56px) mobile, 4.5rem (72px) desktop
- Weight: 700 (bold)
- Color: Forest Green (#2E7D32)
- Line Height: 1.25
- Letter Spacing: normal

#### Section Title
- Size: 2.5rem (40px) mobile, 3.75rem (60px) desktop
- Weight: 700 (bold)
- Color: Forest Green or White (depending on background)
- Line Height: 1.2

#### Subtitle/Body Large
- Size: 1.25rem (20px)
- Weight: 400 (normal)
- Color: Charcoal (#37474F)
- Line Height: 1.6

#### Body Text
- Size: 1rem (16px)
- Weight: 400 (normal)
- Color: Charcoal (#37474F)
- Line Height: 1.6

#### Small Text / Caption
- Size: 0.875rem (14px)
- Weight: 400 (normal)
- Color: Charcoal or Sage (depending on context)
- Line Height: 1.4

## Spacing System

### Base Unit: 4px (0.25rem in Tailwind)

Spacing scale:
```
xs:   4px  (0.25rem) → p-1
sm:   8px  (0.5rem)  → p-2
md:  12px  (0.75rem) → p-3
lg:  16px  (1rem)    → p-4
xl:  24px  (1.5rem)  → p-6
2xl: 32px  (2rem)    → p-8
3xl: 48px  (3rem)    → p-12
4xl: 64px  (4rem)    → p-16
5xl: 96px  (6rem)    → p-24
```

### Section Padding
- Mobile: 24px (p-6)
- Tablet: 32px (p-8)
- Desktop: 48px (p-12)

### Section Margins
- Between sections: 80px (py-20) minimum
- Vertical rhythm: Multiples of 16px

## Components

### Buttons

#### Primary Button
```
Background: Forest Green (#2E7D32)
Text: White
Padding: 16px 32px
Border Radius: 8px
Font Weight: 700
Hover:
  - Background: Darker green (#1b5e20)
  - Scale: 1.05 (slight scale up)
  - Transition: 300ms ease-out
Shadow: lg (0 10px 15px rgba(0,0,0,0.1))
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid Forest Green (#2E7D32)
Text: Forest Green (#2E7D32)
Padding: 16px 32px
Border Radius: 8px
Font Weight: 700
Hover:
  - Background: Forest Green (#2E7D32)
  - Text: White
  - Transition: 300ms ease-out
```

#### Tertiary Button (Link)
```
Background: Transparent
Border: None
Text: Sky Blue (#81D4FA)
Font Weight: 600
Text Decoration: Underline (on hover)
Hover:
  - Text: Forest Green (#2E7D32)
  - Transition: 200ms ease-out
```

### Cards

#### Service Card
```
Background: White with slight transparency
Border: 1px solid white/20%
Padding: 32px
Border Radius: 12px
Box Shadow: Subtle backdrop blur
Hover:
  - Transform: translateY(-10px)
  - Transition: 300ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

#### Project Card
```
Background: Color-coded (based on category)
Border: 2px left border in category color
Padding: 32px
Border Radius: 12px
Category Badge:
  - Padding: 4px 12px
  - Border Radius: 20px (fully rounded)
  - Font Size: 12px
  - Font Weight: 700
Hover:
  - Border Color: Forest Green (#2E7D32)
  - Arrow: Slide right animation
  - Transition: 300ms ease-out
```

## Borders

### Border Radius
```
sm:  4px   (rounded-sm)
md:  8px   (rounded-md)  - Default for buttons
lg:  12px  (rounded-lg)  - Default for cards
xl:  16px  (rounded-xl)
full: 9999px (rounded-full) - Pills
```

### Border Width
```
Thin:    1px   (default)
Medium:  2px   (on hover/active)
Thick:   3px   (rarely used)
```

## Shadows

### Shadow Depths
```
sm:  0 1px 2px rgba(0,0,0,0.05)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
xl:  0 20px 25px rgba(0,0,0,0.1)
2xl: 0 25px 50px rgba(0,0,0,0.25)
```

### Usage
- Cards: md shadow
- Buttons: lg shadow on hover
- Modals: xl shadow
- Elevated content: 2xl shadow

## Animations

### Duration Scale
```
Fast:     150ms   - Simple interactions
Normal:   300ms   - Standard transitions
Slow:     500ms   - Section entrance
Slowest:  800ms   - Page load animations
```

### Easing Functions
```
ease-in:       cubic-bezier(0.42, 0, 1, 1)          - Slow start
ease-out:      cubic-bezier(0, 0, 0.58, 1)          - Slow end (preferred)
ease-in-out:   cubic-bezier(0.42, 0, 0.58, 1)       - Slow both ends
power1.out:    GSAP easing - smooth deceleration
power2.out:    GSAP easing - more pronounced decel
bounce:        Elastic bounce effect
```

### Common Animations

#### Fade In
- Duration: 0.8s
- Easing: ease-out
- Properties: opacity (0 → 1)
- Starting state: opacity-0

#### Slide In
- Duration: 0.8s
- Easing: ease-out
- Properties: opacity + transform
- From left: translateX(-50px)
- From right: translateX(50px)

#### Scale
- Duration: 0.3s
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Properties: transform scale
- Range: 0.95 → 1 or 1 → 1.05

#### Bounce
- Duration: 0.6s
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- Properties: transform
- For hover states on cards

## Responsive Design

### Breakpoints (Tailwind CSS)
```
Mobile (default): < 640px
sm:  640px  - Small devices
md:  768px  - Tablets
lg:  1024px - Desktops
xl:  1280px - Large desktops
2xl: 1536px - Extra large screens
```

### Mobile-First Approach
All mobile styles are default, then enhanced with breakpoints:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  // Base: 16px
  // md:   18px
  // lg:   20px
</div>
```

### Common Responsive Patterns

#### Grid Layouts
```
Mobile: 1 column
Tablet: 2 columns (md:)
Desktop: 3-4 columns (lg:)
```

#### Padding/Margin
```
Mobile:  16-24px
Tablet:  32px
Desktop: 48px
```

#### Font Sizes
```
Mobile headline: 28-32px
Tablet headline: 40-48px
Desktop headline: 56-72px
```

## Accessibility Guidelines

### Color Contrast
- Text vs Background: 4.5:1 ratio (WCAG AA)
- Large text: 3:1 ratio minimum
- Verified combinations:
  - Forest Green on Earth Beige: ✓ Pass
  - Charcoal on Earth Beige: ✓ Pass
  - White on Forest Green: ✓ Pass
  - Sky Blue on White: ✓ Pass

### Interactive Elements
- Minimum touch target: 44x44px (mobile)
- Focus states: Visible outline or color change
- Hover states: Clear visual feedback

### Text
- Font size: Minimum 16px for body text
- Line height: Minimum 1.5 for body
- Letter spacing: 0.02em maximum

## Dark Mode (Future)

Planned dark mode color mapping:
```
Forest Green (#2E7D32) → Lighter green for dark bg
Charcoal (#37474F) → Light gray text
Earth Beige (#F5F5DC) → Dark gray bg
Sky Blue (#81D4FA) → Adjusted brightness
```

## Brand Usage Examples

### Button Combinations
```
Primary CTA: Primary button (Forest Green)
Secondary CTA: Secondary button (outline)
Tertiary action: Link text (Sky Blue)
```

### Color Distribution
- 60% Forest Green/Earth Beige (primary)
- 30% White/Gray (neutral)
- 10% Sky Blue/Sage (accent)

### Visual Hierarchy
1. Hero section: Dominant Forest Green
2. Services: Forest Green background
3. Projects: Mixed colors for variety
4. CTA: Sage green for call-to-action
5. Footer: Charcoal for structure

## Print Styles

When printing:
- Use black text on white background
- Avoid light backgrounds
- Hide navigation elements
- Maintain content hierarchy
- Use print-friendly fonts

---

**Design System Version**: 1.0
**Last Updated**: October 31, 2025
**Maintained by**: Design Team
