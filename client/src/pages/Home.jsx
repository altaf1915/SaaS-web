import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TrustedBrands from "../components/TrustedBrands"
import ProductShowcase from "../components/ProductShowcase"
import FeaturesSection from "../components/FeaturesSection"
import PricingSection from "../components/PricingSection"
import CTASection from "../components/CTASection"

function Home() {
  return (
    <>
      <SEO
        title="SaaSly — Build smarter. Grow faster."
        description="SaaSly gives modern teams powerful tools to manage projects, collaborate efficiently, and grow."
      />

      <Hero />

      <TrustedBrands />

      <ProductShowcase />

      <FeaturesSection />

      <PricingSection />

      <CTASection />
    </>
  )
}

export default Home