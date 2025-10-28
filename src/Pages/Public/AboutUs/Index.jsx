import { motion } from "framer-motion";

// Components
import HeroSection from "./Components/HeroSection";
import OurStorySection from "./Components/OurStorySection";
import AchievementsSection from "./Components/AchievementsSection";
import CTASection from "./Components/CTASection";
import PageHeader from "../../../components/common/PageHeader";

const AboutUs = () => {
  // Enhanced container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-100/20 rounded-full"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            top: `${10 + i * 12}%`,
            left: `${8 + i * 10}%`,
          }}
          animate={{
            y: [0, -40 - i * 6, 0],
            x: [0, 15 + i * 2, 0],
            scale: [1, 1.2 + i * 0.08, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-16 sm:top-24 right-8 sm:right-16 w-24 sm:w-36 h-24 sm:h-36 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Page Header with Icon */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <PageHeader 
          page="about" 
          showDescription={true}
          className="mb-8"
        />
      </div>

      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <HeroSection />
      </motion.section>
      
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <AchievementsSection />
      </motion.section>
      
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <OurStorySection />
      </motion.section>
      
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CTASection />
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;