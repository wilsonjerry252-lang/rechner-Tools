import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Rechner Tools - VAT, BMI & Kreditrechner für Deutschland, Österreich & Schweiz",
  description:
    "Professionelle Online-Rechner: Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner für Deutschland, Österreich und die Schweiz. Schnell, genau und kostenlos.",
  generator: "v0.app",
  keywords:
    "Mehrwertsteuerrechner, MwSt Rechner, BMI Rechner, Kreditrechner, VAT Calculator, Deutschland, Österreich, Schweiz",
  robots: "index, follow",
  authors: [{ name: "Rechner Tools" }],
  creator: "Rechner Tools",
  publisher: "Rechner Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Rechner Tools - Professionelle Online-Rechner",
    description: "Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner für Deutschland, Österreich und die Schweiz",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rechner Tools Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rechner Tools - Professionelle Online-Rechner",
    description: "Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner für Deutschland, Österreich und die Schweiz",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
