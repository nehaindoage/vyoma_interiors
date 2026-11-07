import React from 'react';
import { PROCESS_STEPS } from '../data';
import { CheckCircle2, ShieldCheck, FileText, CheckSquare, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Project Process & Commitments
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            Clear scope. Clear decisions. Clear progress.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            We turn quality and on-time milestones into concrete checkpoints to eliminate delays, hidden changes, and miscommunication.
          </p>
        </div>

        {/* 5-Step Horizontal / Vertical Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between relative group hover:border-[#07745D] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#07745D] text-white font-editorial font-bold text-lg flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold text-[#B88917] bg-[#B88917]/10 px-2.5 py-1 rounded">
                    {step.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-editorial font-bold text-[#121212] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 text-[11px] text-gray-400 font-medium flex items-center gap-1">
                <span>Milestone {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Client Commitments Box */}
        <div className="bg-[#07745D]/5 rounded-2xl p-8 border border-[#07745D]/20">
          <h3 className="font-editorial text-2xl font-bold text-[#121212] text-center mb-8">
            Our Four Core Client Commitments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/60 flex flex-col gap-3">
              <div className="w-10 h-10 bg-[#07745D]/10 rounded-lg flex items-center justify-center text-[#07745D]">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#121212]">Written Scope</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                What is included is explicitly documented so there is never ambiguity during execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/60 flex flex-col gap-3">
              <div className="w-10 h-10 bg-[#07745D]/10 rounded-lg flex items-center justify-center text-[#07745D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#121212]">Material Clarity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Approved brands, grades, finishes, and responsibilities recorded before work begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/60 flex flex-col gap-3">
              <div className="w-10 h-10 bg-[#07745D]/10 rounded-lg flex items-center justify-center text-[#07745D]">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#121212]">Change Approval</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Any modifications or additions are discussed and priced transparently before revised work starts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/60 flex flex-col gap-3">
              <div className="w-10 h-10 bg-[#07745D]/10 rounded-lg flex items-center justify-center text-[#07745D]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#121212]">Final Review</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Comprehensive walkthrough and snagging review against approved scope during project closure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
