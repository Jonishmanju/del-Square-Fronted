import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ 
  children, 
  className = '', 
  hoverEffect = 'lift',
  delay = 0,
  index = 0,
  staggerDelay = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const hoverEffects = {
    lift: {
      hover: { 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    tilt: {
      hover: { 
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    glow: {
      hover: { 
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
        scale: 1.02,
        transition: { duration: 0.3 }
      }
    },
    scale: {
      hover: { 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    rotate: {
      hover: { 
        rotate: 2,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      }}
      transition={{
        duration: 0.6,
        delay: delay + (index * staggerDelay),
        ease: "easeOut"
      }}
      variants={hoverEffects[hoverEffect]}
      whileHover="hover"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;