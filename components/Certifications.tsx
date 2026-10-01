"use client";

import { certifications } from "@/data/portfolio";
import { useState, useMemo } from "react";
import CertificateCard from "./CertificateCard";
import CertificateViewer from "./CertificateViewer";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    certifications.forEach(cert => {
      if (cert.category) cats.add(cert.category);
    });
    return Array.from(cats);
  }, []);

  const filteredCerts = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Certifications</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      {certifications.length === 0 ? (
        <div className="bg-secondary-bg rounded-2xl p-8 md:p-12 text-center border border-dark-navy/10">
          <p className="text-secondary-text text-lg">
            Technical certifications and learning credentials will be added here.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert, index) => (
              <CertificateCard 
                key={index} 
                cert={cert} 
                onView={() => setSelectedCert(cert)} 
              />
            ))}
          </div>
        </>
      )}

      {selectedCert && (
        <CertificateViewer 
          cert={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
}
