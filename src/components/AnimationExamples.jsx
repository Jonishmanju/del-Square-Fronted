import React from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';
import { useGSAPAnimation, useGSAPTimeline } from '../hooks/useGSAPAnimation';
import { motion } from 'framer-motion';

const AnimationExamples = () => {
  // GSAP animation hooks
  const fadeInRef = useGSAPAnimation('fadeInUp', { duration: 1.2 });
  const parallaxRef = useGSAPAnimation('parallax');
  
  const timelineRef = useGSAPTimeline([
    { selector: '.timeline-item', props: { opacity: 0, y: 50, duration: 0.8 }, position: 0.2 }
  ]);

  return (
    <div className="space-y-16 p-8">
      {/* Framer Motion Page Transitions are already implemented in Index.jsx */}
      
      {/* Animated Sections */}
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <h2 className="text-3xl font-bold text-center">Animated Sections</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection animation="fadeInLeft" delay={0.3}>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Fade In Left</h3>
            <p>This section animates from the left</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInRight" delay={0.4}>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Fade In Right</h3>
            <p>This section animates from the right</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Animated Text */}
      <AnimatedSection animation="scaleIn" delay={0.5}>
        <div className="text-center space-y-4">
          <AnimatedText 
            text="This is a typewriter effect" 
            animation="typewriter"
            className="text-2xl font-bold"
            delay={0.5}
          />
          
          <AnimatedText 
            text="These words fade in one by one" 
            animation="fadeInWords"
            className="text-lg"
            delay={1}
          />
          
          <AnimatedText 
            text="Letters slide in individually" 
            animation="slideInLetters"
            className="text-lg"
            delay={2}
          />
        </div>
      </AnimatedSection>

      {/* Animated Buttons */}
      <AnimatedSection animation="fadeInUp" delay={0.6}>
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton 
            variant="bounce" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Bounce Effect
          </AnimatedButton>
          
          <AnimatedButton 
            variant="glow" 
            className="bg-purple-500 text-white px-6 py-3 rounded-lg"
          >
            Glow Effect
          </AnimatedButton>
          
          <AnimatedButton 
            variant="rotate" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Rotate Effect
          </AnimatedButton>
          
          <AnimatedButton 
            variant="pulse" 
            className="bg-red-500 text-white px-6 py-3 rounded-lg"
          >
            Pulse Effect
          </AnimatedButton>
        </div>
      </AnimatedSection>

      {/* Animated Cards */}
      <AnimatedSection animation="fadeInUp" delay={0.7}>
        <h3 className="text-2xl font-bold text-center mb-8">Animated Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['lift', 'tilt', 'glow'].map((effect, index) => (
            <AnimatedCard 
              key={effect}
              hoverEffect={effect}
              index={index}
              className="bg-white p-6 rounded-lg shadow-lg border"
            >
              <h4 className="text-lg font-semibold mb-2 capitalize">{effect} Effect</h4>
              <p>Hover over this card to see the {effect} animation effect.</p>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* GSAP Animations */}
      <div ref={fadeInRef} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold">GSAP Fade In Animation</h3>
        <p>This uses GSAP for smooth scroll-triggered animations</p>
      </div>

      <div ref={parallaxRef} className="bg-gray-800 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold">GSAP Parallax Effect</h3>
        <p>This element moves at a different speed when scrolling</p>
      </div>

      {/* GSAP Timeline */}
      <div ref={timelineRef} className="space-y-4">
        <h3 className="text-2xl font-bold text-center">GSAP Timeline Animation</h3>
        <div className="timeline-item bg-yellow-100 p-4 rounded">Timeline Item 1</div>
        <div className="timeline-item bg-yellow-200 p-4 rounded">Timeline Item 2</div>
        <div className="timeline-item bg-yellow-300 p-4 rounded">Timeline Item 3</div>
      </div>

      {/* Complex Framer Motion Animation */}
      <motion.div
        className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-8 rounded-lg"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1, 
          type: "spring", 
          stiffness: 100,
          damping: 10 
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
      >
        <h3 className="text-2xl font-bold text-center">Complex Framer Motion</h3>
        <p className="text-center">Combines multiple animation properties with spring physics</p>
      </motion.div>
    </div>
  );
};

export default AnimationExamples;