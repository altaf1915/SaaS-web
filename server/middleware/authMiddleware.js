const jwt = require("jsonwebtoken")

const User = require("../models/User")

const protect = async (req, res, next) => {
  try {
    let token = req.cookies?.saasly_token

    // Optional Bearer token support
    if (
      !token &&
      req.headers.authorization?.startsWith(
        "Bearer "
      )
    ) {
      token =
        req.headers.authorization.split(" ")[1]
    }

    // No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      })
    }

    // JWT secret must exist
    if (!process.env.JWT_SECRET) {
      console.error(
        "JWT_SECRET is not configured."
      )

      return res.status(500).json({
        success: false,
        message:
          "Authentication configuration error.",
      })
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    if (!decoded?.userId) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid authentication token.",
      })
    }

    // Find user
    const user = await User.findById(
      decoded.userId
    )

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      })
    }

    // Attach authenticated user
    req.user = user

    next()
  } catch (error) {
    console.error(
      "Authentication error:",
      error.message
    )

    return res.status(401).json({
      success: false,
      message:
        "Invalid or expired authentication token.",
    })
  }
}

module.exports = protect