import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0e1228]">
        <div className="pointer-events-none absolute right-[-6rem] top-[-10rem] h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="container-main">
          <div className="relative flex flex-col gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                Get started today
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to build a smarter workflow?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Start building with tools designed to help
                modern teams work more efficiently.
              </p>
            </div>

            <Link
              to="/register"
              className="
                inline-flex h-12 shrink-0 items-center justify-center
                rounded-lg bg-white px-6
                text-sm font-semibold text-slate-900
                transition-colors duration-200
                hover:bg-slate-100
              "
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container-main">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <div className="brand-mark flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
                S
              </div>

              <span className="text-xl font-bold tracking-tight text-slate-900">
                SaaSly
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Simple, powerful tools for modern teams
              that want to work smarter and grow faster.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-slate-200
                  text-slate-500
                  transition-colors
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                in
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-slate-200
                  text-sm font-semibold text-slate-500
                  transition-colors
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-slate-200
                  text-sm font-semibold text-slate-500
                  transition-colors
                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                GH
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Get started
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="mailto:hello@saasly.com"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Product overview
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Plans
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {currentYear} SaaSly. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
