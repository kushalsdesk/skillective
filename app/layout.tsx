import type React from "react";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "@/styles/globals.css";
import BackgroundGlow from "@/components/BackgroundGlow";

const syne = Syne({
  variable: "--font-syne",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skillective - Practice Interviews with AI",
  description:
    "Prepare for your next job interview with our AI-powered platform",
  icons: {
    icon: [{ url: "/logo.png", sizes: "200x200", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased min-h-screen`}
        style={{ background: "#09090b" }}
      >
        <BackgroundGlow />
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
