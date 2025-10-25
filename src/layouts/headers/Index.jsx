import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../themes/ThemeProvider";
import { getGradient } from "../../themes/theme";
import { Building2, Home, Users, Briefcase, FolderOpen, Phone, MessageCircle, Sparkles, Zap } from "lucide-react";

export default function Header() {
  const theme = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.5, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const menuItems = [
    { 
      label: "HOME", 
      path: "/", 
      icon: <Home className="w-4 h-4" />,
      color: "from-blue-500 to-blue-600",
      description: "Welcome to Del Square"
    },
    { 
      label: "ABOUT", 
      path: "/about", 
      icon: <Users className="w-4 h-4" />,
      color: "from-green-500 to-green-600",
      description: "Our Story & Team"
    },
    { 
      label: "SERVICES", 
      path: "/services", 
      icon: <Briefcase className="w-4 h-4" />,
      color: "from-purple-500 to-purple-600",
      description: "Engineering Solutions"
    },
    { 
      label: "PROJECTS", 
      path: "/projects", 
      icon: <FolderOpen className="w-4 h-4" />,
      color: "from-orange-500 to-orange-600",
      description: "Our Portfolio"
    },
    { 
      label: "CONTACT", 
      path: "/contact", 
      icon: <Phone className="w-4 h-4" />,
      color: "from-red-500 to-red-600",
      description: "Get In Touch"
    },
  ];

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl' 
          : 'bg-white/50 backdrop-blur-md shadow-md'
      }`}
      style={{ 
        backdropFilter: `blur(${headerBlur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`
      }}
    >
      <div className="px-6">
        {/* Navbar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg"
              animate={{ 
                boxShadow: [
                  '0 4px 15px rgba(59, 130, 246, 0.3)',
                  '0 8px 25px rgba(59, 130, 246, 0.5)',
                  '0 4px 15px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            <motion.span
              className="font-bold text-xl"
              style={{ color: theme.primary }}
              animate={{
                textShadow: [
                  '0 0 0px rgba(59, 130, 246, 0)',
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                  '0 0 0px rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              DEL SQUARE
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 font-medium text-gray-800">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.label)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <motion.div
                  onClick={() => handleNav(item.path)}
                  className={`relative px-3 py-1.5 cursor-pointer transition-all duration-300 ${
                    location.pathname === item.path
                      ? `text-blue-600 font-semibold`
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-3 h-3"
                      animate={location.pathname === item.path ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm font-medium">{item.label}</span>
                    
                    {/* Sparkle effect for active item */}
                    {location.pathname === item.path && (
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-50"
                      >
                        <div className="flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5 text-yellow-400" />
                          {item.description}
                        </div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="tel:+919159875674"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-2 rounded-lg font-semibold transition"
              style={{ background: getGradient(theme) }}
            >
              CALL NOW
            </motion.a>

            <motion.a
              href="https://wa.me/919159875674"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 shadow-lg"
            >
              WhatsApp Us
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 border border-gray-300 rounded"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 space-y-6 z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-xl"
                onClick={() => setMobileOpen(false)}
              >
                ✖
              </button>

              {/* Links */}
              <div className="flex flex-col space-y-1 mt-10">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 py-2 cursor-pointer transition-all duration-300 ${
                      location.pathname === item.path
                        ? `text-blue-600 font-semibold`
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => handleNav(item.path)}
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3"
                        animate={location.pathname === item.path ? {
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-medium text-sm">{item.label}</span>
                      
                      {/* Sparkle effect for active item */}
                      {location.pathname === item.path && (
                        <motion.div
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        >
                          <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Description for mobile */}
                    <motion.p
                      className={`text-xs mt-0.5 ${
                        location.pathname === item.path ? 'text-blue-500' : 'text-gray-400'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 mt-6">
                <motion.a
                  href="tel:+919159875674"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white px-6 py-3 rounded-lg font-semibold shadow-md text-center"
                  style={{ background: getGradient(theme) }}
                >
                  CALL NOW
                </motion.a>

                <motion.a
                  href="https://wa.me/919159875674"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-lg"
                >
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
