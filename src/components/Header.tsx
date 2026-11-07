import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  onDiscussProjectClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDiscussProjectClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917992379168?text=Hello%20Vyoma%20Interiors,%20I%20would%20like%20to%20discuss%20an%20interior%20finishing%20project.', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & City Context */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-[#07745D] rounded-lg flex items-center justify-center text-white font-editorial font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#121212] leading-none">
                  VYOMA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#07745D] font-semibold uppercase mt-0.5">
                  Interiors • Patna
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#07745D] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="hover:text-[#07745D] transition-colors">
              Our Approach
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[#07745D] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#07745D] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faqs')} className="hover:text-[#07745D] transition-colors">
              FAQs
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="px-3.5 py-2 text-xs font-semibold text-[#07745D] bg-[#07745D]/10 hover:bg-[#07745D]/20 rounded-lg transition-colors flex items-center gap-1.5"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp
            </button>
            <button
              onClick={onDiscussProjectClick}
              className="px-5 py-2.5 bg-[#07745D] hover:bg-[#055947] text-white text-xs sm:text-sm font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              Discuss a Project
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleWhatsApp}
              className="p-2 text-[#07745D] bg-[#07745D]/10 rounded-lg"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl py-6 px-6 md:hidden animate-fadeIn space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-gray-800">
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center justify-between py-2 border-b border-gray-100 text-left"
            >
              Services <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="flex items-center justify-between py-2 border-b border-gray-100 text-left"
            >
              Our Approach <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-between py-2 border-b border-gray-100 text-left"
            >
              Projects <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="flex items-center justify-between py-2 border-b border-gray-100 text-left"
            >
              Pricing Clarity <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="flex items-center justify-between py-2 border-b border-gray-100 text-left"
            >
              FAQs <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDiscussProjectClick();
              }}
              className="w-full py-3 bg-[#07745D] text-white text-center rounded-lg font-medium shadow-sm"
            >
              Discuss a Project
            </button>
            <a
              href="tel:+917992379168"
              className="w-full py-2.5 bg-gray-100 text-gray-800 text-center rounded-lg font-medium flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-[#07745D]" /> +91 79923 79168
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
