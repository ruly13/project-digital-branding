
export default function ExperienceSection() {


  return (

    <section id="experience" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
           <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Professional Journey</h2>
           <p className="text-[#616f89] text-center mt-2 max-w-2xl">A track record of excellence in education</p>
        </div>
        
        <div className="max-w-3xl mx-auto w-full">
           <div className="grid grid-cols-[60px_1fr] gap-x-4">
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-1 pt-2">
                 <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10">
                    <span className="text-xl">🏛️</span>
                 </div>
                 <div className="w-[2px] bg-[#e5e7eb] h-full grow min-h-[80px]"></div>
              </div>
              <div className="flex flex-col pb-10 pt-2">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-[#111318] text-xl font-bold">University Lecturer</h3>
                    <span className="text-primary font-medium text-sm bg-primary/5 px-2 py-1 rounded">2018 - 2020</span>
                 </div>
                 <p className="text-[#111318] text-sm font-medium mb-1">Tokyo, Japan</p>
                 <p className="text-[#616f89] text-base leading-relaxed">
                    Developed curriculum for over 200 undergraduate students focusing on Academic English and Critical Thinking. Organized cross-cultural exchange events.
                 </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center gap-1">
                 <div className="w-[2px] bg-[#e5e7eb] h-full grow min-h-[20px]"></div>
                 <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10 my-1">
                    <span className="text-xl">💼</span>
                 </div>
                 <div className="w-[2px] bg-[#e5e7eb] h-full grow min-h-[80px]"></div>
              </div>
              <div className="flex flex-col pb-10 pt-2">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-[#111318] text-xl font-bold">Corporate Trainer</h3>
                    <span className="text-primary font-medium text-sm bg-primary/5 px-2 py-1 rounded">2020 - 2022</span>
                 </div>
                 <p className="text-[#111318] text-sm font-medium mb-1">Berlin, Germany</p>
                 <p className="text-[#616f89] text-base leading-relaxed">
                    Led intensive Business English workshops for automotive executives. Focused on negotiation skills, presentation delivery, and technical vocabulary.
                 </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center gap-1">
                 <div className="w-[2px] bg-[#e5e7eb] h-full grow min-h-[20px]"></div>
                 <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10 my-1">
                    <span className="text-xl">💻</span>
                 </div>
              </div>
              <div className="flex flex-col pb-4 pt-2">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-[#111318] text-xl font-bold">Online Language Coach</h3>
                    <span className="text-primary font-medium text-sm bg-primary/5 px-2 py-1 rounded">2022 - Present</span>
                 </div>
                 <p className="text-[#111318] text-sm font-medium mb-1">Remote / Worldwide</p>
                 <p className="text-[#616f89] text-base leading-relaxed">
                    Founder of Global English. Coaching professionals from 15+ countries. Utilizing digital tools to provide immersive, flexible learning experiences.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
