import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: import.meta.env.VITE_SMTP_HOST,
  port: Number(import.meta.env.VITE_SMTP_PORT),
  secure: true,
  auth: {
    user: import.meta.env.VITE_SMTP_USER,
    pass: import.meta.env.VITE_SMTP_PASS,
  },
});

export const sendContactNotification = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}) => {
  const mailOptions = {
    from: import.meta.env.VITE_SMTP_USER,
    to: 'abhijit.genset@gmail.com, abhijitgenset.sm@gmail.com',
    subject: `New Contact Form Submission - ${formData.service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
};