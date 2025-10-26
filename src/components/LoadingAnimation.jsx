import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading-new.json";
import logoImage from "../assets/images/del-square-logo.svg";

const LoadingAnimation = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out at 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 4500);

    // Complete at 5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 to-blue-900" 
         style={{ 
           opacity: opacity,
           transition: 'opacity 0.5s ease-in-out'
         }}>
      <div className="flex flex-col items-center">
        <img 
          src={logoImage}
          alt="Del Square Logo"
          className="w-24 h-24 mb-6"
        />
        <p className="text-white text-2xl font-semibold">Del Square Loading...</p>
      </div>
      <Lottie 
        animationData={loadingAnimation} 
        loop={false}
        style={{ width: 120, height: 120 }} 
      />
    </div>
  );
};

export default LoadingAnimation;
