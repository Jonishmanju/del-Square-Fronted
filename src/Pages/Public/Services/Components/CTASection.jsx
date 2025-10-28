import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, Star, Users, Award } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 rounded-full"
          style={{
            width: `${15 + i * 6}px`,
            height: `${15 + i * 6}px`,
            top: `${5 + i * 8}%`,
            left: `${3 + i * 8}%`,
          }}
          animate={{
            y: [0, -40 - i * 8, 0],
            x: [0, 15 + i * 3, 0],
            scale: [1, 1.2 + i * 0.08, 1],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-xl"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.15, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
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
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
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
            Get a free consultation and quote for your structural engineering needs. 
            Join our list of satisfied clients across Tamil Nadu.
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
              <span className="relative z-10">Get Free Consultation</span>
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

        {/* Service Highlights */}
        <ScrollReveal y={30} delay={0.6}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { 
                icon: <Star className="w-6 h-6" />, 
                title: "240+ Projects", 
                description: "Successfully completed",
                color: "from-yellow-400 to-orange-500"
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "100% Satisfaction", 
                description: "Client satisfaction rate",
                color: "from-green-400 to-emerald-500"
              },
              { 
                icon: <Award className="w-6 h-6" />, 
                title: "15-20% Savings", 
                description: "Guaranteed cost reduction",
                color: "from-purple-400 to-pink-500"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center relative overflow-hidden border border-white/20"
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
                  className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-10 rounded-lg`}
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
                    {highlight.icon}
                  </motion.div>
                </motion.div>
                
                <motion.h4 
                  className="text-lg font-semibold mb-2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  {highlight.title}
                </motion.h4>
                <p className="text-blue-100 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Contact Options */}
        <ScrollReveal y={30} delay={0.8}>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { 
                icon: <Phone className="w-5 h-5" />, 
                text: "Call: +91 915 987 5674",
                action: () => window.location.href = 'tel:+919159875674'
              },
              { 
                icon: <Mail className="w-5 h-5" />, 
                text: "Email: info@delsquare.com",
                action: () => window.location.href = 'mailto:info@delsquare.com'
              },
              { 
                icon: <MessageCircle className="w-5 h-5" />, 
                text: "Get Quote",
                action: () => window.location.href = '/contact'
              }
            ].map((contact, index) => (
              <motion.button
                key={index}
                onClick={contact.action}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {contact.icon}
                </motion.div>
                <span>{contact.text}</span>
              </motion.button>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CTASection;