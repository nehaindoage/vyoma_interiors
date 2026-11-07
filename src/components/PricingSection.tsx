import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, FileText, Shield, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onRequestEstimateClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestEstimateClick }) => {
  const [openDriver, setOpenDriver] = useState<number | null>(0);

  const costDrivers = [
    {
      title: 'Measured Area & Site Condition',
      description: 'Accurate carpet area measurements, ceiling heights, wall plaster status, and civil readiness of the property.'
    },
    {
      title: 'Material Grades & Selected Finishes',
      description: 'Choice of plywood grades (BWR/BWP), laminates, veneers, gypsum boards, and paint luxury sheen levels.'
    },
    {
      title: 'Labour, Access & Preparation',
      description: 'Skilled carpentry, masonry, painting manpower, site protection, and material staging logistics.'
    },
    {
      title: 'Scope Complexity & Installation Details',
      description: 'Cove lighting channels, intricate wall paneling, custom hardware requirements, and finish detailing.'
    }
  ];

  const writtenEstimateIncludes = [
    'Scope & exact quantities',
    'Material specifications & brands',
    'Inclusions & exclusions',
    'Milestones & payment terms',
    'Expected execution sequence'
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Commercial Clarity
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            A quotation you can actually understand.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            People want to know what drives cost and what might be excluded. Silence around pricing often feels risky. No unapproved ₹/sq ft rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: What Shapes the Estimate */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              What Shapes the Estimate
            </h3>
            <div className="space-y-3">
              {costDrivers.map((driver, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenDriver(openDriver === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between font-semibold text-gray-800 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm">{driver.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openDriver === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openDriver === idx && (
                    <div className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                      {driver.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Your Written Estimate */}
          <div className="lg:col-span-6 bg-[#07745D] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#B88917] mb-3">
                <FileText className="w-6 h-6" />
                <span className="text-xs uppercase tracking-wider font-bold">Transparent Commitment</span>
              </div>
              <h3 className="font-editorial text-3xl font-bold mb-4">Your Written Estimate Includes</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Every project brief receives a detailed itemized breakdown so you understand exactly what you are investing in before work begins.
              </p>

              <ul className="space-y-3 mb-8">
                {writtenEstimateIncludes.map((inc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#B88917] flex-shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onRequestEstimateClick}
              className="w-full py-4 bg-[#B88917] hover:bg-[#966E12] text-white font-medium rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              Request a Project Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-gray-500 italic">
          Quotes are project-specific. Submitting a brief does not imply an instant final price without site assessment.
        </div>
      </div>
    </section>
  );
};
