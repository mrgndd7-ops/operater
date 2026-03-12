'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
  invert?: boolean;
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [slotWidth, setSlotWidth] = useState(0);

    useEffect(() => {
      const update = () => {
        if (trackRef.current) setSlotWidth(trackRef.current.offsetWidth);
      };
      update();
      const observer = new ResizeObserver(update);
      if (trackRef.current) observer.observe(trackRef.current);
      return () => observer.disconnect();
    }, []);

    const durationMap = { normal: '12s', slow: '20s', fast: '7s' };
    const duration = durationMap[speed];

    // duplicated for seamless loop
    const items = [...logos, ...logos];
    const totalWidth = slotWidth * items.length;

    return (
      <>
        <style>{`
          @keyframes marquee-single {
            from { transform: translateX(0px); }
            to { transform: translateX(-${slotWidth * logos.length}px); }
          }
        `}</style>

        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'w-full bg-[#0a0a0a] text-white rounded-lg border border-white/10 overflow-hidden mx-auto max-w-6xl my-0',
            className
          )}
          {...props}
        >
          {/* Header */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b border-white/10">
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight text-white text-balance"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {title}
              </h2>
              {description && (
                <p className="text-[#D9D9D9] text-sm self-start lg:justify-self-end text-balance">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Marquee track */}
          <div ref={trackRef} className="relative w-full overflow-hidden pb-8">
            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {slotWidth > 0 && (
              <div
                className="flex"
                style={{
                  width: `${totalWidth}px`,
                  animation: `marquee-single ${duration} linear infinite`,
                }}
              >
                {items.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-24 flex-shrink-0"
                    style={{ width: `${slotWidth}px` }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={cn(
                        'h-12 w-auto max-w-[50%] object-contain',
                        logo.invert && 'brightness-0 invert opacity-70'
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';
export { MarqueeLogoScroller };
