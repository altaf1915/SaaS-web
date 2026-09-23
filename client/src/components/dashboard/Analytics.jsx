import { useEffect, useState } from "react"

import Card from "../../components/ui/Card"
import Container from "../../components/ui/Container"

import dashboardService from "../../services/dashboardService"

function Analytics() {
  const [analytics, setAnalytics] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setLoading(true)
        setError("")

        const response =
          await dashboardService.getAnalytics()

        setAnalytics(response.data)
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load analytics."
        )
      } finally {
        setLoading(false)
      }
    }

    loadAnalytics()
  }, [])

  const statusItems = [
    {
      label: "Active",
      value:
        analytics?.activeProjects || 0,
      dotClass: "bg-emerald-500",
    },
    {
      label: "Completed",
      value:
        analytics?.completedProjects || 0,
      dotClass: "bg-brand-500",
    },
    {
      label: "Archived",
      value:
        analytics?.archivedProjects || 0,
      dotClass: "bg-slate-400",
    },
  ]

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div>
          <p className="text-sm font-semibold text-brand-600">
            Insights
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Analytics
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor your workspace activity and performance.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Total projects
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : analytics?.totalProjects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              All workspace projects
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Active projects
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : analytics?.activeProjects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Currently active
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Completed projects
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : analytics?.completedProjects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Successfully completed
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Team members
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : analytics?.totalTeamMembers ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Workspace members
            </p>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card
            hover={false}
            className="lg:col-span-2"
          >
            <div>
              <h2 className="font-bold text-slate-900">
                Project status
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Current project distribution
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${item.dotClass}`}
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-slate-900">
                      {loading
                        ? "—"
                        : item.value}
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-brand-500 transition-all duration-500"
                      style={{
                        width:
                          analytics?.totalProjects
                            ? `${Math.min(
                                (item.value /
                                  analytics.totalProjects) *
                                  100,
                                100
                              )}%`
                            : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card hover={false}>
            <h2 className="font-bold text-slate-900">
              Workspace activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current workspace summary
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Projects
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  {loading
                    ? "—"
                    : analytics?.totalProjects ?? 0}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Active work
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  {loading
                    ? "—"
                    : analytics?.activeProjects ?? 0}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Team
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  {loading
                    ? "—"
                    : analytics?.totalTeamMembers ?? 0}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card
          hover={false}
          className="mt-6"
        >
          <div>
            <h2 className="font-bold text-slate-900">
              Recent projects
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest workspace projects
            </p>
          </div>

          {loading ? (
            <div className="mt-6 flex min-h-32 items-center justify-center">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />
                Loading projects...
              </div>
            </div>
          ) : !analytics?.recentProjects?.length ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
              <p className="font-semibold text-slate-700">
                No projects yet
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Create a project to start seeing workspace analytics.
              </p>
            </div>
          ) : (
            <div className="mt-6 divide-y divide-slate-100">
              {analytics.recentProjects.map(
                (project) => (
                  <div
                    key={project._id}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">
                        {project.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {project.description ||
                          "No description provided."}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                        {project.status}
                      </span>

                      <span className="text-xs text-slate-400">
                        {new Date(
                          project.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </Card>
      </Container>
    </section>
  )
}

export default Analytics