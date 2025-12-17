import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import contactRoutes from './routes/contact';
import { contactRateLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Zenvoa Technologies API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      contact: '/api/contact',
      health: '/api/health',
    },
  });
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    mongodb: 'connected',
  });
});

// Contact routes with rate limiting
app.use('/api/contact', contactRateLimiter, contactRoutes);

// Error handling middleware
app.use(errorHandler);

// Export the Express app for Vercel
export default app;

// Only start server if not in serverless environment
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email service: ${process.env.SMTP_USER ? 'Configured' : 'Not configured'}`);
    console.log(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN || process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  });
}
