import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUp Component
 * Animates a number from 0 to a target value with support for ranges and suffixes
 */
const CountUp = ({ 
  target, 
  duration = 3 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    // Handle different target formats
    let targetValue;
    let suffix = '';
    
    if (typeof target === 'string') {
      // Extract number and suffix from string (e.g., "240+", "15-20%", "100%", "2017")
      if (target.includes('-')) {
        // For ranges like "15-20", extract numbers
        const matches = target.match(/\d+/g);
        if (matches && matches.length >= 2) {
          targetValue = parseFloat(matches[0]);
          // Keep the range format
          suffix = target.replace(/[\d]/g, '');
        } else {
          targetValue = parseFloat(target.replace(/[^0-9.]/g, '')) || 0;
        }
      } else {
        // Extract number
        targetValue = parseFloat(target.replace(/[^0-9.]/g, '')) || 0;
        // Extract suffix
        const suffixMatch = target.match(/[^0-9]/g);
        suffix = suffixMatch ? suffixMatch.join('') : '';
      }
    } else {
      targetValue = target;
    }

    if (targetValue === 0) {
      setCount(0);
      return;
    }

    // Start animation
    setCount(0);
    
    let startTime = performance.now();
    let animationId;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      const currentCount = targetValue * easeOutQuad;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [inView, target, duration]);

  // Get suffix from target string
  const getSuffix = () => {
    if (typeof target === 'string') {
      const match = target.match(/[+%\-]/g);
      return match ? match.join('') : '';
    }
    return '';
  };

  // Get display value with suffix
  const getDisplayValue = () => {
    const suffix = getSuffix();
    if (typeof target === 'string' && target.includes('-') && target.includes('%')) {
      // For ranges like "15-20%"
      const matches = target.match(/\d+/g);
      if (matches && matches.length >= 2) {
        const start = Math.floor((parseFloat(matches[0]) / parseFloat(matches[matches.length - 1])) * count);
        return `${start}-${count}%`;
      }
    }
    return count + suffix;
  };

  return (
    <div ref={ref}>
      {getDisplayValue()}
    </div>
  );
};

export default CountUp;
