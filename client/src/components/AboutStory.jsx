import Container from "./ui/Container"
import Card from "./ui/Card"

function AboutStory() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Our story
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Software should work for people.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-600">
              <p>
                Modern teams use more tools than ever, but managing those
                tools can become a challenge of its own.
              </p>

              <p>
                SaaSly is designed around a simple idea: bring important
                workflows into one clear and approachable experience.
              </p>

              <p>
                From understanding business performance to organizing team
                workflows, our goal is to help businesses spend less time
                managing software and more time doing meaningful work.
              </p>
            </div>
          </div>

          <div className="reveal-up reveal-up-delay-2 grid gap-4 sm:grid-cols-2">
            <Card hover={false} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-brand-600">
                01
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Simplicity
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Clear interfaces and focused workflows without unnecessary
                complexity.
              </p>
            </Card>

            <Card hover={false} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-brand-600">
                02
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Reliability
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dependable tools designed to support everyday business
                workflows.
              </p>
            </Card>

            <Card hover={false} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-brand-600">
                03
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Transparency
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Straightforward experiences that help teams understand what is
                happening in their business.
              </p>
            </Card>

            <Card hover={false} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-brand-600">
                04
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Customer focus
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Product decisions should solve real problems for real teams.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutStory
