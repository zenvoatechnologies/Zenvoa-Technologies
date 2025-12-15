import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { sendContactEmail } from '@/lib/email';
import dbConnect from '@/lib/db';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // Connect to database
    await dbConnect();

    // Save to database
    const contact = await Contact.create(validatedData);

    // Send email notification
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      // Still return success since data was saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        data: {
          id: contact._id,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error.name === 'MongoError' || error.name === 'ValidationError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Database error. Please try again.',
        },
        { status: 500 }
      );
    }

    // Generic error
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}
