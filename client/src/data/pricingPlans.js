const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Essential tools for individuals and small projects.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Up to 3 team members",
      "5 projects",
      "Basic analytics",
      "Email support",
      "5 GB storage",
    ],
    buttonText: "Start free",
    popular: false,
  },

  {
    id: "growth",
    name: "Growth",
    description:
      "Everything growing teams need to work efficiently.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 10 team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50 GB storage",
      "Team collaboration tools",
    ],
    buttonText: "Get started",
    popular: true,
  },

  {
    id: "scale",
    name: "Scale",
    description:
      "Advanced capabilities for larger organizations.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "250 GB storage",
      "Advanced permissions",
      "Custom workflows",
    ],
    buttonText: "Contact sales",
    popular: false,
  },
]

export default pricingPlans