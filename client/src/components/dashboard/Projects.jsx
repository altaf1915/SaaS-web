import { useEffect, useState } from "react"

import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card"
import Container from "../../components/ui/Container"

import projectService from "../../services/projectService"

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  const [formError, setFormError] = useState("")
  const [apiError, setApiError] = useState("")
  const [creating, setCreating] = useState(false)

  const [deletingId, setDeletingId] = useState(null)

  const loadProjects = async () => {
    try {
      setLoading(true)
      setApiError("")

      const response =
        await projectService.getProjects()

      setProjects(response.data || [])
    } catch (error) {
      setApiError(
        error.response?.data?.message ||
          "Unable to load projects."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setFormError("")
  }

  const handleCreate = async (event) => {
    event.preventDefault()

    const name = formData.name.trim()
    const description =
      formData.description.trim()

    if (!name) {
      setFormError("Project name is required.")
      return
    }

    if (name.length < 2) {
      setFormError(
        "Project name must be at least 2 characters."
      )
      return
    }

    try {
      setCreating(true)
      setFormError("")

      const response =
        await projectService.createProject({
          name,
          description,
        })

      setProjects((previous) => [
        response.data,
        ...previous,
      ])

      setFormData({
        name: "",
        description: "",
      })

      setShowForm(false)
    } catch (error) {
      setFormError(
        error.response?.data?.message ||
          "Unable to create project."
      )
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (projectId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    )

    if (!confirmed) {
      return
    }

    try {
      setDeletingId(projectId)

      await projectService.deleteProject(projectId)

      setProjects((previous) =>
        previous.filter(
          (project) => project._id !== projectId
        )
      )
    } catch (error) {
      setApiError(
        error.response?.data?.message ||
          "Unable to delete project."
      )
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <section className="py-8 sm:py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-600">
              Workspace
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Projects
            </h1>

            <p className="mt-2 text-slate-600">
              Create and manage your workspace projects.
            </p>
          </div>

          <Button
            onClick={() => {
              setShowForm((previous) => !previous)
              setFormError("")
            }}
          >
            {showForm ? "Close" : "+ New project"}
          </Button>
        </div>

        {/* API Error */}
        {apiError && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {apiError}
          </div>
        )}

        {/* Create Form */}
        {showForm && (
          <Card
            hover={false}
            className="mt-6"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Create a project
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a new project to your workspace.
            </p>

            <form
              onSubmit={handleCreate}
              className="mt-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Project name
                  </label>

                  <input
                    id="project-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Website redesign"
                    maxLength={100}
                    className="
                      h-11 w-full rounded-lg
                      border border-slate-200
                      bg-white px-4
                      text-sm text-slate-900
                      outline-none
                      transition
                      focus:border-brand-500
                      focus:ring-2
                      focus:ring-brand-100
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-description"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Description
                  </label>

                  <input
                    id="project-description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Project description"
                    maxLength={500}
                    className="
                      h-11 w-full rounded-lg
                      border border-slate-200
                      bg-white px-4
                      text-sm text-slate-900
                      outline-none
                      transition
                      focus:border-brand-500
                      focus:ring-2
                      focus:ring-brand-100
                    "
                  />
                </div>
              </div>

              {formError && (
                <p className="mt-3 text-sm text-red-600">
                  {formError}
                </p>
              )}

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setShowForm(false)
                    setFormError("")
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={creating}
                >
                  {creating
                    ? "Creating..."
                    : "Create project"}
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Project List */}
        <div className="mt-8">
          {loading ? (
            <Card hover={false}>
              <div className="flex min-h-64 items-center justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />
                  Loading projects...
                </div>
              </div>
            </Card>
          ) : projects.length === 0 ? (
            <Card hover={false}>
              <div className="flex min-h-64 flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                    <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>

                <h2 className="mt-5 text-lg font-bold text-slate-900">
                  No projects yet
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Create your first project to start
                  organizing your team's work.
                </p>

                <Button
                  className="mt-5"
                  onClick={() => setShowForm(true)}
                >
                  Create your first project
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project._id}
                  hover={false}
                  className="flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-bold text-slate-900">
                        {project.name}
                      </h2>

                      <span className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold capitalize text-emerald-700">
                        {project.status}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(project._id)
                      }
                      disabled={
                        deletingId === project._id
                      }
                      className="
                        shrink-0 rounded-lg
                        p-2 text-slate-400
                        transition-colors
                        hover:bg-red-50
                        hover:text-red-600
                        disabled:opacity-50
                      "
                      aria-label={`Delete ${project.name}`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v5" />
                        <path d="M14 11v5" />
                      </svg>
                    </button>
                  </div>

                  <p className="mt-4 min-h-12 text-sm leading-6 text-slate-500">
                    {project.description ||
                      "No description provided."}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-400">
                      Created{" "}
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Projects