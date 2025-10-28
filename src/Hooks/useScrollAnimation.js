import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return {
    ref,
    isInView,
    variants,
    staggerContainer,
    animate: isInView ? "visible" : "hidden"
  };
};

export const useNumberAnimation = (targetValue, duration = 2000, inView = true) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const increment = targetValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, duration, inView]);

  return count;
};