import Badge from "./ui/Badge"
import Container from "./ui/Container"

function ContactHero() {
  return (
    <section className="page-hero py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal-up inline-block"><Badge>Contact us</Badge></div>

          <h1 className="reveal-up reveal-up-delay-1 mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's talk about your business.
          </h1>

          <p className="reveal-up reveal-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a question, need help choosing a plan, or want to learn more
            about the platform? Send us a message.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ContactHero
