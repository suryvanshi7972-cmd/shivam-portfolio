import { ExternalLink, Eye, FileText } from "lucide-react";

type CertificateType = {
  name: string;
  organization: string;
  date: string;
  category?: string;
  file?: string;
  image?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
};

export default function CertificateCard({ 
  cert, 
  onView 
}: { 
  cert: CertificateType; 
  onView: () => void;
}) {
  const hasPreview = !!(cert.file || cert.image);

  return (
    <div className="bg-primary-navy rounded-2xl p-6 shadow-md border border-transparent hover:border-accent-blue/30 transition-all duration-300 flex flex-col h-full group">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors line-clamp-2">
          {cert.name}
        </h3>
        <p className="text-light-blue/80 mt-1">{cert.organization}</p>
        <p className="text-secondary-text text-sm mt-1">{cert.date}</p>
      </div>
      
      {cert.skills && cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue border border-accent-blue/20 rounded-md">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="text-xs px-2.5 py-1 bg-dark-navy text-light-blue border border-accent-blue/20 rounded-md">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      )}
      
      <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-3">
        {hasPreview && (
          <button 
            onClick={onView}
            className="flex-1 flex items-center justify-center px-3 py-2 bg-dark-navy hover:bg-accent-blue text-white text-sm font-medium rounded-lg transition-colors border border-white/10 hover:border-accent-blue"
          >
            <Eye size={16} className="mr-2" />
            Preview
          </button>
        )}
        
        {cert.credentialUrl && (
          <a 
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-3 py-2 bg-dark-navy hover:bg-dark-navy/80 text-white text-sm font-medium rounded-lg transition-colors border border-white/10"
          >
            <ExternalLink size={16} className="mr-2" />
            Verify
          </a>
        )}
      </div>
    </div>
  );
}
