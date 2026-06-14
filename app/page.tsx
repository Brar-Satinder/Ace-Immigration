'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-dark-bg">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gold-gradient">♠ ACE</span> Immigration
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Your Trusted Partner for Australian Visa Success
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Expert guidance on all Australian visa types. From skilled migration to family visas, we help you navigate your immigration journey with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/consultation" className="btn-gold text-lg">
              Book Free Consultation
            </Link>
            <Link href="/visas" className="btn-gold-outline text-lg">
              Explore Visa Types
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Ace Immigration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Visa Calculator',
                description: 'Get instant eligibility assessment for all visa types'
              },
              {
                icon: '📋',
                title: 'Document Guide',
                description: 'Complete checklist of required documents for each visa'
              },
              {
                icon: '👨‍💼',
                title: 'Expert Agents',
                description: 'One-on-one consultation with experienced immigration agents'
              },
              {
                icon: '⚡',
                title: 'Fast Processing',
                description: 'Quick turnaround on document reviews and applications'
              },
              {
                icon: '💯',
                title: 'Success Rate',
                description: '95% success rate in visa applications'
              },
              {
                icon: '🌍',
                title: 'Global Support',
                description: '24/7 support from anywhere in the world'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-dark-tertiary rounded-lg border border-gold/30 hover:border-gold transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Australian Visa Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Skilled Migration', icon: '🎓' },
              { name: 'Family Visas', icon: '👨‍👩‍👧‍👦' },
              { name: 'Business Visas', icon: '💼' },
              { name: 'Student Visas', icon: '📚' },
              { name: 'Partner Visas', icon: '💑' },
              { name: 'Visitor Visas', icon: '✈️' }
            ].map((visa, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-r from-dark-secondary to-dark-tertiary rounded-lg border border-gold/20 hover:border-gold transition cursor-pointer"
              >
                <div className="text-4xl mb-4">{visa.icon}</div>
                <h3 className="text-xl font-bold text-gold">{visa.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/visas" className="btn-gold text-lg">
              View All Visa Details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation with our immigration experts today
          </p>
          <Link href="/consultation" className="btn-gold text-lg">
            Schedule Consultation Now
          </Link>
        </div>
      </section>
    </main>
  )
}
