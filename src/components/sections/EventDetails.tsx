"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventDetails = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl text-maroon mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ceremony & Celebration
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Calendar, title: "When", content: "December 24th, 2026" },
            { icon: Clock, title: "Time", content: "7:00 PM Onwards" },
            { icon: MapPin, title: "Where", content: "Royal Palace Courtyard, Jaipur" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-10 rounded-[2rem] border border-gold/20 shadow-lg shadow-gold/5"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <item.icon className="w-10 h-10 text-gold mx-auto mb-6" />
              <h3 className="font-sans text-xs uppercase tracking-widest text-maroon/60 mb-4">
                {item.title}
              </h3>
              <p className="font-serif text-2xl text-maroon">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
