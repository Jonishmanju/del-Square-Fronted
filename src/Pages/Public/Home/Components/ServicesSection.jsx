import React from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Calculator, Award, CheckCircle, MapPin, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Structural Design",
      price: "₹90K – ₹1.2L",
      description: "Professional structural engineering with modern design principles",
      features: ["3D Modeling", "Load Analysis", "Safety Compliance"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      price: "₹2L – ₹4L",
      description: "End-to-end project management for seamless execution",
      features: ["Timeline Management", "Quality Control", "Cost Optimization"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Cost Efficient Solutions",
      price: "15–20% Savings",
      description: "Guaranteed cost savings through optimized design",
      features: ["Material Optimization", "Design Efficiency", "Budget Planning"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Green Building",
      price: "Custom Pricing",
      description: "Sustainable and eco-friendly building solutions",
      features: ["LEED Certification", "Energy Efficiency", "Sustainable Materials"],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Structural Audit",
      price: "Custom Pricing",
      description: "Comprehensive structural assessment and safety evaluation",
      features: ["Safety Assessment", "Compliance Check", "Repair Recommendations"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Site Supervision",
      price: "₹12K – ₹18K",
      description: "Professional on-site supervision and quality control",
      features: ["Quality Monitoring", "Progress Tracking", "Safety Oversight"],
      gradient: "from-red-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-gray-100/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive structural engineering solutions for all your construction needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Animated Icon Container */}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white relative`}
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <motion.p 
                className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                whileHover={{ scale: 1.05 }}
              >
                {service.price}
              </motion.p>
              
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                className="flex items-center text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200 group/btn"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </motion.button>

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full opacity-20`}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5 + index * 0.1
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;