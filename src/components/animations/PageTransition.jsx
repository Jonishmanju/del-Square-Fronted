import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from "../../assets/images/del-square-logo.svg";

/**
 * Premium Page Transition Component with 3D Rotation Effect
 * Shows Del Square logo with smooth 3D rotation animations during route changes
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // Very quick logo transition

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="pageloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center z-[9999]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>
            
            {/* Del Square Logo */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotateY: 0,
                y: [0, -10, 0]
              }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              transition={{ 
                duration: 0.6,
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Logo Image */}
              <motion.img
                src={logoImage}
                alt="Del Square"
                className="w-24 h-24 mx-auto mb-4 drop-shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Company Name */}
              <motion.h2
                className="text-2xl font-bold text-white"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                DEL SQUARE
              </motion.h2>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-white rounded-full"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Slide Down Entry */}
      {!loading && (
        <motion.div
          key={location.pathname}
          initial={{ 
            opacity: 0, 
            y: -30,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

