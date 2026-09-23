import { useState } from "react"
import Button from "./ui/Button"

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
}

function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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

    setSubmitted(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email."
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message."
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Your message should be at least 10 characters."
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Backend API will be connected in a later step.
    console.log("Contact form submission:", formData)

    setSubmitted(true)
    setFormData(initialForm)
    setErrors({})
  }

  const inputClass = (fieldName) => `
    mt-2 w-full rounded-lg border
    bg-white px-4 py-3
    text-sm text-slate-900
    outline-none
    transition
    placeholder:text-slate-400
    focus:border-brand-500
    focus:ring-2
    focus:ring-brand-100
    ${
      errors[fieldName]
        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200"
    }
  `

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Send us a message
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill out the form and our team will get back to you.
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          Thanks! Your message has been submitted successfully.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-7 space-y-5"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-700"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass("name")}
            aria-invalid={Boolean(errors.name)}
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
            htmlFor="email"
            className="text-sm font-medium text-slate-700"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass("email")}
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-700"
          >
            Company
            <span className="ml-1 font-normal text-slate-400">
              (optional)
            </span>
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClass("company")}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className={`${inputClass("message")} resize-y`}
            aria-invalid={Boolean(errors.message)}
          />

          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          Send message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm