import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 rounded-full"
          style={{
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            top: `${10 + i * 12}%`,
            left: `${5 + i * 11}%`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 10 + i * 2, 0],
            scale: [1, 1.1 + i * 0.05, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal y={40} rotateX={15}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 relative"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 0px rgba(255,255,255,0)',
                  '0 0 15px rgba(255,255,255,0.3)',
                  '0 0 0px rgba(255,255,255,0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Start Your Project?
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal y={30} delay={0.2}>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            animate={{ 
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            Join our list of successful clients and experience professional structural engineering with guaranteed cost savings.
          </motion.p>
        </ScrollReveal>

        {/* Call to Action Buttons */}
        <ScrollReveal y={30} delay={0.4}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => {
                // Scroll to contact section or navigate to contact page
                window.location.href = '/contact';
              }}
              className="bg-gradient-to-r from-white to-blue-50 text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex items-center gap-2"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">Get Free Quote</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.a
              href="tel:+919159875674"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex items-center gap-2"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <Phone className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Call Now</span>
            </motion.a>
          </motion.div>
        </ScrollReveal>

        {/* Contact Options */}
        <ScrollReveal y={30} delay={0.6}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { 
                icon: <Phone className="w-6 h-6" />, 
                title: "Call Us", 
                description: "Immediate response",
                action: () => window.location.href = 'tel:+919159875674',
                color: "from-green-400 to-emerald-500"
              },
              { 
                icon: <Mail className="w-6 h-6" />, 
                title: "Email Us", 
                description: "Detailed consultation",
                action: () => window.location.href = 'mailto:info@delsquare.com',
                color: "from-blue-400 to-cyan-500"
              },
              { 
                icon: <MessageCircle className="w-6 h-6" />, 
                title: "Get Quote", 
                description: "Free project estimate",
                action: () => window.location.href = '/contact',
                color: "from-purple-400 to-pink-500"
              }
            ].map((option, index) => (
              <motion.button
                key={index}
                onClick={option.action}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-10 rounded-lg`}
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
                
                <motion.div 
                  className="flex justify-center mb-3"
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 15
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {option.icon}
                  </motion.div>
                </motion.div>
                
                <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                <p className="text-blue-100 text-sm">{option.description}</p>
              </motion.button>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CTASection;