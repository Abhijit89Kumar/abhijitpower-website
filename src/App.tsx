import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brochures from './components/Brochures';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-inter text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brochures />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
      <AnimatePresence>
        {showScrollButton && <ScrollToTop />}
      </AnimatePresence>
    </div>
  );
}

export default App;