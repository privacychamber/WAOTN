import React from 'react';
import { motion } from 'framer-motion';
import servicesImage from '../assets/services_chrome_head_1777426925812.png';

const Services = () => {
  const services = [
    {
      title: 'AI Agents & Chatbots',
      desc: 'Custom agents trained on your data for support, sales, ops and internal copilots.'
    },
    {
      title: 'Workflow Automation',
      desc: 'Automation pipelines that connect apps & replace hours of manual work.'
    },
    {
      title: 'No-Code Websites & Apps',
      desc: 'High-performance websites and apps built rapidly without traditional dev.'
    },
    {
      title: 'Data & RAG Systems',
      desc: 'AI systems powered by your data for smarter insights and workflows.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything trending in AI, low-code and no-code — <span className="text-gradient">under one roof.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-xl overflow-hidden mb-6 border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <img 
                    src={servicesImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-brand-blue to-transparent mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
