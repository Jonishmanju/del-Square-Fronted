# Premium Animation Components

This directory contains premium animation components for smooth, professional page transitions and user interactions.

## Components

### 1. PageTransition.jsx

A premium page transition component that displays the Del Square logo with beautiful animations during route changes.

**Usage:**
```jsx
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <PageTransition>
      <YourContent />
    </PageTransition>
  );
}
```

**Features:**
- Smooth fade in/out animations
- Del Square logo with rotating border
- Animated background gradients
- Loading indicator
- Scroll to top on route change

### 2. CustomCursor.jsx

Premium custom cursor with smooth spring-based animations. Only active on desktop devices.

**Usage:**
```jsx
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <YourContent />
    </>
  );
}
```

**Features:**
- Smooth spring-based cursor movement
- Enlarges on hover for interactive elements (buttons, links, inputs)
- Desktop-only (hidden on mobile/tablet)
- Blend mode for premium effect

### 3. ParallaxSection.jsx

Component for creating smooth parallax effects during scrolling.

**Usage:**
```jsx
import ParallaxSection from "./components/ParallaxSection";

function MyComponent() {
  return (
    <ParallaxSection speed={0.5}>
      <div>Your content here</div>
    </ParallaxSection>
  );
}
```

**Props:**
- `speed` (number): Parallax speed multiplier (default: 0.5)
- `className` (string): Additional CSS classes

**Helpers:**
- `FadeInSection`: Component for fade-in animations
- `StaggerContainer`: Container with stagger animation effects
- `staggerItemVariants`: Variants for stagger animation items

### 4. Animation Utilities

Located in `src/utils/animations.js`:

```jsx
import {
  fadeInVariants,
  slideInVariants,
  scaleVariants,
  hoverVariants,
  staggerContainerVariants,
  staggerItemVariants,
  animationPresets,
} from "./utils/animations";

// Usage
<motion.div
  variants={fadeInVariants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

**Available Presets:**
- `fadeIn`: Opacity animation
- `slideInLeft`, `slideInRight`, `slideInUp`, `slideInDown`: Slide animations
- `scaleIn`: Scale animation
- `stagger`: Stagger container and item variants
- `hover`: Hover and tap interactions
- `rotate`: Rotation animations

### 5. useSmoothScroll Hook

Custom hook for initializing GSAP ScrollTrigger.

**Usage:**
```jsx
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function MyComponent() {
  useSmoothScroll();
  return <div>Content</div>;
}
```

## Best Practices

1. **Performance**: Use `lazy` loading for components to optimize initial load
2. **Mobile**: Always test animations on mobile devices
3. **Accessibility**: Ensure animations don't interfere with user experience
4. **Consistency**: Use the same animation variants across similar components
5. **Performance**: Use `viewport={{ once: true }}` for scroll-triggered animations

## Customization

### Change Page Transition Logo

Edit `src/components/PageTransition.jsx` and update the `src` attribute:

```jsx
<motion.img
  src="/your-logo.svg"
  alt="Your Logo..."
  className="..."
/>
```

### Modify Cursor Styles

Edit `src/components/CustomCursor.jsx` to change:
- Cursor size
- Colors
- Hover effects
- Spring physics

### Adjust Parallax Speed

Change the `speed` prop in ParallaxSection:

```jsx
<ParallaxSection speed={0.3}>  {/* Slower */}
<ParallaxSection speed={0.7}>  {/* Faster */}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Custom cursor disabled, animations optimized

## Performance Tips

1. Use `transform` and `opacity` for animations (GPU accelerated)
2. Avoid animating layout properties like `width` or `height`
3. Use `will-change` sparingly and only for elements that animate
4. Debounce scroll events when necessary
5. Use `IntersectionObserver` for viewport-based animations

