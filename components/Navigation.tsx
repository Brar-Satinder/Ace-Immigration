'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark-secondary border-b border-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gold-gradient">♠ ACE</div>
            <span className="text-sm text-gold">Immigration</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/visas" className="text-white hover:text-gold transition">Visa Types</Link>
            <Link href="/calculator" className="text-white hover:text-gold transition">Calculator</Link>
            <Link href="/documents" className="text-white hover:text-gold transition">Documents</Link>
            <Link href="/blog" className="text-white hover:text-gold transition">Blog</Link>
            <Link href="/about" className="text-white hover:text-gold transition">About</Link>
          </div>

          {/* CTA Button */}
          <Link href="/consultation" className="hidden md:block btn-gold">
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/visas" className="block text-white hover:text-gold py-2">Visa Types</Link>
            <Link href="/calculator" className="block text-white hover:text-gold py-2">Calculator</Link>
            <Link href="/documents" className="block text-white hover:text-gold py-2">Documents</Link>
            <Link href="/blog" className="block text-white hover:text-gold py-2">Blog</Link>
            <Link href="/about" className="block text-white hover:text-gold py-2">About</Link>
            <Link href="/consultation" className="block btn-gold text-center mt-4">
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
