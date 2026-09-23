import Container from "./ui/Container"

const brands = [
  "NOVA",
  "ORBIT",
  "LUMEN",
  "NORTHSTAR",
  "VERTEX",
]

function TrustedBrands() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-sm font-medium text-slate-500">
            Built for ambitious teams and growing businesses
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14 lg:justify-between">
            {brands.map((brand) => (
              <span
                key={brand}
                className="
                  text-sm font-bold
                  tracking-[0.18em]
                  text-slate-400
                  sm:text-base
                "
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrustedBrands