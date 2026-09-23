const Project = require("../models/Project")

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      owner: req.user._id,
    }).sort({
      createdAt: -1,
    })

    return res.status(200).json({
      success: true,
      data: projects,
    })
  } catch (error) {
    console.error("Get projects error:", error)

    return res.status(500).json({
      success: false,
      message: "Unable to load projects.",
    })
  }
}

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project name is required.",
      })
    }

    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message:
          "Project name must be at least 2 characters.",
      })
    }

    const project = await Project.create({
      name: name.trim(),
      description: description?.trim() || "",
      owner: req.user._id,
    })

    return res.status(201).json({
      success: true,
      message: "Project created successfully.",
      data: project,
    })
  } catch (error) {
    console.error("Create project error:", error)

    return res.status(500).json({
      success: false,
      message: "Unable to create project.",
    })
  }
}

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      owner: req.user._id,
    })

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      })
    }

    await project.deleteOne()

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    })
  } catch (error) {
    console.error("Delete project error:", error)

    return res.status(500).json({
      success: false,
      message: "Unable to delete project.",
    })
  }
}

module.exports = {
  getProjects,
  createProject,
  deleteProject,
}