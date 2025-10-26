import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal Component
 * Animates elements when they scroll into view with rotation and movement effects
 */
const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  rotateY = 20,
  rotateX = 10,
  y = 50, 
  x = 0,
  scale = 0.9,
  className = "",
  stagger = false,
  enableFloat = true,
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger once when 20% visible
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: y, 
      x: x,
      rotateY: rotateY,
      rotateX: rotateX,
      scale: scale
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1
    },
  };

  // Continuous up/down animation every 1.5 seconds (faster)
  const floatAnimation = {
    y: [0, -8, 0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || hasAnimated ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.34, 1.56, 0.64, 1] // Bouncy ease
      }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      className={className}
      {...props}
    >
      <motion.div
        animate={floatAnimation}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ScrollReveal;

