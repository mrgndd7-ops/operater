"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { Marquee } from "@/components/ui/marquee"

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline"
}

interface HeroPartner {
  src: string
  alt: string
  invert?: boolean
  scale?: number
  multiply?: boolean
}

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  badge?: string
  title: string
  titleLine2?: string
  titleNode?: React.ReactNode
  subtitle?: string
  actions?: HeroAction[]
  partnersTitle?: string
  partners?: HeroPartner[]
  titleClassName?: string
  subtitleClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      badge,
      title,
      titleLine2,
      titleNode,
      subtitle,
      actions,
      partnersTitle,
      partners,
      titleClassName,
      subtitleClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 pb-32 pt-0 -mt-8",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0">
          <SpiralAnimation />
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto -mt-[12vh] sm:mt-0"
        >
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
              <span className="inline-flex items-center text-xs font-medium text-black bg-white rounded-full py-0.5 px-2.5">
                New
              </span>
              <span className="text-sm font-medium text-white/90 pr-1">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight",
              titleClassName,
            )}
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {titleNode ?? (
              <>
                {title}
                {titleLine2 && (
                  <>
                    <br className="hidden sm:block" />
                    {titleLine2}
                  </>
                )}
              </>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className={cn("text-base sm:text-lg text-white/80 max-w-2xl", subtitleClassName)}>
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {actions && actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-2">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors",
                    action.variant === "outline"
                      ? "bg-black text-white/90 ring-1 ring-white/20 hover:text-white"
                      : "bg-white text-black hover:bg-white/90 font-semibold"
                  )}
                >
                  {action.label}
                  {action.variant !== "outline" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          )}
        </motion.div>

        {/* Partner logos */}
        {partners && partners.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", delay: 0.5, duration: 0.7 }}
            className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-0 px-6"
          >
            {partnersTitle && (
              <p className="text-base font-bold text-white text-center tracking-wide" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                {partnersTitle}
              </p>
            )}
            <div className="w-full max-w-6xl -mt-6">
              <Marquee duration={18} fade={true} fadeAmount={12}>
                {partners.map((partner, index) => (
                  <div key={index} className="mx-16 flex items-center justify-center">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className={cn(
                        "w-auto object-contain opacity-80",
                        partner.invert && "brightness-0 invert",
                      )}
                      style={{
                        height: partner.scale ? `${3 * partner.scale}rem` : "3rem",
                        mixBlendMode: partner.multiply ? "screen" : undefined,
                      }}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        )}
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }
