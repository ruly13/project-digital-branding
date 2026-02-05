
export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div>
               <h2 className="text-[#111318] text-4xl font-bold leading-tight tracking-[-0.015em] mb-6">Get in Touch</h2>
               <p className="text-[#616f89] text-lg mb-12">
                  Ready to take your English to the next level? Book a consultation or send me a message.
               </p>

               <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                        <i className="material-symbols-outlined text-2xl">chat</i>
                     </div>
                     <div>
                        <p className="font-bold text-[#111318]">WhatsApp</p>
                        <p className="text-sm text-[#616f89]">+44 7000 123456</p>
                     </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                        <i className="material-symbols-outlined text-2xl">work</i>
                     </div>
                     <div>
                        <p className="font-bold text-[#111318]">LinkedIn</p>
                        <p className="text-sm text-[#616f89]">Connect professionally</p>
                     </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="size-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-100 transition-colors">
                        <i className="material-symbols-outlined text-2xl">mail</i>
                     </div>
                     <div>
                        <p className="font-bold text-[#111318]">Email</p>
                        <p className="text-sm text-[#616f89]">hello@globalenglish.com</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-8 rounded-2xl border border-[#e5e7eb] shadow-sm bg-white">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-[#111318] mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-[#dbdfe6] text-[#111318] placeholder:text-[#616f89]/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-[#111318] mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-[#dbdfe6] text-[#111318] placeholder:text-[#616f89]/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-[#111318] mb-2">Message</label>
                        <textarea 
                            id="message" 
                            rows={4}
                            placeholder="Tell me about your learning goals..."
                            className="w-full px-4 py-3 rounded-lg bg-white border border-[#dbdfe6] text-[#111318] placeholder:text-[#616f89]/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full py-3 px-6 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:translate-y-[-1px] shadow-md hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
