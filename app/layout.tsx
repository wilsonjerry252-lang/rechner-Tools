import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Homework Buddy - Smart Homework Helper for Kids",
  description:
    "Get simple explanations for any homework question. AI-powered homework helper for ages 10-15 with step-by-step solutions and mini lessons.",
  keywords:
    "homework help, homework solver, math help, science explained, homework for kids, school help, learning platform",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Homework Buddy - Smart Homework Helper for Kids",
    description: "Simple explanations for homework. Get answers in minutes, not hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homework Buddy",
    description: "The smart way to understand homework",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#5B9BD5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
