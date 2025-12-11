import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SolverClient from "@/components/solver-client"

export const metadata: Metadata = {
  title: "Homework Solver - Get Instant Explanations",
  description:
    "Upload a photo or type your homework question to get a simple, kid-friendly explanation with step-by-step solutions.",
  robots: "index, follow",
}

export default function SolvePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="flex-1">
        <SolverClient />
      </main>
      <Footer />
    </div>
  )
}
