import { motion } from "framer-motion";

// Components
import HeroSection from "./Components/HeroSection";
import ServicesGrid from "./Components/ServicesGrid";
import WhyChooseUs from "./Components/WhyChooseUs";
import CTASection from "./Components/CTASection";
import PageHeader from "../../../components/common/PageHeader";

const Services = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
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
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-100/20 rounded-full"
          style={{
            width: `${25 + i * 12}px`,
            height: `${25 + i * 12}px`,
            top: `${8 + i * 11}%`,
            left: `${5 + i * 9}%`,
          }}
          animate={{
            y: [0, -50 - i * 10, 0],
            x: [0, 20 + i * 4, 0],
            scale: [1, 1.3 + i * 0.1, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        animate={{
          scale: [1.4, 1, 1.4],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Service Icons Floating */}
      <motion.div
        className="absolute top-32 left-16 w-8 h-8 text-blue-400/30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏗️
      </motion.div>

      <motion.div
        className="absolute top-64 right-32 w-8 h-8 text-green-400/30"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        📐
      </motion.div>

      {/* Page Header with Icon */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <PageHeader 
          page="services" 
          showDescription={true}
          className="mb-8"
        />
      </div>

      <motion.section variants={sectionVariants}>
        <HeroSection />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <ServicesGrid />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <WhyChooseUs />
      </motion.section>
      
      <motion.section variants={sectionVariants}>
        <CTASection />
      </motion.section>
    </motion.div>
  );
};

export default Services;