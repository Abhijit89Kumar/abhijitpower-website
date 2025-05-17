import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary shadow-xl flex items-center justify-center text-white z-50 hover:bg-primary-dark transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
      aria-label="Scroll to top"
      whileHover={{ y: -5 }}
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;