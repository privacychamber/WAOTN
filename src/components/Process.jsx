import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    { title: 'Discover', desc: 'We map your goals, stack and bottlenecks in a focused strategy sprint.', icon: Search },
    { title: 'Design', desc: 'Architecture, flows and UI mocked up using the latest AI design tools.', icon: PenTool },
    { title: 'Build', desc: 'Rapid no-code + low-code delivery integrated with your data and APIs.', icon: Code2 },
    { title: 'Scale', desc: 'Monitoring, training and iteration so your system gets smarter every week.', icon: TrendingUp }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-slate/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From idea to launch in <span className="text-gradient">weeks, not quarters.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our proven framework combines strategy, rapid prototyping, and AI-accelerated development to get you to market instantly.
            </p>
          </motion.div>
          
          <div className="lg:col-span-3 relative">
            {/* Vertical glowing connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan opacity-30 hidden sm:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative sm:pl-20 group cursor-default"
                >
                  {/* Icon dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-slate items-center justify-center z-10 group-hover:border-brand-cyan group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
                    <step.icon className="w-5 h-5 text-gray-400 group-hover:text-brand-cyan" />
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-colors"></div>
                    <div className="sm:hidden mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-slate text-brand-cyan">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-lg">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
