"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = false,
  direction = "left",
  fade = true,
  fadeAmount = 10,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);
  const items = React.Children.toArray(children);

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          animation: ${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className={cn("flex w-full overflow-hidden", className)}
        style={{
          ...(fade && {
            maskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
          }),
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        <div className={cn("marquee-track flex shrink-0 items-center", isPaused && "paused")}>
          {items}
          {items}
        </div>
      </div>
    </>
  );
}
