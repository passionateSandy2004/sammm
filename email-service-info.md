# Email Service Implementation Guide

## Overview
This document provides guidance on how to implement actual email sending functionality for the contact form in a production environment.

## Required Dependencies
To implement email sending functionality, you'll need to install one of the following packages:

```bash
# Using Nodemailer (general email sending solution)
npm install nodemailer

# OR using SendGrid (a popular email service)
npm install @sendgrid/mail
```

## Implementation with Nodemailer

```typescript
// In app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, email, message } = formData;

    // Validate form data
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create a transporter (configure with your email service details)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASSWORD, // your email password or app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Sammm Website" <${process.env.EMAIL_USER}>`,
      to: 'support@sammm.in',
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName}`,
      text: `
        Name: ${firstName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
```

## Implementation with SendGrid

```typescript
// In app/api/contact/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, email, message } = formData;

    // Validate form data
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    // Prepare email
    const msg = {
      to: 'support@sammm.in',
      from: process.env.VERIFIED_EMAIL!, // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName}`,
      text: `
        Name: ${firstName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
```

## Environmental Variables Setup

Create or update your `.env.local` file with the following variables:

```bash
# For Nodemailer
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password-or-app-password

# OR for SendGrid
SENDGRID_API_KEY=your-sendgrid-api-key
VERIFIED_EMAIL=your-verified-sendgrid-email@example.com
```

Remember to add these environment variables to your deployment platform (Vercel, Netlify, etc.) as well.

## Security Considerations

1. **Never store sensitive credentials in your code**. Always use environment variables.
2. **Use transport security** (TLS/SSL) when connecting to email servers.
3. **Implement rate limiting** to prevent abuse of the contact form.
4. **Add CAPTCHA protection** (like reCAPTCHA) to prevent spam submissions.
5. **Sanitize user inputs** before processing them to prevent injection attacks.

## Testing

You can test your email functionality using temporary email services or by setting up a test email account specifically for development purposes. 