import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
  projectType: string[];
}

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
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px 20px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #667eea; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; }
          .value { padding: 10px; background: #f9f9f9; border-left: 3px solid #667eea; margin-top: 5px; }
          .project-types { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
          .tag { background: #667eea; color: white; padding: 6px 14px; border-radius: 20px; font-size: 13px; display: inline-block; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">🎯 Project Types</div>
              <div class="project-types">
                ${projectType.map(type => `<span class="tag">${type}</span>`).join('')}
              </div>
            </div>
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Zenvoa Technologies contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Zenvoa Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_TO || 'zenvoatechnologies@gmail.com',
      subject: `New Contact: ${name} - ${projectType[0]}`,
      html: emailHtml,
      replyTo: email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
