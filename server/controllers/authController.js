const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

// --------------------------------------------------
// Authentication cookie helpers
// --------------------------------------------------

const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite:
    process.env.NODE_ENV === "production"
      ? "none"
      : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
})

const setAuthCookie = (res, token) => {
  res.cookie(
    "saasly_token",
    token,
    getCookieOptions()
  )
}

const clearAuthCookie = (res) => {
  res.clearCookie(
    "saasly_token",
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax",
      path: "/",
    }
  )
}

const createToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn:
        process.env.JWT_EXPIRES_IN || "7d",
    }
  )
}

// --------------------------------------------------
// Register
// --------------------------------------------------

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and password are required.",
      })
    }

    const trimmedName = name.trim()

    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters.",
      })
    }

    if (trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name cannot exceed 100 characters.",
      })
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters.",
      })
    }

    if (password.length > 128) {
      return res.status(400).json({
        success: false,
        message:
          "Password cannot exceed 128 characters.",
      })
    }

    // Normalize email
    const normalizedEmail = email
      .trim()
      .toLowerCase()

    // Check existing user
    const existingUser = await User.findOne({
      email: normalizedEmail,
    })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "An account with this email already exists.",
      })
    }

    // Hash password
    const salt = await bcrypt.genSalt(12)

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    )

    // Create user
    const user = await User.create({
      name: trimmedName,
      email: normalizedEmail,
      password: hashedPassword,
    })

    // Generate JWT
    const token = createToken(
      user._id.toString()
    )

    // Set authentication cookie
    setAuthCookie(res, token)

    return res.status(201).json({
      success: true,
      message: "Registration successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(
      "Register error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to create account.",
    })
  }
}

// --------------------------------------------------
// Login
// --------------------------------------------------

const login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required.",
      })
    }

    const normalizedEmail = email
      .trim()
      .toLowerCase()

    // Explicitly select password because the schema hides it.
    const user = await User.findOne({
      email: normalizedEmail,
    }).select("+password")

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      })
    }

    // Compare password with stored hash
    const passwordMatches =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      })
    }

    const token = createToken(
      user._id.toString()
    )

    // Set authentication cookie
    setAuthCookie(res, token)

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(
      "Login error:",
      error
    )

    return res.status(500).json({
      success: false,
      message: "Unable to login.",
    })
  }
}

// --------------------------------------------------
// Get Current User
// --------------------------------------------------

const getMe = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.userId
    )

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      })
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(
      "Get current user error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to fetch user.",
    })
  }
}

// --------------------------------------------------
// Update User Profile
// --------------------------------------------------

const updateProfile = async (req, res) => {
  try {
    const { name } = req.body

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      })
    }

    const trimmedName = name.trim()

    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message:
          "Name must be at least 2 characters.",
      })
    }

    if (trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message:
          "Name cannot exceed 100 characters.",
      })
    }

    req.user.name = trimmedName

    await req.user.save()

    return res.status(200).json({
      success: true,
      message:
        "Profile updated successfully.",
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    })
  } catch (error) {
    console.error(
      "Update profile error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to update your profile.",
    })
  }
}

// --------------------------------------------------
// Logout
// --------------------------------------------------

const logout = async (req, res) => {
  clearAuthCookie(res)

  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  })
}

// --------------------------------------------------
// Exports
// --------------------------------------------------

module.exports = {
  register,
  login,
  getMe,
  updateProfile,
  logout,
}