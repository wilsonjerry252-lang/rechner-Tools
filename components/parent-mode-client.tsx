"use client"

import { useState } from "react"

interface AccessibilitySettings {
  largeText: boolean
  readingMode: boolean
  highContrast: boolean
  dyslexicFont: boolean
  reducedMotion: boolean
}

export default function ParentModeClient() {
  const [activeTab, setActiveTab] = useState<"overview" | "accessibility" | "tips">("overview")
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    largeText: false,
    readingMode: false,
    highContrast: false,
    dyslexicFont: false,
    reducedMotion: false,
  })

  const toggleAccessibility = (key: keyof AccessibilitySettings) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className={`${accessibility.highContrast ? "bg-black text-white" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Parent Mode</h1>
          <p className="text-lg text-muted-foreground">Monitor progress and customize learning experience</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {(["overview", "accessibility", "tips"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-muted text-foreground hover:bg-muted/80 hover-lift"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Dashboard Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-border">
                <h3 className="text-lg font-bold mb-2">Quizzes Taken</h3>
                <p className="text-4xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground mt-2">This week</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-border">
                <h3 className="text-lg font-bold mb-2">Lessons Completed</h3>
                <p className="text-4xl font-bold text-secondary">8</p>
                <p className="text-sm text-muted-foreground mt-2">This week</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-border">
                <h3 className="text-lg font-bold mb-2">Average Score</h3>
                <p className="text-4xl font-bold text-accent">85%</p>
                <p className="text-sm text-muted-foreground mt-2">This week</p>
              </div>
            </div>

            {/* Detailed Statistics */}
            <div className="bg-white rounded-2xl p-8 border-2 border-border">
              <h2 className="text-2xl font-bold mb-6">Learning Progress</h2>
              <div className="space-y-4">
                {[
                  { subject: "Math", progress: 75, color: "bg-blue-500" },
                  { subject: "Science", progress: 82, color: "bg-green-500" },
                  { subject: "English", progress: 88, color: "bg-yellow-500" },
                  { subject: "Geography", progress: 70, color: "bg-teal-500" },
                ].map((item) => (
                  <div key={item.subject}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{item.subject}</span>
                      <span className="text-sm font-bold text-primary">{item.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-8 border-2 border-border">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "Completed quiz on Fractions", time: "2 hours ago", type: "quiz" },
                  { action: "Read lesson: Photosynthesis", time: "5 hours ago", type: "lesson" },
                  { action: "Solved homework question", time: "1 day ago", type: "homework" },
                  { action: "Completed quiz on Grammar", time: "2 days ago", type: "quiz" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 pb-4 border-b border-border last:border-b-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">
                        {item.type === "quiz" ? "🎯" : item.type === "lesson" ? "📚" : "💡"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.action}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Accessibility Tab */}
        {activeTab === "accessibility" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-border space-y-6">
              <p className="text-muted-foreground">
                Customize Homework Buddy to work best for your child. These settings make learning easier and more
                comfortable.
              </p>

              {/* Large Text */}
              <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                <div>
                  <h3 className="font-bold">Large Text</h3>
                  <p className="text-sm text-muted-foreground">Make all text bigger and easier to read</p>
                </div>
                <button
                  onClick={() => toggleAccessibility("largeText")}
                  className={`w-12 h-6 rounded-full transition-all ${
                    accessibility.largeText ? "bg-primary" : "bg-muted"
                  } flex items-center ${accessibility.largeText ? "justify-end" : "justify-start"} p-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>

              {/* Reading Mode */}
              <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                <div>
                  <h3 className="font-bold">Reading Mode</h3>
                  <p className="text-sm text-muted-foreground">Simplify page layout and remove distractions</p>
                </div>
                <button
                  onClick={() => toggleAccessibility("readingMode")}
                  className={`w-12 h-6 rounded-full transition-all ${
                    accessibility.readingMode ? "bg-primary" : "bg-muted"
                  } flex items-center ${accessibility.readingMode ? "justify-end" : "justify-start"} p-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                <div>
                  <h3 className="font-bold">High Contrast</h3>
                  <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                </div>
                <button
                  onClick={() => toggleAccessibility("highContrast")}
                  className={`w-12 h-6 rounded-full transition-all ${
                    accessibility.highContrast ? "bg-primary" : "bg-muted"
                  } flex items-center ${accessibility.highContrast ? "justify-end" : "justify-start"} p-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>

              {/* Dyslexic Font */}
              <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                <div>
                  <h3 className="font-bold">Dyslexia-Friendly Font</h3>
                  <p className="text-sm text-muted-foreground">Use a special font designed for dyslexic readers</p>
                </div>
                <button
                  onClick={() => toggleAccessibility("dyslexicFont")}
                  className={`w-12 h-6 rounded-full transition-all ${
                    accessibility.dyslexicFont ? "bg-primary" : "bg-muted"
                  } flex items-center ${accessibility.dyslexicFont ? "justify-end" : "justify-start"} p-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                <div>
                  <h3 className="font-bold">Reduce Animation</h3>
                  <p className="text-sm text-muted-foreground">Reduce moving elements for better focus</p>
                </div>
                <button
                  onClick={() => toggleAccessibility("reducedMotion")}
                  className={`w-12 h-6 rounded-full transition-all ${
                    accessibility.reducedMotion ? "bg-primary" : "bg-muted"
                  } flex items-center ${accessibility.reducedMotion ? "justify-end" : "justify-start"} p-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </button>
              </div>

              <p className="text-sm text-muted-foreground p-4 bg-blue-50 rounded-lg border border-primary/20">
                Accessibility settings are saved in your browser. These settings help kids with different learning
                needs.
              </p>
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === "tips" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Start Small",
                description:
                  "Begin with short homework questions. Build confidence before moving to longer topics. Short sessions work best for kids.",
              },
              {
                title: "Mix Learning Styles",
                description:
                  "Use lessons for theory and the homework solver for practice. Kids learn best when they mix reading, practice, and quizzes.",
              },
              {
                title: "Practice Regularly",
                description:
                  "Regular practice helps memory. Just 10-15 minutes daily is better than one long session. Use practice quizzes often.",
              },
              {
                title: "Use Parent Mode",
                description:
                  "Check the progress dashboard weekly. Talk about what your child is learning. Celebrate achievements, even small ones.",
              },
              {
                title: "Make It Fun",
                description:
                  "Learning should be enjoyable. Use the quizzes as games. Reward progress. Turn homework time into positive family time.",
              },
              {
                title: "Ask Questions",
                description:
                  "Encourage your child to ask questions. The homework solver explains answers. Reading the explanations builds understanding.",
              },
            ].map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-border">
                <h3 className="text-lg font-bold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
