"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  image: string;
  title?: string;
  description?: string;
  category?: string;
};

export default function ImageViewer({ 
  images,
  currentIndex,
  onClose,
  onNavigate
}: { 
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  const currentItem = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 md:right-6 md:top-6 z-[120] text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <X size={32} />
      </button>

      {images.length > 1 && (
        <>
          <button 
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[120] p-3 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[120] p-3 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>
        </>
      )}

      <div className="relative z-[115] w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in pointer-events-none">
        
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 max-h-[85vh]">
          <img 
            src={currentItem.image} 
            alt={currentItem.title || "Gallery image"}
            className="max-w-full max-h-[70vh] object-contain pointer-events-auto shadow-2xl rounded-sm"
          />
          
          {(currentItem.title || currentItem.description) && (
            <div className="text-center max-w-2xl bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 pointer-events-auto">
              {currentItem.title && <h3 className="text-xl font-bold text-white mb-2">{currentItem.title}</h3>}
              {currentItem.description && <p className="text-white/70">{currentItem.description}</p>}
            </div>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-medium tracking-widest text-sm pointer-events-auto">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
