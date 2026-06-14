'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gold mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gold-gradient mb-2">♠ ACE Immigration</h3>
            <p className="text-gray-400">Expert Australian immigration consultation</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/visas" className="text-gray-400 hover:text-gold">Visa Types</Link></li>
              <li><Link href="/calculator" className="text-gray-400 hover:text-gold">Calculator</Link></li>
              <li><Link href="/documents" className="text-gray-400 hover:text-gold">Documents</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/consultation" className="text-gray-400 hover:text-gold">Consultation</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">📧 info@aceimmigration.com</p>
            <p className="text-gray-400 mb-2">📞 +61 2 XXXX XXXX</p>
            <p className="text-gray-400">🕐 Mon-Fri: 9AM-6PM AEST</p>
          </div>
        </div>

        <div className="border-t border-dark-tertiary pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ace Immigration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
