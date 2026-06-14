'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Calculator() {
  const [visaType, setVisaType] = useState('189')
  const [age, setAge] = useState('30')
  const [english, setEnglish] = useState('proficient')
  const [experience, setExperience] = useState('3')
  const [qualification, setQualification] = useState('bachelor')
  const [result, setResult] = useState(null)

  const calculatePoints = () => {
    let points = 0

    // Age points
    const ageNum = parseInt(age)
    if (ageNum >= 25 && ageNum <= 32) points += 30
    else if (ageNum >= 33 && ageNum <= 37) points += 25
    else if (ageNum >= 38 && ageNum <= 42) points += 20
    else if (ageNum >= 43 && ageNum <= 44) points += 15

    // English points
    if (english === 'proficient') points += 0
    else if (english === 'competent') points += 10
    else if (english === 'superior') points += 20

    // Experience points
    const expNum = parseInt(experience)
    if (expNum >= 1 && expNum < 3) points += 5
    else if (expNum >= 3 && expNum < 5) points += 10
    else if (expNum >= 5 && expNum < 8) points += 15
    else if (expNum >= 8) points += 20

    // Qualification points
    if (qualification === 'bachelor') points += 15
    else if (qualification === 'master') points += 20
    else if (qualification === 'phd') points += 25

    setResult({
      points,
      eligible: points >= 65,
      message: points >= 65 
        ? `You have ${points} points! You're likely eligible for skilled migration visas.`
        : `You have ${points} points. You need 65 points for skilled migration. Consider improving your English or gaining more work experience.`
    })
  }

  return (
    <main className="bg-dark-bg">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-secondary to-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Visa Points Calculator</span>
          </h1>
          <p className="text-xl text-gray-300">
            Assess your eligibility for Australian skilled migration visas
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-secondary border border-gold/30 rounded-lg p-8"
          >
            <div className="space-y-6">
              {/* Visa Type */}
              <div>
                <label className="block text-gold font-semibold mb-2">Visa Type</label>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value)}
                  className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                >
                  <option value="189">Skilled Independent (189)</option>
                  <option value="190">Skilled Nominated (190)</option>
                  <option value="491">Skilled Work Regional (491)</option>
                </select>
              </div>

              {/* Age */}
              <div>
                <label className="block text-gold font-semibold mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="65"
                  className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                />
              </div>

              {/* English Level */}
              <div>
                <label className="block text-gold font-semibold mb-2">English Level</label>
                <select
                  value={english}
                  onChange={(e) => setEnglish(e.target.value)}
                  className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                >
                  <option value="proficient">Proficient (0 points)</option>
                  <option value="competent">Competent (10 points)</option>
                  <option value="superior">Superior (20 points)</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gold font-semibold mb-2">Work Experience (years)</label>
                <input
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  min="0"
                  max="20"
                  className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-gold font-semibold mb-2">Highest Qualification</label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                >
                  <option value="diploma">Diploma (10 points)</option>
                  <option value="bachelor">Bachelor (15 points)</option>
                  <option value="master">Master (20 points)</option>
                  <option value="phd">PhD (25 points)</option>
                </select>
              </div>

              <button
                onClick={calculatePoints}
                className="btn-gold w-full py-3 text-lg font-semibold"
              >
                Calculate My Points
              </button>
            </div>

            {/* Results */}
            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 p-6 bg-dark-tertiary border border-gold/50 rounded-lg"
              >
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-gold mb-2">{result.points}</p>
                  <p className="text-gray-300 text-lg">{result.message}</p>
                </div>
                {result.eligible && (
                  <div className="text-center">
                    <p className="text-gold font-semibold mb-4">Great news! Book a consultation to explore your options.</p>
                    <Link href="/consultation" className="btn-gold">
                      Book Free Consultation
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Points Are Calculated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-dark-tertiary border border-gold/30 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-4">Age Points</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>25-32: 30 points</li>
                <li>33-37: 25 points</li>
                <li>38-42: 20 points</li>
                <li>43-44: 15 points</li>
              </ul>
            </div>
            <div className="p-6 bg-dark-tertiary border border-gold/30 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-4">English Proficiency</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Proficient: 0 points</li>
                <li>Competent: 10 points</li>
                <li>Superior: 20 points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
