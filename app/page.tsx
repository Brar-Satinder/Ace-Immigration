'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-dark-bg text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-dark-bg to-dark-secondary">
        <div className="max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent-blue">
            Your Australian Immigration Journey Starts Here
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert guidance for Australian visas, permanent residency, and citizenship. Navigate your immigration process with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visa-calculator" className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition">
              Start Visa Calculator
            </Link>
            <Link href="/contact" className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 rounded-lg font-bold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-accent-blue">Why Choose Ace Immigration?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-bg p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4 text-accent-blue">👥</div>
              <h3 className="text-xl font-bold mb-3">Expert Consultants</h3>
              <p className="text-gray-400">Licensed immigration consultants with 10+ years of experience.</p>
            </div>
            <div className="bg-dark-bg p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4 text-accent-blue">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Experience</h3>
              <p className="text-gray-400">Successfully assisted 5000+ clients achieve their Australian dreams.</p>
            </div>
            <div className="bg-dark-bg p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4 text-accent-blue">🔒</div>
              <h3 className="text-xl font-bold mb-3">100% Confidential</h3>
              <p className="text-gray-400">Your information is secure and protected at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-accent-blue">Popular Visa Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Skilled Migration', 'Work Visa', 'Student Visa', 'Partner Visa'].map((visa) => (
              <div key={visa} className="bg-dark-secondary p-6 rounded-lg border border-gray-700 hover:border-accent-blue transition">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-lg font-bold mb-2">{visa}</h3>
                <p className="text-sm text-gray-400">Comprehensive assessment and support</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Immigration Journey?</h2>
          <p className="text-gray-300 mb-8">Get a free consultation with our immigration experts today</p>
          <Link href="/contact" className="inline-block bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
