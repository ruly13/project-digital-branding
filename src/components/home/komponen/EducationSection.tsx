
export default function EducationSection() {


  return (

    <section id="education" className="py-24 bg-white scroll-mt-24 relative">
       {/* Background decoration removed as per reference code which uses clean white */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">Educational Background</h2>
          <p className="text-[#616f89] mt-2 max-w-2xl mx-auto">Academic foundations and continuous professional development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
          <div className="flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
            <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm group-hover:bg-primary/10 transition-colors">
               <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#111318]">Master of Education</h3>
              <p className="text-sm text-primary font-medium mb-1">University of London</p>
              <p className="text-xs text-[#616f89] uppercase tracking-wide mb-3 font-semibold">Honors • Applied Linguistics</p>
              <p className="text-sm text-[#616f89]">Specialized in sociolinguistics and second language acquisition methodologies.</p>
            </div>
          </div>

           {/* Card 2 */}
          <div className="flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
             <div className="size-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100 shadow-sm group-hover:bg-orange-100 transition-colors">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
             </div>
             <div>
                <h3 className="font-bold text-lg text-[#111318]">BA English Literature</h3>
                <p className="text-sm text-primary font-medium mb-1">University of Indonesia</p>
                <p className="text-xs text-[#616f89] uppercase tracking-wide mb-3 font-semibold">Magna Cum Laude</p>
                <p className="text-sm text-[#616f89]">Focus on post-colonial literature and advanced grammar structures.</p>
             </div>
          </div>

           {/* Card 3 */}
          <div className="flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
             <div className="size-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm group-hover:bg-blue-100 transition-colors">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
             </div>
             <div>
                <h3 className="font-bold text-lg text-[#111318]">Specialized Training</h3>
                <p className="text-sm text-primary font-medium mb-1">Professional Certification</p>
                <p className="text-xs text-[#616f89] uppercase tracking-wide mb-3 font-semibold">Continuing Education</p>
                <p className="text-sm text-[#616f89]">Advanced Phonetics & Digital Pedagogy for remote learning environments.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
