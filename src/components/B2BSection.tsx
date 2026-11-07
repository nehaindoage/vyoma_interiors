import React from 'react';
import { Building2, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface B2BSectionProps {
  onProfessionalEnquiryClick: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onProfessionalEnquiryClick }) => {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
              B2B & Professional Route
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121212]">
              Built to work with your project team.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Builders, architects and real estate developers can discuss defined interior finishing work packages. Professional buyers look for scope discipline, documentation, BOQs, sequencing, and site coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#07745D] flex-shrink-0 mt-0.5" />
                <span>Work against approved drawings & BOQs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#07745D] flex-shrink-0 mt-0.5" />
                <span>Structured finishing packages & scheduling</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onProfessionalEnquiryClick}
                className="px-8 py-4 bg-[#07745D] hover:bg-[#055947] text-white font-medium rounded-xl shadow-md transition-all flex items-center gap-2 group"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#B88917]" />
                Share Drawings / BOQ <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#B88917] font-bold">Partner Route</span>
                <h3 className="text-xl font-editorial font-bold mt-0.5">Dedicated Work-Package Execution</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
