import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about_tech_collage_1777426904379.png';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">About Our Company</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative mb-12 rounded-2xl overflow-hidden group border border-white/10 shadow-[0_0_30px_rgba(74,125,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent z-10"></div>
              <img 
                src={aboutImage} 
                alt="Sleek modern tech collage" 
                className="w-full object-cover aspect-[21/9] transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              We unite forward-thinking founders, operators and creators around a single mission: deploying the most advanced <span className="text-brand-cyan">AI and no-code tools</span> to build businesses that scale at the speed of thought.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
