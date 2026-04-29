import React from 'react';
import { motion } from 'framer-motion';
import laptopImage from '../assets/laptop_mockup_1777426948163.png';

const FeatureSplit = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Faint tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-20 blur-2xl rounded-full"></div>
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src={laptopImage} 
                alt="Premium minimal futuristic 3D laptop" 
                className="w-full h-auto rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(74,125,255,0.3)]"
              />
              
              {/* Floating glow accents */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-cyan/50 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-purple/40 rounded-full blur-2xl animate-pulse delay-700"></div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Great Websites With <br />
              <span className="text-gradient font-extrabold">Generative Media & AI Strategy</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We map your stack, identify <span className="text-white font-semibold">high-ROI use cases</span> and build a 60-day roadmap that delivers. AI-driven image, video and voice production for marketing, product and brand storytelling.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-brand-slate border border-brand-cyan/30 text-white font-bold text-lg shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:border-brand-cyan transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Book a Discovery Call</span>
            </motion.button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
