import { Link } from "react-router-dom"
import Container from "./ui/Container"
import Button from "./ui/Button"

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0e1228] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#31bfa5]/15 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Ready to get started?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build a better workflow for your team.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Bring your work together, understand your business, and give your
            team the tools they need to move forward.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full border-slate-700 bg-transparent text-white hover:bg-slate-800 sm:w-auto"
              >
                Talk to our team
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTASection
