import { type NextRequest, NextResponse } from "next/server"

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

    // Updated Mailgun configuration for your verified domain
    const MAILGUN_API_KEY = "6a0477aa7216e83ea0e5a79650384500-0ce15100-a356565c"
    const MAILGUN_DOMAIN = "usmankhan.work"
    const MAILGUN_API_URL = `https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`

    console.log("Sending email via Mailgun EU API...")
    console.log("Domain:", MAILGUN_DOMAIN)
    console.log("API URL:", MAILGUN_API_URL)

    // Create form data for Mailgun API
    const formData = new FormData()

    // Using your verified domain
    formData.append("from", `Portfolio Contact <noreply@${MAILGUN_DOMAIN}>`)
    formData.append("to", "Muhammad Usman Khan <muk.kt199@gmail.com>")
    formData.append("subject", `New Contact: ${subject}`)
    formData.append(
      "html",
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      line-height: 1.6;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .header {
      background-color: #1a73e8;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    .header p {
      font-size: 14px;
      opacity: 0.9;
      margin: 0;
    }

    .content {
      padding: 20px;
    }

    .section-title {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 16px;
      color: #1a1a1a;
    }

    .info-row {
      margin-bottom: 12px;
    }

    .info-label {
      font-weight: bold;
      margin-right: 5px;
    }

    .message-box {
      background-color: #f9f9f9;
      border-left: 4px solid #1a73e8;
      padding: 15px;
      margin: 20px 0;
      white-space: pre-wrap;
    }

    .reply-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #1a73e8;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      margin-top: 10px;
    }

    .footer {
      background-color: #f4f4f4;
      padding: 15px 20px;
      font-size: 12px;
      color: #555;
      text-align: center;
      border-top: 1px solid #ddd;
    }

    .footer a {
      color: #1a73e8;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      .email-container {
        margin: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>You have received a new message from your website</p>
    </div>

    <div class="content">
      <div class="section-title">Contact Information</div>
      <div class="info-row"><span class="info-label">Name:</span> ${name}</div>
      <div class="info-row"><span class="info-label">Email:</span> ${email}</div>
      <div class="info-row"><span class="info-label">Subject:</span> ${subject}</div>

      <div class="section-title">Message</div>
      <div class="message-box">${message}</div>

      <a href="mailto:${email}?subject=Re: ${subject}" class="reply-button">Reply to ${name}</a>
    </div>

    <div class="footer">
      Received: ${new Date().toLocaleString()}<br>
      Portfolio: <a href="https://usmankhan.work">usmankhan.work</a>
    </div>
  </div>
</body>
</html>

    `,
    )
    formData.append(
      "text",
      `
      NEW CONTACT FORM SUBMISSION
      ===========================
      
      From: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Reply to: ${email}
      Received: ${new Date().toLocaleString()}
      Portfolio: usmankhan.work
    `,
    )

    // Add reply-to header so you can easily respond
    formData.append("h:Reply-To", email)

    // Send email using EU Mailgun API
    const response = await fetch(MAILGUN_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
      },
      body: formData,
    })


    if (!response.ok) {
      const errorText = await response.text()
      

      // Try to parse the error response
      let errorMessage = "Failed to send email"
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.message || errorMessage
      } catch {
        errorMessage = errorText || errorMessage
      }

      return NextResponse.json(
        {
          error: `Email delivery failed: ${errorMessage}`,
          details: "Please check your Mailgun configuration or try again later.",
        },
        { status: 500 },
      )
    }

    const result = await response.json()
    

    // Send auto-reply to the contact
    const autoReplyFormData = new FormData()
    autoReplyFormData.append("from", `Muhammad Usman Khan <noreply@${MAILGUN_DOMAIN}>`)
    autoReplyFormData.append("to", `${name} <${email}>`)
    autoReplyFormData.append("subject", "Vielen Dank für Ihre Nachricht!")
    autoReplyFormData.append(
      "html",
      `
  <!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vielen Dank für Ihre Nachricht</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f8fafc;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
        color: white;
        padding: 40px 30px;
        text-align: center;
      }
      .content {
        padding: 40px 30px;
      }
      .highlight {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        padding: 24px;
        border-radius: 12px;
        border-left: 4px solid #10b981;
        margin: 24px 0;
      }
      .contact-info {
        background-color: #f8fafc;
        padding: 24px;
        border-radius: 12px;
        margin: 24px 0;
      }
      .footer {
        background-color: #f8fafc;
        padding: 24px 30px;
        text-align: center;
        border-top: 1px solid #e2e8f0;
      }
      .brand-logo {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>✅ Nachricht erhalten!</h1>
        <p>Vielen Dank für Ihre Kontaktaufnahme, ${name}!</p>
      </div>
      
      <div class="content">
        <div class="highlight">
          <h3>🎯 Ihre Nachricht wurde erfolgreich übermittelt</h3>
          <p>Ich schätze es sehr, dass Sie sich die Zeit genommen haben, mich zu kontaktieren. Ich werde Ihre Nachricht prüfen und mich innerhalb von 24 Stunden bei Ihnen melden.</p>
        </div>
        
        <div class="contact-info">
          <h3>📞 Kontaktinformationen</h3>
          <p><strong>E-Mail:</strong> muk.kt199@gmail.com</p>
          <p><strong>Website:</strong> usmankhan.work</p>
          <p><strong>Standort:</strong> Frankfurt am Main, Deutschland</p>
        </div>
        
        <div class="highlight">
          <h3>🚀 Wie geht es weiter?</h3>
          <ul>
            <li>Ich werde Ihre Nachricht sorgfältig prüfen</li>
            <li>Sie erhalten innerhalb von 24 Stunden eine persönliche Antwort</li>
            <li>Bei Bedarf können wir gerne ein Gespräch vereinbaren</li>
          </ul>
        </div>
        
        <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e0e7ff 100%); padding: 24px; border-radius: 12px; text-align: center; margin: 24px 0;">
          <p style="color: #475569; margin-bottom: 8px;">Haben Sie weitere Fragen?</p>
          <p style="color: #64748b; font-size: 14px;">Zögern Sie nicht, mich direkt zu kontaktieren: <a href="mailto:muk.kt199@gmail.com" style="color: #3b82f6;">muk.kt199@gmail.com</a></p>
        </div>
      </div>
      
      <div class="footer">
        <p>Mit freundlichen Grüßen,<br><strong class="brand-logo">Muhammad Usman Khan</strong><br>Full Stack Entwickler</p>
        <p><strong>usmankhan.work</strong></p>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 16px;">
          Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
        </p>
      </div>
    </div>
  </body>
  </html>
