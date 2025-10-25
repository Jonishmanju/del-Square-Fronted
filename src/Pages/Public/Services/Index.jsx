import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Building2, Users, Calculator, Award, CheckCircle, MapPin, Phone, MessageCircle } from "lucide-react";

const Services = () => {
  const theme = useContext(ThemeContext);

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Structural Design",
      price: "₹90K – ₹1.2L",
      description: "Professional structural engineering with modern design principles and safety standards",
      features: [
        "Residential & Commercial Buildings",
        "Industrial Structures",
        "Earthquake Resistant Design",
        "Load Analysis & Calculations",
        "Foundation Design",
        "Steel & Concrete Structures"
      ],
      color: "blue"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Project Management",
      price: "₹2L – ₹4L",
      description: "End-to-end project management ensuring timely delivery and quality control",
      features: [
        "Project Planning & Scheduling",
        "Resource Management",
        "Quality Control",
        "Progress Monitoring",
        "Risk Management",
        "Stakeholder Coordination"
      ],
      color: "green"
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "Cost Efficient Solutions",
      price: "15–20% Savings",
      description: "Guaranteed cost savings through optimized design and material selection",
      features: [
        "Material Optimization",
        "Design Efficiency",
        "Construction Method Analysis",
        "Value Engineering",
        "Cost-Benefit Analysis",
        "Budget Planning"
      ],
      color: "purple"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Green Building",
      price: "Custom Pricing",
      description: "Sustainable and eco-friendly building solutions with green certifications",
      features: [
        "LEED Certification",
        "Energy Efficient Design",
        "Sustainable Materials",
        "Water Conservation",
        "Waste Management",
        "Environmental Impact Assessment"
      ],
      color: "emerald"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Structural Audit",
      price: "Custom Pricing",
      description: "Comprehensive structural assessment and recommendations for existing buildings",
      features: [
        "Structural Assessment",
        "Safety Evaluation",
        "Repair Recommendations",
        "Compliance Checking",
        "Load Testing",
        "Retrofitting Solutions"
      ],
      color: "orange"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Site Supervision",
      price: "₹12K – ₹18K",
      description: "Professional on-site supervision ensuring quality and adherence to plans",
      features: [
        "Daily Site Visits",
        "Quality Control",
        "Progress Monitoring",
        "Safety Compliance",
        "Material Verification",
        "Workmanship Standards"
      ],
      color: "red"
    }
  ];

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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional structural engineering and construction consultancy services with guaranteed cost savings
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 ${getColorClasses(service.color).split(' ')[2]}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle size={16} className="mr-2 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Del Square?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with cost-effective solutions to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified structural engineers with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">Guaranteed 15-20% cost savings through optimized design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control and site supervision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Tamil Nadu's construction landscape</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
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
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
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
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;