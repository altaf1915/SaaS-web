import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

function ProtectedRoute() {
  const {
    user,
    loading,
  } = useAuth()

  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            S
          </div>

          <div className="mt-5 flex items-center gap-3 text-sm text-slate-600">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />

            Checking your session...
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute