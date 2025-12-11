import { generateText } from "ai"
import { NextResponse } from "next/server"

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export async function POST(request: Request) {
  try {
    const { subject, difficulty, numQuestions } = await request.json()

    if (!subject || !difficulty) {
      return NextResponse.json({ error: "Subject and difficulty are required" }, { status: 400 })
    }

    const difficultyDescriptions: Record<string, string> = {
      easy: "suitable for grades 4-5, simple concepts",
      medium: "suitable for grades 6-7, intermediate concepts",
      hard: "suitable for grades 8+, advanced concepts",
    }

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `Generate ${numQuestions} multiple-choice questions for ${subject} at ${difficultyDescriptions[difficulty]} level. Each question should be appropriate for kids ages 10-15.

Return ONLY a valid JSON array with this exact structure (no markdown, no extra text):
[
  {
    "question": "Question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0,
    "explanation": "Why this answer is correct, in simple language for kids"
  }
]

The "correct" field is the index (0-3) of the correct answer in the options array.
Make sure explanations are kid-friendly and easy to understand.`,
    })

    const parsed = JSON.parse(text)
    return NextResponse.json({ questions: parsed })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to generate quiz. Please try again." }, { status: 500 })
  }
}
