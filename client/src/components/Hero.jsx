import { Link } from "react-router-dom"

import Badge from "./ui/Badge"
import Button from "./ui/Button"
import Container from "./ui/Container"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px]"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-50/70 blur-3xl" />
      </div>

      <Container>
        <div className="section-padding pb-16 pt-16 sm:pt-20 lg:pb-20 lg:pt-24">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">

            {/* Announcement */}
            <div className="reveal-up inline-block">
            <Badge>
              Powerful tools for modern teams
            </Badge>
            </div>

            {/* Heading */}
            <h1 className="reveal-up reveal-up-delay-1 mt-7 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Build smarter.
              <span className="gradient-text block">
                Grow faster.
              </span>
            </h1>

            {/* Description */}
            <p className="reveal-up reveal-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A powerful SaaS platform that helps modern teams
              simplify their workflows, make better decisions,
              and grow their business with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="reveal-up reveal-up-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>

              <Link to="/features">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Trust text */}
            <div className="mt-8">
              <p className="text-sm text-slate-500">
                No credit card required
                <span className="mx-2 text-slate-300">•</span>
                Start in minutes
                <span className="mx-2 text-slate-300">•</span>
                Built for modern teams
              </p>
            </div>
          </div>

          {/* Product Preview */}
          <div className="reveal-up reveal-up-delay-3 relative mx-auto mt-16 max-w-6xl lg:mt-20">

            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-x-10 -bottom-8 h-40 rounded-full bg-brand-100/60 blur-3xl"
            />

            {/* Browser Window */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 sm:rounded-2xl">

              {/* Browser Header */}
              <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                <div className="mx-auto hidden h-6 max-w-md flex-1 rounded-md border border-slate-200 bg-white sm:block" />
              </div>

              {/* Dashboard */}
              <div className="grid min-h-[350px] grid-cols-1 md:grid-cols-[190px_1fr]">

                {/* Sidebar */}
                <aside className="hidden border-r border-slate-200 bg-slate-50 p-4 md:block">
                  <div className="mb-7 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-xs font-bold text-white">
                      S
                    </div>

                    <span className="text-sm font-bold text-slate-900">
                      SaaSly
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                      Overview
                    </div>

                    <div className="px-3 py-2 text-xs font-medium text-slate-500">
                      Analytics
                    </div>

                    <div className="px-3 py-2 text-xs font-medium text-slate-500">
                      Projects
                    </div>

                    <div className="px-3 py-2 text-xs font-medium text-slate-500">
                      Team
                    </div>

                    <div className="px-3 py-2 text-xs font-medium text-slate-500">
                      Settings
                    </div>
                  </div>
                </aside>

                {/* Dashboard Content */}
                <div className="p-5 sm:p-7">
                  {/* Dashboard Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Overview
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                        Welcome back
                      </h2>
                    </div>

                    <div className="hidden rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 sm:block">
                      Last 30 days
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs text-slate-500">
                        Revenue
                      </p>

                      <p className="mt-2 text-lg font-bold text-slate-900">
                        $48.2K
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        +12.8%
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs text-slate-500">
                        Customers
                      </p>

                      <p className="mt-2 text-lg font-bold text-slate-900">
                        2,840
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        +8.4%
                      </p>
                    </div>

                    <div className="hidden rounded-xl border border-slate-200 p-4 sm:block">
                      <p className="text-xs text-slate-500">
                        Conversion
                      </p>

                      <p className="mt-2 text-lg font-bold text-slate-900">
                        24.8%
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        +4.2%
                      </p>
                    </div>

                    <div className="hidden rounded-xl border border-slate-200 p-4 sm:block">
                      <p className="text-xs text-slate-500">
                        Active users
                      </p>

                      <p className="mt-2 text-lg font-bold text-slate-900">
                        1,892
                      </p>

                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        +15.6%
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-5 rounded-xl border border-slate-200 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">
                          Revenue overview
                        </p>

                        <p className="mt-1 text-base font-semibold text-slate-900">
                          $48,240
                        </p>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                        +12.8%
                      </span>
                    </div>

                    {/* Simple chart */}
                    <div className="mt-6 flex h-28 items-end gap-2 sm:h-36">
                      {[35, 48, 42, 60, 54, 72, 65, 80, 68, 88, 76, 94].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-brand-100"
                            style={{
                              height: `${height}%`,
                            }}
                          >
                            <div
                              className="h-full w-full rounded-t-md bg-brand-500"
                              style={{
                                opacity: index === 11 ? 1 : 0.35,
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted text */}
          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500">
              Trusted by teams building the future
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50 sm:gap-x-12">
              <span className="text-sm font-bold tracking-tight text-slate-700">
                NOVA
              </span>

              <span className="text-sm font-bold tracking-tight text-slate-700">
                VERCEL
              </span>

              <span className="text-sm font-bold tracking-tight text-slate-700">
                ORBIT
              </span>

              <span className="text-sm font-bold tracking-tight text-slate-700">
                LUMEN
              </span>

              <span className="text-sm font-bold tracking-tight text-slate-700">
                NORTHSTAR
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
