"use client"

import React from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"

const GhostMascot = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path
      d="M32 8C20.954 8 12 16.954 12 28v20l6-4 6 4 6-4 6 4 6-4 6 4V28C48 16.954 39.046 8 32 8z"
      fill="white"
      fillOpacity="0.95"
    />
    <circle cx="24" cy="28" r="3" fill="#111" />
    <circle cx="40" cy="28" r="3" fill="#111" />
    <circle cx="25" cy="27" r="1" fill="white" />
    <circle cx="41" cy="27" r="1" fill="white" />
  </svg>
)

const socials = [
  {
    label: "X / Twitter",
    href: "https://x.com/operater_ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/operater",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/operater_ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@operater_ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
]

const links: Record<string, { label: string; href: string }[]> = {
  Pages: [
    { label: "About", href: "#about" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Integrations", href: "#integrations" },
    { label: "Capabilities", href: "#capabilities" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer
      className="w-full bg-black border-t border-white/[0.06] overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-0">
        {/* Top section */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start pb-16">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-7 h-7 rounded-lg bg-[#111] ring-1 ring-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <GhostMascot />
              </div>
              <span
                className="text-sm font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-garet), sans-serif" }}
              >
                operater
              </span>
            </a>
            <p className="text-xs text-white/30 mt-1">
              © {new Date().getFullYear()} Operater. All rights reserved.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] ring-1 ring-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-10 md:flex md:gap-16">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4">
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group flex items-center gap-1 text-sm text-white/40 hover:text-white transition-colors duration-200"
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <ChevronRightIcon className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large brand text */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none pb-16"
        aria-hidden
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <p
          className="text-center font-bold leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontFamily: "var(--font-garet), sans-serif",
            fontSize: "clamp(100px, 22vw, 360px)",
            color: "rgba(255,255,255,0.09)",
          }}
        >
          Operater
        </p>
      </div>
    </footer>
  )
}
