import {
  Navigate,
  Outlet,
} from "react-router-dom"

import { useAuth } from "../context/AuthContext"

function GuestRoute() {
  const {
    user,
    loading,
  } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />

          Checking your session...
        </div>
      </div>
    )
  }

  if (user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    )
  }

  return <Outlet />
}

export default GuestRoute