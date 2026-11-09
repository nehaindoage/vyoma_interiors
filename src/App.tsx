/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VerifiedProof } from './components/VerifiedProof';
import { PropertyTypes } from './components/PropertyTypes';
import { ServicesSection } from './components/ServicesSection';
import { WorkGallery } from './components/WorkGallery';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { B2BSection } from './components/B2BSection';
import { ServiceRegions } from './components/ServiceRegions';
import { TestimonialsInstagram } from './components/TestimonialsInstagram';
import { FAQSection } from './components/FAQSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ServiceItem } from './data';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { InitialPopup } from './components/InitialPopup';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [enquiryProperty, setEnquiryProperty] = useState<string>('Apartment');
  const [enquiryService, setEnquiryService] = useState<string>('POP & False Ceilings');
  const [enquiryMode, setEnquiryMode] = useState<'homeowner' | 'professional'>('homeowner');

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProperty = (propertyTitle: string) => {
    setEnquiryProperty(propertyTitle);
    setEnquiryMode('homeowner');
    scrollToEnquiry();
  };

  const handleSelectService = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    setEnquiryMode('homeowner');
    scrollToEnquiry();
  };

  const handleProfessionalEnquiry = () => {
    setEnquiryMode('professional');
    scrollToEnquiry();
  };

  const handleWhatsAppFloat = () => {
    window.open('https://wa.me/917992379168?text=Hello%20Vyoma%20Interiors,%20I%20would%20like%20to%20discuss%20an%20interior%20project.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans selection:bg-[#07745D] selection:text-white">
      {/* 01 / Header & Navigation */}
      <Header onDiscussProjectClick={scrollToEnquiry} />

      {/* Main Content Sections */}
      <main>
        {/* 02 / Hero & Controlled Image Slider */}
        <Hero
          onDiscussProjectClick={scrollToEnquiry}
          onViewServicesClick={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 03 / Verified Proof & Project Signals */}
        <VerifiedProof />

        {/* 04 / Homeowners & Property Types */}
        <PropertyTypes onSelectProperty={handleSelectProperty} />

        {/* 05 / Four Core Service Cards */}
        <ServicesSection
          onOpenServiceModal={(service) => setActiveServiceModal(service)}
          onSelectService={handleSelectService}
        />

        {/* 06 / Selected Work & Workmanship Gallery */}
        <WorkGallery onDiscussProjectClick={scrollToEnquiry} />

        {/* 07 / Project Process & Client Commitments */}
        <ProcessSection />

        {/* 08 / Pricing & What a Quotation Includes */}
        <PricingSection onRequestEstimateClick={scrollToEnquiry} />

        {/* 09 / B2B Route: Builders, Architects & Real Estate */}
        <B2BSection onProfessionalEnquiryClick={handleProfessionalEnquiry} />

        {/* 10 / Service Regions with Bihar Emphasis */}
        <ServiceRegions />

        {/* 11 / Client Testimonials & Instagram Inspiration */}
        <TestimonialsInstagram />

        {/* 12 / Frequently Asked Questions */}
        <FAQSection />

        {/* 13 / Custom Project Enquiry Form */}
        <div id="enquiry">
          <EnquiryForm
            initialProperty={enquiryProperty}
            initialService={enquiryService}
            initialMode={enquiryMode}
          />
        </div>
      </main>

      {/* 14 / Footer, Contact Details & QR Hub */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onDiscussProjectClick={scrollToEnquiry}
      />

      {/* Floating WhatsApp Action (Mobile-first persistent contact rule) */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center">
        <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-75"></span>
        <button
          onClick={handleWhatsAppFloat}
          className="relative bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Modals & Initial Popup */}
      <InitialPopup onSuccess={scrollToEnquiry} />

      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectService={handleSelectService}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
