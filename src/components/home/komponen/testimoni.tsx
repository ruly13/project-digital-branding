"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    role: "Student",
    author: "Nazhifa",
    details: "9th grade - MTSN Kota Madiun",
    quote: "I have been taking English lessons with Miss Eva since I was in 5th grade, and now I am in 9th grade and still learning with her. Miss Eva teaches many materials such as Grammar, Reading, Listening, and Speaking. My favorite part is Speaking because Miss Eva is very good at speaking English, so I learn a lot of new vocabulary from her. She is very patient and always motivates me to be confident when speaking English. She always tells me not to be shy and not to be afraid of making mistakes. Miss Eva often makes games related to the lesson we are learning that day. Because of that, the lessons are easier to understand and more interesting. She also gives role-play projects or speaking practice based on the topic we study. So, I not only learn the theory but also practice speaking directly. I am happy to learn English with Miss Eva because she makes learning fun and helps me become more confident in speaking English."
  },
  {
    id: 2,
    role: "Parent",
    author: "Ibu Ima",
    details: "A house wife - Magetan",
    quote: "My child has been taking English class with Miss Eva since Elementary 6th grade, at that time to prepare for graduation from elementary school and to enter junior high school. Now my child is in 8th grade and still learning with Miss Eva. Miss Eva teaches the lessons patiently and helps a lot whenever my child has school assignments or projects. She also encourages her students to speak in English during the lessons. This helps train and improve their confidence in speaking. I am grateful for Miss Eva’s guidance because she supports my child not only in understanding the material but also in building confidence in using English."
  },
  {
    id: 3,
    role: "Neighborhood",
    author: "Ibu Candra",
    details: "A house wife - Magetan",
    quote: "I am a housewife and I run a small shop. I have known Miss Eva for a long time. She is known as a creative and dedicated English teacher. Miss Eva often invites mothers and teenagers in our neighborhood to join English learning activities. The purpose is to increase knowledge and empower women in our community. She teaches us to practice speaking English in simple and easy ways, using daily topics that are easy to understand. Because of that, we feel more confident and motivated to learn. We are thankful to have Miss Eva in our community because she cares about education and encourages women to keep learning."
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 relative scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">What People Say</h2>
          <p className="text-[#616f89] mt-3 max-w-2xl mx-auto">Hear from students, parents, and the community about their experience learning with Miss Eva.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-6 text-primary">
                {/* 5 Stars Rating */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              
              <blockquote className="text-[#3b4758] italic mb-8 flex-grow leading-relaxed">
                &quot;{testimonial.quote.split('\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    {index !== testimonial.quote.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}&quot;
              </blockquote>
              
              <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#111318]">{testimonial.author}</h4>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide my-0.5">{testimonial.role}</p>
                  <p className="text-sm text-[#616f89]">{testimonial.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}