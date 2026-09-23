import { useState } from "react"
import {
  Link,
  useNavigate,
} from "react-router-dom"

import { useAuth } from "../context/AuthContext"

import AuthHeader from "../components/AuthHeader"
import PasswordInput from "../components/PasswordInput"
import Button from "../components/ui/Button"

function Register() {
  const navigate = useNavigate()

  const { register } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      name === "password" ||
      name === "confirmPassword"
    ) {
      setErrors((current) => ({
        ...current,
        confirmPassword: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name."
    } else if (
      formData.name.trim().length < 2
    ) {
      newErrors.name =
        "Name must be at least 2 characters."
    }

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
        "Please enter a password."
    } else if (
      formData.password.length < 8
    ) {
      newErrors.password =
        "Password must be at least 8 characters."
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password."
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match."
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
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      navigate("/dashboard")
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to create your account. Please try again."

      setApiError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AuthHeader
        title="Create your account"
        description="Start building a smarter workflow for your team."
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
        {/* Name */}
        <div>
          <label
            htmlFor="register-name"
            className="text-sm font-medium text-slate-700"
          >
            Full name
          </label>

          <input
            id="register-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            className={`
              auth-input mt-2 w-full rounded-lg border
              bg-white px-4 py-3
              text-sm text-slate-900
              outline-none
              transition
              placeholder:text-slate-400
              focus:ring-2
              ${
                errors.name
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
              }
            `}
            aria-invalid={Boolean(
              errors.name
            )}
          />

          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="register-email"
            className="text-sm font-medium text-slate-700"
          >
            Email address
          </label>

          <input
            id="register-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            className={`
              mt-2 w-full rounded-lg border
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
          <label
            htmlFor="register-password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>

          <div className="mt-2">
            <PasswordInput
              id="register-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              error={errors.password}
            />
          </div>
        </div>

        {/* Confirm password */}
        <div>
          <label
            htmlFor="register-confirm-password"
            className="text-sm font-medium text-slate-700"
          >
            Confirm password
          </label>

          <div className="mt-2">
            <PasswordInput
              id="register-confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              autoComplete="new-password"
              error={errors.confirmPassword}
            />
          </div>
        </div>

        <p className="text-xs leading-5 text-slate-500">
          By creating an account, you agree to the
          applicable terms and conditions for using
          the platform.
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full"
        >
          {loading
            ? "Creating account..."
            : "Create account"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          Log in
        </Link>
      </p>
    </div>
  )
}

export default Register
