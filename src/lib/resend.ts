/**
 * Mock Resend email client for the static site version
 * This file simulates the Resend functionality without actually sending emails
 */

import { Resend } from 'resend';

// Initialize Resend with API key - only used server-side
export const resend = new Resend(process.env.RESEND_API_KEY || 're_M8jZjVBG_XYzgDvhc4dfirCfd8gTsRTk6');
const fromEmail = 'info@digimindsglobal.tech';

interface EmailData {
  from: string;
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  cc?: string | string[];
  bcc?: string | string[];
  reply_to?: string;
}

/**
 * Send a confirmation email to a contact form submitter
 * This function is meant to be called from a server environment only
 */
export async function sendContactConfirmationEmail({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Send notification to admin - Internal Alert Email
    await resend.emails.send({
      from: fromEmail,
      to: 'info@digimindsglobal.tech',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #FF4500; height: 8px; width: 100%;"></div>
          <div style="padding: 20px;">
            <h2 style="color: #0176D3; text-transform: uppercase; font-weight: bold;">NEW CONTACT FORM SUBMISSION</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Submitted At:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="margin-bottom: 10px;">Message:</h3>
              <p style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            
            <p style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #0176D3; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">
                Follow Up Now
              </a>
            </p>
            
            <p style="color: #777; font-size: 12px; text-align: center; margin-top: 30px;">
              This is an automated message
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to user - Visitor Confirmation Email
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for contacting DigiMindsGlobal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Branded Header -->
          <div style="background-color: #0176D3; padding: 20px; text-align: center;">
            <img src="https://digimindsglobal.tech/Digimindglobal-removebg-preview.png" alt="DigiMindsGlobal" style="height: 60px;" />
          </div>
          <div style="border-bottom: 1px solid #e0e0e0; box-shadow: 0px 2px 5px rgba(0,0,0,0.05);"></div>

          <!-- Friendly Greeting -->
          <div style="padding: 30px 20px;">
            <h1 style="font-size: 28px; font-weight: bold; color: #0176D3; margin-bottom: 20px;">
              Thanks for reaching out, ${name}!
            </h1>

            <!-- Intro Copy -->
            <p style="font-size: 16px; line-height: 1.5; color: #444; margin-bottom: 30px;">
              We've received your message and can't wait to learn more about your needs.
              In the meantime, why not see how we help businesses like yours?
            </p>

            <!-- Highlighted Message Box -->
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
              <p style="font-style: italic; color: #555; margin: 0;">
                "${message}"
              </p>
            </div>

            <!-- Primary CTA Button -->
            <div style="text-align: center; margin-bottom: 25px;">
              <a href="https://digimindsglobal.tech/services" 
                 style="display: inline-block; background-color: #1589EE; color: white; 
                        text-decoration: none; padding: 14px 28px; font-weight: bold; 
                        font-size: 16px; border-radius: 50px; width: 60%; max-width: 300px;">
                Explore Our Services
              </a>
            </div>

            <!-- Secondary Text -->
            <p style="font-size: 14px; color: #666; text-align: center; margin-bottom: 30px;">
              Or simply reply to this email if you have any questions.
            </p>

            <!-- Footer -->
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
              <p style="font-size: 12px; color: #888;">
                The DigiMinds Global Team | info@digimindsglobal.tech | +91-6304647593
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      error: null
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Send a welcome email to a newsletter subscriber
 * This function is meant to be called from a server environment only
 */
export async function sendNewsletterWelcomeEmail({
  email
}: {
  email: string;
}) {
  try {
    // Send notification to admin
    await resend.emails.send({
      from: fromEmail,
      to: 'info@digimindsglobal.tech',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #FF4500; height: 8px; width: 100%;"></div>
          <div style="padding: 20px;">
            <h2 style="color: #0176D3; text-transform: uppercase; font-weight: bold;">NEW NEWSLETTER SUBSCRIPTION</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Submitted At:</td>
                <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            
            <p style="margin-top: 30px; text-align: center;">
              <a href="#" style="display: inline-block; background-color: #0176D3; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">
                View Subscriber List
              </a>
            </p>
            
            <p style="color: #777; font-size: 12px; text-align: center; margin-top: 30px;">
              This is an automated message
            </p>
          </div>
        </div>
      `,
    });

    // Send welcome email to subscriber
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to DigiMindsGlobal Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Branded Header -->
          <div style="background-color: #0176D3; padding: 20px; text-align: center;">
            <img src="https://digimindsglobal.tech/Digimindglobal-removebg-preview.png" alt="DigiMindsGlobal" style="height: 60px;" />
          </div>
          <div style="border-bottom: 1px solid #e0e0e0; box-shadow: 0px 2px 5px rgba(0,0,0,0.05);"></div>

          <div style="padding: 30px 20px;">
            <h1 style="font-size: 28px; font-weight: bold; color: #0176D3; margin-bottom: 20px;">
              Welcome to the DigiMindsGlobal Newsletter!
            </h1>

            <p style="font-size: 16px; line-height: 1.5; color: #444; margin-bottom: 30px;">
              Thank you for subscribing to our newsletter. You'll now receive updates on our latest services, 
              industry insights, and exclusive offers directly to your inbox.
            </p>

            <!-- Primary CTA Button -->
            <div style="text-align: center; margin-bottom: 25px;">
              <a href="https://digimindsglobal.tech/services" 
                 style="display: inline-block; background-color: #1589EE; color: white; 
                        text-decoration: none; padding: 14px 28px; font-weight: bold; 
                        font-size: 16px; border-radius: 50px; width: 60%; max-width: 300px;">
                Explore Our Services
              </a>
            </div>

            <p style="font-size: 14px; color: #666; text-align: center; margin-bottom: 30px;">
              If you have any questions, feel free to contact us at info@digimindsglobal.tech.
            </p>

            <!-- Footer -->
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
              <p style="font-size: 12px; color: #888;">
                The DigiMinds Global Team | info@digimindsglobal.tech | +91-6304647593
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      error: null
    };
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
} 