`,
    )
    autoReplyFormData.append(
      "text",
      `
  Vielen Dank für Ihre Kontaktaufnahme!
  
  Hallo ${name},
  
  Ihre Nachricht wurde erfolgreich übermittelt. Ich schätze es sehr, dass Sie sich die Zeit genommen haben, mich zu kontaktieren.
  
  Ich werde Ihre Nachricht prüfen und mich innerhalb von 24 Stunden bei Ihnen melden.
  
  Kontaktinformationen:
  E-Mail: muk.kt199@gmail.com
  Website: usmankhan.work
  Standort: Frankfurt am Main, Deutschland
  
  Wie geht es weiter?
  - Ich werde Ihre Nachricht sorgfältig prüfen
  - Sie erhalten innerhalb von 24 Stunden eine persönliche Antwort
  - Bei Bedarf können wir gerne ein Gespräch vereinbaren
  
  Mit freundlichen Grüßen,
  Muhammad Usman Khan
  Full Stack Entwickler
  
  ---
  Diese E-Mail wurde automatisch generiert.
`,
    )

    // Send auto-reply
    const autoReplyResponse = await fetch(MAILGUN_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
      },
      body: autoReplyFormData,
    })

    if (!autoReplyResponse.ok) {
      console.warn("Auto-reply failed, but main email was sent successfully")
    }

    return NextResponse.json(
      {
        message:
          "Message sent successfully! You'll receive a confirmation email and I'll get back to you within 24 hours.",
        id: result.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again or contact me directly at muk.kt199@gmail.com",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
