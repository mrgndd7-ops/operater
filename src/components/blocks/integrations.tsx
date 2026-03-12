"use client";

import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#111] shadow-[0_0_20px_-12px_rgba(255,255,255,0.3)]",
      className
    )}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

const NotionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94C.967 76.827 0 74.497 0 71.773V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#ffffff" fillOpacity="0.15"/>
    <path d="M61.35.227L6.017 4.313C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.894.036 68.147-.357 61.35.227zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887L41.937 48.733v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z" fill="white"/>
  </svg>
);

const GmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    <path d="M0 5.457v13.91c0 .903.732 1.635 1.636 1.635h3.82V11.73L0 5.457z" fill="#C5221F"/>
    <path d="M24 5.457v13.91a1.636 1.636 0 0 1-1.636 1.635h-3.819V11.73L24 5.457z" fill="#C5221F"/>
    <path d="M12 9.548L5.455 4.64 3.927 3.493C2.309 2.28 0 3.434 0 5.457l12 9.09 12-9.09c0-2.023-2.309-3.178-3.927-1.964L18.545 4.64 12 9.548z" fill="#FBBC04"/>
    <path d="M0 5.457l12 9.091 12-9.091" fill="none"/>
    <path d="M5.455 11.73v9.272h13.09V11.73L12 16.64l-6.545-4.91z" fill="#34A853"/>
    <path d="M12 16.64l-6.545-4.91H0l12 9.09 12-9.09h-5.455L12 16.64z" fill="#4285F4"/>
  </svg>
);

const CanvaIcon = () => (
  <img src="/logo-canva.png" alt="Canva" className="size-7 rounded-lg" />
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.299z" fill="#29B6F6"/>
  </svg>
);

const GhostIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
    <path
      d="M32 8C20.954 8 12 16.954 12 28v20l6-4 6 4 6-4 6 4 6-4 6 4V28C48 16.954 39.046 8 32 8z"
      fill="white"
      fillOpacity="0.9"
    />
    <circle cx="24" cy="28" r="3" fill="#111" />
    <circle cx="40" cy="28" r="3" fill="#111" />
    <circle cx="25" cy="27" r="1" fill="white" />
    <circle cx="41" cy="27" r="1" fill="white" />
  </svg>
);

export function IntegrationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const left1Ref = useRef<HTMLDivElement>(null);
  const left2Ref = useRef<HTMLDivElement>(null);
  const left3Ref = useRef<HTMLDivElement>(null);
  const left4Ref = useRef<HTMLDivElement>(null);
  const right1Ref = useRef<HTMLDivElement>(null);
  const right2Ref = useRef<HTMLDivElement>(null);
  const right3Ref = useRef<HTMLDivElement>(null);
  const right4Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="integrations" className="w-full bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          <span className="font-light text-white/70">Fits into how you</span>{" "}
          <span className="font-bold text-white">already work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.1 }}
          className="text-white/50 text-center text-base sm:text-lg max-w-2xl leading-relaxed mt-4 -mb-4"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Operater connects directly to the tools your team already uses, giving AI agents the access they need to understand your workflows and execute work autonomously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="relative flex h-[420px] w-full items-center justify-center"
          >
            <div className="flex size-full items-center justify-between px-8">
              {/* Left column */}
              <div className="flex flex-col items-center gap-6">
                <span className="text-white/20 text-lg leading-none">···</span>
                <Circle ref={left1Ref}>
                  <NotionIcon />
                </Circle>
                <Circle ref={left2Ref}>
                  <TelegramIcon />
                </Circle>
                <Circle ref={left3Ref}>
                  <img src="/logo-gmail.png" alt="Gmail" className="size-7" />
                </Circle>
                <Circle ref={left4Ref}>
                  <CanvaIcon />
                </Circle>
                <span className="text-white/20 text-lg leading-none">···</span>
              </div>

              {/* Center ghost */}
              <Circle ref={centerRef} className="size-20 border-white/20">
                <GhostIcon />
              </Circle>

              {/* Right column */}
              <div className="flex flex-col items-center gap-6">
                <span className="text-white/20 text-lg leading-none">···</span>
                <Circle ref={right1Ref}>
                  <img src="/logo-slack.png" alt="Slack" className="size-7" />
                </Circle>
                <Circle ref={right2Ref}>
                  <img src="/logo-teams.png" alt="Microsoft Teams" className="size-7" />
                </Circle>
                <Circle ref={right3Ref}>
                  <img src="/logo-outlook.png" alt="Outlook" className="size-7" />
                </Circle>
                <Circle ref={right4Ref}>
                  <img src="/logo-aws.png" alt="AWS" className="size-7" />
                </Circle>
                <span className="text-white/20 text-lg leading-none">···</span>
              </div>
            </div>

            {/* Beams — left to center: top curves up, bottom curves down */}
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={left1Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={160} pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={0} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={left2Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={60} pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={0.5} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={left3Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={-60} pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={1} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={left4Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={-160} pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={1.5} />

            {/* Beams — right to center: top curves up, bottom curves down */}
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={right1Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={160} reverse pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={0.2} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={right2Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={60} reverse pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={0.7} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={right3Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={-60} reverse pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={1.2} />
            <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={right4Ref as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} curvature={-160} reverse pathColor="white" pathOpacity={0.07} gradientStartColor="#ffffff" gradientStopColor="#5B6CFF" delay={1.7} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
          className="-mt-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/40"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <span className="text-white/60 font-medium">50+</span> integrations supported — and growing
          </span>
        </motion.div>
      </div>
    </section>
  );
}
