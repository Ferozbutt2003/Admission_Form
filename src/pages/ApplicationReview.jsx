import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const STEPS = ['Details', 'Review', 'Done']

export default function ApplicationReview() {
    const navigate = useNavigate()

    return (
        <div className="space-y-6">
            <ol className="flex items-center gap-2 px-1 text-xs font-medium text-slate-400 sm:text-sm">
                {STEPS.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                        <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${i <= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                                }`}
                        >
                            {i + 1}
                        </span>
                        <span className={i === 1 ? 'font-semibold text-slate-900' : ''}>{step}</span>
                        {i < STEPS.length - 1 && <span className="mx-1 h-px w-6 bg-slate-300 sm:w-10" />}
                    </li>
                ))}
            </ol>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-1 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                    </span>
                    <h1 className="text-2xl font-bold text-slate-900">Application Review</h1>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                    Please confirm your details are correct before submitting.
                </p>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <Button variant="secondary" onClick={() => navigate('/')}>
                        Edit
                    </Button>
                    <Button onClick={() => navigate('/success')}>Confirm and Submit</Button>
                </div>
            </div>
        </div>
    )
}
