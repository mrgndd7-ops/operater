"use client"

import { motion } from "framer-motion"
import DisplayCards from "@/components/ui/display-cards"
import { User } from "lucide-react"

export function AISolutionsSection() {
  const cards = [
    {
      icon: <User className="size-4 text-white/40" />,
      title: "01 Marketing",
      description: "AI agents autonomously plan content, manage campaigns, and execute tasks.",
      titleClassName: "text-white",
    },
    {
      icon: <User className="size-4 text-white/40" />,
      title: "02 Operations",
      description: "AI agents run coordination, follow-ups, and recurring operational work.",
      titleClassName: "text-white",
    },
    {
      icon: <User className="size-4 text-white/40" />,
      title: "03 Sales",
      description: "AI agents run outreach, follow-ups, and pipeline execution.",
      titleClassName: "text-white",
    },
  ]

  return (
    <section id="capabilities" className="w-full bg-black pt-8 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-32 -mt-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          <span className="font-bold text-white">AI</span>{" "}
          <span className="font-light text-white/70">solutions for</span>{" "}
          <span className="font-bold text-white">every team</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
          className="w-full"
        >
          <DisplayCards cards={cards} />
        </motion.div>
      </div>
    </section>
  )
}
