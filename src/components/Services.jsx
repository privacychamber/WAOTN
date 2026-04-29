import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import servicesImage from '../assets/services_chrome_head_1777426925812.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Services = () => {
  const containerRef = useRef();
  const cardsRef = useRef([]);

  const services = [
    { title: 'AI Agents & Chatbots', desc: 'Custom agents trained on your data for support, sales, ops and internal copilots.' },
    { title: 'Workflow Automation', desc: 'Automation pipelines that connect apps & replace hours of manual work.' },
    { title: 'No-Code Websites & Apps', desc: 'High-performance websites and apps built rapidly without traditional dev.' },
    { title: 'Data & RAG Systems', desc: 'AI systems powered by your data for smarter insights and workflows.' }
  ];

  useGSAP(() => {
    gsap.fromTo('.services-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: {
          trigger: '.services-heading',
          start: "top 85%"
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="py-24 relative bg-bg-light dark:bg-bg-dark">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-brand-cyan/5 dark:bg-brand-cyan/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="services-heading text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Everything trending in AI, low-code and no-code — <br/>
            <span className="text-gradient">under one roof.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="glass-card p-6 relative group overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(74,125,255,0.15)] dark:hover:shadow-[0_15px_30px_rgba(74,125,255,0.2)] hover:border-brand-blue/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 border border-gray-200 dark:border-white/10 shadow-sm group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500 transform group-hover:rotate-3 group-hover:scale-105">
                  <img 
                    src={servicesImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-brand-blue to-transparent mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
