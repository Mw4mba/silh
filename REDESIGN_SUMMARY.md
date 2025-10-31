# Homepage Redesign Summary - COWI & WSP Inspired

## 🎯 User Journey Analysis

### COWI.com Journey
- **Tagline**: "Together, we shape a sustainable and liveable world"
- **People-first storytelling**: INGENØRDs series showcasing team members
- **Webinars & Events**: Morning Fuel series, thought leadership
- **Sustainability commitment**: Front and center
- **Culture emphasis**: "A place to work, and so much more"

### WSP.com Journey
- **Bold messaging**: "SEE THE WORLD DIFFERENTLY"
- **Services categorization**: Clear sector breakdown
- **Project showcases**: "Pioneering projects" with rich imagery
- **Insights section**: "Innovative thinking" - thought leadership
- **Careers focus**: "Lead and grow" with compelling CTAs

## 🏗️ Implemented Design Elements

### 1. Hero Section
- **Headline**: "Together, we engineer a liveable future" (COWI-inspired)
- **Full-screen imagery**: Unsplash architectural photography
- **Dark overlay**: Forest Green gradient for text legibility
- **CTAs**: "What we do" & "Our projects" (WSP pattern)
- **Typography**: Light/Semibold weight contrast

### 2. Services Section - "Shaping the future"
- **WSP headline pattern**: "Shaping the" + **bold** "future"
- **4 service cards** in 2x2 grid (expanded from original 3)
  - Sustainable Architecture
  - Structural Engineering
  - BIM-Based Workflow
  - Climate Adaptation (NEW)
- **Card design**:
  - Hero image (320px height)
  - Gradient overlay
  - Title overlaid on image
  - Description + Insight tags
  - "Learn more" link with arrow
- **Real imagery**: Unsplash architectural/engineering photos

### 3. Insights Section - "Innovative thinking" (NEW)
- **COWI/WSP pattern**: Thought leadership content
- **3-column grid**:
  - Climate resilience insights
  - Carbon-negative materials
  - BIM to Digital Twin
- **Card structure**:
  - Category badge
  - Date stamp
  - Title + Excerpt
  - "Read article" CTA
- **Call-to-action**: "Read all insights" button

### 4. Projects Section - "Pioneering projects"
- **WSP pattern**: Large-format project showcase
- **Alternating layout**: Image left/right alternates
- **3 featured projects**:
  - Copenhagen Waterfront District
  - Stockholm Central Station
  - Green Valley Business Park
- **Rich metadata**: Location, Year, Category
- **Immersive imagery**: Full-height project photos
- **CTA**: "View all projects"

### 5. Careers Section - "Lead and grow"
- **WSP messaging**: "What if you could build a career that's as unique as you?"
- **Dual CTAs**: 
  - "Search and apply"
  - "Life at Silh"
- **Statistics section**:
  - 12,000+ Employees
  - 45+ Countries
  - 1,200+ Projects
- **Background**: Team collaboration imagery

### 6. Navigation Design (COWI-minimalist)
- **Side navbar**: 80px wide (previously 256px)
- **Vertical hamburger**: 3-line menu icon
- **Rotated logo**: 90° clockwise at bottom
- **Slide-out panel**: 320px white panel with large typography
- **Language selector**: Inline EN/FR/SV (no dropdown)
- **Minimal top bar**: Clean white with subtle border

## 🎨 Visual Design System

### Typography Hierarchy
- **Headings**: Font-light for main text + font-semibold for emphasis
- **Example**: "Shaping the **future**"
- **Body**: Font-light for readability
- **CTAs**: Font-medium for clarity

### Color Application
- **Hero**: Dark overlays (#2E7D32, #37474F)
- **Services**: White background, Earth Beige cards
- **Insights**: Earth Beige background
- **Projects**: Forest Green background
- **Careers**: Dark overlay on imagery

### Image Sources
All images from Unsplash:
- Modern architecture (hero)
- Green buildings (sustainable architecture)
- Construction/engineering (structural)
- Digital/tech (BIM workflow)
- Nature/climate (climate adaptation)
- Cityscapes (projects)
- Team collaboration (careers)

## 📊 User Journey Flow

1. **Hero**: Bold statement → Immediate CTAs
2. **Services**: 4 core offerings with visual appeal
3. **Insights**: Thought leadership & expertise demonstration
4. **Projects**: Real-world impact showcase
5. **Careers**: Culture & opportunity
6. **Footer**: Comprehensive navigation

## 🔑 Key Differentiators

### From COWI
✓ Warm, collaborative tone
✓ "Together" messaging
✓ Minimalist navigation
✓ People-first approach
✓ Sustainability front-and-center

### From WSP
✓ "See the world differently" boldness
✓ Clear sector categorization
✓ "Pioneering projects" showcase
✓ "Innovative thinking" insights section
✓ "Lead and grow" careers positioning

## 🎭 Logo Implementation
- **File**: `/public/silh.png`
- **Rotation**: 90° clockwise in navbar
- **Component**: Next.js Image with fill layout
- **Sizes**: sm (48px), md (64px), lg (96px)

## 🚀 Next Steps
1. Run `npm run dev` to view the redesign
2. Test responsive breakpoints
3. Add real company content
4. Implement language switching logic
5. Connect to CMS for dynamic content
6. Add page transitions
7. Optimize images (Next.js Image optimization)

---

**Design Philosophy**: Clean, professional, sustainability-focused engineering firm that combines COWI's warmth with WSP's boldness while maintaining unique Silh identity.
