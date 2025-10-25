import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Building2, MapPin, Calendar, Users, Home, Building, Factory, Grid3X3, ShoppingCart, Briefcase, Utensils, Star, Award, Zap, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowStats(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Vellore",
      location: "Vellore",
      year: "2024",
      type: "Residential",
      size: "3,500 sq ft",
      description: "Modern 4-bedroom luxury villa with optimized foundation design for sloped terrain",
      icon: <Home className="w-16 h-16" />,
      cost: "₹45L",
      savings: "₹8L saved",
      duration: "8 months",
      features: ["Earthquake Resistant", "Green Building", "Cost Optimized"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Apartment Complex - Chennai",
      location: "Chennai",
      year: "2023",
      type: "Residential",
      size: "24 units, G+4",
      description: "Multi-story residential complex with earthquake-resistant design and modern amenities",
      icon: <Building className="w-16 h-16" />,
      cost: "₹2.2 Cr",
      savings: "₹35L saved",
      duration: "18 months",
      features: ["Seismic Design", "Modern Amenities", "Energy Efficient"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Row Houses - Vellore",
      location: "Vellore",
      year: "2024",
      type: "Residential",
      size: "8 units, 12,000 sq ft",
      description: "Economical row house development with shared foundation walls and optimized design",
      icon: <Home className="w-16 h-16" />,
      cost: "₹1.8 Cr",
      savings: "₹25L saved",
      duration: "12 months",
      features: ["Shared Foundation", "Cost Effective", "Quick Delivery"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Shopping Complex - Vellore",
      location: "Vellore",
      year: "2023",
      type: "Commercial",
      size: "25,000 sq ft",
      description: "Modern shopping complex with innovative structural solutions and 20% cost savings",
      icon: <ShoppingCart className="w-16 h-16" />
    },
    {
      id: 5,
      title: "Office Building - Chennai",
      location: "Chennai",
      year: "2023",
      type: "Commercial",
      size: "15 floors",
      description: "Corporate office building with green building features and energy-efficient design",
      icon: <Briefcase className="w-16 h-16" />
    },
    {
      id: 6,
      title: "Restaurant & Banquet - Madurai",
      location: "Madurai",
      year: "2022",
      type: "Commercial",
      size: "8,000 sq ft",
      description: "Multi-purpose commercial space with specialized structural design for hospitality",
      icon: <Utensils className="w-16 h-16" />
    },
    {
      id: 7,
      title: "Manufacturing Unit - Salem",
      location: "Salem",
      year: "2022",
      type: "Industrial",
      size: "50,000 sq ft",
      description: "Heavy-duty industrial facility with specialized structural engineering for manufacturing",
      icon: <Factory className="w-16 h-16" />
    },
    {
      id: 8,
      title: "Warehouse Complex - Coimbatore",
      location: "Coimbatore",
      year: "2021",
      type: "Industrial",
      size: "30,000 sq ft",
      description: "Large-scale warehouse with optimized structural design for heavy loads",
      icon: <Factory className="w-16 h-16" />
    },
    {
      id: 9,
      title: "Textile Factory - Erode",
      location: "Erode",
      year: "2021",
      type: "Industrial",
      size: "40,000 sq ft",
      description: "Specialized industrial facility with vibration-resistant design for textile machinery",
      icon: <Factory className="w-16 h-16" />
    }
  ];

  const filters = [
    { name: "All Projects", icon: <Grid3X3 className="w-5 h-5" /> },
    { name: "Residential", icon: <Home className="w-5 h-5" /> },
    { name: "Commercial", icon: <Building className="w-5 h-5" /> },
    { name: "Industrial", icon: <Factory className="w-5 h-5" /> }
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              Our Completed Projects
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            240+ Successful Projects Across Tamil Nadu
          </motion.p>
          {/* Animated Stats */}
          {showStats && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { number: "240+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
                { number: "₹68L", label: "Total Savings", icon: <TrendingUp className="w-6 h-6" /> },
                { number: "100%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
                { number: "15-20%", label: "Cost Reduction", icon: <Shield className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  <div className="flex items-center justify-center mb-2">
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
                      {stat.icon}
                    </motion.div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold relative z-10">{stat.number}</div>
                  <div className="text-sm md:text-base text-blue-100 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Browse our portfolio by category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon}
                <span>{filter.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Top Section - Light Blue Background */}
              <div className="bg-blue-50 p-8 relative">
                <div className="flex justify-center mb-4">
                  <div className="text-blue-600">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-blue-600">{project.type}</span>
                </div>
              </div>
              
              {/* Bottom Section - White Background */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.size}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our list of successful clients and experience professional structural engineering with guaranteed cost savings.
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
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
