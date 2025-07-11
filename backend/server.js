// backend/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `📩 Portfolio Contact - ${subject}`,
    text: `New Message from ${name} (${email}) - ${subject}`,
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
      <h2 style="color: #007bff;">🚀 New Contact Message</h2>
      <p><strong><span style="color:#333;">Name:</span></strong> ${name}</p>
      <p><strong><span style="color:#333;">Email:</span></strong> ${email}</p>
      <p><strong><span style="color:#333;">Subject:</span></strong> ${subject}</p>
      <p><strong><span style="color:#333;">Message:</span></strong></p>
      <div style="background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
        <p style="margin: 0; white-space: pre-line;">${message}</p>
      </div>
      <br />
      <footer style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
        This message was sent from your portfolio website.
      </footer>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent from contact form.");
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).send("Failed to send message.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
