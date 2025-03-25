# Email Setup for Contact Form

## Overview

The contact form on this website is set up to send emails to support@sammm.in. The form is fully functional, but you need to set up your email credentials to make it work.

## Current Implementation

The current implementation uses Nodemailer to send emails. The necessary library is already installed:

- `nodemailer` (version 6.10.0)

## How to Set Up Email Sending

### Step 1: Choose an Email Provider

You can use any email provider that supports SMTP, such as:
- Gmail
- Outlook/Office 365
- Yahoo Mail
- Your hosting provider's email service

### Step 2: Get Your SMTP Credentials

For Gmail:
1. Make sure you have 2-Step Verification enabled for your Google account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new app password for "Mail" and "Other (Custom name)"
4. Copy the generated password

For other providers:
1. Find the SMTP settings in your email provider's documentation
2. Note down the host, port, and whether it requires SSL/TLS
3. Make sure you have your email and password ready

### Step 3: Update Environment Variables

1. Open the `.env.local` file at the root of your project
2. Replace the placeholder values with your actual credentials:

```
# Nodemailer configuration
EMAIL_HOST=smtp.gmail.com  # replace with your provider's SMTP server
EMAIL_PORT=587             # common ports are 587 (TLS) or 465 (SSL)
EMAIL_SECURE=false         # set to 'true' for port 465
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Step 4: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit it
4. Check if the email is received at support@sammm.in

## Troubleshooting

If emails are not being sent:

1. Check the console logs for any error messages
2. Verify your email credentials
3. Make sure your email provider allows sending from applications/scripts
4. If using Gmail:
   - Confirm you're using an App Password, not your regular password
   - Check if "Less secure app access" needs to be enabled (for older accounts)
5. If still having issues, try a different email provider

## Common SMTP Settings

### Gmail
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### Outlook.com / Office 365
```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### Yahoo Mail
```
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

## Production Deployment

When deploying to production:

1. Make sure to add the environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Never commit your `.env.local` file to version control
3. Consider using a professional transactional email service like SendGrid, Mailgun, or Amazon SES for production use