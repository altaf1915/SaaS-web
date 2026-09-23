const jwt = require("jsonwebtoken")

const User = require("../models/User")

const protect = async (req, res, next) => {
  try {
    let token = req.cookies?.saasly_token

    if (
      !token &&
      req.headers.authorization?.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      })
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    if (!decoded.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      })
    }

    const user = await User.findById(decoded.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    })
  }
}

module.exports = protect
