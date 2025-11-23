# Animation System Documentation

## Overview

This project implements a comprehensive animation system designed to create a premium user experience with smooth, purposeful animations that enhance user engagement while maintaining optimal performance and accessibility.

## Architecture

### Core Components

1. **Custom Hook: `useScrollAnimation`** (`src/hooks/useScrollAnimation.ts`)
   - Intersection Observer-based scroll detection
   - Automatic handling of `prefers-reduced-motion`
   - Configurable threshold and trigger behavior

2. **Animated Section Wrapper** (`src/components/AnimatedSection.tsx`)
   - Reusable component for scroll-triggered animations
   - Multiple animation types available
   - Staggered delay support

3. **CSS Animation Library** (`tailwind.css`)
   - Custom keyframe animations
   - Utility classes for common patterns
   - Performance-optimized transitions

## Animation Categories

### 1. Scroll-Triggered Animations

**Implementation:**
```tsx
import { AnimatedSection } from '../components/AnimatedSection';

<AnimatedSection animation="slide-bottom" threshold={0.2}>
  <section>Your content here</section>
</AnimatedSection>
```

**Available Animations:**
- `slide-bottom` - Slides in from bottom with fade
- `slide-left` - Slides in from left with fade
- `slide-right` - Slides in from right with fade
- `scale` - Scales up from 0.9 with fade
- `fade` - Simple fade-in effect

**Properties:**
- `threshold`: Percentage of element visible before triggering (default: 0.1)
- `delay`: Animation delay in milliseconds (100, 200, 300, 400, 500)
- `triggerOnce`: Whether to trigger only once (default: true)

### 2. Micro-Interactions

**Button Animations:**
- Ripple effect on click (`.button-hover-effect`)
- Lift on hover with shadow enhancement
- Press down effect on active state
- Smooth color transitions

**Form Elements:**
- Border color transition on hover
- Ring focus state with offset
- Shadow enhancement on focus
- Smooth 300ms transitions

**Implementation:**
All buttons and form elements (Input, Textarea) have animations built-in. No additional classes needed.

### 3. Hero Section Animations

**Features:**
- Title slides in from bottom on page load
- Mobile menu slides down with staggered link animations
- Navigation links have smooth hover states
- Hamburger menu transforms smoothly

**Classes Used:**
- `.animate-slide-in-bottom` - Hero title entrance
- `.animate-slide-down` - Mobile menu
- `.transition-smooth` - Navigation hover effects

### 4. Interactive Card Animations

**StickyTabs Component:**
- Scale up on hover (1.05x)
- Enhanced shadow on hover
- Pulsing glow effect on active state
- Press down effect on click
- Smooth transitions between sticky/non-sticky states

**Effects:**
- `.hover:scale-105` - Lift effect
- `.animate-pulse-glow` - Active card glow
- `.active:scale-95` - Press feedback

### 5. Accordion Animations

**FAQ Section:**
- Icon rotation on expand (180deg)
- Smooth content slide down
- Content fades in from bottom
- Hover color transition to purple

**Timing:**
- All transitions: 300ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for smooth, natural feel

### 6. Decorative Animations

**Floating Animation:**
```css
.animate-float
```
- Gentle up-and-down motion
- 3-second cycle
- Used for illustration images
- Creates sense of depth

**Usage:**
```tsx
<img className="animate-float" src="..." alt="..." />
```

## Performance Optimizations

### 1. Hardware Acceleration
All transform-based animations use GPU-accelerated properties:
- `transform: translateX/Y/Z`
- `transform: scale`
- `opacity`

**Avoid:**
- Animating `width`, `height`, `top`, `left`
- These cause layout recalculation

### 2. Intersection Observer
- Efficient scroll detection
- Lazy animation triggering
- Automatic cleanup on unmount

### 3. CSS Containment
- Use `will-change` sparingly
- Let browser optimize animations
- Remove after animation completes

### 4. Frame Rate
All animations target 60fps with:
- Optimized easing functions
- Reasonable duration (300-800ms)
- No layout thrashing

## Accessibility

### Prefers-Reduced-Motion Support

**Automatic Handling:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animate-float,
  .animate-pulse-glow {
    animation: none !important;
  }
}
```

**JavaScript Detection:**
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  setIsVisible(true); // Skip animation
}
```

### Focus Management
- All interactive elements have visible focus states
- Focus rings use 2px offset for clarity
- Keyboard navigation fully supported

## Animation Timing Reference

### Durations
- **Micro-interactions:** 300ms
- **Scroll animations:** 600-800ms
- **Page transitions:** 500ms
- **Hover states:** 300ms

### Easing Functions
- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)`
- **Smooth:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Bounce:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

## Custom Animation Classes

### Utility Classes

```css
/* Slide animations */
.animate-slide-in-bottom
.animate-slide-in-left
.animate-slide-in-right

/* Scale and fade */
.animate-scale-in
.animate-fade-in

/* Decorative */
.animate-float
.animate-pulse-glow

/* Timing */
.delay-100 through .delay-500

/* Transitions */
.transition-smooth
.transition-bounce

/* Hover effects */
.hover-lift
.button-hover-effect
```

## Browser Support

**Tested On:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

## Best Practices

### DO:
✅ Use scroll-triggered animations for section reveals
✅ Keep animation durations under 1 second
✅ Test with `prefers-reduced-motion` enabled
✅ Use transform and opacity for animations
✅ Provide visual feedback for interactions

### DON'T:
❌ Animate layout properties (width, height, margin, padding)
❌ Use animations longer than 2 seconds
❌ Animate on every scroll event
❌ Ignore accessibility settings
❌ Add animations without purpose

## Usage Examples

### Example 1: Animated Section
```tsx
<AnimatedSection animation="slide-bottom" delay={200}>
  <div className="content-section">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</AnimatedSection>
```

### Example 2: Hover Lift Card
```tsx
<div className="hover-lift bg-white rounded-lg p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Example 3: Floating Image
```tsx
<img
  src="/illustration.svg"
  alt="Illustration"
  className="animate-float w-64 h-64"
/>
```

### Example 4: Button with Ripple
```tsx
<Button className="button-hover-effect">
  Click Me
</Button>
```

## Performance Monitoring

### Chrome DevTools
1. Open Performance tab
2. Record user interaction
3. Check for:
   - Consistent 60fps
   - No layout thrashing
   - Smooth animation curves

### Lighthouse
- Target score: 90+ Performance
- Avoid layout shifts during animations
- Minimize main thread work

## Troubleshooting

### Animation Not Triggering
1. Check `threshold` value (try 0.1 for earlier trigger)
2. Verify element is in viewport
3. Check browser console for errors

### Janky Animation
1. Use transform instead of position
2. Add `will-change` temporarily
3. Check for layout recalculation

### Accessibility Issues
1. Test with reduced motion preference
2. Verify keyboard navigation
3. Check focus indicator visibility

## Future Enhancements

Potential additions:
- Page transition animations
- Loading state animations
- Error state animations
- Success confirmation animations
- Parallax scrolling effects
- Staggered list animations

## Credits

Animation system designed and implemented following modern web animation best practices, optimized for performance and accessibility.
