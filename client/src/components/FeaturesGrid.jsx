import Container from "./ui/Container"
import SectionHeading from "./ui/SectionHeading"
import Card from "./ui/Card"

const features = [
  {
    number: "01",
    title: "Powerful analytics",
    description:
      "Understand business performance through clear dashboards, metrics, and reports.",
    points: [
      "Custom performance dashboards",
      "Real-time business metrics",
      "Simple reporting",
    ],
  },
  {
    number: "02",
    title: "Team collaboration",
    description:
      "Keep everyone aligned with shared projects, tasks, and organized workflows.",
    points: [
      "Shared workspaces",
      "Team project management",
      "Organized workflows",
    ],
  },
  {
    number: "03",
    title: "Smart automation",
    description:
      "Reduce repetitive work by creating efficient processes for everyday tasks.",
    points: [
      "Workflow automation",
      "Task triggers",
      "Repeatable processes",
    ],
  },
  {
    number: "04",
    title: "Security",
    description:
      "Build your workflows on top of carefully designed authentication and access controls.",
    points: [
      "Secure authentication",
      "Protected accounts",
      "Access management",
    ],
  },
  {
    number: "05",
    title: "Integrations",
    description:
      "Connect the tools your business already uses and keep important information flowing.",
    points: [
      "Connected tools",
      "API-ready architecture",
      "Centralized workflows",
    ],
  },
  {
    number: "06",
    title: "Scalability",
    description:
      "Create a foundation that can grow alongside your business and your team.",
    points: [
      "Flexible plans",
      "Growing teams",
      "Scalable workflows",
    ],
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FeaturesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Everything included"
          title="Tools designed around the way teams work."
          description="Each part of the platform is designed to be useful on its own and even more powerful when used together."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.number}
              hover={false}
              className="p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600">
                  {feature.number}
                </div>

                <span className="text-sm font-medium text-slate-300">
                  SaaSly
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="text-brand-600">
                      <CheckIcon />
                    </span>

                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesGrid