import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const STEPS = ['Details', 'Review', 'Done']

export default function SuccessPage({ onStartNew }) {
    const navigate = useNavigate()

    function handleStartNew() {
        onStartNew?.()
        navigate('/')
    }

    return (
        <div className="space-y-6">
            <ol className="flex items-center gap-2 px-1 text-xs font-medium text-slate-400 sm:text-sm">
                {STEPS.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                            {i + 1}
                        </span>
                        <span className={i === 2 ? 'font-semibold text-slate-900' : ''}>{step}</span>
                        {i < STEPS.length - 1 && <span className="mx-1 h-px w-6 bg-slate-300 sm:w-10" />}
                    </li>
                ))}
            </ol>

            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </span>
                <h1 className="mt-4 text-2xl font-bold text-slate-900">Application Submitted Successfully</h1>
                <p className="mt-2 max-w-sm text-sm text-slate-500">
                    Thank you for applying. We've received your application and will get back to you soon.
                </p>
                <div className="mt-6">
                    <Button onClick={handleStartNew}>Start New Application</Button>
                </div>
            </div>
        </div>
    )
}
