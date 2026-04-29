import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Zap, Shield, Layers, Layout, Bot, Cloud, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Services = () => {
  const containerRef = useRef();
  const topCardsRef = useRef([]);
  const bottomCardsRef = useRef([]);

  const topFeatures = [
    { title: 'AI-Powered Solutions', desc: 'Intelligent systems designed to automate and scale your business.', icon: Zap },
    { title: 'Secure & Reliable', desc: 'Enterprise-grade security built into every solution we deliver.', icon: Shield },
    { title: 'Scalable Systems', desc: 'Future-ready architecture that grows with your ambitions.', icon: Layers }
  ];

  const mainServices = [
    { title: 'Web & App Development', desc: 'Bespoke, dynamic, high performance applications & ecosystems.', icon: Layout },
    { title: 'AI & Automation', desc: 'Smart automation and AI tailored SaaS solutions.', icon: Bot },
    { title: 'Cloud & DevOps', desc: 'Scalable cloud and DevOps engineering.', icon: Cloud },
    { title: 'UI/UX Design', desc: 'Clean, engaging, and conversion-focused design.', icon: PenTool }
  ];

  useGSAP(() => {
    // Top features stagger
    gsap.fromTo(topCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    // Bottom services stagger
    gsap.fromTo('.services-heading',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6,
        scrollTrigger: {
          trigger: '.services-heading',
          start: "top 85%"
        }
      }
    );

    gsap.fromTo(bottomCardsRef.current,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: '.services-grid',
          start: "top 80%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="py-24 relative bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">
        
        {/* Top Features Row (From Pitch Deck Hero bottom) */}
        <div className="grid md:grid-cols-3 gap-6">
          {topFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              ref={el => topCardsRef.current[idx] = el}
              className="glass-card p-8 group border border-gray-200 dark:border-brand-deep/30 hover:border-brand-blue dark:hover:border-brand-blue transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-surface-dark flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-display">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Services Grid (From Pitch Deck "What We Do Best") */}
        <div>
          <div className="services-heading mb-12">
            <h4 className="text-brand-blue font-bold tracking-wider text-sm mb-2 uppercase">Our Services</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display">What We Do Best</h2>
          </div>

          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, idx) => (
              <div 
                key={idx} 
                ref={el => bottomCardsRef.current[idx] = el}
                className="bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-brand-deep/50 rounded-xl p-8 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(74,125,255,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-cyan transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <div className="mb-8">
                  <service.icon className="w-8 h-8 text-brand-gray group-hover:text-brand-cyan transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white font-display group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
