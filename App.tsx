
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import AITools from './components/AITools';
import IntroLoader from './components/IntroLoader';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Custom Cursor Logic
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer, input, select, textarea');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    // Scroll Observer for Active Sections & Reveal Animations
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'resume', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Intersection Observer for Scroll Reveals
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    const revealSections = document.querySelectorAll('.reveal-on-scroll');
    revealSections.forEach(section => revealObserver.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, [isLoading]);

  return (
    <div className={`min-h-screen bg-[#080808] text-white selection:bg-[#007BFF] selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      {/* Custom Global Cursor */}
      <div 
        className={`fixed w-8 h-8 rounded-full border border-[#007BFF] pointer-events-none z-[9999] transition-transform duration-300 ease-out hidden lg:block ${isHovering ? 'scale-[2.5] bg-[#007BFF]/10 border-[#007BFF]/50' : 'scale-100'}`}
        style={{ left: cursorPos.x, top: cursorPos.y, transform: `translate(-50%, -50%) ${isHovering ? 'scale(2.5)' : 'scale(1)'}` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#007BFF] rounded-full"></div>
      </div>

      {isLoading && <IntroLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-all duration-1000 ${isLoading ? 'blur-lg opacity-0 pointer-events-none' : 'blur-0 opacity-100'}`}>
        <Navbar activeSection={activeSection} />
        
        <main>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
          
          <section id="about" className="py-32 scroll-mt-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <About />
          </section>
          
          <section id="portfolio" className="py-32 bg-[#0a0a0a] scroll-mt-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <Portfolio />
          </section>
          
          <section id="resume" className="py-32 scroll-mt-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <Resume />
          </section>
          
          <section id="contact" className="py-32 bg-[#0a0a0a] scroll-mt-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <Contact />
          </section>

          <div className="reveal-on-scroll opacity-0 transition-opacity duration-1000">
            <AITools />
          </div>
        </main>

        <Footer />
        <AIAssistant />
        <WhatsAppButton />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}} />
    </div>
  );
};

export default App;
