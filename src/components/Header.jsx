export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-sm shadow-indigo-200">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
          </svg>
        </div>
        <div>
          <h1 className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">
            Student Admission Portal
          </h1>
          <p className="text-xs text-slate-500">Apply to your program in a few simple steps</p>
        </div>
      </div>
    </header>
  )
}
