import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Homework Buddy",
  description: "How Homework Buddy protects your privacy and manages your data.",
  robots: "index, follow",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-border space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. What We Collect</h2>
            <p className="mb-3">We collect only what we need:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Questions you ask (to give answers)</li>
              <li>Quiz answers (to show progress)</li>
              <li>Lessons you read (to track learning)</li>
              <li>Browser information (to make things work)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To explain homework and generate answers</li>
              <li>To show learning progress</li>
              <li>To make the platform better</li>
              <li>To keep your account safe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. What We Do NOT Do</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>We do NOT sell your data</li>
              <li>We do NOT share data with others</li>
              <li>We do NOT use data for ads</li>
              <li>We do NOT keep data longer than needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How We Protect Your Data</h2>
            <p className="mb-3">We use:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Encryption to protect data</li>
              <li>Secure servers</li>
              <li>Regular security checks</li>
              <li>Limited access to information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>See what data we have about you</li>
              <li>Ask us to delete your data</li>
              <li>Ask us to fix wrong information</li>
              <li>Stop us from using your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p>
              We use cookies to remember your preferences. You can turn off cookies in your browser. This may make some
              features not work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
            <p>We may update this policy. We'll tell you if something important changes. Keep checking for updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p>
              Questions about privacy?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
