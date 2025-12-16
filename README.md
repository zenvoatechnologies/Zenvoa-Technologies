# Zenvoa Technologies

A modern web application built with Next.js (frontend) and Express (backend).

## Project Structure

```
Zenvoa-Technologies/
├── frontend/          # Next.js application
├── backend/           # Express API server
└── README.md          # This file
```

## Getting Started

### Frontend (Next.js)

The frontend is built with Next.js 16, React 19, and Tailwind CSS.

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Backend (Express)

The backend is an Express API server with MongoDB integration.

```bash
cd backend
npm install
npm run dev
```

The backend API will be available at [http://localhost:5000](http://localhost:5000)

**Available Scripts:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

## Development Workflow

1. **Start Backend First:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser to [http://localhost:3000](http://localhost:3000)

## Environment Variables

### Frontend
Create a `.env.local` file in the `frontend` directory with necessary environment variables.

### Backend
Create a `.env` file in the `backend` directory with:
- `MONGO_URI` - MongoDB connection string
- `RESEND_API_KEY` - Resend API key for email service
- Other required environment variables

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **UI Components:** Radix UI

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (Mongoose)
- **Email:** Resend
- **Validation:** Zod
- **Language:** TypeScript

## Deployment

- **Frontend:** Deploy to Vercel (recommended for Next.js)
- **Backend:** Deploy to your preferred Node.js hosting service

## License

MIT
