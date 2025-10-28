import { motion } from "framer-motion";
import { Home, Building, Factory, ShoppingCart, Briefcase, Utensils, MapPin, Building2, Calendar } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const ProjectsGrid = ({ activeFilter }) => {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Vellore",
      location: "Vellore",
      year: "2024",
      type: "Residential",
      size: "3,500 sq ft",
      description: "Modern 4-bedroom luxury villa with optimized foundation design for sloped terrain",
      icon: <Home className="w-16 h-16" />,
      cost: "₹45L",
      savings: "₹8L saved",
      duration: "8 months",
      features: ["Earthquake Resistant", "Green Building", "Cost Optimized"],
      rating: 5
    },
    {
      id: 2,
      title: "Apartment Complex - Chennai",
      location: "Chennai",
      year: "2023",
      type: "Residential",
      size: "24 units, G+4",
      description: "Multi-story residential complex with earthquake-resistant design and modern amenities",
      icon: <Building className="w-16 h-16" />,
      cost: "₹2.2 Cr",
      savings: "₹35L saved",
      duration: "18 months",
      features: ["Seismic Design", "Modern Amenities", "Energy Efficient"],
      rating: 5
    },
    {
      id: 3,
      title: "Row Houses - Vellore",
      location: "Vellore",
      year: "2024",
      type: "Residential",
      size: "8 units, 12,000 sq ft",
      description: "Economical row house development with shared foundation walls and optimized design",
      icon: <Home className="w-16 h-16" />,
      cost: "₹1.8 Cr",
      savings: "₹25L saved",
      duration: "12 months",
      features: ["Shared Foundation", "Cost Effective", "Quick Delivery"],
      rating: 5
    },
    {
      id: 4,
      title: "Shopping Complex - Vellore",
      location: "Vellore",
      year: "2023",
      type: "Commercial",
      size: "25,000 sq ft",
      description: "Modern shopping complex with innovative structural solutions and 20% cost savings",
      icon: <ShoppingCart className="w-16 h-16" />
    },
    {
      id: 5,
      title: "Office Building - Chennai",
      location: "Chennai",
      year: "2023",
      type: "Commercial",
      size: "15 floors",
      description: "Corporate office building with green building features and energy-efficient design",
      icon: <Briefcase className="w-16 h-16" />
    },
    {
      id: 6,
      title: "Restaurant & Banquet - Madurai",
      location: "Madurai",
      year: "2022",
      type: "Commercial",
      size: "8,000 sq ft",
      description: "Multi-purpose commercial space with specialized structural design for hospitality",
      icon: <Utensils className="w-16 h-16" />
    },
    {
      id: 7,
      title: "Manufacturing Unit - Salem",
      location: "Salem",
      year: "2022",
      type: "Industrial",
      size: "50,000 sq ft",
      description: "Heavy-duty industrial facility with specialized structural engineering for manufacturing",
      icon: <Factory className="w-16 h-16" />
    },
    {
      id: 8,
      title: "Warehouse Complex - Coimbatore",
      location: "Coimbatore",
      year: "2021",
      type: "Industrial",
      size: "30,000 sq ft",
      description: "Large-scale warehouse with optimized structural design for heavy loads",
      icon: <Factory className="w-16 h-16" />
    },
    {
      id: 9,
      title: "Textile Factory - Erode",
      location: "Erode",
      year: "2021",
      type: "Industrial",
      size: "40,000 sq ft",
      description: "Specialized industrial facility with vibration-resistant design for textile machinery",
      icon: <Factory className="w-16 h-16" />
    }
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.15} y={30} rotateY={20}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              whileHover={{ 
                y: -10, 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
              }}
            >
              {/* Top Section - Enhanced with Animations */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating Icon */}
                <motion.div 
                  className="flex justify-center mb-4 relative z-10"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  <motion.div 
                    className="text-blue-600"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 15,
                      color: "#3B82F6"
                    }}
                  >
                    {project.icon}
                  </motion.div>
                </motion.div>
                
                {/* Animated Type Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
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
                  <span className="text-sm font-medium text-blue-600">{project.type}</span>
                </motion.div>
                
                {/* Floating Particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${15 + i * 20}%`,
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
                      delay: i * 0.3 + index * 0.1
                    }}
                  />
                ))}
              </div>
              
              {/* Bottom Section - White Background */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.size}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;