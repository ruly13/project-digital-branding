
export default function ExpertiseSection() {
  const expertise = [
    {
      title: "Computer Literacy",
      description: "Proficient in office applications and digital learning tools",
      icon: "💻"
    },
    {
      title: "Communication Skill",
      description: "Expert in public relations and professional correspondence.",
      icon: "🗣️"
    },
    {
      title: "Office Practice",
      description: "Skilled in administration, scheduling, and office management.",
      icon: "💼"
    },
    {
      title: "Teaching All Ages",
      description: "Extensive experience teaching from kids to adult students.",
      icon: "👨‍🏫"
    }
  ];

  return (

    <section id="expertise" className="py-24 bg-[#f8fafc] scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
         <div className="bg-[#f8fafc] rounded-2xl p-8 md:p-12 border border-[#f0f2f4]">
            <div className="text-center mb-10">
              <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">Expertise</h2>
              <p className="text-[#616f89] mt-2 max-w-2xl mx-auto">
                Teaching is my passion. I love sharing knowledges, not only English knowledges but also all things relate to something to improve life values.
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
