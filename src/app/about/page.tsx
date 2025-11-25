'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutCards() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bioCards = [
    {
      title: "From Curiosity to Code",
      content: "People have always called me tech-savvy, but my real journey into development started when my mom bought me my first computer before high school. What began as tinkering with hardware evolved into something deeper when I built my first static website using HTML and CSS—just out of curiosity to see if I could make something from scratch. That curiosity led me to Arduino programming for a research project, where I learned how code translates into physical action through robotics. Now, as a Computer Science student at Central Philippine University, I'm focused on full-stack web and mobile development, combining both my software skills and hardware intuition to build complete solutions across platforms."
    },
    {
      title: "Building Technology That Works for Everyone",
      content: "My approach to development centers on one principle: technology should be accessible to everyone, not just the tech-savvy. I've seen older family members and non-technical users struggle with poorly designed interfaces, and that drives me to prioritize clarity and usability in everything I build. I work primarily with Node.js, integrating TypeScript and Tailwind CSS for clean, maintainable code on the frontend, while leveraging databases like Firebase, Microsoft SQL, and LiteDB on the backend. For mobile development, I use Flutter with Dart to create cross-platform applications. I'm comfortable across the stack—from C# and Python to building responsive interfaces—but I'm always pushing myself to develop stronger critical thinking skills and tackle more complex architectural challenges."
    },
    {
      title: "Beyond the Screen",
      content: "When I'm not coding for academic projects or exploring new frameworks, you'll find me listening to everything from indie pop to alternative rock—the kind of music that lives outside the mainstream but occasionally breaks through. I also spend time reading articles about current issues and social topics, staying informed about what's happening in the world even when the news is challenging. These habits—discovering new sounds and staying connected to real-world problems—keep me grounded and remind me that the technology I build should serve people navigating complex, evolving realities.",
      footer: "Building full-stack web and mobile applications for academic projects and continuously learning to bridge the gap between elegant code and real-world usability."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bioCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bioCards.length) % bioCards.length);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-center text-white">
            About <span className="text-gradient">Me</span>
          </h2>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-2xl shadow-2xl shadow-cyan-500/50 overflow-hidden relative">
              <Image
                src="/personal/rdprof.webp"
                alt="Profile Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio Carousel */}
          <div className="relative mb-16 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bioCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="card bg-slate-800 p-8 rounded-2xl shadow-lg min-h-[420px] flex flex-col">
                      <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{card.title}</h3>
                      <p className="text-slate-300 leading-relaxed flex-grow">
                        {card.content}
                      </p>
                      {card.footer && (
                        <p className="text-slate-400 italic pt-4 border-t border-slate-700 mt-4">
                          <strong>Currently:</strong> {card.footer}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {bioCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Education & Interests Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white">Libertad National High School</h4>
                  <p className="text-slate-300">Surallah, South Cotabato</p>
                  <p className="text-slate-400">STEM Senior High School (2021 - 2023)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Central Philippine University</h4>
                  <p className="text-slate-300">Jaro, Iloilo City</p>
                  <p className="text-slate-400">Bachelor of Science in Computer Science (2023 - Present)</p>
                </div>
              </div>
            </div>

            <div className="card bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Interests</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💻</span>
                  <span className="text-slate-300">Full-stack web and mobile development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🛠️</span>
                  <span className="text-slate-300">Hardware integration and embedded systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎵</span>
                  <span className="text-slate-300">Indie pop and alternative rock music lover</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📰</span>
                  <span className="text-slate-300">Reading about current issues and social topics</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}