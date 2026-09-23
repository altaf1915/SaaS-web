import { Link } from "react-router-dom"

import Button from "./ui/Button"

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

function PricingCard({
  plan,
  billingCycle,
}) {
  const price =
    billingCycle === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyPrice

  return (
    <article
      className={`
        premium-card premium-card-hover relative flex h-full flex-col p-6
        sm:p-8
        ${
          plan.popular
            ? "border-brand-400 ring-4 ring-brand-100/70"
            : ""
        }
      `}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-600/25">
            Most popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          {plan.name}
        </h3>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">
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
          <p className="mt-2 text-xs font-medium text-emerald-600">
            Billed annually
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-7">
        <Link to="/register" className="block">
          <Button
            variant={
              plan.popular
                ? "primary"
                : "secondary"
            }
            size="lg"
            className="w-full"
          >
            {plan.buttonText}
          </Button>
        </Link>
      </div>

      {/* Features */}
      <div className="mt-8 border-t border-slate-100 pt-7">
        <p className="text-sm font-semibold text-slate-900">
          What's included
        </p>

        <ul className="mt-5 space-y-4">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <CheckIcon />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default PricingCard
