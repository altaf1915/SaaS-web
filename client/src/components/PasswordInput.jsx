import { useState } from "react"

function PasswordInput({
  id,
  name,
  value,
  onChange,
  placeholder = "Enter your password",
  autoComplete,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`
            auth-input w-full rounded-lg border
            bg-white px-4 py-3 pr-12
            text-sm text-slate-900
            outline-none
            transition
            placeholder:text-slate-400
            focus:ring-2
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-brand-500 focus:ring-brand-100"
            }
          `}
          aria-invalid={Boolean(error)}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path d="M9.9 4.3A10.7 10.7 0 0 1 12 4c5 0 8.7 4 10 8a12.7 12.7 0 0 1-3.1 5.1" />
              <path d="M6.6 6.6C4.7 8 3.4 10.2 2 12c1.3 4 5 8 10 8 1.2 0 2.4-.2 3.4-.6" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default PasswordInput
