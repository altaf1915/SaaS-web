import Container from "./ui/Container"
import Badge from "./ui/Badge"
import Button from "./ui/Button"

function ProductShowcase() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <Badge>One powerful workspace</Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Everything your team needs to move forward.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Bring your projects, customers, performance metrics, and
              day-to-day workflows together in one simple workspace.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Centralized workspace
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Keep important business information organized and
                    accessible from one place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Real-time visibility
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Understand your performance with clear metrics and
                    actionable insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Designed for teams
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Simple workflows that help teams collaborate without
                    unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <Button size="lg">
                Explore the platform
              </Button>
            </div>
          </div>

          {/* Product Preview */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-6 rounded-[2rem] bg-brand-50/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              {/* Browser Header */}
              <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                <div className="ml-3 h-6 flex-1 rounded-md bg-white" />
              </div>

              {/* Dashboard */}
              <div className="flex min-h-[390px]">
                {/* Sidebar */}
                <aside className="hidden w-44 border-r border-slate-200 bg-slate-50 p-4 sm:block">
                  <div className="mb-7 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-xs font-bold text-white">
                      S
                    </div>

                    <span className="text-sm font-bold text-slate-800">
                      SaaSly
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-md bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                      Overview
                    </div>

                    <div className="px-3 py-2 text-xs text-slate-500">
                      Analytics
                    </div>

                    <div className="px-3 py-2 text-xs text-slate-500">
                      Projects
                    </div>

                    <div className="px-3 py-2 text-xs text-slate-500">
                      Customers
                    </div>

                    <div className="px-3 py-2 text-xs text-slate-500">
                      Settings
                    </div>
                  </div>
                </aside>

                {/* Main Dashboard */}
                <div className="min-w-0 flex-1 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-slate-400">
                        Dashboard
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        Business overview
                      </h3>
                    </div>

                    <div className="hidden rounded-md border border-slate-200 px-3 py-1.5 text-[10px] font-medium text-slate-500 sm:block">
                      Last 30 days
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="text-[10px] text-slate-400">
                        Revenue
                      </p>

                      <p className="mt-1 text-base font-bold text-slate-900">
                        ₹84,250
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-emerald-600">
                        +18.4%
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3">
                      <p className="text-[10px] text-slate-400">
                        Customers
                      </p>

                      <p className="mt-1 text-base font-bold text-slate-900">
                        2,481
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-emerald-600">
                        +12.8%
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-4 rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-700">
                        Revenue overview
                      </p>

                      <span className="text-[10px] text-slate-400">
                        ₹84.2K
                      </span>
                    </div>

                    <div className="relative mt-5 h-32">
                      {/* Grid */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-slate-100" />
                        <span className="border-t border-slate-100" />
                        <span className="border-t border-slate-100" />
                        <span className="border-t border-slate-100" />
                      </div>

                      {/* Chart */}
                      <svg
                        viewBox="0 0 500 130"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 105 C45 96, 60 88, 95 94 C130 100, 140 76, 175 80 C210 84, 225 66, 260 72 C295 78, 315 48, 345 56 C380 64, 405 34, 435 42 C460 48, 480 22, 500 28"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="text-brand-500"
                        />

                        <path
                          d="M0 105 C45 96, 60 88, 95 94 C130 100, 140 76, 175 80 C210 84, 225 66, 260 72 C295 78, 315 48, 345 56 C380 64, 405 34, 435 42 C460 48, 480 22, 500 28 L500 130 L0 130 Z"
                          className="fill-brand-50"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Cards */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-slate-50 p-3">
                      <div className="h-2 w-12 rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-16 rounded bg-slate-300" />
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <div className="h-2 w-12 rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-16 rounded bg-slate-300" />
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <div className="h-2 w-12 rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-16 rounded bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductShowcase