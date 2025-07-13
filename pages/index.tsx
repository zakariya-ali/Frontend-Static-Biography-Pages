"use client";

import Head from 'next/head';
import Link from 'next/link';
import { getAllUsernames, users } from '@/lib/users';
import { Pill, Stethoscope, Activity, ChevronRight, Copy, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const usernames = getAllUsernames();

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>vicodin.wtf - Diagnostic Bio Pages</title>
        <meta name="description" content="It's not lupus. It's your bio page. Create diagnostic-grade bio pages that actually work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="vicodin.wtf - Diagnostic Bio Pages" />
        <meta property="og:description" content="It's not lupus. It's your bio page. Create diagnostic-grade bio pages that actually work." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="vicodin.wtf - Diagnostic Bio Pages" />
        <meta name="twitter:description" content="It's not lupus. It's your bio page." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gray-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-700/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Floating particles */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
          
          {/* Twinkling stars */}
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
        </div>

        {/* Header */}
        <header className="relative z-50 px-6 py-8">
          <nav className="max-w-4xl mx-auto bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-full px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Pill className="w-8 h-8 text-gray-300" />
              <span className="text-2xl font-bold text-white">
                vicodin<span className="text-gray-400">.</span>wtf
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-gray-300">
              <a 
                href="https://discord.gg/Kn97Weha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Prescription
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center mb-16">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-700/30">
              <Activity className="w-4 h-4 text-gray-400 animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">Differential diagnosis: Bio page syndrome</span>
            </div>

            {/* Main headline with typing animation */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">It's</span>{' '}
              <span className="inline-block animate-fade-in-up text-red-300" style={{ animationDelay: '0.2s' }}>never</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>lupus.</span>
              <br />
              <span className="inline-block animate-fade-in-up text-gray-300" style={{ animationDelay: '0.6s' }}>It's</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.8s' }}>your</span>{' '}
              <span className="inline-block animate-fade-in-up text-gray-300" style={{ animationDelay: '1s' }}>bio page.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              vicodin.wtf is your diagnostic tool for modern, feature-rich bio pages and fast, reliable link management.
              <br />
              <span className="text-gray-400 font-medium">Everything you need — diagnostically proven.</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 text-center pb-8">
          <p className="text-gray-400 text-sm">
            created with love by Arcane ❤️
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
            opacity: 1;
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px) rotate(360deg);
            opacity: 0.5;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) translateY(50px) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-50px) rotate(45deg);
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 40%; left: 20%; animation-delay: 1s; }
        .particle-3 { top: 60%; left: 15%; animation-delay: 2s; }
        .particle-4 { top: 30%; right: 20%; animation-delay: 0.5s; }
        .particle-5 { top: 70%; right: 10%; animation-delay: 1.5s; }
        .particle-6 { top: 50%; right: 30%; animation-delay: 2.5s; }
        .particle-7 { top: 80%; left: 40%; animation-delay: 3s; }
        .particle-8 { top: 25%; left: 60%; animation-delay: 3.5s; }

        .star {
          position: absolute;
          width: 1px;
          height: 1px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        .star-1 { top: 15%; left: 25%; animation-delay: 0s; }
        .star-2 { top: 35%; right: 25%; animation-delay: 1s; }
        .star-3 { top: 65%; left: 70%; animation-delay: 2s; }
        .star-4 { top: 75%; right: 40%; animation-delay: 1.5s; }
        .star-5 { top: 45%; left: 80%; animation-delay: 0.5s; }
      `}</style>
    </>
  );
}