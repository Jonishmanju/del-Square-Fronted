/**
 * Animation Utility Functions
 * Reusable animation variants and configurations
 */

import { motion } from "framer-motion";

/**
 * Page Transition Variants
 */
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

/**
 * Fade In Variant
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

/**
 * Slide In Variants
 */
export const slideInVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  },
  up: {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  },
  down: {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  },
};

/**
 * Scale Variants
 */
export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

/**
 * Hover Animations
 */
export const hoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

/**
 * Stagger Container Variant
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Stagger Item Variant
 */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Rotate Variants
 */
export const rotateVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6 } },
};

/**
 * Custom Animation Presets
 */
export const animationPresets = {
  fadeIn: fadeInVariants,
  slideInLeft: slideInVariants.left,
  slideInRight: slideInVariants.right,
  slideInUp: slideInVariants.up,
  slideInDown: slideInVariants.down,
  scaleIn: scaleVariants,
  stagger: {
    container: staggerContainerVariants,
    item: staggerItemVariants,
  },
  hover: hoverVariants,
  rotate: rotateVariants,
};

