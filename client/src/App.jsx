import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import ProtectedRoute from "./components/ProtectedRoute"
import GuestRoute from "./components/GuestRoute"

import Home from "./pages/Home"
import About from "./pages/About"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

import Projects from "./components/dashboard/Projects"
import Analytics from "./components/dashboard/Analytics"
import Team from "./components/dashboard/Team"
import Settings from "./components/dashboard/Settings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/features"
            element={<Features />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>

        {/* Guest-only pages */}
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />
          </Route>
        </Route>

        {/* Protected Dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard/projects"
              element={<Projects />}
            />

            <Route
              path="/dashboard/analytics"
              element={<Analytics />}
            />

            <Route
              path="/dashboard/team"
              element={<Team />}
            />

            <Route
              path="/dashboard/settings"
              element={<Settings />}
            />
          </Route>
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
