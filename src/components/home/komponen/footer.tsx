
import Link from 'next/link';

export default function Footer() {
  return (


    <footer className="bg-background-dark text-white py-16 border-t border-[#1e2736]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            
            {/* Left: Logo & Tagline */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex items-center gap-3">
                     <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-[0px_4px_12px_rgba(19,91,236,0.4)]">
                        <span className="material-symbols-outlined text-white text-lg">school</span>
                     </div>
                     <span className="text-xl font-bold tracking-tight text-white">Global English</span>
                </div>
                <p className="text-sm text-[#94a3b8] max-w-xs">Empowering students worldwide since 2012.</p>
            </div>

            {/* Center: Social Icons */}
            <div className="flex gap-6 w-full md:w-auto justify-start md:justify-center">
                 <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">public</span>
                 </a>
                 <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">alternate_email</span>
                 </a>
                 <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">share</span>
                 </a>
            </div>
            
            {/* Right: Links */}
            <div className="flex gap-8 text-sm font-medium text-[#94a3b8] w-full md:w-auto justify-start md:justify-end">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
        
        <div className="border-t border-[#2e3b52] pt-8 flex flex-col items-center justify-center text-xs text-[#64748b]">
             <p>&copy; {new Date().getFullYear()} Global English. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
