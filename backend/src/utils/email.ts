import nodemailer from 'nodemailer';

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
  projectType: string[];
}

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const sendContactEmail = async ({
  name,
  email,
  message,
  projectType,
}: SendEmailParams) => {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6; 
            color: #e5e7eb; 
            background: #0a0a0a; 
            margin: 0; 
            padding: 20px; 
          }
          .container { 
            max-width: 650px; 
            margin: 0 auto; 
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          }
          .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 700;
            position: relative;
            z-index: 1;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
          }
          .content { 
            padding: 35px 30px; 
          }
          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #a78bfa;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(167, 139, 250, 0.3);
          }
          .field { 
            margin-bottom: 25px; 
            background: rgba(255, 255, 255, 0.03);
            padding: 18px;
            border-radius: 10px;
            border-left: 4px solid #667eea;
          }
          .label { 
            font-weight: 600; 
            color: #a78bfa; 
            margin-bottom: 8px; 
            font-size: 13px; 
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .value { 
            color: #e5e7eb;
            font-size: 15px;
            line-height: 1.6;
          }
          .value a {
            color: #818cf8;
            text-decoration: none;
            font-weight: 500;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .project-types { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 10px; 
            margin-top: 12px; 
          }
          .tag { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 8px 16px; 
            border-radius: 20px; 
            font-size: 13px; 
            font-weight: 500;
            display: inline-block;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
          }
          .footer { 
            background: rgba(0, 0, 0, 0.3);
            padding: 25px 30px; 
            text-align: center; 
            color: #9ca3af; 
            font-size: 13px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .footer p {
            margin: 8px 0;
          }
          .cta-button {
            display: inline-block;
            margin-top: 15px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>👋 Let's talk!</h1>
            <p>New Contact Form Submission</p>
          </div>
          <div class="content">
            <div class="section-title">Contact Information</div>
            
            <div class="field">
              <div class="label">
                <span>👤</span>
                <span>Your name</span>
              </div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">
                <span>📧</span>
                <span>Email</span>
              </div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">
                <span>💬</span>
                <span>Briefly describe your project idea...</span>
              </div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">
                <span>🎯</span>
                <span>I'm looking for...</span>
              </div>
              <div class="project-types">
                ${projectType.map(type => `<span class="tag">${type}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="footer">
            <p><strong>Zenvoa Technologies</strong></p>
            <p>This email was sent from zenvoatechnologies.com contact form</p>
            <p>Reply directly to <a href="mailto:${email}" style="color: #818cf8;">${email}</a> to respond to ${name}</p>
            <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const transporter = createTransporter();
    
    const result = await transporter.sendMail({
      from: `"New Client" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'zenvoatechnologies@gmail.com',
      replyTo: email,
      subject: `New Contact: ${name} - ${projectType.join(', ')}`,
      html: emailHtml,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
