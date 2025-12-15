import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
  projectType: string[];
}

export async function sendContactEmail({
  name,
  email,
  message,
  projectType,
}: SendContactEmailParams) {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #667eea; }
          .value { margin-top: 5px; }
          .project-types { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px; }
          .tag { background: #667eea; color: white; padding: 4px 12px; border-radius: 16px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Project Types:</div>
              <div class="project-types">
                ${projectType.map(type => `<span class="tag">${type}</span>`).join('')}
              </div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'zenvoatechnologies@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
