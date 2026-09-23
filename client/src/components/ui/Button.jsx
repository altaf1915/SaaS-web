const variants = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-600/30 focus-visible:ring-brand-500",

  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400",

  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",

  dark:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        font-semibold
        whitespace-nowrap
        transition-all duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
