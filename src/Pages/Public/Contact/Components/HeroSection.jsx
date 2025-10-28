import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Typing animation effect
  useEffect(() => {
    const heroText = "Get in Touch with Del Square";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < heroText.length) {
        setTypingText(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section ref={heroRef} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y }}
      />

      {/* Enhanced Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            i % 2 === 0 ? 'border-2 border-white/20 rounded-full' : 'bg-white/10 rounded-lg'
          }`}
          style={{
            width: `${12 + i * 2}px`,
            height: `${12 + i * 2}px`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            rotate: [0, 180 + i * 30, 360],
            scale: [1, 1.1 + i * 0.1, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        style={{ y }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block"
            animate={{ 
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {typingText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-blue-300"
            >
              |
            </motion.span>
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in touch with our structural engineering team. We're here to help with all your construction needs.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={() => {
              const contactForm = document.querySelector('form');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-white to-blue-50 text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">Start Your Project</span>
          </motion.button>

          <motion.a
            href="tel:+919159875674"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              borderColor: "rgba(255, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <span className="relative z-10">Call Now</span>
          </motion.a>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default HeroSection;