export default function InfoRow({ label, value }) {
    return (
        <div className="flex flex-col gap-0.5 border-b border-slate-100 py-2 sm:flex-row sm:gap-2">
            <span className="w-full shrink-0 text-sm font-medium text-slate-500 sm:w-48">
                {label}
            </span>
            <span className="text-sm text-slate-800">{value || '—'}</span>
        </div>
    )
}