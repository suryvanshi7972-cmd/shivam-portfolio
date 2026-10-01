import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Education</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-primary-navy rounded-2xl p-6 md:p-8 flex items-start gap-6 shadow-md border-l-4 border-accent-blue hover:translate-x-2 transition-transform duration-300"
          >
            <div className="p-3 bg-dark-navy rounded-xl text-accent-blue shrink-0">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-light-blue/80 text-lg">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
