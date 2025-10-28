import { motion } from "framer-motion";
import ScrollReveal from "../../../components/animations/ScrollReveal";

// Components
import HeroSection from "./Components/HeroSection";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import MapLocation from "./Components/MapLocation";

const Contact = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-100/30 rounded-full"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            top: `${10 + i * 12}%`,
            left: `${5 + i * 11}%`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 10 + i * 2, 0],
            scale: [1, 1.1 + i * 0.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.section variants={sectionVariants}>
        <HeroSection />
      </motion.section>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
        variants={sectionVariants}
      >
        <ScrollReveal y={40} rotateX={15}>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center relative"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
        </ScrollReveal>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
        >
          <motion.div variants={sectionVariants}>
            <ContactInfo />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mb-16"
          variants={sectionVariants}
        >
          <ScrollReveal y={40} rotateX={10}>
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-8 text-center relative"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Find Us Here
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </motion.h3>
          </ScrollReveal>
          <MapLocation />
        </motion.div>

        {/* Contact Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {[
            { number: "500+", label: "Projects Completed", icon: "🏗️" },
            { number: "24/7", label: "Emergency Support", icon: "🚨" },
            { number: "15+", label: "Years Experience", icon: "⭐" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center relative overflow-hidden"
              variants={sectionVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              />
              <motion.div
                className="text-4xl mb-2 relative z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.h4 
                className="text-2xl font-bold text-blue-600 mb-1 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.h4>
              <motion.p 
                className="text-gray-600 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;