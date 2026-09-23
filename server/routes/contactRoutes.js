const express = require("express")

const {
  createContactMessage,
} = require("../controllers/contactController")

const {
  contactLimiter,
} = require("../middleware/rateLimiters")

const router = express.Router()

router.post(
  "/",
  contactLimiter,
  createContactMessage
)

module.exports = router