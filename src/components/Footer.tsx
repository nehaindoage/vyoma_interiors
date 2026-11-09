import React from 'react';
import { Phone, Mail, Globe, QrCode, Shield } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import Logo from "@/public/assets/aistudio/vyoma_light.png"

interface FooterProps {
  onOpenPrivacy: () => void;
  onDiscussProjectClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onDiscussProjectClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917992379168?text=Hello%20Vyoma%20Interiors,%20I%20would%20like%20to%20connect.', '_blank');
  };

  return (
    <footer className="bg-[#07745D] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Card / Hub */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src={Logo}
                alt="Vyoma Interiors"
                className="h-14 sm:h-16 w-auto object-cover rounded-xl"
              />
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold">Let's discuss your space.</h3>
                <p className="text-xs text-white/80 tracking-wide mt-0.5">
                  Studio Address: Boring Road Crossing, Patna, Bihar — 800001
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <a href="tel:+917992379168" className="flex items-center gap-2.5 text-sm font-medium hover:text-[#B88917] transition-colors">
                <Phone className="w-4 h-4 text-[#B88917]" /> +91 79923 79168
              </a>
              <a href="mailto:hello.vyomainteriors@gmail.com" className="flex items-center gap-2.5 text-sm font-medium hover:text-[#B88917] transition-colors truncate">
                <Mail className="w-4 h-4 text-[#B88917]" /> hello.vyomainteriors@gmail.com
              </a>
              <a href="https://www.vyomainteriors.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm font-medium hover:text-[#B88917] transition-colors">
                <Globe className="w-4 h-4 text-[#B88917]" /> www.vyomainteriors.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-end gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="text-center sm:text-right">
              <span className="text-xs uppercase tracking-wider text-[#B88917] font-bold block">WhatsApp QR Hub</span>
              <span className="text-[11px] text-white/70 block mt-0.5">Scan to chat instantly</span>
              <button
                onClick={handleWhatsApp}
                className="mt-3 px-4 py-2 bg-[#B88917] hover:bg-[#966E12] text-white text-xs font-semibold rounded-lg shadow transition-all flex items-center gap-1.5 mx-auto sm:ml-auto sm:mr-0"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> Open WhatsApp
              </button>
            </div>
            {/* Simulated QR Code Box */}
            <div className="w-24 h-24 bg-white rounded-xl p-2 flex items-center justify-center shadow-inner">
              <div className="w-full h-full border-2 border-dashed border-[#07745D] rounded flex flex-col items-center justify-center text-center p-1">
                <QrCode className="w-10 h-10 text-[#07745D]" />
                <span className="text-[8px] font-bold text-gray-800 mt-0.5">SCAN QR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20 gap-6 text-xs text-white/80">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 font-medium">
            <button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-white">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white">Pricing</button>
            <button onClick={() => scrollToSection('faqs')} className="hover:text-white">FAQs</button>
            <button onClick={onOpenPrivacy} className="hover:text-white underline">Privacy Notice</button>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Vyoma Interiors. All rights reserved.</p>
            <p className="text-[10px] text-white/60 mt-0.5">Interior finishing studio based in Patna, Bihar.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
