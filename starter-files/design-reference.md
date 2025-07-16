# TechFlow Landing Page - Design Reference

This document provides visual guidance for the TechFlow Bootstrap landing page design. Use this as a reference while building your page.

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: `#0066cc` - Main brand color, used for primary buttons and accents
- **Secondary Cyan**: `#00cccc` - Secondary brand color, used for highlights and gradients
- **Dark Gray**: `#1a1a1a` - Main text color and dark backgrounds

### Bootstrap Colors
- **Background Light**: `#f8f9fa` (Bootstrap light)
- **Text Muted**: `#6c757d` (Bootstrap muted)
- **Success Green**: `#198754` (Bootstrap success)
- **White**: `#ffffff` (Bootstrap white)

## 📐 Layout Structure

### Overall Page Flow
```
┌─────────────────────────────────────┐
│           NAVIGATION BAR            │ ← Dark, sticky header
├─────────────────────────────────────┤
│                                     │
│           HERO SECTION              │ ← Full height, gradient background
│        (2 columns on desktop)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         FEATURES SECTION            │ ← White background, 3 cards
│                                     │
├─────────────────────────────────────┤
│                                     │
│          TEAM SECTION               │ ← Light gray background, 3 cards
│                                     │
├─────────────────────────────────────┤
│                                     │
│         PRICING SECTION             │ ← White background, 3 cards
│                                     │
├─────────────────────────────────────┤
│                                     │
│            FOOTER                   │ ← Dark background, 4 columns
│                                     │
└─────────────────────────────────────┘
```

## 📱 Responsive Breakpoints

### Desktop (1200px+)
- Navigation: Horizontal menu items
- Hero: Side-by-side columns
- Features: 3 cards per row
- Team: 3 cards per row
- Pricing: 3 cards per row
- Footer: 4 columns

### Tablet (768px - 1199px)
- Navigation: Horizontal menu items
- Hero: Side-by-side columns
- Features: 2-3 cards per row
- Team: 2 cards per row
- Pricing: 2 cards per row
- Footer: 2-3 columns

### Mobile (< 768px)
- Navigation: Hamburger menu
- Hero: Stacked vertically
- Features: 1 card per row
- Team: 1 card per row
- Pricing: 1 card per row
- Footer: 1 column

## 🧩 Component Designs

### Navigation Bar
```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO] TechFlow                    Home Features About Pricing  │
│                                                         Contact  │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: Dark (`bg-dark`)
- **Text**: White
- **Logo**: TechFlow with blue accent
- **Mobile**: Hamburger menu on right

### Hero Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────┐      │
│  │   Revolutionize Your    │  │                         │      │
│  │    Workflow with AI     │  │      [HERO IMAGE]       │      │
│  │                         │  │                         │      │
│  │  Descriptive subtext    │  │                         │      │
│  │  about AI solutions...  │  │                         │      │
│  │                         │  │                         │      │
│  │  [Get Started] [Learn]  │  │                         │      │
│  └─────────────────────────┘  └─────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: Blue to cyan gradient
- **Text**: White
- **Buttons**: Primary (white) and secondary (outline)

### Features Section
```
┌─────────────────────────────────────────────────────────────────┐
│                    Why Choose TechFlow?                        │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │    [ICON]   │  │    [ICON]   │  │    [ICON]   │             │
│  │             │  │             │  │             │             │
│  │AI-Powered   │  │  Seamless   │  │   24/7      │             │
│  │Analytics    │  │Integration  │  │  Support    │             │
│  │             │  │             │  │             │             │
│  │Description  │  │Description  │  │Description  │             │
│  │text here... │  │text here... │  │text here... │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: White
- **Cards**: White with subtle shadow
- **Icons**: Blue color scheme

### Team Section
```
┌─────────────────────────────────────────────────────────────────┐
│                      Meet Our Team                             │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   [PHOTO]   │  │   [PHOTO]   │  │   [PHOTO]   │             │
│  │             │  │             │  │             │             │
│  │Sarah Johnson│  │  Mike Chen  │  │Lisa Rodriguez│             │
│  │CEO & Founder│  │     CTO     │  │Head of Design│             │
│  │             │  │             │  │             │             │
│  │Bio text     │  │Bio text     │  │Bio text     │             │
│  │goes here... │  │goes here... │  │goes here... │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: Light gray (`bg-light`)
- **Cards**: White
- **Photos**: Professional headshots

### Pricing Section
```
┌─────────────────────────────────────────────────────────────────┐
│                    Choose Your Plan                            │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Starter   │  │Professional │  │ Enterprise  │             │
│  │             │  │[HIGHLIGHTED]│  │             │             │
│  │    $29      │  │    $79      │  │   Custom    │             │
│  │   /month    │  │   /month    │  │   pricing   │             │
│  │             │  │             │  │             │             │
│  │ ✓ Feature 1 │  │ ✓ Feature 1 │  │ ✓ Feature 1 │             │
│  │ ✓ Feature 2 │  │ ✓ Feature 2 │  │ ✓ Feature 2 │             │
│  │ ✓ Feature 3 │  │ ✓ Feature 3 │  │ ✓ Feature 3 │             │
│  │             │  │             │  │             │             │
│  │ [Try Free]  │  │[Get Started]│  │[Contact Us] │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: White
- **Professional Plan**: Blue border highlight
- **Buttons**: Different styles per plan

