import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Premium Custom Cursor Component
 * Adds smooth cursor-follow effect for premium feel
 * Only active on desktop devices (not mobile/tablet)
 */
export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is desktop (not mobile/tablet)
    const checkIsDesktop = () => {
      const isDesktopDevice = window.matchMedia("(min-width: 1024px)").matches;
      setIsDesktop(isDesktopDevice);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    if (!isDesktop) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, input, textarea, [role='button'], .cursor-hover");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, [cursorX, cursorY, isDesktop]);

  // Custom cursor removed - return null
  return null;
}

