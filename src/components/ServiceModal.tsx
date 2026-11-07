import React from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../data';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider px-2.5 py-1 bg-[#07745D] rounded font-medium">Core Service</span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold mt-1">{service.title}</h3>
            <p className="text-sm text-gray-200">{service.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#07745D] uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Detailed Scope of Execution
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.scope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-[#07745D] font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#B88917] uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Approved Materials & Brands
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.materials.map((mat, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-amber-50 text-amber-900 text-xs font-medium rounded-md border border-amber-200">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#07745D]/5 p-4 rounded-xl border border-[#07745D]/20">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#07745D] mb-1">Typical Key Decision</h5>
            <p className="text-sm text-gray-700 italic">{service.typicalDecisions}</p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectService(service.title);
              onClose();
            }}
            className="px-6 py-2.5 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2"
          >
            Discuss This Service <CheckCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
