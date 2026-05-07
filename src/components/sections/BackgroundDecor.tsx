"use client";

import React from "react";
import { motion } from "framer-motion";

const FlowerSVG = ({ color, size, className }: { color: string; size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className}
    style={{ color }}
  >
    <path 
      d="M50 50 Q65 20 80 50 T50 80 T20 50 T50 20" 
      fill="currentColor" 
      opacity="0.6" 
    />
    <circle cx="50" cy="50" r="10" fill="white" opacity="0.4" />
    <path 
      d="M50 50 Q30 30 10 50 T50 70 T90 50 T50 30" 
      fill="currentColor" 
      opacity="0.3" 
    />
  </svg>
);

const BackgroundDecor = () => {
  const flowers = [
    { color: "#E0BBE4", size: 60 }, // Light Purple
    { color: "#FFD1DC", size: 80 }, // Light Pink
    { color: "#FFB7B2", size: 50 }, // Light Red
    { color: "#E0BBE4", size: 100 },
    { color: "#FFD1DC", size: 40 },
    { color: "#FFB7B2", size: 70 },
  ];

  return (
    <div className="fixed inset-0 w-full h-[100dvh] -z-10 overflow-hidden pointer-events-none">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-[#fce7f3] to-[#fee2e2] opacity-40" />

      {/* Floating Flowers */}
      {[...Array(12)].map((_, i) => {
        const flower = flowers[i % flowers.length];
        const duration = 25 + Math.random() * 15;
        const delay = Math.random() * -25;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + "vw", 
              y: "110vh", 
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: "-20vh",
              rotate: 360,
              x: (Math.random() * 100 + (Math.sin(i) * 15)) + "vw"
            }}
            transition={{ 
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          >
            <FlowerSVG color={flower.color} size={flower.size} className="opacity-60" />
          </motion.div>
        );
      })}

      {/* Subtle Floating Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: Math.random() * 100 + "vh" 
          }}
          animate={{ 
            y: [null, "-20vh"],
            opacity: [0, 0.7, 0]
          }}
          transition={{ 
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -12
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDecor;
