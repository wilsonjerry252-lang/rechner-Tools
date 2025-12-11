import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Disclaimer - Homework Buddy",
  description: "Important disclaimer about Homework Buddy and how to use it responsibly.",
  robots: "index, follow",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Disclaimer</h1>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-border space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">Educational Use Only</h2>
            <p>
              Homework Buddy is an educational tool. It helps you understand homework. It should not be used to cheat.
              Using it to cheat is against school rules. Your teacher wants you to learn, not just get answers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Accuracy</h2>
            <p>
              Homework Buddy uses AI to give answers. AI sometimes makes mistakes. Always check answers with your
              teacher. Don't depend on Homework Buddy for important exams. Use it for learning and practice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Not a Replacement for School</h2>
            <p>
              Homework Buddy helps with understanding. But it's not a replacement for school. Go to class. Pay
              attention. Do your work. Homework Buddy is extra help, not the main teacher.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Parent Supervision</h2>
            <p>
              Parents, please check that your child is using Homework Buddy the right way. Make sure they're learning,
              not cheating. Talk about what they're learning. Use it together.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">School Rules</h2>
            <p>
              Schools have rules about homework help. Check your school's rules before using Homework Buddy. Your
              teacher should know you're using it. Be honest about where your answers come from.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Guarantee</h2>
            <p>
              We try to give correct answers. But we don't guarantee they're always right. Check with your teacher. Ask
              questions. Be curious. That's real learning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Safe Use</h2>
            <p>
              Homework Buddy is for learning homework. Don't use it for anything bad. Don't try to break it. Don't use
              fake information. Be respectful. Keep it safe for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Remember</h2>
            <p>
              Homework Buddy is a helper, not a shortcut. Real learning comes from thinking, trying, and sometimes
              failing. Use Homework Buddy to help you learn better.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
