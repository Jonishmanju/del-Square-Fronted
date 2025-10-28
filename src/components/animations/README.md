# Animation Components

This directory contains reusable animation components for the Del Square project.

## Available Components

### 1. FloatingStackAnimation

A smooth, infinitely looping animation of stacked cards that float, rotate, and move.

**Features:**
- Smooth infinite loop animation
- Customizable speed, scale, rotation, and colors
- Responsive and lightweight
- Built with Framer Motion
- No external CSS dependencies (uses Tailwind)

**Usage:**
```jsx
import FloatingStackAnimation from "../../../components/animations/FloatingStackAnimation";

// Default settings
<FloatingStackAnimation />

// Custom settings
<FloatingStackAnimation 
  speed={6}        // Animation speed in seconds
  scale={1.2}      // Size multiplier
  rotation={5}     // Rotation angle in degrees
  gap={10}         // Spacing between cards
  cardCount={7}    // Number of cards (default: 5)
  colors={[...]}   // Custom color array
/>
```

**Props:**
- `speed` (default: 8) - Animation duration in seconds. Lower value = faster animation
- `scale` (default: 1) - Card size multiplier
- `rotation` (default: 3) - Rotation angle in degrees
- `gap` (default: 8) - Vertical spacing between cards in pixels
- `cardCount` (default: 5) - Number of cards to display
- `colors` (default: preset array) - Array of Tailwind color classes

**Examples:**
See `FloatingStackAnimation_EXAMPLE.jsx` for complete usage examples including:
- Default animation
- Fast/slow variations
- Custom colors
- Hero section integration
- Compact sidebar usage

### 2. ScrollReveal

Animation component that reveals elements on scroll.

**Usage:**
```jsx
import ScrollReveal from "../../../components/animations/ScrollReveal";

<ScrollReveal y={30} delay={0.2}>
  <div>Your content here</div>
</ScrollReveal>
```

### 3. ParallaxHero

Modern parallax scrolling effect with layered backgrounds moving at different speeds.

**Features:**
- Multiple parallax layers
- Animated gradient backgrounds
- Floating particles
- Smooth scroll-based movement

**Usage:**
```jsx
import ParallaxHero from "../../../components/animations/ParallaxHero";

<ParallaxHero>
  <div>
    {/* Your hero content */}
  </div>
</ParallaxHero>
```

**See `PARALLAX_USAGE.md` for detailed documentation.**

### 4. ScrollRotate

Scroll-based rotation animation that rotates elements as you scroll the page.

**Features:**
- Rotation based on scroll progress
- Customizable rotation angle
- Optional reverse rotation
- Staggered animations support

**Usage:**
```jsx
import ScrollRotate from "../../../components/animations/ScrollRotate";

<ScrollRotate rotation={360}>
  <div>Your content</div>
</ScrollRotate>
```

**Props:**
- `rotation` (default: 360) - Maximum rotation in degrees
- `reverse` (default: false) - Reverse rotation direction
- `rotationStart` (default: 0) - Scroll progress to start (0-1)
- `rotationEnd` (default: 1) - Scroll progress to end (0-1)

**Example:**
```jsx
// Icon that rotates 360 degrees on scroll
<ScrollRotate rotation={360}>
  <Star className="w-24 h-24" />
</ScrollRotate>

// Card with reverse rotation
<ScrollRotate rotation={180} reverse={true}>
  <div className="card">Content</div>
</ScrollRotate>
```

**Note:** This will NOT affect the navigation section - it's designed for content areas only.

### 5. PageTransition

Page transition animations.

**Usage:**
```jsx
import PageTransition from "../../../components/animations/PageTransition";

<PageTransition>
  {children}
</PageTransition>
```

## Best Practices

1. **Performance**: Use the `scale` prop to adjust size rather than wrapping in a larger container
2. **Speed**: Recommended values between 6-12 seconds for smooth animations
3. **Rotation**: Keep rotation between 2-5 degrees for subtle effects
4. **Colors**: Use Tailwind color classes (e.g., 'bg-blue-500', 'bg-gradient-to-r')

## Customization Tips

### To make it faster/slower:
```jsx
// Fast animation
<FloatingStackAnimation speed={4} />

// Slow animation  
<FloatingStackAnimation speed={12} />
```

### To make it bigger/smaller:
```jsx
// Larger cards
<FloatingStackAnimation scale={1.5} />

// Smaller cards
<FloatingStackAnimation scale={0.8} />
```

### To change the rotation intensity:
```jsx
// More rotation
<FloatingStackAnimation rotation={6} />

// Less rotation
<FloatingStackAnimation rotation={1} />
```

### To change card spacing:
```jsx
// More spacing
<FloatingStackAnimation gap={12} />

// Less spacing
<FloatingStackAnimation gap={4} />
```

## Integration

To use the FloatingStackAnimation in your page:

```jsx
import FloatingStackAnimation from "../components/animations/FloatingStackAnimation";

const MyPage = () => {
  return (
    <div className="relative w-full h-screen">
      <FloatingStackAnimation />
    </div>
  );
};
```

## License

MIT - Feel free to modify and use in your projects.

