import { interests } from "@/data/portfolio";
import { Zap, Cpu, Settings, Sun, Bot, Wifi, BrainCircuit, Activity, BatteryCharging } from "lucide-react";

export default function Interests() {
  if (!interests || interests.length === 0) return null;

  // Simple mapping function to assign icons based on keywords
  const getIcon = (interest: string) => {
    const lower = interest.toLowerCase();
    if (lower.includes('power') || lower.includes('electrical')) return <Zap size={20} />;
    if (lower.includes('embedded') || lower.includes('microcontroller')) return <Cpu size={20} />;
    if (lower.includes('automation') || lower.includes('control')) return <Settings size={20} />;
    if (lower.includes('solar') || lower.includes('renewable')) return <Sun size={20} />;
    if (lower.includes('robotics')) return <Bot size={20} />;
    if (lower.includes('iot') || lower.includes('internet')) return <Wifi size={20} />;
    if (lower.includes('ai') || lower.includes('artificial') || lower.includes('machine')) return <BrainCircuit size={20} />;
    if (lower.includes('electronics')) return <BatteryCharging size={20} />;
    return <Activity size={20} />;
  };

  return (
    <section id="interests" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">Technical Interests</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 bg-primary-navy px-5 py-3 rounded-xl border border-transparent hover:border-accent-blue/50 transition-colors shadow-sm group"
          >
            <div className="text-accent-blue group-hover:scale-110 transition-transform">
              {getIcon(interest)}
            </div>
            <span className="text-white font-medium">{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
