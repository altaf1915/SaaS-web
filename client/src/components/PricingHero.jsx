import Badge from "./ui/Badge"
import Container from "./ui/Container"

function PricingHero() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Simple pricing</Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Plans that grow with your business.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Start with the tools you need today and move to a larger plan as
            your team and workflows grow.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PricingHero