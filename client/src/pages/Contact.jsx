import { useState } from "react"

import contactService from "../services/contactService"

import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Container from "../components/ui/Container"
import SectionHeading from "../components/ui/SectionHeading"
import ContactHero from "../components/ContactHero"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState("")
  const [successMessage, setSuccessMessage] =
    useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: "",
    }))

    setApiError("")
    setSuccessMessage("")
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name."
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

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Please enter a subject."
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please enter your message."
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message must be at least 10 characters."
    }

    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setApiError("")
    setSuccessMessage("")

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
      const response =
        await contactService.sendMessage(
          formData
        )

      setSuccessMessage(
        response.message ||
          "Your message has been sent successfully."
      )

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to send your message. Please try again."

      setApiError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ContactHero />
      <section className="section-padding bg-[#fbfbfd]">
        <Container>
        <SectionHeading
          eyebrow="Start a conversation"
          title="Tell us where to start"
          description="Share a little about your goals and our team will help you find the right next step."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <Card
              hover={false}
              className="h-full"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Get in touch
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                We're here to help.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Tell us what you're working on and
                we'll get back to you as soon as
                possible.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    hello@saasly.com
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Response time
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Usually within one business day.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Support
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    We're happy to help with product
                    questions and general inquiries.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card
            hover={false}
            className="p-6 sm:p-8"
          >
            {apiError && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {apiError}
              </div>
            )}

            {successMessage && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              >
                {successMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-slate-700"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={`
                    mt-2 w-full rounded-lg border
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
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="contact-email"
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
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`
                    mt-2 w-full rounded-lg border
                    bg-white px-4 py-3
                    text-sm text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:ring-2
                    ${
                      errors.subject
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
                    }
                  `}
                />

                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-600">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you need..."
                  className={`
                    mt-2 w-full resize-none rounded-lg border
                    bg-white px-4 py-3
                    text-sm text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:ring-2
                    ${
                      errors.message
                        ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
                    }
                  `}
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
                disabled={loading}
                className="w-full"
              >
                {loading
                  ? "Sending message..."
                  : "Send message"}
              </Button>
            </form>
          </Card>
        </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
