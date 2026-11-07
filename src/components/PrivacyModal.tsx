import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="px-6 py-5 bg-[#07745D] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#B88917]" />
            <h3 className="text-xl font-editorial font-bold">Privacy & Data Commitment</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/80 hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            At <strong>Vyoma Interiors</strong>, we respect your privacy and are committed to protecting the personal information you share with us through our project brief and consultation forms.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4">1. Information We Collect</h4>
          <p>
            When you submit a project brief, we collect your name, mobile number, project city, property type, selected services, and optional details such as drawings, budget range, and notes.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4">2. How We Use Your Details</h4>
          <p>
            We use your details solely to evaluate project feasibility, respond to your enquiry, prepare estimated scopes, and coordinate consultation visits. We never sell, rent, or share your contact information with third-party advertisers.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4">3. Secure Storage & Consent</h4>
          <p>
            All submitted enquiries are transmitted over secure connections and stored in protected CRM environments. By submitting your phone number and project details, you provide explicit consent for our team to contact you via phone, WhatsApp, or email regarding your project.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4">4. Contact Us</h4>
          <p>
            If you have any questions regarding data privacy or wish to update your submitted project brief, please contact us directly at <a href="mailto:hello.vyomainteriors@gmail.com" className="text-[#07745D] underline font-medium">hello.vyomainteriors@gmail.com</a> or call <a href="tel:+917992379168" className="text-[#07745D] underline font-medium">+91 79923 79168</a>.
          </p>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#07745D] hover:bg-[#055947] text-white text-sm font-medium rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
