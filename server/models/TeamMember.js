const mongoose = require("mongoose")

const teamMemberSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: [true, "Member name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Member email is required"],
      trim: true,
      lowercase: true,
    },

    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },

    status: {
      type: String,
      enum: ["active", "pending"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
)

teamMemberSchema.index(
  { owner: 1, email: 1 },
  { unique: true }
)

module.exports = mongoose.model(
  "TeamMember",
  teamMemberSchema
)