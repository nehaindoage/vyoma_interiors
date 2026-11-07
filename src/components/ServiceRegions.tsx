import React from 'react';
import { REGIONS_DATA } from '../data';
import { MapPin, CheckCircle2, Globe } from 'lucide-react';

export const ServiceRegions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Reach & Coverage
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            Based in Patna. Open to project conversations across India.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Signal location confidently. We accept enquiries across all Indian states and Union Territories, reviewing site logistics and feasibility individually.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REGIONS_DATA.map((reg, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border flex flex-col justify-between ${
                reg.primary
                  ? 'bg-[#07745D] text-white border-[#07745D] shadow-md'
                  : 'bg-gray-50 text-gray-800 border-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <MapPin className={`w-4 h-4 ${reg.primary ? 'text-[#B88917]' : 'text-[#07745D]'}`} />
                  <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${reg.primary ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {reg.primary ? 'Primary Base' : 'Region'}
                  </span>
                </div>
                <h3 className={`font-bold text-base ${reg.primary ? 'text-white' : 'text-gray-900'}`}>{reg.name}</h3>
              </div>
              <div className={`mt-4 pt-3 border-t text-xs flex items-center gap-1.5 ${reg.primary ? 'border-white/20 text-white/90' : 'border-gray-200 text-gray-600'}`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${reg.primary ? 'text-[#B88917]' : 'text-[#07745D]'}`} />
                <span>{reg.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Coverage Note:</strong> Featured regions are marketing priorities for our specialized teams. Enquiries from all 28 states and 8 UTs are welcome via our project form.
          </p>
        </div>
      </div>
    </section>
  );
};
