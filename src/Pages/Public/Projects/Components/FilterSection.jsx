import { motion } from "framer-motion";
import { Grid3X3, Home, Building, Factory } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const FilterSection = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { name: "All Projects", icon: <Grid3X3 className="w-5 h-5" /> },
    { name: "Residential", icon: <Home className="w-5 h-5" /> },
    { name: "Commercial", icon: <Building className="w-5 h-5" /> },
    { name: "Industrial", icon: <Factory className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollReveal y={30} rotateX={10}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Browse our portfolio by category</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <ScrollReveal key={filter.name} delay={index * 0.1} y={20} rotateY={10}>
                <motion.button
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                    }`}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {filter.icon}
                  <span>{filter.name}</span>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default FilterSection;