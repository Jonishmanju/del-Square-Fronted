import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Custom hook for smooth scroll initialization
 * Sets up GSAP ScrollTrigger for premium scroll animations
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Enable smooth scrolling
      const scrollTrigger = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          // Optional: Add any scroll-based logic here
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);
}

/**
 * Scroll Animations Hook
 * Provides scroll-based animation triggers
 */
export function useScrollAnimations(ref, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const element = ref.current;
    const {
      animation = "fade",
      delay = 0,
      duration = 1,
    } = options;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    switch (animation) {
      case "fade":
        tl.from(element, { opacity: 0, y: 50, duration, delay });
        break;
      case "slide":
        tl.from(element, { x: -100, opacity: 0, duration, delay });
        break;
      case "scale":
        tl.from(element, { scale: 0.8, opacity: 0, duration, delay });
        break;
      default:
        tl.from(element, { opacity: 0, y: 30, duration, delay });
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [ref, options]);
}

