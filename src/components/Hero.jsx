import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from './Logo';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef();
  const headlineRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    // Text Reveal (Line by Line)
    const tl = gsap.timeline();
    
    tl.fromTo('.reveal-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    )
    .fromTo('.reveal-fade',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo('.hero-logo-visual',
      { opacity: 0, scale: 0.8, rotateY: -30 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" },
      "-=1.2"
    );

    // Continuous float and pulse animation for the giant logo visual
    gsap.to('.hero-logo-visual', {
      y: -15,
      filter: "drop-shadow(0px 0px 40px rgba(0, 255, 255, 0.6))",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-light dark:bg-bg-dark">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-deep/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="reveal-fade inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-sm">
              <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase font-display">WE ARE ONE TECH NATION</span>
            </div>
            
            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 relative">
              <div className="absolute -inset-10 bg-brand-deep/10 blur-3xl rounded-full -z-10"></div>
              <div className="overflow-hidden"><div className="reveal-text">Building the Future</div></div>
              <div className="overflow-hidden"><div className="reveal-text">Through <span className="text-brand-blue dark:text-brand-blue drop-shadow-md">Unified</span></div></div>
              <div className="overflow-hidden"><div className="reveal-text text-brand-blue dark:text-brand-blue drop-shadow-md">Technology</div></div>
            </h1>
            
            <p className="reveal-fade text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed font-sans">
              We create intelligent, scalable, and secure digital solutions that help businesses grow, automate, and lead in the digital era.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal-fade">
              <button 
                ref={buttonRef}
                className="px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-lg shadow-[0_0_20px_rgba(74,125,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-full border border-brand-deep/40 text-brand-deep dark:text-white font-semibold text-lg hover:bg-brand-deep/5 dark:hover:bg-white/5 transition-colors backdrop-blur-sm hover:scale-105 active:scale-95">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Orb behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/30 to-brand-cyan/20 rounded-full blur-[100px]"></div>
            
            <div className="hero-logo-visual relative z-10 w-full max-w-md perspective-[1000px]">
               <Logo className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border gradient line matching pitch deck */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
