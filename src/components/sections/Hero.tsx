"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
const BackgroundDecor = dynamic(() => import("./BackgroundDecor"), { ssr: false });

// --- Constants ---
const GROOM_NAME = "Ishan";
const BRIDE_NAME = "Natasha";
const DATE = "December 24th, 2026";
const VENUE = "The Royal Palace Courtyard, Jaipur";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed inset-0 w-screen h-screen overflow-hidden z-0 flex items-center justify-center bg-[#fdfaf6]/50">
      <BackgroundDecor />
      {/* --- Background Texture removed to reveal animation --- */}

      {/* --- Card Wrapper (Perspective) --- */}
      <div className="relative perspective-2000 w-full h-full md:w-[450px] md:h-[85vh] md:max-h-[850px] md:shadow-2xl">
        
        {/* --- Revealed Invitation Base --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Unified Clean 9:16 Watercolor Background Frame - TRUE FULL BLEED */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Image 
              src="/hero-bg-v5.png" 
              alt="Wedding Invitation Background" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content & Border Overlay Layer */}
          <div className="absolute inset-0 border-4 border-gold-accent/20 flex flex-col items-center justify-start text-center z-10 overflow-hidden">
            {/* Top Center Ornament with separate "descending zoom" animation */}
            <motion.div 
              initial={{ opacity: 0, y: -100, scale: 0.3 }}
              animate={isOpen ? { opacity: 0.4, y: 0, scale: 1 } : { opacity: 0, y: -100, scale: 0.3 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 md:w-48 md:h-48 z-10"
            >
              <Image src="/ganesha-minimal.png" alt="Ornament" fill className="object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center w-full pt-32 md:pt-64 px-4 md:px-12 pb-12"
            >
              
              <p className="font-serif italic text-deep-maroon/70 text-xs md:text-lg mb-2 md:mb-4 mt-8 md:mt-12">
                Together with their families
              </p>

              <h1 className="font-script text-3xl md:text-6xl text-gold-accent mb-1">
                {GROOM_NAME}
              </h1>
              <span className="font-serif text-xl md:text-3xl text-deep-maroon/40 my-0">&</span>
              <h1 className="font-script text-3xl md:text-6xl text-gold-accent mt-1 mb-2 md:mb-4">
                {BRIDE_NAME}
              </h1>

              <div className="w-12 md:w-24 h-[1px] bg-gold-accent/30 mb-3 md:mb-6" />

              <p className="font-serif text-base md:text-xl text-deep-maroon/80 mb-0.5">
                {DATE}
              </p>
              <p className="font-serif text-[9px] md:text-sm text-deep-maroon/60 tracking-widest uppercase mb-3 md:mb-6 px-4">
                {VENUE}
              </p>

            </motion.div>
          </div>
        </div>

          {/* Close Button */}
          {isOpen && (
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-deep-maroon/30 hover:text-deep-maroon transition-colors z-50"
            >
              <X size={24} />
            </button>
          )}

        {/* --- Left Flap --- */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-deep-maroon/60 backdrop-blur-md border-r border-gold-accent/20 preserve-3d origin-left z-20 shadow-2xl overflow-hidden"
          initial={false}
          animate={{ rotateY: isOpen ? -130 : 0 }} // Reduced angle for mobile visibility
          transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
        >
          {/* Cover Design */}
          <div className="absolute inset-0 p-4 border-2 border-gold-accent/10 m-2 rounded-lg flex items-center justify-end">
            <div className="absolute left-0 top-0 h-full w-12 opacity-20">
              <Image src="/card_border.png" alt="Border" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 backface-hidden bg-deep-maroon/40" />
        </motion.div>

        {/* --- Right Flap --- */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-deep-maroon/60 backdrop-blur-md border-l border-gold-accent/20 preserve-3d origin-right z-20 shadow-2xl overflow-hidden"
          initial={false}
          animate={{ rotateY: isOpen ? 130 : 0 }} // Reduced angle for mobile visibility
          transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
        >
          {/* Cover Design */}
          <div className="absolute inset-0 p-4 border-2 border-gold-accent/10 m-2 rounded-lg flex items-center justify-start">
            <div className="absolute right-0 top-0 h-full w-12 opacity-20 scale-x-[-1]">
              <Image src="/card_border.png" alt="Border" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 backface-hidden bg-deep-maroon/40" />
        </motion.div>

        {/* --- Central Ganesha Icon & Click Area --- */}
        {!isOpen && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/ganesha-v2.png" 
                alt="Lord Ganesha" 
                fill 
                className="object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" 
              />
            </motion.button>
            <motion.p
              className="mt-2 font-serif text-gold-accent text-[10px] md:text-sm tracking-[0.2em] uppercase animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Click to Open
            </motion.p>
          </div>
        )}

        {/* --- Particle Burst on Open --- */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const distance = 150;
                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-2 h-2 bg-gold-accent/40 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{ 
                      x: Math.cos(angle) * distance, 
                      y: Math.sin(angle) * distance,
                      opacity: 0,
                      scale: 0.5
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Light Bloom Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 bg-gold-accent/5 pointer-events-none z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
