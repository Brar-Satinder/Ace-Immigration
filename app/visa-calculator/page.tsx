'use client'

import { useState } from 'react'

export default function VisaCalculator() {
  const [visaType, setVisaType] = useState('')
  const [age, setAge] = useState('')
  const [experience, setExperience] = useState('')
  const [ielts, setIelts] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const calculateScore = (e: React.FormEvent) => {
    e.preventDefault()
    
    let score = 0
    
    if (Number(age) >= 25 && Number(age) <= 32) score += 30
    else if (Number(age) >= 23 && Number(age) < 25) score += 25
    else if (Number(age) > 32 && Number(age) <= 39) score += 25
    
    score += Number(experience) * 5
    score += Number(ielts) * 10

    if (score >= 65) {
      setResult(`✅ Excellent! Your score: ${score}. You likely qualify for skilled migration.`)
    } else if (score >= 50) {
      setResult(`⚠️ Good prospects! Your score: ${score}. Consider improving English or experience.`)
    } else {
      setResult(`❌ Current score: ${score}. Recommendations: Improve IELTS or gain more experience.`)
    }
  }

  return (
    <main className="min-h-screen bg-dark-bg py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-accent-blue">Australian Visa Calculator</h1>
        <p className="text-center text-gray-400 mb-12">Get an initial assessment of your eligibility</p>

        <div className="bg-dark-secondary rounded-lg p-8 border border-accent-blue">
          <form onSubmit={calculateScore} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2">Visa Type</label>
              <select value={visaType} onChange={(e) => setVisaType(e.target.value)} required className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none">
                <option value="">Select a visa type</option>
                <option value="skilled">Skilled Migration (189/190/491)</option>
                <option value="work">Work Visa (482/494)</option>
                <option value="student">Student Visa (500)</option>
                <option value="partner">Partner Visa (820/801)</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Age</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" required className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Work Experience (Years)</label>
              <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Years of relevant experience" required className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">IELTS Score</label>
              <input type="number" step="0.5" value={ielts} onChange={(e) => setIelts(e.target.value)} placeholder="e.g., 6.5, 7.0, 8.0" required min="0" max="9" className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
            </div>

            <button type="submit" className="w-full bg-accent-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
              Calculate Score
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-dark-bg rounded-lg border-l-4 border-accent-blue">
              <p className="text-lg text-white">{result}</p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-dark-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-accent-blue mb-6">Important Notes</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• This is a preliminary assessment only</li>
            <li>• Actual eligibility depends on multiple factors</li>
            <li>• Consult with our experts for accurate evaluation</li>
            <li>• Points requirements vary by visa category and year</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
