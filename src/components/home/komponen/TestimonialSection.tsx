
export default function TestimonialSection() {


  return (

    <section className="py-24 bg-[#f0f2f4] scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
         <div className="bg-[#f0f2f4] rounded-2xl p-8 md:p-12">
            <h3 className="text-center text-2xl font-bold mb-8 text-[#111318]">What My Students Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-transparent hover:border-primary/10 transition-colors">
                 <div className="flex gap-1 text-amber-400">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                 </div>
                 <div className="relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-primary/10 font-serif leading-none">&quot;</span>
                    <p className="text-[#111318] text-base italic leading-relaxed relative z-10 pl-2">
                       The tailored approach to business English helped me secure my dream role at a multinational company. Highly recommended!
                    </p>
                 </div>
                 <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                    <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                       M
                    </div>
                    <div>
                       <p className="text-sm font-bold text-[#111318]">Marco</p>
                       <p className="text-xs text-[#616f89]">Business Professional</p>
                    </div>
                    <div aria-label="Italy Flag" className="ml-auto text-2xl">🇮🇹</div>
                 </div>
              </div>

               {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-transparent hover:border-primary/10 transition-colors">
                 <div className="flex gap-1 text-amber-400">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                 </div>
                 <div className="relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-primary/10 font-serif leading-none">&quot;</span>
                    <p className="text-[#111318] text-base italic leading-relaxed relative z-10 pl-2">
                       Classes are culturally sensitive. A teacher who understands the struggles of ESL learners. My confidence has soared!
                    </p>
                 </div>
                 <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                    <div className="size-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">
                       H
                    </div>
                    <div>
                       <p className="text-sm font-bold text-[#111318]">Hana Smythe</p>
                       <p className="text-xs text-[#616f89]">ESL Learner</p>
                    </div>
                    <div aria-label="Indonesia Flag" className="ml-auto text-2xl">🇮🇩</div>
                 </div>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
}
