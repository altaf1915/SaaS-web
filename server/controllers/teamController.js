const TeamMember = require("../models/TeamMember")

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getTeamMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({
      owner: req.user._id,
    }).sort({
      createdAt: -1,
    })

    return res.status(200).json({
      success: true,
      data: members,
    })
  } catch (error) {
    console.error(
      "Get team members error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to load team members.",
    })
  }
}

const addTeamMember = async (req, res) => {
  try {
    const {
      name,
      email,
      role = "member",
    } = req.body

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Member name is required.",
      })
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Member email is required.",
      })
    }

    const trimmedName = name.trim()
    const normalizedEmail =
      email.trim().toLowerCase()

    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message:
          "Member name must be at least 2 characters.",
      })
    }

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a valid email address.",
      })
    }

    if (!["member", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid team role.",
      })
    }

    if (
      normalizedEmail ===
      req.user.email.toLowerCase()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "The account owner is already part of this workspace.",
      })
    }

    const existingMember =
      await TeamMember.findOne({
        owner: req.user._id,
        email: normalizedEmail,
      })

    if (existingMember) {
      return res.status(409).json({
        success: false,
        message:
          "This email is already a team member.",
      })
    }

    const member =
      await TeamMember.create({
        owner: req.user._id,
        name: trimmedName,
        email: normalizedEmail,
        role,
        status: "active",
      })

    return res.status(201).json({
      success: true,
      message: "Team member added successfully.",
      data: member,
    })
  } catch (error) {
    console.error(
      "Add team member error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to add team member.",
    })
  }
}

const deleteTeamMember = async (req, res) => {
  try {
    const member =
      await TeamMember.findOne({
        _id: req.params.id,
        owner: req.user._id,
      })

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found.",
      })
    }

    await member.deleteOne()

    return res.status(200).json({
      success: true,
      message:
        "Team member removed successfully.",
    })
  } catch (error) {
    console.error(
      "Delete team member error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to remove team member.",
    })
  }
}

module.exports = {
  getTeamMembers,
  addTeamMember,
  deleteTeamMember,
}