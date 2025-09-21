import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content immediately
    setShowContent(true);

    // Animate progress bar over 10 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // Update every 100ms to reach 100% in 10 seconds

    // Complete loading after 10 seconds
    const completeTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      {showContent && (
        <div className="relative z-10 text-center w-full max-w-4xl px-4">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-yellow-400">STARZ</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              UNIVERSITY
            </h2>
          </div>

          {/* Taglines */}
          <div className="mb-12 animate-fade-in-up space-y-2">
            <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-medium">
              TECHNOLOGY IS OUR PASSION
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl">
              EDUCATION IS OUR LIFE
            </p>
          </div>

          {/* University Shield/Crest Logo */}
          <div className="mb-16 animate-scale-in">
            <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 mx-auto bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg shadow-2xl flex flex-col items-center justify-center relative">
              {/* Shield background */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg"></div>
              
              {/* Shield content */}
              <div className="relative z-10 text-black text-center p-2">
                <div className="text-xs sm:text-sm font-bold mb-1">STARZ UNIVERSITY</div>
                <div className="text-lg sm:text-xl md:text-2xl font-black">STARZ</div>
                <div className="text-xs sm:text-sm mt-1">EST. 2010</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-600"></div>
            </div>
          </div>

          {/* Loading Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-300 text-sm">
              Loading... {progress}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;

