# Vercel Backend Deployment - Quick Guide

## 🚀 Deploy Backend to Vercel

### Step 1: Prepare Environment Variables

Before deploying, you need these environment variables in Vercel:

```env
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_string
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-email@gmail.com
CORS_ORIGIN=https://zenvoa-technologies.vercel.app
```

### Step 2: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster (if you haven't already)
3. Go to **Network Access** → Add IP Address → **Allow from Anywhere** (`0.0.0.0/0`)
4. Go to **Database Access** → Add Database User
5. Copy your connection string and replace `<password>` with your actual password

### Step 3: Gmail App Password

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Copy the 16-character password (use this for `SMTP_PASS`)

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. **Root Directory**: Select `backend`
4. **Framework Preset**: Other
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`
7. **Install Command**: `npm install`
8. Click **Deploy**

#### Option B: Via Vercel CLI

```bash
cd backend
npm install -g vercel
vercel login
vercel --prod
```

### Step 5: Add Environment Variables

In Vercel Dashboard:
1. Go to your backend project
2. Settings → Environment Variables
3. Add all the variables from Step 1
4. Redeploy the project

### Step 6: Update Frontend

After backend is deployed, copy the backend URL (e.g., `https://your-backend.vercel.app`)

Update frontend environment variable:
1. Go to frontend project in Vercel
2. Settings → Environment Variables
3. Update `NEXT_PUBLIC_API_URL` to your backend URL
4. Redeploy frontend

## ✅ Testing

Test your backend:
```bash
curl https://your-backend.vercel.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-12-17T...",
  "mongodb": "connected"
}
```

## 🐛 Troubleshooting

### Error: "FUNCTION_INVOCATION_FAILED"
- Check Vercel logs for detailed error
- Verify all environment variables are set
- Check MongoDB connection string is correct

### Error: "Cannot connect to MongoDB"
- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check database user credentials
- Verify connection string format

### Error: "CORS error"
- Update `CORS_ORIGIN` to match your frontend URL
- Redeploy backend after updating

## 📊 Monitor Deployment

- **Vercel Dashboard**: View logs and metrics
- **MongoDB Atlas**: Monitor database connections
- **Email**: Test contact form to verify email sending

---

**Need help?** Check the main `DEPLOYMENT.md` for more details!
