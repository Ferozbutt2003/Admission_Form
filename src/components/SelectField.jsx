export default function SelectField({
    label,
    name,
    value,
    onChange,
    error,
    options,
    placeholder = 'Select...',
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label} <span className="text-red-500">*</span>
            </label>

            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={`w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-9 text-sm text-slate-900 shadow-sm outline-none transition-colors focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-50' : 'border-slate-300'
                        }`}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {error && (
                <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
                        <path
                            fillRule="evenodd"
                            d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0Zm-7-4a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0V6Zm-1 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    )
}
