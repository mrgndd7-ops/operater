import { Header } from "@/components/ui/header-2"
import { Hero } from "@/components/blocks/hero"
import { AboutSection } from "@/components/blocks/about"
import { HowItWorksSection } from "@/components/blocks/how-it-works"
import { AISolutionsSection } from "@/components/blocks/ai-solutions"
import { IntegrationsSection } from "@/components/blocks/integrations"
import { WaitlistHero } from "@/components/ui/waitlist-hero"
import { Footer } from "@/components/blocks/footer"
import React from "react"

const partners = [
  { src: "/logo-nvidia.png", alt: "NVIDIA Inception Program", scale: 1.8 },
  { src: "/logo-google-startups-v2.png", alt: "Google for Startups", scale: 4.2, multiply: true },
  { src: "/logo-cloudflare.png", alt: "Cloudflare" },
  { src: "/logo-plugandplay.png", alt: "Plug and Play", invert: true },
]

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero
        badge="Early access for launch"
        title=""
        titleNode={
          <>
            <span className="block font-light text-white/70 whitespace-nowrap">Scaling a startup does not always</span>
            <span className="block font-light text-white/70 whitespace-nowrap">mean hiring{" "}<span className="font-bold text-white">new people</span></span>
          </>
        }
        subtitle="The easiest way to build, use, and add AI agents to your team."
        actions={[
          { label: "Join Waitlist", href: "#waitlist", variant: "default" },
        ]}
        partnersTitle="Backed by top names in AI"
        partners={partners}
        titleClassName="font-light"
      />
      <AboutSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <AISolutionsSection />
      <WaitlistHero />
      <Footer />
    </div>
  )
}
