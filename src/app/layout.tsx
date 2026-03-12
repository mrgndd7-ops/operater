import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Operater — AI Agents for Your Team",
  description:
    "The easiest way to build, use, and add AI agents to your team. Scaling doesn't mean hiring new people.",
  openGraph: {
    title: "Operater — AI Agents for Your Team",
    description: "Scaling doesn't mean hiring new people.",
    siteName: "Operater",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=garet@400,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} font-poppins bg-black text-white antialiased`}
        style={{ "--font-garet": "'Garet'" } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
