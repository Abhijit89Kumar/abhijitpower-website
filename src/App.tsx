import React, { useState, useEffect, ErrorInfo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brochures from './components/Brochures';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

// Error boundary to prevent the entire app from crashing
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but there was an error loading the page. Please try refreshing the browser.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

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

  // Add a console log to help with debugging
  useEffect(() => {
    console.log('App mounted successfully');
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <ErrorBoundary>
      <div className="font-inter text-gray-800">
        {/* Splash Screen */}
        <AnimatePresence>
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence>
          {!showSplash && (
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Brochures />
              <Testimonials />
              <Locations />
              <Contact />
              <Footer />
            </>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollButton && !showSplash && <ScrollToTop />}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}

export default App;