import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
// import loadingAnimation from "../assets/animations/loading-new.json";
// import logoImage from "../assets/images/del-square-logo.svg";

const LoadingAnimation = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out at 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1500);

    // Complete at 2 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 to-blue-900 z-50" 
         style={{ 
           opacity: opacity,
           transition: 'opacity 0.5s ease-in-out'
         }}>
      <div className="flex flex-col items-center">
        {/* Simple Logo Placeholder */}
        <div className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-900 text-2xl font-bold">DS</span>
        </div>
        <p className="text-white text-2xl font-semibold mb-4">Del Square</p>
        
        {/* Simple Loading Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
