import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 915 987 5674",
      description: "Available Mon-Sat: 9:00 AM – 6:00 PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@delsquare.com",
      description: "We respond within 2-4 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Tamil Nadu, India",
      description: "Serving across Tamil Nadu"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM – 6:00 PM",
      description: "Sunday: Emergency only"
    }
  ];

  return (
    <div>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ScrollReveal key={index} delay={index * 0.1} y={20} rotateY={15}>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#DBEAFE",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 10px rgba(59, 130, 246, 0.2)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.2 }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900"
                      whileHover={{ color: "#3B82F6" }}
                    >
                      {info.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 font-semibold"
                      whileHover={{ color: "#1F2937" }}
                    >
                      {info.value}
                    </motion.p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>


    </div>
  );
};

export default ContactInfo;