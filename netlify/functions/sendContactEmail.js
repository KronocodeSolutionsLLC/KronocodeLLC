const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, phone, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kronocodesolutionsllc@gmail.com",
      pass: "gqtg wibg qfso wpcd", // App password (safe way)
    },
  });

  const mailOptions = {
    from: `"KronoCode Solutions" <kronocodesolutionsllc@gmail.com>`, // Friendly sender name
    to: "pranav@kronocode.com",
    subject: `New Entry: ${subject}`,
    replyTo: email,
    text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `.trim(),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
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
