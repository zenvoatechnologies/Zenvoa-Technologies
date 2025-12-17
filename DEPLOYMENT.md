# Vercel Deployment Guide for Zenvoa Technologies

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **MongoDB Atlas**: Set up a MongoDB cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
4. **Email Service**: Configure SMTP credentials (Gmail, SendGrid, etc.)

---

## 🚀 Deployment Steps

### **1. Backend Deployment (Express API)**

#### A. Prepare Backend
```bash
cd backend
npm install
npm run build
```

#### B. Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Select the `backend` directory as the root
4. Framework Preset: **Other**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Install Command: `npm install`

#### C. Environment Variables (Backend)
Add these in Vercel Dashboard → Settings → Environment Variables:

```env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/zenvoa?retryWrites=true&w=majority
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

#### D. MongoDB Atlas Setup
1. Go to MongoDB Atlas → Network Access
2. Add IP Address: `0.0.0.0/0` (Allow from anywhere for Vercel)
3. Go to Database Access → Add Database User
4. Copy the connection string and add to `MONGO_URI`

---

### **2. Frontend Deployment (Next.js)**

#### A. Update API URL
Create/update `.env.local` in frontend:
```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.vercel.app
```

#### B. Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Select the `frontend` directory as the root
4. Framework Preset: **Next.js** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Install Command: `npm install`

#### C. Environment Variables (Frontend)
Add in Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.vercel.app
```

---

## 🔧 Post-Deployment Configuration

### **1. Update CORS in Backend**
After frontend is deployed, update backend environment variable:
```env
CORS_ORIGIN=https://your-actual-frontend-domain.vercel.app
```

### **2. Custom Domains (Optional)**
- Go to Vercel Dashboard → Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### **3. Update Frontend API URL**
After backend is deployed, update frontend environment variable:
```env
NEXT_PUBLIC_API_URL=https://your-actual-backend-domain.vercel.app
```

---

## 📝 Important Notes

### **Backend Considerations**
- ✅ Vercel serverless functions have a **10-second timeout** on Hobby plan
- ✅ Use **MongoDB Atlas** (not local MongoDB)
- ✅ Enable **IP Whitelist 0.0.0.0/0** in MongoDB Atlas for Vercel
- ✅ Use **environment variables** for all sensitive data

### **Frontend Considerations**
- ✅ Next.js is **fully supported** on Vercel
- ✅ Environment variables must start with `NEXT_PUBLIC_` to be accessible in browser
- ✅ Automatic **HTTPS** and **CDN** included

### **Email Configuration**
For Gmail SMTP:
1. Enable 2-Factor Authentication
2. Generate App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use App Password in `SMTP_PASS`

---

## 🧪 Testing Deployment

### **Test Backend**
```bash
curl https://your-backend-domain.vercel.app/api/health
```

### **Test Frontend**
Visit: `https://your-frontend-domain.vercel.app`

### **Test Contact Form**
1. Go to contact page
2. Submit a test message
3. Check email inbox

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- **Main branch** → Production deployment
- **Other branches** → Preview deployments

---

## 📊 Monitoring

### **Vercel Dashboard**
- View deployment logs
- Monitor function execution
- Check analytics

### **MongoDB Atlas**
- Monitor database connections
- View query performance
- Check storage usage

---

## 🐛 Troubleshooting

### **Backend Issues**

**Problem**: "Cannot connect to MongoDB"
- ✅ Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- ✅ Verify `MONGO_URI` is correct
- ✅ Check database user permissions

**Problem**: "CORS error"
- ✅ Verify `CORS_ORIGIN` matches frontend URL
- ✅ Check backend is deployed and running

**Problem**: "Email not sending"
- ✅ Verify SMTP credentials
- ✅ Check Gmail App Password is correct
- ✅ Ensure 2FA is enabled on Gmail

### **Frontend Issues**

**Problem**: "API calls failing"
- ✅ Check `NEXT_PUBLIC_API_URL` is set correctly
- ✅ Verify backend is deployed and accessible
- ✅ Check browser console for CORS errors

**Problem**: "Environment variables not working"
- ✅ Ensure variables start with `NEXT_PUBLIC_`
- ✅ Redeploy after adding environment variables
- ✅ Check Vercel Dashboard → Settings → Environment Variables

---

## 🎯 Quick Deployment Checklist

### Backend
- [ ] Create `vercel.json` configuration
- [ ] Set up MongoDB Atlas cluster
- [ ] Configure IP whitelist (0.0.0.0/0)
- [ ] Add environment variables in Vercel
- [ ] Deploy backend
- [ ] Test API endpoint
- [ ] Copy backend URL

### Frontend
- [ ] Update `NEXT_PUBLIC_API_URL` with backend URL
- [ ] Add environment variables in Vercel
- [ ] Deploy frontend
- [ ] Test website
- [ ] Copy frontend URL
- [ ] Update backend `CORS_ORIGIN` with frontend URL
- [ ] Redeploy backend

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review MongoDB Atlas logs
3. Check browser console for errors
4. Verify all environment variables are set

---

## 🎉 Success!

Once deployed, your site will be live at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.vercel.app`

Both will auto-deploy on every push to GitHub! 🚀
