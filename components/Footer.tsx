"use client";

import { personal, socialLinks } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, Instagram, Youtube } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-navy">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-1">
            {personal.name}
          </h2>
          <p className="text-light-blue/70 text-sm">
            {personal.role}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-light-blue/60 hover:text-accent-blue transition-colors">
              <Github size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-blue/60 hover:text-accent-blue transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {socialLinks.email && (
            <a href={`mailto:${socialLinks.email}`} className="text-light-blue/60 hover:text-accent-blue transition-colors">
              <Mail size={20} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-light-blue/60 hover:text-accent-blue transition-colors">
              <Instagram size={20} />
            </a>
          )}
          {socialLinks.youtube && (
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-light-blue/60 hover:text-accent-blue transition-colors">
              <Youtube size={20} />
            </a>
          )}
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-dark-navy hover:bg-accent-blue text-white rounded-full transition-colors border border-white/5"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <p className="text-light-blue/50 text-xs">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
