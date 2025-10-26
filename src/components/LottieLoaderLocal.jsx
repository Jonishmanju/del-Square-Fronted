import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading-animation.json';

const LottieLoaderLocal = ({ 
  width = 200,
  height = 200,
  className = ""
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div style={{ width, height }}>
        <Lottie 
          animationData={loadingAnimation}
          loop={true} 
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default LottieLoaderLocal;

