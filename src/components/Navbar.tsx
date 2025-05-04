
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-white hover-effect">
          <span className="text-gold">A</span>nubhav <span className="text-gold">V</span>erma
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link text-sm tracking-widest uppercase"
            >
              <span className="text-gold mr-1">0{index + 1}.</span> {item.name}
            </a>
          ))}
          <a href="#resume" className="button-primary text-sm uppercase tracking-widest hover-effect">Resume</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover-effect text-slate hover:text-gold"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 h-screen w-3/4 bg-navy-light shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col justify-center items-center md:hidden`}
      >
        <button
          className="absolute top-6 right-6 hover-effect text-slate hover:text-gold"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link text-lg tracking-widest"
              onClick={toggleMenu}
            >
              <span className="text-gold mr-1">0{index + 1}.</span> {item.name}
            </a>
          ))}
          <a 
            href="#resume" 
            className="button-primary mt-6 text-sm uppercase tracking-widest hover-effect"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
