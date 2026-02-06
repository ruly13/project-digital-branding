"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    "/img/foto utama 4/slider1.jpg",
    "/img/foto utama 4/slider2.jpeg",
    "/img/foto utama 4/slider3.jpeg"
];

export default function AboutSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const stats = [
        { icon: "🎓", label: "Certified TEFL", sub: "Level 5 Diploma" },
        { icon: "💼", label: "Business Expert", sub: "Corporate Trainer" },
        { icon: "✅", label: "1000+ Hrs", sub: "Teaching Exp" },
    ];

  return (

    <section id="about" className="py-12 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[#f0f2f4] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4 flex justify-center md:justify-start">
                    <div className="w-full max-w-[300px] aspect-[3/4] rounded-xl shadow-lg relative overflow-hidden">
                        {images.map((img, index) => (
                            <Image
                                key={img}
                                src={img}
                                alt={`Profile Eva Lastiani ${index + 1}`}
                                fill
                                className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
                                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                                priority={index === 0} // Load gambar pertama secepat mungkin
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        ))}
                    </div>
                </div>
            
                <div className="md:col-span-8 flex flex-col justify-center gap-6">
                    <div>
                        <h3 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">My Philosophy</h3>
                        <h2 className="text-3xl font-bold text-[#111318] mb-4">About Me</h2>
                        <div className="text-[#616f89] text-lg leading-relaxed mb-4">
                           Eva is an educator. She loves sharing knowledge, not only english knowledge but also anything that increase live values. She loves meeting new people, challenges herlself to try something new. Always levels up and scale up, and experiences herself in different ways    </div>
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
