import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import FileUpload from '../components/FileUpload'
import Button from '../components/Button'
import {
    GENDERS,
    QUALIFICATIONS,
    PROGRAMS,
    INTAKES,
    COUNTRIES,
    FILE_RULES,
} from '../data/options'
import { validateForm } from '../utils/validation'

// Turns raw digits into 35202-1234567-1 as the user types
function formatCNIC(value) {
    const digits = value.replace(/\D/g, '').slice(0, 13) // keep numbers only, max 13
    if (digits.length <= 5) return digits
    if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`
}

const STEPS = ['Details', 'Review', 'Done']

export default function AdmissionForm({ formData, onChange }) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    function handleFieldChange(name, value) {
        const finalValue = name === 'cnic' ? formatCNIC(value) : value
        onChange(name, finalValue)

        // Clear a field's error the moment the user edits it, so it doesn't feel stuck
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev }
                delete next[name]
                return next
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault() // stop the browser from reloading the page
        const foundErrors = validateForm(formData)
        setErrors(foundErrors)

        if (Object.keys(foundErrors).length === 0) {
            navigate('/review')
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' }) // so the user sees the errors
        }
    }

    function handleSaveDraft() {
        // Wired up in Step 5
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <ol className="flex items-center gap-2 px-1 text-xs font-medium text-slate-400 sm:text-sm">
                {STEPS.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                        <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                                }`}
                        >
                            {i + 1}
                        </span>
                        <span className={i === 0 ? 'font-semibold text-slate-900' : ''}>{step}</span>
                        {i < STEPS.length - 1 && <span className="mx-1 h-px w-6 bg-slate-300 sm:w-10" />}
                    </li>
                ))}
            </ol>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900">Admission Form</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Fields marked with <span className="text-red-500">*</span> are required.
                </p>
            </div>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M20 21a8 8 0 0 0-16 0" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleFieldChange} error={errors.fullName} placeholder="e.g. Ayesha Khan" />
                    <InputField label="CNIC" name="cnic" value={formData.cnic} onChange={handleFieldChange} error={errors.cnic} placeholder="35202-1234567-1" />
                    <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleFieldChange} error={errors.dob} />
                    <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleFieldChange} error={errors.gender} options={GENDERS} />
                    <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleFieldChange} error={errors.email} placeholder="you@example.com" />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleFieldChange} error={errors.phone} placeholder="0300-1234567" />
                </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
                        </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">Academic Information</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                    <SelectField label="Previous Qualification" name="qualification" value={formData.qualification} onChange={handleFieldChange} error={errors.qualification} options={QUALIFICATIONS} />
                    <InputField label="Institution Name" name="institution" value={formData.institution} onChange={handleFieldChange} error={errors.institution} placeholder="e.g. UMT Lahore" />
                    <InputField label="Percentage / GPA" name="percentage" value={formData.percentage} onChange={handleFieldChange} error={errors.percentage} placeholder="e.g. 78 or 3.4" />
                </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M8 2v4M16 2v4M3 10h18" />
                        </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">Program Selection</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                    <SelectField label="Select Program" name="program" value={formData.program} onChange={handleFieldChange} error={errors.program} options={PROGRAMS} />
                    <SelectField label="Preferred Intake" name="intake" value={formData.intake} onChange={handleFieldChange} error={errors.intake} options={INTAKES} />
                </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
                            <circle cx="12" cy="11" r="2.5" />
                        </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">Address</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <InputField label="Address" name="address" value={formData.address} onChange={handleFieldChange} error={errors.address} placeholder="House #, Street, Area" />
                    </div>
                    <InputField label="City" name="city" value={formData.city} onChange={handleFieldChange} error={errors.city} placeholder="e.g. Lahore" />
                    <SelectField label="Country" name="country" value={formData.country} onChange={handleFieldChange} error={errors.country} options={COUNTRIES} />
                </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">Documents</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                    <FileUpload label="Profile Photo" name="profilePhoto" file={formData.profilePhoto} onChange={handleFieldChange} error={errors.profilePhoto} rule={FILE_RULES.profilePhoto} />
                    <FileUpload label="CNIC Upload" name="cnicFile" file={formData.cnicFile} onChange={handleFieldChange} error={errors.cnicFile} rule={FILE_RULES.cnicFile} />
                    <FileUpload label="Academic Transcript" name="transcript" file={formData.transcript} onChange={handleFieldChange} error={errors.transcript} rule={FILE_RULES.transcript} />
                </div>
            </section>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button type="button" variant="secondary" onClick={handleSaveDraft}>
                    Save Draft
                </Button>
                <Button type="submit">Submit Application</Button>
            </div>
        </form>
    )
}
