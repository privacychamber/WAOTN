import React from 'react';

const Process = () => {
  const steps = [
    { title: 'Discover', desc: 'We map your goals, stack and bottlenecks in a focused strategy sprint.' },
    { title: 'Design', desc: 'Architecture, flows and UI mocked up using the latest AI design tools.' },
    { title: 'Build', desc: 'Rapid no-code + low-code delivery integrated with your data and APIs.' },
    { title: 'Scale', desc: 'Monitoring, training and iteration so your system gets smarter every week.' }
  ];

  return (
    <section className="section">
      <div className="container grid grid-2 animate-fade-in">
        <div style={{ paddingRight: '2rem' }}>
          <h2 style={{ position: 'sticky', top: '100px' }}>From idea to launch in weeks, not quarters.</h2>
        </div>
        
        <div className="grid grid-2">
          {steps.map((step, idx) => (
            <div key={idx} style={{ 
              backgroundColor: '#ffffff', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-sm)' 
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(74, 125, 255, 0.1)', 
                color: 'var(--accent-blue)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                {idx + 1}
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>{step.title}</h3>
              <p style={{ fontSize: '1rem', marginBottom: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
