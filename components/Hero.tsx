
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Authentic Mandala SVG Component with petal patterns
  const MandalaIcon = ({ className }: { className?: string }) => {
    const centerX = 150;
    const centerY = 150;
    const petals = 8; // Number of petals
    
    // Generate petal paths
    const createPetal = (radius: number, petalIndex: number, innerRadius: number = 0) => {
      const angle = (petalIndex * 360) / petals;
      const rad = (angle * Math.PI) / 180;
      const outerX = centerX + radius * Math.cos(rad);
      const outerY = centerY + radius * Math.sin(rad);
      const innerX = centerX + innerRadius * Math.cos(rad);
      const innerY = centerY + innerRadius * Math.sin(rad);
      
      // Create petal shape (almond/teardrop)
      const controlAngle1 = ((angle - 20) * Math.PI) / 180;
      const controlAngle2 = ((angle + 20) * Math.PI) / 180;
      const controlX1 = centerX + (radius * 0.7) * Math.cos(controlAngle1);
      const controlY1 = centerY + (radius * 0.7) * Math.sin(controlAngle1);
      const controlX2 = centerX + (radius * 0.7) * Math.cos(controlAngle2);
      const controlY2 = centerY + (radius * 0.7) * Math.sin(controlAngle2);
      
      return `M ${innerX} ${innerY} Q ${controlX1} ${controlY1} ${outerX} ${outerY} Q ${controlX2} ${controlY2} ${innerX} ${innerY} Z`;
    };

    return (
      <svg className={className} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        {/* Outer decorative circle */}
        <circle cx={centerX} cy={centerY} r="130" fill="none" stroke="#A60000" strokeWidth="1.2" opacity="0.18"/>
        <circle cx={centerX} cy={centerY} r="125" fill="none" stroke="#A60000" strokeWidth="1" opacity="0.18"/>
        
        {/* Outer petal layer */}
        {Array.from({ length: petals }).map((_, i) => (
          <path
            key={`outer-${i}`}
            d={createPetal(110, i, 95)}
            fill="none"
            stroke="#A60000"
            strokeWidth="0.9"
            opacity="0.22"
          />
        ))}
        
        {/* Middle decorative circles */}
        <circle cx={centerX} cy={centerY} r="90" fill="none" stroke="#A60000" strokeWidth="0.7" opacity="0.18"/>
        <circle cx={centerX} cy={centerY} r="85" fill="none" stroke="#A60000" strokeWidth="0.6" opacity="0.18"/>
        
        {/* Middle petal layer */}
        {Array.from({ length: petals }).map((_, i) => (
          <path
            key={`middle-${i}`}
            d={createPetal(75, i, 60)}
            fill="none"
            stroke="#A60000"
            strokeWidth="0.7"
            opacity="0.22"
          />
        ))}
        
        {/* Inner decorative circles */}
        <circle cx={centerX} cy={centerY} r="55" fill="none" stroke="#A60000" strokeWidth="0.6" opacity="0.18"/>
        <circle cx={centerX} cy={centerY} r="50" fill="none" stroke="#A60000" strokeWidth="0.5" opacity="0.18"/>
        
        {/* Inner petal layer */}
        {Array.from({ length: petals }).map((_, i) => (
          <path
            key={`inner-${i}`}
            d={createPetal(40, i, 30)}
            fill="none"
            stroke="#A60000"
            strokeWidth="0.6"
            opacity="0.22"
          />
        ))}
        
        {/* Center decorative elements */}
        <circle cx={centerX} cy={centerY} r="25" fill="none" stroke="#A60000" strokeWidth="0.5" opacity="0.18"/>
        <circle cx={centerX} cy={centerY} r="20" fill="none" stroke="#A60000" strokeWidth="0.4" opacity="0.18"/>
        
        {/* Center small petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6;
          const rad = (angle * Math.PI) / 180;
          const x = centerX + 12 * Math.cos(rad);
          const y = centerY + 12 * Math.sin(rad);
          return (
            <circle key={`center-${i}`} cx={x} cy={y} r="3" fill="#A60000" opacity="0.15"/>
          );
        })}
        
        {/* Center dot */}
        <circle cx={centerX} cy={centerY} r="5" fill="#A60000" opacity="0.15"/>
        
        {/* Decorative dots around outer edge */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x = centerX + 120 * Math.cos(rad);
          const y = centerY + 120 * Math.sin(rad);
          return (
            <circle key={`dot-${i}`} cx={x} cy={y} r="1.5" fill="#A60000" opacity="0.15"/>
          );
        })}
      </svg>
    );
  };

  return (
    <section id="hero" className="relative pt-[72px] sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 flex items-center justify-center overflow-hidden min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-88px)]">
      {/* Faded Mandala Background Patterns */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top Left Mandala */}
        <div className="absolute top-[8%] left-[3%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-55 sm:opacity-65 md:opacity-75">
          <MandalaIcon className="w-full h-full" />
        </div>
        {/* Top Right Mandala */}
        <div className="absolute top-[12%] right-[5%] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 opacity-50 sm:opacity-60 md:opacity-70 rotate-45">
          <MandalaIcon className="w-full h-full" />
        </div>
        {/* Bottom Left Mandala */}
        <div className="absolute bottom-[10%] left-[6%] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 opacity-53 sm:opacity-63 md:opacity-73 -rotate-12">
          <MandalaIcon className="w-full h-full" />
        </div>
        {/* Bottom Right Mandala */}
        <div className="absolute bottom-[8%] right-[4%] w-30 h-30 sm:w-38 sm:h-38 md:w-46 md:h-46 lg:w-54 lg:h-54 opacity-50 sm:opacity-60 md:opacity-70 rotate-90">
          <MandalaIcon className="w-full h-full" />
        </div>
        {/* Center Large Faded Mandala */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-40 sm:opacity-50 md:opacity-60">
          <MandalaIcon className="w-full h-full" />
        </div>
        {/* Additional smaller mandalas for better coverage */}
        <div className="absolute top-[25%] left-[20%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-45 sm:opacity-55 md:opacity-65 rotate-30">
          <MandalaIcon className="w-full h-full" />
        </div>
        <div className="absolute bottom-[20%] right-[18%] w-26 h-26 sm:w-34 sm:h-34 md:w-42 md:h-42 opacity-45 sm:opacity-55 md:opacity-65 -rotate-30">
          <MandalaIcon className="w-full h-full" />
        </div>
      </div>
      
      <div className="relative z-[2] max-w-[1920px] w-full px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -2, y: 40 }}
          animate={{ opacity: 1, rotate: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-1 sm:p-1.5 md:p-2 shadow-xl sm:shadow-2xl md:shadow-2xl border-2 sm:border-3 md:border-4 border-dashed border-swaad-red/10 max-w-4xl mx-auto"
        >
          <div className="border-2 sm:border-[2.5px] md:border-[3px] border-double border-swaad-red/30 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 relative">
            {/* Stamp Detail */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 xl:-top-8 xl:-right-8 2xl:-top-10 2xl:-right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white border-2 sm:border-[2.5px] md:border-3 lg:border-4 border-dashed border-swaad-red rounded-full shadow-lg flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="text-center">
                <span className="block text-swaad-red text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] font-mono uppercase leading-tight">Via Air Mail</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-black text-ink-blue leading-none">7</span>
                <span className="block text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] font-bold text-swaad-red mt-0.5 sm:mt-1 uppercase leading-tight">Swaad Post</span>
              </div>
            </motion.div>

            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
              <span className="inline-block font-calibri text-swaad-red text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] border-b-2 border-swaad-red/10 pb-1 sm:pb-1.5 md:pb-2">
                Priority Dispatch
              </span>
              
              <div className="flex justify-center py-0.5 sm:py-1 md:py-1.5">
                <img 
                  src="/logos/LogoVertical.png" 
                  alt="SWAAD7" 
                  className="w-28 sm:w-36 md:w-44 lg:w-56 xl:w-64 2xl:w-72 h-auto"
                />
              </div>
              
              <p className="font-calibri text-sub-text text-[11px] sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
                Welcome to SWAAD7 where every day is a taste-cation. We’re not just a food truck, we’re your daily flavor ritual.
              </p>
              

              <p className="font-serif font-bold text-ink-blue text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-1.5 md:mb-2 leading-tight sm:leading-snug md:leading-normal">
                Food on the move. Mood on fire.
              </p>
              
              <p className="font-calibri text-sub-text text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4">
                7 AM – 7 PM | Mumbai ka Roz ka Food Stop
              </p>

              <p className="font-serif text-text-dark text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-2xl mx-auto px-2 sm:px-3 md:px-4">
                Swipe right on your next meal.
              </p>

              <div className="pt-2.5 sm:pt-3 md:pt-4 lg:pt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 justify-center items-stretch sm:items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, -1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  onClick={() => (window.location.href = '/order')}
                  aria-label="Order online"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-swaad-yellow px-6 py-3 sm:px-8 sm:py-4 rounded-md shadow-md border-2 border-swaad-yellow border-dashed group min-h-[48px] w-full sm:w-auto text-center"
                >
                  <span className="font-serif font-bold text-ink-blue text-base sm:text-lg md:text-xl uppercase">ORDER ONLINE</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-xl sm:text-2xl md:text-3xl">shopping_cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, 1, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                  onClick={() => document.getElementById('masala')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="View today's menu"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-md shadow-md border-2 border-swaad-red border-dashed group min-h-[48px] w-full sm:w-auto text-center"
                >
                  <span className="font-serif font-bold text-ink-blue text-base sm:text-lg md:text-xl uppercase">VIEW TODAY'S MENU</span>
                  <span className="material-symbols-outlined text-ink-blue group-hover:translate-x-1 transition-transform text-xl sm:text-2xl md:text-3xl">restaurant_menu</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
