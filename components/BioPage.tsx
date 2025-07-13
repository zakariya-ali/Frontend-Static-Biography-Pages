"use client";

import { User } from '@/lib/users';
import LinkCard from './LinkCard';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Eye, Github, Twitter, Linkedin, Globe, Mail, Instagram, Palette, BarChart, BookOpen, PenTool, Youtube } from 'lucide-react';

interface BioPageProps {
  user: User;
}

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  globe: Globe,
  mail: Mail,
  instagram: Instagram,
  palette: Palette,
  'bar-chart': BarChart,
  'book-open': BookOpen,
  'pen-tool': PenTool,
};

export default function BioPage({ user }: BioPageProps) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [displayedUsername, setDisplayedUsername] = useState('@');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Track visits using localStorage
    const visitKey = `bio_visits_${user.username}`;
    const currentVisits = parseInt(localStorage.getItem(visitKey) || '0', 10);
    const newVisitCount = currentVisits + 1;
    
    localStorage.setItem(visitKey, newVisitCount.toString());
    setViewCount(newVisitCount);
  }, [user.username]);

  useEffect(() => {
    if (hasEntered && videoRef.current) {
      videoRef.current.play().catch(console.error);
      // Unmute the video when entering
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  }, [hasEntered]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Typewriter animation for username
  useEffect(() => {
    if (!hasEntered) return;
    
    const fullUsername = `@${user.username}`;
    let currentIndex = 1; // Start after @
    let isTyping = true;
    
    const typewriterInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= fullUsername.length) {
          setDisplayedUsername(fullUsername.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Pause at full username for 2 seconds
          isTyping = false;
          setTimeout(() => {
            currentIndex = 1;
            isTyping = true;
          }, 2000);
        }
      }
    }, 150); // Typing speed
    
    return () => clearInterval(typewriterInterval);
  }, [hasEntered, user.username]);

  const handleEnter = () => {
    setHasEntered(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };
  if (!hasEntered) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center cursor-pointer relative overflow-hidden"
        onClick={handleEnter}
        style={{ backgroundColor: user.theme.background }}
      >
        {/* Video background (paused, showing first frame) */}
        {user.videoBackground && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={user.videoBackground}
            muted
            playsInline
            preload="metadata"
          />
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Click to enter text */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white/90 tracking-wide">
            click to enter...
          </h1>
          <div className="mt-4 w-16 h-px bg-white/30 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video background */}
      {user.videoBackground && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={user.videoBackground}
          autoPlay
          muted={isMuted}
          loop
          playsInline
        />
      )}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Sound toggle button */}
      <div 
        className="absolute top-6 left-6 z-50"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Volume slider overlay */}
        <div className={`absolute left-0 top-0 bg-black/60 backdrop-blur-sm rounded-xl border border-white/20 px-4 py-3 flex items-center space-x-3 transition-all duration-300 ${
          showVolumeSlider ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}>
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200"
          >
            {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
          />
        </div>
        
        {/* Default button (visible when not hovering) */}
        <button
          onClick={toggleMute}
          className={`w-12 h-12 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 ${
            showVolumeSlider ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Main bio card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Frosted glass container */}
          <div className="bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-2xl">
            {/* Profile Section */}
            <div className="text-center mb-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
                  <div className="relative w-full h-full">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      className={`object-cover rounded-full transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      priority
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white bg-gray-700 rounded-full">
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Username */}
              <h1 className="text-2xl font-medium text-white mb-6 font-mono relative">
                <div className="relative inline-block">
                  {/* Sparkles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="sparkle sparkle-1"></div>
                    <div className="sparkle sparkle-2"></div>
                    <div className="sparkle sparkle-3"></div>
                    <div className="sparkle sparkle-4"></div>
                    <div className="sparkle sparkle-5"></div>
                    <div className="sparkle sparkle-6"></div>
                  </div>
                  
                  {/* Main text with glow */}
                  <span className="relative z-10 text-glow">
                {displayedUsername}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </h1>

              {/* Status bar */}
              {user.status && (
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-4 py-3 mb-6 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={20}
                          height={20}
                          className="rounded-full object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-white/90 text-sm font-medium">{user.status.text}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {user.status.isLive && (
                        <>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </>
                      )}
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                  {user.status.activity && (
                    <div className="text-xs text-white/60 mt-1 text-left">
                      {user.status.activity}
                    </div>
                  )}
                </div>
              )}

              {/* Social Icons Row */}
              <div className="flex justify-center space-x-4 mb-6">
                {user.links.slice(0, 6).map((link, index) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Globe;
                  return (
                    <button
                      key={index}
                      onClick={() => window.open(link.url, '_blank')}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent size={20} />
                    </button>
                  );
                })}
              </div>

              {/* View count */}
              <div className="flex items-center justify-center space-x-1 text-white/60">
                <Eye size={16} />
                <span className="text-sm font-medium">{viewCount}</span>
              </div>
            </div>
          </div>

          {/* Extended links section */}
          {user.links.length > 6 && (
            <div className="mt-6 space-y-3">
              {user.links.slice(6).map((link, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <LinkCard
                    label={link.label}
                    url={link.url}
                    icon={link.icon}
                    description={link.description}
                    accentColor="rgba(255, 255, 255, 0.9)"
                    textColor="rgba(255, 255, 255, 0.9)"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.8),
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 15px rgba(255, 255, 255, 0.4),
            0 0 20px rgba(255, 255, 255, 0.2);
        }
        
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: sparkle 2s linear infinite;
          opacity: 0;
        }
        
        .sparkle-1 {
          top: -8px;
          left: 10%;
          animation-delay: 0s;
        }
        
        .sparkle-2 {
          top: -12px;
          right: 20%;
          animation-delay: 0.3s;
        }
        
        .sparkle-3 {
          bottom: -8px;
          left: 30%;
          animation-delay: 0.6s;
        }
        
        .sparkle-4 {
          top: 50%;
          left: -12px;
          animation-delay: 0.9s;
        }
        
        .sparkle-5 {
          top: 50%;
          right: -12px;
          animation-delay: 1.2s;
        }
        
        .sparkle-6 {
          bottom: -12px;
          right: 15%;
          animation-delay: 1.5s;
        }
        
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        /* Custom slider styles */
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}