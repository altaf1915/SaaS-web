import { useState } from "react"

import {
  Link,
  NavLink,
} from "react-router-dom"

import { useAuth } from "../context/AuthContext"

import Button from "./ui/Button"

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

function Navbar() {
  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false)

  const {
    user,
    logout,
  } = useAuth()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    closeMobileMenu()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2"
          >
            <div className="brand-mark flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
              S
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">
              SaaSly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  rounded-lg px-3 py-2 text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">
                    Dashboard
                  </Button>
                </Link>

                <Button
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">
                    Log in
                  </Button>
                </Link>

                <Link to="/register">
                  <Button>
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              text-slate-700
              transition-colors
              hover:bg-slate-100
              lg:hidden
            "
          >
            {mobileMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `
                    rounded-lg px-4 py-3 text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                  >
                    <Button className="w-full">
                      Dashboard
                    </Button>
                  </Link>

                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      variant="secondary"
                      className="w-full"
                    >
                      Log in
                    </Button>
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                  >
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
