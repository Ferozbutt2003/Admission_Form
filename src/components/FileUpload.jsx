export default function FileUpload({ label, name, file, onChange, error, rule }) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
                {label} <span className="text-red-500">*</span>
            </label>

            <label
                htmlFor={name}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed bg-slate-50 px-3.5 py-2.5 text-sm transition-colors hover:bg-slate-100 ${error ? 'border-red-400' : 'border-slate-300'
                    }`}
            >
                <span className="flex min-w-0 items-center gap-2">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 shrink-0 text-slate-400"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className={`truncate ${file ? 'text-slate-800' : 'text-slate-400'}`}>
                        {file ? file.name : 'No file chosen'}
                    </span>
                </span>
                <span className="shrink-0 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
                    Browse
                </span>
            </label>

            <input
                id={name}
                name={name}
                type="file"
                accept={rule.types.join(',')}
                onChange={(e) => onChange(name, e.target.files[0] ?? null)}
                className="hidden"
            />

            <p className="mt-1.5 text-xs text-slate-500">
                {rule.typesText}, up to {rule.maxMB} MB
            </p>

            {error && (
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
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
