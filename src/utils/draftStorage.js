const DRAFT_KEY = 'admissionFormDraft'

// File objects can't be saved to localStorage, so these fields are skipped
const FILE_FIELDS = ['profilePhoto', 'cnicFile', 'transcript']

export function saveDraft(formData) {
    const draftData = { ...formData }
    FILE_FIELDS.forEach((field) => delete draftData[field])
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draftData))
}

export function loadDraft() {
    const saved = localStorage.getItem(DRAFT_KEY)
    return saved ? JSON.parse(saved) : null
}

export function hasDraft() {
    return localStorage.getItem(DRAFT_KEY) !== null
}

export function clearDraft() {
    localStorage.removeItem(DRAFT_KEY)
}