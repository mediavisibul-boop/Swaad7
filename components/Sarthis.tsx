
import React from 'react';
import { motion } from 'framer-motion';

const sarthis = [
  {
    id: 'SW-884',
    name: 'Raju Bhai',
    role: 'Head Pilot - Bandra',
    date: '12.04.23',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7yeDZi8MLSjM6O_56Zsn-HhHakuxrJ7CPrD3-a7AvypCm1pcvt6oHc0zc1UsbJrYGJBTw04A85oQbHU2uSU7cPLYCMkvICHT_8W9QfpSW5CahxyvBbXloae5K8D3M0_VfWXsRrxOZpDEPigjUoD0t4bAIESuX2yYOt2V31MdceKaoCH6lGePHZEzwMwjIEhUEqVBENouKRcti5xZzHdQ5rFGwnND1w0pHYW7yqCW4uXDuY6AyielmhekcseeSAKrnBz8ztJPv-f40',
    dish: 'Masala Chai'
  },
  {
    id: 'SW-902',
    name: 'Meena Didi',
    role: 'Chef - Dadar',
    date: '05.08.23',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ogAlPOOv8uJj30LR4lMtYr1jh8QYErlb70WeRNG3nIHx6_V-I-9stBxgLVX4jIKx1v4E9KOBndQEoCEvaJc9ov4BjDB6_x-0rnGV4bQ0gINedDSIY-I0dtZ4viHNJiLoX6lXvK25PCDgrwcVgzKb3glGuq7jBtfbti8AkxMabW1FhkrHfPzcROgMdYQhfGMMVLYC-d2lsov9y98bSIn2Hrzn49pgAEqm4BKFq-g5nUy1iq4ZZldWes18zylNJFIjdVg8FlExOH8g',
    dish: 'Vada Pav'
  },
  {
    id: 'SW-771',
    name: 'Suresh K.',
    role: 'Navigator - Juhu',
    date: '21.01.24',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt7Jrp429dM5zHCGgOYgMRmAN_Wyvum7J5lkigbSbgfSbSUCD7g-uTaq_NYCXSngCtI9wpNND6UxP41QAANBzM_lUaC14R1on3xNt_bG6lRJUPhOvu4EDbsHsFnH7Se2k-C5Jtxz8jyjXTQpdAutpBGEBFkrF42SvyDNogV9PlFCL0s5H0bBn4UQhYqAYrt2jpcTIXOyFw5fKUmymRwpPUxUT29OAdjfCJUDG6oT3C0kttZoHUx6lRy8ESPGzMFXJz16XOf541lsWl',
    dish: 'Pav Bhaji'
  }
];

const Sarthis: React.FC = () => {
  return (
    <section id="sarthis" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-kora-paper border-b border-swaad-red/10 paper-grain">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-swaad-red mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-snug md:leading-normal">Swaad Sarthis</h2>
            <p className="font-mono text-ink-blue font-bold uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-base">
              Pilots of the Mission • Ration Card Gallery
            </p>
          </div>
          <p className="font-calibri text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-sub-text max-w-sm lg:text-right leading-relaxed">
            "Meet your Sarthis. They aren't just cooks; they are the pilots of this mission. By eating here, you're fueling a family's dream."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {sarthis.map((sarthi, idx) => (
            <motion.div
              key={sarthi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover="hover"
              className="relative group bg-[#fdfbf7] p-1 sm:p-1.5 md:p-2 shadow-sm border border-black/5 touch-manipulation"
            >
              <div className="border-2 border-ink-blue/10 p-2.5 sm:p-3 md:p-3.5 lg:p-4 relative overflow-hidden h-full flex flex-col">
                <div className="flex justify-between items-start mb-2 sm:mb-3 md:mb-4 border-b border-ink-blue pb-1.5 sm:pb-2">
                   <div>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase text-gray-500">Issue Date</p>
                      <p className="font-mono font-bold text-ink-blue text-[11px] sm:text-xs md:text-sm lg:text-base">{sarthi.date}</p>
                   </div>
                   <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border border-swaad-red rounded-full flex items-center justify-center rotate-12 opacity-60">
                      <span className="text-[7px] sm:text-[8px] font-black text-swaad-red text-center leading-none">GOVT.<br/>APPRVD</span>
                   </div>
                </div>

                <div className="flex gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4">
                  <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-22 md:h-32 lg:w-24 lg:h-36 bg-gray-200 border-2 border-ink-blue relative overflow-hidden flex-shrink-0">
                    <img 
                      src={sarthi.img} 
                      alt={sarthi.name} 
                      className="w-full h-full object-cover vintage-filter"
                    />
                    {/* Perforation Hover Effect */}
                    <motion.div
                      variants={{
                        hover: {
                          opacity: [1, 0.4, 1],
                          transition: { repeat: Infinity, duration: 0.1 }
                        }
                      }}
                      className="absolute inset-0 border-4 border-white/50 border-dashed pointer-events-none opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-ink-blue truncate leading-tight">{sarthi.name}</h3>
                    <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase text-swaad-red font-bold tracking-wider sm:tracking-widest mt-0.5 sm:mt-1 leading-tight">
                      {sarthi.role}
                    </p>
                    <div className="mt-2 sm:mt-3 md:mt-4">
                      <span className="bg-swaad-yellow/20 px-1.5 sm:px-2 py-0.5 sm:py-1 border border-swaad-yellow font-mono text-[9px] sm:text-[10px] md:text-xs text-ink-blue">
                        ID: {sarthi.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secret Dish Reveal on Hover */}
                <motion.div
                  variants={{
                    hover: { opacity: 1, scale: 1 }
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-swaad-red/95 z-20 flex flex-col items-center justify-center text-white pointer-events-none transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-4xl mb-2">restaurant_menu</span>
                  <p className="font-serif italic">Signature Swaad</p>
                  <p className="font-mono font-bold text-lg uppercase tracking-widest border-b border-white pb-1 mt-1">
                    {sarthi.dish}
                  </p>
                </motion.div>

                <div className="mt-auto pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-ink-blue/10 flex items-center justify-between opacity-50">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest">Official Record</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono">Status: Supported</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sarthis;
