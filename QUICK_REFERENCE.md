# Quick Reference Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## File Locations Quick Reference

```
Component               Location
────────────────────────────────────────────────
Navbar                  src/app/components/Navbar.tsx
Logo                    src/app/components/Logo.tsx
Hero Section            src/app/components/HeroSection.tsx
Services Section        src/app/components/ServicesSection.tsx
Projects Section        src/app/components/ProjectsSection.tsx
CTA Section             src/app/components/CTASection.tsx
Footer                  src/app/components/Footer.tsx

Styling & Config        Location
────────────────────────────────────────────────
Global Styles           src/app/globals.css
Layout                  src/app/layout.tsx
Page                    src/app/page.tsx
Config                  next.config.ts, tailwind.config.ts

Documentation           Location
────────────────────────────────────────────────
Design System           DESIGN_SYSTEM.md
Components Guide        COMPONENTS.md
Setup & Deploy          SETUP.md
Visual Overview         VISUAL_OVERVIEW.md
Design Docs             DESIGN.md
```

## Color Palette Quick Reference

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Forest Green | #2E7D32 | rgb(46, 125, 50) | Primary brand, buttons, headings |
| Sage | #A5D6A7 | rgb(165, 214, 167) | Accents, secondary elements |
| Earth Beige | #F5F5DC | rgb(245, 245, 220) | Backgrounds, light sections |
| Sky Blue | #81D4FA | rgb(129, 212, 250) | Links, highlights |
| Charcoal | #37474F | rgb(55, 71, 79) | Text, dark content |

## Tailwind CSS Classes Quick Reference

### Colors
```tsx
// Text colors
text-[#2E7D32]      // Forest Green
text-[#A5D6A7]      // Sage
text-[#F5F5DC]      // Earth Beige
text-[#81D4FA]      // Sky Blue
text-[#37474F]      // Charcoal
text-white          // White

// Background colors
bg-[#2E7D32]        // Forest Green bg
bg-white/10         // White with opacity
bg-linear-to-b      // Linear gradient (top to bottom)

// Border colors
border-[#2E7D32]    // Forest Green border
border-white/20     // White border with opacity
```

### Spacing
```tsx
p-4         // Padding (16px)
px-6        // Padding horizontal (24px)
py-8        // Padding vertical (32px)
m-4         // Margin (16px)
mb-6        // Margin bottom (24px)
gap-4       // Gap between items (16px)
rounded-lg  // Border radius 12px
```

### Responsive
```tsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  // sm: 640px
  // md: 768px
  // lg: 1024px
```

### Flexbox & Grid
```tsx
flex                // Display flex
flex-col            // Column direction
justify-center      // Center horizontally
items-center        // Center vertically
grid grid-cols-2    // 2 column grid
md:grid-cols-4      // 4 columns on md screen
gap-8               // Gap between items
```

## Common Component Patterns

### Button Pattern
```tsx
<button className="px-8 py-4 bg-[#2E7D32] text-white font-bold rounded-lg hover:bg-[#1b5e20] transition-all duration-300 transform hover:scale-105 shadow-lg">
  Button Text
</button>
```

### Card Pattern
```tsx
<div className="p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#A5D6A7] transition-all duration-300">
  Content
</div>
```

### Section Pattern
```tsx
<section className="w-full py-20 px-6 angle-bottom-right" style={{ backgroundColor: '#2E7D32' }}>
  <div className="container mx-auto max-w-6xl">
    {/* Content */}
  </div>
</section>
```

### Animation Pattern (GSAP)
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
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

## Common Tweaks

### Change Primary Color
```tsx
// Find all instances of:
#2E7D32
#1b5e20

// And replace with your color
// Also update in tailwind config if needed
```

### Adjust Navbar Width
```tsx
// In Navbar.tsx
className="... lg:w-64 ..."  // Change to lg:w-80 or desired width
```

### Modify Animation Speed
```tsx
// In globals.css
@keyframes fadeInUp {
  /* Change duration from 0.8s to preferred */
}

// Or in GSAP:
duration: 0.8,  // Change this value
```

