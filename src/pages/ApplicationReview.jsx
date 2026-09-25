import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const STEPS = ['Details', 'Review', 'Done']

export default function ApplicationReview({ formData }) {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const handleConfirm = async () => {
        setIsSubmitting(true)
        setSubmitError('')

        try {
            const data = new FormData()

            // Add every normal text field (fullName, cnic, email, etc.)
            Object.keys(formData).forEach((key) => {
                if (key !== 'profilePhoto' && key !== 'cnicFile' && key !== 'transcript') {
                    data.append(key, formData[key])
                }
            })

            // Add the 3 files — only if the user actually chose one
            if (formData.profilePhoto) data.append('profilePhoto', formData.profilePhoto)
            if (formData.cnicFile) data.append('cnicFile', formData.cnicFile)
            if (formData.transcript) data.append('transcript', formData.transcript)

            const response = await fetch('http://localhost:3000/applications', {
                method: 'POST',
                body: data,
            })

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.')
            }

            navigate('/success')
        } catch (err) {
            setSubmitError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

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

                {submitError && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        {submitError}
                    </p>
                )}

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <Button variant="secondary" onClick={() => navigate('/')}>
                        Edit
                    </Button>
                    <Button onClick={handleConfirm} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Confirm and Submit'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
