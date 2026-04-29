import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImage from '../assets/hero_abstract_fluid_1777426863430.png';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef();
  const headlineRef = useRef();
  const imageRef = useRef();
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
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=1"
    );

    // Continuous float animation for image
    gsap.to(imageRef.current, {
      y: -20,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  // Magnetic Button Effect
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="reveal-fade inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-sm">
              <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">Next Gen IT Studio</span>
            </div>
            
            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 relative">
              <div className="absolute -inset-10 bg-brand-blue/10 blur-3xl rounded-full -z-10"></div>
              <div className="overflow-hidden"><div className="reveal-text">Build the future,</div></div>
              <div className="overflow-hidden"><div className="reveal-text"><span className="text-gradient">faster than ever.</span></div></div>
            </h1>
            
            <p className="reveal-fade text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              WeAreOneTechNation is a futuristic IT studio crafting AI agents, automations, and no-code platforms that turn ambitious ideas into shipped products.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal-fade">
              <button 
                ref={buttonRef}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg shadow-[0_0_20px_rgba(74,125,255,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-shadow duration-300 relative"
              >
                Book a Discovery Call
              </button>
              <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors backdrop-blur-sm">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Orb behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 rounded-full blur-[80px]"></div>
            
            <div ref={imageRef} className="relative z-10">
              <img 
                src={heroImage} 
                alt="Abstract 3D futuristic fluid sculpture" 
                className="w-full h-auto object-cover rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
