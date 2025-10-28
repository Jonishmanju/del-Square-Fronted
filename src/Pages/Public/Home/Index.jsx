import React from "react";

// Components
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import PageHeader from "../../../components/common/PageHeader";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header with Icon - Hidden on mobile, shown on larger screens */}
      <div className="hidden lg:block container mx-auto px-4 pt-8">
        <PageHeader 
          page="home" 
          showDescription={true}
          className="mb-8"
        />
      </div>
      
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Home;