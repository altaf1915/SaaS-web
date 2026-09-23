import { NavLink, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const navigation = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: (
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
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: (
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
        <path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: (
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
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />
      </svg>
    ),
  },
  {
    name: "Team",
    path: "/dashboard/team",
    icon: (
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: (
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.5 1.5-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.12v-.4a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.5-1.5.06-.06A1.7 1.7 0 0 0 9.12 15a1.7 1.7 0 0 0-1.56-1.04H7.2v-2.12h.36A1.7 1.7 0 0 0 9.12 10.8a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.5-1.5.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56V5h2.12v.4a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.5 1.5-.06.06A1.7 1.7 0 0 0 19.4 10c.2.5.7.84 1.24.84H21v2.12h-.36c-.54 0-1.04.34-1.24.84Z" />
      </svg>
    ),
  },
]

function DashboardSidebar({ mobile = false, onClose }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    if (onClose) {
      onClose()
    }

    logout()
  }

  return (
    <aside
      className={`
        flex h-full w-64 flex-col
        border-r border-slate-200/80
        bg-white/90
        ${mobile ? "shadow-xl" : ""}
      `}
    >
      <div className="flex h-[72px] items-center border-b border-slate-200 px-5">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2"
        >
          <div className="brand-mark flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
            S
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            SaaSly
          </span>
        </Link>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close dashboard navigation"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={onClose}
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-lg px-3 py-2.5
                text-sm font-medium
                transition-colors duration-200
                ${
                  isActive
                    ? "bg-brand-50 text-brand-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }
                `
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 p-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                {user?.name}
              </p>

              <p className="truncate text-xs text-slate-500">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="
              mt-3 flex w-full items-center justify-center
              rounded-lg border border-slate-200
              bg-white px-3 py-2
              text-xs font-semibold text-slate-600
              transition-colors
              hover:bg-slate-100
              hover:text-slate-900
            "
          >
            Log out
          </button>
        </div>
      </div>
    </aside>
  )
}

export default DashboardSidebar
