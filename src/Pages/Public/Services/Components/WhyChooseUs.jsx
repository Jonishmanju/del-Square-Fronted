import { motion } from "framer-motion";
import { Award, Calculator, CheckCircle, MapPin } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Expert Team",
      description: "Certified structural engineers with years of experience"
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Cost Savings",
      description: "Guaranteed 15-20% cost savings through optimized design"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and site supervision"
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Local Expertise",
      description: "Deep understanding of Tamil Nadu's construction landscape"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={40} rotateX={15}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Del Square?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with cost-effective solutions to deliver exceptional results
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={(index + 1) * 0.1} y={30} rotateY={15}>
              <motion.div 
                className="text-center relative" 
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 5,
                  y: -5
                }} 
                transition={{ duration: 0.3 }} 
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                }}
              >
                {/* Animated Icon Container */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
                      "0 10px 15px -3px rgba(59, 130, 246, 0.4)",
                      "0 4px 6px -1px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Rotating Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {reason.icon}
                  </motion.div>
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  />
                </motion.div>
                
                {/* Animated Title */}
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-2"
                  whileHover={{ color: "#3B82F6", scale: 1.05 }}
                  animate={{
                    y: [0, -1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  {reason.title}
                </motion.h3>
                
                {/* Animated Description */}
                <motion.p 
                  className="text-gray-600"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {reason.description}
                </motion.p>
                
                {/* Floating Particles */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                      top: `${30 + i * 40}%`,
                      left: `${20 + i * 60}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5 + index * 0.1
                    }}
                  />
                ))}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;