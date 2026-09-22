export default function InputField({
    label,
    name,
    value,
    onChange,
    error,
    type = 'text',
    placeholder = '',
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label} <span className="text-red-500">*</span>
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
                className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-50' : 'border-slate-300'
                    }`}
            />

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
