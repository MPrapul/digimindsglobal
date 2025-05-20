import { NextRequest, NextResponse } from 'next/server';
import { sendContactConfirmationEmail, sendNewsletterWelcomeEmail } from '@/lib/resend';

// Helper function for CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    // Add CORS headers
    const headers = corsHeaders;

    const body = await request.json();
    const { name, email, phone, message, type } = body;

    // Form validation
    if (type === 'contact' && (!name || !email || !message)) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400, headers }
      );
    }

    if (type === 'newsletter' && !email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400, headers }
      );
    }

    let success = false;
    let error: any = null;

    if (type === 'contact') {
      const result = await sendContactConfirmationEmail({
        name,
        email,
        message
      });
      success = result.success;
      error = result.error;
    } else if (type === 'newsletter') {
      const result = await sendNewsletterWelcomeEmail({
        email
      });
      success = result.success;
      error = result.error;
    } else {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400, headers }
      );
    }

    if (!success) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error}` },
        { status: 500, headers }
      );
    }

    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error('Email API route error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500, headers: corsHeaders }
    );
  }
} 