
import { getExperiences } from "../../../services/experienceService";

export default function ExperienceSection() {
  const experiences = getExperiences();

  return (

    <section id="experience" className="py-12 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
           <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Professional Journey</h2>
           <p className="text-[#616f89] text-center mt-2 max-w-2xl">A track record of excellence in education</p>
        </div>
        
        <div className="max-w-3xl mx-auto w-full">
           <div className="grid grid-cols-[60px_1fr] gap-x-4">
              {experiences.map((exp, index) => (
                 <div key={exp.id} className="contents">
                    <div className="relative flex flex-col items-center">
                       {/* Line connecting to previous item */}
                       {index > 0 && (
                          <div className="absolute top-0 w-[2px] bg-[#e5e7eb] h-[20px] -z-10"></div>
                       )}
                       
                       {/* Icon */}
                       <div className="size-10 rounded-full flex items-center justify-center z-10 bg-primary/10 text-primary">
                          <span className="material-symbols-outlined text-xl">
                              {exp.icon || (exp.type === 'education' ? 'school' : 'work')}
                          </span>
                       </div>

                       {/* Line connecting to next item */}
                       {index < experiences.length - 1 && (
                          <div className="absolute top-[20px] bottom-0 w-[2px] bg-[#e5e7eb] -z-10"></div>
                       )}
                    </div>

                    <div className={`flex flex-col ${index < experiences.length - 1 ? 'pb-10' : 'pb-4'} pt-2`}>
                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                          <h3 className="text-[#111318] text-xl font-bold">{exp.role}</h3>
                          <span className="text-primary font-medium text-sm bg-primary/5 px-2 py-1 rounded">{exp.period}</span>
                       </div>
                       <p className="text-[#111318] text-sm font-medium mb-1">{exp.company}</p>
                       <p className="text-[#616f89] text-base leading-relaxed">
                          {exp.description}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
