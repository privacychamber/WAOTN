import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Testimonials = () => {
  const containerRef = useRef();
  const cardsRef = useRef([]);

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

  useGSAP(() => {
    gsap.fromTo('.test-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: {
          trigger: '.test-heading',
          start: "top 85%"
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 40, rotateX: -10 },
      {
        opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="test-heading text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 perspective-[1000px]">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="glass p-8 rounded-3xl relative transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl dark:hover:shadow-[0_20px_40px_rgba(74,125,255,0.1)]"
            >
              <div className="text-5xl text-brand-blue/20 dark:text-brand-blue/40 font-serif absolute top-6 right-8">"</div>
              
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 relative z-10">
                {review.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-white/50 dark:border-white/10 shadow-sm"
                />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold">{review.name}</h4>
                  <p className="text-brand-blue dark:text-brand-cyan text-sm font-medium">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
