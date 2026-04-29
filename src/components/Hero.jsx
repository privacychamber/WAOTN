import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_abstract_fluid_1777426863430.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-sm">
              <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">Next Gen IT Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Build the future, <br className="hidden md:block"/>
              <span className="text-gradient">faster than ever.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              WeAreOneTechNation is a futuristic IT studio crafting AI agents, automations, and no-code platforms that turn ambitious ideas into shipped products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg shadow-[0_0_20px_rgba(74,125,255,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all"
              >
                Book a Discovery Call
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-semibold text-lg hover:border-gray-400 transition-colors backdrop-blur-sm"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Orb behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 to-brand-cyan/30 rounded-full blur-[80px]"></div>
            
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={heroImage} 
              alt="Abstract 3D futuristic fluid sculpture" 
              className="w-full h-auto object-cover rounded-3xl relative z-10 border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
