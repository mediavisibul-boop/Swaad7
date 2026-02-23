
import React from 'react';
import { motion } from 'framer-motion';

const PostcardCollection: React.FC = () => {
  return (
    <section id="collection" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-kora-paper paper-grain border-y border-swaad-red/10 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 text-center">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <span className="font-mono text-swaad-red font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs border-b border-swaad-red pb-1 mb-2 sm:mb-3 md:mb-4 inline-block">
            Swaad Loyalty Program
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-ink-blue mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-snug md:leading-normal">The Postcard Collection</h2>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-text-dark/70 leading-relaxed">"Collect Memories, Not Just Receipts."</p>
          <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase text-gray-500 mt-1.5 sm:mt-2 tracking-wider sm:tracking-widest px-3 sm:px-4">
            Collect 7 Stamps • Unlock 'Swaad Box' • Dhanyawaad
          </p>
            <p className="text-sm sm:text-base text-ink-blue mt-3">Slide into our DMs, tag <span className="font-bold">#SWAAD7Eats</span> — get featured.</p>
          </div>
          <div className="bg-[#f2efe6] p-2.5 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-12 rounded-xl shadow-inner border border-black/5 relative overflow-hidden">
            {/* Scalloped Border effect */}
            <div className="absolute inset-1.5 sm:inset-2 border-2 border-dashed border-ink-blue/10 rounded-lg pointer-events-none" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative z-10">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="bg-white p-1 sm:p-1.5 md:p-2 shadow-md -rotate-3 transition-transform cursor-pointer aspect-[4/5] flex flex-col touch-manipulation"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/500?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Gateway" />
              </div>
              <div className="h-5 sm:h-6 md:h-7 lg:h-8 flex items-center justify-center">
                <span className="font-mono text-[6px] sm:text-[7px] md:text-[8px] uppercase font-bold text-ink-blue">Mumbai 14 Oct</span>
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 md:-bottom-2 md:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 border border-ink-blue rounded-full flex items-center justify-center rotate-12 bg-white/50 backdrop-blur-sm">
                 <span className="material-symbols-outlined text-ink-blue text-[10px] sm:text-xs md:text-sm">check</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-1 sm:p-1.5 md:p-2 shadow-md rotate-2 transition-transform cursor-pointer aspect-[4/5] flex flex-col touch-manipulation"
            >
              <div className="flex-1 bg-gray-100 border border-black/5 overflow-hidden">
                <img src="https://picsum.photos/400/501?grayscale" className="w-full h-full object-cover opacity-60 vintage-filter" alt="Bandra" />
              </div>
              <div className="h-5 sm:h-6 md:h-7 lg:h-8 flex items-center justify-center">
                <span className="font-mono text-[6px] sm:text-[7px] md:text-[8px] uppercase font-bold text-ink-blue">Bandra 18 Oct</span>
              </div>
            </motion.div>

            {/* Empty Slots */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-[4/5] border-2 border-dashed border-gray-300 bg-black/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-white/40 transition-colors touch-manipulation p-2">
                <span className="material-symbols-outlined text-gray-400 group-hover:scale-110 transition-transform text-xl sm:text-2xl md:text-3xl">add_a_photo</span>
                <span className="font-mono text-[6px] sm:text-[7px] md:text-[8px] text-gray-400 mt-1.5 sm:mt-2 uppercase tracking-widest text-center px-1 sm:px-2 md:px-4">Place Stamp Here</span>
              </div>
            ))}

            {/* Mystery Gift */}
            <div className="aspect-[4/5] bg-swaad-yellow/10 border-2 sm:border-3 md:border-4 border-double border-swaad-yellow flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer touch-manipulation p-2">
              <div className="absolute inset-0 bg-swaad-yellow opacity-10 animate-pulse" />
              <motion.span 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="material-symbols-outlined text-swaad-yellow text-3xl sm:text-4xl md:text-5xl relative z-10"
              >
                redeem
              </motion.span>
              <span className="font-serif font-bold text-ink-blue uppercase mt-1.5 sm:mt-2 relative z-10 text-[9px] sm:text-[10px] md:text-xs">Mystery Gift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostcardCollection;
