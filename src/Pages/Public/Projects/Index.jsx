import { useState } from "react";
import { motion } from "framer-motion";

// Components
import HeroSection from "./Components/HeroSection";
import FilterSection from "./Components/FilterSection";
import ProjectsGrid from "./Components/ProjectsGrid";
import CTASection from "./Components/CTASection";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating Background Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-100/20 rounded-full"
          style={{
            width: `${30 + i * 15}px`,
            height: `${30 + i * 15}px`,
            top: `${15 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -40 - i * 8, 0],
            x: [0, 15 + i * 3, 0],
            scale: [1, 1.2 + i * 0.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-32 right-16 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-green-400/15 to-purple-400/15 rounded-full blur-xl"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.section variants={sectionVariants}>
        <HeroSection />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <ProjectsGrid activeFilter={activeFilter} />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <CTASection />
      </motion.section>
    </motion.div>
  );
};

export default Projects;