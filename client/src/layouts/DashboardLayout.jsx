import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

import DashboardSidebar from "../components/dashboard/DashboardSidebar"
import { useAuth } from "../context/AuthContext"

function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false)

  const { user } = useAuth()

  return (
    <div className="dashboard-surface min-h-screen">
      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">
        <DashboardSidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/30 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        >
          <div
            className="absolute inset-y-0 left-0"
            onClick={(event) => event.stopPropagation()}
          >
            <DashboardSidebar
              mobile
              onClose={() => setMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Application Area */}
      <div className="lg:pl-64">
        {/* Dashboard Topbar */}
        <header className="sticky top-0 z-30 h-[72px] border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
          <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  text-slate-600
                  hover:bg-slate-100
                  hover:text-slate-900
                  lg:hidden
                "
                aria-label="Open dashboard navigation"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Workspace
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  My Dashboard
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="
                  hidden rounded-lg px-3 py-2
                  text-sm font-medium text-slate-600
                  transition-colors
                  hover:bg-slate-100
                  hover:text-slate-900
                  sm:block
                "
              >
                View website
              </Link>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="min-h-[calc(100vh-72px)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
