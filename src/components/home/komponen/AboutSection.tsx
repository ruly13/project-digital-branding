
export default function AboutSection() {
    const stats = [
        { icon: "🎓", label: "Certified TEFL", sub: "Level 5 Diploma" },
        { icon: "💼", label: "Business Expert", sub: "Corporate Trainer" },
        { icon: "✅", label: "1000+ Hrs", sub: "Teaching Exp" },
    ];

  return (

    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[#f0f2f4] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4 flex justify-center md:justify-start">
                    <div 
                        className="w-full max-w-[300px] aspect-[3/4] rounded-xl bg-cover bg-center shadow-lg"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIoAxyrsDbAQUeVwUhc_QXMMet_wiJCKtL5RVLbRgXsuKTxAuDe-Vaj-sQGUr_NywB2xQJsYgvtKhriNOoOLzgclvPBiTEr3uCzPJLMR1fGdSaM9QOwj7SvKRN8lP7HTFAMccHl-veH-pa55_fSlWX94beYjY7GV9Wvr5tRl-R0NOmUMwV-_PJlT97G5hiq9orTs3ftChcQx4_u2Y2kMTlJqH8scov_STmrnjn5q6sU6EP0nBdlPMUbnvZ7XQ7WrlLR8kmZ_sRdzw")`
                        }}
                    >
                    </div>
                </div>
            
                <div className="md:col-span-8 flex flex-col justify-center gap-6">
                    <div>
                        <h3 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">My Philosophy</h3>
                        <h2 className="text-3xl font-bold text-[#111318] mb-4">About Me</h2>
                        <div className="text-[#616f89] text-lg leading-relaxed mb-4">
                            I specialize in <strong>Communicative Language Teaching</strong>, helping students build confidence and fluency through real-world scenarios. My approach is tailored to your unique goals, whether it&apos;s business negotiation, academic writing, or casual conversation.
                        </div>
                        <p className="text-[#616f89] text-base leading-relaxed">
                            With over 8 years of experience teaching across 3 continents, I bring a culturally sensitive and adaptive teaching style to every lesson.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#f0f2f4]/50 border border-[#f0f2f4]">
                                <div className="text-primary bg-white p-2 rounded-full shadow-sm flex items-center justify-center text-xl">
                                    {stat.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-[#111318]">{stat.label}</span>
                                    <span className="text-xs text-[#616f89]">{stat.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
