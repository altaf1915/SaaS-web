const ContactMessage = require("../models/ContactMessage")

const createContactMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body

    // Validate required fields
    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, subject and message are required.",
      })
    }

    // Validate email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      })
    }

    // Validate lengths
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters.",
      })
    }

    if (subject.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message:
          "Subject must be at least 3 characters.",
      })
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message:
          "Message must be at least 10 characters.",
      })
    }

    const contactMessage =
      await ContactMessage.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
      })

    return res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully.",
      data: {
        id: contactMessage._id,
      },
    })
  } catch (error) {
    console.error(
      "Contact message error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your message. Please try again.",
    })
  }
}

module.exports = {
  createContactMessage,
}