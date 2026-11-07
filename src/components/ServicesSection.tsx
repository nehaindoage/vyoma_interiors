import React from 'react';
import { SERVICES_DATA, ServiceItem } from '../data';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenServiceModal: (service: ServiceItem) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenServiceModal, onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
              Service Clarity
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
              Four services. A more considered finish.
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mt-4 md:mt-0">
            Sell the clarity of the work, not just attractive finished rooms. Explore scope, approved materials, and typical decisions before asking for a quote.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
              </div>

              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#07745D] font-bold bg-[#07745D]/10 px-2 py-0.5 rounded">
                    {service.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#121212] mt-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {service.scope.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B88917]"></span>
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenServiceModal(service)}
                    className="text-xs font-semibold text-gray-700 hover:text-[#07745D] flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> View Scope & Materials
                  </button>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-4 py-2 bg-[#07745D] hover:bg-[#055947] text-white text-xs font-medium rounded-lg shadow-sm transition-colors flex items-center gap-1"
                  >
                    Discuss <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
