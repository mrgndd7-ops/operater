"use client"

import { motion } from "framer-motion"
import { FramerCarousel } from "@/components/ui/framer-carousel"

const Slide1 = () => (
  <div className="w-full h-[480px] bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">
    <div>
      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Step 01</span>
      <h3 className="text-2xl font-semibold text-white mt-3 mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        Choose your LLM
      </h3>
      <p className="text-white/50 text-sm max-w-md">Pick the model that fits your use case. Swap anytime.</p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[
        { name: "Claude Sonnet", badge: "Recommended", active: true },
        { name: "GPT-4o", badge: "OpenAI", active: false },
        { name: "Gemini Pro", badge: "Google", active: false },
      ].map((model) => (
        <div
          key={model.name}
          className={`relative rounded-xl p-5 border flex flex-col gap-2 transition-all ${
            model.active
              ? "border-white/60 bg-white/10"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold ${model.active ? "bg-white text-black" : "bg-white/10 text-white/60"}`}>
            {model.name[0]}
          </div>
          <p className={`text-sm font-medium ${model.active ? "text-white" : "text-white/50"}`}>{model.name}</p>
          <span className={`text-[10px] px-2 py-0.5 rounded-full w-fit ${model.active ? "bg-white text-black font-semibold" : "bg-white/10 text-white/40"}`}>
            {model.badge}
          </span>
          {model.active && (
            <div className="absolute top-3 right-3 size-2 rounded-full bg-green-400" />
          )}
        </div>
      ))}
    </div>
  </div>
)

const Slide2 = () => (
  <div className="w-full h-[480px] bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">
    <div>
      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Step 02</span>
      <h3 className="text-2xl font-semibold text-white mt-3 mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        Define identity & responsibilities
      </h3>
      <p className="text-white/50 text-sm max-w-md">Give your agent a name, a role, and a clear set of tasks to own.</p>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Agent Name</p>
          <p className="text-white font-medium">Alex</p>
        </div>
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Role</p>
          <p className="text-white font-medium">Sales Agent</p>
        </div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <p className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Responsibilities</p>
        <div className="flex flex-wrap gap-2">
          {["Qualify leads", "Draft outreach emails", "Follow up", "Update CRM", "Generate reports"].map((tag) => (
            <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Slide3 = () => (
  <div className="w-full h-[480px] bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col justify-between">
    <div>
      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Step 03</span>
      <h3 className="text-2xl font-semibold text-white mt-3 mb-2" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        Activate
      </h3>
      <p className="text-white/50 text-sm max-w-md">Your agent is now live. It works alongside your team from day one.</p>
    </div>
    <div className="flex flex-col gap-4">
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
        <div className="size-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-sm">A</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white font-semibold">Alex</p>
            <span className="text-[10px] bg-white/10 text-white/50 px-2 py-0.5 rounded-full">Sales Agent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-green-400 inline-block" />
            <p className="text-xs text-white/40">Active — working now</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/30">Tasks completed</p>
          <p className="text-2xl font-bold text-white">127</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Leads qualified", value: "48" },
          { label: "Emails sent", value: "312" },
          { label: "Hours saved", value: "94" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-[10px] text-white/40 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Slide4 = () => (
  <div className="w-full h-[480px] bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col justify-center items-center gap-4">
    <div className="size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
      <svg className="size-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <p className="text-white/30 text-sm">Coming soon</p>
  </div>
)

const slides = [
  { id: 1, content: <Slide1 /> },
  { id: 2, content: <Slide2 /> },
  { id: 3, content: <Slide3 /> },
  { id: 4, content: <Slide4 /> },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/70 text-center tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          How it <span className="font-bold text-white">works</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
        >
          <FramerCarousel slides={slides} />
        </motion.div>
      </div>
    </section>
  )
}
