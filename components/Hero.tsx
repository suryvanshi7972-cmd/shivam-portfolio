"use client";

import { hero, personal, resume } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="bg-primary-navy rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl animate-fade-in">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Circuit-like minimal decoration */}
        <div className="absolute top-10 right-10 opacity-10 hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50H40L50 20L60 80L70 50H90" stroke="var(--color-light-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="50" r="3" fill="var(--color-light-blue)"/>
            <circle cx="90" cy="50" r="3" fill="var(--color-light-blue)"/>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 space-y-6 md:pr-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-dark-navy border border-accent-blue/30 text-light-blue text-sm font-medium mb-2">
              {hero.subtitle}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
              {hero.heading}
            </h1>
            
            <p className="text-light-blue/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              {hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-all duration-200 shadow-lg shadow-accent-blue/20"
              >
                View My Projects
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              {resume ? (
                <a 
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-dark-navy text-white font-medium rounded-lg border border-accent-blue/40 hover:bg-dark-navy/80 transition-all duration-200"
                >
                  Download Resume
                  <Download size={18} className="ml-2" />
                </a>
              ) : null}
            </div>
          </div>
          
          {/* Profile Image */}
          {personal.profileImage && (
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-accent-blue/20 translate-x-3 translate-y-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent-blue shadow-xl">
                {/* We use standard img with a fallback behavior if image is missing but it's passed as string */}
                <img 
                  src={personal.profileImage} 
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%2307182D%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2240%22%20fill%3D%22%231769E0%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3E%3Ctspan%20x%3D%2250%25%22%20dy%3D%22-1em%22%3EProfile%3C%2Ftspan%3E%3Ctspan%20x%3D%2250%25%22%20dy%3D%221.5em%22%3EPhoto%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E";
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
