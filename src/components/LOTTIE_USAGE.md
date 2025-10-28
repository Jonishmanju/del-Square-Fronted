# Lottie Animation Usage

## Overview
The project now uses **Lottie animations** for loading states, replacing the basic `LoadingOutlined` icon from Ant Design.

## Components

### 1. LottieLoader (Online)
- **File**: `src/components/LottieLoader.jsx`
- **Current Animation**: A.Basit's Free Loading Animation from LottieFiles
- Loads animation from LottieFiles CDN
- No local file needed

### 2. LottieLoaderLocal (Offline)
- **File**: `src/components/LottieLoaderLocal.jsx`
- Requires local animation file
- Better for production (no external dependency)

## Current Usage

The Lottie animation is now used in:
- `src/Pages/Public/Index.jsx` - Public route loading
- `src/Pages/PrivateRouting/Index.jsx` - Private route loading

## How to Use

### Option 1: Use Current Animation (Online)
```jsx
import LottieLoader from "../../components/LottieLoader";

<LottieLoader width={250} height={250} />
```

### Option 2: Use Local Animation (Recommended for Production)
1. Download the animation from [LottieFiles](https://lottiefiles.com/free-animation/loading-e2j1A8oi6J)
2. Save it as `src/assets/loading-animation.json`
3. Import and use `LottieLoaderLocal`:
```jsx
import LottieLoaderLocal from "../../components/LottieLoaderLocal";

<LottieLoaderLocal width={250} height={250} />
```

### Option 3: Use a Different Lottie Animation
```jsx
import LottieLoader from "../../components/LottieLoader";

// Pass custom animation URL
<LottieLoader 
  animationUrl="YOUR_LOTTIE_ANIMATION_URL_HERE" 
  width={200} 
  height={200} 
/>
```

## Current Animation
**Name**: Free Loading Animation by A.Basit  
**License**: Lottie Simple License (Free for personal and commercial use)  
**Source**: [LottieFiles](https://lottiefiles.com/free-animation/loading-e2j1A8oi6J)

## Props

### LottieLoader Props
- `animationUrl` (string): URL of the Lottie animation JSON
- `width` (number): Width in pixels (default: 200)
- `height` (number): Height in pixels (default: 200)
- `className` (string): Additional CSS classes

### LottieLoaderLocal Props
- `width` (number): Width in pixels (default: 200)
- `height` (number): Height in pixels (default: 200)
- `className` (string): Additional CSS classes

## Changing the Animation

To use a different Lottie animation:
1. Visit [LottieFiles.com](https://lottiefiles.com)
2. Find your desired animation
3. Copy the animation URL or download the JSON
4. Either update the `animationUrl` prop or replace the local JSON file

