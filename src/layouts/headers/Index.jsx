import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../themes/ThemeProvider";
import { getGradient } from "../../themes/theme";
import { Building2, Home, Users, Briefcase, FolderOpen, Phone, Zap } from "lucide-react";
import logoImage from "../../assets/images/del-square-logo.svg";
import ScrollReveal from "../../components/animations/ScrollReveal";

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
      description: "Home - Del Square Structural Engineering"
    },
    { 
      label: "ABOUT", 
      path: "/about", 
      icon: <Users className="w-4 h-4" />,
      color: "from-green-500 to-green-600",
      description: "About Us - Learn Our Story & Meet Our Team"
    },
    { 
      label: "SERVICES", 
      path: "/services", 
      icon: <Briefcase className="w-4 h-4" />,
      color: "from-purple-500 to-purple-600",
      description: "Services - Professional Engineering Solutions"
    },
    { 
      label: "PROJECTS", 
      path: "/projects", 
      icon: <FolderOpen className="w-4 h-4" />,
      color: "from-orange-500 to-orange-600",
      description: "Projects - View Our Completed Portfolio"
    },
    { 
      label: "CONTACT", 
      path: "/contact", 
      icon: <Phone className="w-4 h-4" />,
      color: "from-red-500 to-red-600",
      description: "Contact Us - Get In Touch With Our Team"
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
      <div className="px-4 sm:px-6">
        {/* Navbar */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNav("/")}
          >
            <img 
              src={logoImage}
              alt="Del Square Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
            <span
              className="font-bold text-lg sm:text-xl hidden sm:block"
              style={{ color: theme.primary }}
            >
              DEL SQUARE
            </span>
          </motion.div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex space-x-1 font-medium text-gray-800">
            {menuItems.map((item, index) => (
              <ScrollReveal 
                key={item.label}
                delay={index * 0.1}
                y={-20}
                rotateY={10}
                scale={0.9}
                className="relative"
              >
                <motion.div
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
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>

                  {/* Hover Tooltip - For all navigation icons */}
                  <AnimatePresence>
                    {hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        transition={{ 
                          duration: 0.2
                        }}
                        className="absolute top-full mt-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap z-50 shadow-lg"
                        style={{ 
                          left: '1rem', // Position at icon center
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          <span className="font-medium">{item.description}</span>
                        </div>
                        {/* Arrow pointing up */}
                        <div 
                          className="absolute -top-1 bg-gray-900 rotate-45"
                          style={{
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '6px',
                            height: '6px'
                          }}
                        ></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            </ScrollReveal>
            ))}
            </div>
          </div>

          {/* Spacer for balance */}
          <div className="hidden md:block w-32"></div>



          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
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
              className="fixed top-0 right-0 w-full sm:w-80 md:w-96 h-full bg-white shadow-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 z-50 md:hidden overflow-y-auto"
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
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
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


            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
