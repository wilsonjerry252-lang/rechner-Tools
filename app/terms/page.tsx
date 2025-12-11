import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Homework Buddy",
  description: "Terms and conditions for using Homework Buddy.",
  robots: "index, follow",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-border space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Use of Service</h2>
            <p>
              Homework Buddy is for learning only. You agree to use it honestly. You agree not to use it to cheat. You
              agree not to share answers with others. Learning is the goal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Age Requirements</h2>
            <p>
              Homework Buddy is for kids ages 10-15. Parents, please supervise younger children. Make sure your child is
              the right age before using Homework Buddy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Account Responsibility</h2>
            <p className="mb-3">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Keeping your password secret</li>
              <li>Everything done with your account</li>
              <li>Telling us if something goes wrong</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. What You Cannot Do</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Copy our content without permission</li>
              <li>Break into the website</li>
              <li>Use fake information</li>
              <li>Hurt others with the service</li>
              <li>Use it to cheat at school</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Our Responsibility</h2>
            <p className="mb-3">We try to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Give correct answers</li>
              <li>Keep the service running</li>
              <li>Protect your information</li>
              <li>Fix problems quickly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitations</h2>
            <p>
              We are not responsible for: problems at your internet provider, your computer breaking, things you do with
              the answers, or if you break school rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Suspension</h2>
            <p>We can stop your account if you break these rules. We will tell you why. You can appeal the decision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p>We may change these terms. We'll tell you about big changes. Keep reading for updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Questions?</h2>
            <p>
              Don't understand something?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Ask us
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
