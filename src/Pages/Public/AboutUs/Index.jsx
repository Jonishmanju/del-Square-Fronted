import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Building2, Award, Users, CheckCircle, MapPin, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "../../../components/animations/ScrollReveal";

const AboutUs = () => {
  const theme = useContext(ThemeContext);

  const achievements = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "240+",
      label: "Projects Completed",
      description: "Successfully delivered across Tamil Nadu"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15-20%",
      label: "Cost Savings",
      description: "Guaranteed savings for all clients"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Consistent quality and service"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "2017",
      label: "Since",
      description: "Years of trusted service"
    }
  ];

  const values = [
    {
      title: "Safety First",
      description: "We prioritize structural safety and compliance with all building codes and regulations."
    },
    {
      title: "Cost Efficiency",
      description: "Our optimized designs guarantee 15-20% cost savings without compromising quality."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and site supervision ensure exceptional project delivery."
    },
    {
      title: "Innovation",
      description: "We embrace modern engineering techniques and sustainable building practices."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Chief Structural Engineer",
      experience: "15+ years",
      specialization: "High-rise buildings and industrial structures"
    },
    {
      name: "Priya Sharma",
      position: "Project Manager",
      experience: "12+ years",
      specialization: "End-to-end project management and coordination"
    },
    {
      name: "Suresh Patel",
      position: "Green Building Consultant",
      experience: "10+ years",
      specialization: "Sustainable design and LEED certification"
    }
  ];

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
            About Del Square
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in structural engineering and construction consultancy since 2017
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal y={30} rotateY={15}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2017, Del Square has been at the forefront of structural engineering innovation, 
                    providing cutting-edge solutions with a focus on safety, efficiency, and cost-effectiveness. 
                    We believe that every construction project deserves professional engineering expertise.
                  </p>
                  <p>
                    Our state-of-the-art design processes combine advanced technology with practical experience, 
                    ensuring that each project receives the best possible structural solutions in a timely and 
                    cost-effective manner.
                  </p>
                  <p>
                    With over 240 successful projects and a track record of delivering 15-20% cost savings, 
                    we continue to set new standards in structural engineering excellence across Tamil Nadu.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} y={30} rotateY={-15}>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Del Square?</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
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
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={40} rotateX={15}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the certified professionals who make Del Square a trusted name in structural engineering
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.15} y={30} rotateY={15}>
                <motion.div
                  className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience} experience</p>
                <p className="text-gray-600 text-sm">{member.specialization}</p>
              </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our list of satisfied clients and experience professional structural engineering 
            with guaranteed cost savings.
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

export default AboutUs;