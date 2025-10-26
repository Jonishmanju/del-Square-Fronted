# Loading Animation Setup

## Current Status
✅ A sample Lottie animation has been added as `loading.json`  
⚠️ You need to replace it with A.Basit's animation

## How to Download A.Basit's Free Loading Animation

### Step 1: Visit LottieFiles
1. Go to: https://lottiefiles.com/free-animation/loading-e2j1A8oi6J
2. Or search for "Loading Animation by A.Basit" on LottieFiles

### Step 2: Download the Animation
1. Click the "Download" button on the LottieFiles page
2. Select "JSON" format
3. Save the file

### Step 3: Replace the Sample Animation
1. Delete the current `loading.json` file
2. Move your downloaded file to this folder
3. Rename it to `loading.json`

### Step 4: Verify
The animation should now work when you run the application!

## Alternative: Use Online Version

If you want to use the animation directly from LottieFiles CDN, edit `src/components/LoadingAnimation.jsx`:

```jsx
// Replace the import with a fetch
const [animationData, setAnimationData] = useState(null);

useEffect(() => {
  fetch('https://lottie.host/f6c9e031-fc8e-46a0-9ddc-ce994daf0d19/D4hIY3hG3B.json')
    .then(res => res.json())
    .then(data => setAnimationData(data));
}, []);
```

## Current Implementation
- **Component**: `src/components/LoadingAnimation.jsx`
- **Duration**: 3 seconds
- **Background**: Black
- **Transition**: Smooth fade out
- **Responsive**: Yes (mobile-friendly)

