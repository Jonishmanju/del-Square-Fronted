import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Award, TrendingUp, Star, Shield } from "lucide-react";

const AnimatedNumber = ({ value, duration = 2, index = 0, shouldAnimate = false }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;

  useEffect(() => {
    // Always reset to 0 first
    setCount(0);
    
    if (!shouldAnimate) return;

    // Start animation with staggered delay
    const startDelay = setTimeout(() => {
      let start = 0;
      const increment = numericValue / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }, 500 + index * 200); // Staggered delay

    return () => clearTimeout(startDelay);
  }, [numericValue, duration, shouldAnimate, index]);

  return (
    <motion.span
      animate={{ 
        y: [0, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {value.includes('%') ? `${count}%` : 
       value.includes('₹') ? `₹${count}L` : 
       value.includes('+') ? `${count}+` : 
       value.includes('-') ? `${count}-20%` : count}
    </motion.span>
  );
};

const HeroSection = () => {
  const [showStats, setShowStats] = useState(false);
  const [startCounters, setStartCounters] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (isInView) {
      // Reset everything when section comes into view
      setShowStats(false);
      setStartCounters(false);
      
      // Show stats first
      const showTimer = setTimeout(() => {
        setShowStats(true);
        
        // Then start counters
        const counterTimer = setTimeout(() => {
          setStartCounters(true);
        }, 500);
        
        return () => clearTimeout(counterTimer);
      }, 300);
      
      return () => clearTimeout(showTimer);
    } else {
      // Reset when out of view
      setShowStats(false);
      setStartCounters(false);
    }
  }, [isInView]);

  const stats = [
    { number: "240+", label: "Projects Completed", icon: <Award className="w-6 h-6" />, color: "from-yellow-400 to-orange-500" },
    { number: "₹68L", label: "Total Savings", icon: <TrendingUp className="w-6 h-6" />, color: "from-green-400 to-emerald-500" },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" />, color: "from-purple-400 to-pink-500" },
    { number: "15-20%", label: "Cost Reduction", icon: <Shield className="w-6 h-6" />, color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
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
            Our Completed Projects
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          240+ Successful Projects Across Tamil Nadu
        </motion.p>

        {/* Enhanced Animated Stats */}
        {showStats && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 relative overflow-hidden border border-white/30"
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-lg`}
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: index * 0.5
                  }}
                />
                
                {/* Floating Icon */}
                <motion.div 
                  className="flex items-center justify-center mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                </motion.div>
                
                {/* Animated Number */}
                <div className="text-2xl md:text-3xl font-bold relative z-10 mb-2">
                  <AnimatedNumber 
                    value={stat.number} 
                    duration={2 + index * 0.3} 
                    index={index}
                    shouldAnimate={startCounters}
                  />
                </div>
                
                {/* Floating Label */}
                <motion.div 
                  className="text-sm md:text-base text-blue-100 relative z-10"
                  animate={{ 
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${10 + i * 30}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2 + i * 0.5
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;