"use client";

import { gallery } from "@/data/portfolio";
import { useState, useMemo } from "react";
import ImageViewer from "./ImageViewer";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    gallery.forEach(item => {
      if (item.category) cats.add(item.category);
    });
    return Array.from(cats);
  }, []);

  const filteredGallery = selectedCategory === "All" 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Gallery</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      {gallery.length === 0 ? (
        <div className="bg-secondary-bg rounded-2xl p-8 md:p-12 text-center border border-dark-navy/10">
          <p className="text-secondary-text text-lg">
            Photos of projects, events, and academic work will be added here.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? "bg-accent-blue text-white shadow-md shadow-accent-blue/20" 
                    : "bg-secondary-bg text-secondary-text hover:bg-primary-navy hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredGallery.map((item, index) => (
              <div 
                key={index}
                className="relative group rounded-xl overflow-hidden cursor-pointer aspect-square bg-dark-navy"
                onClick={() => setSelectedImageIdx(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title || "Gallery image"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%2307182D%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%231769E0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%3C%2Ftext%3E%3C%2Fsvg%3E";
                  }}
                />
                
                <div className="absolute inset-0 bg-primary-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  {item.category && (
                    <span className="text-accent-blue text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedImageIdx !== null && (
        <ImageViewer 
          images={filteredGallery}
          currentIndex={selectedImageIdx}
          onClose={() => setSelectedImageIdx(null)}
          onNavigate={(newIndex) => setSelectedImageIdx(newIndex)}
        />
      )}
    </section>
  );
}
