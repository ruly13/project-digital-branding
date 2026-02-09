"use client";

import Image from 'next/image';
import { useState } from 'react';
import { getCertifications, CertificationItem } from "../../../services/certificationService";

export default function CertificationsSection() {
    const certifications = getCertifications();
    const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

    return (
        <section id="certifications" className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-4">
                        Credentials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Certifications & Awards
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Professional qualifications and recognition of expertise in English supervision and instruction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <div 
                            key={cert.id} 
                            onClick={() => setSelectedCert(cert)}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 cursor-pointer"
                        >
                            {/* Image Placeholder / Thumbnail */}
                            <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined text-4xl">image</span>
                                </div>
                                
                                {/* Image Component (Hidden if no src, but prepared) */}
                                {/* 
                                   Note: Uncomment logic below if image paths are valid.
                                   For now, showing placeholder icon primarily.
                                */}
                                <Image 
                                    src={cert.image} 
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-0 sm:opacity-100" // Hide if dummy path is broken
                                    onError={(e) => {
                                        // Optional: Handle error by hiding image
                                        const target = e.target as HTMLImageElement;
                                        target.style.opacity = '0';
                                    }}
                                /> 
                                
                                {/* Overlay & Action */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                                        View Certificate
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                        {cert.date}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium mb-3">
                                    {cert.issuer}
                                </p>
                                <p className="text-sm text-slate-600 line-clamp-2">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center text-slate-500 text-sm">
                    * Original certificates available upon request.
                </div>
            </div>

            {/* POPUP MODAL */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedCert(null)}
                >
                    <div 
                        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                        
                        {/* Image Container */}
                        <div className="relative flex-1 bg-slate-100 min-h-[300px] md:min-h-[500px]">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-6xl">image</span>
                            </div>
                            <Image 
                                src={selectedCert.image} 
                                alt={selectedCert.title}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        
                        {/* Caption */}
                        <div className="p-6 bg-white border-t border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900">{selectedCert.title}</h3>
                            <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                                <span className="font-medium text-slate-700">{selectedCert.issuer}</span>
                                <span>•</span>
                                <span>{selectedCert.date}</span>
                            </div>
                            <p className="mt-3 text-slate-600">{selectedCert.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
