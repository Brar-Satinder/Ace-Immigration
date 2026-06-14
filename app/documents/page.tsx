'use client'

import { motion } from 'framer-motion'

const documentTypes = [
  {
    category: 'Personal Documents',
    icon: '📄',
    items: [
      'Valid passport',
      'Birth certificate (notarized)',
      'National ID card',
      'Marriage certificate (if applicable)',
      'Divorce documents (if applicable)'
    ]
  },
  {
    category: 'Education & Qualifications',
    icon: '🎓',
    items: [
      'Degree certificates',
      'Transcripts',
      'English language test results (IELTS, TOEFL)',
      'Skills assessment letter',
      'Professional certifications'
    ]
  },
  {
    category: 'Employment Documents',
    icon: '💼',
    items: [
      'Employment contracts',
      'Reference letters (2-3)',
      'Pay slips (last 6 months)',
      'Tax returns (last 2 years)',
      'Job advertisement'
    ]
  },
  {
    category: 'Financial Documents',
    icon: '💰',
    items: [
      'Bank statements (last 3 months)',
      'Proof of funds',
      'Investment documents',
      'Property documents',
      'Tax return documents'
    ]
  },
  {
    category: 'Health & Character',
    icon: '⚕️',
    items: [
      'Medical examination (Form 26)',
      'Chest X-ray (if required)',
      'Police clearance certificate',
      'Character references',
      'Driving records'
    ]
  },
  {
    category: 'Visa-Specific Documents',
    icon: '🎫',
    items: [
      'Offer of employment letter',
      'Sponsorship documents',
      'Proof of relationship (for partner visa)',
      'Nomination approval',
      'Family documents'
    ]
  }
]

export default function Documents() {
  return (
    <main className="bg-dark-bg">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-secondary to-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Required Documents</span>
          </h1>
          <p className="text-xl text-gray-300">
            Complete checklist of documents needed for your visa application
          </p>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-secondary border border-gold/30 rounded-lg p-6 hover:border-gold transition"
              >
                <div className="text-5xl mb-4">{docType.icon}</div>
                <h3 className="text-2xl font-bold text-gold mb-4">{docType.category}</h3>
                <ul className="space-y-2">
                  {docType.items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Important Notes</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 bg-dark-tertiary border-l-4 border-gold rounded"
            >
              <h3 className="text-xl font-bold text-gold mb-2">Document Authenticity</h3>
              <p className="text-gray-300">All documents must be authentic. Fraudulent documents will result in visa cancellation and potential legal action.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-dark-tertiary border-l-4 border-gold rounded"
            >
              <h3 className="text-xl font-bold text-gold mb-2">Translation & Notarization</h3>
              <p className="text-gray-300">Non-English documents must be translated by a certified translator. Some documents require notarization.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-dark-tertiary border-l-4 border-gold rounded"
            >
              <h3 className="text-xl font-bold text-gold mb-2">Document Expiry</h3>
              <p className="text-gray-300">Ensure all documents are current and valid. Expired documents may cause delays in processing.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-dark-tertiary border-l-4 border-gold rounded"
            >
              <h3 className="text-xl font-bold text-gold mb-2">Professional Assistance</h3>
              <p className="text-gray-300">Our immigration agents can guide you through document preparation and ensure everything is in order.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
