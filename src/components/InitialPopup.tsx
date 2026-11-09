import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface InitialPopupProps {
  onSuccess: () => void;
}

export const InitialPopup: React.FC<InitialPopupProps> = ({ onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 1.5 seconds on every page load or refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !city) {
      alert('Please fill in your Name, Mobile Number, and City.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleUp">
        {/* Header background */}
        <div className="bg-[#07745D] p-6 text-white text-center relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88917] text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to Vyoma Interiors
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold">Plan Your Dream Finish</h3>
          <p className="text-xs text-white/80 mt-1">Get expert interior finishing in Patna & across India.</p>
        </div>

        {/* Content / Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-[#07745D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-gray-900">Brief Received!</h4>
              <p className="text-xs text-gray-600">
                Our finishing expert will call you shortly on <strong>{mobile}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Rajesh Sinha"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Mobile Number (+91) *</label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="98765 43210"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Project City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Patna"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Villa">Villa</option>
                    <option value="Independent Floor">Independent Floor</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                Request Quick Consultation <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-gray-400 mt-2">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
