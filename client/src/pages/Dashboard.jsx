import { useEffect, useState } from "react"

import { useAuth } from "../context/AuthContext"

import Card from "../components/ui/Card"
import Container from "../components/ui/Container"

import dashboardService from "../services/dashboardService"

function Dashboard() {
  const { user } = useAuth()

  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadSummary = async () => {
      try {
        setLoading(true)
        setError("")

        const response =
          await dashboardService.getSummary()

        setSummary(response.data)
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load dashboard data."
        )
      } finally {
        setLoading(false)
      }
    }

    loadSummary()
  }, [])

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div>
          <p className="text-sm font-semibold text-brand-600">
            Overview
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Welcome, {user?.name}
          </h1>

          <p className="mt-2 text-slate-600">
            Here's what's happening with your workspace.
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
              Projects
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading ? "—" : summary?.projects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Total projects
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Active projects
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : summary?.activeProjects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Currently active
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Completed
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {loading
                ? "—"
                : summary?.completedProjects ?? 0}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Completed projects
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-medium text-slate-500">
              Account
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-lg font-bold text-slate-900">
                Active
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Account status
            </p>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card
            hover={false}
            className="lg:col-span-2"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Workspace overview
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Your workspace is ready
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                ✓
              </div>
            </div>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Your account is successfully connected.
              Create projects and manage your workspace
              from the dashboard.
            </p>
          </Card>

          <Card hover={false}>
            <p className="text-sm font-semibold text-slate-500">
              Account details
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Name
                </p>

                <p className="mt-1 font-medium text-slate-900">
                  {user?.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-1 break-all font-medium text-slate-900">
                  {user?.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Role
                </p>

                <p className="mt-1 font-medium capitalize text-slate-900">
                  {user?.role}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Dashboard