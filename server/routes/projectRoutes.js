const express = require("express")

const {
  getProjects,
  createProject,
  deleteProject,
} = require("../controllers/projectController")

const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

router.use(authMiddleware)

router.get("/", getProjects)

router.post("/", createProject)

router.delete("/:id", deleteProject)

module.exports = router