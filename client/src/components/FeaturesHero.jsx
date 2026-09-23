import Badge from "./ui/Badge"
import Container from "./ui/Container"

function FeaturesHero() {
  return (
    <section className="page-hero py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal-up inline-block"><Badge>Platform features</Badge></div>

          <h1 className="reveal-up reveal-up-delay-1 mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything your team needs in one place.
          </h1>

          <p className="reveal-up reveal-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Powerful functionality with a simple experience. Manage your
            workflows, understand your data, and keep your team moving.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default FeaturesHero
