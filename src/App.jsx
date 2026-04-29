import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
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
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative selection:bg-brand-blue/30 overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <FeatureSplit />
          <Process />
          <Testimonials />
          <FinalCTA />
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
