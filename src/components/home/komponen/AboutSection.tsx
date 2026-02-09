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

    return (
        <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-20">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Image Slider */}
                    <div className="relative group flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[3/4]">
                            {/* Decorative frame/backdrop */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl rotate-2 opacity-70 group-hover:rotate-1 transition-transform duration-500"></div>
                            
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                {images.map((img, index) => (
                                    <Image
                                        key={img}
                                        src={img}
                                        alt={`Profile Eva Lastiani ${index + 1}`}
                                        fill
                                        className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
                                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                ))}
                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
            
                    {/* Right Column: Content */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                About Me
                            </h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                                <p>
                                    I am a passionate and dedicated English teacher with <span className="font-semibold text-slate-900">15 years of experience</span> teaching diverse learners across various age groups and proficiency levels.
                                </p>
                                <p>
                                    Skilled in designing engaging lesson plans, integrating technology into the classroom, and fostering a positive learning environment. Committed to helping students develop strong reading, writing, speaking, and critical thinking skills in English.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
