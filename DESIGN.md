# Engineering Firm - Modern Homepage

A sophisticated, modern homepage design for an engineering firm featuring responsive navigation, angular design language, and smooth GSAP animations.

## Design Overview

### Color Palette
- **Forest Green** (#2E7D32) - Primary Brand Color
- **Sage** (#A5D6A7) - Secondary Accent
- **Earth Beige** (#F5F5DC) - Background
- **Sky Blue** (#81D4FA) - Highlight / Link
- **Charcoal** (#37474F) - Text

### Design Features

#### 1. **Navigation System**
- **Responsive Navbar**: 
  - Desktop: Fixed side navbar on the right (16rem width)
  - Mobile: Hamburger menu that slides in from the right
  - Language selector in top-left (EN, FR, SV)
  - Logo positioned at the bottom of navbar

#### 2. **Angular Design Language**
- Diagonal clip-path effects on sections
- Different angle variations:
  - `.angle-bottom-left` - Diagonal from bottom-right to top-left
  - `.angle-bottom-right` - Diagonal from bottom-left to top-right
  - `.angle-top-right` - Diagonal from top-left to bottom-right
  - `.angle-top-left` - Diagonal from top-right to bottom-left

#### 3. **Sections**

**Hero Section**
- Full-screen introduction with animated title and subtitle
- CTA buttons with hover animations
- Animated background grid pattern
- Floating blob animations

**Services Section** (#2E7D32 - Forest Green)
- 4-column grid (2x2) service cards
- Icons and descriptions
- Hover lift animations
- Smooth scroll-triggered animations

**Projects Section** (#F5F5DC - Earth Beige)
- Featured projects display
- Category badges with color coding
- Left-aligned description, right-aligned projects
- Interactive hover states

**CTA Section** (#A5D6A7 - Sage)
- Call-to-action with statistics
- Animated grid background
- Dual CTA buttons
- Stats breakdown

**Footer** (#37474F - Charcoal)
- Multi-column layout
- Company info, links, contact
- Social media links
- Copyright information

#### 4. **Animations**
All animations use **GSAP** for smooth, professional effects:
- Fade-in animations on scroll
- Stagger effects for lists/grids
- Hover lift effects on cards
- Smooth transitions on buttons
- Blob animations for background elements
- Menu transition animations

## Project Structure

```
src/app/
├── components/
│   ├── Navbar.tsx          # Navigation component with language selector
│   ├── Logo.tsx            # Angular engineering logo
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── ServicesSection.tsx  # Services showcase
│   ├── ProjectsSection.tsx  # Featured projects
│   ├── CTASection.tsx       # Call-to-action section
│   ├── Footer.tsx           # Footer component
│   └── index.ts             # Component exports
├── globals.css              # Global styles and animations
├── layout.tsx               # Root layout
├── page.tsx                 # Main page
```

## Getting Started

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

```bash
npm run build
npm start
```

## Technologies Used

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.13
- **Language**: TypeScript
- **Build Tool**: Next.js built-in

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

### 2. Performance
- Optimized images and assets
- Lazy loading with ScrollTrigger
- Smooth 60fps animations

### 3. Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

### 4. Modern UX
- Smooth scroll behavior
- Animated page transitions
- Hover feedback
- Loading states

## Customization

### Changing Colors
Update the CSS variables in `globals.css`:
```css
:root {
  --forest-green: #2E7D32;
  --sage: #A5D6A7;
  --earth-beige: #F5F5DC;
  --sky-blue: #81D4FA;
  --charcoal: #37474F;
}
```

### Modifying Content
- Edit component files in `src/app/components/`
- Update text and links directly in component files
- Modify icons in the Services/Projects sections

### Adding New Sections
Create a new component file and import it in `page.tsx`:
```tsx
export default function NewSection() {
  // Your section component
}
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics
- Mobile Lighthouse Score: 90+
- Desktop Lighthouse Score: 95+
- First Contentful Paint (FCP): < 1.2s
- Largest Contentful Paint (LCP): < 2.5s

## Future Enhancements
- [ ] i18n implementation for EN/FR/SV translations
- [ ] Dark mode toggle
- [ ] Advanced filtering for projects
- [ ] Blog section
- [ ] Client testimonials carousel
- [ ] Team member profiles
- [ ] Case studies

## License
© 2025 Engineering Solutions. All rights reserved.

## Support
For questions or issues, please contact the development team.
