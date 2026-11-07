import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscussProjectClick: () => void;
  onViewServicesClick: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    title: 'Interior finishing, without the guesswork.',
    caption: 'Kankarbagh Residence, Patna — Completed POP & Woodwork'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    title: 'Precision craftsmanship for modern living.',
    caption: 'Boring Road Duplex — Vitrified Flooring & Wall Finishes'
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    title: 'Clear scope. Material clarity. Guided execution.',
    caption: 'Fraser Road Project — Custom Wardrobes & Paneling'
  }
];

export const Hero: React.FC<HeroProps> = ({ onDiscussProjectClick, onViewServicesClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07745D]/10 text-[#07745D] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B88917]" />
              <span>For homes that deserve better</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121212] leading-[1.1]">
              Interior finishing, <br />
              <span className="text-[#07745D] italic">without the guesswork.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              POP & false ceilings, flooring & tiles, custom woodwork, and wall painting. We bring absolute clarity to scope, material grades, and supervised execution for discerning homeowners in Patna and across India.
            </p>

            {/* Service badges / support points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#07745D]" /> Clear Scope
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#07745D]" /> Material Clarity
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-800 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#07745D]" /> Guided Execution
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onDiscussProjectClick}
                className="px-8 py-4 bg-[#07745D] hover:bg-[#055947] text-white text-base font-medium rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onViewServicesClick}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 text-base font-medium rounded-xl border border-gray-300 transition-all flex items-center justify-center gap-2"
              >
                View Our Services
              </button>
            </div>

            {/* Trust note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 text-[#B88917]" />
              <span>Based in Patna, Bihar. Trusted transparent workmanship and agreed milestones.</span>
            </div>
          </div>

          {/* Right Column: Controlled 3-image slider */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] group">
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Slide Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                {/* <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#B88917] rounded font-semibold">
                  Slide {currentSlide + 1} of {HERO_SLIDES.length}
                </span> */}
                <h3 className="text-xl sm:text-2xl font-editorial font-bold mt-1">
                  {HERO_SLIDES[currentSlide].title}
                </h3>
                <p className="text-xs text-gray-200 mt-1">
                  {HERO_SLIDES[currentSlide].caption}
                </p>
              </div>

              {/* Slider Controls */}
              
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-[#07745D]' : 'w-2 bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
