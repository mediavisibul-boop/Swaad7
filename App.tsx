
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import SwaadRath from './components/SwaadRath';
import Sarthis from './components/Sarthis';
import SecretMasala from './components/SecretMasala';
import PostcardCollection from './components/PostcardCollection';
import SwaadShield from './components/SwaadShield';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-kora-paper min-h-screen relative overflow-x-hidden selection:bg-swaad-yellow selection:text-swaad-red">

      {/* Progress Bar (Flying Postcard Path) */}
      <div className="fixed left-0 right-0 top-0 h-0.5 sm:h-1 z-[60]">
        <motion.div
          className="h-full bg-swaad-red relative"
          style={{ scaleX, originX: 0 }}
        >
          {/* Flying Postcard */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span className="material-symbols-outlined text-swaad-red transform rotate-45 text-2xl">
                near_me
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Header />
      
      <main>
        <Hero />
        <SwaadRath />
        <SecretMasala />
        <PostcardCollection />
        <SwaadShield />
      </main>

      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 z-[100] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform group touch-manipulation min-h-[44px] min-w-[44px]"
            aria-label="Back to top"
          >
            <span className="material-symbols-outlined text-swaad-red text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:-translate-y-1 transition-transform">
              vertical_align_top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chai Stains Scattered - Hidden on mobile for performance */}
      <ChaiStain className="hidden md:block top-[15%] left-[5%] opacity-[0.08]" rotate={45} />
      <ChaiStain className="hidden md:block top-[45%] right-[2%] opacity-[0.05]" rotate={-15} />
      <ChaiStain className="hidden lg:block bottom-[10%] left-[8%] opacity-[0.07]" rotate={105} />
    </div>
  );
};

const ChaiStain: React.FC<{ className?: string; rotate?: number }> = ({ className, rotate = 0 }) => (
  <div
    className={`fixed pointer-events-none w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-[8px] sm:border-[10px] md:border-[12px] border-amber-900/30 rounded-full ${className}`}
    style={{ 
      transform: `rotate(${rotate}deg)`,
      filter: 'blur(3px) md:blur(4px)',
      boxShadow: 'inset 0 0 30px rgba(120, 60, 0, 0.1)' 
    }}
  />
);

export default App;
