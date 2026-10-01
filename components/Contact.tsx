"use client";

import { socialLinks, personal } from "@/data/portfolio";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin, Instagram, Youtube } from "./Icons";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (socialLinks.email) {
      window.location.href = `mailto:${socialLinks.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0A%0AFrom: ${formData.email})`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="bg-primary-navy rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-dark-navy">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="h-1 w-20 bg-accent-blue mb-8 rounded-full"></div>
            
            <p className="text-light-blue/80 text-lg mb-10 leading-relaxed max-w-md">
              Interested in engineering, technology and practical projects? Feel free to connect.
            </p>
            
            <div className="space-y-6">
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="flex items-center text-white hover:text-accent-blue transition-colors group">
                  <div className="p-3 bg-dark-navy rounded-xl mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                    <Mail size={24} className="text-accent-blue" />
                  </div>
                  <span className="font-medium">{socialLinks.email}</span>
                </a>
              )}
              
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-accent-blue transition-colors group">
                  <div className="p-3 bg-dark-navy rounded-xl mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                    <Linkedin size={24} className="text-accent-blue" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              )}

              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-accent-blue transition-colors group">
                  <div className="p-3 bg-dark-navy rounded-xl mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                    <Github size={24} className="text-accent-blue" />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </a>
              )}
              
              <div className="flex gap-4 pt-4">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-navy hover:bg-accent-blue text-white rounded-xl transition-colors border border-white/5 shadow-sm">
                    <Instagram size={20} />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-navy hover:bg-accent-blue text-white rounded-xl transition-colors border border-white/5 shadow-sm">
                    <Youtube size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Form UI (mailto based) */}
          <div className="bg-dark-navy p-6 md:p-8 rounded-2xl border border-white/5 shadow-inner">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-blue/80 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-navy border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue text-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-blue/80 mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-navy border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-blue/80 mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-navy border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue text-white transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3.5 px-4 bg-accent-blue hover:bg-accent-blue/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center mt-2 shadow-lg shadow-accent-blue/20"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
