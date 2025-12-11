import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solve" className="hover:opacity-80 transition-opacity">
                  Homework Solver
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="hover:opacity-80 transition-opacity">
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:opacity-80 transition-opacity">
                  Practice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/lessons?subject=math" className="hover:opacity-80 transition-opacity">
                  Math Lessons
                </Link>
              </li>
              <li>
                <Link href="/lessons?subject=science" className="hover:opacity-80 transition-opacity">
                  Science Lessons
                </Link>
              </li>
              <li>
                <Link href="/lessons?subject=english" className="hover:opacity-80 transition-opacity">
                  English Lessons
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:opacity-80 transition-opacity">
                  Quiz Practice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">For Parents</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/parents" className="hover:opacity-80 transition-opacity">
                  Parent Mode
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:opacity-80 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:opacity-80 transition-opacity">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Homework Buddy. All rights reserved.</p>
          <p className="mt-2">Making homework simple for kids everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
