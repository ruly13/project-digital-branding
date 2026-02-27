
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#f0f2f4] shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 max-w-7xl h-[88px] flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-[#111318]">
            <strong>Eva</strong> Lastiani
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <Link href="#about" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Experience</Link>
          <Link href="#education" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Education</Link>
          <Link href="#certifications" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Certifications</Link>
          <Link href="#social-impact" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Projects</Link>
          <Link href="#testimonials" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#contact" className="text-sm font-bold text-[#616f89] hover:text-primary transition-colors">Contact</Link>
        </div>

        <button 
          className="lg:hidden text-gray-900 z-50 relative ml-auto"
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
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 space-y-6 overflow-y-auto">
            <Link 
              href="#about" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="#education" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link 
              href="#certifications" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              href="#social-impact" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#testimonials" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="block text-xl font-bold text-gray-900 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
        </div>
      )}
    </nav>
  );
}
