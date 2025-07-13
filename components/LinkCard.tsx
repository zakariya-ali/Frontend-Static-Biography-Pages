"use client";

import { Github, Twitter, Linkedin, Globe, Mail, Instagram, Palette, Image, BarChart, BookOpen, PenTool, ExternalLink, DivideIcon as LucideIcon } from 'lucide-react';

interface LinkCardProps {
  label: string;
  url: string;
  icon: string;
  description?: string;
  accentColor: string;
  textColor: string;
}

const iconMap: Record<string, typeof LucideIcon> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  globe: Globe,
  mail: Mail,
  instagram: Instagram,
  palette: Palette,
  image: Image,
  'bar-chart': BarChart,
  'book-open': BookOpen,
  'pen-tool': PenTool,
};

export default function LinkCard({ 
  label, 
  url, 
  icon, 
  description, 
  accentColor, 
  textColor 
}: LinkCardProps) {
  const IconComponent = iconMap[icon] || Globe;

  const handleClick = () => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group w-full p-4 rounded-xl backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-white/10 text-left"
      style={{ 
        '--accent-color': accentColor,
        '--text-color': textColor 
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div 
            className="p-3 rounded-lg transition-colors duration-300"
            style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
          >
            <IconComponent 
              size={24} 
              style={{ color: textColor }}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 
              className="font-semibold text-lg group-hover:translate-x-1 transition-transform duration-300"
              style={{ color: textColor }}
            >
              {label}
            </h3>
            {description && (
              <p 
                className="text-sm opacity-70 mt-1"
                style={{ color: textColor }}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        <ExternalLink 
          size={20} 
          style={{ color: textColor }}
          className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
        />
      </div>
    </button>
  );
}