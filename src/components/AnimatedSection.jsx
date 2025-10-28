import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    slideInUp: {
      hidden: { opacity: 0, y: 100, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -180, scale: 0.5 },
      visible: { opacity: 1, rotate: 0, scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;