"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Github } from "./Icons";

type ProjectType = {
  title: string;
  shortDescription: string;
  longDescription?: string;
  category: string;
  image: string;
  gallery?: string[];
  concepts?: string[];
  hardware?: string[];
  technologies?: string[];
  status?: string;
  github?: string;
  demo?: string;
};

export default function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: ProjectType; 
  onClose: () => void;
}) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = [project.image, ...(project.gallery || [])].filter(Boolean);
  
  // Remove duplicates from gallery if the main image is also included
  const uniqueImages = Array.from(new Set(images));

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % uniqueImages.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + uniqueImages.length) % uniqueImages.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-main-bg/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-primary-navy w-full max-w-4xl max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-dark-navy">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-bold text-white pr-8">{project.title}</h2>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 md:right-6 md:top-6 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow p-4 md:p-6 space-y-8 custom-scrollbar">
          
          {/* Image Gallery */}
          {uniqueImages.length > 0 && (
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-dark-navy group">
              <img 
                src={uniqueImages[currentImageIdx]} 
                alt={`${project.title} image ${currentImageIdx + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%2307182D%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%231769E0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%20Not%20Found%3C%2Ftext%3E%3C%2Fsvg%3E";
                }}
              />
              
              {uniqueImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {uniqueImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full ${idx === currentImageIdx ? 'bg-accent-blue' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">About this project</h3>
                <p className="text-light-blue/80 whitespace-pre-line leading-relaxed">
                  {project.longDescription || project.shortDescription}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {project.status && (
                <div>
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Status</h4>
                  <div className="inline-block px-3 py-1 bg-dark-navy text-accent-blue rounded-md text-sm border border-accent-blue/20">
                    {project.status}
                  </div>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.hardware && project.hardware.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Hardware</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.hardware.map((hw, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue rounded-md border border-white/5">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.concepts && project.concepts.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.concepts.map((concept, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue rounded-md border border-white/5">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col gap-3 pt-4">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2.5 bg-dark-navy text-white rounded-lg border border-white/10 hover:bg-dark-navy/80 transition-colors font-medium"
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