### Footer
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │   Company   │  │Quick Links  │  │   Legal     │  │Newsletter│ │
│  │    Info     │  │             │  │             │  │         │ │
│  │             │  │• Home       │  │• Privacy    │  │Stay     │ │
│  │[LOGO]       │  │• Features   │  │• Terms      │  │Updated  │ │
│  │             │  │• About      │  │             │  │         │ │
│  │Description  │  │• Pricing    │  │             │  │[EMAIL]  │ │
│  │             │  │• Contact    │  │             │  │[BUTTON] │ │
│  │Address      │  │             │  │             │  │         │ │
│  │Phone        │  │             │  │             │  │[SOCIAL] │ │
│  │Email        │  │             │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
│                                                                 │
│                © 2024 TechFlow. All rights reserved.           │
└─────────────────────────────────────────────────────────────────┘
```
- **Background**: Dark
- **Text**: White and light gray
- **Social Icons**: Twitter, LinkedIn, GitHub

## 🔤 Typography Scale

### Headings
- **H1 (Hero)**: `display-4` class, bold, white
- **H2 (Sections)**: `display-5` class, bold, dark
- **H3 (Cards)**: `h5` class, bold, primary color
- **H4 (Team)**: `h5` class, bold, primary color
- **H5 (Footer)**: `h6` class, uppercase, bold

### Body Text
- **Lead Text**: `lead` class for hero subheading
- **Body Text**: Default Bootstrap body text
- **Muted Text**: `text-muted` class for secondary information
- **Small Text**: `small` class for footer details

## 🎯 Visual Hierarchy

### Importance Order
1. **Navigation** - Always visible, high contrast
2. **Hero Headline** - Largest text, center stage
3. **Section Headings** - Clear section breaks
4. **Card Titles** - Important but secondary
5. **Body Text** - Readable, well-spaced
6. **Footer** - Subdued but accessible

### Visual Weight
- **Bold**: Headlines, navigation, card titles
- **Regular**: Body text, descriptions
- **Light**: Secondary information, captions

## 🎨 Visual Effects

### Shadows
- **Cards**: `shadow-sm` for subtle depth
- **Buttons**: Built-in Bootstrap button shadows
- **Navbar**: Optional subtle shadow

### Hover Effects
- **Navigation Links**: Color change on hover
- **Buttons**: Slight color darkening
- **Cards**: Optional shadow enhancement
- **Social Icons**: Color change

### Transitions
- **Smooth**: All hover effects should be smooth
- **Bootstrap Default**: Use Bootstrap's built-in transitions

## 📊 Spacing Guidelines

### Section Spacing
- **Vertical**: `py-5` (80px top/bottom)
- **Between Cards**: `g-4` (24px gaps)
- **Container**: Standard Bootstrap container margins

### Card Spacing
- **Internal**: `p-4` (24px padding)
- **Between Elements**: `mb-3` or `mb-4`
- **Button Spacing**: `mt-3` or `mt-4`

### Text Spacing
- **Paragraphs**: Default Bootstrap line height
- **Headings**: `mb-3` or `mb-4` below headings
- **Lists**: `mb-2` between list items

## 🖼️ Image Guidelines

### Hero Image
- **Style**: Modern, tech-focused illustration
- **Colors**: Blue/cyan theme to match brand
- **Size**: Responsive, max-height: 500px

### Feature Icons
- **Style**: Clean, minimalist SVG icons
- **Colors**: Brand colors (#0066cc, #00cccc)
- **Size**: 60-80px height

### Team Photos
- **Style**: Professional headshots
- **Format**: Square or portrait orientation
- **Treatment**: Clean, consistent styling

## 📱 Mobile Considerations

### Touch Targets
- **Buttons**: Minimum 44px height
- **Links**: Adequate spacing for finger taps
- **Form Elements**: Easy to tap and type

### Navigation
- **Hamburger Menu**: Clear and accessible
- **Menu Items**: Stack vertically, adequate spacing
- **Logo**: Remains visible and appropriately sized

### Content Flow
- **Stacking**: Logical content order on mobile
- **Readability**: Text remains readable at all sizes
- **Buttons**: Full width or centered on mobile

## 🎨 Final Design Notes

### Consistency
- Use Bootstrap classes consistently
- Maintain color scheme throughout
- Keep spacing patterns uniform

### Accessibility
- High contrast ratios
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support

### Professional Polish
- Clean, modern aesthetic
- Consistent branding
- Smooth user experience
- Fast loading times

---

## 🔍 Quick Reference

### Most Important Classes
- `container` / `container-fluid`
- `row` / `col-*`
- `navbar-*` classes
- `card` / `card-body`
- `btn` / `btn-*`
- `text-*` / `bg-*`
- `py-*` / `px-*` / `my-*` / `mx-*`
- `d-*` responsive utilities

### Common Combinations
- `py-5` for section spacing
- `mb-4` for element spacing
- `h-100` for equal height cards
- `img-fluid` for responsive images
- `shadow-sm` for subtle depth

This design reference should guide you through creating a professional, cohesive landing page that matches modern web design standards while staying true to the TechFlow brand identity.