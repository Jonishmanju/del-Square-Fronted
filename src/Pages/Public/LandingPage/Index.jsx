import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Building2, Phone, Calculator, Award, Users, MapPin, CheckCircle, Zap, PiggyBank, Heart, Star, TrendingUp, Shield, Clock, Moon, Sun, Upload, Send, X, ChevronRight, ChevronLeft, Play, Pause, Volume2, VolumeX, Sparkles, Zap as Lightning, MoreVertical } from "lucide-react";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import CountUp from "../../../components/animations/CountUp";
import WhatsAppIcon from "../../../components/icons/WhatsAppIcon";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFABMenu, setShowFABMenu] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [waveOffset, setWaveOffset] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! Welcome to Del Square. How can I help you with your structural engineering needs?", sender: "bot", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const heroRef = useRef(null);
  const chatRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Advanced project showcase data
  const featuredProjects = [
    {
      id: 1,
      title: "Chennai IT Park",
      location: "Chennai",
      type: "Commercial",
      cost: "₹2.5 Cr",
      duration: "18 months",
      savings: "₹45L saved",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "Modern IT park with earthquake-resistant design and green building features"
    },
    {
      id: 2,
      title: "Luxury Villa Complex",
      location: "Coimbatore",
      type: "Residential",
      cost: "₹1.8 Cr",
      duration: "12 months",
      savings: "₹32L saved",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Premium residential complex with optimized foundation design"
    },
    {
      id: 3,
      title: "Industrial Manufacturing Unit",
      location: "Salem",
      type: "Industrial",
      cost: "₹3.2 Cr",
      duration: "24 months",
      savings: "₹58L saved",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      description: "Heavy-duty industrial facility with specialized structural engineering"
    }
  ];

  // Cost calculator data
  const calculatorData = {
    structuralDesign: { base: 90000, perSqFt: 50 },
    projectManagement: { base: 200000, perSqFt: 100 },
    siteSupervision: { base: 12000, perSqFt: 5 },
    structuralAudit: { base: 50000, perSqFt: 25 },
    greenBuilding: { base: 100000, perSqFt: 75 }
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    // Typing animation
    const heroText = "Building Safely and Cost-Effectively";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < heroText.length) {
        setTypingText(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Wave animation
    const waveInterval = setInterval(() => {
      setWaveOffset(prev => prev + 0.1);
    }, 50);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typeInterval);
      clearInterval(waveInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  // Advanced functions
  const sendChatMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thank you for your message! Our team will get back to you within 2-4 hours during business hours.",
          sender: "bot",
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const calculateCost = (service, area) => {
    const data = calculatorData[service];
    return data.base + (data.perSqFt * area);
  };

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Structural Design",
      price: "₹90K – ₹1.2L",
      description: "Professional structural engineering with modern design principles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      price: "₹2L – ₹4L",
      description: "End-to-end project management for seamless execution"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Cost Efficient Solutions",
      price: "15–20% Savings",
      description: "Guaranteed cost savings through optimized design"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Green Building",
      price: "Custom Pricing",
      description: "Sustainable and eco-friendly building solutions"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Structural Audit",
      price: "Custom Pricing",
      description: "Comprehensive structural assessment and recommendations"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Site Supervision",
      price: "₹12K – ₹18K",
      description: "Professional on-site supervision and quality control"
    }
  ];

  const stats = [
    { number: "240+", label: "Projects Completed" },
    { number: "15-20%", label: "Cost Savings" },
    { number: "2017", label: "Since" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />


      {/* Theme Toggle */}
      <motion.button
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Floating Action Buttons - Three Dots Menu */}
      <div className="fixed right-6 bottom-6 z-50">
        {/* Menu Toggle Button */}
        <motion.button
          onClick={() => setShowFABMenu(!showFABMenu)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Quick Actions"
        >
          <MoreVertical className="w-8 h-8 text-white" />
        </motion.button>

        {/* Action Buttons */}
        <AnimatePresence>
          {showFABMenu && (
            <>
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: -80, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                onClick={() => {
                  setShowCalculator(!showCalculator);
                  setShowFABMenu(false);
                }}
                className="absolute w-14 h-14 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Cost Calculator"
              >
                <Calculator className="w-6 h-6 text-white" />
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: -140, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                transition={{ delay: 0.1 }}
                href="tel:+919159875674"
                className="absolute w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Call Now"
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: -200, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                transition={{ delay: 0.2 }}
                href="https://wa.me/919159875674"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="WhatsApp Us"
              >
                <WhatsAppIcon className="w-6 h-6" color="#ffffff" />
              </motion.a>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            x: [0, 10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Wave Animation */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(90deg, 
              rgba(255,255,255,0.1) 0%, 
              rgba(255,255,255,0.3) 25%, 
              rgba(255,255,255,0.1) 50%, 
              rgba(255,255,255,0.3) 75%, 
              rgba(255,255,255,0.1) 100%)`,
            transform: `translateX(${Math.sin(waveOffset) * 50}px)`
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Lightning Effects */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeOut"
          }}
        >
          <Lightning className="w-8 h-8 text-yellow-300" />
        </motion.div>

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
          style={{ y, opacity }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className={`text-4xl md:text-6xl font-bold mb-6 ${isGlitching ? 'animate-pulse' : ''}`}
                animate={isGlitching ? {
                  x: [0, -2, 2, -2, 2, 0],
                  color: ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffffff']
                } : {}}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="inline-block"
                  animate={{ 
                    textShadow: [
                      '0 0 0px rgba(255,255,255,0)',
                      '0 0 20px rgba(255,255,255,0.5)',
                      '0 0 0px rgba(255,255,255,0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {typingText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-blue-300"
                  >
                    |
                  </motion.span>
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-blue-100 mb-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(90deg, #ffffff, #60a5fa, #ffffff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
              Since 2017
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Professional structural engineering services with 15–20% guaranteed cost savings | 240+ successful projects across Tamil Nadu
              </motion.p>
            </motion.div>

          {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                href="tel:+919159875674"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919159875674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon className="w-5 h-5" color="#ffffff" />
                WhatsApp Us
              </motion.a>
              <motion.button
              onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </motion.div>

            {/* Stats */}
            <ScrollReveal y={40} rotateX={10}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} y={20} rotateY={15}>
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.3)",
                        rotateY: 5,
                        rotateX: 5
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: index * 0.5
                    }}
                  />
                  <div className="text-2xl md:text-3xl font-bold relative z-10 text-white">
                    <CountUp target={stat.number} duration={2} />
                  </div>
                  <motion.div 
                    className="text-sm md:text-base text-blue-100 relative z-10"
                    animate={{ 
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: index * 0.1 
                    }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute top-2 right-2"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </motion.div>
      </section>

      {/* Interactive Project Showcase */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={40} rotateX={15}>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Projects
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore our most successful projects with interactive 3D showcase
              </p>
            </div>
          </ScrollReveal>
            
          <div className="relative">
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    key={currentProjectIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {featuredProjects[currentProjectIndex].title}
                  </motion.h3>
                  <motion.p 
                    className="text-blue-100 mb-6"
                    key={currentProjectIndex + 'desc'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {featuredProjects[currentProjectIndex].description}
                  </motion.p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm text-blue-100">Location</div>
                      <div className="font-semibold">{featuredProjects[currentProjectIndex].location}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm text-blue-100">Type</div>
                      <div className="font-semibold">{featuredProjects[currentProjectIndex].type}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm text-blue-100">Cost</div>
                      <div className="font-semibold">{featuredProjects[currentProjectIndex].cost}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm text-blue-100">Savings</div>
                      <div className="font-semibold text-green-300">{featuredProjects[currentProjectIndex].savings}</div>
                    </div>
            </div>
            
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setCurrentProjectIndex(prev => prev > 0 ? prev - 1 : featuredProjects.length - 1)}
                      className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={() => setCurrentProjectIndex(prev => prev < featuredProjects.length - 1 ? prev + 1 : 0)}
                      className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
            </div>
          </div>

                <div className="relative">
                  <motion.div
                    key={currentProjectIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <img
                      src={featuredProjects[currentProjectIndex].image}
                      alt={featuredProjects[currentProjectIndex].title}
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-80">Duration</div>
                      <div className="font-semibold">{featuredProjects[currentProjectIndex].duration}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={40} rotateX={15}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive structural engineering and construction consultancy services across Tamil Nadu
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15} rotateY={20} y={30}>
                <motion.div
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{service.price}</p>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work with Del Square Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={40} rotateX={15}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work with Del Square?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5 reasons clients trust us with their projects
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <ScrollReveal delay={0.1} rotateY={25} y={40}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ y: -5, rotateY: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">2-4 hour response time during business hours</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} rotateY={25} y={40}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ y: -5, rotateY: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Savings</h3>
                <p className="text-gray-600 text-sm">15-20% savings through value engineering</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} rotateY={25} y={40}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ y: -5, rotateY: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600 text-sm">8 years, 240+ projects completed</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} rotateY={25} y={40}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ y: -5, rotateY: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">Deep knowledge of Tamil Nadu regulations</p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} rotateY={25} y={40}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                whileHover={{ y: -5, rotateY: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Client Retention</h3>
              <p className="text-gray-600 text-sm">90%+ clients return for more projects</p>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="tel:+919159875674"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              Call +91 915 987 5674 to Get Started
            </motion.a>
          </motion.div>
            </div>
      </section>

      {/* Advanced Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={40} rotateX={15}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from satisfied clients across Tamil Nadu
              </p>
            </div>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Kumar Constructions",
                location: "Chennai",
                rating: 5,
                text: "Del Square delivered exceptional structural design for our 15-floor office building. Their cost optimization saved us ₹2.5L while maintaining quality standards.",
                project: "Office Building - Chennai"
              },
              {
                name: "Priya Sharma",
                company: "Sharma Developers",
                location: "Coimbatore", 
                rating: 5,
                text: "Professional team with deep local expertise. They completed our residential complex ahead of schedule with 18% cost savings. Highly recommended!",
                project: "Residential Complex - Coimbatore"
              },
              {
                name: "Suresh Patel",
                company: "Patel Industries",
                location: "Salem",
                rating: 5,
                text: "Outstanding structural audit and retrofitting services. Their recommendations improved our factory's safety rating significantly.",
                project: "Industrial Facility - Salem"
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2} y={30} rotateY={20}>
                <motion.div
                  className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <p className="text-xs text-blue-600">{testimonial.project}</p>
            </div>
                  </div>
                </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-indigo-200/30"></div>
            </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Advanced Engineering Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cutting-edge technology meets traditional engineering excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "AI-Powered Design",
                description: "Advanced algorithms optimize structural efficiency and material usage"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Earthquake Resistant",
                description: "Seismic analysis and design for Tamil Nadu's geological conditions"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Prototyping",
                description: "3D modeling and virtual testing reduce project timelines by 40%"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Green Certification",
                description: "LEED and IGBC certified sustainable building solutions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your structural engineering needs. 
            Join our list of satisfied clients across Tamil Nadu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919159875674"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: +91 915 987 5674
            </motion.a>
              <motion.a
                href="https://wa.me/919159875674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon className="w-5 h-5" color="#ffffff" />
                WhatsApp Us
              </motion.a>
          </div>
        </div>
      </section>


      {/* Live Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 300 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 300 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="w-4 h-4" color="#ffffff" />
                </div>
                <div>
                  <div className="font-semibold">Del Square Support</div>
                  <div className="text-xs text-blue-100">Online now</div>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 space-y-3" ref={chatRef}>
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm">{message.text}</div>
                    <div className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <motion.button
                  onClick={sendChatMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cost Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Cost Calculator</h3>
                <button onClick={() => setShowCalculator(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="structuralDesign">Structural Design</option>
                    <option value="projectManagement">Project Management</option>
                    <option value="siteSupervision">Site Supervision</option>
                    <option value="structuralAudit">Structural Audit</option>
                    <option value="greenBuilding">Green Building</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
                  <input
                    type="number"
                    placeholder="Enter area"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Estimated Cost</div>
                  <div className="text-2xl font-bold text-blue-800">₹1,50,000 - ₹2,00,000</div>
                  <div className="text-xs text-blue-600 mt-1">*Final cost may vary based on project complexity</div>
                </div>
                
                <motion.button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Detailed Quote
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Contact Form */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-6 w-80 bg-white rounded-2xl shadow-2xl z-40 border border-gray-200 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
            
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              />
              <textarea
                placeholder="Project Requirements"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm resize-none"
              />
              
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Upload files
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="text-blue-600 text-sm cursor-pointer hover:underline">
                  Choose Files
                </label>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-600 truncate">{file.name}</span>
                      <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                        <X className="w-4 h-4" />
        </button>
      </div>
                  ))}
                </div>
              )}
              
              <motion.button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
