# Component Documentation

## Navbar Component

### Props
```typescript
interface NavbarProps {
  currentLang: 'EN' | 'FR' | 'SV';
  onLanguageChange: (lang: 'EN' | 'FR' | 'SV') => void;
}
```

### Features
- **Responsive Navigation**: Side navbar on desktop, hamburger menu on mobile
- **Language Selection**: Dropdown with EN, FR, SV options
- **Logo**: Positioned at bottom of navbar
- **Menu Animation**: Smooth slide-in/out animation using GSAP
- **Active Language Indicator**: Current language highlighted in dropdown

### Customization
```tsx
// Add or modify menu items in the menuItems array
const menuItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  // Add more items here
];
```

## Logo Component

### Props
```typescript
interface LogoProps {
  variant?: 'dark' | 'light';    // default: 'dark'
  size?: 'sm' | 'md' | 'lg';     // default: 'md'
}
```

### Sizes
- **sm**: 32x32px
- **md**: 48x48px
- **lg**: 64x64px

### Example Usage
```tsx
<Logo variant="light" size="lg" />
```

## HeroSection Component

### Features
- **Full-screen landing area** with engaging messaging
- **Animated title and subtitle** that fade in on load
- **CTA buttons** with scale animations on hover
- **Animated background** with diagonal grid pattern
- **Floating blob elements** for visual interest
- **Scroll indicator** at bottom with bounce animation

### Animation Details
- Title: 0.8s fade-in with 50px Y offset
- Subtitle: 0.8s fade-in with 0.2s delay
- CTA buttons: 0.8s fade-in with 0.4s delay
- Background blobs: 7s continuous animation

## ServicesSection Component

### Features
- **4-item service grid** (responsive to 2 columns on mobile)
- **Service cards** with icon, title, and description
- **Hover animations**: Cards lift up 10px with smooth transition
- **Scroll-triggered animations**: Staggered entrance with ScrollTrigger
- **Gradient background**: Forest green with angled bottom edge

### Service Data Structure
```typescript
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Unicode emoji or SVG
}
```

### Adding Services
```tsx
const services: Service[] = [
  {
    id: 1,
    title: 'New Service',
    description: 'Service description',
    icon: '🎯',
  },
  // Add more services
];
```

## ProjectsSection Component

### Features
- **Split layout**: Description on left, projects on right
- **Project cards** with category badges
- **Color-coded categories** (Sky Blue, Sage)
- **Hover effects**: Arrow animation and border highlight
- **Scroll-triggered animations**: Staggered slide-in from right

### Project Data Structure
```typescript
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string; // Hex color code
}
```

### Adding Projects
```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    description: 'Project description',
    color: '#81D4FA',
  },
  // Add more projects
];
```

## CTASection Component

### Features
- **Call-to-action messaging** with primary and secondary buttons
- **Statistics display**: 3 columns showing key metrics
- **Animated background grid** pattern
- **Sage green background** with angled bottom edge
- **Dual CTA buttons**: Primary (filled) and secondary (outline)

### Statistics
Currently displays:
- 500+ Projects Completed
- 25+ Years Experience
- 50+ Global Teams

Customize by modifying the JSX directly.

## ProjectsSection Component

### Layout
- **50/50 split** on desktop
- **Stacked** on mobile (description top, projects bottom)
- **Responsive grid** adapts to screen size

### Interactions
- Click any project card to trigger hover animation
- Projects slide in from right on page load
- Smooth transitions on all interactive elements

## Footer Component

### Sections
1. **Company Info**: Logo and brand description
2. **Services**: Quick links to main services
3. **Company**: About, Projects, Careers, News links
4. **Contact**: Email, phone, address

### Customization
Update the links, phone numbers, and addresses directly in the component:
```tsx
<a href="mailto:your-email@company.com">your-email@company.com</a>
<a href="tel:+yourcountrycode">+1 (234) 567-890</a>
```

## Animation Utilities

### Global Animations (in globals.css)

#### Keyframe Animations
- `fadeInUp`: Opacity + Y-axis translation
- `slideInLeft`: Opacity + X-axis translation
- `slideInRight`: Opacity + X-axis translation from right
- `pulse-glow`: Pulsing box-shadow effect
- `blob`: Organic floating motion
- `float`: Subtle up-down movement

#### CSS Classes
- `.animate-in-up`: Applies fadeInUp animation
- `.animate-in-left`: Applies slideInLeft animation
- `.animate-in-right`: Applies slideInRight animation
- `.pulse-glow`: Applies pulsing effect
- `.animate-blob`: Applies blob animation
- `.stagger-1` through `.stagger-5`: Staggered animation delays

### GSAP Usage Pattern
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate on scroll
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  return () => ctx.revert();
}, []);
```

## Responsive Breakpoints

Tailwind CSS breakpoints used:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile-First Strategy
- Mobile styles are default
- Tablet styles at `md:` breakpoint
- Desktop styles at `lg:` breakpoint

## Accessibility Features

### Implemented
- Semantic HTML elements
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast (WCAG AA compliant)
- Focus states on interactive elements
- Proper heading hierarchy

### Best Practices
- Use meaningful link text
- Include alt text for images
- Ensure keyboard navigation works throughout
- Test with screen readers

## Performance Tips

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Components lazy-load automatically
3. **CSS Optimization**: Tailwind CSS purges unused styles
4. **Animation Performance**: GSAP is GPU-accelerated
5. **Bundle Size**: Monitor with `npm run build`

## Common Customizations

### Change Primary Color
1. Update `--forest-green` in `globals.css`
2. Find and replace `#2E7D32` in component className attributes
3. Update button backgrounds and borders

### Modify Navbar Width
```tsx
// In Navbar.tsx, change lg:w-64 to desired width
className="... lg:w-96 ..."  // increased from 16rem to 24rem
```

### Add Dark Mode
Create a `dark:` variant styling approach or implement theme provider:
```tsx
// In layout.tsx or within theme provider
<html lang="en" className={isDarkMode ? 'dark' : ''}>
```

## Troubleshooting

### Animations Not Playing
- Ensure GSAP is properly imported
- Check if ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Verify refs are properly attached to DOM elements

### Responsive Issues
- Check Tailwind breakpoint names (sm, md, lg, xl, 2xl)
- Ensure mobile styles work without breakpoint prefix
- Test with browser dev tools

### Navigation Not Working
- Verify href attributes match section IDs
- Check z-index stacking order for overlays
- Ensure onClick handlers are properly attached

---

For more information, see DESIGN.md
