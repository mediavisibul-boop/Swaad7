
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kora-paper/80 backdrop-blur-md border-b-2 border-dashed border-swaad-red/20 py-2.5 sm:py-3 md:py-3.5 lg:py-4">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Go to top"
        >
          <img 
            src="/logos/Vector-3.png" 
            alt="SWAAD7 Logo" 
            className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 2xl:h-11 w-auto"
          />
        </motion.button>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 font-mono text-[11px] md:text-xs lg:text-sm xl:text-[15px] tracking-wide text-ink-blue">
          <a href="#hero" className="hover:text-swaad-red transition-colors whitespace-nowrap py-2 px-1.5 min-h-[44px] flex items-center">Postmark</a>
          <a href="#rath" className="hover:text-swaad-red transition-colors whitespace-nowrap py-2 px-1.5 min-h-[44px] flex items-center">About Us</a>
          <a href="#sarthis" className="hover:text-swaad-red transition-colors whitespace-nowrap py-2 px-1.5 min-h-[44px] flex items-center">Sarthis</a>
          <a href="#masala" className="hover:text-swaad-red transition-colors whitespace-nowrap py-2 px-1.5 min-h-[44px] flex items-center">Our Flavor Philosophy</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-ink-blue text-white px-2.5 sm:px-3 md:px-3.5 lg:px-4 xl:px-5 2xl:px-6 py-2 sm:py-2.5 md:py-2.5 lg:py-3 rounded shadow-[2px_2px_0px_#A60000] sm:shadow-[3px_3px_0px_#A60000] md:shadow-[4px_4px_0px_#A60000] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-wide sm:tracking-wider md:tracking-widest hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex-shrink-0 min-h-[44px]"
          aria-label="Get Ticket"
        >
          <span className="material-symbols-outlined text-xs sm:text-sm md:text-base">confirmation_number</span>
          <span className="hidden sm:inline">Ticket</span>
          <span className="sm:hidden">Get</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
