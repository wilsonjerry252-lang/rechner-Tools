import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Gmail SMTP Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail credentials in environment variables")
      return NextResponse.json({ 
        error: "Email service configuration error" 
      }, { status: 500 })
    }

    // Email content
    const mailOptions = {
      from: `"Rechner Tools Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email, // Reply-to the contact form email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Rechner Tools</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #007bff;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #007bff;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background: #e3f2fd; border-radius: 5px; border-left: 4px solid #2196f3;">
              <p style="margin: 0; color: #1976d2; font-size: 14px;">
                <strong>📧 Reply directly to this email to respond to ${name}</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This email was sent from the contact form on <a href="https://rechner-tools.com" style="color: #007bff;">rechner-tools.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Rechner Tools - New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}

Message:
${message}

---
Reply directly to this email to respond to ${name}
This email was sent from the contact form on rechner-tools.com
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log("Email sent successfully:", info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId
    })

  } catch (error) {
    console.error("Error sending email:", error)
    
    return NextResponse.json({ 
      error: "Failed to send email. Please try again later." 
    }, { status: 500 })
  }
}
