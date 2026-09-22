// ---------- Choices shown in the dropdown menus ----------
export const GENDERS = ['Male', 'Female', 'Other']

export const QUALIFICATIONS = [
    'Matriculation / O-Levels',
    'Intermediate / A-Levels',
    "Bachelor's Degree",
    "Master's Degree",
]

export const PROGRAMS = [
    'BS Computer Science',
    'BS Software Engineering',
    'BS Artificial Intelligence',
    'BS Data Science',
    'BBA',
    'BS Psychology',
]

export const INTAKES = ['Spring 2027', 'Fall 2027', 'Spring 2028']

export const COUNTRIES = [
    'Pakistan',
    'United Arab Emirates',
    'Saudi Arabia',
    'United Kingdom',
    'United States',
    'Canada',
    'Australia',
]

// ---------- Rules for the three uploads ----------
export const FILE_RULES = {
    profilePhoto: {
        label: 'Profile photo',
        types: ['image/jpeg', 'image/png'],
        typesText: 'JPG or PNG',
        maxMB: 2,
    },
    cnicFile: {
        label: 'CNIC copy',
        types: ['image/jpeg', 'image/png', 'application/pdf'],
        typesText: 'JPG, PNG or PDF',
        maxMB: 5,
    },
    transcript: {
        label: 'Academic transcript',
        types: ['image/jpeg', 'image/png', 'application/pdf'],
        typesText: 'JPG, PNG or PDF',
        maxMB: 5,
    },
}

// ---------- The form starts empty ----------
// Every field of the form is listed here. We'll use these exact names in the next steps.
export const initialFormValues = {
    // Personal information
    fullName: '',
    cnic: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',

    // Academic information
    qualification: '',
    institution: '',
    percentage: '',

    // Program selection
    program: '',
    intake: '',

    // Address
    address: '',
    city: '',
    country: '',

    // Documents (a file, or null when nothing is chosen)
    profilePhoto: null,
    cnicFile: null,
    transcript: null,
}