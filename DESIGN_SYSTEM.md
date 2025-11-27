# AeroSports Design System

Complete design system based on `improved_plan_visit (1).html` for consistent styling across all pages.

## Color Palette

### Primary Colors
```jsx
className="bg-primary"           // #ff1152 - Main brand pink
className="bg-primary-light"     // #ff006e - Lighter pink for gradients
className="bg-primary-dark"      // #ed0871 - Darker pink
```

### Accent Colors
```jsx
className="bg-accent-green"      // #39FF14 - Neon green for badges
className="bg-accent-neon"       // #caff1a - Lime green highlights
```

### Dark Colors
```jsx
className="bg-black"             // #000000 - Main background
className="bg-dark-200"          // #1a1a1a - Card backgrounds
className="bg-dark-300"          // #262626 - Lighter dark sections
className="bg-dark-400"          // #2a2a2a - Gradient stops
```

### Gray Scale
```jsx
className="text-gray"            // #666666 - Body text
className="text-gray-light"      // #999999 - Muted text
className="bg-gray-bg"           // #f8f9fa - Light backgrounds
```

---

## Typography

### Hero Titles (64px/48px)
```jsx
className="text-hero-title uppercase"              // 64px, line-height 0.9, weight 900
className="md:text-hero-title text-hero-title-sm" // Responsive
```

### Section Titles (72px/64px/52px)
```jsx
className="text-section-title uppercase"    // 72px, line-height 0.9
className="text-section-title-md uppercase" // 64px, line-height 1.0
className="text-section-title-sm uppercase" // 52px, line-height 1.1
```

### Card Titles (36px/28px)
```jsx
className="text-card-title uppercase"       // 36px, line-height 1.2
className="text-card-title-sm uppercase"    // 28px, line-height 1.2
```

---

## Spacing

### Section Padding
```jsx
className="py-section"         // 100px vertical padding
className="py-section-lg"      // 120px vertical padding
```

### Card Padding
```jsx
className="p-card"             // 50px all around
className="p-card-md"          // 40px all around
className="p-card-sm"          // 30px all around
```

---

## Border Radius

```jsx
className="rounded-card"       // 25px - Large cards
className="rounded-card-sm"    // 20px - Small cards
className="rounded-button"     // 12px - Buttons
className="rounded-badge"      // 20px - Badges
className="rounded-full"       // 9999px - Pills
```

---

## Gradients

### Hero & Section Gradients
```jsx
className="bg-gradient-hero-diagonal"    // Pink gradient for hero diagonal
className="bg-gradient-primary"          // Main brand gradient
className="bg-gradient-cta"              // CTA section gradient
```

### Card Gradients
```jsx
className="bg-gradient-quick-actions"    // Dark card gradient (#1a1a1a → #2a2a2a)
className="bg-gradient-dark-card"        // Alternative dark gradient
className="bg-gradient-feature-icon"     // Icon background gradient
```

### Radial Gradients
```jsx
className="bg-gradient-radial-primary"   // Pink radial glow
className="bg-gradient-radial-green"     // Green radial glow
className="bg-gradient-radial-white"     // White radial for CTA effects
```

---

## Diagonal Clip-Paths

### Hero Section
```jsx
// Desktop
<div className="absolute clip-diagonal-hero bg-gradient-hero-diagonal" />

// Mobile
<div className="md:clip-diagonal-hero clip-diagonal-hero-mobile" />
```

### Plan Visit Section
```jsx
// Desktop - continuation diagonal
<div className="absolute clip-diagonal-plan bg-gradient-primary" />

// Mobile
<div className="md:clip-diagonal-plan clip-diagonal-plan-mobile" />
```

---

## Container Utilities

```jsx
// Standard container (1100px max, 60px padding)
<div className="aero-container">

// Wide container (1400px max, 60px padding)
<div className="aero-container-wide">

// Auto-responsive padding (60px → 20px on mobile)
```

---

## Component Patterns

### Badge Component
```jsx
<span className="inline-block bg-accent-green text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
  PLAN YOUR VISIT
</span>
```

### Section Header
```jsx
<div className="text-center mb-12">
  <span className="inline-block bg-accent-green text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
    SECTION BADGE
  </span>
  <h2 className="text-section-title uppercase text-white mb-6">
    MAIN TITLE
    <br />
    <span className="text-accent-green">ACCENTED LINE</span>
  </h2>
  <p className="text-lg text-white/80 max-w-2xl mx-auto">
    Subtitle text here
  </p>
</div>
```

### Feature Card (White)
```jsx
<div className="bg-white p-card rounded-card shadow-2xl">
  <h3 className="text-card-title uppercase mb-2">
    TITLE <span className="text-primary">ACCENT</span>
  </h3>
  <div className="divider-accent mb-8"></div>
  <div className="space-y-6">
    {/* Features */}
  </div>
</div>
```

