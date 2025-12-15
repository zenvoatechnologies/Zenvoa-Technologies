import { Request, Response } from 'express';
import Contact from '../models/Contact';
import { contactSchema } from '../utils/validation';
import { sendContactEmail } from '../utils/email';

export const createContact = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);

    // Save to database
    const contact = await Contact.create(validatedData);

    // Send email notification
    try {
      await sendContactEmail(validatedData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Contact creation error:', error);

    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: Object.values(error.errors).map((err: any) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }

    // Generic error
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};

export const getAllContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
};
