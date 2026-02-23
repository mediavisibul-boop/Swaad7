
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickerConfetti: React.FC = () => {
  const [stickers, setStickers] = useState<{ id: number; left: number; delay: number; rotate: number }[]>([]);

  useEffect(() => {
    const newStickers = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      rotate: Math.random() * 360,
    }));
    setStickers(newStickers);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {stickers.map((s) => (
        <motion.div
          key={s.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 1, 0], rotate: s.rotate }}
          transition={{ duration: 3, delay: s.delay, ease: "linear" }}
          className="absolute w-8 h-8 bg-swaad-yellow rounded-full border border-swaad-red flex items-center justify-center text-[10px] font-black text-swaad-red shadow-lg"
          style={{ left: `${s.left}%` }}
        >
          S7
        </motion.div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <footer className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative text-center min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Confetti Trigger */}
      <motion.div 
        onViewportEnter={() => setShowConfetti(true)}
        className="absolute top-0 w-full h-1"
      />
      {showConfetti && <StickerConfetti />}

      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="relative z-10 max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-serif font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-swaad-yellow leading-tight sm:leading-snug md:leading-normal"
          >
            SWAAD7 — Mumbai ka Roz ka Food Stop
          </motion.h2>
          
          <p className="font-serif font-bold text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-snug md:leading-relaxed px-2">
            Catch us rolling near you — check the schedule 👀
          </p>
          <p className="text-sm text-gray-400 mt-2">Follow the flavor on socials: IG • TikTok • WhatsApp • Snapchat</p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 flex-wrap px-2">
            <img 
              src="/logos/Vector-2.png" 
              alt="SWAAD7" 
              className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-auto"
            />
            <span className="font-serif font-bold text-swaad-yellow text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-snug">
              — Mumbai ka Roz ka Swaad.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-6 sm:pt-7 md:pt-8 lg:pt-9 xl:pt-10 px-2 sm:px-3">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 bg-swaad-yellow text-black px-4 sm:px-5 md:px-6 lg:px-7 py-2.5 sm:py-3 md:py-3 lg:py-3.5 rounded-lg shadow-lg font-serif font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg uppercase min-h-[44px] sm:min-h-[48px] md:min-h-[52px] w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">location_on</span>
            <span className="text-center sm:text-left">Check schedule</span>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 bg-white text-black px-4 sm:px-5 md:px-6 lg:px-7 py-2.5 sm:py-3 md:py-3 lg:py-3.5 rounded-lg shadow-lg font-serif font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg uppercase border-2 border-swaad-yellow min-h-[44px] sm:min-h-[48px] md:min-h-[52px] w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0">call</span>
            <span className="text-center sm:text-left">Follow the flavor</span>
          </motion.a>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 border-t border-gray-800">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-gray-400 font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] px-3 sm:px-4">
            <span>©</span>
            <img 
              src="/logos/Vector-2.png" 
              alt="SWAAD7" 
              className="h-3 sm:h-3.5 md:h-4 lg:h-4.5 xl:h-5 w-auto opacity-80"
            />
            <span>| Taste. Laugh. Repeat.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
