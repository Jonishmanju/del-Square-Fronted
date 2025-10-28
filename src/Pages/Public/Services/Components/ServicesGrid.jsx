import { motion } from "framer-motion";
import { Building2, Users, Calculator, Award, CheckCircle, MapPin } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const ServicesGrid = () => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ScrollReveal y={40} rotateX={15}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive structural engineering solutions
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 0.15} y={30} rotateY={20}>
            <motion.div
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 ${getColorClasses(service.color).split(' ')[2]} relative`}
              whileHover={{ 
                y: -10, 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 ${getColorClasses(service.color).split(' ')[1]} opacity-5 rounded-xl`}
                animate={{
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />

              <div className="p-8 relative z-10">
                {/* Animated Icon Container */}
                <motion.div 
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)} relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Icon Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                
                {/* Animated Title */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#3B82F6", scale: 1.02 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Animated Price */}
                <motion.p 
                  className="text-lg font-semibold text-blue-600 mb-4"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {service.price}
                </motion.p>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Animated Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (index * 0.1) + (featureIndex * 0.05) 
                      }}
                      whileHover={{ x: 5, color: "#374151" }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: featureIndex * 0.2
                        }}
                      >
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                      </motion.div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 ${getColorClasses(service.color).split(' ')[0]} rounded-full opacity-40`}
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2 + i * 0.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;