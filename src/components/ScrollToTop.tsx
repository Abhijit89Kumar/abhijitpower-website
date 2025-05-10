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
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-white z-50 hover:bg-primary-dark transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;