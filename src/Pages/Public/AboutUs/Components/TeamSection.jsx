import { motion } from "framer-motion";
import { Users } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const TeamSection = () => {
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
  );
};

export default TeamSection;