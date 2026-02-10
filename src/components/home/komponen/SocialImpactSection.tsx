
import Image from 'next/image';
import { getSocialImpactProjects } from "../../../services/socialImpactService";

export default function SocialImpactSection() {
  const projects = getSocialImpactProjects();

  return (
    <section className="py-24 bg-white scroll-mt-24" id="social-impact">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Section Header */}
        <div className="text-center mb-16">
           
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Projects
            </h2>
           
        </div>

        {/* Projects List */}
        <div className="space-y-16">
            {projects.map((project) => (
                <div key={project.id} className="bg-[#f0f2f4] rounded-2xl p-8 md:p-12 border border-[#e5e7eb]">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-white text-slate-600 text-xs font-bold tracking-wide uppercase mb-3 border border-slate-200">
                            Project Showcase
                        </span>
                        <h3 className="text-[#111318] text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                            {project.title}
                        </h3>
                        <p className="text-[#616f89] mt-2 text-lg font-medium">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Image Gallery - Only render if images exist */}
                    {project.images && project.images.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                            {project.images.map((src, index) => (
                                <div key={index} className={`relative rounded-xl overflow-hidden shadow-sm aspect-square ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                    <Image
                                        src={src}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-[#111318] mb-3">About the Project</h4>
                                {project.description.map((paragraph, index) => (
                                <p key={index} className="text-[#616f89] leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                                ))}
                            </div>

                            {project.learningOutcomes && project.learningOutcomes.length > 0 && (
                                <div>
                                    <h4 className="text-xl font-bold text-[#111318] mb-3">Key Learning Outcomes</h4>
                                    <ul className="list-disc list-inside space-y-2 text-[#616f89]">
                                        {project.learningOutcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-fit">
                            <h4 className="text-lg font-bold text-[#111318] mb-4 border-b pb-2">Course Modules & Objectives</h4>
                            <ul className="space-y-3">
                                {project.modules.map((module, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#616f89]">
                                        <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                                        <span>{module}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
