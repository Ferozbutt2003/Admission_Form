export default function Button({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
}) {
    const looks = {
        primary:
            'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2',
        secondary:
            'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-150 ${looks[variant]}`}
        >
            {children}
        </button>
    )
}
