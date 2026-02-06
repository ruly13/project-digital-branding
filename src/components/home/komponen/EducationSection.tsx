
import { getEducation } from "../../../services/educationServ";
export default function EducationSection() {
  const education = getEducation();


  return (

    <section id="education" className="py-12 md:py-24 bg-white scroll-mt-24 relative ">
       {/* Background decoration removed as per reference code which uses clean white */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">Educational Background</h2>
          <p className="text-[#616f89] mt-2 max-w-2xl mx-auto">Academic foundations and continuous professional development.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="w-full md:max-w-sm flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shadow-sm group-hover:bg-primary/10 transition-colors">
                   <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#111318]">{edu.role}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{edu.company}</p>
                  <p className="text-xs text-[#616f89] uppercase tracking-wide mb-3 font-semibold">{edu.period}</p>
                  <p className="text-sm text-[#616f89]">{edu.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
