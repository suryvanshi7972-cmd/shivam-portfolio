"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";

type ProjectType = {
  title: string;
  shortDescription: string;
  category: string;
  image: string;
  concepts?: string[];
  hardware?: string[];
  technologies?: string[];
};

export default function ProjectCard({ 
  project, 
  onClick 
}: { 
  project: ProjectType; 
  onClick: () => void;
}) {
  const allTags = [
    ...(project.technologies || []),
    ...(project.hardware || []),
    ...(project.concepts || [])
  ].slice(0, 4); // Show max 4 tags on card

  return (
    <div 
      className="bg-primary-navy rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-accent-blue/30 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 md:h-64 w-full bg-dark-navy overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%2307182D%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%231769E0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EProject%20Image%3C%2Ftext%3E%3C%2Fsvg%3E";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-navy text-accent-blue">
            <Code2 size={48} opacity={0.5} />
          </div>
        )}
        <div className="absolute top-4 left-4 bg-accent-blue/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-light-blue/80 line-clamp-3 mb-6 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((tag, i) => (
            <span key={i} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue rounded-md border border-white/5">
              {tag}
            </span>
          ))}
          {((project.technologies?.length || 0) + (project.hardware?.length || 0) + (project.concepts?.length || 0)) > 4 && (
            <span className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue rounded-md border border-white/5">
              +{((project.technologies?.length || 0) + (project.hardware?.length || 0) + (project.concepts?.length || 0)) - 4} more
            </span>
          )}
        </div>
        
        <div className="pt-4 border-t border-white/10 mt-auto flex items-center text-accent-blue font-medium group-hover:translate-x-1 transition-transform">
          View Details
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
}
