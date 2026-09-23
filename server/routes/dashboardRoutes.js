const express = require("express")

const {
  getDashboardSummary,
  getAnalytics,
} = require("../controllers/dashboardController")

const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

router.use(authMiddleware)

router.get(
  "/summary",
  getDashboardSummary
)

router.get(
  "/analytics",
  getAnalytics
)
module.exports = router