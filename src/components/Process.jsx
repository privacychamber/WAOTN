import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Search, PenTool, Code2, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Process = () => {
  const containerRef = useRef();
  const lineRef = useRef();
  const stepsRef = useRef([]);

  const steps = [
    { title: 'Discover', desc: 'We map your goals, stack and bottlenecks in a focused strategy sprint.', icon: Search },
    { title: 'Design', desc: 'Architecture, flows and UI mocked up using the latest AI design tools.', icon: PenTool },
    { title: 'Build', desc: 'Rapid no-code + low-code delivery integrated with your data and APIs.', icon: Code2 },
    { title: 'Scale', desc: 'Monitoring, training and iteration so your system gets smarter every week.', icon: TrendingUp }
  ];

  useGSAP(() => {
    // Draw the vertical line progressively
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );

    // Stagger in the process cards and pulse icons
    stepsRef.current.forEach((step, i) => {
      // Card fade in
      gsap.fromTo(step.querySelector('.process-card'),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Icon glow active state based on scroll
      gsap.to(step.querySelector('.process-icon'), {
        borderColor: "#22D3EE", // brand-cyan
        boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)",
        color: "#22D3EE",
        scrollTrigger: {
          trigger: step,
          start: "top 60%",
          end: "bottom 60%",
          toggleClass: "active-step",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-white/50 dark:bg-brand-slate/10 border-y border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From idea to launch in <br />
              <span className="text-gradient">weeks, not quarters.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our proven framework combines strategy, rapid prototyping, and AI-accelerated development to get you to market instantly.
            </p>
          </div>
          
          <div className="lg:col-span-3 relative">
            {/* Background static line */}
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-gray-200 dark:bg-gray-800 rounded-full hidden sm:block"></div>
            
            {/* Animated drawing line */}
            <div ref={lineRef} className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan rounded-full hidden sm:block z-0"></div>
            
            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  ref={el => stepsRef.current[idx] = el}
                  className="relative sm:pl-20 group cursor-default"
                >
                  {/* Icon dot */}
                  <div className="process-icon hidden sm:flex absolute -left-0.5 top-0 w-14 h-14 rounded-full bg-white dark:bg-brand-dark border-4 border-gray-200 dark:border-brand-slate items-center justify-center z-10 text-gray-400 transition-colors duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="process-card glass-card p-8 relative overflow-hidden transform transition-transform hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-colors"></div>
                    <div className="sm:hidden mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-brand-slate text-brand-cyan">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
