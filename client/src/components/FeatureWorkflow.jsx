import Container from "./ui/Container"
import Badge from "./ui/Badge"

function FeatureWorkflow() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Product visual */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Workspace
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-900">
                    Team workflow
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Active
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        New customer onboarding
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        4 tasks · 2 team members
                      </p>
                    </div>

                    <span className="text-xs font-medium text-brand-600">
                      75%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-3/4 rounded-full bg-brand-500" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Product launch
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        8 tasks · 5 team members
                      </p>
                    </div>

                    <span className="text-xs font-medium text-brand-600">
                      48%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[48%] rounded-full bg-brand-500" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Weekly reporting
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Automated workflow
                      </p>
                    </div>

                    <span className="text-xs font-medium text-emerald-600">
                      Done
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge>Built for productivity</Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Turn scattered work into a clear workflow.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Give your team one place to organize projects, monitor progress,
              and understand what needs attention.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900">
                  See what's happening
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Get a clear overview of projects and important business
                  activity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Keep work moving
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Organize tasks and workflows so everyone knows what comes
                  next.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Make better decisions
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use meaningful information instead of switching between
                  disconnected tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureWorkflow