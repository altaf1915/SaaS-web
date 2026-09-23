import { useState } from "react"

import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card"
import Container from "../../components/ui/Container"

import { useAuth } from "../../context/AuthContext"

function Settings() {
  const {
    user,
    updateProfile,
  } = useAuth()

  const [name, setName] = useState(
    user?.name || ""
  )

  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleSave = async (event) => {
    event.preventDefault()

    const trimmedName = name.trim()

    setSuccess("")
    setError("")

    if (!trimmedName) {
      setError("Name is required.")
      return
    }

    if (trimmedName.length < 2) {
      setError(
        "Name must be at least 2 characters."
      )
      return
    }

    try {
      setSaving(true)

      const response =
        await updateProfile({
          name: trimmedName,
        })

      setSuccess(
        response.message ||
          "Profile updated successfully."
      )
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to update your profile."
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div>
          <p className="text-sm font-semibold text-brand-600">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your account and workspace preferences.
          </p>
        </div>

        <div className="mt-8 max-w-3xl space-y-6">
          <Card hover={false}>
            <h2 className="text-lg font-bold text-slate-900">
              Profile
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your personal account information.
            </p>

            <form
              onSubmit={handleSave}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="settings-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="settings-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  maxLength={100}
                  autoComplete="name"
                  className="
                    h-11 w-full rounded-lg
                    border border-slate-200
                    bg-white
                    px-4 text-sm text-slate-900
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
                  htmlFor="settings-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="settings-email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="
                    h-11 w-full rounded-lg
                    border border-slate-200
                    bg-slate-50
                    px-4 text-sm text-slate-500
                  "
                />

                <p className="mt-2 text-xs text-slate-500">
                  Email changes require account verification
                  and will be added separately.
                </p>
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {success}
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : "Save changes"}
                </Button>
              </div>
            </form>
          </Card>

          <Card
            hover={false}
            className="border-red-100"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Danger zone
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Account deletion and other destructive
              actions will be added with backend
              confirmation.
            </p>

            <button
              type="button"
              disabled
              className="
                mt-5 rounded-lg
                border border-red-200
                px-4 py-2.5
                text-sm font-semibold
                text-red-400
                opacity-70
              "
            >
              Delete account
            </button>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Settings