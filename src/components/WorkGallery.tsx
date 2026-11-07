import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../data';
import { MapPin, CheckCircle, Sparkles } from 'lucide-react';

interface WorkGalleryProps {
  onDiscussProjectClick: () => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onDiscussProjectClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Independent House', 'Apartment', 'Independent Floor', 'Villa'];

  const filteredProjects = activeFilter === 'All' 
    ? GALLERY_PROJECTS 
    : GALLERY_PROJECTS.filter(p => p.propertyType === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#07745D] font-semibold bg-[#07745D]/10 px-3 py-1 rounded-full">
              Selected Work & Evidence
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] mt-3">
              See the details behind the finish.
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Real workmanship from our Patna projects. We show proof of execution, material specifications, and client-approved captions rather than stock imagery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-[#07745D] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col group"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#07745D] text-white text-xs font-semibold rounded-md shadow">
                    {project.propertyType}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#07745D]" /> {project.city}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="text-2xl font-editorial font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-200 mt-1 italic">{project.caption}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Services Delivered</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.services.map((srv, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-[#07745D]/10 text-[#07745D] text-xs font-medium rounded">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Materials & Finishes</span>
                    <p className="text-xs text-gray-700 mt-0.5 font-medium">{project.materials}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Site Photograph
                  </span>
                  <button
                    onClick={onDiscussProjectClick}
                    className="text-xs font-semibold text-[#07745D] hover:underline"
                  >
                    Enquire Similar Scope →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
