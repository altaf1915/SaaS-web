const mongoose = require("mongoose")

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      minlength: 3,
      maxlength: 150,
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model(
  "ContactMessage",
  contactMessageSchema
)