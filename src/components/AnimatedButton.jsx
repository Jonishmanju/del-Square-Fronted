import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'bounce',
  disabled = false,
  ...props 
}) => {
  const variants = {
    bounce: {
      hover: { 
        scale: 1.05, 
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      },
      tap: { scale: 0.95 }
    },
    slide: {
      hover: { 
        x: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      },
      tap: { x: 0 }
    },
    glow: {
      hover: { 
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.3 }
      },
      tap: { scale: 0.98 }
    },
    rotate: {
      hover: { 
        rotate: 5,
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      },
      tap: { rotate: 0, scale: 0.95 }
    },
    pulse: {
      hover: { 
        scale: [1, 1.05, 1],
        transition: { 
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }
      },
      tap: { scale: 0.95 }
    }
  };

  return (
    <motion.button
      className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      variants={variants[variant]}
      whileHover={!disabled ? "hover" : {}}
      whileTap={!disabled ? "tap" : {}}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;