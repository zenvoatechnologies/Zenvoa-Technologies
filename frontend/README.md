# Zenvoa Technologies - Frontend

Next.js application for Zenvoa Technologies website.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── lib/             # Utilities and helpers
├── public/          # Static assets
└── types/           # TypeScript type definitions
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **UI Components:** Radix UI

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root of the frontend directory with any necessary environment variables.

## Learn More

To learn more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs).
