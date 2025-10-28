import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Award, TrendingUp, Star, Shield, ArrowRight } from "lucide-react";

const AnimatedCounter = ({ value, duration = 2000, inView }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue, duration, inView]);

  const formatValue = () => {
    if (value.includes('%')) return `${count}%`;
    if (value.includes('₹')) return `₹${count}L`;
    if (value.includes('+')) return `${count}+`;
    if (value.includes('-')) return `${count}-20%`;
    return count;
  };

  return <span>{formatValue()}</span>;
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const stats = [
    {
      number: "240+",
      label: "Projects Completed",
      icon: <Award className="w-6 h-6" />,
      color: "text-yellow-400"
    },
    {
      number: "₹68L",
      label: "Total Savings",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      number: "15-20%",
      label: "Cost Reduction",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="relative z-10 flex items-center min-h-screen">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4 sm:px-0"
            variants={itemVariants}
          >
            Building Safely and{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Cost-Effectively
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 md:px-0"
            variants={itemVariants}
          >
            Professional structural engineering services with guaranteed 15-20% cost savings across Tamil Nadu
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Stats Grid with Animated Numbers */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4 sm:px-6 md:px-0"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 text-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
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
                
                <motion.div 
                  className={`flex justify-center mb-3 ${stat.color}`}
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
                  {stat.icon}
                </motion.div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 relative z-10">
                  <AnimatedCounter 
                    value={stat.number} 
                    duration={2000 + index * 200} 
                    inView={isInView}
                  />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-blue-100 relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;