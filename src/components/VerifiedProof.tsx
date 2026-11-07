import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileCheck } from 'lucide-react';

export const VerifiedProof: React.FC = () => {
  return (
    <section className="py-16 bg-[#07745D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B88917] font-semibold bg-white/10 px-3 py-1 rounded-full">
            Verified Proof & Signals
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mt-3">
            Trust is built with evidence, not just numbers.
          </h2>
          <p className="text-white/80 text-sm sm:text-base mt-2">
            Every number and claim on this site reflects our commitment to transparent documentation, approved quality standards, and verified workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="text-[#B88917] mb-3">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-editorial font-bold">Project Specific</div>
              <div className="text-xs tracking-wider uppercase text-white/70 mt-1">Written Quotations</div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B88917] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified before execution
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="text-[#B88917] mb-3">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-editorial font-bold">04 Core</div>
              <div className="text-xs tracking-wider uppercase text-white/70 mt-1">Specialized Services</div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B88917] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed capability
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="text-[#B88917] mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-editorial font-bold">Patna Base</div>
              <div className="text-xs tracking-wider uppercase text-white/70 mt-1">& Pan-India Enquiries</div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B88917] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Feasibility reviewed
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="text-[#B88917] mb-3">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-editorial font-bold">100% Consent</div>
              <div className="text-xs tracking-wider uppercase text-white/70 mt-1">Change Approvals</div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#B88917] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Documented milestones
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
