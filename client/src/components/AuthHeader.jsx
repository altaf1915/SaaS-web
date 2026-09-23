function AuthHeader({
  title,
  description,
}) {
  return (
    <div className="reveal-up text-center">
      <div className="brand-mark mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white">
        S
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h1>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  )
}

export default AuthHeader
