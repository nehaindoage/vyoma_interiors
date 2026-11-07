import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, Phone, Building, Home, Sparkles } from 'lucide-react';

interface EnquiryFormProps {
  initialProperty?: string;
  initialService?: string;
  initialMode?: 'homeowner' | 'professional';
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProperty, initialService, initialMode = 'homeowner' }) => {
  const [mode, setMode] = useState<'homeowner' | 'professional'>(initialMode);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [stateUT, setStateUT] = useState('Bihar');
  const [propertyType, setPropertyType] = useState(initialProperty || 'Apartment');
  const [selectedServices, setSelectedServices] = useState<string[]>(initialService ? [initialService] : ['POP & False Ceilings']);
  
  // Professional fields
  const [companyName, setCompanyName] = useState('');
  const [professionalRole, setProfessionalRole] = useState('Architect');
  
  // Optional Step 2 fields
  const [projectStage, setProjectStage] = useState('Planning');
  const [budgetRange, setBudgetRange] = useState('Not decided');
  const [desiredStart, setDesiredStart] = useState('As soon as practical');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (initialProperty) setPropertyType(initialProperty);
    if (initialService && !selectedServices.includes(initialService)) {
      setSelectedServices([initialService]);
    }
    if (initialMode) setMode(initialMode);
  }, [initialProperty, initialService, initialMode]);

  const serviceOptions = [
    'POP & False Ceilings',
    'Flooring & Tile Work',
    'Custom Woodwork',
    'Wall Painting & Finishes'
  ];

  const statesAndUTs = [
    'Bihar', 'Delhi (NCT)', 'Haryana', 'Uttar Pradesh', 'Jharkhand', 'West Bengal',
    'Maharashtra', 'Karnataka', 'Telangana', 'Gujarat', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Chhattisgarh', 'Goa', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand',
    'Kerala', 'Madhya Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttarakhand', 'Other UT'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
            Primary Conversion
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
            Tell us about your space.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            A short first step, followed by optional details for a more useful discussion.
          </p>

          {/* Mode switch */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => { setMode('homeowner'); setStep(1); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                mode === 'homeowner'
                  ? 'bg-[#07745D] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home className="w-4 h-4" /> Homeowner Enquiry
            </button>
            <button
              onClick={() => { setMode('professional'); setStep(1); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                mode === 'professional'
                  ? 'bg-[#07745D] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Building className="w-4 h-4" /> Architect / Builder / Real Estate
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="bg-[#07745D]/10 border border-[#07745D]/30 rounded-3xl p-10 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#07745D] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#121212]">
              Thank you. Your project brief has been received.
            </h3>
            <p className="text-gray-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Our team will review your requirements for <strong>{city || 'your city'}</strong> ({propertyType}) and contact you using the details provided (<strong>{mobile}</strong>).
            </p>
            <div className="pt-4">
              <button
                onClick={() => { setSubmitted(false); setStep(1); }}
                className="px-6 py-2.5 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-xl transition-colors"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
            
            {/* Progress bar */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#07745D]">
                Step {step} of 2 — {step === 1 ? 'Required Details' : 'Optional Project Brief'}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {step === 1 ? '50% Complete' : '100% Complete'}
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                {mode === 'professional' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Company / Firm Name *</label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g., Studio Design Associates"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Your Role *</label>
                      <select
                        value={professionalRole}
                        onChange={(e) => setProfessionalRole(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                      >
                        <option value="Architect">Architect</option>
                        <option value="Builder">Builder / Developer</option>
                        <option value="Real Estate">Real Estate Company</option>
                        <option value="Interior Designer">Interior Designer</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Mobile Number (+91) *</label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Project City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g., Patna, Delhi, Ranchi"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">State / UT *</label>
                    <select
                      value={stateUT}
                      onChange={(e) => setStateUT(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    >
                      {statesAndUTs.map((st, idx) => (
                        <option key={idx} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Property Type *</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    >
                      <option value="Independent House">Independent House</option>
                      <option value="Villa">Villa</option>
                      <option value="Independent Floor">Independent Floor</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial / Retail</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Required Services (Multi-select) *</label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {serviceOptions.map((srv, idx) => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-all ${
                              isChecked
                                ? 'bg-[#07745D] text-white border-[#07745D]'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!name || !mobile || !city) {
                        alert('Please fill in your Name, Mobile Number, and City.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="px-8 py-3.5 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    Continue to Project Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Project Stage (Optional)</label>
                    <select
                      value={projectStage}
                      onChange={(e) => setProjectStage(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    >
                      <option value="Planning">Planning / Designing</option>
                      <option value="New construction">New Construction (Bare shell)</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Ongoing">Ongoing Site</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Budget Range (Optional)</label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    >
                      <option value="Not decided">Not decided / Open</option>
                      <option value="₹3L - ₹5L">₹3L - ₹5L</option>
                      <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                      <option value="₹10L - ₹25L">₹10L - ₹25L</option>
                      <option value="₹25L+">₹25L+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Desired Start (Optional)</label>
                    <select
                      value={desiredStart}
                      onChange={(e) => setDesiredStart(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                    >
                      <option value="As soon as practical">As soon as practical</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="Later">Later</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                    {mode === 'professional' ? 'Upload Drawings or BOQ (Optional)' : 'Photos or Floor Plan Sketch (Optional)'}
                  </label>
                  <label className="border-2 border-dashed border-gray-300 hover:border-[#07745D] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-white transition-colors">
                    <Upload className="w-8 h-8 text-[#07745D] mb-2" />
                    <span className="text-xs font-medium text-gray-700">
                      {fileName ? `Uploaded: ${fileName}` : 'Click to upload PDF, CAD or Image files (Max 25MB)'}
                    </span>
                    <input type="file" onChange={handleFileUpload} className="hidden" accept=".pdf,.png,.jpg,.jpeg,.dwg" />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">Project Notes or Specific Requirements (Optional)</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about specific room finishes, ceiling heights, or material preferences..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#07745D] focus:outline-none"
                  />
                </div>

                <div className="text-xs text-gray-500 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <strong>Privacy Note:</strong> We will use your details solely to respond to this enquiry. We respect your confidentiality.
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    Send My Project Brief <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </form>
        )}
      </div>
    </section>
  );
};
