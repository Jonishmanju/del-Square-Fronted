import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Building2, TrendingUp } from "lucide-react";

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Chennai IT Park",
      location: "Chennai",
      type: "Commercial",
      cost: "₹2.5 Cr",
      duration: "18 months",
      savings: "₹45L saved",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "Modern IT park with earthquake-resistant design and green building features",
      highlights: ["Earthquake Resistant", "Green Building", "LEED Certified"]
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
      description: "Premium residential complex with optimized foundation design",
      highlights: ["Optimized Foundation", "Premium Design", "Cost Efficient"]
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
      description: "Heavy-duty industrial facility with specialized structural engineering",
      highlights: ["Heavy-duty Structure", "Specialized Engineering", "Safety Compliant"]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful structural engineering projects across Tamil Nadu
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentProject.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {currentProject.savings}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h3>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{currentProject.cost}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{currentProject.duration}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-lg">
                    {currentProject.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Savings Highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                    <div className="text-green-800 font-semibold text-lg">
                      Cost Savings: {currentProject.savings}
                    </div>
                    <div className="text-green-600 text-sm">
                      Through optimized structural design and efficient project management
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>
          
          <motion.button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;