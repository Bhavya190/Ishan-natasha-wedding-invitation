"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

// --- Constants ---
const GROOM_NAME = "Ishan";
const BRIDE_NAME = "Natasha";
const DATE = "December 24th, 2026";
const VENUE = "The Royal Palace Courtyard, Jaipur";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* --- Background Texture --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
      </div>

      {/* --- Card Wrapper (Perspective) --- */}
      <div className="relative perspective-2000 w-full h-full flex items-center justify-center">
        
        {/* --- Inner Content (Revealed After Open) --- */}
        <div className="absolute inset-0 bg-warm-ivory shadow-inner flex flex-col items-center justify-center p-6 md:p-12 text-center border-4 border-gold-accent/20 z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <div className="mb-4 md:mb-6 opacity-40">
              <Image src="/card_border.png" alt="Ornament" width={50} height={50} className="rotate-90 object-contain" />
            </div>
            
            <p className="font-serif italic text-deep-maroon/70 text-sm md:text-lg mb-4 md:mb-8">
              Together with their families
            </p>

            <h1 className="font-script text-4xl md:text-6xl text-gold-accent mb-2">
              {GROOM_NAME}
            </h1>
            <span className="font-serif text-2xl md:text-3xl text-deep-maroon/40 my-1">&</span>
            <h1 className="font-script text-4xl md:text-6xl text-gold-accent mt-2 mb-4 md:mb-8">
              {BRIDE_NAME}
            </h1>

            <div className="w-16 md:w-24 h-[1px] bg-gold-accent/30 mb-6 md:mb-8" />

            <p className="font-serif text-lg md:text-xl text-deep-maroon/80 mb-1">
              {DATE}
            </p>
            <p className="font-serif text-[10px] md:text-sm text-deep-maroon/60 tracking-widest uppercase mb-6 md:mb-10 px-4">
              {VENUE}
            </p>

            <p className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-deep-maroon/40 mb-6 md:mb-8">
              Request the honor of your presence
            </p>

            <motion.button
              className="px-6 py-2 md:px-8 md:py-3 border border-gold-accent text-gold-accent rounded-full font-serif text-xs md:text-sm tracking-widest hover:bg-gold-accent hover:text-white transition-all duration-300 shadow-lg shadow-gold-accent/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Invitation
            </motion.button>
          </motion.div>

          {/* Close Button */}
          {isOpen && (
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-deep-maroon/30 hover:text-deep-maroon transition-colors z-50"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* --- Left Flap --- */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-deep-maroon border-r border-gold-accent/20 preserve-3d origin-left z-20 shadow-2xl overflow-hidden"
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
          <div className="absolute inset-0 backface-hidden bg-deep-maroon" />
        </motion.div>

        {/* --- Right Flap --- */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-deep-maroon border-l border-gold-accent/20 preserve-3d origin-right z-20 shadow-2xl overflow-hidden"
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
          <div className="absolute inset-0 backface-hidden bg-deep-maroon" />
        </motion.div>

        {/* --- Central Ganesha Icon & Click Area --- */}
        {!isOpen && (
          <div className="absolute z-30 flex flex-col items-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold-accent flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.5)] overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Pulse Glow */}
              <motion.div
                className="absolute inset-0 bg-white/40 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Using a better container for the icon to hide white edges if any */}
              <div className="relative w-[70%] h-[70%] rounded-full overflow-hidden flex items-center justify-center bg-white/10">
                <Image src="/ganesha.png" alt="Lord Ganesha" fill className="object-contain p-2" />
              </div>
            </motion.button>
            <motion.p
              className="mt-4 md:mt-6 font-serif text-gold-accent text-[10px] md:text-sm tracking-[0.2em] uppercase animate-pulse"
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
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-2 h-2 bg-gold-accent/40 rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 300, 
                    y: (Math.random() - 0.5) * 300,
                    opacity: 0,
                    scale: 0.5
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              ))}
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
