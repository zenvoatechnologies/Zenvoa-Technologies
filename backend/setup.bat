@echo off
echo 🚀 Zenvoa Technologies Backend Setup
echo ====================================
echo.

REM Check if .env exists
if not exist .env (
    echo ⚠️  .env file not found!
    echo 📝 Creating .env from .env.example...
    copy .env.example .env
    echo ✅ .env file created
    echo.
    echo 🔧 Please edit .env and add your:
    echo    - MongoDB connection string (MONGODB_URI^)
    echo    - Resend API key (RESEND_API_KEY^)
    echo.
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ .env file found
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ npm install failed
    echo 💡 Try: npm install --legacy-peer-deps
    pause
    exit /b 1
)

echo ✅ Dependencies installed
echo.

REM Start dev server
echo 🚀 Starting development server...
call npm run dev
