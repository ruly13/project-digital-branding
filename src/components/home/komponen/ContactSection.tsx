"use client";


export default function ContactSection() {

  return (
    <section id="contact" className="py-12 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div>
               <h2 className="text-[#111318] text-4xl font-bold leading-tight tracking-[-0.015em] mb-6">contact me</h2>
              

               <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                        <i className="material-symbols-outlined text-2xl">chat</i>
                     </div>
                     <div>
                        <p className="font-bold text-[#111318]">WhatsApp</p>
                        <p className="text-sm text-[#616f89]">+62 812-3456-7890</p>
                     </div>
                  </div>


                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="size-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 transition-colors">
                        <i className="material-symbols-outlined text-2xl">mail</i>
                     </div>
                     <div>
                        <p className="font-bold text-[#111318]">Email</p>
                        <p className="text-sm text-[#616f89]">missevalastiani@gmail.com</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column - References */}
            <div className="p-8 rounded-2xl border border-[#e5e7eb] shadow-sm bg-white">
                <h3 className="text-2xl font-bold text-[#111318] mb-6">References</h3>
                <div className="space-y-6">
                    {/* Reference 1 */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                M
                            </div>
                            <div>
                                <p className="font-bold text-[#111318] text-lg">Mariani</p>
                                <p className="text-sm font-medium text-blue-600 mb-1">Director of PT. HARMA Surabaya</p>
                                <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                                    <span className="material-symbols-outlined text-base">call</span>
                                    <span>+62 811-300-395</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reference 2 */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-start gap-4">
                            <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                R
                            </div>
                            <div>
                                <p className="font-bold text-[#111318] text-lg">Risna Inayah</p>
                                <p className="text-sm font-medium text-green-600 mb-1">Director of ENGLISHONE Madiun</p>
                                <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                                    <span className="material-symbols-outlined text-base">call</span>
                                    <span>+62 852-3365-6262</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
