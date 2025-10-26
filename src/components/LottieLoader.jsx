import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LottieLoader = ({ 
  animationUrl = "https://lottie.host/embed/f6c9e031-fc8e-46a0-9ddc-ce994daf0d19/D4hIY3hG3B.json",
  width = 200,
  height = 200,
  className = ""
}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationUrl)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, [animationUrl]);

  if (!animationData) {
    return null;
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div style={{ width, height }}>
        <Lottie 
          animationData={animationData}
          loop={true} 
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default LottieLoader;

