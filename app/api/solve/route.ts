import { generateText } from "ai"
import { NextResponse } from "next/server"

interface Solution {
  explanation: string
  steps: string[]
  notes: string[]
  similarQuestions: string[]
}

export async function POST(request: Request) {
  try {
    const { question } = await request.json()

    if (!question || !question.trim()) {
      return NextResponse.json({ error: "Please enter a question" }, { status: 400 })
    }

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `You are a friendly homework tutor for kids aged 10-15. Explain this homework question in very simple language that a kid can understand. Use examples and make it fun.

Question: ${question}

Provide your response in this exact JSON format:
{
  "explanation": "A simple, kid-friendly explanation (2-3 sentences)",
  "steps": ["Step 1 explanation", "Step 2 explanation", "Step 3 explanation"],
  "notes": ["Important tip 1", "Important tip 2"],
  "similarQuestions": ["Similar question 1", "Similar question 2", "Similar question 3"]
}`,
    })

    const parsed = JSON.parse(text)
    return NextResponse.json(parsed)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Oops! Something went wrong. Please try again." }, { status: 500 })
  }
}
