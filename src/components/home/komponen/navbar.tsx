
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#f0f2f4] shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 max-w-7xl h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-[0px_4px_12px_rgba(19,91,236,0.2)]">
                <span className="material-symbols-outlined text-white">public</span>
            </div>
          <span className="text-xl font-bold tracking-tight text-[#111318]">
            Global English
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">About</Link>
          <Link href="#expertise" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Expertise</Link>
          <Link href="#experience" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Experience</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-[#616f89] cursor-pointer hover:text-[#111318] transition-colors bg-[#f0f2f4] px-3 py-2 rounded-lg">
                <span className="material-symbols-outlined text-lg">public</span>
                <span>EN</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
            <Link href="#contact" className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Book a Consultation
            </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-900 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 space-y-6">
            <Link 
              href="#about" 
              className="block text-2xl font-bold text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#expertise" 
              className="block text-2xl font-bold text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link 
              href="#experience" 
              className="block text-2xl font-bold text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="#contact" 
              className="block text-2xl font-bold text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
             <div className="pt-8 border-t border-gray-100">
                <Link 
                    href="#contact" 
                    className="block w-full text-center px-5 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Book a Consultation
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
}
