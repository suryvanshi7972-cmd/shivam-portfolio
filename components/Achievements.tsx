import { achievements } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Achievements</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-primary-navy rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-accent-blue hover:translate-y-[-4px] transition-transform duration-300 flex flex-col h-full"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 bg-dark-navy rounded-lg text-accent-blue shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{achievement.title}</h3>
                {achievement.date && <p className="text-secondary-text text-sm">{achievement.date}</p>}
              </div>
            </div>
            
            <p className="text-light-blue/80 text-sm mb-6 flex-grow leading-relaxed">
              {achievement.description}
            </p>
            
            {achievement.link && (
              <a 
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center text-accent-blue text-sm font-medium hover:text-white transition-colors"
              >
                View Details
                <ExternalLink size={14} className="ml-1.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
