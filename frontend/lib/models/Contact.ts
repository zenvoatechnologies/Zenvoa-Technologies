import mongoose from 'mongoose';

export interface IContact extends mongoose.Document {
  name: string;
  email: string;
  message: string;
  projectType: string[];
  createdAt: Date;
  status: 'new' | 'read' | 'replied';
}

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [1000, 'Message cannot be more than 1000 characters'],
  },
  projectType: {
    type: [String],
    required: [true, 'At least one project type is required'],
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
