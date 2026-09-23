import { useState } from "react"

import pricingPlans from "../data/pricingPlans"

import PricingCard from "../components/PricingCard"
import Badge from "../components/ui/Badge"
import Container from "../components/ui/Container"
import SectionHeading from "../components/ui/SectionHeading"

function Pricing() {
  const [
    billingCycle,
    setBillingCycle,
  ] = useState("monthly")

  return (
    <div className="bg-[#fbfbfd]">
      {/* Pricing Header */}
      <section className="page-hero section-padding pb-12">
        <Container>
          <div className="text-center">
            <div className="reveal-up inline-block"><Badge>
              Simple, transparent pricing
            </Badge></div>

            <SectionHeading
              className="mt-5"
              title="Plans that scale with your team"
              description="Choose the plan that fits your workflow today. Upgrade as your team and needs grow."
            />

            {/* Billing Toggle */}
            <div className="reveal-up reveal-up-delay-2 mt-8 flex justify-center">
              <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() =>
                    setBillingCycle("monthly")
                  }
                  className={`
                    rounded-lg px-5 py-2.5 text-sm font-semibold
                    transition-all duration-200
                    ${
                      billingCycle === "monthly"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }
                  `}
                  aria-pressed={
                    billingCycle === "monthly"
                  }
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setBillingCycle("yearly")
                  }
                  className={`
                    rounded-lg px-5 py-2.5 text-sm font-semibold
                    transition-all duration-200
                    ${
                      billingCycle === "yearly"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }
                  `}
                  aria-pressed={
                    billingCycle === "yearly"
                  }
                >
                  Yearly
                </button>
              </div>
            </div>

            {billingCycle === "yearly" && (
              <p className="mt-3 text-sm font-medium text-emerald-600">
                Save approximately 20% with annual billing
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding pt-14">
        <Container>
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Note */}
      <section className="border-t border-slate-200 bg-slate-50">
        <Container>
          <div className="py-14 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              Need something more specific?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Talk to our team about custom requirements,
              larger teams, or enterprise workflows.
            </p>

            <a
              href="mailto:hello@saasly.com"
              className="
                mt-5 inline-flex
                font-semibold
                text-brand-600
                hover:text-brand-700
              "
            >
              Contact our team →
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Pricing
