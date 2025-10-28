import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ 
  text, 
  className = '', 
  animation = 'typewriter',
  delay = 0,
  duration = 0.05,
  staggerDelay = 0.02 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animations = {
    typewriter: {
      hidden: { width: 0 },
      visible: { width: "auto" }
    },
    fadeInWords: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    slideInLetters: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  };

  if (animation === 'typewriter') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animations.typewriter}
        transition={{ duration: text.length * duration, delay }}
        className={`overflow-hidden whitespace-nowrap ${className}`}
      >
        {text}
      </motion.div>
    );
  }

  if (animation === 'fadeInWords') {
    const words = text.split(' ');
    return (
      <div ref={ref} className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animations.fadeInWords}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  if (animation === 'slideInLetters') {
    const letters = text.split('');
    return (
      <div ref={ref} className={className}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animations.slideInLetters}
            transition={{
              duration: 0.3,
              delay: delay + index * staggerDelay
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    );
  }

  return <div className={className}>{text}</div>;
};

export default AnimatedText;