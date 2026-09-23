import { useEffect, useState } from "react"

import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Container from "../../components/ui/Container"

import { useAuth } from "../../context/AuthContext"
import teamService from "../../services/teamService"

function Team() {
  const { user } = useAuth()

  const [members, setMembers] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "member",
  })

  const [formError, setFormError] = useState("")
  const [adding, setAdding] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  const loadMembers = async () => {
    try {
      setLoading(true)
      setError("")

      const response =
        await teamService.getMembers()

      setMembers(response.data || [])
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to load team members."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMembers()
  }, [])

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setFormError("")
  }

  const handleAddMember = async (event) => {
    event.preventDefault()

    const name = formData.name.trim()
    const email =
      formData.email.trim().toLowerCase()

    setFormError("")

    if (!name) {
      setFormError(
        "Member name is required."
      )
      return
    }

    if (name.length < 2) {
      setFormError(
        "Member name must be at least 2 characters."
      )
      return
    }

    if (!email) {
      setFormError(
        "Member email is required."
      )
      return
    }

    try {
      setAdding(true)

      const response =
        await teamService.addMember({
          name,
          email,
          role: formData.role,
        })

      setMembers((previous) => [
        response.data,
        ...previous,
      ])

      setFormData({
        name: "",
        email: "",
        role: "member",
      })

      setShowForm(false)
    } catch (error) {
      setFormError(
        error.response?.data?.message ||
          "Unable to add team member."
      )
    } finally {
      setAdding(false)
    }
  }

  const handleDelete = async (memberId) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to remove this team member?"
      )

    if (!confirmed) {
      return
    }

    try {
      setDeletingId(memberId)

      await teamService.deleteMember(
        memberId
      )

      setMembers((previous) =>
        previous.filter(
          (member) =>
            member._id !== memberId
        )
      )
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to remove team member."
      )
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-600">
              Workspace
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Team
            </h1>

            <p className="mt-2 text-slate-600">
              Manage the people working in your workspace.
            </p>
          </div>

          <Button
            onClick={() => {
              setShowForm(
                (previous) => !previous
              )
              setFormError("")
            }}
          >
            {showForm
              ? "Close"
              : "+ Add member"}
          </Button>
        </div>

        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {showForm && (
          <Card
            hover={false}
            className="mt-6"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Add team member
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a person to your workspace.
            </p>

            <form
              onSubmit={handleAddMember}
              className="mt-5"
            >
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="team-name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>

                  <input
                    id="team-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
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
                    htmlFor="team-email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="team-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
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
                    htmlFor="team-role"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Role
                  </label>

                  <select
                    id="team-role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
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
                  >
                    <option value="member">
                      Member
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>
                </div>
              </div>

              {formError && (
                <p className="mt-3 text-sm text-red-600">
                  {formError}
                </p>
              )}

              <div className="mt-5 flex justify-end">
                <Button
                  type="submit"
                  disabled={adding}
                >
                  {adding
                    ? "Adding..."
                    : "Add member"}
                </Button>
              </div>
            </form>
          </Card>
        )}

        <Card
          hover={false}
          className="mt-8 overflow-hidden p-0"
        >
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="font-bold text-slate-900">
              Team members
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              People with access to this workspace.
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-48 items-center justify-center">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />

                Loading team members...
              </div>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {/* Owner */}
              <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                    {user?.name
                      ?.charAt(0)
                      ?.toUpperCase() ||
                      "U"}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {user?.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Owner
                </span>
              </div>

              {/* Members */}
              {members.length === 0 ? (
                <div className="px-6 py-10 text-center">
                  <p className="font-semibold text-slate-700">
                    No additional members
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Add your first team member to
                    collaborate with your workspace.
                  </p>
                </div>
              ) : (
                members.map((member) => (
                  <div
                    key={member._id}
                    className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700">
                        {member.name
                          ?.charAt(0)
                          ?.toUpperCase() ||
                          "U"}
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {member.name}
                        </p>

                        <p className="text-sm text-slate-500">
                          {member.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                        {member.role}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(
                            member._id
                          )
                        }
                        disabled={
                          deletingId ===
                          member._id
                        }
                        className="
                          rounded-lg
                          px-3 py-2
                          text-xs font-semibold
                          text-red-600
                          transition-colors
                          hover:bg-red-50
                          disabled:opacity-50
                        "
                      >
                        {deletingId ===
                        member._id
                          ? "Removing..."
                          : "Remove"}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </Card>
      </Container>
    </section>
  )
}

export default Team