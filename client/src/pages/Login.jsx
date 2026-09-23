import { useState } from "react"
import {
  Link,
  useNavigate,
} from "react-router-dom"

import { useAuth } from "../context/AuthContext"

import AuthHeader from "../components/AuthHeader"
import PasswordInput from "../components/PasswordInput"
import Button from "../components/ui/Button"

function Login() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: "",
    }))

    setApiError("")
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email."
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address."
    }

    if (!formData.password) {
      newErrors.password =
        "Please enter your password."
    }

    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setApiError("")

    const validationErrors =
      validateForm()

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    try {
      await login({
        email: formData.email,
        password: formData.password,
      })

      navigate("/dashboard")
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to login. Please try again."

      setApiError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AuthHeader
        title="Welcome back"
        description="Log in to continue to your SaaSly workspace."
      />

      {apiError && (
        <div
          role="alert"
          className="auth-error mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {apiError}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="auth-form mt-8 space-y-5"
      >
        {/* Email */}
        <div>
          <label
            htmlFor="login-email"
            className="text-sm font-medium text-slate-700"
          >
            Email address
          </label>

          <input
            id="login-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            className={`
              auth-input mt-2 w-full rounded-lg border
              bg-white px-4 py-3
              text-sm text-slate-900
              outline-none
              transition
              placeholder:text-slate-400
              focus:ring-2
              ${
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
              }
            `}
            aria-invalid={Boolean(
              errors.email
            )}
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <button
              type="button"
              className="text-xs font-medium text-brand-600 hover:text-brand-700"
              onClick={() => {
                console.log(
                  "Forgot password clicked"
                )
              }}
            >
              Forgot password?
            </button>
          </div>

          <div className="mt-2">
            <PasswordInput
              id="login-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              error={errors.password}
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full"
        >
          {loading
            ? "Logging in..."
            : "Log in"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default Login
