'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '189',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        visaType: '189',
        preferredDate: '',
        preferredTime: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <main className="bg-dark-bg">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-secondary to-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient">Book Your Consultation</span>
          </h1>
          <p className="text-xl text-gray-300">
            Get personalized guidance from our immigration experts
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-secondary border border-gold/30 rounded-lg p-8"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                    placeholder="+61 2 XXXX XXXX"
                  />
                </div>

                {/* Visa Type */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Interested Visa Type *</label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                  >
                    <option value="189">Skilled Independent (189)</option>
                    <option value="190">Skilled Nominated (190)</option>
                    <option value="482">Employer Sponsored (482)</option>
                    <option value="801">Partner Visa (801)</option>
                    <option value="103">Family Visa (103)</option>
                    <option value="500">Student Visa (500)</option>
                    <option value="600">Visitor Visa (600)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                  >
                    <option value="">Select a time</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gold font-semibold mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-dark-tertiary border border-gold/30 rounded px-4 py-2 text-white focus:border-gold outline-none"
                    placeholder="Tell us about your immigration goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-3 text-lg font-semibold"
                >
                  Book Free Consultation
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-3xl font-bold text-gold mb-4">Booking Confirmed!</h2>
                <p className="text-gray-300 mb-4">
                  Thank you {formData.name}! We've received your consultation request.
                </p>
                <p className="text-gray-400">
                  Our team will contact you at {formData.phone} to confirm your appointment.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Consult */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Book a Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '👥', title: 'Expert Guidance', desc: 'Get personalized advice from experienced immigration agents' },
              { icon: '📊', title: 'Assessment', desc: 'Detailed evaluation of your eligibility and visa options' },
              { icon: '📋', title: 'Document Review', desc: 'Professional review of your documents and requirements' },
              { icon: '💡', title: 'Strategy', desc: 'Custom strategy to maximize your visa approval chances' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-dark-tertiary border border-gold/30 rounded-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
