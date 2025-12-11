import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParentModeClient from "@/components/parent-mode-client"

export const metadata: Metadata = {
  title: "Parent Mode - Monitor Your Child's Learning",
  description:
    "Parent dashboard to monitor your child's progress, learning reports, and activity tracking on Homework Buddy.",
  robots: "index, follow",
}

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="flex-1">
        <ParentModeClient />
      </main>
      <Footer />
    </div>
  )
}
