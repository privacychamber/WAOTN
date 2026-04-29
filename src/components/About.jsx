import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aboutImage from '../assets/about_tech_collage_1777426904379.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo('.about-card',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-bg-light dark:bg-bg-dark">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="about-card glass-card p-8 md:p-12 relative overflow-hidden border-border-light dark:border-white/10 shadow-2xl">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">About Our Company</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="relative mb-12 rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/10 shadow-xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,125,255,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-brand-dark/80 to-transparent z-10"></div>
              <img 
                src={aboutImage} 
                alt="Sleek modern tech collage" 
                className="w-full object-cover aspect-[21/9] transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              We unite forward-thinking founders, operators and creators around a single mission: deploying the most advanced <span className="text-brand-blue dark:text-brand-cyan">AI and no-code tools</span> to build businesses that scale at the speed of thought.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
