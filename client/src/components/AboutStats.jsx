import Container from "./ui/Container"

const stats = [
  {
    value: "10K+",
    label: "Teams using modern workflows",
  },
  {
    value: "99.9%",
    label: "Platform availability target",
  },
  {
    value: "24/7",
    label: "Access to your workspace",
  },
  {
    value: "1",
    label: "Connected workspace",
  },
]

function AboutStats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="premium-card premium-card-hover p-6 text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mx-auto mt-2 max-w-[180px] text-sm leading-5 text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutStats
