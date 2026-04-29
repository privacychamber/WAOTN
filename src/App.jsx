import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeatureSplit from './components/FeatureSplit';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue/30 text-white font-sans overflow-hidden">
      {/* Global cursor-follow light effect placeholder (could be implemented with JS, but CSS radial is enough for structural feel) */}
      <Hero />
      <About />
      <Services />
      <FeatureSplit />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
