const Project = require("../models/Project")
const TeamMember = require("../models/TeamMember")

const getDashboardSummary = async (req, res) => {
  try {
    const owner = req.user._id

    const [
      projectCount,
      activeProjectCount,
      completedProjectCount,
      archivedProjectCount,
      teamMemberCount,
    ] = await Promise.all([
      Project.countDocuments({
        owner,
      }),

      Project.countDocuments({
        owner,
        status: "active",
      }),

      Project.countDocuments({
        owner,
        status: "completed",
      }),

      Project.countDocuments({
        owner,
        status: "archived",
      }),

      TeamMember.countDocuments({
        owner,
      }),
    ])

    const recentProjects =
      await Project.find({
        owner,
      })
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select(
          "name description status createdAt"
        )

    return res.status(200).json({
      success: true,
      data: {
        projects: projectCount,
        activeProjects: activeProjectCount,
        completedProjects:
          completedProjectCount,
        archivedProjects:
          archivedProjectCount,

        teamMembers:
          teamMemberCount + 1,

        storageUsed: 0,

        recentProjects,
      },
    })
  } catch (error) {
    console.error(
      "Get dashboard summary error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to load dashboard summary.",
    })
  }
}

// Get dashboard analytics
const getAnalytics = async (req, res) => {
  try {
    const owner = req.user._id

    const [
      totalProjects,
      activeProjects,
      completedProjects,
      archivedProjects,
      totalTeamMembers,
    ] = await Promise.all([
      Project.countDocuments({
        owner,
      }),

      Project.countDocuments({
        owner,
        status: "active",
      }),

      Project.countDocuments({
        owner,
        status: "completed",
      }),

      Project.countDocuments({
        owner,
        status: "archived",
      }),

      TeamMember.countDocuments({
        owner,
      }),
    ])

    const recentProjects =
      await Project.find({
        owner,
      })
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select(
          "name description status createdAt"
        )

    return res.status(200).json({
      success: true,
      data: {
        totalProjects,
        activeProjects,
        completedProjects,
        archivedProjects,
        totalTeamMembers:
          totalTeamMembers + 1,
        recentProjects,
      },
    })
  } catch (error) {
    console.error(
      "Get analytics error:",
      error
    )

    return res.status(500).json({
      success: false,
      message:
        "Unable to load analytics.",
    })
  }
}

module.exports = {
  getDashboardSummary,
  getAnalytics,
}