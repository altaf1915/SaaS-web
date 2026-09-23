import { Link, Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#f8f9fd]">
      <div className="flex min-h-screen">
        {/* Brand panel */}
        <div className="relative hidden w-[48%] overflow-hidden bg-[#0e1228] lg:flex lg:flex-col lg:justify-between">
          <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#25c6a7]/20 blur-3xl" />

          <div className="relative z-10 p-10 xl:p-12">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <div className="brand-mark flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white">
                S
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                SaaSly
              </span>
            </Link>
          </div>

          <div className="relative z-10 px-10 pb-16 xl:px-12">
            <div className="max-w-xl">
              <div className="mb-8 flex items-center gap-3 text-xs font-medium text-slate-400">
                <span className="flex -space-x-2">
                  {['AM', 'RK', 'JS', 'LT'].map((initials, index) => (
                    <span
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0e1228] text-[10px] font-bold text-white"
                      style={{ background: ['#635bff', '#2fbfa5', '#ef9e62', '#9b8cff'][index] }}
                    >
                      {initials}
                    </span>
                  ))}
                </span>
                <span>Join 2,000+ teams shipping with SaaSly</span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#86ddca]">
                Work with clarity
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white xl:text-6xl">
                Your best work,
                <span className="block text-[#9b92ff]">all in one place.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 xl:text-lg">
                Plan projects, move faster, and keep your whole team in sync with a workspace that feels effortless.
              </p>

              <div className="mt-10 grid max-w-md grid-cols-2 gap-3">
                <div className="float-slow rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">48%</p>
                  <p className="mt-1 text-xs text-slate-400">faster project delivery</p>
                </div>
                <div className="float-slower rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">4.9/5</p>
                  <p className="mt-1 text-xs text-slate-400">average team rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-10 text-sm text-slate-500 xl:p-12">
            © {new Date().getFullYear()} SaaSly. All rights reserved.
          </div>
        </div>

        {/* Auth content */}
        <div className="relative flex flex-1 flex-col overflow-hidden">
          <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-brand-100/70 blur-3xl" />
          <div className="relative z-10 flex justify-between p-5 sm:p-7 lg:p-10">
            <Link to="/" className="flex items-center gap-2 lg:hidden">
              <span className="brand-mark flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">S</span>
              <span className="text-lg font-bold tracking-tight text-slate-900">SaaSly</span>
            </Link>
            <Link
              to="/"
              className="ml-auto text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
            >
              Back to website <span aria-hidden="true" className="ml-1">↗</span>
            </Link>
          </div>

          <main className="relative z-10 flex flex-1 items-center justify-center px-5 pb-12 sm:px-8 lg:pb-20">
            <div className="w-full max-w-[460px] rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(18,24,56,0.08)] backdrop-blur-xl sm:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
