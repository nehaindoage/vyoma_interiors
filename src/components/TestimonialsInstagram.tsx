import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Instagram, ExternalLink } from 'lucide-react';

export const TestimonialsInstagram: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
      caption: 'False ceiling cove lighting detail in Kankarbagh 3BHK project.',
      likes: '482'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80',
      caption: 'Large format vitrified tile laying with laser precision.',
      likes: '610'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80',
      caption: 'Matte cashmere bedroom wardrobes with soft-close hardware.',
      likes: '539'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80',
      caption: 'Independent duplex entrance lobby wall finish & woodwork.',
      likes: '720'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Client Voice & Inspiration
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            Proof people can trust. Inspiration they can save.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Real client experiences reduce perceived risk, while curated Instagram shots showcase genuine finishing styles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Testimonial Carousel */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between relative min-h-[340px]">
            <div>
              <div className="text-[#07745D] mb-4">
                <Quote className="w-10 h-10 opacity-60" />
              </div>
              <p className="font-editorial text-xl sm:text-2xl text-gray-800 italic leading-relaxed mb-6">
                "{TESTIMONIALS[currentTestimonial].quote}"
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS[currentTestimonial].image}
                  alt={TESTIMONIALS[currentTestimonial].client}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#07745D]/20 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#121212]">{TESTIMONIALS[currentTestimonial].client}</h4>
                  <p className="text-xs text-gray-500">{TESTIMONIALS[currentTestimonial].projectType} • {TESTIMONIALS[currentTestimonial].city}</p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 pt-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === currentTestimonial ? 'w-6 bg-[#07745D]' : 'w-1.5 bg-gray-300'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Instagram Inspiration Feed */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-editorial text-xl font-bold text-[#121212] flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#07745D]" /> From Instagram (@vyomainteriors)
              </h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#07745D] hover:underline flex items-center gap-1"
              >
                Follow Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {instagramPosts.map((post) => (
                <div key={post.id} className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm aspect-square">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <p className="text-xs line-clamp-2">{post.caption}</p>
                    <span className="text-[10px] text-[#B88917] font-semibold mt-1">❤ {post.likes} likes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
