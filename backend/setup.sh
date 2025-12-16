#!/bin/bash

echo "🚀 Zenvoa Technologies Backend Setup"
echo "===================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found!"
    echo "📝 Creating .env from .env.example..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "🔧 Please edit .env and add your:"
    echo "   - MongoDB connection string (MONGODB_URI)"
    echo "   - Resend API key (RESEND_API_KEY)"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "✅ .env file found"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    echo "💡 Try: npm install --legacy-peer-deps"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Start dev server
echo "🚀 Starting development server..."
npm run dev