### Hide/Show Section
```tsx
// Add hidden class
<section className="hidden lg:block">
  {/* Only visible on lg screens */}
</section>

// Or remove from page.tsx
// Just comment out the import and usage
```

## Git Workflow Quick Commands

```bash
# Initialize repo
git init
git add .
git commit -m "Initial commit"

# Create branch for feature
git checkout -b feature/my-feature

# Add changes
git add .
git commit -m "Add my feature"

# Push to GitHub
git push origin feature/my-feature

# Merge to main
git checkout main
git merge feature/my-feature
git push origin main
```

## Deployment Commands

```bash
# Vercel
vercel               # Deploy to Vercel

# Docker
docker build -t silh:latest .
docker run -p 3000:3000 silh:latest

# Traditional Server
npm run build
npm start
```

## Debugging Tips

```bash
# Check errors
npm run build

# Check unused styles
npm install -g next-bundle-analyzer
ANALYZE=true npm run build

# Debug in browser
// Add to any React component
console.log('Debug info', variable);

// Use React DevTools browser extension
// Inspect component props and state
```

## Performance Checklist

- [ ] Images optimized with Next.js Image
- [ ] CSS purged (Tailwind auto-does this)
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Mobile responsive tested
- [ ] Dark mode considered
- [ ] Accessibility tested

## SEO Checklist

- [ ] Meta title & description in layout.tsx
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Alt text on all images
- [ ] Semantic HTML (nav, section, article)
- [ ] Structured data (Schema.org) optional
- [ ] robots.txt & sitemap.xml

## Content Editing Quick Reference

### Add New Service
```tsx
// In ServicesSection.tsx, add to services array:
{
  id: 5,
  title: 'New Service',
  description: 'Description here',
  icon: '🎯',
},
```

### Add New Project
```tsx
// In ProjectsSection.tsx, add to projects array:
{
  id: 4,
  title: 'Project Name',
  category: 'Category',
  description: 'Description',
  color: '#81D4FA',
},
```

### Update Footer Links
```tsx
// In Footer.tsx, modify the links array or JSX directly
<a href="mailto:new-email@company.com">new-email@company.com</a>
```

### Change Text Content
Simply open the component file and edit the text directly. Hot reload will update immediately.

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change port: `npm run dev -- -p 3001` |
| Module not found | Run `npm install` |
| Styles not applying | Check Tailwind class syntax |
| Animations not working | Ensure GSAP imported, ref attached |
| Build fails | Check `npm run build` output for errors |
| Mobile not responsive | Check viewport meta tag in layout |

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://greensock.com/docs/)
- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

## Terminal Commands Cheat Sheet

```bash
# Development
npm run dev              # Start dev server on :3000
npm run build            # Build for production
npm start                # Run production build

# Package Management
npm install              # Install dependencies
npm update               # Update packages
npm list                 # List installed packages
npm audit                # Check for vulnerabilities

# Git
git status               # See changes
git add .                # Stage all changes
git commit -m "msg"      # Commit changes
git push                 # Push to remote
git pull                 # Pull from remote

# Build Analysis
npm run build -- --profile  # Profile build

# Clean
rm -r node_modules       # Remove node_modules (macOS/Linux)
rmdir /s node_modules    # Remove node_modules (Windows)
npm cache clean --force  # Clean npm cache
```

## Next Steps for Development

1. **Customize Content**: Edit component text and data
2. **Add Images**: Place in `public/` folder
3. **Configure Domain**: Update metadata in layout.tsx
4. **Connect Analytics**: Add Google Analytics or similar
5. **Test Mobile**: Use browser DevTools device emulation
6. **Deploy**: Follow SETUP.md deployment guide
7. **Monitor**: Set up error tracking (Sentry)
8. **Iterate**: Gather feedback and improve

---

**Last Updated**: October 31, 2025
**Version**: 1.0
**Quick Ref Status**: Complete ✅
