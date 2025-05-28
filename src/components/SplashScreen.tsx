import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    // Auto-hide after 3.5 seconds total (including animation time)
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onComplete}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
        {/* Image container with animation */}
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          initial={{
            scale: 0.7,
            opacity: 0,
            y: 60,
            rotateY: -15
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            rotateY: 0
          }}
          exit={{
            scale: 1.1,
            opacity: 0,
            y: -40,
            rotateY: 15
          }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
            delay: 0.2
          }}
        >
          {/* Image with shadow and border radius */}
          <img
            src="/assets/no1-genset-f25.jpg"
            alt="Powerol - India's No.1 Genset Manufacturer"
            className="w-full h-auto rounded-2xl shadow-2xl"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))'
            }}
          />

          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 0 60px rgba(255, 255, 255, 0.2)'
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="mt-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Welcome text */}
        <motion.p
          className="mt-4 text-white text-lg font-medium text-center opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Welcome to Abhijit Power
        </motion.p>

        {/* Skip indicator */}
        <motion.p
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Tap anywhere to continue
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
