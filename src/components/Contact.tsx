
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Success!",
        description: "Your message has been sent.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark relative">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-slate mb-8">
              I'm currently looking for new opportunities and challenges. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-slate">Email</p>
                  <a href="mailto:ianubhavverma@gmail.com" className="text-white hover:text-gold transition-colors hover-effect">
                    ianubhavverma@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-slate">Phone</p>
                  <a href="tel:+917014648029" className="text-white hover:text-gold transition-colors hover-effect">
                    +91 7014648029
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Linkedin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-slate">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/anubhav-verma-software-developer/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gold transition-colors hover-effect"
                  >
                    anubhav-verma-software-developer
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Github size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-slate">GitHub</p>
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gold transition-colors hover-effect"
                  >
                    github.com/anubhav-verma
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy-dark/80 border border-slate-dark rounded px-4 py-2 focus:outline-none focus:border-gold"
                  disabled={formState === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-navy-dark/80 border border-slate-dark rounded px-4 py-2 focus:outline-none focus:border-gold"
                  disabled={formState === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-navy-dark/80 border border-slate-dark rounded px-4 py-2 focus:outline-none focus:border-gold"
                  disabled={formState === 'submitting'}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full py-3 relative overflow-hidden group hover-effect"
                disabled={formState === 'submitting'}
              >
                <span className={`${formState === 'submitting' ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                  Send Message
                </span>
                {formState === 'submitting' && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
