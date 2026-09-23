function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  }

  return (
    <div
      className={`
        mx-auto max-w-3xl
        ${alignment[align]}
        ${className}
      `}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading