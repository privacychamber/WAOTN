import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "They completely overhauled our internal ops. We saved 40 hours a week using the AI agents they built.",
      name: "Sarah Jenkins",
      company: "TechFlow Inc."
    },
    {
      quote: "The speed of execution is unmatched. We had a working platform in days instead of months.",
      name: "Michael Chen",
      company: "Aura Systems"
    },
    {
      quote: "Stunning design combined with flawless automation. Truly a futuristic agency.",
      name: "Elena Rodriguez",
      company: "Elevate AI"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container animate-fade-in">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>What Our Clients Say</h2>
        
        <div className="grid grid-3">
          {reviews.map((review, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--bg-primary)', 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid #E5E7EB' 
            }}>
              <div style={{ color: 'var(--accent-blue)', fontSize: '2rem', marginBottom: '1rem', lineHeight: 1 }}>"</div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', fontWeight: 500, marginBottom: '2rem' }}>
                {review.quote}
              </p>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.25rem', fontSize: '1rem' }}>{review.name}</p>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
