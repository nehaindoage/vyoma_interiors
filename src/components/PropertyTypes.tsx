import React from 'react';
import { PROPERTY_TYPES_DATA } from '../data';
import { ArrowRight, Home } from 'lucide-react';

interface PropertyTypesProps {
  onSelectProperty: (propertyTitle: string) => void;
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({ onSelectProperty }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
              Primary Audience
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
              A better finish for the home you live in.
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Recognise your property type below. Select your space to prefill your project brief and connect with our finishing specialists.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTY_TYPES_DATA.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop.title)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[#07745D]">
                  <Home className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#B88917] font-bold">Property Type</span>
                  <h3 className="text-xl font-editorial font-bold">{prop.title}</h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {prop.description}
                </p>
                <div className="flex items-center text-xs font-semibold text-[#07745D] group-hover:text-[#055947] gap-1 pt-3 border-t border-gray-100">
                  <span>Select for enquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          Commercial and retail work may also be accommodated upon individual scope review.
        </div>
      </div>
    </section>
  );
};
