
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-8 border-t border-slate-dark/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-slate text-sm">
              Designed & Built by Anubhav Verma © {currentYear}
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-gold transition-colors hover-effect"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anubhav-verma-software-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-gold transition-colors hover-effect"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ianubhavverma@gmail.com"
              className="text-slate hover:text-gold transition-colors hover-effect"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
