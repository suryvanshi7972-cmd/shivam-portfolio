"use client";

import { useEffect } from "react";
import { X, ExternalLink, Download } from "lucide-react";

type CertificateType = {
  name: string;
  organization: string;
  date: string;
  category?: string;
  file?: string;
  image?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
};

export default function CertificateViewer({ 
  cert, 
  onClose 
}: { 
  cert: CertificateType; 
  onClose: () => void;
}) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-main-bg/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-primary-navy w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-dark-navy animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
          <div className="pr-8">
            <h3 className="text-lg font-bold text-white">{cert.name}</h3>
            <p className="text-light-blue/80 text-sm">{cert.organization} &bull; {cert.date}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content area */}
        <div className="flex-grow p-4 md:p-6 overflow-hidden flex flex-col md:flex-row gap-6">
          {/* Main Viewer */}
          <div className="flex-grow bg-dark-navy rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
            {cert.file && cert.file.toLowerCase().endsWith('.pdf') ? (
              <iframe 
                src={`${cert.file}#toolbar=0`} 
                className="w-full h-full border-0"
                title={cert.name}
              />
            ) : cert.image ? (
              <img 
                src={cert.image} 
                alt={cert.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%2307182D%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%231769E0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EPreview%20Not%20Available%3C%2Ftext%3E%3C%2Fsvg%3E";
                }}
              />
            ) : (
              <div className="text-secondary-text text-center p-8">
                Preview not available.
              </div>
            )}
          </div>
          
          {/* Sidebar / Info */}
          <div className="w-full md:w-80 shrink-0 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
            {cert.description && (
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Description</h4>
                <p className="text-light-blue/90 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue border border-accent-blue/20 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-4 border-t border-white/10 mt-auto flex flex-col gap-3">
              {cert.file && (
                <a 
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors text-sm font-medium"
                >
                  <Download size={16} className="mr-2" />
                  View Original File
                </a>
              )}
              {cert.credentialUrl && (
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2.5 bg-dark-navy text-white rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
