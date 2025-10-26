import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LottieLoader from "../LottieLoader";
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
    }, 2000); // 2 seconds for animation

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
            className="fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 flex items-center justify-center z-[9999]"
            style={{ perspective: '1000px' }}
          >
            {/* Slide Down Del Square Logo */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ y: -200, opacity: 0, scale: 0.5 }}
              animate={{ 
                y: [0, 10, 0],
                opacity: 1,
                scale: 1
              }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Logo Image */}
              <motion.img
                src={logoImage}
                alt="Del Square Loading..."
                className="h-40 w-40 mx-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(255, 255, 255, 0.3))' }}
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Text with slide */}
              <motion.p
                className="text-white text-3xl font-bold tracking-wide mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -5, 0]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 },
                  y: { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                DEL SQUARE
              </motion.p>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <motion.p
                className="text-white/80 font-medium tracking-wide text-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                LOADING...
              </motion.p>
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

