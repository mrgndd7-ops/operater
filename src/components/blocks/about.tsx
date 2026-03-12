"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUp, Plus, SlidersHorizontal } from "lucide-react"
import { SpecialText } from "@/components/ui/special-text"

const CONVERSATION: { role: "user" | "assistant"; text: string }[] = [
  {
    role: "user",
    text: "What exactly is Operater?",
  },
  {
    role: "assistant",
    text: "Operater is an AI agent platform that lets you build and deploy AI agents as actual members of your team — without writing a single line of code. You define what they do, and they get to work.",
  },
  {
    role: "user",
    text: "So it replaces hiring?",
  },
  {
    role: "assistant",
    text: "Not replaces — extends. Your team stays lean. Your agents handle the execution layer: outreach, data processing, reporting, support triage. You scale output without scaling headcount.",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

  const [meetDone, setMeetDone] = useState(false)
  const [headingDone, setHeadingDone] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [completedMessages, setCompletedMessages] = useState<typeof CONVERSATION>([])
  const [typingText, setTypingText] = useState("")
  const [typingRole, setTypingRole] = useState<"user" | "assistant" | null>(null)
  const [currentIndex, setCurrentIndex] = useState(-1)

  // heading done → show subtitle after short pause
  useEffect(() => {
    if (!headingDone) return
    const t = setTimeout(() => setSubtitleVisible(true), 400)
    return () => clearTimeout(t)
  }, [headingDone])

  // subtitle visible → start chatbot after short pause
  useEffect(() => {
    if (!subtitleVisible || currentIndex !== -1) return
    const t = setTimeout(() => setCurrentIndex(0), 800)
    return () => clearTimeout(t)
  }, [subtitleVisible, currentIndex])

  useEffect(() => {
    if (currentIndex < 0 || currentIndex >= CONVERSATION.length) return

    const msg = CONVERSATION[currentIndex]
    const speed = msg.role === "user" ? 38 : 16
    const pauseAfter = msg.role === "user" ? 600 : 1100

    setTypingRole(msg.role)
    setTypingText("")

    let i = 0
    const interval = setInterval(() => {
      i++
      setTypingText(msg.text.slice(0, i))
      if (i >= msg.text.length) {
        clearInterval(interval)
        setTimeout(() => {
          setCompletedMessages((prev) => [...prev, msg])
          setTypingText("")
          setTypingRole(null)
          if (currentIndex < CONVERSATION.length - 1) {
            setTimeout(() => setCurrentIndex((prev) => prev + 1), 350)
          }
        }, pauseAfter)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [currentIndex])


  return (
    <section id="about" className="w-full bg-black py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            <span className="text-white/70">
              <SpecialText inView={true} once={true} speed={36} onComplete={() => setMeetDone(true)}>
                Meet
              </SpecialText>
            </span>
            {" "}
            <span className="text-white">
              <SpecialText inView={meetDone} once={true} speed={36} onComplete={() => setHeadingDone(true)}>
                Operater
              </SpecialText>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={subtitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.5 }}
            className="text-white/50 mt-4 text-base max-w-xl mx-auto"
          >
            An AI agent platform built for teams that move fast.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#111]">
            <div className="size-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span
                className="text-[11px] text-black font-black tracking-tight"
                style={{ fontFamily: "var(--font-garet), sans-serif" }}
              >
                op
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none mb-1">Operater</p>
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-green-400 inline-block" />
                <p className="text-xs text-white/40">Active</p>
              </div>
            </div>
            {/* decorative dots */}
            <div className="ml-auto flex gap-1.5">
              <span className="size-3 rounded-full bg-white/10" />
              <span className="size-3 rounded-full bg-white/10" />
              <span className="size-3 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-5 min-h-[280px] flex flex-col justify-end overflow-hidden">
            {completedMessages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                {msg.role === "assistant" && (
                  <div className="size-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[9px] text-black font-black" style={{ fontFamily: "var(--font-garet), sans-serif" }}>op</span>
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-white text-black rounded-tr-sm"
                      : "bg-white/[0.07] border border-white/10 text-white/90 rounded-tl-sm"
                  )}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {typingRole && (
              <div className={cn("flex gap-3", typingRole === "user" ? "justify-end" : "justify-start")}>
                {typingRole === "assistant" && (
                  <div className="size-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[9px] text-black font-black" style={{ fontFamily: "var(--font-garet), sans-serif" }}>op</span>
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    typingRole === "user"
                      ? "bg-white text-black rounded-tr-sm"
                      : "bg-white/[0.07] border border-white/10 text-white/90 rounded-tl-sm"
                  )}
                >
                  {typingText.length === 0 && typingRole === "assistant" ? (
                    <span className="flex gap-1 items-center h-4">
                      <span className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0ms]" />
                      <span className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:150ms]" />
                      <span className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:300ms]" />
                    </span>
                  ) : (
                    <>
                      {typingText}
                      <span className="inline-block w-0.5 h-[14px] bg-current ml-0.5 animate-pulse align-middle opacity-60" />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Decorative input bar (Claude style) */}
          <div className="bg-[#30302E] border-t border-zinc-700/60 mx-4 mb-4 rounded-xl overflow-hidden">
            <div className="px-4 py-3 min-h-[52px] flex items-center">
              <span className="text-sm text-zinc-500">Ask Operater anything...</span>
            </div>
            <div className="flex items-center justify-between px-3 pb-2">
              <div className="flex gap-2">
                <div className="size-8 rounded-md flex items-center justify-center text-zinc-600">
                  <Plus className="size-4" />
                </div>
                <div className="size-8 rounded-md flex items-center justify-center text-zinc-600">
                  <SlidersHorizontal className="size-4" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-600">Claude Sonnet 4</span>
                <div className="size-8 rounded-md bg-zinc-700 flex items-center justify-center">
                  <ArrowUp className="size-4 text-zinc-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
