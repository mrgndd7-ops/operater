'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

interface CarouselSlide {
  id: number;
  content: React.ReactNode;
}

interface FramerCarouselProps {
  slides: CarouselSlide[];
}

export function FramerCarousel({ slides }: FramerCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, { type: 'spring', stiffness: 300, damping: 30 });
    }
  }, [index, x]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-2xl" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {slides.map((slide) => (
              <div key={slide.id} className="shrink-0 w-full">
                {slide.content}
              </div>
            ))}
          </motion.div>

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
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
