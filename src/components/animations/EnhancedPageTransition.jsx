import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const EnhancedPageTransition = ({ children }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(10px)"
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      filter: "blur(10px)"
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6
  };

  // Different animations for different routes
  const getRouteAnimation = (pathname) => {
    switch (pathname) {
      case "/":
        return {
          initial: { opacity: 0, scale: 0.9, rotateX: -15 },
          in: { opacity: 1, scale: 1, rotateX: 0 },
          out: { opacity: 0, scale: 1.1, rotateX: 15 }
        };
      case "/about":
        return {
          initial: { opacity: 0, x: -100, rotateY: -15 },
          in: { opacity: 1, x: 0, rotateY: 0 },
          out: { opacity: 0, x: 100, rotateY: 15 }
        };
      case "/services":
        return {
          initial: { opacity: 0, y: 100, scale: 0.8 },
          in: { opacity: 1, y: 0, scale: 1 },
          out: { opacity: 0, y: -100, scale: 0.8 }
        };
      case "/projects":
        return {
          initial: { opacity: 0, rotateZ: -5, scale: 0.9 },
          in: { opacity: 1, rotateZ: 0, scale: 1 },
          out: { opacity: 0, rotateZ: 5, scale: 0.9 }
        };
      case "/contact":
        return {
          initial: { opacity: 0, x: 100, y: 50 },
          in: { opacity: 1, x: 0, y: 0 },
          out: { opacity: 0, x: -100, y: -50 }
        };
      default:
        return pageVariants;
    }
  };

  const currentVariants = getRouteAnimation(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={currentVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedPageTransition;