

import { Instagram } from 'lucide-react';

export default function Footer() {
  return (


    <footer className="bg-background-dark text-white py-16 border-t border-[#1e2736]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            
            {/* Left: Logo & Tagline */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex items-center gap-3">
                     <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-[0px_4px_12px_rgba(19,91,236,0.4)]">
                        <span className="material-symbols-outlined text-white text-lg">school</span>
                     </div>
                     <span className="text-xl font-bold tracking-tight text-white">Eva Lastiani</span>
                </div>
                <p className="text-sm text-[#94a3b8] max-w-xs">Educator dedicated to inspiring students and fostering a love for learning.</p>
            </div>

            {/* Center: Social Icons */}
            <div className="flex gap-4 w-full md:w-auto justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-2">
                 <a href="https://www.instagram.com/eva_lastiani/" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="Instagram Personal">
                    <Instagram className="size-6" />
                 </a>
                 <a href="https://www.instagram.com/englishclass_by_egefoundation/" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="Instagram Education">
                    <Instagram className="size-6" />
                 </a>
                 <a href="https://www.tiktok.com/@itsmeeva" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="TikTok It's Me Eva">
                    {/* Custom TikTok SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                 </a>
                 <a href="https://www.tiktok.com/@englishclass_by_misseva" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="TikTok English Class by Miss Eva">
                    {/* Custom TikTok SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                 </a>

            </div>
            

        </div>
        
        <div className="border-t border-[#2e3b52] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748b]">
             <p className="order-2 md:order-1">&copy; {new Date().getFullYear()} Eva Lastiani. All rights reserved.</p>
             <p className="order-1 md:order-2 mb-4 md:mb-0">Designed & Built by <a href="https://www.rohmatchoiruly.site/" className="text-[#94a3b8] hover:text-white transition-colors">rohmat choiruly anwar</a></p>
        </div>
      </div>
    </footer>
  );
}
