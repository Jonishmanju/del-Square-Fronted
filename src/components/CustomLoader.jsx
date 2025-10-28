import React from "react";
import { motion } from "framer-motion";

const CustomLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 191, 36, 0.3)",
                "0 0 40px rgba(251, 191, 36, 0.6)",
                "0 0 20px rgba(251, 191, 36, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="text-2xl font-bold text-black"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              DS
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            DEL SQUARE
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-blue-200 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building Excellence Together
        </motion.p>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-white/20 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-lg"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -360],
          x: [0, 8, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default CustomLoader;