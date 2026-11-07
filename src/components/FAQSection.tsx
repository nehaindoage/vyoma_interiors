import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFAQs = showAll ? FAQ_DATA : FAQ_DATA.slice(0, 6);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Objection Handling
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            Questions worth answering before a call.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Clear, factual answers regarding estimates, single-service eligibility, materials, site visits, and project handover.
          </p>
        </div>

        <div className="space-y-4">
          {displayedFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-gray-50 transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900"
                >
                  <span className="text-base sm:text-lg font-editorial flex items-center gap-3">
                    <span className="text-xs text-[#07745D] font-sans font-semibold px-2 py-0.5 bg-[#07745D]/10 rounded">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {FAQ_DATA.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-xl transition-colors"
            >
              {showAll ? 'Show Fewer Questions' : 'See All Questions (10 Total)'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
