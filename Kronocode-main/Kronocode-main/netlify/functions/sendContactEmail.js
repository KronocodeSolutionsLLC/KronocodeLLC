const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, phone, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "redihire2025@gmail.com",
      pass: "bzra nlmb ufso cgvy", // App password (safe way)
    },
  });

  const mailOptions = {
    from: email,
    to: "redihirecore@redihire.com",
    subject: `New Contact: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};
