'use client';
import React, { useState } from 'react';

interface CarouselSlide {
  id: number;
  content: React.ReactNode;
}

interface FramerCarouselProps {
  slides: CarouselSlide[];
}

export function FramerCarousel({ slides }: FramerCarouselProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl" style={{ paddingBottom: '2.5rem' }}>
        {/* Track — pure CSS transition, no JS animation loop */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)',
            willChange: 'transform',
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="shrink-0 w-full">
              {slide.content}
            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 border border-white/20 ${
            index === 0 ? 'opacity-20 cursor-not-allowed bg-white/5' : 'bg-white/10 hover:bg-white/20 opacity-80'
          }`}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next */}
        <button
          disabled={index === slides.length - 1}
          onClick={() => setIndex((i) => Math.min(slides.length - 1, i + 1))}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 border border-white/20 ${
            index === slides.length - 1 ? 'opacity-20 cursor-not-allowed bg-white/5' : 'bg-white/10 hover:bg-white/20 opacity-80'
          }`}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 py-1.5 px-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
