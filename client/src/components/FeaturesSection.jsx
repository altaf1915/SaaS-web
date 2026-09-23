import Container from "./ui/Container"
import SectionHeading from "./ui/SectionHeading"
import Card from "./ui/Card"

const features = [
  {
    title: "Powerful analytics",
    description:
      "Turn your business data into clear insights with easy-to-understand dashboards and reports.",
    icon: "chart",
  },
  {
    title: "Team collaboration",
    description:
      "Keep your team aligned with shared workflows, organized projects, and simple communication.",
    icon: "users",
  },
  {
    title: "Smart automation",
    description:
      "Reduce repetitive work by creating efficient workflows that help your team move faster.",
    icon: "bolt",
  },
  {
    title: "Secure by design",
    description:
      "Protect your business information with secure authentication and carefully designed access controls.",
    icon: "shield",
  },
  {
    title: "Easy integrations",
    description:
      "Connect the tools your team already uses and keep your workflow in one connected ecosystem.",
    icon: "link",
  },
  {
    title: "Built to scale",
    description:
      "Start small and expand as your business grows without adding unnecessary complexity.",
    icon: "layers",
  },
]

function FeatureIcon({ type }) {
  const icons = {
    chart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </svg>
    ),

    users: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8" />
        <path d="M18 14c2 .5 3 2 3 5" />
      </svg>
    ),

    bolt: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="m13 2-9 12h7l-1 8 9-12h-7z" />
      </svg>
    ),

    shield: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),

    link: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.2 1.2" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.2-1.2" />
      </svg>
    ),

    layers: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
  }

  return icons[type]
}

function FeaturesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run smarter."
          description="A focused set of powerful tools designed to simplify your workflow, improve visibility, and help your team grow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                <FeatureIcon type={feature.icon} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-600">
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection