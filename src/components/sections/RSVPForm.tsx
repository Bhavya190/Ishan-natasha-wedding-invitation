"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 px-6 bg-white flex justify-center">
      <div className="w-full max-w-xl text-center bg-ivory p-12 rounded-[3rem] border border-gold/20 shadow-xl">
        <h2 className="font-serif text-4xl text-maroon mb-4">RSVP</h2>
        <p className="font-sans text-sm text-maroon/60 mb-10 tracking-wide">
          Your presence would mean the world to us.
        </p>

        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-5 rounded-2xl border border-gold/10 focus:border-gold outline-none transition-colors font-serif text-lg bg-white"
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-5 rounded-2xl border border-gold/10 focus:border-gold outline-none transition-colors font-serif text-lg bg-white"
              required 
            />
            <select className="w-full p-5 rounded-2xl border border-gold/10 focus:border-gold outline-none transition-colors font-serif text-lg bg-white">
              <option value="">Attending?</option>
              <option value="yes">Will Attend</option>
              <option value="no">Cannot Attend</option>
            </select>
            <button 
              type="submit" 
              className="mt-4 bg-maroon text-white py-5 rounded-2xl font-serif text-xl hover:bg-maroon/90 transition-colors shadow-lg"
            >
              Confirm Presence
            </button>
          </form>
        ) : (
          <motion.div 
            className="py-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="font-serif text-3xl text-gold mb-2">Thank You!</h3>
            <p className="font-sans text-maroon/60">Your response has been noted.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
