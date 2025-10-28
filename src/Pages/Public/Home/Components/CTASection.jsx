import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "15-20% Guaranteed Cost Savings",
    "Professional Engineering Expertise",
    "Timely Project Delivery",
    "Safety & Compliance Assured"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Pattern background: encode the SVG at runtime to avoid breaking JSX with inner quotes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.05\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></g></svg>`
          )}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Next Project?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Get professional structural engineering services with guaranteed cost savings. 
              Let's build something amazing together.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-100">+91 98765 43210</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">info@delsquare.com</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">Chennai, Tamil Nadu</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">240+</div>
                <div className="text-sm text-blue-100">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹68L</div>
                <div className="text-sm text-blue-100">Saved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;