"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardData {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  mobile = false,
}: DisplayCardData & { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className={cn("relative inline-block rounded-full bg-white/10 p-1", iconClassName)}>
            {icon}
          </span>
          <p className={cn("text-base font-medium", titleClassName)}>{title}</p>
        </div>
        <p className="text-sm text-white/50 leading-snug">{description}</p>
        <p className="text-xs text-white/30">{date}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-44 w-[30rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-5 pt-1 pb-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[28rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div className="mt-4">
        <span className={cn("relative inline-block rounded-full bg-blue-800 p-1", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm leading-snug">{description}</p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardData[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardData[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-8 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 grayscale-[100%] hover:grayscale-0 transition-all duration-700",
    },
  ];

  const displayCards = cards
    ? cards.map((card, i) => ({ ...defaultCards[i % defaultCards.length], ...card }))
    : defaultCards;

  return (
    <>
      {/* Mobile: vertical list */}
      <div className="flex flex-col gap-4 md:hidden">
        {displayCards.map((card, i) => (
          <DisplayCard key={i} {...card} mobile />
        ))}
      </div>

      {/* Desktop: stacked design */}
      <div className="hidden md:flex items-center justify-center -translate-x-16">
        <div className="grid [grid-template-areas:'stack'] place-items-center">
          {displayCards.map((card, i) => (
            <DisplayCard key={i} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
