import { skills } from "@/data/portfolio";
import * as Icons from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => {
          // @ts-ignore - Dynamic icon rendering
          const Icon = Icons[skillGroup.icon] || Icons.Cpu;
          
          return (
            <div 
              key={index}
              className="bg-primary-navy rounded-2xl p-6 md:p-8 shadow-md border border-dark-navy hover:border-accent-blue/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-dark-navy rounded-xl text-accent-blue">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <span className="text-xs px-3 py-1 bg-dark-navy text-light-blue rounded-full">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
