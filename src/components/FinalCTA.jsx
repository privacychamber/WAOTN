import React from 'react';
import { motion } from 'framer-motion';
import finalLaptopImage from '../assets/final_cta_laptop_1777426969528.png';

const FinalCTA = () => {
  return (
    <section className="py-24 relative px-6">
      <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">extraordinary?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">
              Book a free 30-minute strategy call. We map your opportunity and ship a working prototype within days.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Book a Discovery Call
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full"></div>
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={finalLaptopImage} 
              alt="Futuristic 3D laptop" 
              className="w-full relative z-10 rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
