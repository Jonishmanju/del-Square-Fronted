import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
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
      
      {/* Floating Geometric Shapes */}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Services
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional structural engineering and construction consultancy services with guaranteed cost savings
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;