### Feature Item
```jsx
<div className="flex gap-5 items-start">
  <div className="w-12 h-12 bg-gradient-feature-icon rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
    🎂
  </div>
  <div>
    <h4 className="text-lg font-bold mb-1">Feature Title</h4>
    <p className="text-gray leading-relaxed">Feature description...</p>
  </div>
</div>
```

### Quick Actions Card (Dark)
```jsx
<div className="bg-gradient-quick-actions p-card-md rounded-card border-2 border-primary">
  <h3 className="text-accent-green text-2xl font-black uppercase text-center mb-6">
    ⚡ QUICK ACTIONS
  </h3>
  <div className="space-y-4">
    <Button variant="aero" size="aero-lg" className="w-full justify-between">
      <span>🎂 BIRTHDAY PARTIES</span>
      <span>→</span>
    </Button>
  </div>
</div>
```

### CTA Section
```jsx
<div className="bg-gradient-cta p-12 rounded-card relative overflow-hidden">
  {/* Radial glow effect */}
  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial-white"></div>

  <div className="relative z-10">
    <h3 className="text-4xl font-black uppercase text-white mb-6">
      GET READY TO JUMP!
    </h3>
    <p className="text-white/90 text-lg mb-8 max-w-2xl">
      Call to action text...
    </p>
    <div className="flex gap-4">
      <Button variant="aero" size="aero-xl" className="bg-white text-primary">
        PRIMARY CTA
      </Button>
      <Button variant="aero-outline" size="aero-lg" className="border-white text-white">
        SECONDARY CTA
      </Button>
    </div>
  </div>
</div>
```

### Pricing Card
```jsx
<div className="bg-white p-card rounded-card text-center relative shadow-2xl">
  {/* Featured badge */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <Button variant="aero-badge" size="aero-sm">
      MOST POPULAR
    </Button>
  </div>

  <div className="text-6xl mb-6">🎂</div>
  <h3 className="text-card-title-sm uppercase mb-4">PACKAGE NAME</h3>
  <p className="text-gray mb-8 leading-relaxed">
    Package description...
  </p>
  <Button variant="aero" size="aero-lg" className="w-full">
    BOOK NOW →
  </Button>
</div>
```

### Ready to Jump Section (Green Background)
```jsx
<section className="bg-accent-green py-section-lg relative overflow-hidden">
  {/* Radial accent */}
  <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-full bg-gradient-radial-dark"></div>

  <div className="aero-container-wide relative z-10">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      {/* Visual Circle */}
      <div className="flex justify-center">
        <div className="w-80 h-80 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 animate-float">
          <span className="text-8xl">🚀</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <Button variant="aero-badge" size="aero-sm" className="mb-6">
          READY TO JUMP?
        </Button>
        <h2 className="text-section-title-sm uppercase text-black mb-8">
          Book Your <span className="text-primary">Experience</span> Today
        </h2>
        <p className="text-black text-lg leading-relaxed mb-6">
          Content...
        </p>
        <Button variant="aero" size="aero-xl" className="bg-black text-accent-green hover:bg-primary hover:text-white">
          GET STARTED NOW →
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

## Text Utilities

### Gradient Text
```jsx
className="text-gradient-primary"    // Pink to green gradient
className="text-gradient-secondary"  // White gradient
```

### Common Text Patterns
```jsx
className="uppercase font-black"     // Bold uppercase headings
className="tracking-wide"            // Button letter spacing
className="tracking-wider"           // Badge letter spacing
className="leading-relaxed"          // Body text line height
```

---

## Animations

```jsx
className="animate-float"            // Floating animation (3s)
className="animate-fadeInUp"         // Fade in from below
className="animate-scaleIn"          // Scale in animation

className="delay-200"                // 200ms delay
className="delay-400"                // 400ms delay
className="delay-600"                // 600ms delay
className="delay-800"                // 800ms delay
```

---

## Responsive Breakpoints

Follow Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Common responsive patterns:
```jsx
className="grid grid-cols-1 md:grid-cols-2 gap-8"
className="text-hero-title-sm md:text-hero-title"
className="p-8 md:p-12"
```

---

## Quick Reference

### Section Layout Pattern
```jsx
<section className="bg-black py-section-lg section-diagonal">
  {/* Optional diagonal background */}
  <div className="absolute clip-diagonal-plan bg-gradient-primary opacity-20" />

  <div className="aero-container-wide relative z-10">
    {/* Section content */}
  </div>
</section>
```

### Card Shadow Levels
```jsx
className="shadow-lg"       // Subtle elevation
className="shadow-xl"       // Medium elevation
className="shadow-2xl"      // High elevation
className="shadow-2xl shadow-primary/40"  // Colored shadow
```
