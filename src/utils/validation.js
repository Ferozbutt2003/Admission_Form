import { FILE_RULES } from '../data/options'

// ---------- Small format checks ----------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[0-9]{7,15}$/
const CNIC_RE = /^\d{5}-\d{7}-\d{1}$/

function isFutureDate(dateStr) {
    if (!dateStr) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return new Date(dateStr) > today
}

function checkFile(file, rule) {
    if (!file) return `${rule.label} is required`
    if (!rule.types.includes(file.type)) return `${rule.label} must be ${rule.typesText}`
    if (file.size > rule.maxMB * 1024 * 1024) return `${rule.label} must be under ${rule.maxMB}MB`
    return null
}


export function validateForm(values) {
    const errors = {}

    // Personal information
    if (!values.fullName?.trim()) errors.fullName = 'Full name is required'
    if (!CNIC_RE.test(values.cnic || '')) errors.cnic = 'CNIC must look like 12345-1234567-1'
    if (!values.dob) errors.dob = 'Date of birth is required'
    else if (isFutureDate(values.dob)) errors.dob = 'Date of birth cannot be in the future'
    if (!values.gender) errors.gender = 'Please select a gender'
    if (!EMAIL_RE.test(values.email || '')) errors.email = 'Enter a valid email address'
    if (!PHONE_RE.test(values.phone || '')) errors.phone = 'Enter a valid phone number'

    // Academic information
    if (!values.qualification) errors.qualification = 'Please select a qualification'
    if (!values.institution?.trim()) errors.institution = 'Institution is required'
    const pct = Number(values.percentage)
    if (values.percentage === '' || Number.isNaN(pct) || pct < 0 || pct > 100) {
        errors.percentage = 'Enter a percentage between 0 and 100'
    }

    // Program selection
    if (!values.program) errors.program = 'Please select a program'
    if (!values.intake) errors.intake = 'Please select an intake'

    // Address
    if (!values.address?.trim()) errors.address = 'Address is required'
    if (!values.city?.trim()) errors.city = 'City is required'
    if (!values.country) errors.country = 'Please select a country'

    // Documents
    const photoError = checkFile(values.profilePhoto, FILE_RULES.profilePhoto)
    if (photoError) errors.profilePhoto = photoError
    const cnicFileError = checkFile(values.cnicFile, FILE_RULES.cnicFile)
    if (cnicFileError) errors.cnicFile = cnicFileError
    const transcriptError = checkFile(values.transcript, FILE_RULES.transcript)
    if (transcriptError) errors.transcript = transcriptError

    return errors
}

// Convenience helper other components can use
export function isFormValid(values) {
    return Object.keys(validateForm(values)).length === 0
}
