
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  useEffect(() => {
    // Prevent flickering by adding a small delay before showing content
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-navy text-slate-light overflow-hidden">
      {/* Custom Cursor */}
      <CursorEffect />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
