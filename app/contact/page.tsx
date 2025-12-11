import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - Homework Buddy",
  description: "Get in touch with the Homework Buddy team. We'd love to hear from you.",
  robots: "index, follow",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Send us a message anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border-2 border-border">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full p-3 rounded-lg border-2 border-border focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg border-2 border-border focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us what you think..."
                  rows={4}
                  className="w-full p-3 rounded-lg border-2 border-border focus:border-primary outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-primary/20">
              <h3 className="font-bold text-lg mb-2">Questions?</h3>
              <p className="text-muted-foreground">
                Have questions about how Homework Buddy works? Check our help section or send us a message.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-accent/20">
              <h3 className="font-bold text-lg mb-2">Report a Problem</h3>
              <p className="text-muted-foreground">
                Found a bug? An answer that's wrong? Tell us! We fix problems fast.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-2 border-secondary/20">
              <h3 className="font-bold text-lg mb-2">Suggestions</h3>
              <p className="text-muted-foreground">
                Have an idea to make Homework Buddy better? We love hearing from you!
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="font-bold text-lg mb-2">For Parents</h3>
              <p className="text-muted-foreground">
                Parents with questions about safety or features? We're here to help.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
