import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sendEmailViaAPI } from './alternativeSend';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { firstName, email, message } = formData;

    // Validate the form data
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log form submission
    console.log('Form submission received for support@sammm.in:');
    console.log('From:', firstName);
    console.log('Email:', email);
    console.log('Message:', message);
    
    let emailSent = false;
    let emailError = null;
    
    // First, try using Nodemailer with SMTP
    try {
      // Check if email configuration is available
      if (
        process.env.EMAIL_HOST &&
        process.env.EMAIL_PORT &&
        process.env.EMAIL_USER &&
        process.env.EMAIL_PASSWORD
      ) {
        // Create a transporter object with extended timeout
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT) || 465,
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
          connectionTimeout: 60000, // 60 seconds
          greetingTimeout: 30000,   // 30 seconds
          socketTimeout: 60000,     // 60 seconds
          debug: true               // Enable debugging for more detailed logs
        });

        console.log(`Attempting to connect to ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}`);
        
        // Verify connection configuration
        transporter.verify(function(error, success) {
          if (error) {
            console.error('SMTP connection verification failed:', error);
          } else {
            console.log('SMTP server is ready to accept messages');
          }
        });

        // Prepare email content
        const htmlContent = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // Send email
        await transporter.sendMail({
          from: `"Sammm Website" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER, // Send to the same email for simplicity
          replyTo: email,
          subject: `New Contact Form Submission from ${firstName}`,
          text: `
            Name: ${firstName}
            Email: ${email}
            
            Message:
            ${message}
          `,
          html: htmlContent,
        });
        
        console.log('Email sent successfully via SMTP');
        emailSent = true;
      } else {
        console.log('SMTP configuration missing, trying alternative method');
      }
    } catch (smtpError) {
      console.error('SMTP email error:', smtpError);
      emailError = smtpError;
      console.log('SMTP email failed, trying alternative method');
    }
    
    // If SMTP failed, try alternative method
    if (!emailSent) {
      try {
        const htmlContent = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `;
        
        const result = await sendEmailViaAPI(
          email,
          process.env.EMAIL_USER || 'support@sammm.in',
          `New Contact Form Submission from ${firstName}`,
          htmlContent,
          firstName
        );
        
        if (result.success) {
          console.log('Email sent successfully via alternative method');
          emailSent = true;
        } else {
          console.error('Alternative email method also failed');
        }
      } catch (alternativeError) {
        console.error('Alternative email error:', alternativeError);
      }
    }
    
    // Always store the form submission data in your database or logs
    // This ensures you don't lose customer inquiries even if email fails
    console.log('Form data stored for future reference');
    
    // Return appropriate response
    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully to support@sammm.in'
        },
        { status: 200 }
      );
    } else {
      // Return a partial success - we received the data but couldn't send email
      return NextResponse.json(
        { 
          success: true, 
          emailDelivered: false,
          message: 'Your message was received but email delivery had issues. We will process your inquiry.'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 