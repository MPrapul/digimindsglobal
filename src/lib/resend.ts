/**
 * Mock Resend email client for the static site version
 * This file simulates the Resend functionality without actually sending emails
 */

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

// Mock Resend client
export const resend = {
  emails: {
    send: async (data: EmailData) => {
      console.log('[Mock Resend] Email would be sent with:', data);
      
      // Simulate successful email sending
      return {
        data: { 
          id: `mock-email-${Date.now()}`, 
          from: data.from,
          to: data.to,
          subject: data.subject 
        },
        error: null
      };
    }
  }
};

/**
 * Send a confirmation email to a contact form submitter
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
  console.log(`[Mock] Sending contact confirmation email to ${name} <${email}>`);
  
  // In a static site, we just return a success response without sending an actual email
  return {
    success: true,
    error: null
  };
}

/**
 * Send a welcome email to a newsletter subscriber
 */
export async function sendNewsletterWelcomeEmail({
  email
}: {
  email: string;
}) {
  console.log(`[Mock] Sending newsletter welcome email to ${email}`);
  
  // In a static site, we just return a success response without sending an actual email
  return {
    success: true,
    error: null
  };
} 