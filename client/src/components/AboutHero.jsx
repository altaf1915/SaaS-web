import Badge from "./ui/Badge"
import Container from "./ui/Container"

function AboutHero() {
  return (
    <section className="page-hero py-20 sm:py-24 lg:py-28">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="reveal-up inline-block"><Badge>About SaaSly</Badge></div>

          <h1 className="reveal-up reveal-up-delay-1 mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building simpler tools for modern businesses.
          </h1>

          <p className="reveal-up reveal-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We believe business software should make work easier, not more
            complicated. SaaSly brings essential tools, insights, and
            workflows together in one focused platform.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AboutHero
