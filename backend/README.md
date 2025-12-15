# Zenvoa Technologies Backend API

Backend service for handling contact form submissions with MongoDB storage and Resend email notifications.

## Features

- ✅ Contact form submission handling
- ✅ MongoDB database storage
- ✅ Email notifications via Resend
- ✅ Input validation with Zod
- ✅ Rate limiting to prevent spam
- ✅ CORS enabled for frontend
- ✅ TypeScript support

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@zenvoatechnologies.com
EMAIL_TO=zenvoatechnologies@gmail.com

FRONTEND_URL=http://localhost:3000

RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW_MS=900000
```

### 3. Get API Keys

**MongoDB:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string

**Resend:**
1. Go to [Resend](https://resend.com)
2. Sign up for free account
3. Get your API key from dashboard

### 4. Run Development Server

```bash
npm run dev
```

Server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Submit a contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services",
  "projectType": ["Website", "Mobile App"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us!",
  "data": {
    "id": "...",
    "createdAt": "..."
  }
}
```

### GET /api/contact
Get all contact submissions (for admin)

## Production Deployment

### Option 1: Railway
1. Push code to GitHub
2. Connect Railway to your repo
3. Add environment variables
4. Deploy

### Option 2: Render
1. Create new Web Service
2. Connect your repo
3. Add environment variables
4. Deploy

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in dashboard

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts              # MongoDB connection
│   ├── models/
│   │   └── Contact.ts         # Contact model
│   ├── routes/
│   │   └── contact.ts         # Contact routes
│   ├── controllers/
│   │   └── contactController.ts
│   ├── middleware/
│   │   ├── errorHandler.ts
│   │   └── rateLimiter.ts
│   ├── utils/
│   │   ├── email.ts
│   │   └── validation.ts
│   └── server.ts              # Express app
├── package.json
├── tsconfig.json
└── .env
```

## Tech Stack

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Resend** - Email service
- **Zod** - Validation
- **TypeScript** - Type safety
