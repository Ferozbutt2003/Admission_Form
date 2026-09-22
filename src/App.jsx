import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AdmissionForm from './pages/AdmissionForm'
import ApplicationReview from './pages/ApplicationReview'
import SuccessPage from './pages/SuccessPage'
import { initialFormValues } from './data/options'

export default function App() {
  // The entire form lives here, so every page can read it
  const [formData, setFormData] = useState(initialFormValues)

  function handleChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
        <Routes>
          <Route
            path="/"
            element={<AdmissionForm formData={formData} onChange={handleChange} />}
          />
          <Route path="/review" element={<ApplicationReview formData={formData} />} />
          <Route path="/success" element={<SuccessPage formData={formData} />} />
        </Routes>
      </main>
    </div>
  )
}
