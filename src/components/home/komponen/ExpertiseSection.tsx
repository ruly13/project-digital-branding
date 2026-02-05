
export default function ExpertiseSection() {
  const expertise = [
    {
      title: "Business English",
      description: "Master the art of negotiation and corporate communication. Build confidence for meetings and professional networking events.",
      icon: "💎"
    },
    {
      title: "Exam Preparation",
      description: "Comprehensive coaching for IELTS, TOEFL, and Cambridge exams. Learn strategic techniques to achieve your target band score.",
      icon: "📑"
    },
    {
      title: "Academic Writing",
      description: "Structure your thesis and research papers with precision. Enhance your academic vocabulary and formal writing style.",
      icon: "✒️"
    },
    {
      title: "International Comm.",
      description: "Navigate cross-cultural interactions effectively. Develop sensitivity and adaptability for international business environments.",
      icon: "🌍"
    }
  ];

  return (

    <section id="expertise" className="py-24 bg-[#f8fafc] scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
         <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-12 border border-[#f0f2f4]">
            <div className="text-center mb-10">
              <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">Areas of Expertise</h2>
              <p className="text-[#616f89] mt-2 max-w-2xl mx-auto">
                Focused instruction designed to help you succeed in specific professional and academic environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="size-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 border border-[#e5e7eb]">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-[#111318] text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[#616f89] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
}
