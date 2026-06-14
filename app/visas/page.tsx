'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const visas = [
  {
    name: 'Skilled Migration (189)',
    icon: '🎓',
    description: 'Points-based independent skilled visa',
    requirements: [
      'Occupation on MLTSSL',
      '65+ points',
      'English language requirements',
      'Skills assessment'
    ],
    processing: '12-24 months',
    cost: '$4,290'
  },
  {
    name: 'Employer Sponsored (482)',
    icon: '💼',
    description: 'Temporary Skill Shortage visa',
    requirements: [
      'Employer nomination',
      'Job offer',
      'English language skills',
      'Meeting minimum salary'
    ],
    processing: '8-12 weeks',
    cost: '$495'
  },
  {
    name: 'Spouse/Partner (801)',
    icon: '💑',
    description: 'For Australian citizens married partners',
    requirements: [
      'Genuine relationship',
      'Health and character requirements',
      'English language test',
      'Financial security'
    ],
    processing: '12-18 months',
    cost: '$7,715'
  },
  {
    name: 'Family Visas (103)',
    icon: '👨‍👩‍👧‍👦',
    description: 'Sponsor family members to Australia',
    requirements: [
      'Sponsor must be Australian citizen/PR',
      'Meet health requirements',
      'Pass character requirements',
      'Financial sponsorship'
    ],
    processing: '2-4 years',
    cost: '$3,600+'
  },
  {
    name: 'Student Visa (500)',
    icon: '📚',
    description: 'Study full-time at Australian institutions',
    requirements: [
      'Enrollment confirmation',
      'English language proficiency',
      'Financial capacity',
      'Health insurance'
    ],
    processing: '4-12 weeks',
    cost: '$620'
  },
  {
    name: 'Visitor Visa (600)',
    icon: '✈️',
    description: 'Visit Australia for tourism or business',
    requirements: [
      'Valid passport',
      'Financial evidence',
      'Health requirements',
      'Character requirements'
    ],
    processing: '2-8 weeks',
    cost: '$190-$365'
  }
]

export default function Visas() {
  return (
    <main className="bg-dark-bg">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-secondary to-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Australian Visa Types</span>
          </h1>
          <p className="text-xl text-gray-300">
            Explore all available Australian visa options and find the right fit for your immigration goals
          </p>
        </div>
      </section>

      {/* Visa Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.map((visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-secondary border border-gold/30 rounded-lg p-6 hover:border-gold hover:shadow-lg hover:shadow-gold/20 transition"
              >
                <div className="text-5xl mb-4">{visa.icon}</div>
                <h3 className="text-2xl font-bold text-gold mb-2">{visa.name}</h3>
                <p className="text-gray-300 mb-4">{visa.description}</p>
                
                <div className="mb-4 pb-4 border-b border-dark-tertiary">
                  <h4 className="text-gold font-semibold mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {visa.requirements.map((req, i) => (
                      <li key={i}>✓ {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Processing Time</p>
                    <p className="text-gold font-semibold">{visa.processing}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Visa Cost</p>
                    <p className="text-gold font-semibold">{visa.cost}</p>
                  </div>
                </div>

                <Link href="/consultation" className="btn-gold w-full text-center">
                  Consult About This
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which visa is right for you?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Use our visa calculator to assess your eligibility
          </p>
          <Link href="/calculator" className="btn-gold text-lg">
            Take the Visa Calculator
          </Link>
        </div>
      </section>
    </main>
  )
}
