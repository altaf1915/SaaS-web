const express = require("express")

const {
  getTeamMembers,
  addTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController")

const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

router.use(authMiddleware)

router.get("/", getTeamMembers)

router.post("/", addTeamMember)

router.delete(
  "/:id",
  deleteTeamMember
)

module.exports = router