import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Del Square
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner in structural engineering and construction consultancy since 2017
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;