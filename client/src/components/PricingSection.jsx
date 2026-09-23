
import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "./ui/Container"
import SectionHeading from "./ui/SectionHeading"
import Card from "./ui/Card"
import Button from "./ui/Button"

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "Project management",
      "Email support",
      "5 GB storage",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams that need more power and flexibility.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 25 team members",
      "Advanced analytics",
      "Unlimited projects",
      "Priority support",
      "50 GB storage",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Scale",
    description: "For larger organizations with advanced requirements.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "Unlimited projects",
      "Priority support",
      "250 GB storage",
      "Advanced integrations",
    ],
    popular: false,
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0"
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

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section
      id="pricing"
      className="section-padding bg-white"
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you."
          description="Choose the plan that fits your team today. Upgrade as your needs grow."
        />

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`
                rounded-lg px-5 py-2.5 text-sm font-semibold
                transition-all duration-200
                ${billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
                }
              `}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`
                rounded-lg px-5 py-2.5 text-sm font-semibold
                transition-all duration-200
                ${billingCycle === "yearly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
                }
              `}
            >
              Yearly
            </button>
          </div>
        </div>

        <p className="mt-3 text-center text-xs font-medium text-emerald-600">
          {billingCycle === "yearly"
            ? "Save 20% with yearly billing"
            : "Switch to yearly and save 20%"}
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price =
              billingCycle === "monthly"
                ? plan.monthlyPrice
                : plan.yearlyPrice

            return (
              <Card
                key={plan.name}
                hover={false}
                className={`
                  relative flex h-full flex-col p-7
                  ${plan.popular
                    ? "border-brand-500 shadow-lg shadow-brand-100/60"
                    : ""
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-7">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">
                      ${price}
                    </span>

                    <span className="mb-1 text-sm text-slate-500">
                      /month
                    </span>
                  </div>

                  {billingCycle === "yearly" && (
                    <p className="mt-2 text-xs text-slate-500">
                      Billed annually
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-7">
                  <Link to="/register" className="block">
                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Get started
                    </Button>
                  </Link>
                </div>

                {/* Features */}
                <div className="mt-8 border-t border-slate-200 pt-7">
                  <p className="text-sm font-semibold text-slate-900">
                    What's included
                  </p>

                  <ul className="mt-5 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 text-brand-600">
                          <CheckIcon />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default PricingSection