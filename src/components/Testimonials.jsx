import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      quote: "They completely overhauled our internal ops. We saved 40 hours a week using the AI agents they built.",
      name: "Sarah Jenkins",
      company: "TechFlow Inc.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "The speed of execution is unmatched. We had a working platform in days instead of months.",
      name: "Michael Chen",
      company: "Aura Systems",
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
      quote: "Stunning design combined with flawless automation. Truly a futuristic agency.",
      name: "Elena Rodriguez",
      company: "Elevate AI",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">What Our <span className="text-gradient">Clients Say</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 1 : -1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <div className="text-5xl text-brand-blue/40 font-serif absolute top-6 right-8">"</div>
              
              <p className="text-xl text-gray-200 leading-relaxed mb-8 relative z-10">
                {review.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-brand-cyan text-sm">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
