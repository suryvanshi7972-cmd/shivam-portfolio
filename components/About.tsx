import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-main-bg">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">About Me</h2>
        <div className="h-1 w-20 bg-accent-blue mt-4 rounded-full"></div>
      </div>
      
      <div className="bg-primary-navy rounded-2xl p-8 md:p-12 shadow-lg animate-slide-up">
        <div className="prose prose-lg prose-invert max-w-none text-white/90 whitespace-pre-line">
          {about.description}
        </div>
      </div>
    </section>
  );
}
