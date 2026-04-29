import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import laptopImage from '../assets/laptop_mockup_1777426948163.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FeatureSplit = () => {
  const containerRef = useRef();
  const leftColRef = useRef();
  const rightColRef = useRef();
  const textItemsRef = useRef([]);

  useGSAP(() => {
    // Pinning the left column while right column scrolls
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=100",
      end: "bottom bottom",
      pin: leftColRef.current,
      pinSpacing: false,
    });

    // Fade and slide in text blocks as they enter viewport
    textItemsRef.current.forEach((item, i) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Floating animation for laptop independent of scroll
    gsap.to('.laptop-img', {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative bg-gray-50 dark:bg-transparent">
      {/* Faint tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 relative">
          
          {/* Left Column - Pinned */}
          <div ref={leftColRef} className="lg:h-screen flex items-center top-0 relative">
            <div className="w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-10 dark:opacity-20 blur-2xl rounded-full"></div>
              
              <div className="relative laptop-img">
                <img 
                  src={laptopImage} 
                  alt="Premium minimal futuristic 3D laptop" 
                  className="w-full h-auto rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl"
                />
                
                {/* Floating glow accents */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-cyan/40 dark:bg-brand-cyan/50 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-purple/30 dark:bg-brand-purple/40 rounded-full blur-2xl animate-pulse delay-700"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div ref={rightColRef} className="py-10 lg:py-32 space-y-32">
            
            <div ref={el => textItemsRef.current[0] = el} className="feature-block">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Get Great Websites With <br />
                <span className="text-gradient font-extrabold">Generative Media</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We map your stack, identify high-ROI use cases and build a 60-day roadmap that delivers. AI-driven image, video and voice production for brand storytelling.
              </p>
            </div>

            <div ref={el => textItemsRef.current[1] = el} className="feature-block">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Seamless <span className="text-gradient font-extrabold">Integrations</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Connect your existing tools flawlessly. From CRMs to custom databases, we ensure your data flows smoothly through secure and optimized pipelines.
              </p>
            </div>

            <div ref={el => textItemsRef.current[2] = el} className="feature-block pb-32">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Built to <span className="text-gradient font-extrabold">Scale</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our architectures are designed to handle growth. From day one, your platform is ready to support thousands of concurrent users without breaking a sweat.
              </p>
              
              <button className="px-8 py-4 rounded-full bg-brand-dark dark:bg-brand-slate border border-gray-700 dark:border-brand-cyan/30 text-white font-bold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] dark:hover:border-brand-cyan transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Start Scaling Now</span>
              </button>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
