const express = require("express")

const {
  register,
  login,
  getMe,
  updateProfile,
  logout,
} = require("../controllers/authController")

const authMiddleware = require("../middleware/authMiddleware")

const {
  loginLimiter,
  registerLimiter,
} = require("../middleware/rateLimiters")

const router = express.Router()

// Guest authentication
router.post(
  "/register",
  registerLimiter,
  register
)

router.post(
  "/login",
  loginLimiter,
  login
)

// Current authenticated user
router.get(
  "/me",
  authMiddleware,
  getMe
)

// Update authenticated user's profile
router.put(
  "/profile",
  authMiddleware,
  updateProfile
)

// Logout
router.post(
  "/logout",
  logout
)

module.exports = router