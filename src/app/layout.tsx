import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=garet@400,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} font-poppins bg-black text-white antialiased overflow-x-hidden`}
        style={{ "--font-garet": "'Garet'" } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
