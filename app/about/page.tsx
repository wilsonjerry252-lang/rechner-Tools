import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Homework Buddy - Our Mission",
  description: "Learn about Homework Buddy and how we help kids understand homework with simple explanations.",
  robots: "index, follow",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Homework Buddy</h1>
          <p className="text-lg text-muted-foreground">Making homework simple and fun for kids everywhere</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-border space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground leading-relaxed">
              Homework Buddy makes homework easier. We give simple explanations. We break problems into steps. We help
              kids understand, not just get answers. Learning should be fun, not stressful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why We Started</h2>
            <p className="text-foreground leading-relaxed">
              Many kids struggle with homework. They get confused. Parents want to help but don't always remember how to
              explain things. Teachers are busy. We created Homework Buddy to fill this gap. We wanted a friendly helper
              that kids could turn to anytime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Homework Buddy uses AI to explain homework in simple language. It's like having a tutor that understands
              how kids think. Every explanation is kid-friendly. Every step is clear. Every answer comes with a reason
              why.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Simple</h3>
                <p className="text-muted-foreground">
                  We make learning easy. No complicated words. No confusing steps.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Safe</h3>
                <p className="text-muted-foreground">
                  We care about privacy. We never share your data. Kids can learn freely.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Free</h3>
                <p className="text-muted-foreground">
                  Learning should be free. No hidden costs. No ads. Just learning.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground mb-4">Have questions? We'd love to hear from you.</p>
            <a href="/contact" className="text-primary font-semibold hover:underline">
              Send us a message
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
