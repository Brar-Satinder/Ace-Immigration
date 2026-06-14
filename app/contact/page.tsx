'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-dark-bg py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-accent-blue">Contact Us</h1>
        <p className="text-center text-gray-400 mb-16">Get in touch with our immigration experts</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">info@aceimmigration.com</p>
            </div>

            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+61 (0) 2 XXXX XXXX</p>
            </div>

            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-blue">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <p className="text-gray-400">Sydney, Australia</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-secondary rounded-lg p-8 border border-accent-blue">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none" />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-dark-bg text-white p-3 rounded-lg border border-gray-700 focus:border-accent-blue outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Send Message
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-green-900 border border-green-500 rounded-lg text-green-200">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
