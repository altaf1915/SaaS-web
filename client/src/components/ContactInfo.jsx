import Container from "./ui/Container"
import ContactForm from "./ContactForm"

function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you have a question about the platform, need help
              choosing a plan, or want to discuss your requirements, our team
              is here to help.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    hello@saasly.example
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Response time
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Usually within one business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path d="M4 13a8 8 0 0 1 16 0" />
                    <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4Z" />
                    <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3Z" />
                    <path d="M15 19h2" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Support
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Help with plans, accounts, and product questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-900">
                Looking for a tailored solution?
              </p>

              <p className="mt-2 text-sm leading-6 text-brand-800/80">
                Tell us about your requirements in the message form and we'll
                discuss the available options.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default ContactInfo