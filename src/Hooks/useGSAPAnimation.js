import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = (animationType = 'fadeInUp', options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      duration: 1,
      delay: 0,
      ease: "power2.out",
      ...options
    };

    let animation;

    switch (animationType) {
      case 'fadeInUp':
        gsap.set(element, { opacity: 0, y: 50 });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        break;

      case 'fadeInLeft':
        gsap.set(element, { opacity: 0, x: -50 });
        animation = gsap.to(element, {
          opacity: 1,
          x: 0,
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        break;

      case 'scaleIn':
        gsap.set(element, { opacity: 0, scale: 0.8 });
        animation = gsap.to(element, {
          opacity: 1,
          scale: 1,
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        break;

      case 'slideInFromBottom':
        gsap.set(element, { y: 100, opacity: 0 });
        animation = gsap.to(element, {
          y: 0,
          opacity: 1,
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1
          }
        });
        break;

      case 'parallax':
        animation = gsap.to(element, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        break;

      case 'rotateIn':
        gsap.set(element, { opacity: 0, rotation: -180, scale: 0.5 });
        animation = gsap.to(element, {
          opacity: 1,
          rotation: 0,
          scale: 1,
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        break;

      case 'typewriter':
        const text = element.textContent;
        element.textContent = '';
        animation = gsap.to(element, {
          duration: text.length * 0.05,
          ease: "none",
          onUpdate: function() {
            const progress = this.progress();
            const currentLength = Math.round(progress * text.length);
            element.textContent = text.substring(0, currentLength);
          },
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
        break;

      default:
        animation = gsap.to(element, {
          ...defaultOptions,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
    }

    return () => {
      if (animation) {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, options]);

  return elementRef;
};

export const useGSAPTimeline = (animations = [], options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
        ...options.scrollTrigger
      },
      ...options
    });

    animations.forEach(({ selector, props, position = ">" }) => {
      const elements = container.querySelectorAll(selector);
      if (elements.length > 0) {
        tl.from(elements, props, position);
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animations, options]);

  return containerRef;
};