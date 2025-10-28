import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Award, Users, MapPin } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;

  useEffect(() => {
    let start = 0;
    const increment = numericValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <motion.span
      animate={{ 
        y: [0, -3, 0],
        scale: [1, 1.02, 1]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {value.includes('+') ? `${count}+` : 
       value.includes('%') ? `${count}%` : 
       value.includes('-') ? `${count}-20%` : count}
    </motion.span>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "240+",
      label: "Projects Completed",
      description: "Successfully delivered across Tamil Nadu",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15-20%",
      label: "Cost Savings",
      description: "Guaranteed savings for all clients",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Consistent quality and service",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "2017",
      label: "Since",
      description: "Years of trusted service",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={40} rotateX={15}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index} delay={index * 0.1} y={30} rotateY={20}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 rounded-xl`}
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

                {/* Animated Icon Container */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
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
                  {/* Rotating Glow */}
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
                      delay: index * 0.2
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                </motion.div>
                
                {/* Animated Number */}
                <div className="text-3xl font-bold text-gray-900 mb-2 relative z-10">
                  <AnimatedNumber value={achievement.number} duration={2 + index * 0.3} />
                </div>
                
                {/* Animated Label */}
                <motion.div 
                  className="text-lg font-semibold text-gray-700 mb-2 relative z-10"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {achievement.label}
                </motion.div>
                
                <div className="text-sm text-gray-600 relative z-10">{achievement.description}</div>
                
                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${15 + i * 20}%`,
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
                      delay: index * 0.2 + i * 0.3
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

export default AchievementsSection;